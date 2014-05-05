(ns gin.game-panel
  (:require [gin.transact :as t]
            [datascript :as d]
            [gin.datascript-helpers :as dh]
            [goog.dom :as gdom]
            [gin.dom-helpers :as dom]
            [goog.async.AnimationDelay]
            [goog.events :as events]
            [goog.fx.Dragger :as fxdrag]))

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
        opp-cards-el (map #(:dom/card-el (dh/entity-lookup db-after [:dom/id %])) (:their-cards game))
        our-cards-es (map #(dh/entity-lookup db-after [:dom/id %]) (:our-cards game))
        ;;our-cards
        ;;discard-el
        ;;discard
        ;;discard-position
        [their-region-offset-x their-region-offset-y] (let [p (dom/get-position (dom/get-element "their_region"))]
                                                        [(.-x p) (.-y p)])
        ]
    (.log js/console "our-cards-el+card counts" (count our-cards-el+card))
      (dom/schedule (concat (mapcat #(concat
                                      [(fn [] (dom/show-on-top %2))]
                                      (dom/slide-from %2 [(+ their-region-offset-x 10 (* %1 53)) (+ their-region-offset-y 10 (* %1 4))]))
                                    (range)
                                    opp-cards-el)
                            (mapcat (fn [idx {el :dom/card-el suit :card/suit rank :card/rank}]
                                      (concat
                                       [(fn [] (dom/show-on-top el))]
                                       (dom/slide-from el [(+ 44 (* idx 53)) (+ 306 (* idx 4))])
                                       [(fn [] (dom/set-card-class el (str (name suit) "_" (name rank))))]))
                                    (range)
                                    our-cards-es)
                            #_(concat [(fn [] (dom/show-on-top discard-el))]
                                      (dom/slide-from discard-el discard-position)
                                      [(fn [] (set-card discard-el discard))]))))
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
    (dom/append (dom/build (into [:div {:class "card card_back offscreen_loading"}]
                                 (for [suit ["diamond" "club" "heart" "spade"]
                                       rank "AKQJT98765432"]
                                   [:div {:class (str "card " suit "_" rank) }]))))
    (dom/append (dom/build [:div {:id "table"}
                            [:div {:id "their_region"
                                   :class "region their_region"}]
                            [:div.pile_row
                             [:div.deck {:id "deck"}]
                             [:div.discard_pile {:id "discard_pile"}]]
                            [:div {:id "our_region"
                                   :class "region our_region"}]]))
    (dom/append (dom/build [:div.msg {:id "msg"}]))))

(defn start-game-panel [conn]
  (draw-table)
  (d/listen! conn (fn [report]
                    (render report conn))))
