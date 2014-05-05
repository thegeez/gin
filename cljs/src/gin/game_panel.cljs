(ns gin.game-panel
  (:require [gin.transact :as t]
            [datascript :as d]
            [gin.datascript-helpers :as dh]
            [goog.dom :as gdom]
            [gin.dom-helpers :as dom]
            [goog.async.AnimationDelay]
            [goog.events :as events]
            [goog.fx.Dragger :as fxdrag]))

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

(defn home-region-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (let [card-el (dom/get-element card-id)]
                   (dom/add-remove-class (dom/get-element card-id) "cursor_drag" "cursor_hand")
                   (set! (. card-el -drag-origin) (dom/get-position card-el))
                   (dom/show-on-top card-el)))
   :drag (fn [card-id event])
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)
                     pos (dom/get-position card-el)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (when-not (in-our-region (. pos -x) (. pos -y))
                   (dom/fly-card card-el (. card-el -drag-origin)))))})

(defmulti handle
  (fn [event args report conn] event))

(defmethod handle :deal
  [event [game-id] {:keys [db-after] :as report} conn]
  (set-msg "Dealing ...")
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
      (dom/schedule (concat (mapcat #(concat
                                      [(fn [] (dom/show-on-top %2))]
                                      (dom/slide-from %2 [(+ their-region-offset-x (* %1 53)) (+ their-region-offset-y (* %1 4))]))
                                    (range)
                                    opp-cards-el)
                            (mapcat (fn [idx {el :dom/card-el suit :card/suit rank :card/rank}]
                                      (concat
                                       [(fn [] (dom/show-on-top el))]
                                       (dom/slide-from el [(+ our-region-offset-x (* idx 53)) (+ our-region-offset-y (* idx 4))])
                                       [(fn []
                                          (dom/set-card-class el (str (name suit) "_" (name rank)))
                                          (set-drag-handler el (home-region-handler conn)))]))
                                    (range)
                                    our-cards-es)
                            (concat [(fn [] (dom/show-on-top (:dom/card-el discard)))]
                                    (dom/slide-from (:dom/card-el discard) discard-position)
                                    [(fn [] (dom/set-card-class (:dom/card-el discard) (str (name (:card/suit discard)) "_" (name (:card/rank discard)))))]
                                    [#(set-msg "Ginrummy")]))))
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

(defn draw-table [conn]
  (doto (dom/get-element "game-panel")
    (dom/append (dom/build [:div {:id "table"}
                            [:div {:id "their_region"
                                   :class "region their_region"}]
                            [:div.pile_row
                             [:div.deck {:id "deck"}]
                             [:div.discard_pile {:id "discard_pile"}]]
                            [:div {:id "our_region"
                                   :class "region our_region"}]]))
    (dom/append (dom/build [:div.msg {:id "msg"}]))
    (dom/append (dom/build (into [:div]
                                 (for [suit [:diamond :club :heart :spade]
                                       rank [:A :K :Q :J :T :r9 :r8 :r7 :r6 :r5 :r4 :r3 :r2]]
                                   [:div {:class (str "offscreen_loading card " (str (name suit) "_" (name rank)))}])))))
  (set-msg "Ginrummy.")
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
    (d/transact! conn (for [{:keys [id idx card-el]} cards]
                        {:db/id (* -1 idx)
                         :dom/id id
                         :dom/card-el card-el
                         :card/suit :hidden
                         :card/rank :hidden
                         :card/location :location/deck}))))

(defn start-game-panel [conn]
  (d/listen! conn (fn [report]
                    (render report conn)))
  (draw-table conn))
