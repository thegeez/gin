(defproject gin "0.0.1"
  :description "Gin"
  :url "http://thegeez.net"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 ;; logging
                 [org.clojure/tools.logging "0.2.6"]
                 [org.slf4j/slf4j-log4j12 "1.7.5"]

                 ;; ring and webserver
                 [ring/ring-core "1.2.1"]
                 [ring/ring-jetty-adapter "1.2.1"]

                 ;; has async for SSE
                 [org.eclipse.jetty/jetty-server "8.1.2.v20120308"]

                 ;; application structure
                 [com.stuartsierra/component "0.2.1"]

                 ;; request flow
                 [liberator "0.11.0"]

                 ;; routing
                 [compojure "1.1.3"]
                 ;; templates
                 [enlive "1.1.5"]
                 ;; auth
                 [com.cemerick/friend "0.2.1" :exclusions [org.clojure/core.cache]]

                 [com.datomic/datomic-free "0.9.4766" :exclusions [org.slf4j/log4j-over-slf4j org.slf4j/slf4j-nop]]]

  :profiles {:dev {:source-paths ["dev"]
                   :resource-paths ["dev/resources"]
                   :dependencies [[ring/ring-devel "1.2.1"]
                                  [org.clojure/tools.namespace "0.2.3"]
                                  [org.clojure/java.classpath "0.2.0"]
                                  [kerodon "0.3.0"]
                                  [org.clojure/clojurescript "0.0-2173"]
                                  ;; conflicts with cljs on tools.reader
                                  [ring/ring-core "1.2.1" :exclusions [org.clojure/tools.reader]]
                                  [cljs-ajax "0.2.3"]
                                  [datascript "0.1.4"]]
                   :plugins [[lein-cljsbuild "1.0.2"]
                             [com.cemerick/clojurescript.test "0.3.0"]]
                   :main user}}
  :cljsbuild {:builds {:dev {:source-paths ["cljs/src"]
                             :compiler {:output-to "resources/public/js/gin-dev.js"
                                        :output-dir "resources/public/js/out"
                                        :optimizations :whitespace}
                             :notify-command ["notify-send" "cljsbuild"]}
                       :test {:source-paths ["cljs/src" "cljs/test"]
                              :compiler {:preamble ["react/react.min.js"]
                                         :output-to "cljs/target/cljstest.js"
                                         :optimizations :whitespace
                                         :pretty-print true}}
                       :prod {:source-paths ["cljs/src" "cljs/test"]
                              :compiler {:output-to "resources/public/js/gin-min.js"
                                         :optimizations :advanced
                                         :elide-asserts true
                                         :pretty-print false
                                         :preamble ["react/react.min.js"]
                                         :externs ["react/externs/react.js"]}}}
              :test-commands {"tests" ["phantomjs" :runner
                                       "cljs/test/bind_polyfill.js"
                                       "cljs/target/cljstest.js"]}})
