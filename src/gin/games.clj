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

(defresource game-events
  :available-media-types ["text/event-stream"]
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
                             listen (get-in ctx [:request :listen])]
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
                                                  e (:event/type (:game/last-event (d/entity db [:game/id "fix1"])))]
                                              (debug "MSG" e (or (d/as-of-t db)
                                                                 (d/basis-t db)))
                                              (str "id: 999\r\n"
                                                   "data: HW!!!!\r\n\r\n")))
                                          c))
                         (comment    
                           (async/put! c (str "id: " start-from "\r\n" "data: hello worl" start-from
                                              "\r\n\r\n"))
                           (async/tap (get-in ctx [:request :listen]) msgs)
                           (go (loop []
                                 (let [msg (<! msgs)
                                       i (:dev/count (d/entity (:db-after msg) :dev/counter) 0)]
                                   ;; there are 3 catch-up cases:
                                   ;; get everything from db from
                                   ;; current connection that is after
                                   ;; last-event-id
                                   ;; upon first report from listen do
                                   ;; the same thing to get everything
                                   ;; after last-event-id upto the
                                   ;; report
                                   ;; then forward all reports

                                   (if (= i 20)
                                     (do (close! c)
                                         (close! msgs))
                                     (do
                                       (debug "msg i is" i)
                                       (>! c (str "id: " i "\r\n" "data: hello worl" i
                                                  "\r\n\r\n"))
                                       (recur)))))))
                         c)})))

(defroutes games-routes
  (ANY "/games/:game-id" _ game-page)
  (ANY "/games/:game-id/events" _ game-events))
