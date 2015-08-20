// Compiled by ClojureScript 0.0-2725 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function enable_util_print_BANG_(){
return cljs.core._STAR_print_fn_STAR_ = cljs.nodejs.require.call(null,"util").print;
});

//# sourceMappingURL=nodejs.js.map