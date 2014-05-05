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
    :us us}])

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
                    :card/location :location/discard
                    :card/suit (:suit discard-card)
                    :card/rank (:rank discard-card)}]
                  [[:db/add game-e :their-cards (mapv :dom/id theirs)]]
                  (for [e theirs]
                    [:db/add (:db/id e) :card/location :location/theirs])
                  [[:db/add game-e :our-cards (mapv :dom/id ours)]]
                  (for [[e did suit rank] (map (fn [e {:keys [suit rank]}]
                                                 [(:db/id e) (:dom/id e) suit rank]) ours our-cards)]
                    {:db/id e
                     :card/location :location/ours
                     :card/suit suit
                     :card/rank rank})))))

(defn turn-assigned [db game-id turn]
  [[:db.fn/call log-event :turn-assigned game-id turn]
   (let [game-eid (ffirst (d/q '{:find [?e]
                                 :in [$ ?game-id]
                                 :where [[?e :game-id ?game-id]]}
                               db game-id))]
     [:db/add game-eid :turn turn])])


