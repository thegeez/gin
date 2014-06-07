(ns gin.event-source
  (:require [cljs.reader :as reader]))

(defn event-source [url & {:keys [on-open on-message on-error]
                           :or {on-open (fn [])
                                on-message (fn [event])
                                on-error (fn [])}}]
  (let [source (js/EventSource. url)
        open (atom false)]
    (set! (.-onopen source)
          (fn []
            (reset! open true)
            (on-open)))
    (set! (.-onerror source)
          (fn [e]
            ;; can't connect is a problem, disconnecting is not
            (when-not @open
              (on-error))
            (reset! open false)))
    (set! (.-onmessage source)
          (fn [e]
            (let [data (.-data e)
                  event (reader/read-string data)]
              (on-message event))))
    source))
