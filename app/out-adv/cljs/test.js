// Compiled by ClojureScript 0.0-2725 {}
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.test.empty_env = (function() {
var empty_env = null;
var empty_env__0 = (function (){
return empty_env.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$46);
});
var empty_env__1 = (function (reporter){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$47,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$51,(0),cljs.core.constant$keyword$52,(0),cljs.core.constant$keyword$53,(0),cljs.core.constant$keyword$54,(0)], null),cljs.core.constant$keyword$48,cljs.core.List.EMPTY,cljs.core.constant$keyword$49,cljs.core.List.EMPTY,cljs.core.constant$keyword$50,reporter], null);
});
empty_env = function(reporter){
switch(arguments.length){
case 0:
return empty_env__0.call(this);
case 1:
return empty_env__1.call(this,reporter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
empty_env.cljs$core$IFn$_invoke$arity$0 = empty_env__0;
empty_env.cljs$core$IFn$_invoke$arity$1 = empty_env__1;
return empty_env;
})()
;
cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function get_current_env(){
var or__3757__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
}
});
/**
* @param {...*} var_args
*/
cljs.test.update_current_env_BANG_ = (function() { 
var update_current_env_BANG___delegate = function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,cljs.test.get_current_env(),ks,f,args);
};
var update_current_env_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17233__i = 0, G__17233__a = new Array(arguments.length -  2);
while (G__17233__i < G__17233__a.length) {G__17233__a[G__17233__i] = arguments[G__17233__i + 2]; ++G__17233__i;}
  args = new cljs.core.IndexedSeq(G__17233__a,0);
} 
return update_current_env_BANG___delegate.call(this,ks,f,args);};
update_current_env_BANG_.cljs$lang$maxFixedArity = 2;
update_current_env_BANG_.cljs$lang$applyTo = (function (arglist__17234){
var ks = cljs.core.first(arglist__17234);
arglist__17234 = cljs.core.next(arglist__17234);
var f = cljs.core.first(arglist__17234);
var args = cljs.core.rest(arglist__17234);
return update_current_env_BANG___delegate(ks,f,args);
});
update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_current_env_BANG___delegate;
return update_current_env_BANG_;
})()
;
cljs.test.set_env_BANG_ = (function set_env_BANG_(new_env){
return cljs.test._STAR_current_env_STAR_ = new_env;
});
cljs.test.clear_env_BANG_ = (function clear_env_BANG_(){
return cljs.test._STAR_current_env_STAR_ = null;
});
/**
* Returns a string representation of the current test.  Renders names
* in *testing-vars* as a list, then the source file and line of
* current assertion.
*/
cljs.test.testing_vars_str = (function testing_vars_str(m){
var map__17237 = m;
var map__17237__$1 = ((cljs.core.seq_QMARK_(map__17237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17237):map__17237);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.constant$keyword$11);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.constant$keyword$12);
return [cljs.core.str(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__17237,map__17237__$1,line,file){
return (function (p1__17235_SHARP_){
return cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__17235_SHARP_));
});})(map__17237,map__17237__$1,line,file))
,cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env())))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context. Joins
* strings in *testing-contexts* with spaces.
*/
cljs.test.testing_contexts_str = (function testing_contexts_str(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))));
});
/**
* Increments the named counter in *report-counters*, a ref to a map.
* Does nothing if *report-counters* is nil.
*/
cljs.test.inc_report_counter_BANG_ = (function inc_report_counter_BANG_(name){
if(cljs.core.truth_(cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return null;
}
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.
*/
cljs.test.report = (function (){var method_table__4654__auto__ = (function (){var G__17238 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17238) : cljs.core.atom.call(null,G__17238));
})();
var prefer_table__4655__auto__ = (function (){var G__17239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17239) : cljs.core.atom.call(null,G__17239));
})();
var method_cache__4656__auto__ = (function (){var G__17240 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17240) : cljs.core.atom.call(null,G__17240));
})();
var cached_hierarchy__4657__auto__ = (function (){var G__17241 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17241) : cljs.core.atom.call(null,G__17241));
})();
var hierarchy__4658__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$56,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test","report"),((function (method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__,hierarchy__4658__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()),cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__,hierarchy__4658__auto__))
,cljs.core.constant$keyword$7,hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$52], null),(function (m){
return cljs.test.inc_report_counter_BANG_(cljs.core.constant$keyword$52);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$53], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.constant$keyword$53);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__4126__auto___17242 = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___17242)){
var message_17243 = temp__4126__auto___17242;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_17243], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$54], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.constant$keyword$54);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__4126__auto___17244 = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___17244)){
var message_17245 = temp__4126__auto___17244;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_17245], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual: "], 0));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(m)], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$61], null),(function (m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(m),"tests containing",((cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(m)) + cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(m),"failures,",cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$62], null),(function (m){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",cljs.core.name(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(m))], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$64], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$65], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,cljs.core.constant$keyword$66], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function js_line_and_column(stack_element){
var parts = stack_element.split(":");
var cnt = cljs.core.count(parts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (2)));
return parseInt(G__17248);
})(),(function (){var G__17249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (1)));
return parseInt(G__17249);
})()], null);
});
cljs.test.js_filename = (function js_filename(stack_element){
return cljs.core.first(cljs.core.last(stack_element.split("/out/")).split(":"));
});
cljs.test.mapped_line_and_column = (function mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__4124__auto__ = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(temp__4124__auto__)){
var source_map = temp__4124__auto__;
var temp__4124__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__4124__auto____$1)){
var columns = temp__4124__auto____$1;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first((function (){var temp__4124__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,(column - (1)));
if(cljs.core.truth_(temp__4124__auto____$2)){
var mapping = temp__4124__auto____$2;
return mapping;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$11,cljs.core.constant$keyword$69], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function file_and_line(exception,depth){
var stack = exception.stack;
if(cljs.core.truth_((function (){var and__3745__auto__ = stack;
if(cljs.core.truth_(and__3745__auto__)){
return typeof stack === 'string';
} else {
return and__3745__auto__;
}
})())){
var stacktrace = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(stack,/\n/)));
var stack_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stacktrace,depth);
var fname = cljs.test.js_filename(stack_element);
var vec__17252 = cljs.test.js_line_and_column(stack_element);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17252,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17252,(1),null);
var vec__17253 = cljs.test.mapped_line_and_column(fname,line,column);
var fname__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253,(1),null);
var column__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$12,fname__$1,cljs.core.constant$keyword$11,line__$1,cljs.core.constant$keyword$10,column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$12,exception.fileName,cljs.core.constant$keyword$11,exception.lineNumber], null);
}
});
cljs.test.do_report = (function do_report(m){
var m__$1 = (function (){var G__17256 = (((cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__17256) {
case "error":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.file_and_line(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(m),(0)),m], 0));

break;
case "fail":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.file_and_line((new Error()),(4)),m], 0));

break;
default:
return m;

}
})();
var G__17257 = m__$1;
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__17257) : cljs.test.report.call(null,G__17257));
});
/**
* If v has a function in its :test metadata, calls that function,
* add v to :testing-vars property of env.
*/
cljs.test.test_var = (function test_var(v){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null),new cljs.core.Symbol(null,"v","v",1661996586,null))], 0)))].join('')));
}

var temp__4124__auto__ = cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4124__auto__)){
var t = temp__4124__auto__;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null),cljs.core.conj,cljs.core.array_seq([v], 0));

cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,cljs.core.constant$keyword$51], null),cljs.core.inc);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$65,cljs.core.constant$keyword$70,v], null));

try{(t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e17260){var e_17261 = e17260;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$58,"Uncaught exception, not in assertion.",cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$60,e_17261], null));
}
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$66,cljs.core.constant$keyword$70,v], null));

return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null),cljs.core.rest);
} else {
return null;
}
});
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cljs.test.default_fixture = (function default_fixture(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){
return (function (g){
var G__17264 = (function (){
var G__17265 = g;
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(G__17265) : f2.call(null,G__17265));
});
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17264) : f1.call(null,G__17264));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cljs.test.join_fixtures = (function join_fixtures(fixtures){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
* Groups vars by their namespace and runs test-vars on them with
* appropriate fixtures assuming they are present in the current
* testing environment.
*/
cljs.test.test_vars = (function test_vars(vars){
var seq__17286 = cljs.core.seq(cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63,cljs.core.meta),vars));
var chunk__17287 = null;
var count__17288 = (0);
var i__17289 = (0);
while(true){
if((i__17289 < count__17288)){
var vec__17290 = chunk__17287.cljs$core$IIndexed$_nth$arity$2(null,i__17289);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(1),null);
var env_17306 = cljs.test.get_current_env();
var once_fixture_fn_17307 = cljs.test.join_fixtures(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,ns], null)));
var each_fixture_fn_17308 = cljs.test.join_fixtures(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,ns], null)));
var G__17291_17309 = ((function (seq__17286,chunk__17287,count__17288,i__17289,env_17306,once_fixture_fn_17307,each_fixture_fn_17308,vec__17290,ns,vars__$1){
return (function (){
var seq__17292 = cljs.core.seq(vars__$1);
var chunk__17293 = null;
var count__17294 = (0);
var i__17295 = (0);
while(true){
if((i__17295 < count__17294)){
var v = chunk__17293.cljs$core$IIndexed$_nth$arity$2(null,i__17295);
if(cljs.core.truth_(cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
var G__17296_17310 = ((function (seq__17292,chunk__17293,count__17294,i__17295,seq__17286,chunk__17287,count__17288,i__17289,v,env_17306,once_fixture_fn_17307,each_fixture_fn_17308,vec__17290,ns,vars__$1){
return (function (){
return cljs.test.test_var(v);
});})(seq__17292,chunk__17293,count__17294,i__17295,seq__17286,chunk__17287,count__17288,i__17289,v,env_17306,once_fixture_fn_17307,each_fixture_fn_17308,vec__17290,ns,vars__$1))
;
(each_fixture_fn_17308.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_17308.cljs$core$IFn$_invoke$arity$1(G__17296_17310) : each_fixture_fn_17308.call(null,G__17296_17310));
} else {
}

var G__17311 = seq__17292;
var G__17312 = chunk__17293;
var G__17313 = count__17294;
var G__17314 = (i__17295 + (1));
seq__17292 = G__17311;
chunk__17293 = G__17312;
count__17294 = G__17313;
i__17295 = G__17314;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17292);
if(temp__4126__auto__){
var seq__17292__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17292__$1)){
var c__4544__auto__ = cljs.core.chunk_first(seq__17292__$1);
var G__17315 = cljs.core.chunk_rest(seq__17292__$1);
var G__17316 = c__4544__auto__;
var G__17317 = cljs.core.count(c__4544__auto__);
var G__17318 = (0);
seq__17292 = G__17315;
chunk__17293 = G__17316;
count__17294 = G__17317;
i__17295 = G__17318;
continue;
} else {
var v = cljs.core.first(seq__17292__$1);
if(cljs.core.truth_(cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
var G__17297_17319 = ((function (seq__17292,chunk__17293,count__17294,i__17295,seq__17286,chunk__17287,count__17288,i__17289,v,seq__17292__$1,temp__4126__auto__,env_17306,once_fixture_fn_17307,each_fixture_fn_17308,vec__17290,ns,vars__$1){
return (function (){
return cljs.test.test_var(v);
});})(seq__17292,chunk__17293,count__17294,i__17295,seq__17286,chunk__17287,count__17288,i__17289,v,seq__17292__$1,temp__4126__auto__,env_17306,once_fixture_fn_17307,each_fixture_fn_17308,vec__17290,ns,vars__$1))
;
(each_fixture_fn_17308.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_17308.cljs$core$IFn$_invoke$arity$1(G__17297_17319) : each_fixture_fn_17308.call(null,G__17297_17319));
} else {
}

var G__17320 = cljs.core.next(seq__17292__$1);
var G__17321 = null;
var G__17322 = (0);
var G__17323 = (0);
seq__17292 = G__17320;
chunk__17293 = G__17321;
count__17294 = G__17322;
i__17295 = G__17323;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__17286,chunk__17287,count__17288,i__17289,env_17306,once_fixture_fn_17307,each_fixture_fn_17308,vec__17290,ns,vars__$1))
;
(once_fixture_fn_17307.cljs$core$IFn$_invoke$arity$1 ? once_fixture_fn_17307.cljs$core$IFn$_invoke$arity$1(G__17291_17309) : once_fixture_fn_17307.call(null,G__17291_17309));

var G__17324 = seq__17286;
var G__17325 = chunk__17287;
var G__17326 = count__17288;
var G__17327 = (i__17289 + (1));
seq__17286 = G__17324;
chunk__17287 = G__17325;
count__17288 = G__17326;
i__17289 = G__17327;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17286);
if(temp__4126__auto__){
var seq__17286__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17286__$1)){
var c__4544__auto__ = cljs.core.chunk_first(seq__17286__$1);
var G__17328 = cljs.core.chunk_rest(seq__17286__$1);
var G__17329 = c__4544__auto__;
var G__17330 = cljs.core.count(c__4544__auto__);
var G__17331 = (0);
seq__17286 = G__17328;
chunk__17287 = G__17329;
count__17288 = G__17330;
i__17289 = G__17331;
continue;
} else {
var vec__17298 = cljs.core.first(seq__17286__$1);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17298,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17298,(1),null);
var env_17332 = cljs.test.get_current_env();
var once_fixture_fn_17333 = cljs.test.join_fixtures(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,ns], null)));
var each_fixture_fn_17334 = cljs.test.join_fixtures(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,ns], null)));
var G__17299_17335 = ((function (seq__17286,chunk__17287,count__17288,i__17289,env_17332,once_fixture_fn_17333,each_fixture_fn_17334,vec__17298,ns,vars__$1,seq__17286__$1,temp__4126__auto__){
return (function (){
var seq__17300 = cljs.core.seq(vars__$1);
var chunk__17301 = null;
var count__17302 = (0);
var i__17303 = (0);
while(true){
if((i__17303 < count__17302)){
var v = chunk__17301.cljs$core$IIndexed$_nth$arity$2(null,i__17303);
if(cljs.core.truth_(cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
var G__17304_17336 = ((function (seq__17300,chunk__17301,count__17302,i__17303,seq__17286,chunk__17287,count__17288,i__17289,v,env_17332,once_fixture_fn_17333,each_fixture_fn_17334,vec__17298,ns,vars__$1,seq__17286__$1,temp__4126__auto__){
return (function (){
return cljs.test.test_var(v);
});})(seq__17300,chunk__17301,count__17302,i__17303,seq__17286,chunk__17287,count__17288,i__17289,v,env_17332,once_fixture_fn_17333,each_fixture_fn_17334,vec__17298,ns,vars__$1,seq__17286__$1,temp__4126__auto__))
;
(each_fixture_fn_17334.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_17334.cljs$core$IFn$_invoke$arity$1(G__17304_17336) : each_fixture_fn_17334.call(null,G__17304_17336));
} else {
}

var G__17337 = seq__17300;
var G__17338 = chunk__17301;
var G__17339 = count__17302;
var G__17340 = (i__17303 + (1));
seq__17300 = G__17337;
chunk__17301 = G__17338;
count__17302 = G__17339;
i__17303 = G__17340;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__17300);
if(temp__4126__auto____$1){
var seq__17300__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17300__$1)){
var c__4544__auto__ = cljs.core.chunk_first(seq__17300__$1);
var G__17341 = cljs.core.chunk_rest(seq__17300__$1);
var G__17342 = c__4544__auto__;
var G__17343 = cljs.core.count(c__4544__auto__);
var G__17344 = (0);
seq__17300 = G__17341;
chunk__17301 = G__17342;
count__17302 = G__17343;
i__17303 = G__17344;
continue;
} else {
var v = cljs.core.first(seq__17300__$1);
if(cljs.core.truth_(cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
var G__17305_17345 = ((function (seq__17300,chunk__17301,count__17302,i__17303,seq__17286,chunk__17287,count__17288,i__17289,v,seq__17300__$1,temp__4126__auto____$1,env_17332,once_fixture_fn_17333,each_fixture_fn_17334,vec__17298,ns,vars__$1,seq__17286__$1,temp__4126__auto__){
return (function (){
return cljs.test.test_var(v);
});})(seq__17300,chunk__17301,count__17302,i__17303,seq__17286,chunk__17287,count__17288,i__17289,v,seq__17300__$1,temp__4126__auto____$1,env_17332,once_fixture_fn_17333,each_fixture_fn_17334,vec__17298,ns,vars__$1,seq__17286__$1,temp__4126__auto__))
;
(each_fixture_fn_17334.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_17334.cljs$core$IFn$_invoke$arity$1(G__17305_17345) : each_fixture_fn_17334.call(null,G__17305_17345));
} else {
}

var G__17346 = cljs.core.next(seq__17300__$1);
var G__17347 = null;
var G__17348 = (0);
var G__17349 = (0);
seq__17300 = G__17346;
chunk__17301 = G__17347;
count__17302 = G__17348;
i__17303 = G__17349;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__17286,chunk__17287,count__17288,i__17289,env_17332,once_fixture_fn_17333,each_fixture_fn_17334,vec__17298,ns,vars__$1,seq__17286__$1,temp__4126__auto__))
;
(once_fixture_fn_17333.cljs$core$IFn$_invoke$arity$1 ? once_fixture_fn_17333.cljs$core$IFn$_invoke$arity$1(G__17299_17335) : once_fixture_fn_17333.call(null,G__17299_17335));

var G__17350 = cljs.core.next(seq__17286__$1);
var G__17351 = null;
var G__17352 = (0);
var G__17353 = (0);
seq__17286 = G__17350;
chunk__17287 = G__17351;
count__17288 = G__17352;
i__17289 = G__17353;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cljs.test.successful_QMARK_ = (function successful_QMARK_(summary){
return ((cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});
