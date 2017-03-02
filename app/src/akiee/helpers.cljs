(ns akiee.helpers)
;; Copied from https://gist.github.com/swannodette/6385166 to throw nodejs exceptions

(defn error? [x]
  (instance? js/Error x))

(defn throw-err [x]
  (if (error? x)
    (throw x)
    x))

(defn log [params]
  (.log js/console params))
