(ns gin.datascript-helpers
  (:require [datascript :as d]))

(defn entity-lookup [db av-key]
  (when-let [d (first (get-in (:av db) av-key))]
    (d/entity db (:e d))))
