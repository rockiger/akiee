// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.handlers');
goog.require('cljs.core');
goog.require('akiee.dom_helpers');
goog.require('akiee.app_db');
goog.require('akiee.node');
goog.require('akiee.fileoperations');
goog.require('akiee.rank');
goog.require('goog.events');
akiee.handlers.gui = (function (){var G__11089 = "nw.gui";
return require(G__11089);
})();
cljs.core.enable_console_print_BANG_();
akiee.handlers.WIN = akiee.handlers.gui.Window.get();
/**
* closes the entry box and hides it
*/
akiee.handlers.cancel_enter_task = (function cancel_enter_task(){
var hdln = akiee.dom_helpers.get_element("enter-headline");
hdln.value = "";

return akiee.app_db.switch_entry_BANG_();
});
/**
* closes the search box and resets the search-string in the app-state
*/
akiee.handlers.cancel_search = (function cancel_search(){
return akiee.app_db.switch_search_BANG_();
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
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hdln,"")){
akiee.app_db.add_task_BANG_(tast,hdln,tapr);
} else {
}

akiee.handlers.cancel_enter_task();

return false;
});
/**
* KeyEvent -> GlobalState
* Handles the keyevents that are created by js/document
*/
akiee.handlers.handle_keyup = (function handle_keyup(ev){
var ky = (function (p1__11090_SHARP_){
return p1__11090_SHARP_.keyCode;
});
var ctrl_QMARK_ = ((function (ky){
return (function (p1__11091_SHARP_){
return p1__11091_SHARP_.ctrlKey;
});})(ky))
;
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(32));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_editor_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(49))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(97)));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_todo_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(50))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(98)));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_doing_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(51))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(99)));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_done_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(52))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(100)));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_all_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(69))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(101)));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_editor_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(13));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_entry_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(70));
if(and__3745__auto__){
return ctrl_QMARK_(ev);
} else {
return and__3745__auto__;
}
})())){
return akiee.app_db.switch_search_BANG_();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(27));
if(and__3745__auto__){
return akiee.app_db.entry_QMARK_();
} else {
return and__3745__auto__;
}
})())){
return akiee.handlers.cancel_enter_task();
} else {
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ky(ev),(27));
if(and__3745__auto__){
return akiee.app_db.search_QMARK_();
} else {
return and__3745__auto__;
}
})())){
return akiee.handlers.cancel_search();
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
});
/**
* Register the keyhandlers
*/
akiee.handlers.register_keyevents = (function register_keyevents(){
var G__11095 = document;
var G__11096 = "keyup";
var G__11097 = akiee.handlers.handle_keyup;
return goog.events.listen(G__11095,G__11096,G__11097);
});
/**
* Event ->
* Handles the close event of win
*/
akiee.handlers.handle_close = (function handle_close(ev){
akiee.fileoperations.save_task_file(akiee.node.lon__GT_md(akiee.app_db.nodes()),akiee.fileoperations.task_file_path(),akiee.app_db.changed_QMARK_(),akiee.app_db.set_changed_BANG_);

return akiee.handlers.WIN.close(true);
});
/**
* Event ->
* Handles the close event of win
*/
akiee.handlers.handle_blur = (function handle_blur(ev){
return akiee.fileoperations.save_task_file(akiee.node.lon__GT_md(akiee.app_db.nodes()),akiee.fileoperations.task_file_path(),akiee.app_db.changed_QMARK_(),akiee.app_db.set_changed_BANG_);
});
/**
* Register the window event handlers
*/
akiee.handlers.register_winevents = (function register_winevents(){
var G__11101_11104 = window;
var G__11102_11105 = "blur";
var G__11103_11106 = akiee.handlers.handle_blur;
goog.events.listen(G__11101_11104,G__11102_11105,G__11103_11106);

return akiee.handlers.WIN.on("close",akiee.handlers.handle_close);
});
/**
* Event -> GlobalState
* Consumes the onchange Event ev and changes global filter string for search;
* returns the app-state
*/
akiee.handlers.handle_onchange_search = (function handle_onchange_search(ev){
return akiee.app_db.set_search_string_BANG_(ev.target.value);
});
/**
* Event -> GlobalState
* Consumes the onblur Event ev and changes global lon ;
* returns the app-state
*/
akiee.handlers.handle_blur_editor = (function handle_blur_editor(ev){
var lon = cljs.core.map.cljs$core$IFn$_invoke$arity$2(akiee.node.jsnode__GT_node,akiee.node.array__GT_vec(cljs.core.PersistentVector.EMPTY,(function (){var G__11108 = ev.target.value;
return (akiee.node.parse_file.cljs$core$IFn$_invoke$arity$1 ? akiee.node.parse_file.cljs$core$IFn$_invoke$arity$1(G__11108) : akiee.node.parse_file.call(null,G__11108));
})()));
akiee.app_db.reset_lon_BANG_(akiee.app_db.app_state,lon);

return akiee.app_db.set_changed_BANG_(true);
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes global lon with task to next state;
* returns the app-state
*/
akiee.handlers.handle_onclick_taskstate = (function handle_onclick_taskstate(ev){
var row = ev.currentTarget.parentNode;
var ky = row.dataset.key;
akiee.app_db.next_ts_BANG_(ky);

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
var ky = akiee.handlers.rank_helper(ev);
akiee.rank.down_rank(ky);

return ev.stopPropagation();
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global lon with rank change up-wards
*/
akiee.handlers.handle_onclick_up = (function handle_onclick_up(ev){
var ky = akiee.handlers.rank_helper(ev);
akiee.rank.up_rank(ky);

return ev.stopPropagation();
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state selected
*/
akiee.handlers.onclick_task = (function onclick_task(ev){
var ky = ev.currentTarget.dataset.key;
akiee.app_db.set_selected_BANG_(ky);

return ev.stopPropagation();
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the global state editable
*/
akiee.handlers.onclick_hdln = (function onclick_hdln(ev){
return akiee.app_db.set_editable_BANG_("hdln");
});
/**
* Event -> GlobalState
* Consumes the onclick Event ev and changes the headline of a task
*/
akiee.handlers.onblur_sidebar_input = (function onblur_sidebar_input(ev){
return akiee.app_db.set_editable_BANG_(null);
});
