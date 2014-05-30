;; Parts are:
;   Copyright (c) Rich Hickey. All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns gin.dom-helpers
  (:require [clojure.string :as string]
            [goog.style :as style]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.dom.forms :as forms]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.Timer :as timer]
            ))

(defn get-element
  "Return the element with the passed id."
  [id]
  (dom/getElement (name id)))

(defn show-element [e b]
  (style/showElement e b))

(defn add-remove-class [e add-classes remove-classes]
  (classes/addRemove e remove-classes add-classes))

(defn get-radio-value [form-name name]
  (forms/getValueByName  (get-element form-name) name))

(defn append
  "Append all children to parent."
  [parent & children]
  (do (doseq [child children]
        (dom/appendChild parent child))
      parent))

(defn set-text
  "Set the text content for the passed element returning the
  element. If a keyword is passed in the place of e, the element with
  that id will be used and returned."
  [e s]
  (let [e (if (or (keyword? e) (string? e)) (get-element e) e)]
    (doto e (dom/setTextContent s))))

(defn normalize-args [tag args]
  (let [parts (string/split tag #"(\.|#)")
        [tag attrs] [(first parts)
                     (apply hash-map (map #(cond (= % ".") :class
                                                 (= % "#") :id
                                                 :else %)
                                          (rest parts)))]]
    (if (map? (first args))
      [tag (merge attrs (first args)) (rest args)]
      [tag attrs args])))

;; TODO: replace call to .strobj with whatever we come up with for
;; creating js objects from Clojure maps.

(defn element
  "Create a dom element using a keyword for the element name and a map
  for the attributes. Append all children to parent. If the first
  child is a string then the string will be set as the text content of
  the parent and all remaining children will be appended."
  [tag & args]
  (let [[tag attrs children] (normalize-args tag args)
        ;; keyword/string mangling screws up (name tag)
        parent (dom/createDom (subs tag 1)
                              (clj->js (reduce (fn [m [k v]]
                                           (assoc m k v))
                                         {}
                                         (map #(vector (name %1) %2)
                                              (keys attrs)
                                              (vals attrs)))))
        [parent children] (if (string? (first children))
                            [(set-text (element tag attrs) (first children))
                             (rest children)]
                            [parent children])]
    (apply append parent children)))

(defn remove-children
  "Remove all children from the element with the passed id."
  [parent-el]
  (dom/removeChildren parent-el))

(defn html
  "Create a dom element from an html string."
  [s]
  (dom/htmlToDocumentFragment s))

(defn- element-arg? [x]
  (or (keyword? x)
      (map? x)
      (string? x)))

(defn build
  "Build up a dom element from nested vectors."
  [x]
  (if (vector? x)
    (let [[parent children] (if (keyword? (first x))
                              [(apply element (take-while element-arg? x))
                               (drop-while element-arg? x)]
                              [(first x) (rest x)])
          children (map build children)]
      (apply append parent children))
    x))

(defn insert-at
  "Insert a child element at a specific location."
  [parent child index]
  (dom/insertChildAt parent child index))

(defn set-timeout [func ttime]
  (timer/callOnce func ttime))

(defn set-position [e x y]
  (style/setPosition e x y))

(defn get-position [e]
  (style/getPosition e))

(defn get-current-position [e]
  (.-currentPosition e))

(def z-level (atom 100))

(defn show-on-top [card]
  (set! (.. card -style -zIndex) (swap! z-level inc)))

(defn set-card-class [card-el card-class]
  ;; cards that are turned up loose the cursor_hand class
  ;; otherwise we have to find and remove the class for the face
  (if (= card-class "card_back")
    (classes/set card-el (str "card " card-class))
    (add-remove-class card-el card-class "card_back")
    ))

(defn toggle-class [el classname]
  (classes/toggle el classname))

(defn add-class [el classname]
  (classes/add el classname))
(defn remove-class [el classname]
  (classes/remove el classname))

(defn schedule [steps]
  (when (seq steps)
    (let [step (first steps)]
      (if (number? step)
        (set-timeout #(schedule (rest steps)) step)
        (do (step)
            (schedule (rest steps)))))))

(defn simultanious [stepss]
  (apply map
         (fn [& [arg :as args]]
           (if (number? arg)
             arg
             (fn [] (doseq [a args] (a)))))
         stepss))

(defn slide
  ([el from to] (slide el from to 300 30))
  ([el [from-x from-y] [to-x to-y] msec steps]
     (let [dx (/ (- to-x from-x) steps)
           dy (/ (- to-y from-y) steps)
           step-time (/ msec steps)]
       
       
       
       (.log js/console "don't make the moves when already at to-x to-y")

       (set! (.-currentPosition el) [to-x to-y])
       ;; this adds a step-time after as well vs. interpose
       ;; this seems to make the anims finish smoother
       (interleave (for [n (range (inc steps))]
                     #(goog.style/setPosition el
                                              (long (+ from-x (* n dx)))
                                              (long (+ from-y (* n dy)))))
                   (repeat step-time)))))

(defn slide-from
  ([el to] (slide-from el to 300 30))
  ([el to msec steps]
     (let [from (style/getPosition el)
           from-x (. from -x)
           from-y (. from -y)]
       (slide el [from-x from-y] to msec steps))))


(defn fly-card
  [el snap-position]
  (schedule (slide-from el [(. snap-position -x) (. snap-position -y)])))
