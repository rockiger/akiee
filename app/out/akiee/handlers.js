// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.handlers');
goog.require('cljs.core');
goog.require('akiee.dom_helpers');
goog.require('akiee.app_db');
goog.require('akiee.node');
goog.require('akiee.fileoperations');
goog.require('akiee.rank');
goog.require('goog.events');
akiee.handlers.gui = require("nw.gui");
cljs.core.enable_console_print_BANG_.call(null);
akiee.handlers.WIN = akiee.handlers.gui.Window.get();
/**
* closes the entry box and hides it
*/
akiee.handlers.cancel_enter_task = (function cancel_enter_task(){
var hdln = akiee.dom_helpers.get_element.call(null,"enter-headline");
hdln.value = "";

return akiee.app_db.switch_entry_BANG_.call(null);
});
/**
* closes the search box and resets the search-string in the app-state
*/
akiee.handlers.cancel_search = (function cancel_search(){
return akiee.app_db.switch_search_BANG_.call(null);
});
/**
* DOMElement -> Bool
* Handles the submisson of element e that are created by the enter task form
*/
akiee.handlers.handle_enter_task = (function handle_enter_task(ev){
var form = (ev["target"]);
var els = (form["elements"]);
var hdln = (els["headline"]).value;
var tast = (els["task-status"]).value;
var tapr = (els["task-project"]).value;
if(cljs.core.not_EQ_.call(null,hdln,"")){
akiee.app_db.add_task_BANG_.call(null,tast,hdln,tapr);
} else {
}

akiee.handlers.cancel_enter_task.call(null);

return false;
});
/**
* Event ->
* Handles the close event of win
*/
akiee.handlers.handle_close = (function handle_close(ev){
akiee.fileoperations.save_task_file.call(null,akiee.node.lon__GT_md.call(null,akiee.app_db.nodes.call(null)),akiee.fileoperations.task_file_path.call(null),akiee.app_db.changed_QMARK_.call(null),akiee.app_db.set_changed_BANG_);

return akiee.handlers.WIN.close(true);
});
/**
* Event ->
* Handles the close event of win
*/
akiee.handlers.handle_blur = (function handle_blur(ev){
return akiee.fileoperations.save_task_file.call(null,akiee.node.lon__GT_md.call(null,akiee.app_db.nodes.call(null)),akiee.fileoperations.task_file_path.call(null),akiee.app_db.changed_QMARK_.call(null),akiee.app_db.set_changed_BANG_);
});
/**
* Register the window event handlers
*/
akiee.handlers.register_winevents = (function register_winevents(){
goog.events.listen(window,"blur",akiee.handlers.handle_blur);

return akiee.handlers.WIN.on("close",akiee.handlers.handle_close);
});
/**
* Event -> GlobalState
* Consumes the onchange Event ev and changes global filter string for search;
* returns the app-state
*/
akiee.handlers.handle_onchange_search = (function handle_onchange_search(ev){
return akiee.app_db.set_search_string_BANG_.call(null,ev.target.value);
});
/**
* Event -> GlobalState
* Consumes the onblur Event ev and changes global lon ;
* returns the app-state
*/
akiee.handlers.handle_blur_editor = (function handle_blur_editor(ev){
var lon = cljs.core.map.call(null,akiee.node.jsnode__GT_node,akiee.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,akiee.node.parse_file.call(null,ev.target.value)));
akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,lon);

return akiee.app_db.set_changed_BANG_.call(null,true);
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes global lon with task to next state;
* returns the app-state
*/
akiee.handlers.handle_onclick_taskstate = (function handle_onclick_taskstate(ev){
var row = ev.currentTarget.parentNode;
var ky = row.dataset.key;
akiee.app_db.next_ts_BANG_.call(null,ky);

return ev.stopPropagation();
});
/**
* Event -> String
* Consume an Event from a rank changing button and returns the key of the corresponding row
*/
akiee.handlers.rank_helper = (function rank_helper(ev){
return ev.currentTarget.parentNode.parentNode.dataset.key;
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global lon with rank change down-wards
*/
akiee.handlers.handle_onclick_down = (function handle_onclick_down(ev){
var ky = akiee.handlers.rank_helper.call(null,ev);
akiee.rank.down_rank.call(null,ky);

return ev.stopPropagation();
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global lon with rank change up-wards
*/
akiee.handlers.handle_onclick_up = (function handle_onclick_up(ev){
var ky = akiee.handlers.rank_helper.call(null,ev);
akiee.rank.up_rank.call(null,ky);

return ev.stopPropagation();
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state selected
*/
akiee.handlers.onclick_task = (function onclick_task(ev){
var ky = ev.currentTarget.dataset.key;
akiee.app_db.set_selected_BANG_.call(null,ky);

return ev.stopPropagation();
});
/**
* String String -> GlobalState
* Consumes the name of the sidebar element n and the id and changes the global state editable
*/
akiee.handlers.onclick_sidebar_element = (function onclick_sidebar_element(n,id){
akiee.app_db.set_editable_BANG_.call(null,n);

return setTimeout((function (){
return akiee.dom_helpers.get_element.call(null,id).focus();
}),(100));
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state editable
*/
akiee.handlers.onclick_hdln = (function onclick_hdln(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"hdln","sidebar-headline");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state editable
*/
akiee.handlers.onclick_body = (function onclick_body(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"body","sidebar-body-ta");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state editable
*/
akiee.handlers.onclick_state = (function onclick_state(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"state","sidebar-task-state");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state editable
*/
akiee.handlers.onclick_project = (function onclick_project(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"project","sidebar-task-project");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state scheduled
*/
akiee.handlers.onclick_scheduled = (function onclick_scheduled(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"scheduled","sidebar-scheduled-form");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state deadline
*/
akiee.handlers.onclick_deadline = (function onclick_deadline(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"deadline","sidebar-deadline-form");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state tags
*/
akiee.handlers.onclick_tags = (function onclick_tags(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"tags","sidebar-tags-form");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state tags
*/
akiee.handlers.onclick_reps = (function onclick_reps(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"reps","sidebar-reps-form");
});
/**
* Event -> Void
* Consumes the onclick Event ev and closes the application
*/
akiee.handlers.onclick_close = (function onclick_close(ev){
return akiee.handlers.WIN.close();
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the headline of a task
*/
akiee.handlers.onblur_sidebar_input = (function onblur_sidebar_input(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_headline.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the body of a task
*/
akiee.handlers.onblur_sidebar_body = (function onblur_sidebar_body(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_body.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the state of a task
*/
akiee.handlers.onblur_sidebar_state = (function onblur_sidebar_state(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_state.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the project of a task
*/
akiee.handlers.onblur_sidebar_project = (function onblur_sidebar_project(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_project.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the scheduled time of a task
*/
akiee.handlers.onblur_sidebar_scheduled = (function onblur_sidebar_scheduled(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_scheduled.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the project of a task
*/
akiee.handlers.onblur_sidebar_tags = (function onblur_sidebar_tags(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,akiee.node.tags_string.call(null,akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_tags.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the project of a task
*/
akiee.handlers.onblur_sidebar_reps = (function onblur_sidebar_reps(ev){
var content = ev.currentTarget.value;
akiee.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,akiee.node.reps_string.call(null,akiee.app_db.sidebar_content.call(null)))){
return akiee.app_db.change_reps.call(null,content,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
* ->
* creates an on-blur-event on the sidebar-headline
*/
akiee.handlers.submit_sidebar_hdln = (function submit_sidebar_hdln(){
return akiee.dom_helpers.get_element.call(null,"sidebar-headline").blur();
});
/**
* ->
* creates an on-blur-event on the sidebar-headline
*/
akiee.handlers.submit_sidebar_body = (function submit_sidebar_body(){
return akiee.dom_helpers.get_element.call(null,"sidebar-body").blur();
});
/**
* ->
* creates an on-blur-event on the sidebar-headline
*/
akiee.handlers.submit_sidebar_state = (function submit_sidebar_state(){
return akiee.dom_helpers.get_element.call(null,"sidebar-task-state").blur();
});
/**
* ->
* creates an on-blur-event on the sidebar-headline
*/
akiee.handlers.submit_sidebar_project = (function submit_sidebar_project(){
return akiee.dom_helpers.get_element.call(null,"sidebar-task-project").blur();
});
/**
* ->
* creates an on-blur-event on the sidebar-headline
*/
akiee.handlers.submit_sidebar_tags = (function submit_sidebar_tags(){
return akiee.dom_helpers.get_element.call(null,"sidebar-tags-form").blur();
});
/**
* ->
* creates an on-blur-event on the sidebar-headline
*/
akiee.handlers.submit_sidebar_reps = (function submit_sidebar_reps(){
return akiee.dom_helpers.get_element.call(null,"sidebar-reps-form").blur();
});
/**
* Event -> GlobalState
* Handles the event when the date changed and changes the GlobalState accordingly
*/
akiee.handlers.handle_change_date = (function handle_change_date(ev){
var date = ev.date;
if(cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"scheduled")){
akiee.app_db.set_editable_BANG_.call(null,null);

return akiee.app_db.change_scheduled.call(null,date,akiee.app_db.sidebar_content.call(null));
} else {
if(cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"deadline")){
akiee.app_db.set_editable_BANG_.call(null,null);

return akiee.app_db.change_deadline.call(null,date,akiee.app_db.sidebar_content.call(null));
} else {
return null;
}
}
});
/**
* KeyEvent -> GlobalState
* Handles the keyevents that are created by js/document
*/
akiee.handlers.handle_keyup = (function handle_keyup(ev){
var mac_QMARK_ = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?true:false);
var ky = ((function (mac_QMARK_){
return (function (p1__5231_SHARP_){
return p1__5231_SHARP_.keyCode;
});})(mac_QMARK_))
;
var ctrl_QMARK_ = ((mac_QMARK_)?((function (mac_QMARK_,ky){
return (function (p1__5232_SHARP_){
return p1__5232_SHARP_.metaKey;
});})(mac_QMARK_,ky))
:((function (mac_QMARK_,ky){
return (function (p1__5233_SHARP_){
return p1__5233_SHARP_.ctrlKey;
});})(mac_QMARK_,ky))
);
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(32));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_editor_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(49))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(97)));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_todo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(50))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(98)));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_doing_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(51))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(99)));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_done_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(52))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(100)));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_all_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(69))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(101)));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_editor_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(13));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_entry_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(70));
if(and__3745__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_search_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__3745__auto__){
return akiee.app_db.entry_QMARK_.call(null);
} else {
return and__3745__auto__;
}
})())){
return akiee.handlers.cancel_enter_task.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__3745__auto__){
return akiee.app_db.search_QMARK_.call(null);
} else {
return and__3745__auto__;
}
})())){
return akiee.handlers.cancel_search.call(null);
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__3745__auto__){
return akiee.app_db.editable.call(null);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.set_editable_BANG_.call(null,null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"hdln"))){
return akiee.handlers.submit_sidebar_hdln.call(null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"tags"))){
return akiee.handlers.submit_sidebar_tags.call(null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"reps"))){
return akiee.handlers.submit_sidebar_reps.call(null);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Register the keyhandlers
*/
akiee.handlers.register_keyevents = (function register_keyevents(){
return goog.events.listen(document,"keyup",akiee.handlers.handle_keyup);
});
akiee.handlers.register_datepicker_events = (function register_datepicker_events(){
$(document).ready((function (){
return $("#sidebar-scheduled-form").datepicker().on("hide",akiee.handlers.handle_change_date);
}));

return $(document).ready((function (){
return $("#sidebar-deadline-form").datepicker().on("hide",akiee.handlers.handle_change_date);
}));
});

//# sourceMappingURL=handlers.js.map