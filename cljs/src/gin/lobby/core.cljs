(ns gin.lobby.core
  (:require [gin.event-source :as event-source]
            [gin.ui.dom-helpers :as domh]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as dom]
            [ajax.core :refer [GET POST PUT] :as ajax-core]))

(defn csrf-token []
  (-> (goog.dom.getElement "csrf-token")
      (.getAttribute "value")))

(defn error-handler []
  (domh/show-element (domh/get-element "network-header-error") true))

(defn goto-url [url]
  (set! (.-location js/window) url))

(defn POST-ACTION [url options]
  (POST url
        (merge {:params {}
                :handler (fn [res])
                :error-handler (fn [res]
                                 (error-handler))
                :format (merge (ajax-core/edn-request-format)
                               {:read (fn [res]
                                        (let [res-text (.getResponseText res)]
                                          (when (pos? (count res-text))
                                            (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                                :description "EDN (CUSTOM)"})
                :headers {"X-CSRF-Token" (csrf-token)}}
               options)))

(defn invite [slug]
  (POST-ACTION "/lobby/invite"
               {:params {:opp-slug slug}}))

(defn play [slug]
  (POST-ACTION "/lobby/play"
               {:params {:opp-slug slug}}))

(defn accept-play [slug]
  (POST-ACTION "/lobby/start"
               {:params {:opp-slug slug}}))

(q/defcomponent Item
  [opp]
  (dom/li {:className "list-group-item"}
          (let [[text btn-class f] (cond
                          (:available opp)
                          ["Play" "btn-success"
                           (fn [_]
                             (play (:slug opp)))]
                          (:invited opp)
                          ["Awaiting invite reply ..."
                           "btn-disabled"
                           (fn [_])]
                          :else
                          ["Invite" "btn-primary"
                           (fn [_]
                             (invite (:slug opp)))])]
            (dom/div {}
                     (dom/label {:className "opp-name"}
                                (:username opp))
                     (dom/button {:className (str "btn btn-right btn-lobby-list " btn-class)
                                  :onClick f}
                                 text)))))

(q/defcomponent OppList
  [opps]
  (apply dom/ul {:id "opp-list"
                 :className "list-group opp-list-frame"}
         (if (seq opps)
           (map #(Item (val %)) (sort-by key opps))
           [(dom/li {:className "list-group-item"}
                     "No human opponents available")])))

(defn start-quiescent [opps]
  (add-watch opps :quiescent
             (fn [_ _ old state]
               (q/render (OppList state)
                         (domh/get-element "opponent-list"))))
  (swap! opps identity))

(defn ^:export main []
  (.log js/console "Hello world")
  (let [opps (atom {})]
    (start-quiescent opps)
    (let [source (event-source/event-source "/lobby/events"
                                            :on-message (fn [event]
                                                          (cond
                                                           (= (:type event) :open)
                                                           (reset! opps (zipmap
                                                                         (map :slug (:opps event))
                                                                         (:opps event)))
                                                           (= (:type event) :joined)
                                                           (swap! opps assoc
                                                                  (:slug event)
                                                                  {:slug (:slug event)
                                                                   :username (:username event)})
                                                           (= (:type event) :invited)
                                                           (swap! opps assoc
                                                                  (:slug event)
                                                                  {:slug (:slug event)
                                                                   :username (:username event)
                                                                   :invited true})
                                                           (= (:type event) :available)
                                                           (swap! opps assoc
                                                                  (:slug event)
                                                                  {:slug (:slug event)
                                                                   :username (:username event)
                                                                   :available true})
                                                           (= (:type event) :play)
                                                           (do
                                                             (accept-play (:slug event))
                                                             opps)
                                                           (= (:type event) :game-created)
                                                           (goto-url (:url event))))
                                            :on-error (fn []
                                                        (error-handler)))])))
