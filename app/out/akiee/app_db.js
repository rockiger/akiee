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
cljs.core.enable_console_print_BANG_.call(null);
akiee.app_db.null$ = null;
akiee.app_db.FP = akiee.fileoperations.create_task_list_file.call(null,akiee.fileoperations.user_home.call(null));
/**
* String -> GS
* consumes the path p to the task file and produces the initial app-state
* TODO find way to test, without :key
*/
akiee.app_db.load_app_state = (function load_app_state(p){
return (new akiee.datadefinitions.global_state(false,false,false,false,"",null,null,akiee.constants.DOING,akiee.node.__GT_nodes.call(null,p),null,null,null));
});
akiee.app_db.app_state = reagent.core.atom.call(null,akiee.app_db.load_app_state.call(null,akiee.app_db.FP));
/**
* -> ListOfNode
* returns the nodes of the app-state
*/
akiee.app_db.nodes = (function nodes(){
return new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> Boolean
* returns the state of the editor
*/
akiee.app_db.editor_QMARK_ = (function editor_QMARK_(){
return new cljs.core.Keyword(null,"editor?","editor?",1562728713).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> Boolean
* returns the state of the task entry
*/
akiee.app_db.entry_QMARK_ = (function entry_QMARK_(){
return new cljs.core.Keyword(null,"entry?","entry?",2007901397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> Boolean
* returns the state of the search box
*/
akiee.app_db.search_QMARK_ = (function search_QMARK_(){
return new cljs.core.Keyword(null,"search?","search?",785472524).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> Boolean
*/
akiee.app_db.changed_QMARK_ = (function changed_QMARK_(){
return new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> ListStat
* returns the state of the List
*/
akiee.app_db.list_state = (function list_state(){
return new cljs.core.Keyword(null,"ls","ls",1195788590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> String
* returns the state of the selected filed
*/
akiee.app_db.selected = (function selected(){
return new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* -> String
* returns the state of the editable filed
*/
akiee.app_db.editable = (function editable(){
return new cljs.core.Keyword(null,"editable","editable",1930280326).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
* GlobalState ListState -> lon
* consumes an GlobalState gs , a ListState ls and  returns the tasks, according to the current ListState
*/
akiee.app_db.tasks_helper = (function tasks_helper(gs,ls){
var filter_tasks = (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(x),(2))){
return true;
} else {
return false;
}
});
var filter_state = ((function (filter_tasks){
return (function (x){
if(cljs.core._EQ_.call(null,ls,akiee.constants.ALL)){
return true;
} else {
if(cljs.core._EQ_.call(null,ls,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(x))){
return true;
} else {
return false;

}
}
});})(filter_tasks))
;
var filter_search = ((function (filter_tasks,filter_state){
return (function (x){
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs))))){
if(cljs.core.truth_((function (){var or__4720__auto__ = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))].join('')),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(or__4720__auto__)){
return or__4720__auto__;
} else {
var or__4720__auto____$1 = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))].join('')),akiee.node.tags_string.call(null,x));
if(cljs.core.truth_(or__4720__auto____$1)){
return or__4720__auto____$1;
} else {
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))].join('')),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(x));
}
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
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),akiee.node.higher_rank_QMARK_,cljs.core.filter.call(null,filter_search,cljs.core.filter.call(null,filter_state,cljs.core.filter.call(null,filter_tasks,new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))))));
});
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
if(cljs.core._EQ_.call(null,akiee.app_db.list_state.call(null),akiee.constants.ALL)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.TODO),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DOING),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DONE)], null);
} else {
return akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.app_db.list_state.call(null));
}
});
var tasks__1 = (function (ls){
if(cljs.core._EQ_.call(null,ls,akiee.constants.ALL)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.TODO),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DOING),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DONE)], null);
} else {
return akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,ls);
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(x),(1))){
return true;
} else {
return false;
}
});
return cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727),cljs.core.filter.call(null,filter_nodes,new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state))))));
});
/**
* Bool -> GlobalState
* consumes the Bool b switches the changed? variable and return the new app-state
*/
akiee.app_db.set_changed_BANG_ = (function set_changed_BANG_(b){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),b);
});
/**
* String -> GlobalState
* consumes a String s and changes the search-string of the app-state accordingly;
* returns the new GlobalState
*/
akiee.app_db.set_search_string_BANG_ = (function set_search_string_BANG_(s){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ss","ss",-1463049578),s);
});
/**
* String -> GlobalState
* consumes a String ky and changes the :selected GlobalState accordingly;
* returns the new GlobalState
*/
akiee.app_db.set_selected_BANG_ = (function set_selected_BANG_(ky){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state)),ky)){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),null);
} else {
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),ky);
}
});
/**
* String -> GlobalState
* consumes a String ky and changes the :selected GlobalState accordingly;
* retruns the new GlobalState
*/
akiee.app_db.set_editable_BANG_ = (function set_editable_BANG_(attr){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editable","editable",1930280326),attr);
});
/**
* -> Boolean
* switches the editor? state and returns it
*/
akiee.app_db.switch_editor_BANG_ = (function switch_editor_BANG_(){
if(cljs.core.truth_(akiee.app_db.editor_QMARK_.call(null))){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");
} else {
var ea = akiee.dom_helpers.get_element.call(null,"editor-area");
cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),true,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"",new cljs.core.Keyword(null,"selected","selected",574897764),null);

akiee.app_db.set_changed_BANG_.call(null,true);

ea.value = akiee.node.lon__GT_md.call(null,akiee.app_db.nodes.call(null));

ea.focus();

return ea.click();
}
});
/**
* -> GlobalState
* switches the search? state and the new app-state
*/
akiee.app_db.switch_search_BANG_ = (function switch_search_BANG_(){
if(cljs.core.truth_(akiee.app_db.search_QMARK_.call(null))){
akiee.dom_helpers.get_element.call(null,"search-input").value = "";

return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");
} else {
var se = akiee.dom_helpers.get_element.call(null,"search-input");
akiee.dom_helpers.get_element.call(null,"search-input").value = "";

cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"search?","search?",785472524),true,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false);

return se.focus();
}
});
/**
* -> GlobalState
* switches the search? state and the new app-state
*/
akiee.app_db.switch_entry_BANG_ = (function switch_entry_BANG_(){
if(cljs.core.truth_(akiee.app_db.entry_QMARK_.call(null))){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");
} else {
var entry = akiee.dom_helpers.get_element.call(null,"enter-headline");
cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"entry?","entry?",2007901397),true,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");

return entry.focus();
}
});
/**
* ListState -> GlobalState
* Consumes a Liststate ls switches the ls variable and editor? search? search? accordingly
*/
akiee.app_db.switch_list_state_BANG_ = (function switch_list_state_BANG_(ls){
var lon = new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"",new cljs.core.Keyword(null,"ls","ls",1195788590),ls);
});
/**
* -> GlobalState
* switches the ls variable to TODO and editor? search? search? accordingly
*/
akiee.app_db.switch_todo_BANG_ = (function switch_todo_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.TODO);
});
/**
* -> GlobalState
* switches the ls variable to DOING and editor? search? search? accordingly
*/
akiee.app_db.switch_doing_BANG_ = (function switch_doing_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.DOING);
});
/**
* -> GlobalState
* switches the ls variable to DONE and editor? search? search? accordingly
*/
akiee.app_db.switch_done_BANG_ = (function switch_done_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.DONE);
});
/**
* -> GlobalState
* switches the ls variable to ALL and editor? search? search? accordingly
*/
akiee.app_db.switch_all_BANG_ = (function switch_all_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.ALL);
});
/**
* GlobalState -> Int
* produces a new rank based on the tasks in the GlobalState gs
*/
akiee.app_db.__GT_rank_helper = (function __GT_rank_helper(gs){
var filter_tasks = (function (x){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x),null)){
return true;
} else {
return false;
}
});
return ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),akiee.node.higher_rank_QMARK_,cljs.core.filter.call(null,filter_tasks,new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs))))))) | (0)) + (1));
});
/**
* -> Int
* produces a new rank based on the app-state
*/
akiee.app_db.__GT_rank = (function __GT_rank(){
return akiee.app_db.__GT_rank_helper.call(null,akiee.app_db.app_state);
});
akiee.app_db.index_of_node_helper = (function index_of_node_helper(coll,hl,i){
if((cljs.core._EQ_.call(null,(1),(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll)) | (0)))) && (cljs.core._EQ_.call(null,hl,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll))))){
return i;
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
return index_of_node_helper.call(null,cljs.core.rest.call(null,coll),hl,((1) + (1)));

}
}
});
/**
* Collection String -> Integer
* Consumes a Collection coll and a healine hl;
* produces the position of the element with the headline hl and level 1
*/
akiee.app_db.index_of_node = (function index_of_node(coll,hl){
return akiee.app_db.index_of_node_helper.call(null,coll,hl,(0));
});
/**
* Global-State ListOfNode -> GlobalState
* Resets the ListOfNode lon in the app-state; produces a new GlobalState
*/
akiee.app_db.reset_lon_BANG_ = (function reset_lon_BANG_(gs,lon){
return cljs.core.swap_BANG_.call(null,gs,cljs.core.assoc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"lon","lon",522068437),lon);
});
/**
* Function Collection -> Integer
* Return the positions in positions of elements in coll that match the predicate pred
*/
akiee.app_db.positions = (function positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
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
return cljs.core.first.call(null,akiee.app_db.positions.call(null,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x),ky)){
return true;
} else {
return false;
}
}),lon));
});
var lon_6963 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"node_2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"node_1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"orgode_33.##"], null)], null);
try{var values__6306__auto___6964 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),akiee.app_db.node_pos_by_key.call(null,"node_2",lon_6963));
var result__6307__auto___6965 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6964);
if(cljs.core.truth_(result__6307__auto___6965)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6964),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6964)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6960){var t__6344__auto___6966 = e6960;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6966,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__6306__auto___6967 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),akiee.app_db.node_pos_by_key.call(null,"node_1",lon_6963));
var result__6307__auto___6968 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6967);
if(cljs.core.truth_(result__6307__auto___6968)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6967),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6967)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6961){var t__6344__auto___6969 = e6961;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6969,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__6306__auto___6970 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),akiee.app_db.node_pos_by_key.call(null,"orgode_33.##",lon_6963));
var result__6307__auto___6971 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6970);
if(cljs.core.truth_(result__6307__auto___6971)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6970),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6970)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6962){var t__6344__auto___6972 = e6962;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6972,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* String ListOfNode -> Integer
* Returns the position of the first of occurence of a node with key ky in ListOfNode lon
*/
akiee.app_db.node_pos_by_headline = (function node_pos_by_headline(hdln,lon){
return cljs.core.first.call(null,akiee.app_db.positions.call(null,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(x),hdln)){
return true;
} else {
return false;
}
}),lon));
});
var lon_6976 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node_2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node_1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headline","headline",-157157727),"orgode_33.##"], null)], null);
try{var values__6306__auto___6977 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),akiee.app_db.node_pos_by_headline.call(null,"node_2",lon_6976));
var result__6307__auto___6978 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6977);
if(cljs.core.truth_(result__6307__auto___6978)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6977),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6977)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6973){var t__6344__auto___6979 = e6973;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6979,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__6306__auto___6980 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),akiee.app_db.node_pos_by_headline.call(null,"node_1",lon_6976));
var result__6307__auto___6981 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6980);
if(cljs.core.truth_(result__6307__auto___6981)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6980),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6980)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6974){var t__6344__auto___6982 = e6974;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6982,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__6306__auto___6983 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),akiee.app_db.node_pos_by_headline.call(null,"orgode_33.##",lon_6976));
var result__6307__auto___6984 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6983);
if(cljs.core.truth_(result__6307__auto___6984)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6983),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6983)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6975){var t__6344__auto___6985 = e6975;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6985,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* Node String GlobalState -> GlobalState
* Inserts a node n at the right position in project pro and returns GlobalState gs;
* returns a ListOfNode
*/
akiee.app_db.insert_node_helper_BANG_ = (function insert_node_helper_BANG_(n,pro,gs){
var lon = cljs.core.vec.call(null,new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)));
var i = (akiee.app_db.node_pos_by_headline.call(null,pro,lon) + (1));
var new_lon = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,lon,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.subvec.call(null,lon,i)));
return akiee.app_db.reset_lon_BANG_.call(null,gs,new_lon);
});
/**
* Node String GlobalState -> ListOfNode
* Inserts a node n at the right position in project pro and returns a ListOfNode
*/
akiee.app_db.insert_node_BANG_ = (function insert_node_BANG_(n,pro){
return akiee.app_db.insert_node_helper_BANG_.call(null,n,pro,akiee.app_db.app_state);
});
/**
* TaskState String String -> GlobalState
* Consumes a TaskState ts a headline hl and a project pro;
* adds a task to the app-state
*/
akiee.app_db.add_task_BANG_ = (function add_task_BANG_(ts,hl,pro){
var n = akiee.node.__GT_node.call(null,ts,hl,pro,akiee.app_db.__GT_rank.call(null));
return akiee.app_db.insert_node_BANG_.call(null,n,pro);
});
/**
* String -> GlobalState
* Consumes a key ky and changes the task-state of that task in :lon;
* returns the app-state
*/
akiee.app_db.next_ts_BANG_ = (function next_ts_BANG_(ky){
var lon = cljs.core.vec.call(null,new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state)));
var pos = akiee.app_db.node_pos_by_key.call(null,ky,lon);
var nd = cljs.core.get.call(null,lon,pos);
var ts = new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(nd);
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc.call(null,lon,pos,cljs.core.assoc.call(null,nd,new cljs.core.Keyword(null,"todo","todo",-1046442570),((cljs.core._EQ_.call(null,ts,akiee.constants.TODO))?akiee.constants.DOING:((cljs.core._EQ_.call(null,ts,akiee.constants.DOING))?akiee.constants.DONE:((cljs.core._EQ_.call(null,ts,akiee.constants.DONE))?akiee.constants.TODO:null))))));
});
/**
* Integer -> Node
* Returns node at pos
*/
akiee.app_db.node_by_pos = (function node_by_pos(pos){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state)),pos);
});
/**
* String -> Node
* Consumes a key and returns the node from the app-state
*/
akiee.app_db.node_by_key = (function node_by_key(ky){
return akiee.app_db.node_by_pos.call(null,akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null)));
});
/**
* -> node
*/
akiee.app_db.sidebar_content = (function sidebar_content(){
if(cljs.core.truth_(akiee.app_db.selected.call(null))){
return akiee.app_db.node_by_key.call(null,akiee.app_db.selected.call(null));
} else {
return null;
}
});
/**
* String Node Keyword -> GlobalState
* consumes content String c, Node n and Keyword ky;
* changes the content c for keywerd ky in n and safes to app-state
*/
akiee.app_db.change_sidebar_element = (function change_sidebar_element(c,n,ky){
var nn = cljs.core.assoc.call(null,n,ky,c);
var np = akiee.app_db.node_pos_by_key.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(nn),akiee.app_db.nodes.call(null));
var nlon = cljs.core.assoc.call(null,cljs.core.vec.call(null,akiee.app_db.nodes.call(null)),np,nn);
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,nlon);
});
/**
* String Node -> GlobalState
* consumes content String c and Node n;
* changes the headline in n and safes to app-state
*/
akiee.app_db.change_headline = (function change_headline(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"headline","headline",-157157727));
});
/**
* String Node -> GlobalState
* consumes content String c and Node n;
* changes the body in n and safes to app-state
*/
akiee.app_db.change_body = (function change_body(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"body","body",-2049205669));
});
/**
* String Node -> GlobalState
* consumes content String c and Node n;
* changes the state in n and safes to app-state
*/
akiee.app_db.change_state = (function change_state(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});
/**
* String Node -> GlobalState
* consumes content String c and Node n;
* changes the project in n and safes to app-state
*/
akiee.app_db.change_project = (function change_project(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"project","project",1124394579));
});
/**
* String Node -> GlobalState
* consumes content String c and Node n;
* changes the project in n and safes to app-state
*/
akiee.app_db.change_scheduled = (function change_scheduled(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"scheduled","scheduled",553898551));
});
/**
* String Node -> GlobalState
* consumes content String c and Node n;
* changes the project in n and safes to app-state
*/
akiee.app_db.change_deadline = (function change_deadline(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"deadline","deadline",628964572));
});
/**
* String Node -> GlobalState
* consumes content commma seperated String c and Node n;
* changes the project in n and safes to app-state
*/
akiee.app_db.change_tags = (function change_tags(c,n){
var tags = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,c,","));
return akiee.app_db.change_sidebar_element.call(null,tags,n,new cljs.core.Keyword(null,"tags","tags",1771418977));
});
/**
* String Node -> GlobalState
* consumes String c with repeat information Node n;
* changes the project in n and safes to app-state
*/
akiee.app_db.change_reps = (function change_reps(c,n){
return akiee.app_db.change_sidebar_element.call(null,akiee.node.__GT_repeat.call(null,c),n,new cljs.core.Keyword(null,"repeat","repeat",832692087));
});

//# sourceMappingURL=app_db.js.map