// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.app_db');
goog.require('cljs.core');
goog.require('akiee.datadefinitions');
goog.require('akiee.dom_helpers');
goog.require('akiee.node');
goog.require('cljs.nodejs');
goog.require('reagent.core');
goog.require('akiee.fileoperations');
goog.require('cljs.test');
goog.require('akiee.constants');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
akiee.app_db.null$ = null;
akiee.app_db.FP = akiee.fileoperations.create_task_list_file(akiee.fileoperations.user_home());
/**
* String -> GS
* consumes the path p to the task file and produces the initial app-state
* TODO find way to test, without :key
*/
akiee.app_db.load_app_state = (function load_app_state(p){
return (new akiee.datadefinitions.global_state(false,false,false,false,"",null,null,akiee.constants.DOING,akiee.node.__GT_nodes(p),null,null,null));
});
try{var values__9971__auto___10799 = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$2(akiee.app_db.load_app_state(akiee.fileoperations.testfile),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Inbox","orgode_33.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null,"DOING",null,null,"",null]),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test","orgode_33.##","9",cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"TODO",null,null,"",null])], null)));
var result__9972__auto___10800 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10799);
if(cljs.core.truth_(result__9972__auto___10800)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol(null,"load-app-state","load-app-state",31859592,null),new cljs.core.Symbol("fo","testfile","fo/testfile",2072745554,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Inbox","orgode_33.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null,"DOING",null,null,"",null]),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test","orgode_33.##","9",cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"TODO",null,null,"",null])], null))),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10799),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol(null,"load-app-state","load-app-state",31859592,null),new cljs.core.Symbol("fo","testfile","fo/testfile",2072745554,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Inbox","orgode_33.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null,"DOING",null,null,"",null]),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test","orgode_33.##","9",cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"TODO",null,null,"",null])], null))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10799)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10798){var t__10009__auto___10801 = e10798;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol(null,"load-app-state","load-app-state",31859592,null),new cljs.core.Symbol("fo","testfile","fo/testfile",2072745554,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Inbox","orgode_33.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null,"DOING",null,null,"",null]),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test","orgode_33.##","9",cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"TODO",null,null,"",null])], null))),cljs.core.constant$keyword$60,t__10009__auto___10801,cljs.core.constant$keyword$58,null], null));
}akiee.app_db.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(akiee.app_db.load_app_state(akiee.app_db.FP));
akiee.app_db.test_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(akiee.app_db.load_app_state(akiee.fileoperations.testfile));
/**
* -> ListOfNode
* returns the nodes of the app-state
*/
akiee.app_db.nodes = (function nodes(){
return cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10803 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10803) : cljs.core.deref.call(null,G__10803));
})());
});
/**
* -> Boolean
* returns the state of the editor
*/
akiee.app_db.editor_QMARK_ = (function editor_QMARK_(){
return cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__10805 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10805) : cljs.core.deref.call(null,G__10805));
})());
});
/**
* -> Boolean
* returns the state of the task entry
*/
akiee.app_db.entry_QMARK_ = (function entry_QMARK_(){
return cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1((function (){var G__10807 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10807) : cljs.core.deref.call(null,G__10807));
})());
});
/**
* -> Boolean
* returns the state of the search box
*/
akiee.app_db.search_QMARK_ = (function search_QMARK_(){
return cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__10809 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10809) : cljs.core.deref.call(null,G__10809));
})());
});
/**
* -> Boolean
*/
akiee.app_db.changed_QMARK_ = (function changed_QMARK_(){
return cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1((function (){var G__10811 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10811) : cljs.core.deref.call(null,G__10811));
})());
});
/**
* -> ListStat
* returns the state of the List
*/
akiee.app_db.list_state = (function list_state(){
return cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1((function (){var G__10813 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10813) : cljs.core.deref.call(null,G__10813));
})());
});
/**
* -> String
* returns the state of the selected filed
*/
akiee.app_db.selected = (function selected(){
return cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1((function (){var G__10815 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10815) : cljs.core.deref.call(null,G__10815));
})());
});
/**
* -> String
* returns the state of the editable filed
*/
akiee.app_db.editable = (function editable(){
return cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1((function (){var G__10817 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10817) : cljs.core.deref.call(null,G__10817));
})());
});
/**
* GlobalState ListState -> lon
* consumes an GlobalState gs , a ListState ls and  returns the tasks, according to the current ListState
*/
akiee.app_db.tasks_helper = (function tasks_helper(gs,ls){
var filter_tasks = (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(x),(2))){
return true;
} else {
return false;
}
});
var filter_state = ((function (filter_tasks){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ls,akiee.constants.ALL)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ls,cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(x))){
return true;
} else {
return false;

}
}
});})(filter_tasks))
;
var filter_search = ((function (filter_tasks,filter_state){
return (function (x){
if(!(cljs.core.empty_QMARK_(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1((function (){var G__10823 = gs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10823) : cljs.core.deref.call(null,G__10823));
})())))){
if(cljs.core.truth_((function (){var or__3757__auto__ = cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1((function (){var G__10825 = gs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10825) : cljs.core.deref.call(null,G__10825));
})()))].join('')),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1((function (){var G__10826 = gs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10826) : cljs.core.deref.call(null,G__10826));
})()))].join('')),cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(x));
}
})())){
return true;
} else {
return false;
}
} else {
return true;
}
});})(filter_tasks,filter_state))
;
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,akiee.node.higher_rank_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_search,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_state,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_tasks,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10827 = gs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10827) : cljs.core.deref.call(null,G__10827));
})()))))));
});
var filter_tasks_10835 = (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(x),(2))){
return true;
} else {
return false;
}
});
var filter_state_10836 = ((function (filter_tasks_10835){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1((function (){var G__10828 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10828) : cljs.core.deref.call(null,G__10828));
})()),akiee.constants.ALL)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1((function (){var G__10829 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10829) : cljs.core.deref.call(null,G__10829));
})()),cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(x))){
return true;
} else {
return false;

}
}
});})(filter_tasks_10835))
;
var filter_search_10837 = ((function (filter_tasks_10835,filter_state_10836){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1((function (){var G__10830 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10830) : cljs.core.deref.call(null,G__10830));
})()))){
if(cljs.core.truth_((function (){var or__3757__auto__ = cljs.core.re_find(cljs.core.re_pattern(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1((function (){var G__10832 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10832) : cljs.core.deref.call(null,G__10832));
})())),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return cljs.core.re_find(cljs.core.re_pattern(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1((function (){var G__10833 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10833) : cljs.core.deref.call(null,G__10833));
})())),cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(x));
}
})())){
return true;
} else {
return false;
}
} else {
return true;
}
});})(filter_tasks_10835,filter_state_10836))
;
cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_search_10837,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_state_10836,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_tasks_10835,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10834 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10834) : cljs.core.deref.call(null,G__10834));
})()))));
/**
* -> ListOfNode
* shows the tasks of the app-state, according to the current ListState
* ---------------------------------------------------------------------------
* ListState -> ListOfNode
* consumes a ListState ls, shows the tasks of the app-state, according to ls
*/
akiee.app_db.tasks = (function() {
var tasks = null;
var tasks__0 = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(akiee.app_db.list_state(),akiee.constants.ALL)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.constants.TODO),akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.constants.DOING),akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.constants.DONE)], null);
} else {
return akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.app_db.list_state());
}
});
var tasks__1 = (function (ls){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ls,akiee.constants.ALL)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.constants.TODO),akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.constants.DOING),akiee.app_db.tasks_helper(akiee.app_db.app_state,akiee.constants.DONE)], null);
} else {
return akiee.app_db.tasks_helper(akiee.app_db.app_state,ls);
}
});
tasks = function(ls){
switch(arguments.length){
case 0:
return tasks__0.call(this);
case 1:
return tasks__1.call(this,ls);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tasks.cljs$core$IFn$_invoke$arity$0 = tasks__0;
tasks.cljs$core$IFn$_invoke$arity$1 = tasks__1;
return tasks;
})()
;
/**
* -> ListOfString
* returns a List of Strings with the projects in the app-state
*/
akiee.app_db.projects = (function projects(){
var filter_nodes = (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(x),(1))){
return true;
} else {
return false;
}
});
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_nodes,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10839 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10839) : cljs.core.deref.call(null,G__10839));
})())))));
});
/**
* Bool -> GlobalState
* consumes the Bool b switches the changed? variable and return the new app-state
*/
akiee.app_db.set_changed_BANG_ = (function set_changed_BANG_(b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$40,b);
});
/**
* String -> GlobalState
* consumes a String s and changes the search-string of the app-state accordingly;
* returns the new GlobalState
*/
akiee.app_db.set_search_string_BANG_ = (function set_search_string_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$41,s);
});
/**
* String -> GlobalState
* consumes a String ky and changes the :selected GlobalState accordingly;
* retruns the new GlobalState
*/
akiee.app_db.set_selected_BANG_ = (function set_selected_BANG_(ky){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1((function (){var G__10841 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10841) : cljs.core.deref.call(null,G__10841));
})()),ky)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$42,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$42,ky);
}
});
/**
* String -> GlobalState
* consumes a String ky and changes the :selected GlobalState accordingly;
* retruns the new GlobalState
*/
akiee.app_db.set_editable_BANG_ = (function set_editable_BANG_(attr){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$43,attr);
});
/**
* -> Boolean
* switches the editor? state and returns it
*/
akiee.app_db.switch_editor_BANG_ = (function switch_editor_BANG_(){
if(cljs.core.truth_(akiee.app_db.editor_QMARK_())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$37,false,cljs.core.array_seq([cljs.core.constant$keyword$41,""], 0));
} else {
var ea = akiee.dom_helpers.get_element("editor-area");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$37,true,cljs.core.array_seq([cljs.core.constant$keyword$38,false,cljs.core.constant$keyword$39,false,cljs.core.constant$keyword$41,""], 0));

akiee.app_db.set_changed_BANG_(true);

ea.value = akiee.node.lon__GT_md(akiee.app_db.nodes());

ea.focus();

return ea.click();
}
});
/**
* -> GlobalState
* switches the search? state and the new app-state
*/
akiee.app_db.switch_search_BANG_ = (function switch_search_BANG_(){
if(cljs.core.truth_(akiee.app_db.search_QMARK_())){
akiee.dom_helpers.get_element("search-input").value = "";

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$38,false,cljs.core.array_seq([cljs.core.constant$keyword$41,""], 0));
} else {
var se = akiee.dom_helpers.get_element("search-input");
akiee.dom_helpers.get_element("search-input").value = "";

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$37,false,cljs.core.array_seq([cljs.core.constant$keyword$38,true,cljs.core.constant$keyword$39,false], 0));

return se.focus();
}
});
/**
* -> GlobalState
* switches the search? state and the new app-state
*/
akiee.app_db.switch_entry_BANG_ = (function switch_entry_BANG_(){
if(cljs.core.truth_(akiee.app_db.entry_QMARK_())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$39,false,cljs.core.array_seq([cljs.core.constant$keyword$41,""], 0));
} else {
var entry = akiee.dom_helpers.get_element("enter-headline");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$37,false,cljs.core.array_seq([cljs.core.constant$keyword$38,false,cljs.core.constant$keyword$39,true,cljs.core.constant$keyword$41,""], 0));

return entry.focus();
}
});
/**
* ListState -> GlobalState
* Consumes a Liststate ls switches the ls variable and editor? search? search? accordingly
*/
akiee.app_db.switch_list_state_BANG_ = (function switch_list_state_BANG_(ls){
var lon = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10843 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10843) : cljs.core.deref.call(null,G__10843));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(akiee.app_db.app_state,cljs.core.assoc,cljs.core.constant$keyword$37,false,cljs.core.array_seq([cljs.core.constant$keyword$38,false,cljs.core.constant$keyword$39,false,cljs.core.constant$keyword$41,"",cljs.core.constant$keyword$44,ls], 0));
});
/**
* -> GlobalState
* switches the ls variable to TODO and editor? search? search? accordingly
*/
akiee.app_db.switch_todo_BANG_ = (function switch_todo_BANG_(){
return akiee.app_db.switch_list_state_BANG_(akiee.constants.TODO);
});
/**
* -> GlobalState
* switches the ls variable to DOING and editor? search? search? accordingly
*/
akiee.app_db.switch_doing_BANG_ = (function switch_doing_BANG_(){
return akiee.app_db.switch_list_state_BANG_(akiee.constants.DOING);
});
/**
* -> GlobalState
* switches the ls variable to DONE and editor? search? search? accordingly
*/
akiee.app_db.switch_done_BANG_ = (function switch_done_BANG_(){
return akiee.app_db.switch_list_state_BANG_(akiee.constants.DONE);
});
/**
* -> GlobalState
* switches the ls variable to ALL and editor? search? search? accordingly
*/
akiee.app_db.switch_all_BANG_ = (function switch_all_BANG_(){
return akiee.app_db.switch_list_state_BANG_(akiee.constants.ALL);
});
/**
* GlobalState -> Int
* produces a new rank based on the tasks in the GlobalState gs
*/
akiee.app_db.__GT_rank_helper = (function __GT_rank_helper(gs){
var filter_tasks = (function (x){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(x),null)){
return true;
} else {
return false;
}
});
return ((cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,akiee.node.higher_rank_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_tasks,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10845 = gs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10845) : cljs.core.deref.call(null,G__10845));
})())))))) | (0)) + (1));
});
/**
* -> Int
* produces a new rank based on the app-state
*/
akiee.app_db.__GT_rank = (function __GT_rank(){
return akiee.app_db.__GT_rank_helper(akiee.app_db.app_state);
});
akiee.app_db.index_of_node_helper = (function index_of_node_helper(coll,hl,i){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)) | (0)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hl,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll))))){
return i;
} else {
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return index_of_node_helper(cljs.core.rest(coll),hl,((1) + (1)));

}
}
});
/**
* Collection String -> Integer
* Consumes a Collection coll and a healine hl;
* produces the position of the element with the headline hl and level 1
*/
akiee.app_db.index_of_node = (function index_of_node(coll,hl){
return akiee.app_db.index_of_node_helper(coll,hl,(0));
});
try{var values__9971__auto___10851 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),akiee.app_db.index_of_node(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10850 = akiee.app_db.test_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10850) : cljs.core.deref.call(null,G__10850));
})()),"Inbox"));
var result__9972__auto___10852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10851);
if(cljs.core.truth_(result__9972__auto___10852)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"Inbox"),(0)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10851),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"Inbox"),(0)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10851)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10849){var t__10009__auto___10853 = e10849;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"Inbox"),(0)),cljs.core.constant$keyword$60,t__10009__auto___10853,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10856 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),akiee.app_db.index_of_node(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10855 = akiee.app_db.test_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10855) : cljs.core.deref.call(null,G__10855));
})()),"XXXXX"));
var result__9972__auto___10857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10856);
if(cljs.core.truth_(result__9972__auto___10857)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"XXXXX"),null),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10856),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"XXXXX"),null),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10856)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10854){var t__10009__auto___10858 = e10854;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"XXXXX"),null),cljs.core.constant$keyword$60,t__10009__auto___10858,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10861 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),akiee.app_db.index_of_node(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10860 = akiee.app_db.test_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10860) : cljs.core.deref.call(null,G__10860));
})()),"Test"));
var result__9972__auto___10862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10861);
if(cljs.core.truth_(result__9972__auto___10862)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"Test"),null),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10861),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"Test"),null),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10861)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10859){var t__10009__auto___10863 = e10859;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"index-of-node","index-of-node",-566645200,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),"Test"),null),cljs.core.constant$keyword$60,t__10009__auto___10863,cljs.core.constant$keyword$58,null], null));
}/**
* Global-State ListOfNode -> GlobalState
* Resets the ListOfNode lon in the app-state; produces a new GlobalState
*/
akiee.app_db.reset_lon_BANG_ = (function reset_lon_BANG_(gs,lon){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gs,cljs.core.assoc,cljs.core.constant$keyword$40,true,cljs.core.array_seq([cljs.core.constant$keyword$45,lon], 0));
});
/**
* Function Collection -> Integer
* Return the positions in positions of elements in coll that match the predicate pred
*/
akiee.app_db.positions = (function positions(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core.truth_((function (){var G__10865 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__10865) : pred.call(null,G__10865));
})())){
return idx;
} else {
return null;
}
}),coll);
});
/**
* String ListOfNode -> Integer
* Returns the position of the first of occurence of a node with key ky in ListOfNode lon
*/
akiee.app_db.node_pos_by_key = (function node_pos_by_key(ky,lon){
return cljs.core.first(akiee.app_db.positions((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(x),ky)){
return true;
} else {
return false;
}
}),lon));
});
var lon_10869 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,"node_2"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,"node_1"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,"orgode_33.##"], null)], null);
try{var values__9971__auto___10870 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),akiee.app_db.node_pos_by_key("node_2",lon_10869));
var result__9972__auto___10871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10870);
if(cljs.core.truth_(result__9972__auto___10871)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10870),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10870)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10866){var t__10009__auto___10872 = e10866;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),cljs.core.constant$keyword$60,t__10009__auto___10872,cljs.core.constant$keyword$58,null], null));
}
try{var values__9971__auto___10873 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),akiee.app_db.node_pos_by_key("node_1",lon_10869));
var result__9972__auto___10874 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10873);
if(cljs.core.truth_(result__9972__auto___10874)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10873),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10873)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10867){var t__10009__auto___10875 = e10867;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),cljs.core.constant$keyword$60,t__10009__auto___10875,cljs.core.constant$keyword$58,null], null));
}
try{var values__9971__auto___10876 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),akiee.app_db.node_pos_by_key("orgode_33.##",lon_10869));
var result__9972__auto___10877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10876);
if(cljs.core.truth_(result__9972__auto___10877)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10876),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10876)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10868){var t__10009__auto___10878 = e10868;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),cljs.core.constant$keyword$60,t__10009__auto___10878,cljs.core.constant$keyword$58,null], null));
}/**
* String ListOfNode -> Integer
* Returns the position of the first of occurence of a node with key ky in ListOfNode lon
*/
akiee.app_db.node_pos_by_headline = (function node_pos_by_headline(hdln,lon){
return cljs.core.first(akiee.app_db.positions((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(x),hdln)){
return true;
} else {
return false;
}
}),lon));
});
var lon_10882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,"node_2"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,"node_1"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,"orgode_33.##"], null)], null);
try{var values__9971__auto___10883 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),akiee.app_db.node_pos_by_headline("node_2",lon_10882));
var result__9972__auto___10884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10883);
if(cljs.core.truth_(result__9972__auto___10884)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10883),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10883)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10879){var t__10009__auto___10885 = e10879;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),cljs.core.constant$keyword$60,t__10009__auto___10885,cljs.core.constant$keyword$58,null], null));
}
try{var values__9971__auto___10886 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),akiee.app_db.node_pos_by_headline("node_1",lon_10882));
var result__9972__auto___10887 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10886);
if(cljs.core.truth_(result__9972__auto___10887)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10886),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10886)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10880){var t__10009__auto___10888 = e10880;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),cljs.core.constant$keyword$60,t__10009__auto___10888,cljs.core.constant$keyword$58,null], null));
}
try{var values__9971__auto___10889 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),akiee.app_db.node_pos_by_headline("orgode_33.##",lon_10882));
var result__9972__auto___10890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10889);
if(cljs.core.truth_(result__9972__auto___10890)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10889),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10889)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10881){var t__10009__auto___10891 = e10881;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),cljs.core.constant$keyword$60,t__10009__auto___10891,cljs.core.constant$keyword$58,null], null));
}/**
* Node String GlobalState -> GlobalState
* Inserts a node n at the right position in project pro and returns GlobalState gs;
* returns a ListOfNode
*/
akiee.app_db.insert_node_helper_BANG_ = (function insert_node_helper_BANG_(n,pro,gs){
var lon = cljs.core.vec(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10893 = gs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10893) : cljs.core.deref.call(null,G__10893));
})()));
var i = (akiee.app_db.node_pos_by_headline(pro,lon) + (1));
var new_lon = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lon,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.array_seq([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lon,i)], 0)));
return akiee.app_db.reset_lon_BANG_(gs,new_lon);
});
try{var values__9971__auto___10895 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,akiee.node.__GT_node(akiee.constants.TODO,"Test Headline","Inbox",akiee.app_db.__GT_rank())),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(akiee.app_db.insert_node_helper_BANG_(akiee.node.__GT_node(akiee.constants.TODO,"Test Headline","Inbox",akiee.app_db.__GT_rank()),"Inbox",akiee.app_db.test_state)),(1)));
var result__9972__auto___10896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.node_EQ_,values__9971__auto___10895);
if(cljs.core.truth_(result__9972__auto___10896)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol("no","node=","no/node=",1956002422,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol(null,"insert-node-helper!","insert-node-helper!",1067137984,null),cljs.core.list(new cljs.core.Symbol("no","->node","no/->node",-1437979358,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",cljs.core.list(new cljs.core.Symbol(null,"->rank","->rank",-1383817831,null))),"Inbox",new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),(1)),cljs.core.list(new cljs.core.Symbol("no","->node","no/->node",-1437979358,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",cljs.core.list(new cljs.core.Symbol(null,"->rank","->rank",-1383817831,null)))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.node_EQ_,values__9971__auto___10895),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol("no","node=","no/node=",1956002422,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol(null,"insert-node-helper!","insert-node-helper!",1067137984,null),cljs.core.list(new cljs.core.Symbol("no","->node","no/->node",-1437979358,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",cljs.core.list(new cljs.core.Symbol(null,"->rank","->rank",-1383817831,null))),"Inbox",new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),(1)),cljs.core.list(new cljs.core.Symbol("no","->node","no/->node",-1437979358,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",cljs.core.list(new cljs.core.Symbol(null,"->rank","->rank",-1383817831,null)))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol("no","node=","no/node=",1956002422,null),values__9971__auto___10895)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10894){var t__10009__auto___10897 = e10894;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol("no","node=","no/node=",1956002422,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),cljs.core.list(cljs.core.constant$keyword$45,cljs.core.list(new cljs.core.Symbol(null,"insert-node-helper!","insert-node-helper!",1067137984,null),cljs.core.list(new cljs.core.Symbol("no","->node","no/->node",-1437979358,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",cljs.core.list(new cljs.core.Symbol(null,"->rank","->rank",-1383817831,null))),"Inbox",new cljs.core.Symbol(null,"test-state","test-state",-836911126,null))),(1)),cljs.core.list(new cljs.core.Symbol("no","->node","no/->node",-1437979358,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",cljs.core.list(new cljs.core.Symbol(null,"->rank","->rank",-1383817831,null)))),cljs.core.constant$keyword$60,t__10009__auto___10897,cljs.core.constant$keyword$58,null], null));
}/**
* Node String GlobalState -> ListOfNode
* Inserts a node n at the right position in project pro and returns a ListOfNode
*/
akiee.app_db.insert_node_BANG_ = (function insert_node_BANG_(n,pro){
return akiee.app_db.insert_node_helper_BANG_(n,pro,akiee.app_db.app_state);
});
/**
* TaskState String String -> GlobalState
* Consumes a TaskState ts a headline hl and a project pro;
* adds a task to the app-state
*/
akiee.app_db.add_task_BANG_ = (function add_task_BANG_(ts,hl,pro){
var n = akiee.node.__GT_node(ts,hl,pro,akiee.app_db.__GT_rank());
return akiee.app_db.insert_node_BANG_(n,pro);
});
/**
* String -> GlobalState
* Consumes a key ky and changes the task-state of that task in :lon;
* returns the app-state
*/
akiee.app_db.next_ts_BANG_ = (function next_ts_BANG_(ky){
var lon = cljs.core.vec(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10899 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10899) : cljs.core.deref.call(null,G__10899));
})()));
var pos = akiee.app_db.node_pos_by_key(ky,lon);
var nd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lon,pos);
var ts = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(nd);
return akiee.app_db.reset_lon_BANG_(akiee.app_db.app_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lon,pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nd,cljs.core.constant$keyword$32,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ts,akiee.constants.TODO))?akiee.constants.DOING:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ts,akiee.constants.DOING))?akiee.constants.DONE:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ts,akiee.constants.DONE))?akiee.constants.TODO:null))))));
});
/**
* Integer -> Node
* Returns node at pos
*/
akiee.app_db.node_by_pos = (function node_by_pos(pos){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1((function (){var G__10901 = akiee.app_db.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10901) : cljs.core.deref.call(null,G__10901));
})()),pos);
});
/**
* String -> Node
* Consumes a key and returns the node from the app-state
*/
akiee.app_db.node_by_key = (function node_by_key(ky){
return akiee.app_db.node_by_pos(akiee.app_db.node_pos_by_key(ky,akiee.app_db.nodes()));
});
/**
* -> node
*/
akiee.app_db.sidebar_content = (function sidebar_content(){
if(cljs.core.truth_(akiee.app_db.selected())){
return akiee.app_db.node_by_key(akiee.app_db.selected());
} else {
return null;
}
});
