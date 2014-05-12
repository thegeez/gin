(ns gin.migrations
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [datomic.api :refer [db q] :as d]))

(def migrations
  [[1 {:up (fn [conn]
             @(d/transact conn [{:db/id (d/tempid :db.part/user)
                                 :db/ident :schema-version}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :schema/version
                                 :db/valueType :db.type/long
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}]))
       :down identity}]
   [2 {:up (fn [conn]
             @(d/transact conn [{:db/id (d/tempid :db.part/db)
                                 :db/ident :dev/count
                                 :db/valueType :db.type/long
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}]))
       :down identity}]])
