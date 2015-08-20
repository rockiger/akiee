(ns akiee.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as string]
            [reagent.core :as r]
            [akiee.constants :as c :refer [TODO DOING DONE ALL]]
            [akiee.app-db :as db]
            [akiee.handlers :as h]
            [akiee.node :as nd]
            [akiee.sidebar :as sb]))

(enable-console-print!)

;; TODO unit test for reagent
;; TODO figwhell for node-webkit

;; =================
;; Constants: in akiee.constants

(def modifier (if (= (.-platform js/process) "darwin") "Cmd" "Ctrl"))


;; =================
;; Data definitions:

;; World State is ... (give WS a better name)

;; =================
;; Functions:

(defn list-state-button
  "String String String -> Component
  Consumes the text tx, the id and the title t, the state,
  the test function tfn, the on-click function onfn of the button;
  produces the component for the button."
  [tx id t state tfn onfn]
  (let [active? (if (and (= (tfn) state) (not (db/editor?))) "active" "")]
    [:button.btn.btn-default.navbar-btn.btn-state.toolbar-button
     {:type "button" :id id :title t :class active? :on-click onfn} tx]))


(def todo-button  [list-state-button "Todo" "show-todo" (str modifier "+1") TODO
                                     db/list-state db/switch-todo!])
(def doing-button [list-state-button "Doing" "show-doing" (str modifier "+2 / " modifier "+Space") DOING
                                     db/list-state db/switch-doing!])
(def done-button  [list-state-button "Done" "show-done" (str modifier "+3") DONE
                                     db/list-state db/switch-done!])
(def board-button [list-state-button "Board" "show-all" (str modifier "+4") ALL
                                     db/list-state db/switch-all!])

(defn switch-button
  "String String String -> Component
  Consumes the icon name in, the id and title t of the button, the test function tfn?,
  the on-click function onfn of the button.
  produces the component for the button."
  [in id t tfn? onfn]
  (let [icon-name (str "fa-" in)
        active? (if (tfn?) "active" "")]
  [:button.btn.btn-default.navbar-btn.btn-square.toolbar-button {:id id :title t :class active? :on-click onfn}
   [:span.fa.fa-fw {:class icon-name}]]))

(def editor-switch [switch-button "code" "show-editor" (str modifier "+E / " modifier "+Space") db/editor? db/switch-editor!])
(def search-switch [switch-button "search" "show-searchbox" (str modifier "+F") db/search? db/switch-search!])
(def entry-switch  [switch-button "plus" "show-enter-task" (str modifier "+Enter") db/entry? db/switch-entry!])
(def entry-close  [:button.hover-button {:id "close-app" :title "Alt-F4" :on-click h/onclick-close} [:img {:src "./css/img/window-close.svg"}]])

(defn toolbar
  "-> Component
  The toolbar for changing the state of the Akiee"
  []
  [:nav#toolbar.navbar.navbar-default {:role "navigation"}
   [:div#toolbar-fluid.container-fluid
    [:div#toolbar-inside.navbar-flex
     [:div#taskbuttons.btn-group
      todo-button
      doing-button
      done-button]
     board-button
     [:div#toolbar-spacer.spacer]
     editor-switch
     search-switch
     entry-switch
     [:div#close entry-close]]]])


(defn select
  "ListOf* String -> Component
  Consumes a list of anything loa and a name; produces the component of a select field."
  [loa n]
  [:select#enter-task-status.form-control {:name n :defaultValue "Inbox"}
   (for [a loa]
     [:option a])])

(defn enter-task-status
  "ListOfTaskState -> Component
  Consumes the a list of taskstate lot;
  produces the component of the select field for the state of the new task."
  [lot]
  (select lot "task-status"))

(defn enter-task-project
  "ListofString -> Component
  Consumes a list of string los; produces the component for the project select."
  [los]
  (select los "task-project"))

(defn enter-task
  "-> Component
  The entry form for entering tasks"
  []
  (let [show? (if (db/entry?)
                {:class "open"}
                {:class "closed"})]
  [:div#enter-task-div.container-fluid.slider show?
   [:form#enter-task {:on-submit h/handle-enter-task}
    [:input#enter-headline.form-control {:type "text" :placeholder "Enter Headline"
                                         :name "headline"}]
    [enter-task-status ["TODO", "DOING", "DONE"]]
    [enter-task-project (db/projects)]
    [:button.btn.btn-default.btn-on-grey {:type "submit"} "Create"]
    [:button#cancel-enter-task.btn.btn-link
     {:type "button" :on-click h/cancel-enter-task} "Cancel"]]]))

(defn search
  "-> Component
  The entry form for searching tasks"
  []
  (let [show? (if (db/search?)
                {:class "open"}
                {:class "closed"})]
  [:div#search-form.slider show?
    [:input#search-input.form-control.mvx-search {:type "text" :on-change h/handle-onchange-search}]]))

(defn editor
  "-> Component
  The textarea to directly edit the task list in markdown"
  []
  (let [show? (if (db/editor?)
                {:style {:display "inline-block"}}
                {:style {:display "none"}})]
  [:div#editor show?
   [:textarea#editor-area {:rows 3 :on-blur h/handle-blur-editor}]]))

(defn task [t]
  (let [class (if (= (db/selected) (:key t))
                "selected"
                "")]
  [:tr {:data-key (:key t) :on-click h/onclick-task :class class}
   [:td.taskstate {:on-click h/handle-onclick-taskstate} [:span {:class "hover-button"} (:todo t)]]
   [:td [:span.project-tag.label (:project t)] (:headline t)]
   [:td.rank [:span.fa.fa-chevron-up.hover-button {:on-click h/handle-onclick-up}]]
   [:td.rank [:span.fa.fa-chevron-down.hover-button {:on-click h/handle-onclick-down}]]]))

(defn task-table [tb]
  [:table.table
     [:tbody
      (for [t tb]
        [task t])]])

(defn task-list []
  (let [show? (if (not (db/editor?))
                {:style {:display "flex"}}
                {:style {:display "none"}})
        sidebar? (if (db/selected)
                   {:class ""}
                   {:class "closed"})]
    [:div#tasks show? [:div#list (if (= (db/list-state) ALL)
                       [:table.table [:tbody [:tr.kanban-row
                       (for [tb (db/tasks)]
                         [:td.kanban-column (task-table tb)])]]]
                       (task-table (db/tasks)))]
     [:aside#task-sidebar sidebar? (sb/sidebar)]]))

(defn app
  " -> Component
  Produces the base comment"
  []
  [:div#app
   [toolbar]
   [enter-task]
   [search]
   [editor]
   [task-list]])

(defn big-bang []
  (h/register-keyevents)
  (h/register-winevents)
  (r/render-component
    [app]
    (.getElementById js/document "root"))
  (sb/datepicker-config)
  (h/register-datepicker-events))

(big-bang)
