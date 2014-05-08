(ns gin.client-services
  (:require [gin.transact :as t]
            [datascript :as d]
            [gin.datascript-helpers :as dh]))

(defmulti handle
  (fn [event args report conn] event))

(defmethod handle :player-ready
  [event [game-id player] report conn]
  (d/transact! conn [[:db.fn/call t/turn-assigned "game-id-1" (rand-nth [#_:player1 :player2])]]))

(defmethod handle :our-pile-picked
 [event [game-id card-id] {:keys [db-after] :as report} conn]
 (d/transact! conn [[:db.fn/call t/our-pile-pick-revealed game-id :club :A]]))

(defmethod handle :our-discard-picked
  ;; todo debug only
 [event [game-id card-id] {:keys [db-after] :as report} conn]
  (.log js/console "Our hand after picking discard: " (pr-str (dh/entity-lookup db-after [:game-id game-id]))))

(defmethod handle :our-discard-chosen
  [event [game-id card-id] {:keys [db-after] :as report} conn]
  (let [turn (get {:player1 :player2
                   :player2 :player1}
                  (:turn (dh/entity-lookup db-after [:game-id game-id])))]
    (d/transact! conn [[:db.fn/call t/turn-assigned game-id turn]])))

(defmethod handle :turn-assigned
  [event [game-id turn] {:keys [db-after] :as report} conn]
  (let [game (dh/entity-lookup db-after [:game-id game-id])]
    (when (not= turn (:us game))
      (d/transact! conn [[:db.fn/call (rand-nth [t/their-pile-picked
                                                 t/their-discard-picked]) game-id]]))))

(defmethod handle :their-pile-pick-revealed
  [event [game-id] {:keys [db-after] :as report} conn]
  (d/transact! conn [[:db.fn/call t/their-discard-chosen game-id :diamond :J]]))

(defmethod handle :their-discard-chosen
  [event [game-id card-id suit rank] {:keys [db-after] :as report} conn]
  (let [turn (get {:player1 :player2
                   :player2 :player1}
                  (:turn (dh/entity-lookup db-after [:game-id game-id])))]
    (d/transact! conn [[:db.fn/call t/turn-assigned game-id turn]])))

(defmethod handle :default
  [_ _] nil)

(defn start-services [conn]
  (d/listen! conn (fn [{:keys [db-after] :as report}]
                    (let [[event args] (first (d/q '{:find [?event ?args]
                                                     :in [$ ?tx]
                                                     :where [[?e :event ?event ?tx]
                                                             [?e :args ?args]]}
                                                   db-after (:max-tx db-after)))]
                      (handle event args report conn))))
  (d/transact! conn [[:db.fn/call t/game-created "game-id-1" "pone" "ptwo" :player1]])
  (d/transact! conn [[:db.fn/call t/deal "game-id-1" {:suit :heart :rank :A}
                      (for [r [:r2 :r3 :r4 :r5 :r6 :r7 :r8 :r9 :T :J]]
                        {:suit :spade
                         :rank r})]]))
