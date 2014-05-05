(ns gin.home
  (:require [clojure.tools.logging :refer [debug spy]]
            [gin.util.layout :as l]
            [gin.common :as c]
            [liberator.core :refer [resource defresource]]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def main-page-html (html/html-resource "templates/main.html"))

(defn main-page-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content (html/select main-page-html [:#content]))))

(defresource main-page
  :available-media-types ["text/html"]
  :handle-ok {}
  :as-response (l/as-template-response main-page-layout))

(defroutes home-routes
  (ANY "/" _ main-page))
