(ns gin.home
  (:require [clojure.tools.logging :refer [debug spy]]
            [gin.util.layout :as l]
            [gin.common :as c]
            [liberator.core :refer [resource defresource]]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [clojure.core.async :refer [go <! >! chan timeout close!] :as async]))

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
               (liberator.representation/ring-response
                {:status 200
                 :headers {"Content-Type" "text/event-stream"
                           "Cache-Control" "no-cache"
                           "Connection" "keep-alive"}
                 :body (let [c (chan)
                             start-from (try (inc (Long/parseLong (get-in ctx [:request :headers "last-event-id"])))
                                             (catch Exception e 0))]
                         (go (loop [i start-from]
                               (if (< i 20)
                                 (do
                                   (<! (timeout 1000))
                                   (>! c (str "id: " i "\r\n" "data: hello worl" i "\r\n\r\n"))
                                   (recur (inc i)))
                                 (close! c))))
                         c)})))

(defroutes home-routes
  (ANY "/" _ main-page)
  (ANY "/dev-sse/events" _ events))
