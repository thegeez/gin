(ns gin.system.database-datomic
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [datomic.api :refer [db q] :as d]
            [gin.migrations :as migrations]
            [clojure.core.async :refer [go tap untap chan alt! >! <! filter> onto-chan pipe close!] :as async]
            [clojure.core.async.impl.protocols :as impl])
  (:import [java.util LinkedList]))

;; sanity check
(let [ms migrations/migrations]
  (assert (every? (fn [m]
                    (and (vector? m)
                         (= 2 (count m))
                         (= (number? (first m)))
                         (= #{:up :down} (set (keys (second m))))
                         (fn? (:up (second m)))
                         (fn? (:down (second m))))) ms)
          "Migrations format is [[<id> {:up (fn [db] ...) :down (fn [db] ...)}")
  (assert
   (and (= 1 (ffirst ms))
        (apply < (map first ms)))
   "Migrations should start at id 1 and be increasing"))

(defn current-db-version [conn]
  (get (d/entity (db conn) :schema-version) :schema/version 0))

(defn update-current-version [conn version]
  @(d/transact conn [[:db/add :schema-version :schema/version version]]))

(defn migrate!
  ([conn] (migrate! conn (first (last migrations/migrations))))
  ([conn to-version]
     (let [current-version (current-db-version conn)
           todo (cond
                 (< current-version to-version)
                 (->> migrations/migrations
                      (drop-while (fn [[migration-version migration]]
                                    (<= migration-version current-version)))
                      (take-while (fn [[migration-version migration]]
                                    (<= migration-version to-version)))
                      (map (juxt first (comp :up second))))
                 (> current-version to-version)
                 (->> migrations/migrations
                      reverse
                      (drop-while (fn [[migration-version migration]]
                                    (< current-version migration-version)))
                      (take-while (fn [[migration-version migration]]
                                    (< to-version migration-version)))
                      (map (juxt first (comp :down second))))
                 :else nil)]
       (info "todo" current-version to-version todo)
       (doseq [[migration-version migration] todo]
         (debug "Run migration" migration-version)
         (try (migration conn)
              (update-current-version conn migration-version)
              (catch Exception e
                (error "Migration " migration-version " failed: " e (with-out-str (.printStackTrace e)))
                (throw e))))
       (update-current-version conn to-version))))

(defrecord DevMigrator [database]
  component/Lifecycle
  (start [component]
         (info "Migrate database up")
         (let [conn (:connection database)]
           (migrate! conn)
           component))
  (stop [component]
        (info "Migrate database down" component)
        (migrate! (:connection database) 0)
        component))

(defn dev-migrator []
  (map->DevMigrator {}))


;; mult repeated here because of ASYNC-72
(require '[clojure.core.async :refer [go-loop put! <! Mux Mult
                                      tap* untap* untap-all*]]
         '[clojure.core.async.impl.protocols :as impl])
(defn mult
  [ch]
  (let [cs (atom {}) ;;ch->close?
        m (reify
           Mux
           (muxch* [_] ch)

           Mult
           (tap* [_ ch close?]
             (swap! cs assoc ch close?) nil)
           (untap* [_ ch] (swap! cs dissoc ch) nil)
           (untap-all* [_] (reset! cs {}) nil))
        dchan (chan 1)
        dctr (atom nil)
        done (fn [_] (when (zero? (swap! dctr dec))
                      (put! dchan true)))]
    (go-loop []
     (let [val (<! ch)]
       (if (nil? val)
         (doseq [[c close?] @cs]
           (when close? (close! c)))
         (let [chs (keys @cs)]
           (reset! dctr (count chs))
           (doseq [c chs]

             (when-not (put! c val done)
               ;;(done nil) ;; ASYNC-72
               (untap* m c)))
           ;;wait for all
           (when (seq chs)
             (<! dchan))
           (recur)))))
    m))

(defrecord DatabaseDatomic [db-connect-string]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
    (info ";; Starting Datomic database")
    (d/create-database db-connect-string)
    (let [conn (d/connect db-connect-string)
          tx-reports-ch (async/chan)
          listen (mult tx-reports-ch)]
      (async/thread
        (try (let [queue (d/tx-report-queue conn)]
           (while true
             (let [report (.take queue)]
               (async/>!! tx-reports-ch report))))
             (catch Exception e
               (debug "TX-REPORT-TAKE exception: " e)
               (throw e))))
      (assoc component
        :connection conn
        :tx-report-ch tx-reports-ch
        :listen listen)))

  (stop [component]
    (info ";; Stopping datomic database")
    (d/release (:connection component))
    (async/close! (:tx-report-ch component))
    component))

(defn database-datomic [db-connect-string]
  (map->DatabaseDatomic {:db-connect-string db-connect-string}))

;; shh! nothing to see here
(deftype UnboundedBuffer [^LinkedList buf]
  impl/UnblockingBuffer
  impl/Buffer
  (full? [this]
    false)
  (remove! [this]
    (.removeLast buf))
  (add! [this itm]
    (.addFirst buf itm))
  clojure.lang.Counted
  (count [this]
    (.size buf)))

(defn unbounded-buffer []
  (UnboundedBuffer. (LinkedList.)))

(defn close-and-drain! [c]
  (close! c)
  (async/into [] c))

(defn stream-from [conn listen from eid attr out]
  ;; out <- <tx-report for tx t> <tx-report for tx t+1> .. <tx-report for tx+n> 
  ;; this stream is the concatenation of db's at tx t from (db conn)
  ;; in 'catch-up' and from (listen! ..) in 'stream'
  ;; only tx's after 'from' are put into 'out'
  ;; 'catch-up' and 'stream' may overlap or have a
  ;; gap between them (not sure on the timing between (db conn) and
  ;; (listen! ..) notifications)
  ;; the number of tx's to get from (db conn) for 'catch-up' is bounded so it should
  ;; be safe to use an unbounded buffer for 'stream', while it
  ;; waits on the first part to finish
  (let [catch-up (chan)
        stream (chan (unbounded-buffer))
        txrs (fn [db from to]
               (let [about-entity (d/entity db eid)]
                 (for [tx (->> (q '{:find [?tx]
                                    :in [$ ?from-tx ?to-tx ?attr ?about]
                                    :where [[?about ?attr _ ?tx true]
                                            [(< ?from-tx ?tx)]
                                            [(<= ?tx ?to-tx)]]}
                                  (d/history db) (d/t->tx from) (d/t->tx to)
                                  attr
                                  (:db/id about-entity))
                               (map first)
                               (sort <))]
                   {:db-after (d/as-of db tx)
                    :db-before :not-reconstructed
                    :tx-data :not-reconstructed
                    :tempids :not-reconstructed})))
        from-tap (chan)
        relevant-tx (fn [{:keys [db-after tx-data] :as txr}]
                      (let [game-e (d/entity db-after eid)]
                        (seq (q '{:find [?e]
                                  :in [$ ?attr ?game-e]
                                  :where [[?game-e ?attr ?e _ true]]}
                                tx-data (d/entid db-after attr) (:db/id game-e)))))
        _ (go (loop []
                (when-let [txr (<! from-tap)]
                  (when (relevant-tx txr)
                    (when-not (>! stream txr)
                      (close! from-tap)))
                  (recur)))
              (close! stream))
        _ (tap listen from-tap)
        res (go
              (try
                (loop [in catch-up
                       last-t from
                       at-gap false]
                  (let [{:keys [db-after] :as txr} (<! in)]
                    (if txr
                      (let [t (or (d/as-of-t db-after)
                                  (d/basis-t db-after))]
                        (if at-gap
                          (if (loop [txs-in-gap (txrs db-after last-t t)]
                                (if-let [txr (first txs-in-gap)]
                                  (if (>! out txr)
                                    (recur (rest txs-in-gap))
                                    false)
                                  true))
                            (recur in t false)
                            (close-and-drain! from-tap))
                          ;; usual case
                          (if (< last-t t)
                            (if (>! out txr)
                              (recur in t false)
                              (close-and-drain! from-tap))
                            (recur in last-t false))))
                      ;; when in is closed switch from catch-up to stream
                      (if (= in catch-up)
                        (recur stream last-t true)
                        ;; both catch-up and stream have closed
                        (close! out))
                      )))
                (catch Exception e
                  (debug "Stream from loop " e)
                  (throw e))))]
    (let [db (db conn)
          ts (txrs db from Long/MAX_VALUE)]
      (onto-chan catch-up ts))
    res))
