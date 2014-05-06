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

(defn game-created [db game-id player1-id player2-id us]
  [[:db.fn/call log-event :game-created game-id player1-id player2-id us]
   {:db/id -1
    :game-id game-id
    :player1 player1-id
    :player2 player2-id
    :us us
    :deck (->> (d/q '{:find [?e ?id]
                      :where [[?e :dom/id ?id]
                              [?e :card/suit :hidden]
                              [?e :card/rank :hidden]]}
                    db)
               (sort-by first)
               (map second))}])

(defn deal [db game-id discard-card our-cards]
  (into [[:db.fn/call log-event :deal game-id discard-card our-cards]]
        (let [;; todo wrap this is (d/by-index :av :game-id game-id)
              {game-e :db/id :as game} (dh/entity-lookup db [:game-id game-id])
              cards (for [cid (:deck game)]
                      (dh/entity-lookup db [:dom/id cid]))
              [deck [discard & other]] (split-at 31 cards)
              [ours theirs] (split-at 10 other)]
          (concat [[:db/add game-e :deck (mapv :dom/id deck)]]
                  [[:db/add game-e :discards [(:dom/id discard)]]
                   {:db/id (:db/id discard)
                    :card/suit (:suit discard-card)
                    :card/rank (:rank discard-card)}]
                  [[:db/add game-e :their-cards (mapv :dom/id theirs)]]
                  [[:db/add game-e :our-cards (mapv :dom/id ours)]]
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

(defn pile-picked [db card-id]
  (let [game-id (ffirst (d/q '{:find [?game-id]
                               :in [$ ?card-id ?last]
                               :where [[?e :deck ?ds]
                                       [?e :game-id ?game-id]
                                       [(?last ?ds) ?d]
                                       [(= ?d ?card-id)]]}
                             db card-id last))]
    [[:db.fn/call log-event :pile-picked game-id card-id]]))

(defn pile-pick-revealed [db game-id suit rank]
  (let [game (dh/entity-lookup db [:game-id game-id])
        card-taken (dh/entity-lookup db [:dom/id (peek (:deck game))])]
    [[:db.fn/call log-event :pile-pick-revealed game-id (:dom/id card-taken) suit rank]
     {:db/id (:db/id game)
      :deck (pop (:deck game))
      :our-cards (conj (:our-cards game) card-id)}
     {:db/id (:db/id card-taken)
      :card/suit suit
      :card/rank rank}]))

(defn discard-picked [db card-id]
  (let [game (d/entity db (ffirst (d/q '{:find [?e]
                                         :in [$ ?card-id ?last]
                                         :where [[?e :discards ?ds]
                                                 [(?last ?ds) ?d]
                                                 [(= ?d ?card-id)]]}
                                       db card-id last)))]
    [[:db.fn/call log-event :discard-picked (:game-id game) card-id]
     {:db/id (:db/id game)
      :discards (pop (:discards game))
      :our-cards (conj (:our-cards game) card-id)}]))

(defn discard-chosen [db card-id]
  (let [card (dh/entity-lookup db [:dom/id card-id])
        game (d/entity db (ffirst (d/q '{:find [?e]
                                         :in [$ ?card-id ?each]
                                         :where [[?e :our-cards ?ds]
                                                 [(?each ?ds) [?d ...]]
                                                 [(= ?d ?card-id)]]}
                                       db card-id (partial map identity))))]
    [[:db.fn/call log-event :discard-chosen (:game-id game) card-id (:suit card) (:rank card)]
     {:db/id (:db/id game)
      :discards (conj (:discards game) card-id)
      :our-cards (filterv (fn [c]
                            (not= c card-id)) (:our-cards game))}]))

(def schema {:ready :cardinality/many})
