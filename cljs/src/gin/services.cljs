(ns gin.services
  (:require [gin.transact :as t]
            [ajax.core :refer [GET POST PUT] :as ajax-core]
            [goog.dom :as gdom]
            [datascript :as d]
            [cljs.reader :as reader]))

(defn game-url []
  (str (.. js/window -location -pathname)))

(defn csrf-token []
  (-> (goog.dom.getElement "csrf-token")
      (.getAttribute "value")))

(defn error-handler [conn]
  (d/transact! conn [[:db.fn/call t/error "fail"]]))

(defmulti handle-client
  (fn [event args db conn] event))

(defmethod handle-client :player-ready
  [_ [game-id player] db conn]
  (.log js/console "Player is ready, tell this to the server!")
  (POST (str (game-url) "/action")
        {:params {:game-id game-id
                  :player player}
         :handler (fn [res]
                    (.log js/console (str "Succesful res: " res))
                    #_(let [id (:id res)]
                      (d/transact! conn [[:db.fn/call t/commit-item temp-id id]])))
         :error-handler (fn [res]
                          (.log js/console (str "FAil res: " res))
                          (error-handler conn))
         :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle-client :complete-edit
  [event [id text] db conn]
  (PUT (todos-url)
       {:params {:id id
                 :text text}
        :handler (fn [res]
                   (.log js/console (str "Succesful res for complete-edit: " res " id is " id " text is " text))
                   (d/transact! conn [[:db.fn/call t/commit-edit id]]))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler conn))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle-client :toggle-item
  [event [id completed] db conn]
  (PUT (todos-url)
       {:params {:id id
                 :completed completed}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler conn))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle-client :remove-item
  [event [id] db conn]
  (DELETE (todos-url)
       {:params {:id id}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler conn))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle-client :clear-completed
  [event [ids] db conn]
  ;; todo make batch delete enpoint and use that
  (doseq [id ids]
    (DELETE (todos-url)
            {:params {:id id}
             :handler (fn [res]
                        ;; nothing todo
                        (.log js/console (str "Succesful res: " res)))
             :error-handler (fn [res]
                              (.log js/console (str "Fail res: " res))
                              (error-handler conn))
             :format (merge (ajax-core/edn-request-format)
                            {:read (fn [res]
                                     (let [res-text (.getResponseText res)]
                                       (when (pos? (count res-text))
                                         (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                             :description "EDN (CUSTOM)"})
             :headers {"X-CSRF-Token" (csrf-token)}})))

(defmethod handle-client :toggle-all
  [event _ db conn]
  (doseq [[id completed] (d/q '{:find [?id ?completed]
                                :in [$ ?tx]
                                :where [[?e :id ?id]
                                        [?e :completed ?completed ?tx]]}
                              db (:max-tx db))]
    (handle :toggle-item [id completed] db conn)))

(defmethod handle-client :default
  [_ _] nil)

(defmulti handle-server (fn [event conn]
                          (let [res (:event event)]
                            (.log js/console "dispatching on: " res)
                            res)))

(defmethod handle-server :game-created
  [event conn]
  (let [{:keys [game-id player1 player2 us]} event]
    (d/transact! conn [[:db.fn/call t/game-created game-id player1 player2 us]])))

(defmethod handle-server :deal
  [event conn]
  (let [{:keys [game-id discard our-cards to-start]} event]
    (d/transact! conn [[:db.fn/call t/deal game-id discard our-cards to-start]])))

(defmethod handle-server :turn-assigned
  [event conn]
  (let [{:keys [game-id turn]} event]
    (d/transact! conn [[:db.fn/call t/turn-assigned game-id turn]])))

(defmethod handle-server :game-finished
  [event conn]
  (let [{:keys [game-id result opp-cards]} event]
    (d/transact! conn [[:db.fn/call t/game-finished game-id result opp-cards]])))

(defmethod handle-server :default
  [event conn]
  (.log js/console (str "no handler for msg: " (pr-str msg))))

(defn start-services [conn]
  (.log js/console "HELLO REMOTE SERVICES!")
  (d/listen! conn (fn [{:keys [db-after] :as report}]
                    (let [[event args] (first (d/q '{:find [?event ?args]
                                                     :in [$ ?tx]
                                                     :where [[?e :event ?event ?tx]
                                                             [?e :args ?args]]}
                                                   db-after (:max-tx db-after)))]
                      (handle-client event args report conn))))
  (let [source (js/EventSource. (str (game-url) "/events"))]
    (set! (.-onmessage source)
          (fn [e]
            (.log js/console "from services:" e)
            (let [data (.-data e)
                  event (reader/read-string data)]
              (handle-server event conn))))))
