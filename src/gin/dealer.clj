(ns gin.dealer
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clojure.core.async :refer [go chan <! close!] :as async]
            [datomic.api :as d]))

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
  (debug "Dealing from dealer after game-created")
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
    (d/transact-async conn
                 (let [event-id (d/tempid :db.part/user)
                       game-id (:db/id (:event/game event))]
                   (-> [{:db/id event-id
                         :event/type :deal
                         :event/game game-id
                         :event/tx (d/tempid :db.part/tx)}
                        {:db/id game-id
                         :game/to-start starting
                         :game/last-event event-id}]
                       (into (for [[location cards] [[:game/_player1-cards player1-cards]
                                                     [:game/_player2-cards player2-cards]
                                                     [:game/_pile pile]
                                                     [:game/_discard [discard]]]
                                   {:keys [suit rank]} cards]
                               {:db/id (d/tempid :db.part/user)
                                :card/suit suit
                                :card/rank rank
                                location game-id})))))))

(defmethod handle :player-ready
  [event conn]
  ;; check if both players are ready
  (debug "A player is ready")
  )

(defmethod handle :default
  [event conn]
  nil)

(defrecord Dealer [ch database]
  component/Lifecycle
  (start [component]
    (info "Starting dealer")
    ;; TODO make dealer survive restarts by using stream-from and
    ;; marking its progress in the db
    (let [conn (:connection database)]
      (go (try       
            (loop []
             (when-let [txr (<! ch)]
               (debug "txr in dealer" txr)
               (when-let [event-id (let [event-type-attr-id (d/entid (:db-after txr) :event/type)]
                                     (some (fn [[e attr _ _ _]]
                                             (when (= attr event-type-attr-id)
                                               e))
                                           (:tx-data txr)))]
                 (let [event (d/entity (:db-after txr) event-id)]
                   (debug "event in DEALER" event (:event/type event))
                   (handle event conn)))
               )
             (recur))
            (catch Exception e
              (debug "Exception in DEALER loop " e)))))
    (async/tap (:listen database) ch)
    (assoc component :ch ch))

  (stop [component]
    (info "Stopping dealer")
    (async/untap (:listen database) (:ch component))
    (close! (:ch component))
    (dissoc component :ch)))

(defn dealer []
  (map->Dealer {:ch (chan)}))
