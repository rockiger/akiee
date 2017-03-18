(ns akiee.sidebar
  (:require [reagent.core :as r]
            [akiee.constants :as c :refer [TODO DOING DONE ALL]]
            [akiee.app-db :as db]
            [akiee.handlers :as h]
            [akiee.node :as n]))

(enable-console-print!)

;; TODO unit test for reagent
;; TODO figwhell for node-webkit

;; =================
;; Functions:

(defn headline [node]
     [:h4 {:on-click h/onclick-hdln}
      (if (and (db/selected) (= (db/editable) "hdln"))
          [:input#sidebar-headline.sidebar-input.form-control {:type "text" :default-value (:headline node) :on-blur h/onblur-sidebar-input :on-submit h/onblur-sidebar-input}]
          (:headline node))
      [:span.fa.fa-pencil-square-o]])

(defn markdown-body [node] ;; am 21.06. im Zug bearbeitet, leider kein nw installiert
  [:div {:id "details" :dangerouslySetInnerHTML
                         {:__html (js/marked (str (:body node)))}}])

(defn body [node]
     [:div#sidebar-body {:on-click h/onclick-body}
      [:span.details-left "Details:"] [:span.fa.fa-file-text-o]
      (if (and (db/selected) (= (db/editable) "body"))
          [:div
           [:textarea#sidebar-body-ta.sidebar-input.form-control {:default-value (:body node) :on-blur h/onblur-sidebar-body :on-submit h/onblur-sidebar-body}]
           [:button#sidebar-body-submit.btn.btn-default {:type "button" :title "Tab" :style {:float "right" :margin-top "5px"}} "Save"]]
        (markdown-body node))])

(defn state [node]
     [:div#sidebar-state {:on-click h/onclick-state}
      [:span.details-left "State:"]
      (if (and (db/selected) (= (db/editable) "state"))
        [:select#sidebar-task-state.form-control {:name "task-status" :defaultValue (:todo node) :on-blur h/onblur-sidebar-state :on-submit h/onblur-sidebar-state :on-change h/onblur-sidebar-state :on-click h/submit-sidebar-state}
         [:option "TODO"]
         [:option "DOING"]
         [:option "DONE"]]
        [:span (:todo node)])
      [:span.fa.fa-check-square-o]
      (if (:fin node) [:span.fin.label (.toLocaleDateString (:fin node))])])

(defn project [node]
  [:div#sidebar-project {:on-click h/onclick-project}
   [:span.details-left "Project:"]
   (if (and (db/selected) (= (db/editable) "project"))
     [:select#sidebar-task-project.form-control {:name "task-project" :defaultValue (:project node) :on-blur h/onblur-sidebar-project :on-submit h/onblur-sidebar-project :on-change h/onblur-sidebar-project :on-click h/submit-sidebar-project}
      (for [p (db/projects)]
         ^{:key p} [:option p])]
     [:span (:project node)])
   [:span.fa.fa-list-alt]])

(defn input-date [date]
  (if date
    (str (inc (.getMonth date)) "/" (.getDate date) "/" (.getFullYear date))
    ""))

(defn scheduled [node]
   (let [style (if (and (db/selected) (= (db/editable) "scheduled")) {:display "inline-block"} {:display "none"})
         span-style (if (and (db/selected) (= (db/editable) "scheduled")) {:display "none"} {:display "inline"})]
     [:div#sidebar-scheduled {:on-click h/onclick-scheduled}
       [:span.details-left "Planned:"]
       [:input#sidebar-scheduled-form.sidebar-input.form-control {:type "text" :value (input-date (:scheduled node)) :data-provide "datepicker" :style style}]
       [:span {:style span-style} (if (:scheduled node) (.toLocaleDateString (:scheduled node)) "Never")]
      [:span.fa.fa-calendar]]))

(defn deadline [node]
   (let [style (if (and (db/selected) (= (db/editable) "deadline")) {:display "inline-block"} {:display "none"})
         span-style (if (and (db/selected) (= (db/editable) "deadline")) {:display "none"} {:display "inline"})]
     [:div#sidebar-deadline {:on-click h/onclick-deadline}
       [:span.details-left "Due:"]
       [:input#sidebar-deadline-form.sidebar-input.form-control {:type "text" :value (input-date (:deadline node)) :data-provide "datepicker" :style style}]
       [:span {:style span-style} (if (:deadline node) (.toLocaleDateString (:deadline node)) "Never")]
      [:span.fa.fa-calendar]]))

(defn tags [node]
  [:div#sidebar-tags {:on-click h/onclick-tags}
   [:span.details-left "Tags:"]
   (if (and (db/selected) (= (db/editable) "tags"))
     [:input#sidebar-tags-form.form-control {:type "text" :default-value (n/tags-string node) :on-blur h/onblur-sidebar-tags :on-submit h/onblur-sidebar-tags}]
     [:span (or (n/tags-string node) "None")])
   [:span.fa.fa-tags]])

(defn reps [node]
  [:div#sidebar-reps {:on-click h/onclick-reps}
   [:span.details-left "Repeat:"]
   (if (and (db/selected) (= (db/editable) "reps"))
     [:input#sidebar-reps-form.form-control {:type "text" :default-value (n/reps-string node) :on-blur h/onblur-sidebar-reps :on-submit h/onblur-sidebar-reps}]
     [:span (n/reps-string node)])
   [:span.fa.fa-repeat]])

(defn sidebar []
  (let [node (db/sidebar-content)]
    [:div#details
     (headline node)
     (scheduled node)
     (deadline node)
     (reps node)
     (tags node)
     (state node)
     (project node)
     (body node)]))

(defn datepicker-config []
  (.ready (js/$ js/document)
          (do
            (set! (.-autoclose (.-defaults (.-datepicker (.-fn js/$)))) true)
            (set! (.-toggleActive (.-defaults (.-datepicker (.-fn js/$)))) true)
            (set! (.-todayHighlight (.-defaults (.-datepicker (.-fn js/$)))) true))))
