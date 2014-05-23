(ns gin.games
  (:require [clojure.tools.logging :refer [debug spy]]
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
                               (get-in ctx [:game :game/to-start :account/name])))))

(defresource game-page
  :available-media-types ["text/html"]
  ;; :authorized :authenticated :todo
          
  ;; use a early decision point to temporarily create a game here
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

(defmulti event-to-msg (fn [event player]
                         (:event/type event)))

(defmethod event-to-msg :game-created
  [event player]
  (let [game (:event/game event)]
    (str {:event :game-created
          :game-id (:game/id game)
          :player1 (get-in game [:game/player1 :account/name])
          :player2 (get-in game [:game/player2 :account/name])
          :to-start (if (= (:game/to-start game) (:game/player1 game))
                      :player1
                      :player2)})))

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
                             msgs (chan)
                             conn (get-in ctx [:request :conn])
                             listen (get-in ctx [:request :listen])
                             here-since (.getTime (java.util.Date.))
                             player (get-in ctx [:player])]
                         (async/go (async/<! (async/timeout 3000))
                                   (d/transact conn [{:db/id [:game/id "fix1"]
                                                      :game/last-event (d/tempid :db.part/user -1)}
                                                     {:db/id (d/tempid :db.part/user -1)
                                                      :event/type :some-mock-event}]))
                         (dd/stream-from conn listen 0
                                         [:game/id "fix1"]
                                         :game/last-event
                                         (async/map>
                                          (fn [msg]
                                            (let [db (:db-after msg)
                                                  t (or (d/as-of-t db)
                                                        (d/basis-t db))
                                                  event (:game/last-event (d/entity db [:game/id "fix1"]))]
                                              (debug "MSG" (:event/type event)
                                                     t
                                                     here-since)
                                              (str "id: " t "\r\n"
                                                   "data: "
                                                   (spy (event-to-msg event player))
                                                   "\r\n\r\n")))
                                          c))
                         c)})))

(defroutes games-routes
  (ANY "/games/:game-id" _ game-page)
  (ANY "/games/:game-id/events" _ game-events))
