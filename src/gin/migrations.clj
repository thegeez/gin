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
             @(d/transact conn [{:db/id (d/tempid :db.part/user)
                                 :db/ident :log-event
                                 :db/fn (d/function '{:lang :clojure
                                                      :requires [[datomic.api :as d]]
                                                      :params [db event-type game by]
                                                      :code
                                                      [{:db/id (d/tempid :db.part/user)
                                                        :event/type event-type
                                                        :event/game game
                                                        :game/_last-event game
                                                        :event/by by
                                                        :event/tx (d/tempid :db.part/tx)}]})}
                                {:db/id (d/tempid :db.part/db)
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
                                 :db/ident :game/turn
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/result
                                 :db/valueType :db.type/keyword
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/winner
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/one
                                 :db.install/_attribute :db.part/db}
                                {:db/id (d/tempid :db.part/db)
                                 :db/ident :game/ready
                                 :db/valueType :db.type/ref
                                 :db/cardinality :db.cardinality/many
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
                                ]))
       :down identity}]
   ])
