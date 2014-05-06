(ns gin.core
  (:require [gin.game-panel :as game-panel]
            [gin.transact :as transact]
            [gin.services :as services]
            [gin.client-services :as client-services]
            [datascript :as d]))

(defn load-app
  "Return a map containing the initial application"
  []
  {:conn (d/create-conn transact/schema)
   :render game-panel/start-game-panel
   :service services/start-services})

(defn start-app [app-config]
  (let [{:keys [conn render service] :as app} app-config]
    (d/listen! conn (fn [report]
                      (.log js/console "db-after" (pr-str (:db-after report)))
                      (.log js/console "tx-data" (pr-str (:tx-data report)))))
    (.log js/console "service" service)
    (render conn)
    (service conn)
    (def app app)))

(defn ^:export main
  "Application entry point"
  []
  (start-app (load-app)))              ; hook for development/debugging

(defn load-local-app
  []
  {:conn (d/create-conn transact/schema)
   :render game-panel/start-game-panel
   :service client-services/start-services})

(defn ^:export client-local
  []
  (start-app (load-local-app)))
