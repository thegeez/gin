(ns gin.core
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [gin.system.ring :as ring]
            [gin.system.ring.jetty-async-adapter :as jetty-async-adapter]
            [gin.system.server :as server]
            [gin.system.database-datomic :as database-datomic]
            [gin.dealer :as dealer]
            [gin.ai :as ai]
            [gin.lobby :as lobby]
            [gin.games :as games]
            [compojure.core :as compojure]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]
            [cemerick.friend.credentials :as credentials]
            [datomic.api :as d]))

(compojure/defroutes main-routes
  lobby/lobby-routes
  games/games-routes
  (compojure/ANY "*" _ "Not found")
  )

(defn main-handler []
  (-> #'main-routes
      ((fn save-friend-session [handler]
         (fn friend-session [req]
           (let [res (handler req)]
             (if (contains? (get res :session) ::friend/identity)
               res
               (if-let [auth (get-in req [:session ::friend/identity])]
                 (assoc-in res [:session ::friend/identity] auth)
                 res)
               )))))
      (friend/authenticate {:login-uri "/login"
                            :default-landing-uri "/"
                            :workflows [(fn [req]
                                          ((workflows/interactive-form
                                            :credential-fn (fn friend-credential-fn [creds]
                                                             (lobby/lookup-friend-identity (:conn req) creds)))
                                           req))]})

      ring/wrap-common))

(defn dev-handler []
  (-> (main-handler)
      ring/wrap-dev
      (ring/wrap-dev-cljs
       "<script type=\"text/javascript\" src=\"/public/js/gin.js\"></script>"
       "<script src=\"http://fb.me/react-0.9.0.js\"></script>
        <script src=\"/public/js/gin-dev.js\" type=\"text/javascript\"></script>
        <script type=\"text/javascript\">goog.require('gin.core');</script>")))

(defrecord DevDBFixtures [database]
  component/Lifecycle
  (start [component]
    (info "Insert test fixtures")
    (let [conn (:connection database)]
      @(d/transact conn
                   (let [event-id (d/tempid :db.part/user)
                         game-id (d/tempid :db.part/user)
                         p1-id (d/tempid :db.part/user)
                         p2-id (d/tempid :db.part/user)
                         tx-id (d/tempid :db.part/tx)]
                     [{:db/id event-id
                       :event/type :game-created
                       :event/game game-id
                       :event/tx tx-id
                       :event/by :migrations}
                      {:db/id game-id
                       :game/id "fix1"
                       :game/player1 p1-id
                       :game/player2 p2-id
                       :game/to-start p1-id
                       :game/last-event event-id}
                      {:db/id p1-id
                       :account/slug "user1"
                       :account/username "User One"}
                      {:db/id p2-id
                       :account/slug "user2"
                       :account/username "Player Two"}])))
    component)
  (stop [component]
    (info "Not bothering to remove test fixtures")
    component))

(defn dev-db-fixtures []
  (map->DevDBFixtures {}))

(defrecord GinSystem []
  component/Lifecycle
  (start [this]
    (component/start-system this (filter (partial satisfies? component/Lifecycle) (keys this))))
  (stop [this]
    (component/stop-system this (filter (partial satisfies? component/Lifecycle) (keys this)))))

(defn dev-gin-system [config-options]
  (info "Hello world!")
  (let [{:keys [db-connect-string port]} config-options]
    (map->GinSystem
      {:config-options config-options
       :db (database-datomic/database-datomic db-connect-string)
       :db-migrator (component/using
                     (database-datomic/dev-migrator)
                     {:database :db})
       :db-fixtures (component/using
                     (dev-db-fixtures)
                     {:database :db
                      :db-migrator :db-migrator
                      :dealer :dealer})
       :dealer (component/using
                (dealer/dealer)
                {:database :db
                 :db-migrator :db-migrator})
       :ai (component/using
            (ai/ai)
            {:database :db
             :db-migrator :db-migrator})
       :ring-handler (component/using
                      (ring/ring-handler (dev-handler))
                      {:database :db})
       :server (component/using
                (jetty-async-adapter/async-jetty port)
                {:handler :ring-handler})})))

(def dev-config {:db-connect-string "datomic:mem://gin-local" :port 3000})

(defn gin-system [config-options]
  (info "Hello world, this is the production system!")
  (let [{:keys [db-connect-string port]} config-options]
    (map->GinSystem
     {:config-options config-options
      :db (database-datomic/database-datomic db-connect-string)
      :db-migrator (component/using
                     (database-datomic/dev-migrator)
                     {:database :db})
      :dealer (component/using
                (dealer/dealer)
                {:database :db
                 :db-migrator :db-migrator})
      :ai (component/using
           (ai/ai)
           {:database :db
            :db-migrator :db-migrator})
      :ring-handler (component/using
                     (ring/ring-handler (main-handler))
                     {:database :db})
      :server (component/using
               (jetty-async-adapter/async-jetty port)
               {:handler :ring-handler})})))
