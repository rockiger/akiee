(ns akiee.datadefinitions)

;; helper function for templates
(defn ddd [& args]
  true)

(enable-console-print!)

;; =================
;; Data definitions:

;; TaskState is one of:
;; - "TODO"
;; - "DOING"
;; - "DONE"
;; interp. as the current state of a task

#_
(defn fn-for-taskstate [ts]
  (cond
   (= ts TODO)  (true)
   (= ts DOING) (true)
   (= ts DONE)  (true)))

;; RepeatInfo is a map
;; interp. as the intervall in which a task gets repeatted
;; - rate: Integer how many units until the next repetition
;; - unit: String with one or more of daily, weekdayly, weekly, monthly, yearly;

(def R1 {:rate 1 :unit "daily"})

#_
(defn fn-for-repeat-info [r]
  (let [rate (if (:rate r) (:rate r) 1)
        unit (:unit r)]
    (cond
     (= unit "daily") (ddd)
     (= unit "weekly") (ddd)
     (= unit "monthly") (ddd)
     ...
     :else (ddd))))

;; Node is a Object/map
;; interp. as a Task with properties:
;; - key: unique key in markdown file
;; - level: level in markdown structure
;; - headline
;; - body
;; - tag: default null
;; - tags default []
;; - todo: task state, default null
;; - priority, default null
;; - scheduled, default null
;; - deadline, default null
;; - fin, default null - when task was done
;; - drawer, default {}
;; - rank: unique Ranking in File, default null
;; - rank: string with repeat informatien, default null
;; - style: the NodeStyle of a node TODO: has to be initially created in markdown-org-mode;
;;          defaul nil
;; - project: The name of the project corresponding project that is one level higher, has to
;;            found out via a function

(def N1 {:key "orgode_33.##"
         :level 2
         :headline "As a user I want to change the state of a task with a simple action."
         :body ""
         :tag nil
         :tags {}
         :todo "DOING"
         :priority nil
         :scheduled nil
         :deadline nil
         :fin nil
         :properties {}
         :drawer {}
         :rank nil
         :repeat nil
         :style nil
         :project "Inbox"})

(def jsN1 (clj->js {:key "orgode_33.##"
                    :level 2
                    :headline "As a user I want to change the state of a task with a simple action."
                    :body ""
                    :tag nil
                    :tags {}
                    :todo "DOING"
                    :priority nil
                    :scheduled nil
                    :deadline nil
                    :fin nil
                    :properties {}
                    :drawer {}
                    :rank nil
                    :repeat nil
                    :style nil
                    :project "nil"}))

(def N1a {:key "orgode_45.##"
          :level 2
          :headline "As a user I want to change the state of a task with a simple action."
          :body ""
          :tag nil
          :tags {}
          :todo "DOING"
          :priority nil
          :scheduled nil
          :deadline nil
          :fin nil
          :properties {}
          :drawer {}
          :rank nil
          :repeat nil
          :style nil
          :project "nil"})

(def N2 {:key "orgode_83.##"
         :level 1
         :headline "As a user I want to change the state of a task with a simple action."
         :body ""
         :tag nil
         :tags {}
         :todo nil
         :priority nil
         :scheduled nil
         :deadline nil
         :fin nil ;; the date when the task was finished
         :properties {}
         :drawer {}
         :rank nil
         :repeat nil
         :style nil
         :project "nil"})

#_
(defn fn-for-node [n]
  (ddd (:todo n)
       (:headline n)
       (:rank n)))

;; Rank is one of:
;; - Integer [1, ddd]
;; - null
;; interp. as the ranking of a task
;; should be an int > 0
;; nill equals infinity
;; should be atomar

#_
(defn fn-for-rank [r]
  (if (nil? r)
    (ddd r)
    (ddd r)))

;; ListOf(Node) is on of:
;; - []
;; - (conj ListOfNode Node)
;; interp. a list of Nodes

(def LON-1 [])
(def LON-2 (conj [] N1))

#_
(defn fn-for-lon [lon]
  (cond ((empty? lon) true)
        :else (ddd (first lon)
                   (fn-for-los (rest lon)))))


;; Rank is one of:
;; - Integer [1, ddd]
;; - nil
;; interp. as the ranking of a task
;; should be an int > 0

(def RANK-1 10)
(def RANK-2 nil)

#_
(defn fn-for-rank [rank]
  (if (= rank 0)
    (ddd rank)
    (ddd rank)))


;; Liststate is one of:
;; - TaskState
;; - "ALL"
;; - false ; don't know if neccessary
;; interp. what is shown in the tasklist
;; ALL means all TaskState tasks are shown combined

(def LS-1 "TODO")
(def LS-2 "ALL")
(def LS-3 "DOING")

#_
(defn fn-for-liststate [ls]
  (cond
   (= ls TODO)  (ddd)
   (= ls DOING) (ddd)
   (= ls DONE)  (ddd)
   (= ls ALL)   (ddd)))


;; NodeStyle is one of:
;; - TaskState
;; - nil
;; interp. the styling of a Node

(def NS-1 "TODO")
(def NS-2 nil)

#_
(defn fn-for-nodestyle [ns]
  (cond
   (= ns TODO)  (ddd)
   (= ns DOING) (ddd)
   (= ns DONE)  (ddd)
   :else        (ddd)))


;; SwitchState is one of:
;; -true
;; -false
;; interp. if a function is active or NodeStyle

(def editor-switch false)
(def search-switch true)

#_
(defn fn-for-switchstate [ss]
  (if ss
    (ddd ss)
    (ddd ss)))

;; Selected is one of:
;; - string
;; - nil
;; interp. the selected Task or nil

(def sel1 nil)
(def sel2 "orgode_33.##")

(defrecord global-state [editor? search? entry? changed? ss selected editable ls])
;; GlobalState is (global-state. false false false LS-3 LON-2) of:
;; - SwitchState editor
;; - SwitchState search
;; - SwitchState entry
;; - Bool changed? - if lon changed
;; - the string string in the search box
;; - String or nil Editable - the attribute of the selected task to edit
;; - String or nil Selected - the selected task
;; - ListState
;; - ~~ListOfNode~~ gets it own atom

(def GS1 (global-state. false false false false "" nil nil ""))
(def GS2 (global-state. false false false false "" nil nil ""))

#_
(defn fn-for-game [gs]
  (ddd (fn-for-switchstate (:editor? gs))
       (fn-for-switchstate (:search? gs))
       (fn-for-switchstate (:entry? gs))
       (fn-for-liskstate (:ls gs))))

;; ConfState is a map
;; interp. as the persistant configuration, that can be set by the user-home
;; - TaskLocation "String that holds the path to the directory of liveflow.md"

(def conf-state {:task-location ""})
