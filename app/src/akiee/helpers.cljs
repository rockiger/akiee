(ns akiee.helpers)
;; Copied from https://gist.github.com/swannodette/6385166 to throw nodejs exceptions

(defn error? [x]
  (instance? js/Error x))

(defn throw-err [x]
  (if (error? x)
    (throw x)
    x))

;; convert Node.js async function into a something
;; that returns a value or error on a channel
(defn run-task [f & args]
  (let [out (chan)
        cb  (fn [err & results]
              (go (if err
                    (>! out err)
                    (>! out results))
                (close! out)))]
    (apply f (concat args [cb]))
    out))
