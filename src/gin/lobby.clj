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
            [clojure.core.async :refer [go <! >! chan timeout close!] :as async]
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
   [:div.login-panel]
   (let [username (get-in ctx [:request :params :username])
         failed (when (get-in ctx [:request :params :login_failed])
                  "Can't use this username, pick another one")]
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
                 (html/set-attr :action "/remote-ai"))))

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
  (ANY "/login" _ login-page)
  (ANY "/clojurescript-ai" _ cljs-page)
  (ANY "/remote-ai" _ remote-ai-page))
