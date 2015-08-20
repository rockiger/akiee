// Compiled by ClojureScript 0.0-2725 {}
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.test.empty_env = (function() {
var empty_env = null;
var empty_env__0 = (function (){
return empty_env.call(null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322));
});
var empty_env__1 = (function (reporter){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter], null);
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
return cljs.test.empty_env.call(null);
}
});
/**
* @param {...*} var_args
*/
cljs.test.update_current_env_BANG_ = (function() { 
var update_current_env_BANG___delegate = function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.call(null,cljs.core.update_in,cljs.test.get_current_env.call(null),ks,f,args);
};
var update_current_env_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__11562__i = 0, G__11562__a = new Array(arguments.length -  2);
while (G__11562__i < G__11562__a.length) {G__11562__a[G__11562__i] = arguments[G__11562__i + 2]; ++G__11562__i;}
  args = new cljs.core.IndexedSeq(G__11562__a,0);
} 
return update_current_env_BANG___delegate.call(this,ks,f,args);};
update_current_env_BANG_.cljs$lang$maxFixedArity = 2;
update_current_env_BANG_.cljs$lang$applyTo = (function (arglist__11563){
var ks = cljs.core.first(arglist__11563);
arglist__11563 = cljs.core.next(arglist__11563);
var f = cljs.core.first(arglist__11563);
var args = cljs.core.rest(arglist__11563);
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
var map__11566 = m;
var map__11566__$1 = ((cljs.core.seq_QMARK_.call(null,map__11566))?cljs.core.apply.call(null,cljs.core.hash_map,map__11566):map__11566);
var line = cljs.core.get.call(null,map__11566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.call(null,map__11566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str(cljs.core.reverse.call(null,cljs.core.map.call(null,((function (map__11566,map__11566__$1,line,file){
return (function (p1__11564_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__11564_SHARP_));
});})(map__11566,map__11566__$1,line,file))
,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null))))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context. Joins
* strings in *testing-contexts* with spaces.
*/
cljs.test.testing_contexts_str = (function testing_contexts_str(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))));
});
/**
* Increments the named counter in *report-counters*, a ref to a map.
* Does nothing if *report-counters* is nil.
*/
cljs.test.inc_report_counter_BANG_ = (function inc_report_counter_BANG_(name){
if(cljs.core.truth_(new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
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
cljs.test.report = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.test","report"),((function (method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__,hierarchy__4658__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__,hierarchy__4658__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
return cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__4126__auto___11567 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___11567)){
var message_11568 = temp__4126__auto___11567;
cljs.core.println.call(null,message_11568);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.call(null,"\nERROR in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__4126__auto___11569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___11569)){
var message_11570 = temp__4126__auto___11569;
cljs.core.println.call(null,message_11570);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

cljs.core.print.call(null,"  actual: ");

return cljs.core.prn.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");

return cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors.");
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null),(function (m){
return cljs.core.println.call(null,"\nTesting",cljs.core.name.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function js_line_and_column(stack_element){
var parts = stack_element.split(":");
var cnt = cljs.core.count.call(null,parts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.nth.call(null,parts,(cnt - (2)))),parseInt(cljs.core.nth.call(null,parts,(cnt - (1))))], null);
});
cljs.test.js_filename = (function js_filename(stack_element){
return cljs.core.first.call(null,cljs.core.last.call(null,stack_element.split("/out/")).split(":"));
});
cljs.test.mapped_line_and_column = (function mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__4124__auto__ = new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null));
if(cljs.core.truth_(temp__4124__auto__)){
var source_map = temp__4124__auto__;
var temp__4124__auto____$1 = cljs.core.get_in.call(null,source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__4124__auto____$1)){
var columns = temp__4124__auto____$1;
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first.call(null,(function (){var temp__4124__auto____$2 = cljs.core.get.call(null,columns,(column - (1)));
if(cljs.core.truth_(temp__4124__auto____$2)){
var mapping = temp__4124__auto____$2;
return mapping;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084)], null)));
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
var stacktrace = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,stack,/\n/)));
var stack_element = cljs.core.nth.call(null,stacktrace,depth);
var fname = cljs.test.js_filename.call(null,stack_element);
var vec__11573 = cljs.test.js_line_and_column.call(null,stack_element);
var line = cljs.core.nth.call(null,vec__11573,(0),null);
var column = cljs.core.nth.call(null,vec__11573,(1),null);
var vec__11574 = cljs.test.mapped_line_and_column.call(null,fname,line,column);
var fname__$1 = cljs.core.nth.call(null,vec__11574,(0),null);
var line__$1 = cljs.core.nth.call(null,vec__11574,(1),null);
var column__$1 = cljs.core.nth.call(null,vec__11574,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),fname__$1,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),exception.fileName,new cljs.core.Keyword(null,"line","line",212345235),exception.lineNumber], null);
}
});
cljs.test.do_report = (function do_report(m){
var m__$1 = (function (){var G__11576 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__11576) {
case "error":
return cljs.core.merge.call(null,cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m),(0)),m);

break;
case "fail":
return cljs.core.merge.call(null,cljs.test.file_and_line.call(null,(new Error()),(4)),m);

break;
default:
return m;

}
})();
return cljs.test.report.call(null,m__$1);
});
/**
* If v has a function in its :test metadata, calls that function,
* add v to :testing-vars property of env.
*/
cljs.test.test_var = (function test_var(v){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var temp__4124__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(temp__4124__auto__)){
var t = temp__4124__auto__;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.conj,v);

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword(null,"test","test",577538877)], null),cljs.core.inc);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v], null));

try{t.call(null);
}catch (e11579){var e_11580 = e11579;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_11580], null));
}
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v], null));

return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.rest);
} else {
return null;
}
});
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cljs.test.default_fixture = (function default_fixture(f){
return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){
return (function (g){
return f1.call(null,(function (){
return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cljs.test.join_fixtures = (function join_fixtures(fixtures){
return cljs.core.reduce.call(null,cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
* Groups vars by their namespace and runs test-vars on them with
* appropriate fixtures assuming they are present in the current
* testing environment.
*/
cljs.test.test_vars = (function test_vars(vars){
var seq__11595 = cljs.core.seq.call(null,cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),vars));
var chunk__11596 = null;
var count__11597 = (0);
var i__11598 = (0);
while(true){
if((i__11598 < count__11597)){
var vec__11599 = cljs.core._nth.call(null,chunk__11596,i__11598);
var ns = cljs.core.nth.call(null,vec__11599,(0),null);
var vars__$1 = cljs.core.nth.call(null,vec__11599,(1),null);
var env_11609 = cljs.test.get_current_env.call(null);
var once_fixture_fn_11610 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_11609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null)));
var each_fixture_fn_11611 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_11609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null)));
once_fixture_fn_11610.call(null,((function (seq__11595,chunk__11596,count__11597,i__11598,env_11609,once_fixture_fn_11610,each_fixture_fn_11611,vec__11599,ns,vars__$1){
return (function (){
var seq__11600 = cljs.core.seq.call(null,vars__$1);
var chunk__11601 = null;
var count__11602 = (0);
var i__11603 = (0);
while(true){
if((i__11603 < count__11602)){
var v = cljs.core._nth.call(null,chunk__11601,i__11603);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_11611.call(null,((function (seq__11600,chunk__11601,count__11602,i__11603,seq__11595,chunk__11596,count__11597,i__11598,v,env_11609,once_fixture_fn_11610,each_fixture_fn_11611,vec__11599,ns,vars__$1){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__11600,chunk__11601,count__11602,i__11603,seq__11595,chunk__11596,count__11597,i__11598,v,env_11609,once_fixture_fn_11610,each_fixture_fn_11611,vec__11599,ns,vars__$1))
);
} else {
}

var G__11612 = seq__11600;
var G__11613 = chunk__11601;
var G__11614 = count__11602;
var G__11615 = (i__11603 + (1));
seq__11600 = G__11612;
chunk__11601 = G__11613;
count__11602 = G__11614;
i__11603 = G__11615;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11600);
if(temp__4126__auto__){
var seq__11600__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11600__$1)){
var c__4544__auto__ = cljs.core.chunk_first.call(null,seq__11600__$1);
var G__11616 = cljs.core.chunk_rest.call(null,seq__11600__$1);
var G__11617 = c__4544__auto__;
var G__11618 = cljs.core.count.call(null,c__4544__auto__);
var G__11619 = (0);
seq__11600 = G__11616;
chunk__11601 = G__11617;
count__11602 = G__11618;
i__11603 = G__11619;
continue;
} else {
var v = cljs.core.first.call(null,seq__11600__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_11611.call(null,((function (seq__11600,chunk__11601,count__11602,i__11603,seq__11595,chunk__11596,count__11597,i__11598,v,seq__11600__$1,temp__4126__auto__,env_11609,once_fixture_fn_11610,each_fixture_fn_11611,vec__11599,ns,vars__$1){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__11600,chunk__11601,count__11602,i__11603,seq__11595,chunk__11596,count__11597,i__11598,v,seq__11600__$1,temp__4126__auto__,env_11609,once_fixture_fn_11610,each_fixture_fn_11611,vec__11599,ns,vars__$1))
);
} else {
}

var G__11620 = cljs.core.next.call(null,seq__11600__$1);
var G__11621 = null;
var G__11622 = (0);
var G__11623 = (0);
seq__11600 = G__11620;
chunk__11601 = G__11621;
count__11602 = G__11622;
i__11603 = G__11623;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__11595,chunk__11596,count__11597,i__11598,env_11609,once_fixture_fn_11610,each_fixture_fn_11611,vec__11599,ns,vars__$1))
);

var G__11624 = seq__11595;
var G__11625 = chunk__11596;
var G__11626 = count__11597;
var G__11627 = (i__11598 + (1));
seq__11595 = G__11624;
chunk__11596 = G__11625;
count__11597 = G__11626;
i__11598 = G__11627;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11595);
if(temp__4126__auto__){
var seq__11595__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11595__$1)){
var c__4544__auto__ = cljs.core.chunk_first.call(null,seq__11595__$1);
var G__11628 = cljs.core.chunk_rest.call(null,seq__11595__$1);
var G__11629 = c__4544__auto__;
var G__11630 = cljs.core.count.call(null,c__4544__auto__);
var G__11631 = (0);
seq__11595 = G__11628;
chunk__11596 = G__11629;
count__11597 = G__11630;
i__11598 = G__11631;
continue;
} else {
var vec__11604 = cljs.core.first.call(null,seq__11595__$1);
var ns = cljs.core.nth.call(null,vec__11604,(0),null);
var vars__$1 = cljs.core.nth.call(null,vec__11604,(1),null);
var env_11632 = cljs.test.get_current_env.call(null);
var once_fixture_fn_11633 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_11632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null)));
var each_fixture_fn_11634 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_11632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null)));
once_fixture_fn_11633.call(null,((function (seq__11595,chunk__11596,count__11597,i__11598,env_11632,once_fixture_fn_11633,each_fixture_fn_11634,vec__11604,ns,vars__$1,seq__11595__$1,temp__4126__auto__){
return (function (){
var seq__11605 = cljs.core.seq.call(null,vars__$1);
var chunk__11606 = null;
var count__11607 = (0);
var i__11608 = (0);
while(true){
if((i__11608 < count__11607)){
var v = cljs.core._nth.call(null,chunk__11606,i__11608);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_11634.call(null,((function (seq__11605,chunk__11606,count__11607,i__11608,seq__11595,chunk__11596,count__11597,i__11598,v,env_11632,once_fixture_fn_11633,each_fixture_fn_11634,vec__11604,ns,vars__$1,seq__11595__$1,temp__4126__auto__){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__11605,chunk__11606,count__11607,i__11608,seq__11595,chunk__11596,count__11597,i__11598,v,env_11632,once_fixture_fn_11633,each_fixture_fn_11634,vec__11604,ns,vars__$1,seq__11595__$1,temp__4126__auto__))
);
} else {
}

var G__11635 = seq__11605;
var G__11636 = chunk__11606;
var G__11637 = count__11607;
var G__11638 = (i__11608 + (1));
seq__11605 = G__11635;
chunk__11606 = G__11636;
count__11607 = G__11637;
i__11608 = G__11638;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__11605);
if(temp__4126__auto____$1){
var seq__11605__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11605__$1)){
var c__4544__auto__ = cljs.core.chunk_first.call(null,seq__11605__$1);
var G__11639 = cljs.core.chunk_rest.call(null,seq__11605__$1);
var G__11640 = c__4544__auto__;
var G__11641 = cljs.core.count.call(null,c__4544__auto__);
var G__11642 = (0);
seq__11605 = G__11639;
chunk__11606 = G__11640;
count__11607 = G__11641;
i__11608 = G__11642;
continue;
} else {
var v = cljs.core.first.call(null,seq__11605__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_11634.call(null,((function (seq__11605,chunk__11606,count__11607,i__11608,seq__11595,chunk__11596,count__11597,i__11598,v,seq__11605__$1,temp__4126__auto____$1,env_11632,once_fixture_fn_11633,each_fixture_fn_11634,vec__11604,ns,vars__$1,seq__11595__$1,temp__4126__auto__){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__11605,chunk__11606,count__11607,i__11608,seq__11595,chunk__11596,count__11597,i__11598,v,seq__11605__$1,temp__4126__auto____$1,env_11632,once_fixture_fn_11633,each_fixture_fn_11634,vec__11604,ns,vars__$1,seq__11595__$1,temp__4126__auto__))
);
} else {
}

var G__11643 = cljs.core.next.call(null,seq__11605__$1);
var G__11644 = null;
var G__11645 = (0);
var G__11646 = (0);
seq__11605 = G__11643;
chunk__11606 = G__11644;
count__11607 = G__11645;
i__11608 = G__11646;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__11595,chunk__11596,count__11597,i__11598,env_11632,once_fixture_fn_11633,each_fixture_fn_11634,vec__11604,ns,vars__$1,seq__11595__$1,temp__4126__auto__))
);

var G__11647 = cljs.core.next.call(null,seq__11595__$1);
var G__11648 = null;
var G__11649 = (0);
var G__11650 = (0);
seq__11595 = G__11647;
chunk__11596 = G__11648;
count__11597 = G__11649;
i__11598 = G__11650;
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
return ((new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});

//# sourceMappingURL=test.js.map