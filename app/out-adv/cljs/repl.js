// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4422__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4422__auto__)){
var ns = temp__4422__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18419_18431 = cljs.core.seq(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18420_18432 = null;
var count__18421_18433 = (0);
var i__18422_18434 = (0);
while(true){
if((i__18422_18434 < count__18421_18433)){
var f_18435 = chunk__18420_18432.cljs$core$IIndexed$_nth$arity$2(null,i__18422_18434);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_18435], 0));

var G__18436 = seq__18419_18431;
var G__18437 = chunk__18420_18432;
var G__18438 = count__18421_18433;
var G__18439 = (i__18422_18434 + (1));
seq__18419_18431 = G__18436;
chunk__18420_18432 = G__18437;
count__18421_18433 = G__18438;
i__18422_18434 = G__18439;
continue;
} else {
var temp__4422__auto___18440 = cljs.core.seq(seq__18419_18431);
if(temp__4422__auto___18440){
var seq__18419_18441__$1 = temp__4422__auto___18440;
if(cljs.core.chunked_seq_QMARK_(seq__18419_18441__$1)){
var c__5999__auto___18442 = cljs.core.chunk_first(seq__18419_18441__$1);
var G__18443 = cljs.core.chunk_rest(seq__18419_18441__$1);
var G__18444 = c__5999__auto___18442;
var G__18445 = cljs.core.count(c__5999__auto___18442);
var G__18446 = (0);
seq__18419_18431 = G__18443;
chunk__18420_18432 = G__18444;
count__18421_18433 = G__18445;
i__18422_18434 = G__18446;
continue;
} else {
var f_18447 = cljs.core.first(seq__18419_18441__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_18447], 0));

var G__18448 = cljs.core.next(seq__18419_18441__$1);
var G__18449 = null;
var G__18450 = (0);
var G__18451 = (0);
seq__18419_18431 = G__18448;
chunk__18420_18432 = G__18449;
count__18421_18433 = G__18450;
i__18422_18434 = G__18451;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18452 = cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5214__auto__ = cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5214__auto__)){
return or__5214__auto__;
} else {
return cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_18452], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18452)))?cljs.core.second(arglists_18452):arglists_18452)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.constant$keyword$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.constant$keyword$url)){
if(cljs.core.truth_(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18423 = cljs.core.seq(cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18424 = null;
var count__18425 = (0);
var i__18426 = (0);
while(true){
if((i__18426 < count__18425)){
var vec__18427 = chunk__18424.cljs$core$IIndexed$_nth$arity$2(null,i__18426);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18427,(0),null);
var map__18428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18427,(1),null);
var map__18428__$1 = ((cljs.core.seq_QMARK_(map__18428))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18428):map__18428);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18428__$1,cljs.core.constant$keyword$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18428__$1,cljs.core.constant$keyword$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__18453 = seq__18423;
var G__18454 = chunk__18424;
var G__18455 = count__18425;
var G__18456 = (i__18426 + (1));
seq__18423 = G__18453;
chunk__18424 = G__18454;
count__18425 = G__18455;
i__18426 = G__18456;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__18423);
if(temp__4422__auto__){
var seq__18423__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18423__$1)){
var c__5999__auto__ = cljs.core.chunk_first(seq__18423__$1);
var G__18457 = cljs.core.chunk_rest(seq__18423__$1);
var G__18458 = c__5999__auto__;
var G__18459 = cljs.core.count(c__5999__auto__);
var G__18460 = (0);
seq__18423 = G__18457;
chunk__18424 = G__18458;
count__18425 = G__18459;
i__18426 = G__18460;
continue;
} else {
var vec__18429 = cljs.core.first(seq__18423__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18429,(0),null);
var map__18430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18429,(1),null);
var map__18430__$1 = ((cljs.core.seq_QMARK_(map__18430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18430):map__18430);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18430__$1,cljs.core.constant$keyword$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18430__$1,cljs.core.constant$keyword$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__18461 = cljs.core.next(seq__18423__$1);
var G__18462 = null;
var G__18463 = (0);
var G__18464 = (0);
seq__18423 = G__18461;
chunk__18424 = G__18462;
count__18425 = G__18463;
i__18426 = G__18464;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
