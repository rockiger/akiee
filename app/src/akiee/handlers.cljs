(ns akiee.handlers
  (:require-macros
    [cljs.core.async.macros :refer [go]]
    [akiee.macros :refer [<?]])
  (:require [goog.events :as events]
            [akiee.app-db :as db]
            [akiee.node :as no]
            [akiee.dom-helpers :as dom :refer [get-element]]
            [akiee.fileoperations :as fo]
            [akiee.rank :as r]
            [akiee.helpers :as h]
            [clojure.string :as s]
            [jayq.core :refer [$ on attr html]]
            [historian.core :as hist]
            [cljs.nodejs :as nj]
            [cljs.core.async :refer [>! <! chan close!]]))

;; Nodejs modules
(def gui (js/require "nw.gui"))
(def path (nj/require "path"))
(def fs (js/require "fs"))

(enable-console-print!)
;; Handles events for user interactions

;; =================
;; Constants:
(def WIN (.get (.-Window gui)))

;; =================
;; Globals
(def *menu* (new gui.Menu))
(def *taskmenu* (new gui.Menu))

;; =================
;; Functions:

(defn cancel-enter-task
  "closes the entry box and hides it"
  []
  (let [hdln (get-element "enter-headline")]
    (do
      (set! (.-value hdln) "")
      (db/switch-entry!))))

(defn cancel-search
  "closes the search box and resets the search-string in the app-state"
  []
  (db/switch-search!))

(defn handle-enter-task
  "DOMElement -> Bool
  Handles the submisson of element e that are created by the enter task form"
  [ev]
  (let [form (aget ev "target")
        els  (aget form "elements")
        hdln (.-value (aget els "headline"))
        tast (.-value (aget els "task-status"))
        tapr (.-value (aget els "task-project"))]
    (do
      (.stopPropagation ev)
      (.preventDefault ev)
      (when (not= hdln "")
        (db/add-task! tast hdln tapr))
      (cancel-enter-task)
      false)))

(defn handle-close
  "Event ->
  Handles the close event of win"
  [ev]
  (do
    (fo/save-task-file (no/lon->md (db/nodes)) (db/task-file-path) (db/changed?) db/set-changed!)
    (.close WIN true)))

(defn handle-blur
  "Event ->
  Handles the close event of win"
  [ev]
  (do
    (fo/save-task-file (no/lon->md (db/nodes)) (db/task-file-path) (db/changed?) db/set-changed!)))

(defn register-winevents
  "Register the window event handlers"
  []
  (do
    (events/listen js/window "blur" handle-blur)
    (.on WIN "close" handle-close))) ;; can not use google closure here, because of nw.js

(defn handle-onchange-search
  "Event -> GlobalState
  Consumes the onchange Event ev and changes global filter string for search;
  returns the app-state"
  [ev]
  (db/set-search-string! (.-value (.-target ev)))); set-search-string!

(defn handle-blur-editor
  "Event -> GlobalState
  Consumes the onblur Event ev and changes global lon ;
  returns the app-state"
  [ev]
  (let [md (.-value (.-target ev))
        lon (no/->nodes-from-md md)]
    (do
      (db/reset-lon! db/app-state lon)
      (db/set-changed! true))))

(defn handle-onclick-taskstate
  "Event -> GlobalState
  Consumes the onclick Event ev and changes global lon with task to next state;
  returns the app-state"
  [ev]
  (let [row  (.-parentNode (.-currentTarget ev))
        shift? (.-shiftKey ev)
        ky (.-key (.-dataset row))]
    (do
      (if shift?
        (db/prev-ts! ky)
        (db/next-ts! ky))
      (.stopPropagation ev))))

(defn rank-helper
  "Event -> String
  Consume an Event from a rank changing button and returns the key of the corresponding row"
  [ev]
  (.-key (.-dataset (.-parentNode (.-parentNode (.-currentTarget ev))))))

(defn handle-onclick-down
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global lon with rank change down-wards"
  [ev]
  (let [ky (rank-helper ev)]
    (do
      (r/down-rank ky)
      (.stopPropagation ev))))

(defn handle-onclick-up
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global lon with rank change up-wards"
  [ev]
  (let [ky (rank-helper ev)]
    (do
      (r/up-rank ky)
      (.stopPropagation ev))))

(defn onclick-task
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state selected"
  [ev]
  (let [ky (.-key (.-dataset (.-currentTarget ev)))]
    (do
      (db/set-selected! ky)
      (.stopPropagation ev))))

(defn onclick-sidebar-element
  "String String -> GlobalState
  Consumes the name of the sidebar element n and the id and changes the global state editable"
  [n id]
  (do
      (db/set-editable! n)
      (js/setTimeout #(.focus (get-element id)) 100)))

(defn onclick-hdln
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state editable"
  [ev]
  (onclick-sidebar-element "hdln" "sidebar-headline"))

(defn onclick-body
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state editable"
  [ev]
  (onclick-sidebar-element "body" "sidebar-body-ta"))

(defn onclick-state
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state editable"
  [ev]
  (onclick-sidebar-element "state" "sidebar-task-state"))

(defn onclick-project
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state editable"
  [ev]
  (onclick-sidebar-element "project" "sidebar-task-project"))

(defn onclick-scheduled
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state scheduled"
  [ev]
  (onclick-sidebar-element "scheduled" "sidebar-scheduled-form"))

(defn onclick-deadline
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state deadline"
  [ev]
  (onclick-sidebar-element "deadline" "sidebar-deadline-form"))

(defn onclick-tags
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state tags"
  [ev]
  (onclick-sidebar-element "tags" "sidebar-tags-form"))

(defn onclick-reps
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the global state tags"
  [ev]
  (onclick-sidebar-element "reps" "sidebar-reps-form"))

(defn onclick-close
  "Event -> Void
  Consumes the onclick Event ev and closes the application"
  [ev]
  (.close WIN))

(defn onclick-menu
  "Event -> Void
  Consumes the onclick Event ev and toggles the menu"
  [ev]
  (let [undo (aget (.-items *menu*) 0)
        redo (aget (.-items *menu*) 1)]
    (set! (.-enabled undo) (hist/can-undo?))
    (set! (.-enabled redo) (hist/can-redo?))
    (.popup *menu* (- (.-width WIN) 154) 39)))

(defn onclick-taskmenu
  "Event -> Void
  Consumes the onclick Event ev and toggles the menu"
  [ev]
  (let [ky (rank-helper ev)
        native (.-nativeEvent ev)
        to-top-entry (aget (.-items *taskmenu*) 0)
        to-bottom-entry (aget (.-items *taskmenu*) 1)]
    (set! (.-click to-top-entry) #(r/to-top ky))
    (set! (.-click to-bottom-entry) #(r/to-bottom ky))
    (.popup *taskmenu* (.-pageX native) (.-pageY native))
    (.stopPropagation ev)))

(defn onblur-sidebar-input
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the headline of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (:headline (db/sidebar-content)))
        (db/change-headline content (db/sidebar-content))))))

(defn onblur-sidebar-body
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the body of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (:body (db/sidebar-content)))
        (db/change-body (s/replace content #"#" "") (db/sidebar-content))))))

(defn onblur-sidebar-state
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the state of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (:todo (db/sidebar-content)))
        (db/change-state content (db/sidebar-content))))))

(defn onblur-sidebar-project
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the project of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (:project (db/sidebar-content)))
        (db/change-project content (db/sidebar-content))))))

(defn onblur-sidebar-scheduled
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the scheduled time of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (:scheduled (db/sidebar-content)))
        (db/change-scheduled content (db/sidebar-content))))))

(defn onblur-sidebar-tags
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the project of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (no/tags-string (db/sidebar-content)))
        (db/change-tags content (db/sidebar-content))))))

(defn onblur-sidebar-reps
  "Event -> GlobalState
  Consumes the onclick Event ev and changes the project of a task"
  [ev]
  (let [content (.-value (.-currentTarget ev))]
    (do
      (db/set-editable! nil)
      (when (not= content (no/reps-string (db/sidebar-content)))
        (db/change-reps content (db/sidebar-content))))))

(defn submit-sidebar-hdln
  "->
  creates an on-blur-event on the sidebar-headline"
  []
  (.blur (get-element "sidebar-headline")))

(defn submit-sidebar-body
  "->
  creates an on-blur-event on the sidebar-headline"
  []
  (.blur (get-element "sidebar-body")))

(defn submit-sidebar-state
  "->
  creates an on-blur-event on the sidebar-headline"
  []
  (.blur (get-element "sidebar-task-state")))

(defn submit-sidebar-project
  "->
  creates an on-blur-event on the sidebar-headline"
  []
  (.blur (get-element "sidebar-task-project")))

(defn submit-sidebar-tags
  "->
  creates an on-blur-event on the sidebar-headline"
  []
  (.blur (get-element "sidebar-tags-form")))

(defn submit-sidebar-reps
  "->
  creates an on-blur-event on the sidebar-headline"
  []
  (.blur (get-element "sidebar-reps-form")))

(defn handle-change-date
  "Event -> GlobalState
  Handles the event when the date changed and changes the GlobalState accordingly"
  [ev]
  (let [date (.-date ev)]
    (cond (= (db/editable) "scheduled") (do
                                          (db/set-editable! nil)
                                          (db/change-scheduled date (db/sidebar-content)))
          (= (db/editable) "deadline") (do
                                         (db/set-editable! nil)
                                         (db/change-deadline date (db/sidebar-content))))))

(defn handle-details-link-click
  "Event -> Void
  Handles the event when the user clicks on a link in the details area"
  [ev]
  (let [target (.-target ev)]
    (.preventDefault ev)
    (.stopPropagation ev)
    (.openExternal (.-Shell gui) target)))

(defn show-statistics!
  "Event -> Void
   Show the Task statistics"
   []
   (let [n-o-t (db/no-of-tasks)]
     (js/alert (str "All Tasks: " (:all n-o-t)
                    "\nTodo: " (:todo n-o-t)
                    "\nDoing: " (:doing n-o-t)
                    "\nDone: " (:done n-o-t)
                    "\n\nTask-Location: " (db/task-location)))))

(defn save-task-location!
  "Event -> Void
  Sets the the tasks-location to the value attribute of the given Event ev"
  [ev]
  (let [pth (.-value (.-target ev))
        fpth (.join path pth fo/filename)
        stats (.statSync fs pth)
        ;; Transform stats.mode to octal:
        ;; github.com/nodejs/node-v0.x-archive/issues/3045#issuecomment-4865547
        tmp (bit-and (.-mode stats) (js/parseInt 777 8))
        perm (str (.toString tmp 8))]
    (.log js/console stats)
    (.log js/console perm)
    (if (.openSync fs (str pth "/.writetest") "w")
      (do
       (println "Path is writable")
       (if (.existsSync fs fpth)
         true ;load file
         false) ;create, and write file)
       (fo/create-task-list-file pth)
       (db/set-task-location! pth))
      (println "No Success"))))

(defn open-task-location!
 "Event -> Void
 Sets the the tasks-location to the value attribute of the given Event ev"
 [ev]
 (let [pth (.-value (.-target ev))
       fpth (.join path pth fo/filename)]
   (if (.existsSync fs fpth)
     (do
      (.log js/console "Fileexists")
      (.log js/console pth)
      (.log js/console (db/reset-tasklist! pth))
      (.log js/console (db/set-task-location! pth)))
     (do
      (.log js/console "Abbruch")
      (js/alert "This is not a valid task location directory!")))))
  ;  (if (.openSync fs (str pth "/.writetest") "w")
  ;    (do
  ;     (println "Path is writable")
  ;     (if (.existsSync fs fpth)
  ;       true ;load file
  ;       false) ;create, and write file)
  ;     (fo/create-task-list-file pth)
  ;     (db/set-task-location! pth))
  ;    (println "No Success"))))

(defn open-task-location-dialog!
 "Event -> Void
  Show the Task statistics"
  []
  (let [file-chooser (get-element "location-dialog")]
    (println "set-task-location!")
    (.addEventListener file-chooser "change" open-task-location!)
    (.click file-chooser)))

(defn save-task-location-dialog!
 "Event -> Void
  Show the Task statistics"
  []
  (let [file-chooser (get-element "location-dialog")]
    (println "set-task-location!")
    (.addEventListener file-chooser "change" save-task-location!)
    (.click file-chooser)))

(defn show-about!
  "Event -> Void
   Show the Task statistics"
   []
   (let [n-o-t (db/no-of-tasks)]
     (js/alert (str "AKIEE\n"
                    "=============\n\n"
                    "About\n"
                    "--------------\n"
                    "Akiee - a Markdown-based task manager\n"
                    "Version 0.0.3\n"
                    "(c) 2017 Marco Laspe <marco@rockiger.com>\n"
                    "Licence: GNU General Public License\n\n"
                    "Librarys\n"
                    "--------------\n"
                    "* Clojure/Clojurescript\n"
                    "* Reagent\n"
                    "* Garden\n"
                    "* Jayq\n"
                    "* Historian\n"
                    "* Nwjs\n"
                    "* Marked\n"
                    "* Org-Mode-Parser"))))

(defn handle-keyup
  "KeyEvent -> GlobalState
  Handles the keyevents that are created by js/document"
  [ev]
  (let [mac?   (if (= (.-platform js/process) "darwin") true false)
        ky     #(.-keyCode %)
        ctrl?  (if mac? #(.-metaKey %) #(.-ctrlKey %))
        shift? #(.-shiftKey %)]
    (cond
     (and (= (ky ev) 32) (ctrl? ev)) (db/switch-editor!)                      ;; Ctrl + Space
     (and (or (= (ky ev) 49) (= (ky ev) 97)) (ctrl? ev)) (db/switch-todo!)    ;; Ctrl + 1
     (and (or (= (ky ev) 50) (= (ky ev) 98)) (ctrl? ev)) (db/switch-doing!)   ;; Ctrl + 2
     (and (or (= (ky ev) 51) (= (ky ev) 99)) (ctrl? ev)) (db/switch-done!)    ;; Ctrl + 3
     (and (or (= (ky ev) 52) (= (ky ev) 100)) (ctrl? ev)) (db/switch-all!)    ;; Ctrl + 4
     (and (or (= (ky ev) 69) (= (ky ev) 101)) (ctrl? ev)) (db/switch-editor!) ;; Ctrl + E
     (and (= (ky ev) 13) (ctrl? ev)) (db/switch-entry!)                       ;; Ctrl + Enter
     (and (= (ky ev) 70) (ctrl? ev)) (db/switch-search!)                      ;; Ctrl + F
     (and (= (ky ev) 89) (ctrl? ev)) (hist/redo!)                             ;; Ctrl + Y
     (and (= (ky ev) 90) (ctrl? ev) (shift? ev)) (hist/redo!)                 ;; Ctrl + Shift + Z
     (and (= (ky ev) 90) (ctrl? ev)) (hist/undo!)                             ;; Ctrl + Z
     (and (= (ky ev) 27) (db/entry?)) (cancel-enter-task)                     ;; ESC - entry?
     (and (= (ky ev) 27) (db/search?)) (cancel-search)                        ;; ESC - search?
     (and (= (ky ev) 27) (db/editable)) (db/set-editable! nil)                ;; ESC - editable
     (and (= (ky ev) 13) (= (db/editable) "hdln")) (submit-sidebar-hdln)      ;; Enter - hdln
     (and (= (ky ev) 13) (= (db/editable) "tags")) (submit-sidebar-tags)      ;; Enter - tags
     (and (= (ky ev) 13) (= (db/editable) "reps")) (submit-sidebar-reps))))   ;; Enter - reps


(defn register-keyevents
  "Register the keyhandlers"
  []
  (events/listen js/document "keyup" handle-keyup))

(defn register-datepicker-events
  []
  (do
    (.ready (js/$ js/document)
            (fn [] (.on (.datepicker (js/$ "#sidebar-scheduled-form"))
                        "hide" handle-change-date)))
    (.ready (js/$ js/document)
            (fn [] (.on (.datepicker (js/$ "#sidebar-deadline-form"))
                        "hide" handle-change-date)))))

(defn register-click-links
  "Register the click events on links in the details area"
  []
  (let [$body ($ :body)]
    (on $body "click" :a "data" handle-details-link-click)))

(defn create-menu
  "Create the menus"
  []
  (do
    (.append *menu* (new gui.MenuItem (clj->js {:label "Undo" :click hist/undo! :enabled false})))
    (.append *menu* (new gui.MenuItem (clj->js {:label "Redo" :click hist/redo! :enabled false})))
    (.append *menu* (new gui.MenuItem (clj->js {:type "separator"})))
    (.append *menu* (new gui.MenuItem (clj->js {:label "Statistics" :click show-statistics! :enabled true})))
    (.append *menu* (new gui.MenuItem (clj->js {:type "separator"})))
    (.append *menu* (new gui.MenuItem (clj->js {:label "Open tasks...        " :click open-task-location-dialog! :enabled true})))
    (.append *menu* (new gui.MenuItem (clj->js {:label "Save tasks...        " :click save-task-location-dialog! :enabled true})))
    (.append *menu* (new gui.MenuItem (clj->js {:type "separator"})))
    (.append *menu* (new gui.MenuItem (clj->js {:label "About" :click show-about! :enabled true})))
    (set! js/mn *menu*)))

(defn create-taskmenu
  "Create the task menu"
  []
  (do
    (.append *taskmenu* (new gui.MenuItem (clj->js {:label "Top" :click #() :enabled true})))
    (.append *taskmenu* (new gui.MenuItem (clj->js {:label "Bottom" :click #() :enabled true})))
    (set! js/mn *taskmenu*)))
