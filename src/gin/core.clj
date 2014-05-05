(ns gin.core
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [gin.system.ring :as ring]
            [gin.system.server :as server]
            [gin.system.database :as database]
            [gin.system.email :as email]
            [gin.home :as home]
            [compojure.core :as compojure]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]
            [cemerick.friend.credentials :as credentials]))

(compojure/defroutes main-routes
  home/home-routes
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
                            :default-landing-uri "/login"
                            :workflows [(fn [req]
                                          ((workflows/interactive-form
                                            :credential-fn (fn form-credential-fn [creds]
                                                             (credentials/bcrypt-credential-fn
                                                              ;; todo
                                                              ;; temp
                                                              (constantly nil)
                                                              #_(accounts-data/lookup-friend-identity (:database req)) creds)))
                                           req))]})

      ring/wrap-common))

(defn dev-handler []
  (-> (main-handler)
      ring/wrap-dev))

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
       :db (database/database db-connect-string)
       ;; :db-migrator (component/using
       ;;               (database/dev-migrator)
       ;;               {:database :db})
       ;; :db-fixtures (component/using
       ;;               (dev-db-fixtures)
       ;;               {:database :db
       ;;                :db-migrator :db-migrator})
       :ring-handler (component/using
                      (ring/ring-handler (dev-handler))
                      {:database :db
                       :emailer :emailer})
       :emailer (email/log-emailer)
       :server (component/using
                (server/jetty port)
                {:handler :ring-handler})})))

(def dev-config {:db-connect-string "jdbc:derby:memory:chains;create=true" :port 3000})

(defn gin-system [config-options]
  (info "Hello world, this is the production system!")
  (let [{:keys [db-connect-string port]} config-options]
    (map->GinSystem
      {:config-options config-options
       :db (database/database db-connect-string)
       :ring-handler (component/using
                      (ring/ring-handler (main-handler))
                      {:database :db
                       :emailer :emailer})
       :emailer (email/log-emailer)
       :server (component/using
                (server/jetty port)
                {:handler :ring-handler})})))

(defn production-config [port database-url]
  {:db-connect-string database-url
   :port port})
