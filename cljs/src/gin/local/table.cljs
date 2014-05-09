(ns gin.local.table
  (:require [gin.local.game :as game]))

;; holds the game state, including the opponents cards and all the cards in
;; the deck when playing against the AI locally/not over the network

(def table (atom {}))

(defn table-state []
  (let [opp-gin-size (:opp-gin-size table)
        our-gin-size (:our-gin-size table)]
    (cond
     (and (= opp-gin-size 10)
          (= our-gin-size 10))
     {:result :tie
      :opp-cards (:opp-cards table)} ;; only possible when both dealt gin
     (= opp-gin-size 10)
     {:result :opp-win
      :opp-cards (:opp-cards table)}
     (= our-gin-size 10)
     {:result :our-win
      :opp-cards (:opp-cards table)}
     :else {:result :continue})))

(defn shuffle-set [s n]
  "shuffles the n first items in set s"
  (let [ss (seq s)]
    (if (and ss
             (< 0 n))
      (let [pick (rand-nth ss)]
        (cons pick (shuffle-set (disj s pick) (dec n))))
      s)))

(defn get-init-shuffle []
  (let [deck (shuffle-set (set (for [suit [:heart :club :spade :diamond]
                                     rank [:A :K :Q :J :T :r9 :r8 :r7 :r6 :r5 :r4 :r3 :r2]]
                                 {:suit suit
                                  :rank rank}))
                          21)
        [opp-cards others] (split-at 10 deck)
        [our-cards [discard & pile]] (split-at 10 others)
        starting (rand-nth [:us :opp])]
    (-> (swap! table merge {:our-cards (set our-cards)
                            :our-gin-size (game/gin-size our-cards)
                            :discards [discard]
                            :pile-cards (set pile)
                            :opp-cards (set opp-cards)
                            :opp-gin-size (game/gin-size opp-cards)
                            :starting starting})
        (select-keys [:our-cards :discards]))))

(defn restock-pile []
  (swap! table (fn [t]
                 (if (empty? (:pile-cards t))
                   (let [discards (:discards t)]
                     (-> t
                         (assoc :discards [(peek discards)])
                         (assoc :pile-cards (set (pop discards)))))
                   t))))

(defn get-pile-card []
  (let [new-card (:last (swap! table (fn [old-table]
                                       (let [card (rand-nth (seq (:pile-cards old-table)))]
                                         (-> old-table
                                             (update-in [:pile-cards] disj card)
                                             (update-in [:our-cards] conj card)
                                             (assoc :last card))))))]
    (restock-pile)
    new-card))

(defn get-discard []
  (:last (swap! table (fn [old-table]
                        (let [card (peek (:discards old-table))]
                          (-> old-table
                              (update-in [:discards] pop)
                              (update-in [:our-cards] conj card)
                              (assoc :last card)))))))

(defn set-our-discard [discard]
  (swap! table
         #(-> %
              (update-in [:our-cards] disj discard)
              (update-in [:discards] conj discard)))
  (swap! table (fn [t]
                 (assoc t :our-gin-size (game/gin-size (:our-cards t))))))

(defn get-opponent-move []
  (let [[new-card from] (:last (swap! table
                                      (fn [t]
                                        (let [from (game/decide-move t)
                                              take-card (cond
                                                         (= from :pile)
                                                         (rand-nth (seq (:pile-cards t)))
                                                         (= from :discard)
                                                         (peek (:discards t)))
                                              t (-> (cond
                                                     (= from :pile)
                                                     (update-in t [:pile-cards] disj take-card)
                                                     (= from :discard)
                                                     (update-in t [:discards] pop))
                                                    (update-in [:opp-cards] conj take-card))
                                              trade-card (game/choosediscard (:opp-cards t) (:discards t))]
                                          (-> t
                                              (update-in [:opp-cards] disj trade-card)
                                              (update-in [:discards] conj trade-card)
                                              (assoc :last [trade-card from]))))))]
    (when (= from :pile)
      (restock-pile))
    (swap! table (fn [t]
                   (assoc t :opp-gin-size (game/gin-size (:opp-cards t)))))
    from))
