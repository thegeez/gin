(ns gin.game-panel
  (:require [cljs.core.async :refer [<! put! chan close!]]
            [gin.transact :as t]
            [datascript :as d]
            [gin.datascript-helpers :as dh]
            [goog.dom :as gdom]
            [gin.dom-helpers :as dom]
            [goog.async.AnimationDelay]
            [goog.events :as events]
            [goog.fx.Dragger :as fxdrag]
            [goog.net.ImageLoader :as gnet-image-loader])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn set-msg [msg]
  (dom/set-text (dom/get-element "msg") msg))

(defn in-rect [rect [x y]]
  (and (>= x (. rect -left))
       (<= x (+ (. rect -left) (. rect -width)))
       (>= y (. rect -top))
       (<= y (+ (. rect -top) (. rect -height)))))

(defn in-our-region [x y]
  (let [our-region-bounds (goog.style.getBounds (dom/get-element "our_region"))]
    (in-rect our-region-bounds [x y])))

(defn pile-position []
  (let [pos (dom/get-position (dom/get-element "deck"))]
    [(+ (. pos -x) 4) (+ (. pos -y) 4)]))

(defn set-drag-handler [card-el handler]
  (let [cursor (:cursor handler)]
    (if (= cursor :hand)
      (dom/add-class card-el "cursor_hand")
      (dom/remove-class card-el "cursor_hand"))
    (set! (. card-el -drag-handler) handler)))

(defn undraggable-handler [conn]
  {:cursor :none
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event])
   :drag-end (fn [card-id event])})

(declare pile-drag-handler)
(defn pile-pick-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (when-not (in-our-region (. event -clientX) (. event -clientY))
             (set-drag-handler (dom/get-element card-id) (pile-drag-handler conn))
             (dom/remove-class (dom/get-element "our_region") "region_hover")
             ))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class (dom/get-element "our_region") "region_hover")
                 ;; todo transact this
                 ;;(set-drag-handler card-el (home-region-handler conn))
                 ;;(to-our-discard-move-from-pile card-id)

                 ))})

(defn pile-drag-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (let [card-el (dom/get-element card-id)]
                   (.log js/console "pile drag start" card-el)
                   (dom/add-remove-class card-el "cursor_drag" "cursor_hand")
                   (dom/show-on-top card-el)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el (pile-pick-handler conn))
               (dom/add-class (dom/get-element "our_region") "region_hover")
              )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/schedule (dom/slide-from card-el (pile-position)))))})

(defmulti handle
  (fn [event args report conn] event))

(defmethod handle :game-created
  [_ [game-id] {:keys [db-after] :as report} conn]
  (let [game (dh/entity-lookup db-after [:game-id game-id])]
    (let [container-wrap (let [r (goog.style.getBounds (dom/get-element "game-panel"))]
                           (goog.math.Rect. (. r -left) (. r -top) (- (. r -width) 81) (- (. r -height) 96 35)))
          cards (for [i (range 52)]
                  (let [card-id (str "card-" i)
                        card-el (dom/element :div {:id card-id
                                                   :class "card card_back"})
                        dragger (doto (goog.fx.Dragger. card-el)
                                  (.setLimits container-wrap))]
                    (set! (. card-el -dispose) #(.-dispose dragger))
                    (set-drag-handler card-el (undraggable-handler conn))
                    (events/listen dragger
                                   fxdrag/EventType.START
                                   (fn [event]
                                     (.log js/console (str "START") (:drag-start (. card-el -drag-handler)) card-id)
                                     ((:drag-start (. card-el -drag-handler)) card-id event)))
                    (events/listen dragger
                                   fxdrag/EventType.DRAG
                                   (fn [event]
                                     ((:drag (. card-el -drag-handler)) card-id event)))
                    (events/listen dragger
                                   fxdrag/EventType.END
                                   (fn [event]
                                     ((:drag-end (. card-el -drag-handler)) card-id event)))
                    {:id card-id
                     :idx i
                     :card-el card-el}))]
      (doseq [{:keys [card-el]} cards]
        (dom/append (dom/get-element "deck") card-el))
      (d/transact! conn (concat
                         (for [{:keys [id idx card-el]} cards]
                           {:db/id (* -1 idx)
                            :dom/id id
                            :dom/card-el card-el
                            :card/suit :hidden
                            :card/rank :hidden
                            :card/location :location/deck})
                         [[:db/add (:db/id game) :deck (mapv :id cards)]])))))

(defmethod handle :deal
  [event [game-id] {:keys [db-after] :as report} conn]
  (let [game (dh/entity-lookup db-after [:game-id game-id])
        _ (.log js/console "game" (pr-str game))
        opp-cards-el (map #(:dom/card-el (dh/entity-lookup db-after [:dom/id %])) (:their-cards game))
        our-cards-es (map #(dh/entity-lookup db-after [:dom/id %]) (:our-cards game))
        discard (dh/entity-lookup db-after [:dom/id (first (:discards game))])

        [their-region-offset-x their-region-offset-y] (let [p (dom/get-position (dom/get-element "their_region"))]
                                                        [(+ 10 (.-x p)) (+ 10 (.-y p))])
        discard-position (let [p (dom/get-position (dom/get-element "discard_pile"))]
                           [(+ 12 (.-x p)) (+ 12 (.-y p))])
        [our-region-offset-x our-region-offset-y] (let [p (dom/get-position (dom/get-element "our_region"))]
                                                    [(+ 10 (.-x p)) (+ 10 (.-y p))])
        ]
    (.log js/console "their-cards " (count opp-cards-el))
    (.log js/console "our-cards-es" (pr-str our-cards-es))
    (.log js/console "discard: " (pr-str discard))
      (dom/schedule (concat (mapcat #(concat
                                      [(fn [] (dom/show-on-top %2))]
                                      (dom/slide-from %2 [(+ their-region-offset-x (* %1 53)) (+ their-region-offset-y (* %1 4))]))
                                    (range)
                                    opp-cards-el)
                            (mapcat (fn [idx {el :dom/card-el suit :card/suit rank :card/rank}]
                                      (concat
                                       [(fn [] (dom/show-on-top el))]
                                       (dom/slide-from el [(+ our-region-offset-x (* idx 53)) (+ our-region-offset-y (* idx 4))])
                                       [(fn [] (dom/set-card-class el (str (name suit) "_" (name rank))))]))
                                    (range)
                                    our-cards-es)
                            (concat [(fn [] (dom/show-on-top (:dom/card-el discard)))]
                                    (dom/slide-from (:dom/card-el discard) discard-position)
                                    [(fn [] (dom/set-card-class (:dom/card-el discard) (str (name (:card/suit discard)) "_" (name (:card/rank discard)))))]))))
  )

(defmethod handle :turn-assigned
  [event [game-id turn] {:keys [db-after] :as report} conn]
  (let [[game-eid us turn] (first (d/q '{:find [?e ?us ?turn]
                                         :in [$ ?game-id]
                                         :where [[?e :game-id ?game-id]
                                                 [?e :us ?us]
                                                 [?e :turn ?turn]]}
                                       db-after game-id))]
    (.log js/console "turn-assigned" game-eid us turn)
    (if (= us turn)
      (let [[pile-eid pile-elem] (first (d/q '{:find [?e ?elem]
                                               :in [$ ?game-id ?last]
                                               :where [[?g :game-id ?game-id]
                                                       [?g :deck ?ds]
                                                       [(?last ?ds) ?d]
                                                       [?e :dom/id ?d]
                                                       [?e :dom/card-el ?elem]]}
                                             db-after game-id last))]
        (.log js/console "found top of deck: " pile-eid pile-elem)
        (set-drag-handler pile-elem (pile-drag-handler conn))
        ;; set discard drag handler
        ))))

(defmethod handle :default
  [_ _ _ _] nil)

(defn render [report conn]
  (let [{:keys [db-after]} report]
    (when-let [[event args] (first (d/q '{:find [?event ?args]
                                   :in [$ ?tx]
                                   :where [[?e :event ?event ?tx]
                                           [?e :args ?args]]}
                                        db-after (:max-tx db-after)))]
      (handle event args report conn))))

(defn draw-table []
  (doto (dom/get-element "game-panel")
    (dom/append (dom/build [:div {:id "table"}
                            [:div {:id "their_region"
                                   :class "region their_region"}]
                            [:div.pile_row
                             [:div.deck {:id "deck"}]
                             [:div.discard_pile {:id "discard_pile"}]]
                            [:div {:id "our_region"
                                   :class "region our_region"}]]))
    (dom/append (dom/build [:div.msg {:id "msg"}]))))

(defn load-images []
  ;; addImage id src
  (let [c (chan)
        image-loader (goog.net.ImageLoader.)
        done (atom 0)
        updater (events/listen image-loader goog.events.EventType.LOAD
                               (fn [e]
                                 (set-msg (str "Loading image [" (swap! done inc) "/53]"))))]
    (. image-loader (addImage "/public/images/b.png" "/public/images/b.png"))
    (doseq [img-loc (for [suit ["diamond" "club" "heart" "spade"]
                          rank "AKQJT98765432"]
                      (str "/public/images/" suit "_" rank ".png"))]
      (. image-loader (addImage img-loc img-loc)))
    (events/listenOnce image-loader
                       goog.net.EventType.COMPLETE
                       (fn []
                         (events/unlistenByKey updater)
                         (set-msg "")
                         (close! c)))
    (set-msg "Loading images [0/53]")
    (. image-loader (start))
    c))

(defn start-game-panel [conn]
  ;; todo do go loop here to only do one render per time, also add
  ;; image-loader and call back
  (let [ch (chan 50)]
    (d/listen! conn (fn [report]
                      (put! ch report)))
    (draw-table)
    (go (<! (load-images))
        (loop []
          (when-let [report (<! ch)]
            (render report conn)
            (recur))))))
