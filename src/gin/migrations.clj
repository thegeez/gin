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
       :down identity}]
   [3 {:up (fn [conn]
             @(d/transact conn [{:db/id (d/tempid :db.part/db)
                                 :db/ident :event/type
                                 :db/valueType :db.type/keyword
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :event/game
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/last-event
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :event/tx
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/id
                                 :db/unique :db.unique/identity
                                 :db/valueType :db.type/string
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/player1
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/player2
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/to-start
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :account/slug
                                 :db/unique :db.unique/identity
                                 :db/valueType :db.type/string
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :account/name
                                 :db/valueType :db.type/string
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                ])

             @(d/transact conn [{:db/id (d/tempid :db.part/user)
                                 :event/type :game-created
                                 :event/game (d/tempid :db.part/user -3)
                                 :event/tx (d/tempid :db.part/tx)}
                                {:db/id (d/tempid :db.part/user -3)
                                 :game/id "fix1"
                                 :game/player1 (d/tempid :db.part/user -1)
                                 :game/player2 (d/tempid :db.part/user -2)
                                 :game/to-start (d/tempid :db.part/user -1)}
                                {:db/id (d/tempid :db.part/user -1)
                                 :account/slug "user1"
                                 :account/name "User One"}
                                {:db/id (d/tempid :db.part/user -2)
                                 :account/slug "user2"
                                 :account/name "Player Two"}]))
       :down identity}]
   ])
