(ns gin.local.services
  (:require [gin.transact :as t]
            [datascript :as d]
            [gin.datascript-helpers :as dh]
            [gin.local.game :as game]
            [gin.local.table :as table]))

(defmulti handle
  (fn [event args report conn] event))

(defmethod handle :player-ready
  [event [game-id player] report conn]
  ;; when playing locally there is only our deal to wait on
  (let [game (dh/entity-lookup (:db-after report) [:game-id game-id])
        starting (:starting game)
        {:keys [result opp-cards]} (table/table-state)]
    (d/transact! conn
                 (if-let [result (get {:tie :pat-tie
                                       :our-win :pat-our-win
                                       :opp-win :pat-opp-win} result)]
                   [[:db.fn/call t/game-finished game-id result opp-cards]]
                   [[:db.fn/call t/turn-assigned game-id starting]]))))

(defmethod handle :our-pile-picked
 [event [game-id card-id] {:keys [db-after] :as report} conn]
 (let [{:keys [suit rank] :as card} (table/get-pile-card)]
   (d/transact! conn [[:db.fn/call t/our-pile-pick-revealed game-id suit rank]])))

(defmethod handle :our-discard-picked
 [event [game-id card-id] {:keys [db-after] :as report} conn]
 (table/get-discard) ;; keeping local state correct
 )

(defmethod handle :our-discard-chosen
  [event [game-id card-id suit rank] {:keys [db-after] :as report} conn]
  (table/set-our-discard {:suit suit :rank rank})
  (let [{:keys [result opp-cards]} (table/table-state)]
    (if (contains? #{:tie :our-win :opp-win} result)
      (d/transact! conn [[:db.fn/call t/game-finished game-id result opp-cards]])
      (let [turn (get {:player1 :player2
                       :player2 :player1}
                      (:turn (dh/entity-lookup db-after [:game-id game-id])))]
        (.log js/console "find turn: " (pr-str (dh/entity-lookup db-after [:game-id game-id])))
        (d/transact! conn [[:db.fn/call t/turn-assigned game-id turn]])))))

(defmethod handle :turn-assigned
  [event [game-id turn] {:keys [db-after] :as report} conn]
  (let [game (dh/entity-lookup db-after [:game-id game-id])]
    (when (not= turn (:us game))
      (let [from (table/get-opponent-move)
            move (if (= from :pile)
                   t/their-pile-picked
                   t/their-discard-picked)]
        (d/transact! conn [[:db.fn/call move game-id]])))))

(defmethod handle :their-discard-picked
  [event [game-id] {:keys [db-after] :as report} conn]
  (let [[{:keys [suit rank]} from] (:last @table/table)]
    (d/transact! conn [[:db.fn/call t/their-discard-chosen game-id suit rank]]) 500))

(defmethod handle :their-pile-picked
  [event [game-id] {:keys [db-after] :as report} conn]
  (d/transact! conn [[:db.fn/call t/their-pile-pick-revealed game-id]]))

(defmethod handle :their-pile-pick-revealed
  [event [game-id] {:keys [db-after] :as report} conn]
  (let [[{:keys [suit rank]} from] (:last @table/table)]
    (d/transact! conn [[:db.fn/call t/their-discard-chosen game-id suit rank]])))

(defmethod handle :their-discard-chosen
  [event [game-id card-id suit rank] {:keys [db-after] :as report} conn]
  (let [{:keys [result opp-cards]} (table/table-state)]
    (if (contains? #{:tie :our-win :opp-win} result)
      (d/transact! conn [[:db.fn/call t/game-finished game-id result opp-cards]])
      (let [turn (get {:player1 :player2
                       :player2 :player1}
                      (:turn (dh/entity-lookup db-after [:game-id game-id])))]
        (d/transact! conn [[:db.fn/call t/turn-assigned game-id turn]])))))

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
  (let [game-id (str "game-local")]
    (d/transact! conn [[:db.fn/call t/game-created game-id "pone" "ptwo" :player1]])
    (let [table (table/get-init-shuffle)
          to-start (if (= (:starting table) :us)
                     :player1
                     :player2)]
      (d/transact! conn [[:db.fn/call t/deal game-id (peek (:discards table)) (:our-cards table) to-start]]))))
