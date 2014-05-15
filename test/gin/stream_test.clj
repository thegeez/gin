(ns gin.stream-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [gin.core :refer :all]
            [gin.test-core :as tc]
            [gin.system.database-datomic :as dd]
            [clojure.core.async :refer [go <! <!! >! chan timeout close!] :as async]
            [datomic.api :refer [db q] :as d]))

(deftest stream-test
  (let [sys (tc/reuse-system)
        conn (get-in sys [:db :connection])
        listen (get-in sys [:db :listen])
        start (chan)
        start-out (async/into [] (async/take 100 start))
        mid (chan)
        mid-out (async/into [] (async/take 100 mid))
        sixty (chan)
        sixty-out (async/into [] (async/take 40 sixty))
        end (chan)
        end-out (async/into [] (async/take 100 end))
        setup-counter (chan)
        setup-counter-done (go (loop []
                                 (let [tx-report (<! setup-counter)
                                       c (d/entity (:db-after tx-report) :dev/counter)]
                                   (if (nil? c)
                                     (recur)
                                     (close! setup-counter)))))
        _ (async/tap listen setup-counter)
        first-counter (chan)
        first-counter-done (go (loop []
                                 (let [tx-report (<! first-counter)
                                       c (:dev/count (d/entity (:db-after tx-report) :dev/counter))]
                                   (if-not (= 50 c)
                                     (recur)
                                     (close! first-counter)))))]
    (async/tap listen first-counter)
    @(d/transact conn [{:db/id (d/tempid :db.part/user)
                        :db/ident :dev/counter}
                       {:db/id (d/tempid :db.part/db)
                        :db/ident :dev/count
                        :db/valueType :db.type/long
                        :db/cardinality :db.cardinality/one
                        :db.install/_attribute :db.part/db}
                       {:db/id (d/tempid :db.part/user)
                        :db/ident :inc
                        :db/fn (d/function '{:lang :clojure
                                             :requires [[datomic.api :as d]]
                                             :params [db]
                                             :code
                                             (let [counter (d/entity db :dev/counter)]
                                               [[:db/add (:db/id counter) :dev/count (inc (get counter :dev/count 0))]])})}])
    (<!! setup-counter)
    (dd/stream-from conn listen 0 start)
    (let [first-batch (dotimes [i 50]
                        @(d/transact conn [[:inc]]))
          _ (<!! first-counter-done)
          second-counter (chan)
          second-counter-done (go (loop []
                                    (let [tx-report (<! second-counter)]
                                      (if-not (= 100 (:dev/count (d/entity (:db-after tx-report) :dev/counter)))
                                        (recur)
                                        (close! second-counter)))))
          _ (async/tap listen second-counter)
          _ (dd/stream-from conn listen 0 mid)
          sixty-txs (chan)
          second-batch (dotimes [i 50]
                         (let [res @(d/transact conn [[:inc]])]
                           (when (= i 9)
                             (async/put! sixty-txs (d/basis-t (:db-after res))))
                           (when (= i 19)
                             (async/put! sixty-txs :start))))]
      (dd/stream-from conn listen (first (<!! (async/into [] (async/take 2 sixty-txs)))) sixty)
      (<!! second-counter-done)
      (dd/stream-from conn listen 0 end)
      (let [starts (<!! start-out)
            mids (<!! mid-out)
            ends (<!! end-out)
            sixty (<!! sixty-out)]
        (is (= (map #(:dev/count (d/entity (:db-after %) :dev/counter)) starts) (range 1 101)))
        (is (= (map #(:dev/count (d/entity (:db-after %) :dev/counter)) mids) (range 1 101)))
        (is (= (map #(:dev/count (d/entity (:db-after %) :dev/counter)) ends) (range 1 101)))
        (is (= (map #(:dev/count (d/entity (:db-after %) :dev/counter)) sixty) (range 61 101)))))))

