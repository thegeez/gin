(ns gin.client-services
  (:require [gin.transact :as t]
            [datascript :as d]))

(defmulti handle
  (fn [event args db conn local-conn] event))

(defmethod handle :create-item
  [_ [temp-id text] db conn local-conn]
  (let [tx (d/transact! local-conn [{:db/id -1
                                     :text text
                                     :completed false}])
        id (get (:tempids tx) -1)]
    (d/transact! conn [[:db.fn/call t/commit-item temp-id id]])))

(defmethod handle :complete-edit
  [event [id text] db conn local-conn]
  (d/transact! local-conn [[:db/add id :text text]])
  (d/transact! conn [[:db.fn/call t/commit-edit id]]))

(defmethod handle :toggle-item
  [event [id completed] db conn local-conn]
  (d/transact! local-conn [[:db/add id :completed completed]]))

(defmethod handle :remove-item
  [event [id] db conn local-conn]
  (d/transact! local-conn [[:db.fn/retractEntity id]]))

(defmethod handle :clear-completed
  [event [ids] db conn local-conn]
  ;; todo make batch delete enpoint and use that
  (d/transact! local-conn (for [id ids]
                            [:db.fn/retractEntity id])))

(defmethod handle :toggle-all
  [event _ db conn local-conn]
  (doseq [[id completed] (d/q '{:find [?id ?completed]
                                :in [$ ?tx]
                                :where [[?e :id ?id]
                                        [?e :completed ?completed ?tx]]}
                              db (:max-tx db))]
    (handle :toggle-item [id completed] db conn local-conn)))

(defmethod handle :default
  [_ _] nil)

(defn start-services [conn]
  (let [local-conn (d/create-conn {})]
    (d/listen! conn (fn [{:keys [db-after] :as report}]
                      (let [[event args] (first (d/q '{:find [?event ?args]
                                                       :in [$ ?tx]
                                                       :where [[?e :event ?event ?tx]
                                                               [?e :args ?args]]}
                                                     db-after (:max-tx db-after)))]
                        (handle event args db-after conn local-conn))))
    (.setTimeout js/window (fn []
                             (d/transact! conn [[:db.fn/call t/game-created "game-id-1" "pone" "ptwo" :player1]])
                             (d/transact! conn [[:db.fn/call t/deal "game-id-1" {:suit :heart :rank :A}
                                                 (for [r [:r2 :r3 :r4 :r5 :r6 :r7 :r8 :r9 :T]]
                                                   {:suit :spade
                                                    :rank r})]])
                             (.setTimeout js/window (fn []
                                                      (d/transact! conn [[:db.fn/call t/turn-assigned "game-id-1" :player1]]))
                                          10000))
                 1000)))
