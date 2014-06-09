(ns gin.main
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [gin.core :as core])
  (:gen-class))

(def prod-config {:db-connect-string "datomic:mem://gin-local" :port 80})

(defn -main [& args]
  (info "Running production")
  (let [system (-> (core/gin-system prod-config)
                   component/start)]
    (.addShutdownHook (Runtime/getRuntime)
                      (Thread. (fn []
                                 (info "Shutting down main")
                                 (component/stop system))))))
