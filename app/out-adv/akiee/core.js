// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.core');
goog.require('cljs.core');
goog.require('akiee.app_db');
goog.require('akiee.sidebar');
goog.require('akiee.node');
goog.require('reagent.core');
goog.require('clojure.browser.repl');
goog.require('akiee.constants');
goog.require('akiee.handlers');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
/**
* String String String -> Component
* Consumes the text tx, the id and the title t, the state,
* the test function tfn, the on-click function onfn of the button;
* produces the component for the button.
*/
akiee.core.list_state_button = (function list_state_button(tx,id,t,state,tfn,onfn){
var active_QMARK_ = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){return (tfn.cljs$core$IFn$_invoke$arity$0 ? tfn.cljs$core$IFn$_invoke$arity$0() : tfn.call(null));
})(),state)) && (cljs.core.not(akiee.app_db.editor_QMARK_())))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$117,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$57,"button",cljs.core.constant$keyword$118,id,cljs.core.constant$keyword$119,t,cljs.core.constant$keyword$73,active_QMARK_,cljs.core.constant$keyword$89,onfn], null),tx], null);
});
akiee.core.todo_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Todo","show-todo","Ctrl+1",akiee.constants.TODO,akiee.app_db.list_state,akiee.app_db.switch_todo_BANG_], null);
akiee.core.doing_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Doing","show-doing","Ctrl+2 / Ctrl+Space",akiee.constants.DOING,akiee.app_db.list_state,akiee.app_db.switch_doing_BANG_], null);
akiee.core.done_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Done","show-done","Ctrl+3",akiee.constants.DONE,akiee.app_db.list_state,akiee.app_db.switch_done_BANG_], null);
akiee.core.board_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Board","show-all","Ctrl+4",akiee.constants.ALL,akiee.app_db.list_state,akiee.app_db.switch_all_BANG_], null);
/**
* String String String -> Component
* Consumes the icon name in, the id and title t of the button, the test function tfn?,
* the on-click function onfn of the button.
* produces the component for the button.
*/
akiee.core.switch_button = (function switch_button(in$,id,t,tfn_QMARK_,onfn){
var icon_name = [cljs.core.str("fa-"),cljs.core.str(in$)].join('');
var active_QMARK_ = (cljs.core.truth_((function (){return (tfn_QMARK_.cljs$core$IFn$_invoke$arity$0 ? tfn_QMARK_.cljs$core$IFn$_invoke$arity$0() : tfn_QMARK_.call(null));
})())?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$118,id,cljs.core.constant$keyword$119,t,cljs.core.constant$keyword$73,active_QMARK_,cljs.core.constant$keyword$89,onfn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,icon_name], null)], null)], null);
});
akiee.core.editor_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.switch_button,"code","show-editor","Ctrl+E / Ctrl+Space",akiee.app_db.editor_QMARK_,akiee.app_db.switch_editor_BANG_], null);
akiee.core.search_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.switch_button,"search","show-searchbox","Ctrl+F",akiee.app_db.search_QMARK_,akiee.app_db.switch_search_BANG_], null);
akiee.core.entry_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.switch_button,"plus","show-enter-task","Ctrl+Enter",akiee.app_db.entry_QMARK_,akiee.app_db.switch_entry_BANG_], null);
/**
* -> Component
* The toolbar for changing the state of the Akiee
*/
akiee.core.toolbar = (function toolbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$123,"navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,akiee.core.todo_button,akiee.core.doing_button,akiee.core.done_button], null),akiee.core.board_button,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127], null),akiee.core.editor_switch,akiee.core.search_switch,akiee.core.entry_switch], null)], null)], null);
});
/**
* ListOf* String -> Component
* Consumes a list of anything loa and a name; produces the component of a select field.
*/
akiee.core.select = (function select(loa,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,n,cljs.core.constant$keyword$129,"Inbox"], null),(function (){var iter__4513__auto__ = (function iter__11054(s__11055){
return (new cljs.core.LazySeq(null,(function (){
var s__11055__$1 = s__11055;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__11055__$1);
if(temp__4126__auto__){
var s__11055__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11055__$2)){
var c__4511__auto__ = cljs.core.chunk_first(s__11055__$2);
var size__4512__auto__ = cljs.core.count(c__4511__auto__);
var b__11057 = cljs.core.chunk_buffer(size__4512__auto__);
if((function (){var i__11056 = (0);
while(true){
if((i__11056 < size__4512__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4511__auto__,i__11056);
cljs.core.chunk_append(b__11057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,a], null));

var G__11060 = (i__11056 + (1));
i__11056 = G__11060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11057),iter__11054(cljs.core.chunk_rest(s__11055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11057),null);
}
} else {
var a = cljs.core.first(s__11055__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,a], null),iter__11054(cljs.core.rest(s__11055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4513__auto__(loa);
})()], null);
});
/**
* ListOfTaskState -> Component
* Consumes the a list of taskstate lot;
* produces the component of the select field for the state of the new task.
*/
akiee.core.enter_task_status = (function enter_task_status(lot){
return akiee.core.select(lot,"task-status");
});
/**
* ListofString -> Component
* Consumes a list of string los; produces the component for the project select.
*/
akiee.core.enter_task_project = (function enter_task_project(los){
return akiee.core.select(los,"task-project");
});
/**
* -> Component
* The entry form for entering tasks
*/
akiee.core.enter_task = (function enter_task(){
var show_QMARK_ = (cljs.core.truth_(akiee.app_db.entry_QMARK_())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,""], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,"closed"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,show_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,akiee.handlers.handle_enter_task], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$57,"text",cljs.core.constant$keyword$135,"Enter Headline",cljs.core.constant$keyword$55,"headline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task_status,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO","DOING","DONE"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task_project,akiee.app_db.projects()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,"submit"], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,"button",cljs.core.constant$keyword$89,akiee.handlers.cancel_enter_task], null),"Cancel"], null)], null)], null);
});
/**
* -> Component
* The entry form for searching tasks
*/
akiee.core.search = (function search(){
var show_QMARK_ = (cljs.core.truth_(akiee.app_db.search_QMARK_())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,""], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,"closed"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,"text",cljs.core.constant$keyword$140,akiee.handlers.handle_onchange_search], null)], null)], null);
});
/**
* -> Component
* The textarea to directly edit the task list in markdown
*/
akiee.core.editor = (function editor(){
var show_QMARK_ = (cljs.core.truth_(akiee.app_db.editor_QMARK_())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$28,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,"inline-block"], null)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$28,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,"none"], null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,(3),cljs.core.constant$keyword$92,akiee.handlers.handle_blur_editor], null)], null)], null);
});
akiee.core.task = (function task(t){
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(akiee.app_db.selected(),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(t)))?"selected":"");
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(t),cljs.core.constant$keyword$89,akiee.handlers.onclick_task,cljs.core.constant$keyword$73,class$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$89,akiee.handlers.handle_onclick_taskstate], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,"hover-button"], null),cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(t)], null),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$89,akiee.handlers.handle_onclick_up], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$89,akiee.handlers.handle_onclick_down], null)], null)], null)], null);
});
akiee.core.task_table = (function task_table(tb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,(function (){var iter__4513__auto__ = (function iter__11067(s__11068){
return (new cljs.core.LazySeq(null,(function (){
var s__11068__$1 = s__11068;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__11068__$1);
if(temp__4126__auto__){
var s__11068__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11068__$2)){
var c__4511__auto__ = cljs.core.chunk_first(s__11068__$2);
var size__4512__auto__ = cljs.core.count(c__4511__auto__);
var b__11070 = cljs.core.chunk_buffer(size__4512__auto__);
if((function (){var i__11069 = (0);
while(true){
if((i__11069 < size__4512__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4511__auto__,i__11069);
cljs.core.chunk_append(b__11070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task,t], null));

var G__11073 = (i__11069 + (1));
i__11069 = G__11073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11070),iter__11067(cljs.core.chunk_rest(s__11068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11070),null);
}
} else {
var t = cljs.core.first(s__11068__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task,t], null),iter__11067(cljs.core.rest(s__11068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4513__auto__(tb);
})()], null)], null);
});
akiee.core.task_list = (function task_list(){
var show_QMARK_ = ((cljs.core.not(akiee.app_db.editor_QMARK_()))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$28,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,"flex"], null)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$28,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,"none"], null)], null));
var sidebar_QMARK_ = (cljs.core.truth_(akiee.app_db.selected())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,""], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,"closed"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(akiee.app_db.list_state(),akiee.constants.ALL))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,(function (){var iter__4513__auto__ = ((function (show_QMARK_,sidebar_QMARK_){
return (function iter__11080(s__11081){
return (new cljs.core.LazySeq(null,((function (show_QMARK_,sidebar_QMARK_){
return (function (){
var s__11081__$1 = s__11081;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__11081__$1);
if(temp__4126__auto__){
var s__11081__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11081__$2)){
var c__4511__auto__ = cljs.core.chunk_first(s__11081__$2);
var size__4512__auto__ = cljs.core.count(c__4511__auto__);
var b__11083 = cljs.core.chunk_buffer(size__4512__auto__);
if((function (){var i__11082 = (0);
while(true){
if((i__11082 < size__4512__auto__)){
var tb = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4511__auto__,i__11082);
cljs.core.chunk_append(b__11083,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,akiee.core.task_table(tb)], null));

var G__11086 = (i__11082 + (1));
i__11082 = G__11086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11083),iter__11080(cljs.core.chunk_rest(s__11081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11083),null);
}
} else {
var tb = cljs.core.first(s__11081__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,akiee.core.task_table(tb)], null),iter__11080(cljs.core.rest(s__11081__$2)));
}
} else {
return null;
}
break;
}
});})(show_QMARK_,sidebar_QMARK_))
,null,null));
});})(show_QMARK_,sidebar_QMARK_))
;
return iter__4513__auto__(akiee.app_db.tasks.cljs$core$IFn$_invoke$arity$0());
})()], null)], null)], null):akiee.core.task_table(akiee.app_db.tasks.cljs$core$IFn$_invoke$arity$0()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,sidebar_QMARK_,akiee.sidebar.sidebar()], null)], null);
});
/**
* -> Component
* Produces the base comment
*/
akiee.core.app = (function app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task_list], null)], null);
});
akiee.core.big_bang = (function big_bang(){
akiee.handlers.register_keyevents();

akiee.handlers.register_winevents();

return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.app], null),document.getElementById("root"));
});
akiee.core.big_bang();
