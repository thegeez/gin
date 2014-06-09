(ns gin.dealer
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clojure.core.async :refer [go chan <! close!] :as async]
            [datomic.api :as d]
            [gin.game :as game]))

(defn shuffle-set [s n]
  "shuffles the n first items in set s"
  (let [ss (seq s)]
    (if (and ss
             (< 0 n))
      (let [pick (rand-nth ss)]
        (cons pick (shuffle-set (disj s pick) (dec n))))
      s)))

(defmulti handle (fn [event conn]
                   (:event/type event)))

(defmethod handle :game-created
  [event conn]
  (let [deck (shuffle-set (set (for [suit [:heart :club :spade :diamond]
                                     rank [:A :K :Q :J :T :r9 :r8 :r7 :r6 :r5 :r4 :r3 :r2]]
                                 {:suit suit
                                  :rank rank}))
                          21)
        [player1-cards others] (split-at 10 deck)
        [player2-cards [discard & pile]] (split-at 10 others)
        player1 (get-in event [:event/game :game/player1 :db/id])
        player2 (get-in event [:event/game :game/player2 :db/id])
        starting (rand-nth [player1 player2])]
    @(d/transact conn
                 (let [event-id (d/tempid :db.part/user)
                       game-ref (:db/id (:event/game event))]
                   (-> [[:log-event :deal game-ref :dealer]
                        {:db/id game-ref
                         :game/to-start starting}]
                       (into (for [[location cards] [[:game/_player1-cards player1-cards]
                                                     [:game/_player2-cards player2-cards]
                                                     [:game/_pile pile]
                                                     [:game/_discard [discard]]]
                                   {:keys [suit rank]} cards]
                               {:db/id (d/tempid :db.part/user)
                                :card/suit suit
                                :card/rank rank
                                location game-ref})))))))

(defmethod handle :player-ready
  [event conn]
  (let [game (:event/game event)
        game-ref (:db/id game)]
    (when (= 2 (count (:game/ready game)))
      (let [player1-ginsize (game/gin-size (for [card (:game/player1-cards game)]
                                             {:suit (:card/suit card)
                                              :rank (:card/rank card)}))
            player2-ginsize (game/gin-size (for [card (:game/player2-cards game)]
                                             {:suit (:card/suit card)
                                              :rank (:card/rank card)}))]
        (cond
         (= 10 player1-ginsize player2-ginsize)
         @(d/transact conn [[:log-event :game-finished game-ref :dealer]
                            {:db/id game-ref
                             :game/result :pat-tie}])
         (= 10 player1-ginsize)
         @(d/transact conn [[:log-event :game-finished game-ref :dealer]
                            {:db/id game-ref
                             :game/result :pat-win
                             :game/winner (:db/id (:game/player1 game))}])
         (= 10 player2-ginsize)
         @(d/transact conn [[:log-event :game-finished game-ref :dealer]
                            {:db/id game-ref
                             :game/result :pat-win
                             :game/winner (:db/id (:game/player2 game))}])
         :else
         (let [player-ref (:db/id (:game/to-start game))]
           @(d/transact conn [[:turn-assigned game-ref player-ref :dealer]])))))))

(defmethod handle :discard-chosen
  [event conn]
  (let [game (:event/game event)
        game-ref (:db/id game)
        player-ref (:db/id (:game/turn game))
        card-attr (if (= player-ref (get-in game [:game/player1 :db/id]))
                    :game/player1-cards
                    :game/player2-cards)]
    (let [player-ginsize (game/gin-size (for [card (get game card-attr)]
                                          {:suit (:card/suit card)
                                           :rank (:card/rank card)}))]
      (if (= 10 player-ginsize)
        @(d/transact conn [[:log-event :game-finished game-ref :dealer]
                           {:db/id game-ref
                            :game/result :win
                            :game/winner player-ref}])
        (let [next-player-ref (get-in game [(if (= player-ref (get-in game [:game/player1 :db/id]))
                                              :game/player2
                                              :game/player1) :db/id])]
          @(d/transact conn [[:turn-assigned game-ref next-player-ref :dealer]]))))))

(defmethod handle :pile-picked
  [event conn]
  (let [game (:event/game event)
        game-ref (:db/id game)
        player-ref (:db/id (:game/turn game))
        card (rand-nth (seq (:game/pile game)))]
    @(d/transact conn [[:pile-pick-revealed game-ref player-ref card :dealer]])))

(defmethod handle :default
  [event conn]
  nil)

(defrecord Dealer [ch database]
  component/Lifecycle
  (start [component]
    (info "Starting dealer")
    ;; TODO make dealer survive restarts by using stream-from and
    ;; marking its progress in the db
    (let [conn (:connection database)
          listen (:listen database)]
      (go (loop []
            (when-let [txr (<! ch)]
              (when-let [event-id (let [event-type-attr-id (d/entid (:db-after txr) :event/type)]
                                    (some (fn [[e attr _ _ _]]
                                            (when (= attr event-type-attr-id)
                                              e))
                                          (:tx-data txr)))]
                (let [event (d/entity (:db-after txr) event-id)]
                  (handle event conn))))
            (recur)))
      (async/tap listen ch))
    (assoc component :ch ch))

  (stop [component]
    (info "Stopping dealer")
    (async/untap (:listen database) (:ch component))
    (close! (:ch component))
    (dissoc component :ch)))

(defn dealer []
  (map->Dealer {:ch (chan)}))
