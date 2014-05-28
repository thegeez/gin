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

(def game-page-html (html/html-resource "templates/game.html"))

(defn game-page-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content (html/select game-page-html [:#content]))
   [:#info] (html/content (str (get-in ctx [:game :game/player1 :account/name])
                               " vs. "
                               (get-in ctx [:game :game/player2 :account/name])
                               ". To start: "
                               (get-in ctx [:game :game/to-start :account/name])))
   [:#csrf-token] (html/set-attr :value (get-in ctx [:request :session "__anti-forgery-token"]))))

(defresource game-page
  :available-media-types ["text/html"]
  ;; :authorized :authenticated :todo
  :exists? (fn [ctx]
             (let [db (db (h/conn ctx))
                   game-id (get-in ctx [:request :params :game-id])]
               (when-let [game-e (ffirst (q '{:find [?e]
                                              :in [$ ?game-id]
                                              :where [[?e :game/id ?game-id]]}
                                            db game-id))]
                       {:game (d/entity db game-e)})))
  :handle-ok {}
  :as-response (l/as-template-response game-page-layout))

(def game-action
  {:allowed-methods [:post]
   :available-media-types ["application/edn"]
   ;; :authorized :authenticated :todo
   
   ;; use a early decision point to temporarily create a game here
   :allowed? (fn [ctx]
               {:slug (if (.contains (get-in ctx [:request :headers "user-agent"]) "Chrome")
                        "user2"
                        "user1")})
   :exists? (fn [ctx]
              (let [db (db (h/conn ctx))
                    game-id (get-in ctx [:request :params :game-id])
                    slug (:slug ctx)]
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
   :handle-created {:is-there :a-message-here?}
   :as-response (l/as-template-response nil)})

(defresource game-player-ready
  game-action
  :post! (fn [ctx]
           (let [{:keys [game player]} ctx]
             @(d/transact (h/conn ctx)
                          (let [game-ref (:db/id game)]
                            [[:player-ready game-ref player]])))))

(defresource game-discard-picked
  game-action
  :post! (fn [ctx]
           (let [{:keys [game player]} ctx]
             @(d/transact (h/conn ctx)
                          (let [game-ref (:db/id game)]
                            [[:discard-picked game-ref player]])))))

(defresource game-discard-chosen
  game-action
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
          :player1 (get-in game [:game/player1 :account/name])
          :player2 (get-in game [:game/player2 :account/name])
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
          :our-cards (for [card (get game (if (= player :player1)
                                            :game/player1-cards
                                            :game/player2-cards))]
                       {:suit (:card/suit card)
                        :rank (:card/rank card)})
          })))

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
          :our-cards (for [card (get game (if (= player :player1)
                                            :game/player1-cards
                                            :game/player2-cards))]
                       {:suit (:card/suit card)
                        :rank (:card/rank card)})
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
  (str (:event/type event)))

(defresource game-events
  :available-media-types ["text/event-stream"]
  :allowed? (fn [ctx]
              {:slug (if (.contains (get-in ctx [:request :headers "user-agent"]) "Chrome")
                "user2"
                "user1")})
  :exists? (fn [ctx]
             (let [db (db (h/conn ctx))
                   game-id (get-in ctx [:request :params :game-id])
                   slug (:slug ctx)]
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

  :handle-ok (fn [ctx]
               (lib-rep/ring-response
                {:status 200
                 :headers {"Content-Type" "text/event-stream"
                           "Cache-Control" "no-cache"
                           "Connection" "keep-alive"}
                 :body (let [c (chan)
                             start-from (try (inc (Long/parseLong (get-in ctx [:request :headers "last-event-id"])))
                                             (catch Exception e 0))
                             _ (debug "Start from: " start-from "for player: " (get-in ctx [:player]))
                             msgs (chan)
                             conn (get-in ctx [:request :conn])
                             listen (get-in ctx [:request :listen])
                             here-since (.getTime (java.util.Date.))
                             player (get-in ctx [:player])
                             game-id (get-in ctx [:game :db/id])]
                         (async/go (async/<! (async/timeout 3000))
                                   (d/transact conn [{:db/id [:game/id "fix1"]
                                                      :game/last-event (d/tempid :db.part/user -1)}
                                                     {:db/id (d/tempid :db.part/user -1)
                                                      :event/type :some-mock-event}]))
                         (dd/stream-from conn listen start-from
                                         game-id
                                         :game/last-event
                                         (async/map>
                                          (fn [msg]
                                            (let [db (:db-after msg)
                                                  t (or (d/as-of-t db)
                                                        (d/basis-t db))
                                                  event (:game/last-event (d/entity db [:game/id "fix1"]))]
                                              (debug "MSG" (:event/type event)
                                                     t
                                                     here-since
                                                     start-from
                                                     (<= start-from t))
                                              (str "id: " t "\r\n"
                                                   "data: "
                                                   (spy (event-to-msg event player))
                                                   "\r\n\r\n")))
                                          c))
                         c)})))

(defroutes games-routes
  (ANY "/games/:game-id" _ game-page)
  (ANY "/games/:game-id/events" _ game-events)
  (ANY "/games/:game-id/player-ready" _ game-player-ready)
  (ANY "/games/:game-id/discard-picked" _ game-discard-picked)
  (ANY "/games/:game-id/discard-chosen" _ game-discard-chosen))
