(ns gin.home
  (:require [clojure.tools.logging :refer [debug spy]]
            [gin.util.helpers :as h]
            [gin.util.layout :as l]
            [gin.common :as c]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as lib-rep]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [clojure.core.async :refer [go <! >! chan timeout close!] :as async]
            [datomic.api :refer [db q] :as d]))

(def main-page-html (html/html-resource "templates/main.html"))

(defn main-page-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content (html/select main-page-html [:#content]))))

(defresource main-page
  :available-media-types ["text/html"]
  :handle-ok {}
  :as-response (l/as-template-response main-page-layout))

(defresource events
  :available-media-types ["text/event-stream"]
  :handle-ok (fn [ctx]
               (debug "db is: " (q
                                 '{:find [?e]
                                   :where [[?e :db/doc]]}
                                 (db (h/conn ctx))))
               (debug "db schema version" (d/touch (d/entity @(d/sync (h/conn ctx)) :schema-version)))
               (lib-rep/ring-response
                {:status 200
                 :headers {"Content-Type" "text/event-stream"
                           "Cache-Control" "no-cache"
                           "Connection" "keep-alive"}
                 :body (let [c (chan)
                             start-from (try (inc (Long/parseLong (get-in ctx [:request :headers "last-event-id"])))
                                             (catch Exception e 0))
                             msgs (chan)]
                         (async/tap (get-in ctx [:request :listen]) msgs)
                         (go (loop []
                               (let [msg (<! msgs)
                                     i (:dev/count (d/entity (:db-after msg) :dev/counter) 0)]
                                 (if (= i 20)
                                   (do (close! c)
                                       (close! msgs))
                                   (do
                                     (debug "msg i is" i)
                                     (>! c (str "id: " i "\r\n" "data: hello worl" i
                                                "\r\n\r\n"))
                                     (recur))))))
                         c)})))

(def running (atom true))

(defroutes home-routes
  (ANY "/" _ main-page)
  (ANY "/dev-sse/events" _ events)
  (ANY "/dev-sse/start" _ (fn [req]
                            @(d/transact (:conn req)
                                         [{:db/id (d/tempid :db.part/user)
                                           :db/ident :dev/counter}
                                          {:db/id (d/tempid :db.part/db)
                                           :db/ident :dev/count
                                           :db/valueType :db.type/long
                                           :db/cardinality :db.cardinality/one
                                           :db.install/_attribute :db.part/db}
                                          {:db/id (d/tempid :db.part/user)
                                           :db/ident :inc
                                           :db/fn (d/function {:lang :clojure
                                                               :requires '[[datomic.api :as d]]
                                                               :params '[db]
                                                               :code
                                                               '(let [counter (d/entity db :dev/counter)]
                                                                  [[:db/add (:db/id counter) :dev/count (inc (get counter :dev/count 0))]])})}])
                            (debug "INC: "@(d/transact (:conn req) [[:inc]]))
                            (.start (Thread.
                                     (fn []
                                       (while true
                                         (Thread/sleep 1000)
                                         (when @running
                                           (debug "Trying to transact something")
                                           (try (let [res @(d/transact (:conn req)
                                                                       [[:inc]])]
                                                  (when (= 20 (:dev/count (d/entity (:db-after res) :dev/counter)))
                                                    (debug "FAST forward!")
                                                    (repeatedly 100 (fn [] @(d/transact (:conn req) [[:inc]])))))
                                                (catch Exception e
                                                  (reset! running false)
                                                  (debug "FAIL: " e)))
                                           (debug "Transacted something"))))))
                            {:status 200
                             :body "started"}))
  (ANY "/dev-sse/stop" _ (fn [req]
                           (reset! running false)
                           {:status 200
                            :body "stopped"})))
