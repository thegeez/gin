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
                                                      :params [db event-type game-ref by]
                                                      :code
                                                      [{:db/id (d/tempid :db.part/user -1)
                                                        :event/type event-type
                                                        :event/game game-ref
                                                        :game/_last-event game-ref
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

                                {:db/id (d/tempid :db.part/user)
                                 :db/ident :player-ready
                                 :db/fn (d/function '{:lang :clojure
                                                      :requires [[datomic.api :as d]]
                                                      :params [db game-ref player]
                                                      :code
                                                      (let [game (d/entity db game-ref)
                                                            player-ref (get-in game [(if (= player :player1)
                                                                                       :game/player1
                                                                                       :game/player2) :db/id])]
                                                        (when (contains? (:game/ready game) player-ref)
                                                          (throw (Exception. "Player already registered as ready")))
                                                        [[:log-event :player-ready game-ref player]
                                                         [:db/add game-ref :game/ready player-ref]])})}
                                {:db/id (d/tempid :db.part/user)
                                 :db/ident :turn-assigned
                                 :db/fn (d/function '{:lang :clojure
                                                      :requires [[datomic.api :as d]]
                                                      :params [db game-ref player-ref by]
                                                      :code
                                                      (let [game (d/entity db game-ref)]
                                                        (when (= (:game/turn game) player-ref)
                                                          (throw (Exception. "Can't assign turn to same player")))
                                                        [[:log-event :turn-assigned game-ref by]
                                                         [:db/add game-ref :game/turn player-ref]])})}
                                {:db/id (d/tempid :db.part/user)
                                 :db/ident :discard-picked
                                 :db/fn (d/function
                                         '{:lang :clojure
                                           :requires [[datomic.api :as d]]
                                           :params [db game-ref player]
                                           :code
                                           (let [game (d/entity db game-ref)
                                                 player-ref (get-in game [(if (= player :player1)
                                                                            :game/player1
                                                                            :game/player2) :db/id])
                                                 card-attr (if (= player :player1)
                                                             :game/player1-cards
                                                             :game/player2-cards)]
                                             (when (or (not= (get-in game [:game/turn :db/id]) player-ref)
                                                       (not= 10 (count (get game card-attr))))
                                               (throw (Exception. "Can't make discard picked for player at this time.")))
                                             (let [discard (:game/discard game)
                                                   next-discard-ref (get-in discard [:card.discard/next :db/id])]
                                               (into [[:log-event :discard-picked game-ref player]
                                                      [:db/add game-ref card-attr (:db/id discard)]
                                                      ]
                                                     (if next-discard-ref
                                                       [[:db/add game-ref :game/discard next-discard-ref]
                                                        [:db/retract (:db/id discard) :card.discard/next next-discard-ref]]
                                                       [[:db/retract game-ref :game/discard (:db/id discard)]]))))})}
                                {:db/id (d/tempid :db.part/user)
                                 :db/ident :pile-picked
                                 :db/fn (d/function
                                         '{:lang :clojure
                                           :requires [[datomic.api :as d]]
                                           :params [db game-ref player]
                                           :code
                                           (let [game (d/entity db game-ref)
                                                 player-ref (get-in game [(if (= player :player1)
                                                                            :game/player1
                                                                            :game/player2) :db/id])
                                                 card-attr (if (= player :player1)
                                                             :game/player1-cards
                                                             :game/player2-cards)]
                                             (when (or (not= (get-in game [:game/turn :db/id]) player-ref)
                                                       (not= 10 (count (get game card-attr))))
                                               (throw (Exception. "Can't make pile picked for player at this time.")))
                                             [[:log-event :pile-picked game-ref player]])})}
                                {:db/id (d/tempid :db.part/user)
                                 :db/ident :pile-pick-revealed
                                 :db/fn (d/function
                                         '{:lang :clojure
                                           :requires [[datomic.api :as d]]
                                           :params [db game-ref player-ref card by]
                                           :code
                                           (let [game (d/entity db game-ref)
                                                 card-attr (if (= player-ref (get-in game [:game/player1 :db/id]))
                                                             :game/player1-cards
                                                             :game/player2-cards)
                                                 card-ref (:db/id card)]
                                             (when (or (not= (get-in game [:game/turn :db/id]) player-ref)
                                                       (not= 10 (count (get game card-attr)))
                                                       (not (contains? (:game/pile game) card)))
                                               (throw (Exception. "Can't reveal this pile pick for player at this time.")))
                                             (into [[:log-event :pile-pick-revealed game-ref by]
                                                    {:db/id (d/tempid :db.part/user -1)
                                                     :card/suit (:card/suit card)
                                                     :card/rank (:card/rank card)}
                                                    [:db/add game-ref card-attr card-ref]
                                                    [:db/retract game-ref :game/pile card-ref]]
                                                   (when (= 1 (count (:game/pile game)))
                                                     (into [[:db/retract game-ref :game/discard (:db/id (:game/discard game))]]
                                                           (->> (iterate :card.discard/next (:game/discard game))
                                                                (take-while identity)
                                                                (mapcat (fn [{card-ref :db/id :as card}]
                                                                          (into [[:db/add game-ref :game/pile card-ref]]
                                                                                (when-let [next-card (:card.discard/next card)]
                                                                                  [[:db/retract card-ref :card.discard/next (:db/id next-card)]])))))))))})}
                                {:db/id (d/tempid :db.part/user)
                                 :db/ident :discard-chosen
                                 :db/fn (d/function
                                         '{:lang :clojure
                                           :requires [[datomic.api :as d]]
                                           :params [db game-ref player suit rank]
                                           :code
                                           (let [game (d/entity db game-ref)
                                                 player-ref (get-in game [(if (= player :player1)
                                                                            :game/player1
                                                                            :game/player2) :db/id])
                                                 card-attr (if (= player :player1)
                                                             :game/player1-cards
                                                             :game/player2-cards)
                                                 card-ref (some (fn [card]
                                                                  (when (and (= suit (:card/suit card))
                                                                             (= rank (:card/rank card)))
                                                                    (:db/id card)))
                                                              (get game card-attr))]
                                             (when (or (not= (get-in game [:game/turn :db/id]) player-ref)
                                                       (not= 11 (count (get game card-attr)))
                                                       (not card-ref))
                                               (throw (Exception. "Can't make discard chosen for player at this time.")))
                                             (into [[:log-event :discard-chosen game-ref player]
                                                    [:db/retract game-ref card-attr card-ref]
                                                    [:db/add game-ref :game/discard card-ref]]
                                                   (when-let [old-discard-ref (get-in game [:game/discard :db/id])]
                                                     [[:db/add card-ref :card.discard/next old-discard-ref]])))})}]))
       :down identity}]
   ])
