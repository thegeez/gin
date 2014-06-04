(ns gin.ai
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clojure.core.async :refer [go chan <! close!] :as async]
            [datomic.api :as d]
            [gin.game :as game]))

(def remote-ai-slug "remote-ai")

(defmulti handle (fn [event conn]
                   (:event/type event)))

(defmethod handle :deal
  [event conn]
  (when-let [player (cond
                     (= (get-in event [:event/game :game/player1 :account/slug]) remote-ai-slug)
                     :player1
                     (= (get-in event [:event/game :game/player2 :account/slug]) remote-ai-slug)
                     :player2)]
    (let [game (:event/game event)
          game-ref (:db/id game)]
      @(d/transact conn
                   [[:player-ready game-ref player]]))))

(defn player [event]
  (let [game (:event/game event)
        game-ref (:db/id game)]
    (cond
     (and (= (get-in game [:game/player1 :account/slug]) remote-ai-slug)
          (= (:game/player1 game) (:game/turn game)))
     [game-ref :player1]
     (and (= (get-in game [:game/player2 :account/slug]) remote-ai-slug)
          (= (:game/player2 game) (:game/turn game)))
     [game-ref :player2])))

(defmethod handle :turn-assigned
  [event conn]
  (when-let [[game-ref player] (player event)]
    (debug "REMOTE AI TO MOVE!!!")
    (let [game (get event :event/game)
          _     (debug "REMOTE AI TO MOVE!!! game" game)
          in-hand-cards (for [card (get game
                                        (if (= player :player1)
                                          :game/player1-cards
                                          :game/player2-cards))]
                            {:suit (:card/suit card)
                             :rank (:card/rank card)})
          _ (debug "REMOTE AI TO MOVE!!! inhand-cards" in-hand-cards)
          [discard & gone-discards]
          (->> (iterate :card.discard/next (:game/discard game))
               (take-while identity)
               (mapv (fn [card]
                       {:suit (:card/suit card)
                        :rank (:card/rank card)})))
          _     (debug "REMOTE AI TO MOVE!!! discards disc" discard gone-discards)
          move (try (game/takediscardordeck in-hand-cards discard gone-discards)
                    (catch Exception e
                      (.printStackTrace e)
                      (throw e)))]
      (debug "AI decided on: " in-hand-cards discard gone-discards move)
      @(d/transact conn
                   [(if (= move :pile)
                      [:pile-picked game-ref player]
                      [:discard-picked game-ref player])]))))

(defn handle-picked [event conn]
  (when-let [[game-ref player] (player event)]
    (let [game (:event/game event)
          in-hand-cards (for [card (get game
                                        (if (= player :player1)
                                          :game/player1-cards
                                          :game/player2-cards))]
                          {:suit (:card/suit card)
                           :rank (:card/rank card)})
          discards (->> (iterate :card.discard/next (:game/discard game))
                        (take-while identity)
                        (mapv (fn [card]
                                {:suit (:card/suit card)
                                 :rank (:card/rank card)})))
          trade-card (game/choosediscard in-hand-cards discards)]
      (debug "AI decided on: " in-hand-cards discards trade-card)
      @(d/transact conn
                   [[:discard-chosen game-ref player (:suit trade-card) (:rank trade-card)]]))))

(defmethod handle :pile-pick-revealed
  [event conn]
  (handle-picked event conn))

(defmethod handle :discard-picked
  [event conn]
  (handle-picked event conn))

(defmethod handle :default
  [event conn]
  nil)

(defrecord AI [ch database]
  component/Lifecycle
  (start [component]
    (info "Starting ai")
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
                  (debug "AI event: " event)
                  (handle event conn))))
            (recur)))
      (async/tap listen ch))
    (assoc component :ch ch))

  (stop [component]
    (info "Stopping AI")
    (async/untap (:listen database) (:ch component))
    (close! (:ch component))
    (dissoc component :ch)))

(defn ai []
  (map->AI {:ch (chan)}))
