(ns akiee.filewatcher
  (:require [cljs.nodejs :as nj]))
;; Node modules
(def fs (js/require "fs"))
(def path (nj/require "path"))

(enable-console-print!)

;; Functions
;; ----------

(defn watch-file [pth func]
  "String Function -> Void
  Watches the file at the specified String pth and triggers the Function func"
  (.watchFile fs pth func)) ; watch file again

(defn unwatch-file [pth]
  "String -> Void
  Unwatches the file at the specified String pth"
  (.unwatchFile fs pth))

(defn on-file-change
  "Consume two fs.Stat objects curr(ent) prev(ious), compares if the file was modified and reload the file"
  [curr prev func]
  (let [c-time (.-mtime curr)
        p-time (.-mtime prev)]
    (when (> c-time p-time)
      (println "File changed reload")
      ;(log func)
      (func))))
