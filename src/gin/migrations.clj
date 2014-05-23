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
                                 :db/ident :event/by
                                 :db/valueType :db.type/keyword
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :event/tx
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/last-event
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
                                 :db/ident :game/player1-cards
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/player2-cards
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/pile
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/discard
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :card/suit
                                 :db/valueType :db.type/keyword
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :card/rank
                                 :db/valueType :db.type/keyword
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :card.discard/next
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
                              :account/name "User One"}
                             {:db/id p2-id
                              :account/slug "user2"
                              :account/name "Player Two"}])))
       :down identity}]
   ])
