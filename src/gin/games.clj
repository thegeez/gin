(ns gin.games
  (:require [clojure.tools.logging :refer [debug spy]]
            [clojure.edn :as edn]
            [gin.util.helpers :as h]
            [gin.util.layout :as l]
            [gin.common :as c]
            [gin.system.database-datomic :as dd]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as lib-rep]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [clojure.core.async :refer [go <! >! chan timeout close!] :as async]
            [datomic.api :refer [db q] :as d]))

(def game-resource
  {:authorized? (fn [ctx]
                  (friend/identity (get ctx :request)))
   :handle-unauthorized (fn [ctx]
                          (friend/throw-unauthorized
                           (friend/identity (get ctx :request))
                           {}))
   :allowed? (fn [ctx]
               (let [db (db (h/conn ctx))
                     game-id (get-in ctx [:request :params :game-id])
                     slug (:slug (friend/current-authentication (get ctx :request)))]
                 (when-let [game-e (ffirst (q '{:find [?e]
                                                :in [$ ?game-id]
                                                :where [[?e :game/id ?game-id]]}
                                              db game-id))]
                   (let [game (d/entity db game-e)]
                     (cond
                      (= (get-in game [:game/player1 :account/slug]) slug)
                      {:game game
                       :player :player1}
                      (= (get-in game [:game/player2 :account/slug]) slug)
                      {:game game
                       :player :player2}
                      :else nil)))))
   :handle-forbidden (fn [ctx]
                       (friend/throw-unauthorized
                        (friend/identity (get ctx :request))
                        {}))
   :exists? (fn [ctx]
              (:game ctx))})

(def game-action-resource
  (merge
   game-resource
   {:allowed-methods [:post]
    :available-media-types ["application/edn"]

    :as-response (l/as-template-response nil)}))

(def game-page-html (html/html-resource "templates/game.html"))

(defn game-page-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content (html/select game-page-html [:#content]))
   [:#info] (html/content (str (get-in ctx [:game :game/player1 :account/username])
                               " vs. "
                               (get-in ctx [:game :game/player2 :account/username])
                               ". To start: "
                               (get-in ctx [:game :game/to-start :account/username])))
   [:#csrf-token] (html/set-attr :value (get-in ctx [:request :session "__anti-forgery-token"]))))

(defresource game-page
  game-resource
  :available-media-types ["text/html"]
  :as-response (l/as-template-response game-page-layout))

(defresource game-player-ready
  game-action-resource
  :post! (fn [ctx]
           (let [{:keys [game player]} ctx]
             @(d/transact (h/conn ctx)
                          (let [game-ref (:db/id game)]
                            [[:player-ready game-ref player]])))))

(defresource game-discard-picked
  game-action-resource
  :post! (fn [ctx]
           (let [{:keys [game player]} ctx]
             @(d/transact (h/conn ctx)
                          (let [game-ref (:db/id game)]
                            [[:discard-picked game-ref player]])))))

(defresource game-pile-picked
  game-action-resource
  :post! (fn [ctx]
           (let [{:keys [game player]} ctx]
             @(d/transact (h/conn ctx)
                          (let [game-ref (:db/id game)]
                            [[:pile-picked game-ref player]])))))

(defresource game-discard-chosen
  game-action-resource
  :processable? (fn [ctx]
                  (let [{:keys [suit rank]} (try (-> (get-in ctx [:request :body])
                                                     slurp
                                                     edn/read-string)
                                                 (catch Exception e nil))]
                    (when (and (contains? #{:heart :diamond :club :spade} suit)
                               (contains? #{:r2 :r3 :r4 :r5 :r6 :r7 :r8 :r9 :T :J :Q :K :A} rank))
                      {:suit suit
                       :rank rank})))
  :post! (fn [ctx]
           (let [{:keys [game player suit rank]} ctx]
             @(d/transact (h/conn ctx)
                          (let [game-ref (:db/id game)]
                            [[:discard-chosen game-ref player suit rank]])))))

(defmulti event-to-msg (fn [event player]
                         (:event/type event)))

(defmethod event-to-msg :game-created
  [event player]
  (let [game (:event/game event)]
    (str {:event :game-created
          :game-id (:game/id game)
          :player1 (get-in game [:game/player1 :account/username])
          :player2 (get-in game [:game/player2 :account/username])
          :us player})))

(defmethod event-to-msg :deal
  [event player]
  (let [game (:event/game event)]
    (str {:event :deal
          :game-id (:game/id game)
          :to-start (if (= (:game/to-start game) (:game/player1 game))
                      :player1
                      :player2)
          :discard (let [discard (:game/discard game)]
                     {:suit (:card/suit discard)
                      :rank (:card/rank discard)})
          :our-cards (mapv (fn [card ]
                             {:suit (:card/suit card)
                              :rank (:card/rank card)})
                           (get game (if (= player :player1)
                                       :game/player1-cards
                                       :game/player2-cards)))
          })))

(defmethod event-to-msg :turn-assigned
  [event player]
  (let [game (:event/game event)]
    (str {:event :turn-assigned
          :game-id (:game/id game)
          :turn (if (= (:game/turn game) (:game/player1 game))
                  :player1
                  :player2)
          })))

(defmethod event-to-msg :discard-picked
  [event player]
  (let [game (:event/game event)
        by (:event/by event)]
    (str {:event (if (= by player)
                   :our-discard-picked
                   :their-discard-picked)
          :game-id (:game/id game)
          :player by})))

(defmethod event-to-msg :pile-picked
  [event player]
  (let [game (:event/game event)
        by (:event/by event)]
    (str {:event (if (= by player)
                   :our-pile-picked
                   :their-pile-picked)
          :game-id (:game/id game)
          :player by})))

(defmethod event-to-msg :pile-pick-revealed
  [event player]
  (let [game (:event/game event)]
    (if (or (and (= player :player1)
                 (= (:game/turn game) (:game/player1 game)))
            (and (= player :player2)
                 (= (:game/turn game) (:game/player2 game))))
      (str {:event :our-pile-pick-revealed
            :game-id (:game/id game)
            :player player
            :suit (:card/suit event)
            :rank (:card/rank event)})
      (str {:event :their-pile-pick-revealed
            :game-id (:game/id game)
            :player player}))))

(defmethod event-to-msg :discard-chosen
  [event player]
  (let [game (:event/game event)
        by (:event/by event)
        {suit :card/suit rank :card/rank} (get-in game [:game/discard])]
    (str {:event (if (= by player)
                   :our-discard-chosen
                   :their-discard-chosen)
          :game-id (:game/id game)
          :player by
          :suit suit
          :rank rank})))

(defmethod event-to-msg :game-finished
  [event player]
  (let [game (:event/game event)
        result (:game/result game)
        our-win (or (and (= player :player1)
                         (= (:game/winner game) (:game/player1 game)))
                    (and (= player :player2)
                         (= (:game/winner game) (:game/player2 game))))]
    (str {:event :game-finished
          :game-id (:game/id game)
          :result (cond
                   (= result :pat-tie) :pat-tie
                   (= result :pat-win)
                   (if our-win
                     :pat-our-win
                     :pat-opp-win)
                   (= result :win)
                   (if our-win
                     :our-win
                     :opp-win))
          :opp-cards (for [card (get game (if (= player :player1)
                                            :game/player2-cards
                                            :game/player1-cards))]
                       {:suit (:card/suit card)
                        :rank (:card/rank card)})
          })))

(defmethod event-to-msg :default
  [event player]
  nil)

(defn event-join-game [game player]
  {:event :join-game
   :game-id (:game/id game)
   :player1 (get-in game [:game/player1 :account/username])
   :player2 (get-in game [:game/player2 :account/username])
   :us player
   :to-start (if (= (:game/to-start game) (:game/player1 game))
               :player1
               :player2)
   :turn (if (= (:game/turn game) (:game/player1 game))
           :player1
           :player2)
   :result
   (when-let [result (:game/result game)]
     (if-let [winner (:game/winner game)]
       (if (or (and (= player :player1)
                    (= (:game/winner game) (:game/player1 game)))
               (and (= player :player2)
                    (= (:game/winner game) (:game/player2 game))))
         :our-win
         :opp-win)
       :pat-tie)
     )
   :discards
   (->> (iterate :card.discard/next (:game/discard game))
        (take-while identity)
        reverse
        (mapv (fn [card]
                {:suit (:card/suit card)
                 :rank (:card/rank card)})))
   :our-cards (mapv (fn [card]
                      {:suit (:card/suit card)
                       :rank (:card/rank card)})
                    (get game (if (= player :player1)
                                :game/player1-cards
                                :game/player2-cards)))
   :their-cards
   (for [card  (get game (if (= player :player1)
                           :game/player2-cards
                           :game/player1-cards))]
     (if (:game/result game)
       {:suit (:card/suit card)
        :rank (:card/rank card)}
       {:suit :hidden
        :rank :hidden}))})

(defresource game-events
  game-resource
  :available-media-types ["text/event-stream"]
  :handle-ok (fn [ctx]
               (lib-rep/ring-response
                {:status 200
                 :headers {"Content-Type" "text/event-stream"
                           "Cache-Control" "no-cache"
                           "Connection" "keep-alive"}
                 :body (let [c (chan)
                             start-from (try (inc (Long/parseLong (get-in ctx [:request :headers "last-event-id"])))
                                             (catch Exception e nil))
                             conn (get-in ctx [:request :conn])
                             listen (get-in ctx [:request :listen])
                             player (get-in ctx [:player])
                             game (get-in ctx [:game])
                             game-id (:db/id game)

                             here-since (java.util.Date.)

                             ;; sent summary to join game in progress or
                             ;; start from the beginning
                             start-from (if start-from
                                          (do
                                            (async/put! c ": start-of-stream\r\n\r\n")
                                            start-from)
                                          (if (get-in ctx [:game :game/turn])
                                            (let [db (d/entity-db (get-in ctx [:game]))
                                                  latest-tx (get-in ctx [:game :game/last-event :event/tx :db/id])
                                                  from-t (d/tx->t latest-tx)
                                                  game (get-in ctx [:game])]
                                              (async/put! c (str "id: " from-t "\r\n"
                                                           "data: "
                                                           (event-join-game game player)
                                                           "\r\n\r\n"))
                                              from-t)
                                            0 ;; game hasn't started
                                            ;; yet, sent everything
                                            ;; from the beginning
                                            ))
                             in (chan)
                             msg-to-data (fn [msg]
                                           (let [db (:db-after msg)
                                                 t (or (d/as-of-t db)
                                                       (d/basis-t db))
                                                 event (:game/last-event (d/entity db (:db/id game)))]
                                             (debug "EVent in games" 
                                                    (:slug (friend/current-authentication (:request ctx)))
                                                    event
                                                    (:event/type event)
                                                    
                                                    (pr-str here-since))
                                             (when-let [event-str (event-to-msg event player)]
                                               (str "id: " t "\r\n"
                                                    "data: "
                                                    event-str
                                                    "\r\n\r\n"))))]
                         (go (loop []
                               (when-let [msg (<! in)]
                                 (when-let [data (msg-to-data msg)]
                                   (when-not (>! c data)
                                     (close! in)))
                                 (recur)))
                             (close! c))
                         (dd/stream-from conn listen start-from
                                         game-id
                                         :game/last-event
                                         in)
                         c)})))

(defroutes games-routes
  (ANY "/games/:game-id" _ game-page)
  (ANY "/games/:game-id/events" _ game-events)
  (ANY "/games/:game-id/player-ready" _ game-player-ready)
  (ANY "/games/:game-id/discard-picked" _ game-discard-picked)
  (ANY "/games/:game-id/pile-picked" _ game-pile-picked)
  (ANY "/games/:game-id/discard-chosen" _ game-discard-chosen))
