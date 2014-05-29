(ns gin.transact
  "Contains functions for manipulating the application data through DataScript"
  (:require [datascript :as d]
            [gin.datascript-helpers :as dh]))

(defn log-event [db event & args]
  (let [evente {:db/id -100
                :event event
                :args args}]
    (if-let [prev-event-eid (ffirst (d/q '{:find [?e]
                                           :where [[?e :last-event]]}
                                         db))]
      [(assoc evente :prev-event prev-event-eid)
       [:db.fn/retractAttribute prev-event-eid :last-event]]
      [evente])))

(defn maybe-pile-reshuffle [db game-id]
  (let [game (dh/entity-lookup db [:game-id game-id])
        pile (:pile game)]
    (when (empty? pile)
      (let [new-pile (:discards game)]
        (into [{:db/id (:db/id game)
                :pile new-pile
                :discards []}]
              (for [card-id new-pile]
                {:db/id (:db/id (dh/entity-lookup db [:dom/id card-id]))
                 :card/suit :hidden
                 :card/rank :hidden}))))))

(defn game-created [db game-id player1-id player2-id us]
  [[:db.fn/call log-event :game-created game-id player1-id player2-id us]
   {:db/id -1
    :game-id game-id
    :player1 player1-id
    :player2 player2-id
    :us us
    :pile (->> (d/q '{:find [?e ?id]
                      :where [[?e :dom/id ?id]
                              [?e :card/suit :hidden]
                              [?e :card/rank :hidden]]}
                    db)
               (sort-by first)
               (map second))}])

(defn deal [db game-id discard-card our-cards to-start]
  (into [[:db.fn/call log-event :deal game-id discard-card our-cards to-start]]
        (let [{game-e :db/id :as game} (dh/entity-lookup db [:game-id game-id])
              cards (for [cid (:pile game)]
                      (dh/entity-lookup db [:dom/id cid]))
              [pile [discard & other]] (split-at 31 cards)
              [ours theirs] (let [[f s] (split-at 10 other)]
                              (if (= to-start (:us game))
                                [s f]
                                [f s]))]
          (concat [{:db/id game-e
                    :starting to-start
                    :pile (mapv :dom/id pile)
                    :discards [(:dom/id discard)]
                    :their-cards (mapv :dom/id theirs)
                    :our-cards (mapv :dom/id ours)}]
                  [{:db/id (:db/id discard)
                    :card/suit (:suit discard-card)
                    :card/rank (:rank discard-card)}]
                  (for [[e did suit rank] (map (fn [e {:keys [suit rank]}]
                                                 [(:db/id e) (:dom/id e) suit rank]) ours our-cards)]
                    {:db/id e
                     :card/suit suit
                     :card/rank rank})))))

(defn join-game [db game-id discard-cards our-cards their-cards-count to-start turn]
  (into [[:db.fn/call log-event :join-game game-id discard-cards our-cards their-cards-count to-start turn]]
        (let [{game-e :db/id :as game} (dh/entity-lookup db [:game-id game-id])
              cards (for [cid (:pile game)]
                      (dh/entity-lookup db [:dom/id cid]))
              [discards other] (split-at (count discard-cards) cards)
              [ours other] (split-at (count our-cards) other)
              [theirs pile] (split-at their-cards-count other)]
          (concat [{:db/id game-e
                    :starting to-start
                    :pile (mapv :dom/id pile)
                    :discards (mapv :dom/id discards)
                    :their-cards (mapv :dom/id theirs)
                    :our-cards (mapv :dom/id ours)
                    :turn turn}]
                  (for [[e did suit rank] (map (fn [e {:keys [suit rank]}]
                                                 [(:db/id e) (:dom/id e) suit rank]) discards discard-cards)]
                    {:db/id e
                     :card/suit suit
                     :card/rank rank})
                  (for [[e did suit rank] (map (fn [e {:keys [suit rank]}]
                                                 [(:db/id e) (:dom/id e) suit rank]) ours our-cards)]
                    {:db/id e
                     :card/suit suit
                     :card/rank rank})))))

(defn player-ready [db game-id player]
  [[:db.fn/call log-event :player-ready game-id player]
   (let [game (dh/entity-lookup db [:game-id game-id])]
     [:db/add (:db/id game) :ready player])])

(defn turn-assigned [db game-id turn]
  [[:db.fn/call log-event :turn-assigned game-id turn]
   (let [game-eid (ffirst (d/q '{:find [?e]
                                 :in [$ ?game-id]
                                 :where [[?e :game-id ?game-id]]}
                               db game-id))]
     [:db/add game-eid :turn turn])])

(defn our-pile-picked [db card-id]
  (let [game-id (ffirst (d/q '{:find [?game-id]
                                            :in [$ ?card-id ?last]
                                            :where [[?e :pile ?ps]
                                                    [?e :game-id ?game-id]
                                                    [(?last ?ps) ?p]
                                                    [(= ?p ?card-id)]]}
                                          db card-id last))
        game (dh/entity-lookup db [:game-id game-id])]
    [[:db.fn/call log-event :our-pile-picked game-id card-id]
     {:db/id (:db/id game)
      :pile (pop (:pile game))
      :our-cards (conj (:our-cards game) card-id)}]))

(defn our-pile-pick-revealed [db game-id suit rank]
  (let [game (dh/entity-lookup db [:game-id game-id])
        card-taken (some (fn [did]
                           (let [card-e (dh/entity-lookup db [:dom/id did])]
                             (when (and (= (:card/suit card-e) :hidden)
                                        (= (:card/rank card-e) :hidden))
                               card-e)))
                    (:our-cards game))
        card-id (:dom/id card-taken)
        pile-reshuffle (not (next (:pile game)))]
    [[:db.fn/call log-event :our-pile-pick-revealed game-id card-id suit rank pile-reshuffle]
     {:db/id (:db/id card-taken)
      :card/suit suit
      :card/rank rank}
     [:db.fn/call maybe-pile-reshuffle game-id]]))

(defn our-discard-picked [db card-id]
  (let [game (d/entity db (ffirst (d/q '{:find [?e]
                                         :in [$ ?card-id ?last]
                                         :where [[?e :discards ?ds]
                                                 [(?last ?ds) ?d]
                                                 [(= ?d ?card-id)]]}
                                       db card-id last)))]
    [[:db.fn/call log-event :our-discard-picked (:game-id game) card-id]
     {:db/id (:db/id game)
      :discards (pop (:discards game))
      :our-cards (conj (:our-cards game) card-id)}]))

(defn our-discard-chosen [db card-id]
  (let [card (dh/entity-lookup db [:dom/id card-id])
        game (d/entity db (ffirst (d/q '{:find [?e]
                                         :in [$ ?card-id ?each]
                                         :where [[?e :our-cards ?ds]
                                                 [(?each ?ds) [?d ...]]
                                                 [(= ?d ?card-id)]]}
                                       db card-id (partial map identity))))]
    [[:db.fn/call log-event :our-discard-chosen (:game-id game) card-id (:card/suit card) (:card/rank card)]
     {:db/id (:db/id game)
      :discards (conj (:discards game) card-id)
      :our-cards (filterv (fn [c]
                            (not= c card-id)) (:our-cards game))}
     [:db/add (:db/id game) :turn :done]]))

(defn their-pile-picked [db game-id]
  (let [game (dh/entity-lookup db [:game-id game-id])
        card-id (peek (:pile game))
        insert-idx (rand-nth (range 10))
        [before after] (split-at insert-idx (:their-cards game))
        pile-reshuffle (not (next (:pile game)))]
    [[:db.fn/call log-event :their-pile-picked game-id card-id pile-reshuffle]
     {:db/id (:db/id game)
      :their-cards (-> []
                       (into before)
                       (conj card-id)
                       (into after))
      :pile (pop (:pile game))}]))

(defn their-pile-pick-revealed [db game-id]
  [[:db.fn/call log-event :their-pile-pick-revealed game-id]
   [:db.fn/call maybe-pile-reshuffle game-id]])

(defn their-discard-picked [db game-id]
  (let [game (dh/entity-lookup db [:game-id game-id])
        card-id (peek (:discards game))
        card (dh/entity-lookup db [:dom/id card-id])
        insert-idx (rand-nth (range 10))
        [before after] (split-at insert-idx (:their-cards game))]
    [[:db.fn/call log-event :their-discard-picked game-id card-id]
     {:db/id (:db/id game)
      :discards (pop (:discards game))
      :their-cards (-> []
                       (into before)
                       (conj card-id)
                       (into after))}
     {:db/id (:db/id card)
      :card/suit :hidden
      :card/rank :hidden}]))

(defn their-discard-chosen [db game-id suit rank]
  (let [game (dh/entity-lookup db [:game-id game-id])
        ;; roundabout way to prevent using the last discard picked in
        ;; their hand as the next discard which could create an odd face
        ;; up-face down-different face up animation
        card-id (->> (d/q '{:find [?t ?tx]
                            :in [$ ?game ?each]
                            :where [[?g :their-cards ?tc]
                                    [(?each ?tc) [?t ...]]
                                    [?e :dom/id ?t]
                                    [?e :card/suit _ ?tx]]}
                          db (:db/id game) (partial map identity))
                     (sort-by second >)
                     rest
                     (map first)
                     rand-nth)
        card (dh/entity-lookup db  [:dom/id card-id])]
    [[:db.fn/call log-event :their-discard-chosen game-id card-id suit rank]
     {:db/id (:db/id game)
      :discards (conj (:discards game) card-id)
      :their-cards (filterv (complement #{card-id}) (:their-cards game))}
     {:db/id (:db/id card)
      :card/suit suit
      :card/rank rank}]))

(defn game-finished [db game-id result opp-cards]
  (let [game (dh/entity-lookup db [:game-id game-id])
        their-cards (map #(dh/entity-lookup db [:dom/id %]) (:their-cards game))]
    (into [[:db.fn/call log-event :game-finished game-id result]
           [:db/add (:db/id game) :result result]]
          (for [[e card] (map list their-cards opp-cards)]
            {:db/id (:db/id e)
             :card/suit (:suit card)
             :card/rank (:rank card)}))))

(def schema {:ready :cardinality/many})
