(ns gin.common
  (:require [clojure.tools.logging :refer [info debug spy]]
            [gin.util.layout :as l]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def application-html (html/html-resource "templates/application.html"))

(defn emit-application [ctx & clauses]
  (assert (even? (count clauses)) "Need even number of clauses for enlive (forgot to pass ctx?)")
  (let [friend-auth (friend/current-authentication (:request ctx))]
    (apply
     l/emit application-html
     [:#flash] (when-let [flash (get-in ctx [:request :flash])]
                 (html/content flash))
     [:ul.navbar-nav :li] (if (contains? (:roles friend-auth) :admin)
                 (html/after [{:tag :li
                               :attrs nil
                               :content [{:tag :a
                                          :attrs {:href "/admin"}
                                          :content ["Admin"]}]}])
                 identity)
     [:#logged-in] (when friend-auth
                     (html/transform-content
                      [:.rel-profile] (html/content (str "Welcome, " (:username friend-auth)))))
     (concat clauses
             [[[:form (html/nth-child 1)]]
              (html/append [{:tag :input
                             :attrs {:type "hidden"
                                     :name "__anti-forgery-token"
                                     :value (get-in ctx [:request :session "__anti-forgery-token"])}
                             :content []}])]))))
