(ns gin.system.database-datomic
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [datomic.api :refer [db q] :as d]
            [gin.migrations :as migrations]
            [clojure.core.async :as async]))

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
          listen (async/mult tx-reports-ch)]
      (async/thread
        (let [queue (d/tx-report-queue conn)]
          (while true
            (let [report (.take queue)]
              (async/>!! tx-reports-ch report)))))
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
