(ns gin.animator
  (:require [gin.dom-helpers :as dom]))

(def EL 0)
(def START 1)
(def DRAW 2)
(def TO 3)
(def STEP 4)
(def STEPS 5)
(def DX 6)
(def DY 7)
(def FINISH 8)

(def FIELD_COUNT (count [EL START DRAW TO STEP STEPS DX DY FINISH]))

(def a (make-array (+ (* 52 FIELD_COUNT)
                      1 ;; DO_DRAW
                      )))
(def DO_DRAW (dec (alength a)))

(def running (atom false))

(defn anim-loop []
  (aset a DO_DRAW 0)
  (dotimes [card-idx 52]
    (let [i (* card-idx FIELD_COUNT)]
      (when (aget a (+ i DRAW)) ;; draw
        (aset a DO_DRAW 1)
        (let [el (aget a (+ i EL))
              [start-x start-y] (aget a (+ i START))
              [x y :as to] (aget a (+ i TO))
              step (dec (aget a (+ i STEP)))
              dx (aget a (+ i DX))
              dy (aget a (+ i DY))
              steps (aget a (+ i STEPS))
              nx (long (+ start-x (* (- steps step) dx)))
              ny (long (+ start-y (* (- steps step) dy)))]
          (dom/set-position el nx ny)
          (aset a (+ i STEP) step)
          (when (or (and (= x nx)
                         (= y ny))
                    (zero? step)
                    (and (zero? dx)
                         (zero? dy)))
            (aset a (+ i STEP) 0)
            (aset a (+ i DRAW) false)
            (let [finish (aget a (+ i FINISH))]
              (when (fn? finish)
                (dom/set-timeout finish 0))))))))
  ;; only schedule more drawing if we drew something this loop
  (if (= 1 (aget a DO_DRAW))
    (dom/set-timeout anim-loop 10)
    (reset! running false)))

(defn animate []
  (when (compare-and-set! running false true)
    (anim-loop)))

(defn slide [el to & [finish]]
  (let [idx (.-anim-idx el)
        i (* idx FIELD_COUNT)
        [from-x from-y :as from] (dom/get-position el)
        [to-x to-y] to
        step (aget a (+ i STEP))
        steps (if (pos? step) step 30)
        dx (/ (- to-x from-x) steps)
        dy (/ (- to-y from-y) steps)]
    (aset a i el)
    (aset a (+ i START) from)
    (aset a (+ i DRAW) true)
    (aset a (+ i TO) to)
    (aset a (+ i STEP) steps)
    (aset a (+ i STEPS) steps)
    (aset a (+ i DX) dx)
    (aset a (+ i DY) dy)
    (aset a (+ i FINISH) finish)
    (aset a DO_DRAW 1)
    (animate)))
