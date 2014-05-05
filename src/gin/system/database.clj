(ns gin.system.database
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]))

(defrecord Database [db-connect-string]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (info ";; Starting database")
    component)

  (stop [component]
        (info ";; Stopping database")
    component))

(defn database [db-connect-string]
  (map->Database {:db-connect-string db-connect-string}))
