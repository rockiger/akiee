(ns akiee.dom-helpers)

(enable-console-print!)
;; Handles events for user interactions
;; =================
;; Helpers:

(defn get-element
  "String -> DOMElement
  Consumes a CSS indetifier i and returns a DOMElement"
  [i]
  (.getElementById js/document i))
