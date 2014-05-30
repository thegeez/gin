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
  (.log js/console "set-msg" msg)
  (dom/set-text (dom/get-element "msg") msg))

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
  (let [container-wrap (let [r (goog.style.getBounds (dom/get-element "game-panel"))]
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
    (doseq [{:keys [card-el]} cards]
      (dom/append (dom/get-element "pile") card-el))
    (d/transact! conn (for [{:keys [id idx card-el]} cards]
                        {:db/id (* -1 idx)
                         :dom/id id
                         :card/suit :hidden
                         :card/rank :hidden}))))

(defn anim-deal [db game-id conn]
  (let [game (dh/entity-lookup db [:game-id game-id])
        _ (.log js/console "game: " game game-id)
        opp-cards-el (map dom/get-element (:their-cards game))
        our-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:our-cards game))
        discard (dh/entity-lookup db [:dom/id (first (:discards game))])

        [their-region-offset-x their-region-offset-y] (their-region-position)
        [our-region-offset-x our-region-offset-y] (our-region-position)
        their-deal (mapcat #(concat
                             [(fn [] (dom/show-on-top %2))]
                             (dom/slide-from %2 [(+ their-region-offset-x (* %1 53)) (+ their-region-offset-y (* %1 4))]))
                           (range)
                           opp-cards-el)
        our-deal (mapcat (fn [idx {id :dom/id suit :card/suit rank :card/rank}]
                           (let [el (dom/get-element id)]
                             (concat
                              [(fn [] (dom/show-on-top el))]
                              (dom/slide-from el [(+ our-region-offset-x (* idx 53)) (+ our-region-offset-y (* idx 4))])
                              [(fn []
                                 (dom/set-card-class el (str (name suit) "_" (name rank)))
                                 (set-drag-handler el (home-region-handler conn)))])))
                         (range)
                         our-cards-es)
        [first-deal second-deal] (if (= (:starting game) (:us game))
                                   [our-deal their-deal]
                                   [their-deal our-deal])]
    (dom/schedule (concat first-deal
                          second-deal
                          (let [discard-el (dom/get-element (:dom/id discard))]
                            (concat [(fn [] (dom/show-on-top discard-el))]
                                    (dom/slide-from discard-el (discard-position))
                                    [(fn [] (dom/set-card-class discard-el (str (name (:card/suit discard)) "_" (name (:card/rank discard)))))]
                                    [10 (fn []
                                          (d/transact! conn [[:db.fn/call t/player-ready (:game-id game) (:us game)]]))]))))))

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
                             (= (:move game) :assigned))
           our-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:our-cards game))
           opp-cards-es (map #(dh/entity-lookup db [:dom/id %]) (:their-cards game))
           pile-cards-el (mapv dom/get-element (:pile game))
           discard-cards-el (mapv dom/get-element (:discards game))
           [their-region-offset-x their-region-offset-y] (their-region-position)]
       ;; pile-cards, anim to pile when needed, including reshuffle
       (doseq [pile-card-el pile-cards-el
               :when (not= (pile-position) (dom/get-current-position pile-card-el))]
         (dom/schedule (into [(fn [] (dom/set-card-class pile-card-el "card_back"))
                              (fn [] (dom/show-on-top pile-card-el))]
                             (dom/slide-from pile-card-el (pile-position)))))
       (when-let [pile-card-el (peek pile-cards-el)]
         (if us-pick-card
           (set-drag-handler pile-card-el (pile-drag-handler conn))
           (set-drag-handler pile-card-el (undraggable-handler conn))))

       ;; discards
       (doseq [discard-card-es (map #(dh/entity-lookup db [:dom/id %]) (:discards game))
               :let [discard-card-el (dom/get-element (:dom/id discard-card-es))]
               :when (not= (discard-position) (dom/get-current-position discard-card-el))]
         (let [suit (:card/suit discard-card-es)
               rank (:card/rank discard-card-es)]
           (dom/schedule (into [(fn [] (dom/set-card-class discard-card-el (str (name suit) "_" (name rank))))
                                (fn [] (dom/show-on-top discard-card-el))]
                               (dom/slide-from discard-card-el (discard-position))))))
       (when-let [discard-card-el (peek discard-cards-el)]
         (if us-pick-card
           (set-drag-handler discard-card-el (discard-drag-handler conn))
           (set-drag-handler discard-card-el (undraggable-handler conn))))

       ;; opp-cards positions
       (let [opp-cards-el (map #(dom/get-element (:dom/id %)) opp-cards-es)]
         (if (= (pile-position) (dom/get-current-position (first opp-cards-el)) (dom/get-current-position (second opp-cards-el)))
           ;; put all ten of them in place from join game
           (dom/schedule (map (fn [idx el]
                                (fn []
                                  (dom/show-on-top el)
                                  (dom/set-position el (+ their-region-offset-x (* idx 53)) (+ their-region-offset-y (* idx 4)))))
                              (range)
                              opp-cards-el))
           (if-let [from-pile (and (= 11 (count opp-cards-el))
                                   (some (fn [el]
                                           (when (= (pile-position) (dom/get-current-position el))
                                             el)) opp-cards-el))]
             (do
               (.log js/console "opp from pile")
               (dom/schedule (concat (dom/simultanious
                                     (map #(conj (dom/slide-from %2 [(+ their-region-offset-x (* %1 48.18)) (+ their-region-offset-y (* %1 3.63))])
                                                 (fn [] (dom/show-on-top %2)))
                                          (range)
                                          opp-cards-el)))))
             (if-let [from-discard (and (= 11 (count opp-cards-el))
                                        (some (fn [el]
                                                (when (= (discard-position) (dom/get-current-position el))
                                                  el)) opp-cards-el))]
               (do 
                 (.log js/console "opp-from-discard")
                 (dom/schedule (concat [#(dom/set-card-class from-discard "card_back")]
                                      (dom/simultanious
                                       (map #(conj (dom/slide-from %2 [(+ their-region-offset-x (* %1 48.18)) (+ their-region-offset-y (* %1 3.63))])
                                                   (fn [] (dom/show-on-top %2)))
                                            (range)
                                            opp-cards-el)))))
               ;; put 10 or 11 of opp cards in usual place
               (let [[x-step y-step] (if (= 10 (count opp-cards-el))
                                       [53 4]
                                       [48.18 3.63])]
                 (.log js/console "opp reg")
                 (dom/schedule (dom/simultanious (map #(dom/slide-from %2 [(+ their-region-offset-x (* %1 x-step)) (+ their-region-offset-y (* %1 y-step))])
                                                  (range)
                                                  opp-cards-el))))
               )))
         ;; show what opp card were when game is finished
         (when (not= :hidden (:card/suit (first opp-cards-es)))
           (doseq [[el es] (map list opp-cards-el opp-cards-es)]
             (let [suit (:card/suit es)
                   rank (:card/rank es)]
               (dom/set-card-class el (str (name suit) "_" (name rank)))))))
       ;; our-cards
       (if (and (= (:turn game) (:us game))
                (= (:move game) :assigned))
         (if (= 11 (count our-cards-es))
           ;; choose discard
           (do
             (set-msg "Your turn. Drag a card from your hand to discard.")
             (doseq [our-card-es our-cards-es]
               (let [our-card-el (dom/get-element (:dom/id our-card-es))
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
               (set-drag-handler (dom/get-element (:dom/id our-card-es)) (home-region-handler conn)))))
         (if-let [result (:result game)]
           (set-msg
            (condp = result
              :pat-tie "Game over: Both dealt gin for a tie."
              :pat-our-win "Game over: You win, dealt gin."
              :pat-opp-win "Game over: Opponent wins, dealt gin."
              :our-win "Game over: You win!"
              :opp-win "Game over: Opponent wins."))
           ;; not our turn, home-region only
           (do
             (if (not= (:turn game) (:us game))
               (set-msg "Opponent's turn.")
               (set-msg "Your turn is done."))
             (doseq [our-card-es our-cards-es]
               (set-drag-handler (dom/get-element (:dom/id our-card-es)) (home-region-handler conn))))))))))

(defn draw-game [report conn]
  (let [{:keys [db-after]} report]
    (when-let [[event [game-id & args]] (first (d/q '{:find [?event ?args]
                                             :in [$ ?tx]
                                             :where [[?e :event ?event ?tx]
                                                     [?e :args ?args]]}
                                           db-after (:max-tx db-after)))]
      (.log js/console "event: " (pr-str (into [event game-id] args)))
      (draw db-after game-id conn))))

(defn start-game-panel [conn]
  (d/listen! conn (fn [report]
                    (draw-game report conn)))
  (draw-table conn))
