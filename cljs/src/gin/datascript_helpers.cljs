(ns gin.datascript-helpers
  (:require [datascript :as d]))

(defn entity-lookup [db av-key]
  (d/entity db (:e (first (get-in (:av db) av-key)))))
