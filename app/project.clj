(defproject akiee "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.495"]
                 [org.clojure/core.async "0.3.442"]
                 [reagent "0.6.1"]
                 [garden "1.3.2"]
                 [jayq "2.5.4"]
                 [historian "1.1.1"]
                 [alandipert/storage-atom "2.0.1"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-npm "0.4.0"]
            [lein-garden "0.2.8"]]

  :source-paths ["src"]

  :clean-targets ["out" "out-adv"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {
                                   :main akiee.core
                                   :output-to "out/akiee.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {
                                   :main akiee-sample.core
                                   :output-to "out-adv/akiee.min.js"
                                   :output-dir "out-adv"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
