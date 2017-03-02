(ns akiee.dialogs
  (:require [akiee.constants :as c :refer [TODO DOING DONE ALL]]
            [akiee.app-db :as db]))

(defn preferences
  "Coud be a preferences dialog in the future, if needed. Right now it is not neccessary"
  []
  [:div.navbar-default
    [:div.empty-list.navbar-default
     [:h3 "Akiee preferences"]
     [:p [:input {:type :file}]]]])

(defn empty-message []
  (cond
   (and (empty? (db/tasks TODO)) (empty? (db/tasks DOING)) (empty? (db/tasks DONE)))
   [:div.empty-list
    [:h1 "Welcome!"]
    [:p "Start with adding a new task by clicking on " [:span..fa.fa-fw.fa-plus] "or press " [:code "Ctrl+Enter"] "."]
    [:p "Work through your tasks by clicking on " [:i "Todo"] ", " [:i "Doing"] ", " [:i "Done"] " or pressing " [:code "Ctrl+1"] ", " [:code "Ctrl+2"] ", " [:code "Ctrl+3"] "."]
    [:p "Get a complete overview of all your task by clicking on " [:i "Board"] " or pressing " [:code "Ctrl+4"] "."]
    [:p "Search for tasks by clicking on " [:span.fa.fa-fw.fa-search] " or press " [:code "Ctrl+F"] "."]
    [:p "Edit your tasks directly in markdown by clicking on "  [:span.fa.fa-fw.fa-code] " or press " [:code "Ctrl+E"] "."]
    [:p {:dangerouslySetInnerHTML {:__html "&nbsp;"}}] ; because react dosn't allw &nbsp;
    [:p "If you want to save your tasks to your Dropbox"[:span.fa.fa-fw.fa-dropbox {:style {:color :blue}}]" folder,"[:br] "you can set a different location" [:span.fa.fa-fw.fa-folder-open] " in the menu"[:span.fa.fa-fw.fa-ellipsis-v]"."]]

   (and (= (db/list-state) TODO)  (empty? (db/tasks)))
   [:div.empty-list [:h1 "No TODOs here"] [:p "Add a new task by clicking on " [:span.glyphicon.glyphicon-plus] "or press " [:code "Ctrl+Enter"] "."]]

   (and (= (db/list-state) DOING) (empty? (db/tasks)))
   [:div.empty-list [:h1 "All DOINGs are done!"] [:p "Get some new tasks by clicking on TODO or press " [:code "Ctrl+1"] "."] [:p "Add a new task by clicking on " [:span.glyphicon.glyphicon-plus] " or press " [:code "Ctrl+Enter"] "."]]

   (and (= (db/list-state) DONE)  (empty? (db/tasks)))
   [:div.empty-list [:h1 "Nothing DONE yet"] [:p "Start working by clicking on DOING or pressing " [:code "Ctrl+2"] "."]]))
