(ns gin.stream-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [gin.core :refer :all]
            [gin.test-core :as tc]
            [gin.system.database-datomic :as dd]
            [clojure.core.async :refer [go <! <!! >! chan timeout close!] :as async]
            [datomic.api :refer [db q] :as d]))

(deftest event-stream-test
  (debug "start event-stream-test")
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
        setup-counter-done (go (try 
                                 (loop []
                                   (let [tx-report (<! setup-counter)
                                         c (q '{:find [?e]
                                                :where [[?e :game/id "test1"]]}
                                              (:db-after tx-report))]
                                     (if (nil? (seq c))
                                       (recur)
                                       (dd/close-and-drain! setup-counter))))
                                 (catch Exception e
                                   (debug "Exception setup counter" e)
                                   (throw e))))
        _ (async/tap listen setup-counter)
        first-counter (chan)
        first-counter-done (go (try 
                                 (loop []
                                   (let [tx-report (<! first-counter)
                                         c (:dev/count (d/entity (:db-after tx-report) [:game/id "test1"]))]
                                     (if-not (= 50 c)
                                       (recur)
                                       (dd/close-and-drain! first-counter))))
                                 (catch Exception e
                                   (debug "First counter exception " e)
                                   (throw e))))

        eid [:game/id "test1"]
        attr :dev/count]
    (async/tap listen first-counter)
    @(d/transact conn [{:db/id (d/tempid :db.part/user)
                        :event/type :game-created
                        :event/game (d/tempid :db.part/user -3)
                        :event/tx (d/tempid :db.part/tx)}
                       {:db/id (d/tempid :db.part/user -3)
                        :game/id "test1"
                        :game/player1 (d/tempid :db.part/user -1)
                        :game/player2 (d/tempid :db.part/user -2)
                        :game/to-start (d/tempid :db.part/user -1)}
                       {:db/id (d/tempid :db.part/user -1)
                        :account/slug "test-user1"
                        :account/username "Test User One"}
                       {:db/id (d/tempid :db.part/user -2)
                        :account/slug "test-user2"
                        :account/username "Test Player Two"}
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
                                             (let [game (d/entity db [:game/id "test1"])
                                                   event-eid (d/tempid :db.part/user)
                                                   game-eid (:db/id game)]
                                               ;; add event on tx and
                                               ;; mark this event as
                                               ;; last event for this game
                                               [{:db/id event-eid
                                                 :event/type :inc
                                                 :event/game game-eid
                                                 :event/tx (d/tempid :db.part/tx)}
                                                {:db/id game-eid
                                                 :dev/count (inc (get game :dev/count 0))
                                                 :game/last-event event-eid}])})}])
    (debug "Waiting on setup-counter")
    (<!! setup-counter)
    (dd/stream-from conn listen 0 eid attr start)
    (go (try 
          (dotimes [i 25]
           (<! (timeout 1500))
           @(d/transact conn (let [event-eid (d/tempid :db.part/user)
                                   game-eid (d/tempid :db.part/user)]
                               [{:db/id event-eid
                                 :event/type :some-other-event
                                 :event/game game-eid
                                 :event/tx (d/tempid :db.part/tx)}
                                {:db/id game-eid
                                 :game/id "some-other-game"
                                 :game/last-event event-eid}])))
          (catch Exception e
            (debug "Random events exception: " e)
            (throw e))))
    (let [first-batch (dotimes [i 50]
                        @(d/transact conn [[:inc]]))
          _ (<!! first-counter-done)
          second-counter (chan)
          second-counter-done (go (try
                                    (loop []
                                     (let [tx-report (<! second-counter)]
                                       (if-not (= 100 (:dev/count (d/entity (:db-after tx-report) [:game/id "test1"])))
                                         (recur)
                                         (dd/close-and-drain! second-counter))))
                                    (catch Exception e
                                      (debug "Second counter done: " e)
                                      (throw e))))
          _ (async/tap listen second-counter)
          _ (dd/stream-from conn listen 0 eid attr mid)
          sixty-txs (chan)
          second-batch (dotimes [i 50]
                         (let [res @(d/transact conn [[:inc]])]
                           (when (= i 9)
                             (async/put! sixty-txs (d/basis-t (:db-after res))))
                           (when (= i 19)
                             (async/put! sixty-txs :start))))]
      (let [from-sixty-tx (first (<!! (async/into [] (async/take 2 sixty-txs))))]
        (dd/stream-from conn listen from-sixty-tx eid attr sixty))
      (<!! second-counter-done)
      (dd/stream-from conn listen 0 eid attr end)
      (let [starts (<!! start-out)
            mids (<!! mid-out)
            ends (<!! end-out)
            sixty (<!! sixty-out)]
        (is (= (map #(:dev/count (d/entity (:db-after %) [:game/id "test1"])) starts) (range 1 101)))
        (is (= (map #(:dev/count (d/entity (:db-after %) [:game/id "test1"])) mids) (range 1 101)))
        (is (= (map #(:dev/count (d/entity (:db-after %) [:game/id "test1"])) ends) (range 1 101)))
        (is (= (map #(:dev/count (d/entity (:db-after %) [:game/id "test1"])) sixty) (range 61 101)))))))


