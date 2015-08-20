// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.alert');
goog.require('cljs.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.buttons');
goog.require('re_com.util');
re_com.alert.alert_box_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a unique identifier, usually an integer or string."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.alert_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.alert_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"displayed as a larger heading. One of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":heading"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":body"], null)," should be provided"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed within the body of the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"15px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"padding surounding the alert"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if true, render a close button. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-close"], null)," should be supplied"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),":id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user clicks the close 'X' button. Passed the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)," of the alert to close"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS classes (whitespace separated). Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed. Applied to outer container"], null)], null)], null);
/**
* Displays one alert box. A close button allows the message to be removed
* @param {...*} var_args
*/
re_com.alert.alert_box = (function() { 
var alert_box__delegate = function (p__6433){
var map__6435 = p__6433;
var map__6435__$1 = ((cljs.core.seq_QMARK_.call(null,map__6435))?cljs.core.apply.call(null,cljs.core.hash_map,map__6435):map__6435);
var args = map__6435__$1;
var closeable_QMARK_ = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
var body = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var attr = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var heading = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var on_close = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var alert_type = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002));
var style = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__6435__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.alert.alert_box_args_desc),args,"alert-box"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"alert-box-args-desc","alert-box-args-desc",1901708274,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"alert-box")))].join('')));
}

var close_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"md-close",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__6435,map__6435__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding){
return (function (event){
on_close.call(null,id);

return null;
});})(map__6435,map__6435__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding))
,new cljs.core.Keyword(null,"class","class",-2030961996),"close"], null);
var alert_type__$1 = ((cljs.core._EQ_.call(null,alert_type,new cljs.core.Keyword(null,"info","info",-317069002)))?"success":cljs.core.name.call(null,alert_type));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-alert alert fade in alert-"),cljs.core.str(alert_type__$1),cljs.core.str(" "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(padding)?padding:null)], null),style)], null),attr),(cljs.core.truth_(heading)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(cljs.core.truth_(body)?"10px":"0px")], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null)], null),heading], null),(cljs.core.truth_((function (){var and__3745__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return on_close;
} else {
return and__3745__auto__;
}
})())?close_button:null)], null)], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),body], null),(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core.not.call(null,heading);
if(and__3745__auto__){
var and__3745__auto____$1 = closeable_QMARK_;
if(cljs.core.truth_(and__3745__auto____$1)){
return on_close;
} else {
return and__3745__auto____$1;
}
} else {
return and__3745__auto__;
}
})())?close_button:null)], null)], null):null)], null);
};
var alert_box = function (var_args){
var p__6433 = null;
if (arguments.length > 0) {
var G__6436__i = 0, G__6436__a = new Array(arguments.length -  0);
while (G__6436__i < G__6436__a.length) {G__6436__a[G__6436__i] = arguments[G__6436__i + 0]; ++G__6436__i;}
  p__6433 = new cljs.core.IndexedSeq(G__6436__a,0);
} 
return alert_box__delegate.call(this,p__6433);};
alert_box.cljs$lang$maxFixedArity = 0;
alert_box.cljs$lang$applyTo = (function (arglist__6437){
var p__6433 = cljs.core.seq(arglist__6437);
return alert_box__delegate(p__6433);
});
alert_box.cljs$core$IFn$_invoke$arity$variadic = alert_box__delegate;
return alert_box;
})()
;
re_com.alert.alert_list_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alerts","alerts",-2121664427),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"alerts to render (in the order supplied). Can also be a list of maps"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),":id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user clicks the close 'X' button. Passed the alert's ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style for maximum list height. By default, it grows forever"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"4px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS padding within the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"1px solid lightgrey",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS border style surrounding the list"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed. Applied to outer container"], null)], null)], null);
/**
* Displays a list of alert-box components in a v-box. Sample alerts object:
* [{:id 2
* :alert-type :warning
* :heading "Heading"
* :body "Body"
* :padding "8px"
* :closeable? true}
* {:id 1
* :alert-type :info
* :heading "Heading"
* :body "Body"}]
* @param {...*} var_args
*/
re_com.alert.alert_list = (function() { 
var alert_list__delegate = function (p__6438){
var map__6448 = p__6438;
var map__6448__$1 = ((cljs.core.seq_QMARK_.call(null,map__6448))?cljs.core.apply.call(null,cljs.core.hash_map,map__6448):map__6448);
var args = map__6448__$1;
var attr = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var border_style = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"border-style","border-style",-485574304));
var padding = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),"4px");
var max_height = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var on_close = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var alerts = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"alerts","alerts",-2121664427));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.alert.alert_list_args_desc),args,"alert-list"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"alert-list-args-desc","alert-list-args-desc",-1890367067,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"alert-list")))].join('')));
}

var alerts__$1 = re_com.util.deref_or_value.call(null,alerts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"border","border",1444987323),border_style,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4513__auto__ = ((function (alerts__$1,map__6448,map__6448__$1,args,attr,style,class$,border_style,padding,max_height,on_close,alerts){
return (function iter__6449(s__6450){
return (new cljs.core.LazySeq(null,((function (alerts__$1,map__6448,map__6448__$1,args,attr,style,class$,border_style,padding,max_height,on_close,alerts){
return (function (){
var s__6450__$1 = s__6450;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6450__$1);
if(temp__4126__auto__){
var s__6450__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6450__$2)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,s__6450__$2);
var size__4512__auto__ = cljs.core.count.call(null,c__4511__auto__);
var b__6452 = cljs.core.chunk_buffer.call(null,size__4512__auto__);
if((function (){var i__6451 = (0);
while(true){
if((i__6451 < size__4512__auto__)){
var alert = cljs.core._nth.call(null,c__4511__auto__,i__6451);
cljs.core.chunk_append.call(null,b__6452,(function (){var map__6455 = alert;
var map__6455__$1 = ((cljs.core.seq_QMARK_.call(null,map__6455))?cljs.core.apply.call(null,cljs.core.hash_map,map__6455):map__6455);
var closeable_QMARK_ = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
var padding__$1 = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var body = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var heading = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var alert_type = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var id = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__6457 = (i__6451 + (1));
i__6451 = G__6457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6452),iter__6449.call(null,cljs.core.chunk_rest.call(null,s__6450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6452),null);
}
} else {
var alert = cljs.core.first.call(null,s__6450__$2);
return cljs.core.cons.call(null,(function (){var map__6456 = alert;
var map__6456__$1 = ((cljs.core.seq_QMARK_.call(null,map__6456))?cljs.core.apply.call(null,cljs.core.hash_map,map__6456):map__6456);
var closeable_QMARK_ = cljs.core.get.call(null,map__6456__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
var padding__$1 = cljs.core.get.call(null,map__6456__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var body = cljs.core.get.call(null,map__6456__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var heading = cljs.core.get.call(null,map__6456__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var alert_type = cljs.core.get.call(null,map__6456__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var id = cljs.core.get.call(null,map__6456__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),iter__6449.call(null,cljs.core.rest.call(null,s__6450__$2)));
}
} else {
return null;
}
break;
}
});})(alerts__$1,map__6448,map__6448__$1,args,attr,style,class$,border_style,padding,max_height,on_close,alerts))
,null,null));
});})(alerts__$1,map__6448,map__6448__$1,args,attr,style,class$,border_style,padding,max_height,on_close,alerts))
;
return iter__4513__auto__.call(null,alerts__$1);
})()], null)], null)], null)], null)], null);
};
var alert_list = function (var_args){
var p__6438 = null;
if (arguments.length > 0) {
var G__6458__i = 0, G__6458__a = new Array(arguments.length -  0);
while (G__6458__i < G__6458__a.length) {G__6458__a[G__6458__i] = arguments[G__6458__i + 0]; ++G__6458__i;}
  p__6438 = new cljs.core.IndexedSeq(G__6458__a,0);
} 
return alert_list__delegate.call(this,p__6438);};
alert_list.cljs$lang$maxFixedArity = 0;
alert_list.cljs$lang$applyTo = (function (arglist__6459){
var p__6438 = cljs.core.seq(arglist__6459);
return alert_list__delegate(p__6438);
});
alert_list.cljs$core$IFn$_invoke$arity$variadic = alert_list__delegate;
return alert_list;
})()
;

//# sourceMappingURL=alert.js.map