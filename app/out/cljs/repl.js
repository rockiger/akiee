// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4422__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4422__auto__)){
var ns = temp__4422__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7026_7038 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7027_7039 = null;
var count__7028_7040 = (0);
var i__7029_7041 = (0);
while(true){
if((i__7029_7041 < count__7028_7040)){
var f_7042 = cljs.core._nth.call(null,chunk__7027_7039,i__7029_7041);
cljs.core.println.call(null,"  ",f_7042);

var G__7043 = seq__7026_7038;
var G__7044 = chunk__7027_7039;
var G__7045 = count__7028_7040;
var G__7046 = (i__7029_7041 + (1));
seq__7026_7038 = G__7043;
chunk__7027_7039 = G__7044;
count__7028_7040 = G__7045;
i__7029_7041 = G__7046;
continue;
} else {
var temp__4422__auto___7047 = cljs.core.seq.call(null,seq__7026_7038);
if(temp__4422__auto___7047){
var seq__7026_7048__$1 = temp__4422__auto___7047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7026_7048__$1)){
var c__5036__auto___7049 = cljs.core.chunk_first.call(null,seq__7026_7048__$1);
var G__7050 = cljs.core.chunk_rest.call(null,seq__7026_7048__$1);
var G__7051 = c__5036__auto___7049;
var G__7052 = cljs.core.count.call(null,c__5036__auto___7049);
var G__7053 = (0);
seq__7026_7038 = G__7050;
chunk__7027_7039 = G__7051;
count__7028_7040 = G__7052;
i__7029_7041 = G__7053;
continue;
} else {
var f_7054 = cljs.core.first.call(null,seq__7026_7048__$1);
cljs.core.println.call(null,"  ",f_7054);

var G__7055 = cljs.core.next.call(null,seq__7026_7048__$1);
var G__7056 = null;
var G__7057 = (0);
var G__7058 = (0);
seq__7026_7038 = G__7055;
chunk__7027_7039 = G__7056;
count__7028_7040 = G__7057;
i__7029_7041 = G__7058;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7059 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4251__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7059);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7059)))?cljs.core.second.call(null,arglists_7059):arglists_7059));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7031 = null;
var count__7032 = (0);
var i__7033 = (0);
while(true){
if((i__7033 < count__7032)){
var vec__7034 = cljs.core._nth.call(null,chunk__7031,i__7033);
var name = cljs.core.nth.call(null,vec__7034,(0),null);
var map__7035 = cljs.core.nth.call(null,vec__7034,(1),null);
var map__7035__$1 = ((cljs.core.seq_QMARK_.call(null,map__7035))?cljs.core.apply.call(null,cljs.core.hash_map,map__7035):map__7035);
var doc = cljs.core.get.call(null,map__7035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7060 = seq__7030;
var G__7061 = chunk__7031;
var G__7062 = count__7032;
var G__7063 = (i__7033 + (1));
seq__7030 = G__7060;
chunk__7031 = G__7061;
count__7032 = G__7062;
i__7033 = G__7063;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__7030);
if(temp__4422__auto__){
var seq__7030__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7030__$1)){
var c__5036__auto__ = cljs.core.chunk_first.call(null,seq__7030__$1);
var G__7064 = cljs.core.chunk_rest.call(null,seq__7030__$1);
var G__7065 = c__5036__auto__;
var G__7066 = cljs.core.count.call(null,c__5036__auto__);
var G__7067 = (0);
seq__7030 = G__7064;
chunk__7031 = G__7065;
count__7032 = G__7066;
i__7033 = G__7067;
continue;
} else {
var vec__7036 = cljs.core.first.call(null,seq__7030__$1);
var name = cljs.core.nth.call(null,vec__7036,(0),null);
var map__7037 = cljs.core.nth.call(null,vec__7036,(1),null);
var map__7037__$1 = ((cljs.core.seq_QMARK_.call(null,map__7037))?cljs.core.apply.call(null,cljs.core.hash_map,map__7037):map__7037);
var doc = cljs.core.get.call(null,map__7037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7068 = cljs.core.next.call(null,seq__7030__$1);
var G__7069 = null;
var G__7070 = (0);
var G__7071 = (0);
seq__7030 = G__7068;
chunk__7031 = G__7069;
count__7032 = G__7070;
i__7033 = G__7071;
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

//# sourceMappingURL=repl.js.map