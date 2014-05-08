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

(defmulti msg
  (fn [event args report conn]
    event))

(defmethod msg :deal
  [_ _ _ _]
  (set-msg "Dealing ..."))

(defmethod msg :player-ready
  [_ _ _ _]
  (set-msg "Ready"))

(defmethod msg :turn-assigned
  [event [game-id] {:keys [db-after]} _]
  (let [{:keys [us turn] :as game} (dh/entity-lookup db-after [:game-id game-id])]
    (set-msg (if (= us turn)
               "Your turn. Draw a card or pickup a discard."
               "Opponent to move."))))

(defmethod msg :our-pile-picked
  [_ _ _ _]
  (set-msg "You've chosen a card from the deck."))

(defmethod msg :their-pile-picked
  [_ _ _ _]
  (set-msg "Opponent picked a card from the deck."))

(defmethod msg :our-discard-picked
  [_ _ _ _]
  (set-msg "Drag a card from your hand to discard."))

(defmethod msg :our-discard-chosen
  [_ _ _ _]
  (set-msg "Your move is done."))

(defmethod msg :default
  [event args report conn]
  nil)

(defn in-rect [rect [x y]]
  (and (>= x (. rect -left))
       (<= x (+ (. rect -left) (. rect -width)))
       (>= y (. rect -top))
       (<= y (+ (. rect -top) (. rect -height)))))

(defn in-our-region [x y]
  (let [our-region-bounds (goog.style.getBounds (dom/get-element "our_region"))]
    (in-rect our-region-bounds [x y])))

(defn in-discard-pile [x y]
  (let [discard-bounds (goog.style.getBounds (dom/get-element "discard_pile"))]
    (in-rect discard-bounds [x y])))

(defn pile-position []
  (let [pos (dom/get-position (dom/get-element "pile"))]
    [(+ (. pos -x) 4) (+ (. pos -y) 4)]))

(defn discard-position []
  (let [p (dom/get-position (dom/get-element "discard_pile"))]
    [(+ 12 (.-x p)) (+ 12 (.-y p))]))

(defn their-region-position []
  (let [p (dom/get-position (dom/get-element "their_region"))]
    [(+ 10 (.-x p)) (+ 10 (.-y p))]))

(defn our-region-position []
  (let [p (dom/get-position (dom/get-element "our_region"))]
    [(+ 10 (.-x p)) (+ 10 (.-y p))]))

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
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when-not (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el (pile-drag-handler conn))
               (dom/remove-class (dom/get-element "our_region") "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class (dom/get-element "our_region") "region_hover")
                 (d/transact! conn [[:db.fn/call t/our-pile-picked card-id]])
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

(declare discard-drag-handler)
(defn discard-pick-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when-not (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el (discard-drag-handler conn))
               (dom/remove-class (dom/get-element "our_region") "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class (dom/get-element "our_region") "region_hover")
                 (set-drag-handler card-el (home-region-handler conn))
                 (d/transact! conn [[:db.fn/call t/our-discard-picked card-id]])
                 ))})

(defn discard-drag-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                   (dom/add-remove-class (dom/get-element card-id) "cursor_drag" "cursor_hand")
                   (dom/show-on-top (dom/get-element card-id)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el (discard-pick-handler conn))
               (dom/add-class (dom/get-element "our_region") "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/schedule (dom/slide-from card-el (discard-position)))))})

(declare home-discard-handler)
(defn snap-to-discard-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)]
             (when-not (in-discard-pile (. event -clientX) (. event -clientY))
               (set-drag-handler card-el (home-discard-handler conn))
               (dom/remove-class (dom/get-element "discard_pile") "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class (dom/get-element "discard_pile") "region_hover")
                 (dom/schedule (concat (dom/slide-from card-el (discard-position))
                                       ;;[#(our-move-drop-discard
                                       ;;card-id)]
                                       [#(d/transact! conn [[:db.fn/call t/our-discard-chosen card-id]])]))))})

(defn home-discard-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (let [card-el (dom/get-element card-id)]
                   (dom/add-remove-class (dom/get-element card-id) "cursor_drag" "cursor_hand")
                   (set! (. card-el -drag-origin) (dom/get-position card-el))
                   (dom/show-on-top card-el)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)]
             (when (in-discard-pile (. event -clientX) (. event -clientY))
               (dom/add-class (dom/get-element "discard_pile") "region_hover")
               (set-drag-handler card-el (snap-to-discard-handler conn)))))
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
  (let [game (dh/entity-lookup db-after [:game-id game-id])
        opp-cards-el (map #(:dom/card-el (dh/entity-lookup db-after [:dom/id %])) (:their-cards game))
        our-cards-es (map #(dh/entity-lookup db-after [:dom/id %]) (:our-cards game))
        discard (dh/entity-lookup db-after [:dom/id (first (:discards game))])

        [their-region-offset-x their-region-offset-y] (their-region-position)
        [our-region-offset-x our-region-offset-y] (our-region-position)]
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
                                    (dom/slide-from (:dom/card-el discard) (discard-position))
                                    [(fn [] (dom/set-card-class (:dom/card-el discard) (str (name (:card/suit discard)) "_" (name (:card/rank discard)))))]
                                    [10 (fn []
                                          (d/transact! conn [[:db.fn/call t/player-ready (:game-id game) (:us game)]]))]))))
  )

(defmethod handle :turn-assigned
  [event [game-id turn] {:keys [db-after] :as report} conn]
  (let [{:keys [us turn] :as game} (dh/entity-lookup db-after [:game-id game-id])
        pile-elem (:dom/card-el (dh/entity-lookup db-after [:dom/id (last (:pile game))]))
        discard-elem (:dom/card-el (dh/entity-lookup db-after [:dom/id (last (:discards game))]))]
    (if (= us turn)
      (do
        (set-drag-handler pile-elem (pile-drag-handler conn))
        (set-drag-handler discard-elem (discard-drag-handler conn)))
      (do
        (set-drag-handler pile-elem (undraggable-handler conn))
        (set-drag-handler discard-elem (undraggable-handler conn))))))

(defmethod handle :our-pile-picked
  [event [game-id card-id] {:keys [db-after] :as report} conn]
  (set-drag-handler (dom/get-element card-id) (undraggable-handler conn)))

(defmethod handle :our-pile-pick-revealed
  [event [game-id card-id suit rank] {:keys [db-after] :as report} conn]
  (dom/set-card-class (dom/get-element card-id) (str (name suit) "_" (name rank)))
  (.log js/console "our-cards: " (pr-str (:our-cards (dh/entity-lookup db-after [:game-id game-id]))))
  (doseq [card-id (:our-cards (dh/entity-lookup db-after [:game-id game-id]))]
    (set-drag-handler (dom/get-element card-id) (home-discard-handler conn))))

(defmethod handle :our-discard-picked
  [event [game-id card-id] {:keys [db-after] :as report} conn]
  (let [{:keys [pile our-cards] :as game} (dh/entity-lookup db-after [:game-id game-id])
        pile-elem (:dom/card-el (dh/entity-lookup db-after [:dom/id (last pile)]))
        discard-elem (:dom/card-el (dh/entity-lookup db-after [:dom/id card-id]))]
    (set-drag-handler pile-elem (undraggable-handler conn))
    (doseq [card-id (:our-cards game)]
      (set-drag-handler (dom/get-element card-id) (home-discard-handler conn)))))

(defmethod handle :our-discard-chosen
  [event [game-id card-id] {:keys [db-after] :as report} conn]
  (set-drag-handler (dom/get-element card-id) (undraggable-handler conn))
  (doseq [card-id (:our-cards (dh/entity-lookup db-after [:game-id game-id]))]
    (set-drag-handler (dom/get-element card-id) (home-region-handler conn))))

(defmethod handle :their-pile-picked
  [event [game-id card-id] {:keys [db-after] :as report} conn]
  (let [game (dh/entity-lookup db-after [:game-id game-id])
        insert-idx (rand-nth (range 10))
        opp-cards (pop (:their-cards game))
        pile-card (dom/get-element (peek (:their-cards game)))
        to-card (dom/get-element (nth opp-cards insert-idx))
        [their-region-offset-x their-region-offset-y] (their-region-position)]
    (dom/schedule (concat (dom/simultanious
                           (map #(dom/slide-from (dom/get-element %2) [(+ their-region-offset-x (* %1 48.18)) (+ their-region-offset-y (* %1 3.63))])
                                (remove #{insert-idx} (range 10))
                                opp-cards))
                          [#(set! (.. pile-card -style -zIndex) (.. to-card -style -zIndex))]
                          (dom/slide-from pile-card [(+ their-region-offset-x (* insert-idx 48.18)) (+ their-region-offset-y (* insert-idx 3.63))])))))

(defmethod handle :default
  [_ _ _ _] nil)

(defn render [report conn]
  (let [{:keys [db-after]} report]
    (when-let [[event args] (first (d/q '{:find [?event ?args]
                                   :in [$ ?tx]
                                   :where [[?e :event ?event ?tx]
                                           [?e :args ?args]]}
                                        db-after (:max-tx db-after)))]
      (msg event args report conn)
      (handle event args report conn))))

(defn draw-table [conn]
  (doto (dom/get-element "game-panel")
    (dom/append (dom/build [:div {:id "table"}
                            [:div {:id "their_region"
                                   :class "region their_region"}]
                            [:div.pile_row
                             [:div.pile {:id "pile"}]
                             [:div.discard_pile {:id "discard_pile"}]]
                            [:div {:id "our_region"
                                   :class "region our_region"}]]))
    (dom/append (dom/build [:div.msg {:id "msg"}]))
    (dom/append (dom/build (into [:div]
                                 (for [suit [:diamond :club :heart :spade]
                                       rank [:A :K :Q :J :T :r9 :r8 :r7 :r6 :r5 :r4 :r3 :r2]]
                                   [:div {:class (str "offscreen_loading card " (str (name suit) "_" (name rank)))}])))))
  (let [container-wrap (let [r (goog.style.getBounds (dom/get-element "game-panel"))]
                         (goog.math.Rect. (. r -left) (. r -top) (- (. r -width) 81) (- (. r -height) 96 38)))
        [pile-x pile-y] (pile-position)
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
      (dom/append (dom/get-element "pile") card-el))
    (d/transact! conn (for [{:keys [id idx card-el]} cards]
                        {:db/id (* -1 idx)
                         :dom/id id
                         :dom/card-el card-el
                         :card/suit :hidden
                         :card/rank :hidden}))))

(defn start-game-panel [conn]
  (d/listen! conn (fn [report]
                    (render report conn)))
  (draw-table conn))
