(ns akiee.node
  (:require
   [akiee.fileoperations :as fo]
   [akiee.datadefinitions :as dd]
   [akiee.constants :refer [TODO DOING DONE ALL]]
   [cljs.test :refer-macros [is deftest]]
   [cljs.nodejs :as nj]
   [clojure.string :as s :refer [trim join]]))


;; Nodejs modules
(def org (nj/require "./lib/markdown-org-mode-parser"))

(def parse-file (.-parseBigString org))

;; Constants

(def week ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])

;; Functions that create, convert and compare nodes

;; =================
;; Functions:

(defn ->key
  "Nil -> String
  Returns a unique key for new nodes"
  []
  (str (gensym "node_")))
(is (->key))

(defn node=
  "Node Node -> Boolean
  Compares 2 Nodes n1 n2, the :key of the nodes is ignored,
  because it's random"
  [n1 n2]
  (and
   (= (:level n1)      (:level n2))
   (= (:headline n1)   (:headline n2))
   (= (:body n1)       (:body n2))
   (= (:tag n1)        (:tag n2))
   (= (:tags n1)       (:tags n2))
   (= (:todo n1)       (:todo n2))
   (= (:priority n1)   (:priority n2))
   (= (:scheduled n1)  (:scheduled n2))
   (= (:deadline n1)   (:deadline n2))
   (= (:fin n1)        (:fin n2))
   (= (:properties n1) (:properties n2))
   (= (:drawer n1)     (:drawer n2))
   (= (:rank n1)       (:rank n2))
   (= (:repeat n1)     (:repeat n2))
   (= (:style n1)      (:style n2))))

(is (= (node= dd/N1 dd/N1a) true))
(is (= (node= dd/N1 dd/N2)  false))

(defn array->vec
  "JsArray Vector -> Vector
  consumes a javascript array a and Vector v and produces a vector
  TODO make this more robust and general"
  [v a]
  (if (zero? (.-length a))
    v
    (array->vec
     (conj v (.shift a))
     a)))

(is (= (array->vec [] (js* "[]")) []))
(is (= (array->vec [] (js* "[1, 2, 3]")) [1 2 3]))

(defn ->repeat
  "String -> RepeatInfo
  consumes a String s with repeat information, parses this String and produces a RepeatInfo"
  [s]
  (if-not s
    nil
    (letfn [(->rate [s] (if-not (js/isNaN (js/parseInt s)) (js/parseInt s) 1)) ;; wenn nicht NaN
            (->unit [s]
             (cond
              (.includes s "weekdaily") "weekdaily"
              (.includes s "daily")   "daily"
              (.includes s "weekly")  "weekly"
              (.includes s "monthly") "monthly"
              (.includes s "yearly")  "yearly"
              :else ""))]
      (when (not-empty (->unit s))
        {:rate (->rate s) :unit (->unit s)}))))

(is (= (->repeat "1 daily") {:rate 1 :unit "daily"}))
(is (= (->repeat "2 weekly") {:rate 2 :unit "weekly"}))
(is (= (->repeat "12 monthly") {:rate 12 :unit "monthly"}))
(is (= (->repeat "01 yearly") {:rate 1 :unit "yearly"}))
(is (= (->repeat "1 weekdaily") {:rate 1 :unit "weekdaily"}))
(is (= (->repeat "1 daily,weekdaily") {:rate 1 :unit "weekdaily"}))

(defn jsnode->node
  "JsNode -> Node
  consumes a javascript org-node (object) jn and produces a node
  TODO make this more robust and general"
  [jn]
  (let [rank (aget jn "rank")]
    {:key (aget jn "key")
     :level (aget jn "level")
     :headline (str (aget jn "headline"))
     :body (if (and (> (count (trim (aget jn "body"))) 0) (not= (aget jn "body") "\n"))
               (trim (aget jn "body")) nil)
     :tag (aget jn "tag")
     :tags (js->clj (js-keys (aget jn "tags")))
     :todo (aget jn "todo")
     :priority nil
     :scheduled (aget jn "scheduled")
     :deadline (aget jn "deadline")
     :fin (aget jn "fin")
     :properties {}
     :drawer {}
     :rank (if (not= rank nil) (int rank) nil)
     :repeat (->repeat (aget jn "repeat"))
     :style nil}))

;;(is (no/node= (jsnode->node dd/jsN1) dd/N1))
(is (= (:key (jsnode->node dd/jsN1)) (:key dd/N1)))


(defn ->node
  "TaskState String String -> Node
  Consumes a TaskState ts a headline hl, a project pro, a Rank r;
  creates a node"
  [ts hl pro r]
  {:key (->key)
   :level 2
   :headline hl
   :body ""
   :tag nil
   :tags []
   :todo ts
   :priority nil
   :scheduled nil
   :deadline nil
   :fin nil
   :properties {}
   :drawer {}
   :rank r
   :repeat nil
   :style nil
   :project pro})

(is (node= (->node TODO "Test Headline" "Inbox" 10)
       {:key nil
        :level 2 :headline "Test Headline" :body ""  :tag nil
        :tags [] :todo TODO :priority nil :scheduled nil
        :deadline nil :fin nil :properties {} :drawer {} :rank 10 :repeat nil
        :style nil :project "Inbox"}))

(defn project
  "ListOfNodes Node String -> String
  Consumes a lon, a Node n and a project name pr returns the project of n"
  [lon n]
  (defn project-helper [lon n pr]
    (cond (or (= (:key (first lon)) (:key n)) (not (first lon))) pr
          (= (:level (first lon)) 1) (recur (rest lon) n (:headline (first lon)))
          :else (recur (rest lon) n pr)))
  (project-helper lon n "Inbox"))

(def lon [{:key (->key) :headline "head 1" :level 1}
          (->node "TODO" "Task 1" "head 1" 1)
          (->node "TODO" "Task 2" "head 1" 2)
          (->node "TODO" "Task 3" "head 1" 3)
          {:key (->key) :headline "head 2" :level 1}
          (->node "TODO" "Task 4" "head 2" 4)
          (->node "TODO" "Task 5" "head 2" 5)
          (->node "TODO" "Task 6" "head 2" 6)])

(is (project lon (get lon 1)) "head 1")
(is (project lon (get lon 2)) "head 1")
(is (project lon (get lon 3)) "head 1")
(is (project lon (get lon 5)) "head 2")
(is (project lon (get lon 6)) "head 2")
(is (project lon (get lon 7)) "head 2")

(defn ->nodes-from-md
 "String -> ListOfNodes
consumes a task file markdown string and produces a list of nodes
  TODO find way to test, without :key"
 [md]
 (let [nodes-array (parse-file md)
       lon-sin-pro (map jsnode->node (array->vec [] nodes-array))]
   (map (fn [x] (assoc x :project (project lon-sin-pro x))) lon-sin-pro)))

(defn ->nodes
  "String -> ListOfNodes
  consumes the path p to the task file and produces a list of nodes
  TODO find way to test, without :key"
  [p]
  (->nodes-from-md (fo/load-task-file p)))

(defn ->timestamp
  "Date -> String
  consumes a clojurescript date and produces a org-mode timestamp"
  [d]
  (str "<"
       (.getFullYear d)
       (cond (.getMonth d) (str "-" (inc (.getMonth d))))
       (cond (.getDate d)  (str "-" (.getDate d)))
       (cond (.getDay d)   (str " " (nth week (.getDay d))))
       ">")) ;;SCHEDULED: <2015-06-07 Sun 13:30-14:30>

(defn lon->md [lon]
  (if (empty? lon)
    ""
    (let [n (first lon)]
      (str
       (if (= (:level n) 1) "# " "## ")
       (cond (:todo n) (str (:todo n) " "))
       (trim (:headline n))
       (cond (not-empty (:tags n)) (str " :" (join ":" (:tags n)) ":"))
       "\n"
       (cond (not-empty (:body n)) (str (:body n) "\n"))
       (cond (:rank n) (str "RANK: "(:rank n) "\n"))
       (cond (:repeat n) (str "REPEAT: " (:rate (:repeat n)) " " (:unit (:repeat n)) "\n"))
       (cond (:scheduled n) (str "SCHEDULED: " (->timestamp (:scheduled n)) "\n"))
       (cond (:deadline n) (str "DEADLINE: " (->timestamp (:deadline n)) "\n"))
       (cond (:fin n) (str "FIN: " (->timestamp (:fin n)) "\n"))
       (lon->md (rest lon))))))
(is (= (lon->md [(->node TODO "Ueberschrift" "Inbox" 1)]) "## TODO Ueberschrift\nRANK: 1\n"))

(defn higher-rank?
  "Node Node -> Boolean
  Determens if Node n1 has a higher Rank than Node n2"
  [n1 n2]
  (cond
   (nil? n2) true
   (and (not (nil? n2)) (nil? n1)) false
   (< n2 n1) false
   :else true))

(defn newer-date?
  "Date Date -> Boolean
   Determens if Node n1 has a higher Rank than Node n2"
  [n1 n2]
  (cond
   (nil? n2) true
   (and (not (nil? n2)) (nil? n1)) false
   (> n1 n2) true
   :else false))

(defn tags-string
  "Node -> String
  Consumes a Node n and produces the comma seperated String based on the n's tags"
  [n]
  (if (not-empty (:tags n))
    (s/join ", " (:tags n))
    ""))

(is (= (tags-string {:headline "node 1" :tags []}) ""))
(is (= (tags-string {:headline "node 2" :tags ["tag1" "tag2" "tag3"]})
     "tag1, tag2, tag3"))

(defn reps-string
  "Node -> String
  Consumes a Node n and produces the Repeat String based on the n's RepeatInfo"
  [n]
  (if (:unit (:repeat n))
    (str (:rate (:repeat n)) " " (:unit (:repeat n)))
    ""))

;; (is (= (reps-string {:headline "node 1" :repeat nil})) "")
;; (is (= (reps-string {:headline "node 2" :repeat {:rate 1 :unit "daily"}})) "daily")
;; (is (= (reps-string {:headline "node 2" :repeat {:rate 2 :unit "daily"}})) "daily")
;; (is (= (reps-string {:headline "node 2" :repeat {:rate 1 :unit ""}})) "")

(def n1 (:rank {:headline "Test-Node 1"  :rank 0}))
(def n2 (:rank {:headline "Test-Node 2"  :rank 5}))
(def n3 (:rank {:headline "Test-Node 3"  :rank 11}))
(def n4 (:rank {:headline "Test-Node 11" :rank nil}))

(is (= (higher-rank? n2 n1) false))
(is (= (higher-rank? n1 n2) true))
(is (= (higher-rank? n3 n1) false))
(is (= (higher-rank? n1 n3) true))
(is (= (higher-rank? n1 n1) true))
(is (= (higher-rank? n3 n3) true))
(is (= (higher-rank? n1 n4) true))
(is (= (higher-rank? n4 n1) false))
