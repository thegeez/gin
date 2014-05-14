(ns gin.system.database-datomic
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [datomic.api :refer [db q] :as d]
            [gin.migrations :as migrations]
            [clojure.core.async :refer [go tap chan alt! >! <! onto-chan pipe close!] :as async]))

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


(defrecord DatabaseDatomic [db-connect-string]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
    (info ";; Starting Datomic database")
    (d/create-database db-connect-string)
    (let [conn (d/connect db-connect-string)
          tx-reports-ch (async/chan)
          listen (async/mult (async/map< 
                              (fn [i]
                                 #_(debug "passing i" i)
                                 i)
                              tx-reports-ch))]
      (async/thread
        (try (let [queue (d/tx-report-queue conn)]
           (while true
             (let [report (.take queue)]
               (async/>!! tx-reports-ch report)
               #_(debug "send out report" (pr-str (:tx-data report))))))
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

(defn stream-from [conn listen from out]
  (let [catch-up (chan) ;; get what we have from from to now in conn
        stream (chan)
        ch (chan)]
    (tap listen stream)
    (go (loop [last-t -1]
          (let [{:keys [db-after] :as txr} (<! ch)]
            (if txr
              (let [t (or (d/as-of-t db-after)
                          (d/basis-t db-after))]
                (if (< last-t t)
                  (do (>! out txr)
                      (recur t))
                  (recur last-t)))
              (close! out)))))
    (let [db (db conn)
          dbs (for [tx (->> (q '{:find [?tx]
                                 :in [$ ?from-tx]
                                 :where [[?tx :db/txInstant]
                                         [(< ?from-tx ?tx)]]}
                               db (d/t->tx from))
                            (map first)
                            (sort <))
                    :let [d (d/as-of db tx)]
                    :when (:dev/count (d/entity d :dev/counter))]
                {:db-after d
                 :db-before :not-reconstructed
                 :tx-data :not-reconstructed
                 :tempids :not-reconstructed})]
      (debug "found dbs: " from (map #(:dev/count (d/entity (:db-after %) :dev/counter)) dbs) (count dbs))
      (go (onto-chan catch-up dbs)))
    ;; put everything from catch-up into ch, then concat stream, using
    ;; an unlimited buffer for stream while catch-up is not closed
    ;; should be fine since catch-up has small and finite length
    (go (loop [buffer clojure.lang.PersistentQueue/EMPTY]
          (alt!
            catch-up ([old]
                        (if old
                          (do (>! ch old)
                              (recur buffer ))
                          (do
                            (<! (onto-chan ch buffer false))
                            (recur nil))))
            stream ([s]
                      (if buffer
                        (recur (conj buffer s))
                        (if s
                          (do (>! ch s)
                              (recur nil))
                          (close! ch)))))))) )
