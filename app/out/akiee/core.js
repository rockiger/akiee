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
cljs.core.enable_console_print_BANG_.call(null);
akiee.core.modifier = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?"Cmd":"Ctrl");
/**
* String String String -> Component
* Consumes the text tx, the id and the title t, the state,
* the test function tfn, the on-click function onfn of the button;
* produces the component for the button.
*/
akiee.core.list_state_button = (function list_state_button(tx,id,t,state,tfn,onfn){
var active_QMARK_ = (((cljs.core._EQ_.call(null,tfn.call(null),state)) && (cljs.core.not.call(null,akiee.app_db.editor_QMARK_.call(null))))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.navbar-btn.btn-state.toolbar-button","button.btn.btn-default.navbar-btn.btn-state.toolbar-button",-799489622),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"class","class",-2030961996),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),onfn], null),tx], null);
});
akiee.core.todo_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Todo","show-todo",[cljs.core.str(akiee.core.modifier),cljs.core.str("+1")].join(''),akiee.constants.TODO,akiee.app_db.list_state,akiee.app_db.switch_todo_BANG_], null);
akiee.core.doing_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Doing","show-doing",[cljs.core.str(akiee.core.modifier),cljs.core.str("+2 / "),cljs.core.str(akiee.core.modifier),cljs.core.str("+Space")].join(''),akiee.constants.DOING,akiee.app_db.list_state,akiee.app_db.switch_doing_BANG_], null);
akiee.core.done_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Done","show-done",[cljs.core.str(akiee.core.modifier),cljs.core.str("+3")].join(''),akiee.constants.DONE,akiee.app_db.list_state,akiee.app_db.switch_done_BANG_], null);
akiee.core.board_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.list_state_button,"Board","show-all",[cljs.core.str(akiee.core.modifier),cljs.core.str("+4")].join(''),akiee.constants.ALL,akiee.app_db.list_state,akiee.app_db.switch_all_BANG_], null);
/**
* String String String -> Component
* Consumes the icon name in, the id and title t of the button, the test function tfn?,
* the on-click function onfn of the button.
* produces the component for the button.
*/
akiee.core.switch_button = (function switch_button(in$,id,t,tfn_QMARK_,onfn){
var icon_name = [cljs.core.str("fa-"),cljs.core.str(in$)].join('');
var active_QMARK_ = (cljs.core.truth_(tfn_QMARK_.call(null))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.navbar-btn.btn-square.toolbar-button","button.btn.btn-default.navbar-btn.btn-square.toolbar-button",-1577311189),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"class","class",-2030961996),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),onfn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-fw","span.fa.fa-fw",150090794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon_name], null)], null)], null);
});
akiee.core.editor_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.switch_button,"code","show-editor",[cljs.core.str(akiee.core.modifier),cljs.core.str("+E / "),cljs.core.str(akiee.core.modifier),cljs.core.str("+Space")].join(''),akiee.app_db.editor_QMARK_,akiee.app_db.switch_editor_BANG_], null);
akiee.core.search_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.switch_button,"search","show-searchbox",[cljs.core.str(akiee.core.modifier),cljs.core.str("+F")].join(''),akiee.app_db.search_QMARK_,akiee.app_db.switch_search_BANG_], null);
akiee.core.entry_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.switch_button,"plus","show-enter-task",[cljs.core.str(akiee.core.modifier),cljs.core.str("+Enter")].join(''),akiee.app_db.entry_QMARK_,akiee.app_db.switch_entry_BANG_], null);
akiee.core.entry_close = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hover-button","button.hover-button",-1848477294),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"close-app",new cljs.core.Keyword(null,"title","title",636505583),"Alt-F4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_close], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"./css/img/window-close.svg"], null)], null)], null);
/**
* -> Component
* The toolbar for changing the state of the Akiee
*/
akiee.core.toolbar = (function toolbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav#toolbar.navbar.navbar-default","nav#toolbar.navbar.navbar-default",-1269321238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-fluid.container-fluid","div#toolbar-fluid.container-fluid",-1893262592),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-inside.navbar-flex","div#toolbar-inside.navbar-flex",1775857984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#taskbuttons.btn-group","div#taskbuttons.btn-group",510226813),akiee.core.todo_button,akiee.core.doing_button,akiee.core.done_button], null),akiee.core.board_button,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-spacer.spacer","div#toolbar-spacer.spacer",656726554)], null),akiee.core.editor_switch,akiee.core.search_switch,akiee.core.entry_switch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#close","div#close",837197730),akiee.core.entry_close], null)], null)], null)], null);
});
/**
* ListOf* String -> Component
* Consumes a list of anything loa and a name; produces the component of a select field.
*/
akiee.core.select = (function select(loa,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#enter-task-status.form-control","select#enter-task-status.form-control",-1849790969),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"Inbox"], null),(function (){var iter__5476__auto__ = (function iter__14412(s__14413){
return (new cljs.core.LazySeq(null,(function (){
var s__14413__$1 = s__14413;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14413__$1);
if(temp__4126__auto__){
var s__14413__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14413__$2)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,s__14413__$2);
var size__5475__auto__ = cljs.core.count.call(null,c__5474__auto__);
var b__14415 = cljs.core.chunk_buffer.call(null,size__5475__auto__);
if((function (){var i__14414 = (0);
while(true){
if((i__14414 < size__5475__auto__)){
var a = cljs.core._nth.call(null,c__5474__auto__,i__14414);
cljs.core.chunk_append.call(null,b__14415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),a], null));

var G__14416 = (i__14414 + (1));
i__14414 = G__14416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14415),iter__14412.call(null,cljs.core.chunk_rest.call(null,s__14413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14415),null);
}
} else {
var a = cljs.core.first.call(null,s__14413__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),a], null),iter__14412.call(null,cljs.core.rest.call(null,s__14413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__.call(null,loa);
})()], null);
});
/**
* ListOfTaskState -> Component
* Consumes the a list of taskstate lot;
* produces the component of the select field for the state of the new task.
*/
akiee.core.enter_task_status = (function enter_task_status(lot){
return akiee.core.select.call(null,lot,"task-status");
});
/**
* ListofString -> Component
* Consumes a list of string los; produces the component for the project select.
*/
akiee.core.enter_task_project = (function enter_task_project(los){
return akiee.core.select.call(null,los,"task-project");
});
/**
* -> Component
* The entry form for entering tasks
*/
akiee.core.enter_task = (function enter_task(){
var show_QMARK_ = (cljs.core.truth_(akiee.app_db.entry_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"open"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"closed"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#enter-task-div.container-fluid.slider","div#enter-task-div.container-fluid.slider",721004260),show_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#enter-task","form#enter-task",-1146655825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.handle_enter_task], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#enter-headline.form-control","input#enter-headline.form-control",-66544980),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Headline",new cljs.core.Keyword(null,"name","name",1843675177),"headline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task_status,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO","DOING","DONE"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task_project,akiee.app_db.projects.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-on-grey","button.btn.btn-default.btn-on-grey",-1504773694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#cancel-enter-task.btn.btn-link","button#cancel-enter-task.btn.btn-link",1812524404),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.cancel_enter_task], null),"Cancel"], null)], null)], null);
});
/**
* -> Component
* The entry form for searching tasks
*/
akiee.core.search = (function search(){
var show_QMARK_ = (cljs.core.truth_(akiee.app_db.search_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"open"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"closed"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#search-form.slider","div#search-form.slider",-201102750),show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#search-input.form-control.mvx-search","input#search-input.form-control.mvx-search",1089613138),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),akiee.handlers.handle_onchange_search], null)], null)], null);
});
/**
* -> Component
* The textarea to directly edit the task list in markdown
*/
akiee.core.editor = (function editor(){
var show_QMARK_ = (cljs.core.truth_(akiee.app_db.editor_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editor","div#editor",-1877510501),show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#editor-area","textarea#editor-area",1920534903),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.handle_blur_editor], null)], null)], null);
});
akiee.core.task = (function task(t){
var class$ = ((cljs.core._EQ_.call(null,akiee.app_db.selected.call(null),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(t)))?"selected":"");
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_task,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.taskstate","td.taskstate",-1362714769),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.handle_onclick_taskstate], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-button"], null),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.project-tag.label","span.project-tag.label",-2147232299),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rank","td.rank",134361831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-chevron-up.hover-button","span.fa.fa-chevron-up.hover-button",-92749066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.handle_onclick_up], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rank","td.rank",134361831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-chevron-down.hover-button","span.fa.fa-chevron-down.hover-button",-1276690443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.handle_onclick_down], null)], null)], null)], null);
});
akiee.core.empty_message = (function empty_message(){
if((cljs.core.empty_QMARK_.call(null,akiee.app_db.tasks.call(null,akiee.constants.TODO))) && (cljs.core.empty_QMARK_.call(null,akiee.app_db.tasks.call(null,akiee.constants.DOING))) && (cljs.core.empty_QMARK_.call(null,akiee.app_db.tasks.call(null,akiee.constants.DONE)))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-list","div.empty-list",-361710953),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome!"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Start with adding a new task by clicking on ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-plus","span.glyphicon.glyphicon-plus",1224825058)], null),"or press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+Enter"], null),"."], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Work through your tasks by clicking on ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Todo"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Doing"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Done"], null)," or pressing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+1"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+2"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+3"], null),"."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Get a complete overview of all your task by clicking on ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Board"], null)," or pressing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+4"], null),"."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Search for tasks by clicking on ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-search","span.glyphicon.glyphicon-search",-1963773053)], null)," or press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+F"], null),"."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Edit your tasks directly in markdown by clicking on ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-list-alt","span.glyphicon.glyphicon-list-alt",1363619591)], null)," or press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+E"], null),"."], null)], null);
} else {
if((cljs.core._EQ_.call(null,akiee.app_db.list_state.call(null),akiee.constants.TODO)) && (cljs.core.empty_QMARK_.call(null,akiee.app_db.tasks.call(null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-list","div.empty-list",-361710953),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"No TODOs here"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Add a new task by clicking on ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-plus","span.glyphicon.glyphicon-plus",1224825058)], null),"or press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+Enter"], null),"."], null)], null);
} else {
if((cljs.core._EQ_.call(null,akiee.app_db.list_state.call(null),akiee.constants.DOING)) && (cljs.core.empty_QMARK_.call(null,akiee.app_db.tasks.call(null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-list","div.empty-list",-361710953),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"All DOINGs are done!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Get some new tasks by clicking on TODO or press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+1"], null),"."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Add a new task by clicking on ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-plus","span.glyphicon.glyphicon-plus",1224825058)], null)," or press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+Enter"], null),"."], null)], null);
} else {
if((cljs.core._EQ_.call(null,akiee.app_db.list_state.call(null),akiee.constants.DONE)) && (cljs.core.empty_QMARK_.call(null,akiee.app_db.tasks.call(null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-list","div.empty-list",-361710953),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Nothing DONE yet"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Start working by clicking on DOING or pressing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Ctrl+2"], null),"."], null)], null);
} else {
return null;
}
}
}
}
});
akiee.core.task_table = (function task_table(tb){
if(cljs.core.empty_QMARK_.call(null,tb)){
return akiee.core.empty_message.call(null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,tb))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5476__auto__ = (function iter__14421(s__14422){
return (new cljs.core.LazySeq(null,(function (){
var s__14422__$1 = s__14422;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14422__$1);
if(temp__4126__auto__){
var s__14422__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14422__$2)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,s__14422__$2);
var size__5475__auto__ = cljs.core.count.call(null,c__5474__auto__);
var b__14424 = cljs.core.chunk_buffer.call(null,size__5475__auto__);
if((function (){var i__14423 = (0);
while(true){
if((i__14423 < size__5475__auto__)){
var t = cljs.core._nth.call(null,c__5474__auto__,i__14423);
cljs.core.chunk_append.call(null,b__14424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task,t], null));

var G__14425 = (i__14423 + (1));
i__14423 = G__14425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14424),iter__14421.call(null,cljs.core.chunk_rest.call(null,s__14422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14424),null);
}
} else {
var t = cljs.core.first.call(null,s__14422__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task,t], null),iter__14421.call(null,cljs.core.rest.call(null,s__14422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__.call(null,tb);
})()], null)], null);
}
});
akiee.core.task_list = (function task_list(){
var show_QMARK_ = ((cljs.core.not.call(null,akiee.app_db.editor_QMARK_.call(null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null));
var sidebar_QMARK_ = (cljs.core.truth_(akiee.app_db.selected.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),""], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"closed"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#tasks","div#tasks",-674021829),show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#list","div#list",205002526),((cljs.core._EQ_.call(null,akiee.app_db.list_state.call(null),akiee.constants.ALL))?(function (){var states = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO","DOING","DONE"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.kanban-row","tr.kanban-row",1298728683),(function (){var iter__5476__auto__ = ((function (states,show_QMARK_,sidebar_QMARK_){
return (function iter__14430(s__14431){
return (new cljs.core.LazySeq(null,((function (states,show_QMARK_,sidebar_QMARK_){
return (function (){
var s__14431__$1 = s__14431;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14431__$1);
if(temp__4126__auto__){
var s__14431__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14431__$2)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,s__14431__$2);
var size__5475__auto__ = cljs.core.count.call(null,c__5474__auto__);
var b__14433 = cljs.core.chunk_buffer.call(null,size__5475__auto__);
if((function (){var i__14432 = (0);
while(true){
if((i__14432 < size__5475__auto__)){
var tb = cljs.core._nth.call(null,c__5474__auto__,i__14432);
cljs.core.chunk_append.call(null,b__14433,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.kanban-column","td.kanban-column",-62293854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("kb-"),cljs.core.str(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,tb)))].join('')], null),akiee.core.task_table.call(null,tb)], null));

var G__14434 = (i__14432 + (1));
i__14432 = G__14434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14433),iter__14430.call(null,cljs.core.chunk_rest.call(null,s__14431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14433),null);
}
} else {
var tb = cljs.core.first.call(null,s__14431__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.kanban-column","td.kanban-column",-62293854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("kb-"),cljs.core.str(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,tb)))].join('')], null),akiee.core.task_table.call(null,tb)], null),iter__14430.call(null,cljs.core.rest.call(null,s__14431__$2)));
}
} else {
return null;
}
break;
}
});})(states,show_QMARK_,sidebar_QMARK_))
,null,null));
});})(states,show_QMARK_,sidebar_QMARK_))
;
return iter__5476__auto__.call(null,akiee.app_db.tasks.call(null));
})()], null)], null)], null);
})():akiee.core.task_table.call(null,akiee.app_db.tasks.call(null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside#task-sidebar","aside#task-sidebar",-1491675059),sidebar_QMARK_,akiee.sidebar.sidebar.call(null)], null)], null);
});
/**
* -> Component
* Produces the base comment
*/
akiee.core.app = (function app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task_list], null)], null);
});
akiee.core.big_bang = (function big_bang(){
akiee.handlers.register_keyevents.call(null);

akiee.handlers.register_winevents.call(null);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.app], null),document.getElementById("root"));

akiee.sidebar.datepicker_config.call(null);

akiee.handlers.register_datepicker_events.call(null);

return akiee.handlers.register_click_links.call(null);
});
akiee.core.big_bang.call(null);

//# sourceMappingURL=core.js.map