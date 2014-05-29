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

(defn POST-ACTION [url options]
  (.log js/console "Post-action" url)
  (POST url
        (merge {:params {}
                :handler (fn [res]
                           (.log js/console (str "Succesful res: " res)))
                :error-handler (fn [res]
                                 (.log js/console (str "FAil res: " res))
                                 (error-handler conn))
                :headers {"X-CSRF-Token" (csrf-token)}}
               options)))

(defmulti handle-client
  (fn [event args db conn] event))

(defmethod handle-client :player-ready
  [_ [game-id player] db conn]
  (POST-ACTION (str (game-url) "/player-ready")
        {:params {:game-id game-id
                  :player player}}))

(defmethod handle-client :our-discard-picked
  [_ [game-id card-id] db conn]
  (POST-ACTION (str (game-url) "/discard-picked")
        {:params {:game-id game-id}}))

(defmethod handle-client :our-discard-chosen
  [_ [game-id card-id suit rank] db conn]
  (POST-ACTION (str (game-url) "/discard-chosen")
               {:params {:game-id game-id
                         :suit suit
                         :rank rank}}))

(defmethod handle-client :our-pile-picked
  [_ [game-id card-id] db conn]
  (.log js/console "OUR_PILE_PICKED POST" (pr-str suit) (pr-str rank))
  (POST-ACTION (str (game-url) "/pile-picked")
               {:params {:game-id game-id}}))

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

(defmethod handle-server :join-game
  [event conn]
  (let [{:keys [game-id player1 player2 us]} event]
    (d/transact! conn [[:db.fn/call t/game-created game-id player1 player2 us]]))
  (let [{:keys [game-id discards our-cards their-cards-count to-start turn]} event]
    (.log js/console "discards before tx" (pr-str discards) game-id (pr-str (keys event)) their-cards-count (pr-str ["turn " turn]))
    (d/transact! conn [[:db.fn/call t/join-game game-id discards our-cards their-cards-count to-start turn]])))

(defmethod handle-server :turn-assigned
  [event conn]
  (let [{:keys [game-id turn]} event]
    (d/transact! conn [[:db.fn/call t/turn-assigned game-id turn]])))

(defmethod handle-server :our-discard-picked
  [event conn]
  ;; nothing todo, this is a confirmation only
  )

(defmethod handle-server :our-pile-picked
  [event conn]
  ;; nothing todo, this is a confirmation only
  )

(defmethod handle-server :our-pile-pick-revealed
  [event conn]
  (let [{:keys [game-id suit rank]} event]
    (d/transact! conn [[:db.fn/call t/our-pile-pick-revealed game-id suit rank]])))

(defmethod handle-server :our-discard-chosen
  [event conn]
  ;; nothing todo, this is a confirmation only
  (.log js/console "Server thinks we chose as discard: " (pr-str (:suit event)) (pr-str (:rank event)))
  )

(defmethod handle-server :their-discard-picked
  [event conn]
  (let [{:keys [game-id]} event]
    (d/transact! conn [[:db.fn/call t/their-discard-picked game-id]])))

(defmethod handle-server :their-pile-picked
  [event conn]
  (let [{:keys [game-id]} event]
    (d/transact! conn [[:db.fn/call t/their-pile-picked game-id]])))

(defmethod handle-server :their-pile-pick-revealed
  [event conn]
  (let [{:keys [game-id]} event]
    (d/transact! conn [[:db.fn/call t/their-pile-pick-revealed game-id]])))

(defmethod handle-server :their-discard-chosen
  [event conn]
  (let [{:keys [game-id]} event]
    (d/transact! conn [[:db.fn/call t/their-discard-chosen game-id (:suit event) (:rank event)]])))

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
