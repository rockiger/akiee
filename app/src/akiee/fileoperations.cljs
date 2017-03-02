(ns akiee.fileoperations
  "All file operations for Akiee"
  (:require [akiee.filewatcher :as fw]
            [akiee.constants :refer [dirname filename]]
            [cljs.test :refer-macros [is deftest]]
            [cljs.nodejs :as nj]
            [akiee.helpers :refer [log]]))

;; Node modules
(def fs (js/require "fs"))
(def path (nj/require "path"))
(def process (nj/require "process"))
(def org (nj/require "./lib/markdown-org-mode-parser"))
;(def chokidar (nj/require "chokidar"))

(enable-console-print!)

;; All file operations for Akiee

;; =================
;; Constants:

(def testfile "/home/macco/Listings/rakiee/test-load-file.md")

;; =================
;; Functions:

(defn user-home
  "nil -> String
  produce the home directory of the user according to plattform"
  []
  (.join
    path
    (if (= (.-platform process) "win32")
      (aget (.-env process) "USERPROFILE")
      (aget (.-env process) "HOME"))
    dirname "/"))

(is (string? (user-home)))
(is (not= -1 (.indexOf (user-home) dirname)))


(defn create-task-list-file
  "String -> String
  consumes the directory of the task file and return the file path of task list,
  if file is not present, it get's created"
  [h]
  (let [dir-path (.join path h "/")
        file-path (.join path dir-path filename)]
    (if (.existsSync fs dir-path)
      (if (.existsSync fs file-path)
        file-path
        (do
          (.writeFileSync fs file-path "# Inbox")
          file-path))
      (do
        (.mkdirSync fs dir-path)
        (.writeFileSync fs file-path "# Inbox")
        file-path))))

(is (= (create-task-list-file "/home/macco") (str "/home/macco/" filename)))


(defn task-file-path
  "String -> String
  Consumes a directory path d and produce the path of the task file"
  [d]
  (create-task-list-file d))

;(is (string? (task-file-path "Test")))

(defn load-task-file
  "String -> String
  consumes the path p for a file and returns the content of the file"
  [p]
  (if (.existsSync fs p)
    (str (.readFileSync fs p "utf8"))
    ""))
(is (= (load-task-file "") ""))
(is (= (load-task-file "eurniate") ""))
;(is (= (load-task-file testfile) "# Inbox\n## TODO Test\nRANK: 9\n"))

(defn save-task-file [c p changed? chfn! wffn]
  "String String Bool Function Function -> Nil
  Consume the content c, the path of the target-file p,
  a Boolean changed? if ListState has changed; a Function chfn! for setting
  ListState to unchanged, a Function wffn as callbach to watch-file, returns nil"
  (if changed?
    (do
      (fw/unwatch-file p) ; don't watch file during write
      (.writeFileSync fs p c)
      (chfn! false)
      (fw/watch-file p wffn) ; watch file again
      (println "Saved: " p))
    (println "not changed")))
