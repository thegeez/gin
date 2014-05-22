(ns gin.core
  (:require [gin.game-panel :as game-panel]
            [gin.transact :as transact]
            [gin.services :as services]
            [gin.local.services :as local-services]
            [datascript :as d]))

(defn load-app
  "Return a map containing the initial application"
  []
  {:conn (d/create-conn transact/schema)
   :render game-panel/start-game-panel
   :service services/start-services})

(defn start-app [app-config]
  (let [{:keys [conn render service] :as app} app-config]
    #_(d/listen! conn (fn [report]
                      (.log js/console "db-after" (pr-str (:db-after report)))
                      (.log js/console "tx-data" (pr-str (:tx-data report)))
                      (when (some (fn [d]
                                    (= (:e d) nil)) (:tx-data report))
                        (js/alert (str "Something broken with: "
                                       (pr-str (filter (fn [d] (nil? (:e d))) (:tx-data report))))))))
    (.log js/console "service" service)
    (render conn)
    (service conn)
    (def app app)))

(defn ^:export main
  "Application entry point"
  []
  (start-app (load-app)))

(defn load-local-app
  []
  {:conn (d/create-conn transact/schema)
   :render game-panel/start-game-panel
   :service local-services/start-services})

(defn ^:export client-local
  []
  (start-app (load-local-app))
  ;;sse dev
  (let [source (js/EventSource. "/dev-sse/events")]
    (set! (.-onmessage source)
          (fn [e]
            (.log js/console e))))

  )
