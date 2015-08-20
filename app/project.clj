(defproject akiee "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2725"]
                 [reagent "0.4.3"]
                 [garden "1.2.5"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]
            [lein-garden "0.2.5"]]

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
