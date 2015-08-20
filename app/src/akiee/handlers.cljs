(ns akiee.handlers
  (:require [goog.events :as events]
            [akiee.app-db :as db]
            [akiee.node :as no]
            [akiee.dom-helpers :as dom :refer [get-element]]
            [akiee.fileoperations :as fo]
            [akiee.rank :as r]))

;; Nodejs modules
(def gui (js/require "nw.gui"))

(enable-console-print!)
;; Handles events for user interactions

;; =================
;; Constants:
(def WIN (.get (.-Window gui)))

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
      (when (not= hdln "")
        (db/add-task! tast hdln tapr))
      (cancel-enter-task)
      false)))

(defn handle-close
  "Event ->
  Handles the close event of win"
  [ev]
  (do
    (fo/save-task-file (no/lon->md (db/nodes)) (fo/task-file-path) (db/changed?) db/set-changed!)
    (.close WIN true)))

(defn handle-blur
  "Event ->
  Handles the close event of win"
  [ev]
  (do
    (fo/save-task-file (no/lon->md (db/nodes)) (fo/task-file-path) (db/changed?) db/set-changed!)))

(defn register-winevents
  "Register the window event handlers"
  []
  (do
    (events/listen js/window "blur" handle-blur)
    (.on WIN "close" handle-close))) ;; can't use google closure here, because of nw.js

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
  (let [lon (map no/jsnode->node (no/array->vec [] (no/parse-file (.-value (.-target ev)))))]
    (do
      (db/reset-lon! db/app-state lon)
      (db/set-changed! true))))

(defn handle-onclick-taskstate
  "Event -> GlobalState
  Consumes the onclick Event ev and changes global lon with task to next state;
  returns the app-state"
  [ev]
  (let [row  (.-parentNode (.-currentTarget ev))
        ky (.-key (.-dataset row))]
    (do
      (db/next-ts! ky)
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
        (db/change-body content (db/sidebar-content))))))

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

(defn handle-keyup
  "KeyEvent -> GlobalState
  Handles the keyevents that are created by js/document"
  [ev]
  (let [mac? (if (= (.-platform js/process) "darwin") true false)
        ky  #(.-keyCode %)
        ctrl? (if mac? #(.-metaKey %) #(.-ctrlKey %))]
    (cond
     (and (= (ky ev) 32) (ctrl? ev)) (db/switch-editor!)                      ;; Ctrl + Space
     (and (or (= (ky ev) 49) (= (ky ev) 97)) (ctrl? ev)) (db/switch-todo!)    ;; Ctrl + 1
     (and (or (= (ky ev) 50) (= (ky ev) 98)) (ctrl? ev)) (db/switch-doing!)   ;; Ctrl + 2
     (and (or (= (ky ev) 51) (= (ky ev) 99)) (ctrl? ev)) (db/switch-done!)    ;; Ctrl + 3
     (and (or (= (ky ev) 52) (= (ky ev) 100)) (ctrl? ev)) (db/switch-all!)    ;; Ctrl + 4
     (and (or (= (ky ev) 69) (= (ky ev) 101)) (ctrl? ev)) (db/switch-editor!) ;; Ctrl + E
     (and (= (ky ev) 13) (ctrl? ev)) (db/switch-entry!)                       ;; Ctrl + Enter
     (and (= (ky ev) 70) (ctrl? ev)) (db/switch-search!)                      ;; Ctrl + F
     (and (= (ky ev) 27) (db/entry?)) (cancel-enter-task)                     ;; ESC - entry?
     (and (= (ky ev) 27) (db/search?)) (cancel-search)                        ;; ESC - search?
     (and (= (ky ev) 27) (db/editable)) (db/set-editable! nil)             ;; ESC - editable
     (and (= (ky ev) 13) (= (db/editable) "hdln")) (submit-sidebar-hdln)     ;; Enter - hdln
     (and (= (ky ev) 13) (= (db/editable) "tags")) (submit-sidebar-tags)     ;; Enter - tags
     (and (= (ky ev) 13) (= (db/editable) "reps")) (submit-sidebar-reps)     ;; Enter - reps
     )))

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
