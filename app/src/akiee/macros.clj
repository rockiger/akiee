(ns akiee.macros)
;; Copied from https://gist.github.com/swannodette/6385166 to throw nodejs exceptions

(defmacro dochan [[binding chan] & body]
  `(let [chan# ~chan]
     (cljs.core.async.macros/go
       (loop []
         (if-let [~binding (cljs.core.async/<! chan#)]
           (do
             ~@body
             (recur))
           :done)))))

(defmacro <? [expr]
  `(akiee.helpers/throw-err (cljs.core.async/<! ~expr)))
