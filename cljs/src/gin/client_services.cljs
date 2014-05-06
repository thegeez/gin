(ns gin.client-services
  (:require [gin.transact :as t]
            [datascript :as d]))

(defmulti handle
  (fn [event args report conn] event))

(defmethod handle :player-ready
  [event [game-id player] report conn]
  (d/transact! conn [[:db.fn/call t/turn-assigned "game-id-1" (rand-nth [:player1 #_:player2])]]))

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
