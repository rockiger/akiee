// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.misc');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.popover');
goog.require('re_com.util');
re_com.misc.input_text_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"text of the input (can be atom or value)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. Passed the current input string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(3),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"ONLY applies to 'input-textarea': the number of rows of text to show"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," function on blur, otherwise on every change (character by character)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"regex",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.regex_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user input is only accepted if it would result in a string that matches this regular expression"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"ONLY applies to super function 'base-input-text': either :input or :textarea"], null)], null);
/**
* Returns markup for a basic text input label
* @param {...*} var_args
*/
re_com.misc.input_text_base = (function() { 
var input_text_base__delegate = function (p__5890){
var map__5896 = p__5890;
var map__5896__$1 = ((cljs.core.seq_QMARK_.call(null,map__5896))?cljs.core.apply.call(null,cljs.core.hash_map,map__5896):map__5896);
var args = map__5896__$1;
var input_type = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var model = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.input_text_args_desc),args,"input-text"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"input-text-args-desc","input-text-args-desc",1120938389,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"input-text")))].join('')));
}

var external_model = reagent.core.atom.call(null,re_com.util.deref_or_value.call(null,model));
var internal_model = reagent.core.atom.call(null,(((cljs.core.deref.call(null,external_model) == null))?"":cljs.core.deref.call(null,external_model)));
return ((function (external_model,internal_model,map__5896,map__5896__$1,args,input_type,model){
return (function() { 
var G__5901__delegate = function (p__5897){
var map__5898 = p__5897;
var map__5898__$1 = ((cljs.core.seq_QMARK_.call(null,map__5898))?cljs.core.apply.call(null,cljs.core.hash_map,map__5898):map__5898);
var args__$1 = map__5898__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var validation_regex = cljs.core.get.call(null,map__5898__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.input_text_args_desc),args__$1,"input-text"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"input-text-args-desc","input-text-args-desc",1120938389,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"input-text")))].join('')));
}

var latest_ext_model = re_com.util.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var showing_QMARK_ = reagent.core.atom.call(null,false);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-input-text-inner "),cljs.core.str((function (){var G__5899 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__5899) {
case "error":
return "has-error ";

break;
case "warning":
return "has-warning ";

break;
default:
return "";

}
})()),cljs.core.str((cljs.core.truth_((function (){var and__3745__auto__ = status;
if(cljs.core.truth_(and__3745__auto__)){
return status_icon_QMARK_;
} else {
return and__3745__auto__;
}
})())?"has-feedback":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_type,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[placeholder,disabled_QMARK___$1,cljs.core.deref.call(null,internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model){
return (function (event){
if(cljs.core.truth_((function (){var and__3745__auto__ = on_change;
if(cljs.core.truth_(and__3745__auto__)){
var and__3745__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3745__auto____$1)){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_model),cljs.core.deref.call(null,external_model));
} else {
return and__3745__auto____$1;
}
} else {
return and__3745__auto__;
}
})())){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model))
,((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"input","input",556931961)))?"text":null),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style),((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(cljs.core.truth_(rows)?rows:(3)):null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__5900_5903 = event.which;
switch (G__5900_5903) {
case (13):
if(cljs.core.truth_(on_change)){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

break;
case (27):
cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model))
,[cljs.core.str("form-control noselect "),cljs.core.str(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model){
return (function (event){
var new_val_5905 = event.target.value;
if(cljs.core.truth_((function (){var and__3745__auto__ = on_change;
if(cljs.core.truth_(and__3745__auto__)){
var and__3745__auto____$1 = cljs.core.not.call(null,disabled_QMARK___$1);
if(and__3745__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find.call(null,validation_regex,new_val_5905);
} else {
return true;
}
} else {
return and__3745__auto____$1;
}
} else {
return and__3745__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,internal_model,new_val_5905);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
on_change.call(null,cljs.core.deref.call(null,internal_model));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model))
]),attr)], null)], null),(cljs.core.truth_((function (){var and__3745__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return status;
} else {
return and__3745__auto__;
}
})())?(cljs.core.truth_(status_tooltip)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"label","label",1718410804),status_tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"md-warning":"md-error")),cljs.core.str(" form-control-feedback")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__3745__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return status;
} else {
return and__3745__auto__;
}
})())?"1":"0")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model){
return (function (event){
if(cljs.core.truth_((function (){var and__3745__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return status;
} else {
return and__3745__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,showing_QMARK_,true);
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model){
return (function (event){
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__5898,map__5898__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__5896,map__5896__$1,args,input_type,model))
], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"130%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"md-warning":"md-error")),cljs.core.str(" form-control-feedback")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"130%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__3745__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return status;
} else {
return and__3745__auto__;
}
})())?"1":"0"),new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)),new cljs.core.Keyword(null,"title","title",636505583),status_tooltip], null)], null)):null)], null)], null);
};
var G__5901 = function (var_args){
var p__5897 = null;
if (arguments.length > 0) {
var G__5906__i = 0, G__5906__a = new Array(arguments.length -  0);
while (G__5906__i < G__5906__a.length) {G__5906__a[G__5906__i] = arguments[G__5906__i + 0]; ++G__5906__i;}
  p__5897 = new cljs.core.IndexedSeq(G__5906__a,0);
} 
return G__5901__delegate.call(this,p__5897);};
G__5901.cljs$lang$maxFixedArity = 0;
G__5901.cljs$lang$applyTo = (function (arglist__5907){
var p__5897 = cljs.core.seq(arglist__5907);
return G__5901__delegate(p__5897);
});
G__5901.cljs$core$IFn$_invoke$arity$variadic = G__5901__delegate;
return G__5901;
})()
;
;})(external_model,internal_model,map__5896,map__5896__$1,args,input_type,model))
};
var input_text_base = function (var_args){
var p__5890 = null;
if (arguments.length > 0) {
var G__5908__i = 0, G__5908__a = new Array(arguments.length -  0);
while (G__5908__i < G__5908__a.length) {G__5908__a[G__5908__i] = arguments[G__5908__i + 0]; ++G__5908__i;}
  p__5890 = new cljs.core.IndexedSeq(G__5908__a,0);
} 
return input_text_base__delegate.call(this,p__5890);};
input_text_base.cljs$lang$maxFixedArity = 0;
input_text_base.cljs$lang$applyTo = (function (arglist__5909){
var p__5890 = cljs.core.seq(arglist__5909);
return input_text_base__delegate(p__5890);
});
input_text_base.cljs$core$IFn$_invoke$arity$variadic = input_text_base__delegate;
return input_text_base;
})()
;
/**
* @param {...*} var_args
*/
re_com.misc.input_text = (function() { 
var input_text__delegate = function (args){
return cljs.core.apply.call(null,re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
};
var input_text = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5910__i = 0, G__5910__a = new Array(arguments.length -  0);
while (G__5910__i < G__5910__a.length) {G__5910__a[G__5910__i] = arguments[G__5910__i + 0]; ++G__5910__i;}
  args = new cljs.core.IndexedSeq(G__5910__a,0);
} 
return input_text__delegate.call(this,args);};
input_text.cljs$lang$maxFixedArity = 0;
input_text.cljs$lang$applyTo = (function (arglist__5911){
var args = cljs.core.seq(arglist__5911);
return input_text__delegate(args);
});
input_text.cljs$core$IFn$_invoke$arity$variadic = input_text__delegate;
return input_text;
})()
;
/**
* @param {...*} var_args
*/
re_com.misc.input_textarea = (function() { 
var input_textarea__delegate = function (args){
return cljs.core.apply.call(null,re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"textarea","textarea",-650375824),args);
};
var input_textarea = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5912__i = 0, G__5912__a = new Array(arguments.length -  0);
while (G__5912__i < G__5912__a.length) {G__5912__a[G__5912__i] = arguments[G__5912__i + 0]; ++G__5912__i;}
  args = new cljs.core.IndexedSeq(G__5912__a,0);
} 
return input_textarea__delegate.call(this,args);};
input_textarea.cljs$lang$maxFixedArity = 0;
input_textarea.cljs$lang$applyTo = (function (arglist__5913){
var args = cljs.core.seq(arglist__5913);
return input_textarea__delegate(args);
});
input_textarea.cljs$core$IFn$_invoke$arity$variadic = input_textarea__delegate;
return input_textarea;
})()
;
re_com.misc.checkbox_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"holds state of the checkbox when it is called"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the checkbox is clicked. Passed the new value of the checkbox"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, user interaction is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS style style map"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied overall to the component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied to the label"], null)], null);
/**
* I return the markup for a checkbox, with an optional RHS label
* @param {...*} var_args
*/
re_com.misc.checkbox = (function() { 
var checkbox__delegate = function (p__5914){
var map__5916 = p__5914;
var map__5916__$1 = ((cljs.core.seq_QMARK_.call(null,map__5916))?cljs.core.apply.call(null,cljs.core.hash_map,map__5916):map__5916);
var args = map__5916__$1;
var label_style = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var label_class = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var style = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var disabled_QMARK_ = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_change = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__5916__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.checkbox_args_desc),args,"checkbox"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"checkbox-args-desc","checkbox-args-desc",-544954865,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"checkbox")))].join('')));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value.call(null,model);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__5916,map__5916__$1,args,label_style,label_class,style,disabled_QMARK_,label,on_change,model){
return (function (){
if(cljs.core.truth_((function (){var and__3745__auto__ = on_change;
if(cljs.core.truth_(and__3745__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__3745__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,model__$1));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__5916,map__5916__$1,args,label_style,label_class,style,disabled_QMARK_,label,on_change,model))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-checkbox",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),model__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5916,map__5916__$1,args,label_style,label_class,style,disabled_QMARK_,label,on_change,model){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5916,map__5916__$1,args,label_style,label_class,style,disabled_QMARK_,label,on_change,model))
], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5916,map__5916__$1,args,label_style,label_class,style,disabled_QMARK_,label,on_change,model){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5916,map__5916__$1,args,label_style,label_class,style,disabled_QMARK_,label,on_change,model))
,new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style)], null),label], null):null)], null)], null);
};
var checkbox = function (var_args){
var p__5914 = null;
if (arguments.length > 0) {
var G__5917__i = 0, G__5917__a = new Array(arguments.length -  0);
while (G__5917__i < G__5917__a.length) {G__5917__a[G__5917__i] = arguments[G__5917__i + 0]; ++G__5917__i;}
  p__5914 = new cljs.core.IndexedSeq(G__5917__a,0);
} 
return checkbox__delegate.call(this,p__5914);};
checkbox.cljs$lang$maxFixedArity = 0;
checkbox.cljs$lang$applyTo = (function (arglist__5918){
var p__5914 = cljs.core.seq(arglist__5918);
return checkbox__delegate(p__5914);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;
re_com.misc.radio_button_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"selected value of the radio button group. See also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)," then this radio button is selected"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the radio button is clicked. Passed ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the radio button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"radio button style map"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied overall to the component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied to the label"], null)], null);
/**
* I return the markup for a radio button, with an optional RHS label
* @param {...*} var_args
*/
re_com.misc.radio_button = (function() { 
var radio_button__delegate = function (p__5919){
var map__5921 = p__5919;
var map__5921__$1 = ((cljs.core.seq_QMARK_.call(null,map__5921))?cljs.core.apply.call(null,cljs.core.hash_map,map__5921):map__5921);
var args = map__5921__$1;
var label_style = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var label_class = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var style = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var disabled_QMARK_ = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__5921__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.radio_button_args_desc),args,"radio-button"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"radio-button-args-desc","radio-button-args-desc",1451546512,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"radio-button")))].join('')));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value.call(null,model);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__5921,map__5921__$1,args,label_style,label_class,style,disabled_QMARK_,label,value,on_change,model){
return (function (){
if(cljs.core.truth_((function (){var and__3745__auto__ = on_change;
if(cljs.core.truth_(and__3745__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__3745__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,model__$1));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__5921,map__5921__$1,args,label_style,label_class,style,disabled_QMARK_,label,value,on_change,model))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-radio-button",new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,model__$1,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5921,map__5921__$1,args,label_style,label_class,style,disabled_QMARK_,label,value,on_change,model){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5921,map__5921__$1,args,label_style,label_class,style,disabled_QMARK_,label,value,on_change,model))
], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5921,map__5921__$1,args,label_style,label_class,style,disabled_QMARK_,label,value,on_change,model){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__5921,map__5921__$1,args,label_style,label_class,style,disabled_QMARK_,label,value,on_change,model))
,new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style)], null),label], null):null)], null)], null);
};
var radio_button = function (var_args){
var p__5919 = null;
if (arguments.length > 0) {
var G__5922__i = 0, G__5922__a = new Array(arguments.length -  0);
while (G__5922__i < G__5922__a.length) {G__5922__a[G__5922__i] = arguments[G__5922__i + 0]; ++G__5922__i;}
  p__5919 = new cljs.core.IndexedSeq(G__5922__a,0);
} 
return radio_button__delegate.call(this,p__5919);};
radio_button.cljs$lang$maxFixedArity = 0;
radio_button.cljs$lang$applyTo = (function (arglist__5923){
var p__5919 = cljs.core.seq(arglist__5923);
return radio_button__delegate(p__5919);
});
radio_button.cljs$core$IFn$_invoke$arity$variadic = radio_button__delegate;
return radio_button;
})()
;
re_com.misc.slider_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the slider is moved. Passed the new value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the minimum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(100),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(1),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"step value between min and max"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"400px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't change the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* Returns markup for an HTML5 slider input
*/
re_com.misc.slider = (function slider(){
return (function() { 
var G__5928__delegate = function (p__5926){
var map__5927 = p__5926;
var map__5927__$1 = ((cljs.core.seq_QMARK_.call(null,map__5927))?cljs.core.apply.call(null,cljs.core.hash_map,map__5927):map__5927);
var args = map__5927__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var step = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var model = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var width = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var style = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max = cljs.core.get.call(null,map__5927__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.slider_args_desc),args,"slider"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"slider-args-desc","slider-args-desc",856675410,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"slider")))].join('')));
}

var model__$1 = re_com.util.deref_or_value.call(null,model);
var min__$1 = re_com.util.deref_or_value.call(null,min);
var max__$1 = re_com.util.deref_or_value.call(null,max);
var step__$1 = re_com.util.deref_or_value.call(null,step);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],[min__$1,disabled_QMARK___$1,model__$1,"range",cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"400px"),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"default")], null),style),max__$1,[cljs.core.str("rc-slider "),cljs.core.str(class$)].join(''),((function (model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__5927,map__5927__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max){
return (function (event){
on_change.call(null,Number(event.target.value));

return null;
});})(model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__5927,map__5927__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max))
,step__$1]),attr)], null)], null);
};
var G__5928 = function (var_args){
var p__5926 = null;
if (arguments.length > 0) {
var G__5929__i = 0, G__5929__a = new Array(arguments.length -  0);
while (G__5929__i < G__5929__a.length) {G__5929__a[G__5929__i] = arguments[G__5929__i + 0]; ++G__5929__i;}
  p__5926 = new cljs.core.IndexedSeq(G__5929__a,0);
} 
return G__5928__delegate.call(this,p__5926);};
G__5928.cljs$lang$maxFixedArity = 0;
G__5928.cljs$lang$applyTo = (function (arglist__5930){
var p__5926 = cljs.core.seq(arglist__5930);
return G__5928__delegate(p__5926);
});
G__5928.cljs$core$IFn$_invoke$arity$variadic = G__5928__delegate;
return G__5928;
})()
;
});
re_com.misc.progress_bar_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider. A number between 0 and 100"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"striped?","striped?",-797214979),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the progress section is a set of animated stripes"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* Render a bootstrap styled progress bar
* @param {...*} var_args
*/
re_com.misc.progress_bar = (function() { 
var progress_bar__delegate = function (p__5931){
var map__5933 = p__5931;
var map__5933__$1 = ((cljs.core.seq_QMARK_.call(null,map__5933))?cljs.core.apply.call(null,cljs.core.hash_map,map__5933):map__5933);
var args = map__5933__$1;
var attr = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var striped_QMARK_ = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"striped?","striped?",-797214979));
var width = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"width","width",-384071477),"100%");
var model = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.progress_bar_args_desc),args,"progress-bar"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"progress-bar-args-desc","progress-bar-args-desc",-1564506967,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"progress-bar")))].join('')));
}

var model__$1 = re_com.util.deref_or_value.call(null,model);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-progress-bar progress "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style)], null),attr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("progress-bar "),cljs.core.str((cljs.core.truth_(striped_QMARK_)?"progress-bar-striped active":null))].join(''),new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(model__$1),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),"none"], null)], null),[cljs.core.str(model__$1),cljs.core.str("%")].join('')], null)], null)], null);
};
var progress_bar = function (var_args){
var p__5931 = null;
if (arguments.length > 0) {
var G__5934__i = 0, G__5934__a = new Array(arguments.length -  0);
while (G__5934__i < G__5934__a.length) {G__5934__a[G__5934__i] = arguments[G__5934__i + 0]; ++G__5934__i;}
  p__5931 = new cljs.core.IndexedSeq(G__5934__a,0);
} 
return progress_bar__delegate.call(this,p__5931);};
progress_bar.cljs$lang$maxFixedArity = 0;
progress_bar.cljs$lang$applyTo = (function (arglist__5935){
var p__5931 = cljs.core.seq(arglist__5935);
return progress_bar__delegate(p__5931);
});
progress_bar.cljs$core$IFn$_invoke$arity$variadic = progress_bar__delegate;
return progress_bar;
})()
;
re_com.misc.throbber_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.throbber_size_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.throbber_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"default","default",-1987822328),"#999",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS color"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* Render an animated throbber using CSS
* @param {...*} var_args
*/
re_com.misc.throbber = (function() { 
var throbber__delegate = function (p__5936){
var map__5939 = p__5936;
var map__5939__$1 = ((cljs.core.seq_QMARK_.call(null,map__5939))?cljs.core.apply.call(null,cljs.core.hash_map,map__5939):map__5939);
var args = map__5939__$1;
var attr = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var color = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.throbber_args_desc),args,"throbber"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"throbber-args-desc","throbber-args-desc",-1298219345,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"throbber")))].join('')));
}

var seg = ((function (map__5939,map__5939__$1,args,attr,style,class$,color,size){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null):null)], null);
});})(map__5939,map__5939__$1,args,attr,style,class$,color,size))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-throbber loader "),cljs.core.str((function (){var G__5940 = (((size instanceof cljs.core.Keyword))?size.fqn:null);
switch (G__5940) {
case "large":
return "large ";

break;
case "small":
return "small ";

break;
case "regular":
return "";

break;
default:
return "";

}
})()),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style], null),attr),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null)], null)], null);
};
var throbber = function (var_args){
var p__5936 = null;
if (arguments.length > 0) {
var G__5942__i = 0, G__5942__a = new Array(arguments.length -  0);
while (G__5942__i < G__5942__a.length) {G__5942__a[G__5942__i] = arguments[G__5942__i + 0]; ++G__5942__i;}
  p__5936 = new cljs.core.IndexedSeq(G__5942__a,0);
} 
return throbber__delegate.call(this,p__5936);};
throbber.cljs$lang$maxFixedArity = 0;
throbber.cljs$lang$applyTo = (function (arglist__5943){
var p__5936 = cljs.core.seq(arglist__5943);
return throbber__delegate(p__5936);
});
throbber.cljs$core$IFn$_invoke$arity$variadic = throbber__delegate;
return throbber;
})()
;

//# sourceMappingURL=misc.js.map