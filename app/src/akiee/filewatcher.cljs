(ns akiee.filewatcher
  (:require [cljs.nodejs :as nj]
            [akiee.helpers :refer [log]]))
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
  [curr prev]
  (let [c-time (.-mtime curr)
        p-time (.-mtime prev)]
    (log c-time)
    (log p-time)
    (if (> c-time p-time)
      (println "File changed reload, TODO: with sidebar closed.")
      (println "File not changed ")))

  (defn change-watch-file!
    "String String Function -> Void
    Consumes 2 Strings cpath (current) and ppath (previous), unwatches the old file
    and watches the new file and triggers the Function func."
    [cpth ppath func]
    (unwatch-file ppath)
    (watch-file cpth func)))
