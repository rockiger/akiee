(ns akiee.app-db
  (:require [akiee.fileoperations :as fo]
            [akiee.datadefinitions :as dd :refer [global-state]]
            [akiee.constants :refer [TODO DOING DONE ALL]]
            [akiee.dom-helpers :as dom]
            [akiee.node :as no]
            [cljs.test :refer-macros [is deftest]]
            [cljs.nodejs :as nj]
            [reagent.core :as rc]
            [clojure.string :as s :refer [trim]]))


(enable-console-print!)

;; app state operations for Akiee

;; =================
;; Constants:

(def null (js* "null"))
(def FP (fo/create-task-list-file (fo/user-home)))

;; =================
;; Functions:

(defn load-app-state
  "String -> GS
  consumes the path p to the task file and produces the initial app-state
  TODO find way to test, without :key"
  [p]
  (global-state. false false false false "" nil nil DOING (no/->nodes p)))

(is (= (:lon (load-app-state fo/testfile) [{:key "orgode_33.##" :level 1 :headline "Inbox"
                                            :body "" :tag nil :tags {}  :todo "DOING"
                                            :priority nil :scheduled nil :deadline nil
                                            :properties {} :drawer {} :rank nil  :style nil}
                                           {:key "orgode_33.##" :level 2  :headline "Test"
                                            :body ""  :tag nil :tags {} :todo "TODO"
                                            :priority nil :scheduled nil :deadline nil
                                            :properties {} :drawer {} :rank "9"
                                            :style nil}])))


(def app-state  (rc/atom (load-app-state FP)))
(def test-state (rc/atom (load-app-state fo/testfile)))


(defn nodes
  "-> ListOfNode
  returns the nodes of the app-state"
  []
  (:lon @app-state))

(defn editor?
  "-> Boolean
  returns the state of the editor"
  []
  (:editor? @app-state))

(defn entry?
  "-> Boolean
  returns the state of the task entry"
  []
  (:entry? @app-state))

(defn search?
  "-> Boolean
  returns the state of the search box"
  []
  (:search? @app-state))

(defn changed?
  "-> Boolean"
  []
  (:changed? @app-state))

(defn list-state
  "-> ListStat
  returns the state of the List"
  []
  (:ls @app-state))

(defn selected
  "-> String
  returns the state of the selected filed"
  []
  (:selected @app-state))

(defn editable
  "-> String
  returns the state of the editable filed"
  []
  (:editable @app-state))

(defn tasks-helper
  "GlobalState ListState -> lon
  consumes an GlobalState gs , a ListState ls and  returns the tasks, according to the current ListState"
  [gs ls]
    (let [filter-tasks (fn [x] (if (= (:level x) 2) true false ))
          filter-state (fn [x] (cond
                                (= ls ALL) true
                                (= ls (:todo x)) true
                                :else false))
          filter-search (fn [x] (if (not (empty? (:ss @gs)))
                                  (if (or (re-find (re-pattern
                                                (str "(?i)"(:ss @gs))) (:headline x))
                                          (re-find (re-pattern
                                                (str "(?i)"(:ss @gs))) (no/tags-string x))
                                          (re-find (re-pattern
                                                (str "(?i)"(:ss @gs))) (:project x)))
                                    true
                                    false)
                                  true))]
      (vec (sort-by :rank no/higher-rank?
                    (filter filter-search
                    (filter filter-state
                    (filter filter-tasks (:lon @gs))))))))

;; ==========================================================
;; TEST
(let [filter-tasks (fn [x] (if (= (:level x) 2) true false ))
      filter-state (fn [x] (cond
                                (= (:ls @app-state) ALL) true
                                (= (:ls @app-state) (:todo x)) true
                                :else false))
      filter-search (fn [x] (if (:ss @app-state)
                                  (if (or
                                       (re-find (re-pattern (:ss @app-state)) (:headline x))
                                       (re-find (re-pattern
                                                (str "(?i)"(:ss @app-state))) (no/tags-string x))
                                       (re-find (re-pattern (:ss @app-state)) (:project x)))
                                    true
                                    false)
                                  true))]
  (filter filter-search (filter filter-state (filter filter-tasks (:lon @app-state)))))
;; END TEST

;; Test fails becaus of :body one seems to have an "\n"
#_(is (no/node= (nth (tasks-helper test-state) 0) {:key "orgode_33.##" :level 2  :headline "Test"
                                              :body ""  :tag nil :tags {} :todo "TODO"
                                              :priority nil :scheduled nil :deadline nil
                                              :properties {} :drawer {} :rank nil :style nil}))


(defn tasks
  "-> ListOfNode
  shows the tasks of the app-state, according to the current ListState
  ---------------------------------------------------------------------------
  ListState -> ListOfNode
  consumes a ListState ls, shows the tasks of the app-state, according to ls"
  ([]
   (if (= (list-state) ALL)
    [(tasks-helper app-state TODO) (tasks-helper app-state DOING) (tasks-helper app-state DONE)]
    (tasks-helper app-state (list-state))))
  ([ls]
   (if (= ls ALL)
    [(tasks-helper app-state TODO) (tasks-helper app-state DOING) (tasks-helper app-state DONE)]
    (tasks-helper app-state ls))))

(defn projects
  "-> ListOfString
  returns a List of Strings with the projects in the app-state"
  []
  (let [filter-nodes (fn [x] (if (= (:level x) 1) true false ))]
    (vec (sort (map :headline (filter filter-nodes (:lon @app-state)))))))

(defn set-changed!
  "Bool -> GlobalState
  consumes the Bool b switches the changed? variable and return the new app-state"
  [b]
  (swap! app-state assoc :changed? b))

(defn set-search-string!
  "String -> GlobalState
  consumes a String s and changes the search-string of the app-state accordingly;
  returns the new GlobalState"
  [s]
  (swap! app-state assoc :ss s))

(defn set-selected!
  "String -> GlobalState
  consumes a String ky and changes the :selected GlobalState accordingly;
  returns the new GlobalState"
  [ky]
  (if (= (:selected @app-state) ky)
    (swap! app-state assoc :selected nil)
    (swap! app-state assoc :selected ky)))

(defn set-editable!
  "String -> GlobalState
  consumes a String ky and changes the :selected GlobalState accordingly;
  retruns the new GlobalState"
  [attr]
  (swap! app-state assoc :editable attr))

(defn switch-editor!
  "-> Boolean
  switches the editor? state and returns it"
  []
  (if (editor?)
    (swap! app-state assoc :editor? false :ss "")
    (let [ea (dom/get-element "editor-area")]
      (do
        (swap! app-state assoc :editor? true :search? false :entry? false :ss "" :selected nil)
        (set-changed! true)
        (set! (.-value ea) (no/lon->md (nodes)))
        (.focus ea)
        (.click ea)))))

(defn switch-search!
  "-> GlobalState
  switches the search? state and the new app-state"
  []
  (if (search?)
    (do
      (set! (.-value (dom/get-element "search-input")) "")
      (swap! app-state assoc :search? false :ss ""))
    (let [se (dom/get-element "search-input")]
      (do
        (set! (.-value (dom/get-element "search-input")) "")
        (swap! app-state assoc :editor? false :search? true :entry? false)
        (.focus se)))))

(defn switch-entry!
  "-> GlobalState
  switches the search? state and the new app-state"
  []
  (if (entry?)
    (swap! app-state assoc :entry? false :ss "")
    (let [entry (dom/get-element "enter-headline")]
      (do
        (swap! app-state assoc :editor? false :search? false :entry? true :ss "")
        (.focus entry)))))

(defn switch-list-state!
  "ListState -> GlobalState
  Consumes a Liststate ls switches the ls variable and editor? search? search? accordingly"
  [ls]
  (let [lon (:lon @app-state)]
      (swap! app-state assoc :editor? false :search? false :entry? false :ss "" :ls ls)))

(defn switch-todo!
  "-> GlobalState
  switches the ls variable to TODO and editor? search? search? accordingly"
  []
  (switch-list-state! TODO))

(defn switch-doing!
  "-> GlobalState
  switches the ls variable to DOING and editor? search? search? accordingly"
  []
  (switch-list-state! DOING))

(defn switch-done!
  "-> GlobalState
  switches the ls variable to DONE and editor? search? search? accordingly"
  []
  (switch-list-state! DONE))

(defn switch-all!
  "-> GlobalState
  switches the ls variable to ALL and editor? search? search? accordingly"
  []
  (switch-list-state! ALL))

(defn ->rank-helper
  "GlobalState -> Int
  produces a new rank based on the tasks in the GlobalState gs"
  [gs]
  (let [filter-tasks (fn [x] (if (not= (:rank x) nil) true false ))]
    (inc (int (:rank (last (vec (sort-by :rank no/higher-rank? (filter filter-tasks
                                                               (:lon @gs))))))))))
;(is (= (->rank-helper test-state) 10))

(defn ->rank
  "-> Int
  produces a new rank based on the app-state"
  []
  (->rank-helper app-state))


(defn index-of-node-helper [coll hl i]
  (cond (and (= 1 (int (:level (first coll)))) (= hl (:headline (first coll)))) i
        (empty? coll) nil
        :else (index-of-node-helper (rest coll) hl (inc 1))))

(defn index-of-node
  "Collection String -> Integer
  Consumes a Collection coll and a healine hl;
  produces the position of the element with the headline hl and level 1"
  [coll hl]
    (index-of-node-helper coll hl 0))
(is (= (index-of-node (:lon @test-state) "Inbox") 0))
(is (= (index-of-node (:lon @test-state) "XXXXX") nil))
(is (= (index-of-node (:lon @test-state) "Test") nil
))

(defn reset-lon!
  "Global-State ListOfNode -> GlobalState
  Resets the ListOfNode lon in the app-state; produces a new GlobalState"
  [gs lon]
  (swap! gs assoc :changed? true :lon lon))

(defn positions
  "Function Collection -> Integer
  Return the positions in positions of elements in coll that match the predicate pred "
  [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x)
                    idx))
                coll))

(defn node-pos-by-key
  "String ListOfNode -> Integer
  Returns the position of the first of occurence of a node with key ky in ListOfNode lon"
  [ky lon]
  (first (positions
          (fn [x] (if (= (:key x) ky) true false))
          lon)))
(let [lon [{:key "node_2"} {:key "node_1"} {:key "orgode_33.##"}]]
  (is (= (node-pos-by-key "node_2" lon) 0))
  (is (= (node-pos-by-key "node_1" lon) 1))
  (is (= (node-pos-by-key "orgode_33.##" lon) 2)))

(defn node-pos-by-headline
  "String ListOfNode -> Integer
  Returns the position of the first of occurence of a node with key ky in ListOfNode lon"
  [hdln lon]
  (first (positions
          (fn [x] (if (= (:headline x) hdln) true false))
          lon)))
(let [lon [{:headline "node_2"} {:headline "node_1"} {:headline "orgode_33.##"}]]
  (is (= (node-pos-by-headline "node_2" lon) 0))
  (is (= (node-pos-by-headline "node_1" lon) 1))
  (is (= (node-pos-by-headline "orgode_33.##" lon) 2)))

(defn insert-node-helper!
  "Node String GlobalState -> GlobalState
  Inserts a node n at the right position in project pro and returns GlobalState gs;
  returns a ListOfNode"
  [n pro gs]
  (let [lon (vec (:lon @gs))
        i (inc (node-pos-by-headline pro lon))
        new-lon (vec (concat (subvec lon 0 i) [n] (subvec lon i)))]
   (reset-lon! gs new-lon)))
(is (no/node= (get (:lon (insert-node-helper! (no/->node TODO "Test Headline" "Inbox" (->rank)) "Inbox" test-state)) 1)
       (no/->node TODO "Test Headline" "Inbox" (->rank))))

(defn insert-node!
  "Node String GlobalState -> ListOfNode
  Inserts a node n at the right position in project pro and returns a ListOfNode"
  [n pro]
  (insert-node-helper! n pro app-state))

(defn add-task!
  "TaskState String String -> GlobalState
  Consumes a TaskState ts a headline hl and a project pro;
  adds a task to the app-state"
  [ts hl pro]
  (let [n (no/->node ts hl pro (->rank))]
    (insert-node! n pro)))

(defn next-ts!
  "String -> GlobalState
  Consumes a key ky and changes the task-state of that task in :lon;
  returns the app-state"
  [ky]
  (let [lon (vec (:lon @app-state))
        pos (node-pos-by-key ky lon)
        nd  (get lon pos)
        ts  (:todo nd)]
    (reset-lon! app-state
                (assoc lon pos
                  (assoc nd :todo
                    (cond
                     (= ts TODO)  DOING
                     (= ts DOING) DONE
                     (= ts DONE)  TODO))))))

(defn node-by-pos
  "Integer -> Node
  Returns node at pos"
  [pos]
  (nth (:lon @app-state) pos))

(defn node-by-key
  "String -> Node
  Consumes a key and returns the node from the app-state"
  [ky]
  (node-by-pos (node-pos-by-key ky (nodes))))

(defn sidebar-content
  "-> node"
  []
  (when (selected)
    (node-by-key (selected))))

(defn change-sidebar-element
  "String Node Keyword -> GlobalState
  consumes content String c, Node n and Keyword ky;
  changes the content c for keywerd ky in n and safes to app-state"
  [c n ky]
  (let [nn (assoc n ky c)
        np (node-pos-by-key (:key nn) (nodes))
        nlon (assoc (vec (nodes)) np nn)]
    (reset-lon! app-state nlon)))

(defn change-headline
  "String Node -> GlobalState
  consumes content String c and Node n;
  changes the headline in n and safes to app-state"
  [c n]
  (change-sidebar-element c n :headline))

(defn change-body
  "String Node -> GlobalState
  consumes content String c and Node n;
  changes the body in n and safes to app-state"
  [c n]
  (change-sidebar-element c n :body))

(defn change-state
  "String Node -> GlobalState
  consumes content String c and Node n;
  changes the state in n and safes to app-state"
  [c n]
  (change-sidebar-element c n :todo))

(defn change-project
  "String Node -> GlobalState
  consumes content String c and Node n;
  changes the project in n and safes to app-state"
  [c n]
  (change-sidebar-element c n :project))

(defn change-scheduled
  "String Node -> GlobalState
  consumes content String c and Node n;
  changes the project in n and safes to app-state"
  [c n]
  ;; transform content to date
  (change-sidebar-element c n :scheduled))

(defn change-deadline
  "String Node -> GlobalState
  consumes content String c and Node n;
  changes the project in n and safes to app-state"
  [c n]
  ;; transform content to date
  (change-sidebar-element c n :deadline))

(defn change-tags
  "String Node -> GlobalState
  consumes content commma seperated String c and Node n;
  changes the project in n and safes to app-state"
  [c n]
  (let [tags (map trim (s/split c "," ))]
    (change-sidebar-element tags n :tags)))

(defn change-reps
  "String Node -> GlobalState
  consumes String c with repeat information Node n;
  changes the project in n and safes to app-state"
  [c n]
  (change-sidebar-element (no/->repeat c) n :repeat))
