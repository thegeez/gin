(ns gin.lobby
  (:require [clojure.tools.logging :refer [debug spy]]
            [gin.util.helpers :as h]
            [gin.util.layout :as l]
            [gin.common :as c]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as lib-rep]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [clojure.core.async :refer [go <! >! chan timeout close! alts!] :as async]
            [datomic.api :refer [db q] :as d]))

(defn lookup-friend-identity [conn creds]
  (let [username (:username creds)
        slug (h/slugify username)]
    (debug "looking up username: " username slug)
    ;; return nil if assigning this username failed
    (try (when (seq slug)
           @(d/transact conn [[:register-username username slug]])
           {:username username
            :slug slug
            :roles #{slug}})
         (catch Exception e
           nil))))

(def local-game-html (-> (html/html-resource "templates/local_game.html")
                    (html/select [:#content])))

(def login-html (-> (html/html-resource "templates/login.html")
                    (html/select [:#content])))

(defn login-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content login-html)
   [:#local-game] (html/content local-game-html)
   [:form#login-form] (html/do->
                       (html/set-attr :method "POST")
                       (html/set-attr :action "/login"))
   [:div#login-panel]
   (let [username (get-in ctx [:request :params :username])
         failed (when (get-in ctx [:request :params :login_failed])
                  "Can't use this username, pick another one")]
     (debug "username: " username failed)
          (html/transform-content
           [:div#username] (l/maybe-error failed)
           [:div#username :input] (html/set-attr :value username)
))))

(defresource login-page
  :available-media-types ["text/html"]
  ;; redirect logged in users to lobby directly
  :exists? (fn [ctx]
             (not (friend/identity (get ctx :request))))
  :handle-not-found (fn [ctx]
                      {:status 303
                       :headers {"Location" "/"}})
  :as-response (l/as-template-response login-layout))

(def lobby-html (-> (html/html-resource "templates/lobby.html")
                    (html/select [:#content])))

(defn lobby-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content lobby-html)
   [:#local-game] (html/content local-game-html)
   [:#rai-form] (html/do->
                 (html/set-attr :method "POST")
                 (html/set-attr :action "/remote-ai"))
   [:#csrf-token] (html/set-attr :value (get-in ctx [:request :session "__anti-forgery-token"]))))

(def registering-required
  {:authorized? (fn [ctx]
                  (friend/identity (get ctx :request)))
   :handle-unauthorized (fn [ctx]
                          (friend/throw-unauthorized
                           (friend/identity (get ctx :request))
                           {}))
   :allowed? (fn [ctx]
               (friend/identity (get ctx :request)))
   :handle-forbidden (fn [ctx]
                       (friend/throw-unauthorized
                        (friend/identity (get ctx :request))
                        {}))})

(defresource lobby-page
  registering-required
  :available-media-types ["text/html"]
  :as-response (l/as-template-response lobby-layout))

(defresource remote-ai-page
  registering-required
  :available-media-types ["text/html"]
  :allowed-methods [:post]
  :post! (fn [ctx]
           (let [conn (h/conn ctx)
                 slug (:slug (friend/current-authentication (get ctx :request)))
                 res @(d/transact conn [[:game-created slug "remote-ai" :lobby-remote-ai]])
                 game-id (ffirst (d/q '{:find [?game-id]
                                        :in [$ [?e ...]]
                                        :where [[?e :game/id ?game-id]]}
                                      (:db-after res) (vals (:tempids res))))]
             {:game-id game-id}))
  :post-redirect? true
  :handle-see-other (fn [ctx]
                      (let [uri (str "/games/" (:game-id ctx))]
                        {:headers {"Location" uri}
                         :status 303}))
  :as-response (l/as-template-response nil))

(defresource invite-action
  registering-required
  :available-media-types ["text/html"]
  :allowed-methods [:post]
  :post! (fn [ctx]
           (let [conn (h/conn ctx)
                 db (d/db conn)
                 slug (:slug (friend/current-authentication (get ctx :request)))
                 opp-slug (get-in ctx [:request :params :opp-slug])]
             @(d/transact conn [[:db/add [:account/slug slug]
                                 :lobby/invites [:account/slug opp-slug]]])))
  :as-response (l/as-template-response nil))

(defresource lobby-events
  registering-required
  :available-media-types ["text/event-stream"]
  :handle-ok (fn [ctx]
               (lib-rep/ring-response
                {:status 200
                 :headers {"Content-Type" "text/event-stream"
                           "Cache-Control" "no-cache"
                           "Connection" "keep-alive"}
                 :body (let [out (chan)
                             conn (get-in ctx [:request :conn])
                             db (db conn)
                             listen (get-in ctx [:request :listen])
                             slug (:slug (friend/current-authentication (get-in ctx [:request])))
                             us (d/entity db [:account/slug slug])
                             start-from (d/basis-t db)
                             lobby (d/entid db :lobby)
                             present-attr (d/entid db :lobby/present)]
                         (let [res @(d/transact conn [[:db/retract lobby :lobby/present (:db/id us)]])
                               res2 @(d/transact conn [[:db/add lobby :lobby/present (:db/id us)]])])
                         (let [opps (q '{:find [?e ?slug ?username]
                                         :in [$ ?cut-off]
                                         :where [[:lobby :lobby/present ?e ?tx]
                                                 [?e :account/slug ?slug]
                                                 [?e :account/username ?username]
                                                 [?tx :db/txInstant ?tx-inst]
                                                 [(.getTime ^java.util.Date ?tx-inst) ?tx-time]
                                                 [(< ?cut-off ?tx-time)]]}
                                       db (- (.getTime (java.util.Date.))
                                             (* 4 
                                                
                                                1/12
                                                60 1000)))
                               us-e (:db/id us)
                               opps (for [[opp-e opp-slug opp-username] opps
                                          :when (not= opp-e us-e)]
                                      {:slug opp-slug
                                       :username (str opp-username " from start")
                                       :invited (boolean (ffirst (q
                                                                  '{:find [?opp-e ?us-e]
                                                                    :in [$ ?opp-e ?us-e]
                                                                    :where [[?us-e :account/invites ?opp-e]]}
                                                                  db opp-e us-e)))})]
                           (debug "SEND out opp is present" opps "to" out)
                           (async/put! out (str  "data: "
                                                 (pr-str {:type :open
                                                          :opps opps})
                                                 "\r\n\r\n")))
                         (debug "LEts listen " slug)
                         (let [in (chan)
                               report-to-msg (fn [report] 
                                               (let [tx-data (:tx-data report)
                                                     db (:db-after report)]
                                                 (debug "TX_DATA???" slug 
                                                        (pr-str (for [d tx-data]
                                                                  (pr-str d)))
                                                        lobby
                                                        present-attr
                                                        (:db/id us))
                                                 (some
                                                  (fn [[e a v _ added]]
                                                    (cond
                                                     (and added
                                                          (= e lobby)
                                                          (= a present-attr)
                                                          (not= v (:db/id us)))
                                                     (let [opp (d/entity db v)]
                                                       (str "data: "
                                                            (spy (str {:type :joined
                                                                       :slug (:account/slug opp)
                                                                       :username (:account/username opp)}))
                                                            "\r\n\r\n")))
                                                    )
                                                  tx-data)))]
                           (go (loop []
                                 (when-let [report (<! in)]
                                   (let [msg (report-to-msg report)]
                                     (if msg
                                       (when-not (>! out msg)
                                         (close! in))))
                                   (recur))))
                           (async/tap listen in))
                         out)})))

(def cljs-page-html (html/html-resource "templates/clojurescript_ai.html"))

(defn cljs-page-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content (html/select cljs-page-html [:#content]))))

(defresource cljs-page
  :available-media-types ["text/html"]
  :handle-ok {}
  :as-response (l/as-template-response cljs-page-layout))

(defroutes lobby-routes
  (ANY "/" _ lobby-page)
  (ANY "/lobby/invite" _ invite-action)
  #_(ANY "/lobby/play" _ play-action)
  (ANY "/lobby/events" _ lobby-events)
  (ANY "/login" _ login-page)
  (ANY "/clojurescript-ai" _ cljs-page)
  (ANY "/remote-ai" _ remote-ai-page))
