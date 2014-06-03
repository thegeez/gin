(ns gin.game-panel
  (:require [gin.transact :as t]
            [datascript :as d]
            [gin.datascript-helpers :as dh]
            [gin.dom-helpers :as dom]
            [gin.animator :as animator]
            [goog.events :as events]
            [goog.fx.Dragger :as fxdrag]
            [goog.math :as gmath]))

(defn set-msg [msg]
  (dom/set-text (dom/get-element "msg") msg))

(defn in-rect [rect [x y]]
  (and (>= x (. rect -left))
       (<= x (+ (. rect -left) (. rect -width)))
       (>= y (. rect -top))
       (<= y (+ (. rect -top) (. rect -height)))))

(defn in-our-region [x y]
  (let [our-region-bounds (dom/get-bounds (dom/get-element "our_region"))]
    (in-rect our-region-bounds [x y])))

(defn in-discard-pile [x y]
  (let [discard-bounds (dom/get-bounds (dom/get-element "discard_pile"))]
    (in-rect discard-bounds [x y])))

(defn pile-position []
  (let [[x y] (dom/get-position (dom/get-element "pile"))]
    [(+ x 4) (+ y 4)]))

(defn discard-position []
  (let [[x y] (dom/get-position (dom/get-element "discard_pile"))]
    [(+ 12 x) (+ 12 y)]))

(defn their-region-position []
  (let [[x y] (dom/get-position (dom/get-element "their_region"))]
    [(+ 10 x) (+ 10 y)]))

(defn our-region-position []
  (let [[x y] (dom/get-position (dom/get-element "our_region"))]
    [(+ 10 x) (+ 10 y)]))

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
                 [x y] (dom/get-position card-el)]
             (when-not (in-our-region x y)
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
                   (dom/add-remove-class card-el "cursor_drag" "cursor_hand")
                   (dom/show-on-top card-el)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 [x y] (dom/get-position card-el)]
             (when (in-our-region x y)
               (set-drag-handler card-el (pile-pick-handler conn))
               (dom/add-class (dom/get-element "our_region") "region_hover")
              )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (animator/slide card-el (pile-position))))})

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
                     [x y] (dom/get-position card-el)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (when-not (in-our-region x y)
                   (animator/slide card-el (. card-el -drag-origin)))))})

(declare discard-drag-handler)
(defn discard-pick-handler [conn]
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 [x y] (dom/get-position card-el)]
             (when-not (in-our-region x y)
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
                 [x y] (dom/get-position card-el)]
             (when (in-our-region x y)
               (set-drag-handler card-el (discard-pick-handler conn))
               (dom/add-class (dom/get-element "our_region") "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (animator/slide card-el (discard-position))))})

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
                 (.log js/console "snap to discard slide" (.-anim-idx card-el) (.-id card-el))
                 (animator/slide card-el (discard-position)
                        #(d/transact! conn [[:db.fn/call t/our-discard-chosen card-id]]))))})

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
                     [x y] (dom/get-position card-el)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (when-not (in-our-region x y)
                   (animator/slide card-el (. card-el -drag-origin)))))})

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
    (dom/append (dom/build [:div {:class (str "offscreen_loading card card_back")}])))
  (let [container-wrap (let [r (dom/get-bounds (dom/get-element "game-panel"))]
                         (goog.math.Rect. (. r -left) (. r -top) (- (. r -width) 81) (- (. r -height) 96 37)))
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
    (doseq [{:keys [card-el idx]} cards]
      (set! (.-anim-idx card-el) idx)
      (dom/append (dom/get-element "pile") card-el))
    (d/transact! conn (for [{:keys [id idx card-el]} cards]
                        {:db/id (* -1 idx)
                         :dom/id id
                         :dom/el card-el
                         :card/suit :hidden
                         :card/rank :hidden}))))

(defn anim-deal [db game-id conn]
  (let [game (dh/entity-lookup db [:game-id game-id])
        _ (.log js/console "game: " game game-id)
        opp-cards-el (map (comp :dom/el #(dh/entity-lookup db [:dom/id %])) (:their-cards game))
        our-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:our-cards game))
        discard (dh/entity-lookup db [:dom/id (first (:discards game))])

        [their-region-offset-x their-region-offset-y] (their-region-position)
        [our-region-offset-x our-region-offset-y] (our-region-position)
        their-deal (map (fn [idx el]
                          [el
                           [(+ their-region-offset-x (* idx 53)) (+ their-region-offset-y (* idx 4))]])
                        (range)
                        opp-cards-el)
        our-deal (map (fn [idx {id :dom/id el :dom/el suit :card/suit rank :card/rank}]
                        [el
                         [(+ our-region-offset-x (* idx 53)) (+ our-region-offset-y (* idx 4))]
                         (fn []
                           (dom/set-card-class el (str (name suit) "_" (name rank)))
                           (set-drag-handler el (home-region-handler conn)))])
                      (range)
                      our-cards-es)
        [first-deal second-deal] (if (= (:starting game) (:us game))
                                   [our-deal their-deal]
                                   [their-deal our-deal])
        discard-deal (let [discard-el (:dom/el discard)]
                       [discard-el
                        (discard-position)
                        (fn []
                          (dom/set-card-class discard-el (str (name (:card/suit discard)) "_" (name (:card/rank discard))))
                          (dom/set-timeout
                           #(d/transact! conn [[:db.fn/call t/player-ready (:game-id game) (:us game)]])
                           300))])
        actions (concat first-deal
                        second-deal
                        [discard-deal])
        step (fn step [[action & actions]]
               (when action
                 (let [[el to f] action]
                   (dom/show-on-top el)
                   (animator/slide el to
                                   (fn []
                                     (when f (f))
                                     (step actions))))))]
    (step actions)))

(defn draw [db game-id conn]
  (let [game (dh/entity-lookup db [:game-id game-id])]
    (cond
     (not (:starting game))
     (set-msg "Game created.")
     (and (not (:turn game))
          (not (:ready game)))
     (do
       (set-msg "Dealing ...")
       (anim-deal db game-id conn))
     (and (not (:turn game))
          (not (:result game)))
     (set-msg "Ready, waiting on opponent")
     :else
     (let [_ (.log js/console "Regular draw case")
           us-pick-card (and (= (:us game) (:turn game))
                             (= 10 (count (:our-cards game)))
                             (= (:move game) :assigned)
                             (not (:result game)))
           our-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:our-cards game))
           opp-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:their-cards game))
           pile-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:pile game))
           discard-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:discards game))
           [their-region-offset-x their-region-offset-y] (their-region-position)
           [our-region-offset-x our-region-offset-y] (our-region-position)
           pile-position (pile-position)
           discard-position (discard-position)]
       ;; pile-cards, anim to pile when needed, including reshuffle
       (doseq [pile-card-es pile-cards-es
               :let [pile-card-el (:dom/el pile-card-es)]]
         (dom/set-card-class pile-card-el "card_back")
         (dom/show-on-top pile-card-el)
         (animator/slide pile-card-el pile-position))
       (when-let [pile-card-el (:dom/el (last pile-cards-es))]
         (if us-pick-card
           (set-drag-handler pile-card-el (pile-drag-handler conn))
           (set-drag-handler pile-card-el (undraggable-handler conn))))

       ;; opp-cards positions
       (let [opp-cards-el (map :dom/el opp-cards-es)]
         ;; put 10 or 11 of opp cards in usual place
         (let [[x-step y-step] (if (= 10 (count opp-cards-el))
                                 [53 4]
                                 [48.18 3.63])]
           (.log js/console "opp reg")
           (doseq [[i e] (map list (range) opp-cards-es)]
             (let [el (:dom/el e)]
               (animator/slide el [(long (+ their-region-offset-x (* i x-step)))
                                   (long (+ their-region-offset-y (* i y-step)))]))))
         ;; show what opp card were when game is finished
         (doseq [[el es] (map list opp-cards-el opp-cards-es)]
           (let [suit (:card/suit es)
                 rank (:card/rank es)]
             (dom/show-on-top el)
             (dom/set-card-class el (if (= :hidden suit)
                                      "card_back"
                                      (str (name suit) "_" (name rank)))))))

       ;; discards
       (.log js/console "discards")
       (doseq [discard-card-es discard-cards-es
               :let [discard-card-el (:dom/el discard-card-es)]]
         (let [suit (:card/suit discard-card-es)
               rank (:card/rank discard-card-es)]
           (dom/set-card-class discard-card-el (str (name suit) "_" (name rank)))
           (animator/slide discard-card-el discard-position)))
       (.log js/console "drag discards")
       (when-let [discard-card-el (:dom/el (last discard-cards-es))]
         (dom/show-on-top discard-card-el)
         (if us-pick-card
           (set-drag-handler discard-card-el (discard-drag-handler conn))
           (set-drag-handler discard-card-el (undraggable-handler conn))))

       ;; our-cards
       (when (= pile-position
                (dom/get-position (:dom/el (first our-cards-es)))
                (dom/get-position (:dom/el (second our-cards-es))))
         ;; only when rejoining game
         (let [[x-step y-step] (if (= 10 (count our-cards-es))
                                 [53 4]
                                 [48.18 3.63])]
           (doseq [[i e] (map list (range) our-cards-es)]
             (let [el (:dom/el e)
                   suit (:card/suit e)
                   rank (:card/rank e)]
               (dom/set-card-class el (str (name suit) "_" (name rank)))
               (animator/slide el [(long (+ our-region-offset-x (* i x-step)))
                                   (long (+ our-region-offset-y (* i y-step)))])))))

       ;; set proper drag handlers based on what we're allowed to do
       (if (and (= (:turn game) (:us game))
                (= (:move game) :assigned))
         (if (= 11 (count our-cards-es))
           ;; choose discard
           (do
             (set-msg "Your turn. Drag a card from your hand to discard.")
             (doseq [our-card-es our-cards-es]
               (let [our-card-el (:dom/el our-card-es)
                     suit (:card/suit our-card-es)
                     rank (:card/rank our-card-es)]
                 (dom/set-card-class our-card-el (if (= suit :hidden)
                                                   "card_back"
                                                   (str (name suit) "_" (name rank))))
                 (set-drag-handler our-card-el (home-discard-handler conn)))))
           ;; pick from pile or discard
           (do
             (set-msg "Your turn. Draw a card or pickup a discard.")
             (doseq [our-card-es our-cards-es]
               (set-drag-handler (:dom/el our-card-es) (home-region-handler conn)))))
         (when-not (:result game)
           ;; not our turn, home-region only
           (do
             (if (not= (:turn game) (:us game))
               (set-msg "Opponent's turn.")
               (set-msg "Your turn is done."))
             (doseq [our-card-es our-cards-es]
               (set-drag-handler (:dom/el our-card-es) (home-region-handler conn))))))
       (when-let [result (:result game)]
         (set-msg
          (condp = result
            :pat-tie "Game over: Both dealt gin for a tie."
            :pat-our-win "Game over: You win, dealt gin."
            :pat-opp-win "Game over: Opponent wins, dealt gin."
            :our-win "Game over: You win!"
            :opp-win "Game over: Opponent wins.")))))))

(defn draw-game [report conn]
  (let [{:keys [db-after]} report]
    (when-let [[event [game-id & args]] (first (d/q '{:find [?event ?args]
                                             :in [$ ?tx]
                                             :where [[?e :event ?event ?tx]
                                                     [?e :args ?args]]}
                                           db-after (:max-tx db-after)))]
      (.log js/console "event: " (pr-str (into [event game-id] args)))
      (if (= event :error)
        (set-msg "An error occured, refresh the page.")
        (draw db-after game-id conn)))))

(defn start-game-panel [conn]
  (d/listen! conn (fn [report]
                    (draw-game report conn)))
  (draw-table conn))
