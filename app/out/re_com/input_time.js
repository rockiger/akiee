// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.input_time');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.text');
goog.require('re_com.validate');
goog.require('reagent.core');
re_com.input_time.time__GT_mins = (function time__GT_mins(time){
return cljs.core.rem.call(null,time,(100));
});
re_com.input_time.time__GT_hrs = (function time__GT_hrs(time){
return cljs.core.quot.call(null,time,(100));
});
/**
* Parse the string 's' to a valid int. On parse failure, return 0
*/
re_com.input_time.to_int = (function to_int(s){
var val = parseInt(s);
if(cljs.core.truth_(isNaN(val))){
return (0);
} else {
return val;
}
});
/**
* Return a time integer from a triple int vector of form  [H  _  M]
*/
re_com.input_time.triple__GT_time = (function triple__GT_time(p__6063){
var vec__6065 = p__6063;
var hr = cljs.core.nth.call(null,vec__6065,(0),null);
var _ = cljs.core.nth.call(null,vec__6065,(1),null);
var mi = cljs.core.nth.call(null,vec__6065,(2),null);
return ((hr * (100)) + mi);
});
re_com.input_time.triple_seeking_re = /^(\d{0,2})()()$|^(\d{0,1})(:{0,1})(\d{0,2})$|^(\d{0,2})(:{0,1})(\d{0,2})$/;
re_com.input_time.extract_triple_from_text = (function extract_triple_from_text(text){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.rest.call(null,cljs.core.re_matches.call(null,re_com.input_time.triple_seeking_re,text)));
});
/**
* return as a time int, the contents of 'text'
*/
re_com.input_time.text__GT_time = (function text__GT_time(text){
return re_com.input_time.triple__GT_time.call(null,cljs.core.map.call(null,re_com.input_time.to_int,re_com.input_time.extract_triple_from_text.call(null,text)));
});
/**
* return a string of format HH:MM for 'time'
*/
re_com.input_time.time__GT_text = (function time__GT_text(time){
var hrs = re_com.input_time.time__GT_hrs.call(null,time);
var mins = re_com.input_time.time__GT_mins.call(null,time);
return [cljs.core.str(re_com.util.pad_zero_number.call(null,hrs,(2))),cljs.core.str(":"),cljs.core.str(re_com.util.pad_zero_number.call(null,mins,(2)))].join('');
});
/**
* Return true if text passes basic time validation.
* Can't do to much validation because user input might not be finished.
* Why?  On the way to entering 6:30, you must pass through the invalid state of '63'.
* So we only really check against the triple-extracting regular expression
*/
re_com.input_time.valid_text_QMARK_ = (function valid_text_QMARK_(text){
return cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,re_com.input_time.extract_triple_from_text.call(null,text)));
});
re_com.input_time.valid_time_QMARK_ = (function valid_time_QMARK_(time){
if((time == null)){
return false;
} else {
if(((0) > time)){
return false;
} else {
if(((60) < re_com.input_time.time__GT_mins.call(null,time))){
return false;
} else {
return true;

}
}
}
});
re_com.input_time.validate_arg_times = (function validate_arg_times(model,minimum,maximum){
if((typeof model === 'number') && (re_com.input_time.valid_time_QMARK_.call(null,model))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("[input-time] given an invalid :model - "),cljs.core.str(model)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"model","model",1971684742,null)),cljs.core.list(new cljs.core.Symbol(null,"valid-time?","valid-time?",-631851804,null),new cljs.core.Symbol(null,"model","model",1971684742,null)))))].join('')));
}

if((typeof minimum === 'number') && (re_com.input_time.valid_time_QMARK_.call(null,minimum))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("[input-time] given an invalid :minimum - "),cljs.core.str(minimum)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"minimum","minimum",19525468,null)),cljs.core.list(new cljs.core.Symbol(null,"valid-time?","valid-time?",-631851804,null),new cljs.core.Symbol(null,"minimum","minimum",19525468,null)))))].join('')));
}

if((typeof maximum === 'number') && (re_com.input_time.valid_time_QMARK_.call(null,maximum))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("[input-time] given an invalid :maximum - "),cljs.core.str(maximum)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"maximum","maximum",-2080555055,null)),cljs.core.list(new cljs.core.Symbol(null,"valid-time?","valid-time?",-631851804,null),new cljs.core.Symbol(null,"maximum","maximum",-2080555055,null)))))].join('')));
}

if((minimum <= maximum)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("[input-time] :minimum "),cljs.core.str(minimum),cljs.core.str(" > :maximum  "),cljs.core.str(maximum)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"minimum","minimum",19525468,null),new cljs.core.Symbol(null,"maximum","maximum",-2080555055,null))))].join('')));
}

return true;
});
/**
* Validate the time supplied.
* Return either the time or, if it is invalid, return something valid
*/
re_com.input_time.force_valid_time = (function force_valid_time(time,min,max,previous){
if((time == null)){
return previous;
} else {
if(!(re_com.input_time.valid_time_QMARK_.call(null,time))){
return previous;
} else {
if((time < min)){
return min;
} else {
if((max < time)){
return max;
} else {
return time;

}
}
}
}
});
/**
* Called each time the <input> field gets a keypress, or paste operation.
* Rests  the text-model only if the new text is valid
*/
re_com.input_time.on_new_keypress = (function on_new_keypress(event,text_model){
var current_text = event.target.value;
if(re_com.input_time.valid_text_QMARK_.call(null,current_text)){
return cljs.core.reset_BANG_.call(null,text_model,current_text);
} else {
return null;
}
});
/**
* When Enter is pressed, force the component to lose focus
*/
re_com.input_time.lose_focus_if_enter = (function lose_focus_if_enter(ev){
if(cljs.core._EQ_.call(null,ev.keyCode,(13))){
ev.target.blur();

return true;
} else {
return null;
}
});
/**
* Called when the field looses focus.
* Re-validate what has been entered, comparing to mins and maxs.
* Invoke the callback as necessary
*/
re_com.input_time.on_defocus = (function on_defocus(text_model,min,max,callback,previous_val){
var time = re_com.input_time.text__GT_time.call(null,cljs.core.deref.call(null,text_model));
var time__$1 = re_com.input_time.force_valid_time.call(null,time,min,max,previous_val);
cljs.core.reset_BANG_.call(null,text_model,re_com.input_time.time__GT_text.call(null,time__$1));

if(cljs.core.truth_((function (){var and__3745__auto__ = callback;
if(cljs.core.truth_(and__3745__auto__)){
return cljs.core.not_EQ_.call(null,time__$1,previous_val);
} else {
return and__3745__auto__;
}
})())){
return callback.call(null,time__$1);
} else {
return null;
}
});
re_com.input_time.input_time_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a time in integer form. e.g. '09:30am' is 930"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user entry completes and value is new. Passed new value as integer"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time less than this value"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(2359),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time more than this value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, user input is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, a clock icon will be displayed to the right of input field"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, input filed is displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for width of the input box (excluding the icon if present)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style. e.g. {:color \"red\" :width \"50px\"}"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* I return the markup for an input box which will accept and validate times.
* Parameters - refer input-time-args above
* @param {...*} var_args
*/
re_com.input_time.input_time = (function() { 
var input_time__delegate = function (p__6066){
var map__6070 = p__6066;
var map__6070__$1 = ((cljs.core.seq_QMARK_.call(null,map__6070))?cljs.core.apply.call(null,cljs.core.hash_map,map__6070):map__6070);
var args = map__6070__$1;
var attr = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_change = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var maximum = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
var minimum = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
var model = cljs.core.get.call(null,map__6070__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.input_time.input_time_args_desc),args,"input-time"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"input-time-args-desc","input-time-args-desc",1354970820,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"input-time")))].join('')));
}

if(re_com.input_time.validate_arg_times.call(null,re_com.util.deref_or_value.call(null,model),minimum,maximum)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-arg-times","validate-arg-times",-1219832325,null),cljs.core.list(new cljs.core.Symbol(null,"deref-or-value","deref-or-value",-1996332252,null),new cljs.core.Symbol(null,"model","model",1971684742,null)),new cljs.core.Symbol(null,"minimum","minimum",19525468,null),new cljs.core.Symbol(null,"maximum","maximum",-2080555055,null))))].join('')));
}

var deref_model = re_com.util.deref_or_value.call(null,model);
var text_model = reagent.core.atom.call(null,re_com.input_time.time__GT_text.call(null,deref_model));
var previous_model = reagent.core.atom.call(null,deref_model);
return ((function (deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model){
return (function() { 
var G__6073__delegate = function (p__6071){
var map__6072 = p__6071;
var map__6072__$1 = ((cljs.core.seq_QMARK_.call(null,map__6072))?cljs.core.apply.call(null,cljs.core.hash_map,map__6072):map__6072);
var args__$1 = map__6072__$1;
var show_icon_QMARK_ = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459));
var hide_border_QMARK_ = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var disabled_QMARK_ = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var height = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var maximum__$1 = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
var minimum__$1 = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
var model__$1 = cljs.core.get.call(null,map__6072__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.input_time.input_time_args_desc),args__$1,"input-time"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"input-time-args-desc","input-time-args-desc",1354970820,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"input-time")))].join('')));
}

if(re_com.input_time.validate_arg_times.call(null,re_com.util.deref_or_value.call(null,model__$1),minimum__$1,maximum__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-arg-times","validate-arg-times",-1219832325,null),cljs.core.list(new cljs.core.Symbol(null,"deref-or-value","deref-or-value",-1996332252,null),new cljs.core.Symbol(null,"model","model",1971684742,null)),new cljs.core.Symbol(null,"minimum","minimum",19525468,null),new cljs.core.Symbol(null,"maximum","maximum",-2080555055,null))))].join('')));
}

var style__$1 = cljs.core.merge.call(null,(cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),style);
var new_val = re_com.util.deref_or_value.call(null,model__$1);
var new_val__$1 = (((new_val < minimum__$1))?minimum__$1:new_val);
var new_val__$2 = (((new_val__$1 > maximum__$1))?maximum__$1:new_val__$1);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,previous_model),new_val__$2)){
cljs.core.reset_BANG_.call(null,text_model,re_com.input_time.time__GT_text.call(null,new_val__$2));

cljs.core.reset_BANG_.call(null,previous_model,new_val__$2);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-time",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null),style__$1),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("time-entry "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style__$1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,text_model),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),re_com.util.deref_or_value.call(null,disabled_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (style__$1,new_val,new_val__$1,new_val__$2,map__6072,map__6072__$1,args__$1,show_icon_QMARK_,hide_border_QMARK_,disabled_QMARK_,height,width,maximum__$1,minimum__$1,model__$1,deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model){
return (function (event){
re_com.input_time.on_new_keypress.call(null,event,text_model);

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__6072,map__6072__$1,args__$1,show_icon_QMARK_,hide_border_QMARK_,disabled_QMARK_,height,width,maximum__$1,minimum__$1,model__$1,deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (style__$1,new_val,new_val__$1,new_val__$2,map__6072,map__6072__$1,args__$1,show_icon_QMARK_,hide_border_QMARK_,disabled_QMARK_,height,width,maximum__$1,minimum__$1,model__$1,deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model){
return (function (event){
re_com.input_time.on_defocus.call(null,text_model,minimum__$1,maximum__$1,on_change,cljs.core.deref.call(null,previous_model));

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__6072,map__6072__$1,args__$1,show_icon_QMARK_,hide_border_QMARK_,disabled_QMARK_,height,width,maximum__$1,minimum__$1,model__$1,deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (style__$1,new_val,new_val__$1,new_val__$2,map__6072,map__6072__$1,args__$1,show_icon_QMARK_,hide_border_QMARK_,disabled_QMARK_,height,width,maximum__$1,minimum__$1,model__$1,deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model){
return (function (event){
re_com.input_time.lose_focus_if_enter.call(null,event);

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__6072,map__6072__$1,args__$1,show_icon_QMARK_,hide_border_QMARK_,disabled_QMARK_,height,width,maximum__$1,minimum__$1,model__$1,deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model))
], null),attr)], null),(cljs.core.truth_(show_icon_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.time-icon","div.time-icon",638768452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.md-access-time","i.md-access-time",-2078874221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null)], null):null)], null)], null);
};
var G__6073 = function (var_args){
var p__6071 = null;
if (arguments.length > 0) {
var G__6074__i = 0, G__6074__a = new Array(arguments.length -  0);
while (G__6074__i < G__6074__a.length) {G__6074__a[G__6074__i] = arguments[G__6074__i + 0]; ++G__6074__i;}
  p__6071 = new cljs.core.IndexedSeq(G__6074__a,0);
} 
return G__6073__delegate.call(this,p__6071);};
G__6073.cljs$lang$maxFixedArity = 0;
G__6073.cljs$lang$applyTo = (function (arglist__6075){
var p__6071 = cljs.core.seq(arglist__6075);
return G__6073__delegate(p__6071);
});
G__6073.cljs$core$IFn$_invoke$arity$variadic = G__6073__delegate;
return G__6073;
})()
;
;})(deref_model,text_model,previous_model,map__6070,map__6070__$1,args,attr,style,class$,on_change,maximum,minimum,model))
};
var input_time = function (var_args){
var p__6066 = null;
if (arguments.length > 0) {
var G__6076__i = 0, G__6076__a = new Array(arguments.length -  0);
while (G__6076__i < G__6076__a.length) {G__6076__a[G__6076__i] = arguments[G__6076__i + 0]; ++G__6076__i;}
  p__6066 = new cljs.core.IndexedSeq(G__6076__a,0);
} 
return input_time__delegate.call(this,p__6066);};
input_time.cljs$lang$maxFixedArity = 0;
input_time.cljs$lang$applyTo = (function (arglist__6077){
var p__6066 = cljs.core.seq(arglist__6077);
return input_time__delegate(p__6066);
});
input_time.cljs$core$IFn$_invoke$arity$variadic = input_time__delegate;
return input_time;
})()
;

//# sourceMappingURL=input_time.js.map