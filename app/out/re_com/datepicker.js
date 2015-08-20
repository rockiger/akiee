// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('re_com.popover');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('cljs_time.format');
goog.require('cljs_time.predicates');
goog.require('re_com.validate');
goog.require('cljs_time.core');
goog.require('reagent.core');
re_com.datepicker.month_format = cljs_time.format.formatter.call(null,"MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.call(null,"ww");
re_com.datepicker.date_format = cljs_time.format.formatter.call(null,"yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function iso8601__GT_date(iso8601){
if(cljs.core.seq.call(null,iso8601)){
return cljs_time.format.parse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date","basic-date",1566551506)),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function month_label(date){
return cljs_time.format.unparse.call(null,re_com.datepicker.month_format,date);
});
re_com.datepicker.dec_month = (function dec_month(date){
return cljs_time.core.minus.call(null,date,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_month = (function inc_month(date){
return cljs_time.core.plus.call(null,date,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_date = (function inc_date(date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.days.call(null,n));
});
/**
* If date fails pred, subtract period until true, otherwise answer date
*/
re_com.datepicker.previous = (function() {
var previous = null;
var previous__1 = (function (pred){
return previous.call(null,pred,cljs_time.core.now.call(null));
});
var previous__2 = (function (pred,date){
return previous.call(null,pred,date,cljs_time.core.days.call(null,(1)));
});
var previous__3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_(pred.call(null,date))){
return date;
} else {
var G__6080 = pred;
var G__6081 = cljs_time.core.minus.call(null,date,period);
var G__6082 = period;
pred = G__6080;
date = G__6081;
period = G__6082;
continue;
}
break;
}
});
previous = function(pred,date,period){
switch(arguments.length){
case 1:
return previous__1.call(this,pred);
case 2:
return previous__2.call(this,pred,date);
case 3:
return previous__3.call(this,pred,date,period);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
previous.cljs$core$IFn$_invoke$arity$1 = previous__1;
previous.cljs$core$IFn$_invoke$arity$2 = previous__2;
previous.cljs$core$IFn$_invoke$arity$3 = previous__3;
return previous;
})()
;
re_com.datepicker._EQ_date = (function _EQ_date(date1,date2){
return (cljs.core._EQ_.call(null,cljs_time.core.year.call(null,date1),cljs_time.core.year.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.month.call(null,date1),cljs_time.core.month.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.day.call(null,date1),cljs_time.core.day.call(null,date2)));
});
re_com.datepicker._LT__EQ_date = (function _LT__EQ_date(date1,date2){
var or__3757__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(or__3757__auto__){
return or__3757__auto__;
} else {
return cljs_time.core.before_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function _GT__EQ_date(date1,date2){
var or__3757__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(or__3757__auto__){
return or__3757__auto__;
} else {
return cljs_time.core.after_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker.main_div_with = (function main_div_with(table_div,hide_border_QMARK_,class$,style,attr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-datepicker datepicker noselect "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),style)], null),attr),table_div], null)], null)], null)], null);
});
/**
* Answer 2 x rows showing month with nav buttons and days NOTE: not internationalized
*/
re_com.datepicker.table_thead = (function table_thead(current,p__6083){
var map__6085 = p__6083;
var map__6085__$1 = ((cljs.core.seq_QMARK_.call(null,map__6085))?cljs.core.apply.call(null,cljs.core.hash_map,map__6085):map__6085);
var show_weeks_QMARK_ = cljs.core.get.call(null,map__6085__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var enabled_days = cljs.core.get.call(null,map__6085__$1,new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113));
var minimum = cljs.core.get.call(null,map__6085__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__6085__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var style = ((function (map__6085,map__6085__$1,show_weeks_QMARK_,enabled_days,minimum,maximum){
return (function (week_day){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(enabled_days.call(null,week_day))?"day-enabled":"day-disabled")], null);
});})(map__6085,map__6085__$1,show_weeks_QMARK_,enabled_days,minimum,maximum))
;
var prev_date = re_com.datepicker.dec_month.call(null,cljs.core.deref.call(null,current));
var prev_enabled_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.after_QMARK_.call(null,prev_date,minimum):true);
var next_date = re_com.datepicker.inc_month.call(null,cljs.core.deref.call(null,current));
var next_enabled_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.before_QMARK_.call(null,next_date,maximum):true);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.conj.call(null,template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("prev "),cljs.core.str((cljs.core.truth_(prev_enabled_QMARK_)?"available selectable":"disabled"))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.md-chevron-left","i.md-chevron-left",-1550515036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (style,prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__6085,map__6085__$1,show_weeks_QMARK_,enabled_days,minimum,maximum){
return (function (event){
if(cljs.core.truth_(prev_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,current,prev_date);
} else {
}

return null;
});})(style,prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__6085,map__6085__$1,show_weeks_QMARK_,enabled_days,minimum,maximum))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"col-span","col-span",-232603210),"5"], null),re_com.datepicker.month_label.call(null,cljs.core.deref.call(null,current))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("next "),cljs.core.str((cljs.core.truth_(next_enabled_QMARK_)?"available selectable":"disabled"))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.md-chevron-right","i.md-chevron-right",-412636301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (style,prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__6085,map__6085__$1,show_weeks_QMARK_,enabled_days,minimum,maximum){
return (function (event){
if(cljs.core.truth_(next_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,current,next_date);
} else {
}

return null;
});})(style,prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__6085,map__6085__$1,show_weeks_QMARK_,enabled_days,minimum,maximum))
], null)], null)], null)),cljs.core.conj.call(null,template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(7)),"SUN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(1)),"MON"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(2)),"TUE"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(3)),"WED"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(4)),"THU"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(5)),"FRI"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),style.call(null,(6)),"SAT"], null))], null);
});
re_com.datepicker.selection_changed = (function selection_changed(selection,change_callback){
return change_callback.call(null,selection);
});
re_com.datepicker.table_td = (function table_td(date,focus_month,selected,today,p__6086,disabled_QMARK_,on_change){
var map__6088 = p__6086;
var map__6088__$1 = ((cljs.core.seq_QMARK_.call(null,map__6088))?cljs.core.apply.call(null,cljs.core.hash_map,map__6088):map__6088);
var attributes = map__6088__$1;
var minimum = cljs.core.get.call(null,map__6088__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__6088__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var enabled_min = (cljs.core.truth_(minimum)?re_com.datepicker._GT__EQ_date.call(null,date,minimum):true);
var enabled_max = (cljs.core.truth_(maximum)?re_com.datepicker._LT__EQ_date.call(null,date,maximum):true);
var enabled_day = (function (){var and__3745__auto__ = enabled_min;
if(cljs.core.truth_(and__3745__auto__)){
return enabled_max;
} else {
return and__3745__auto__;
}
})();
var disabled_day_QMARK_ = (cljs.core.truth_(enabled_day)?(new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113).cljs$core$IFn$_invoke$arity$1(attributes).call(null,cljs_time.core.day_of_week.call(null,date)) == null):true);
var styles = (cljs.core.truth_(disabled_QMARK_)?"off":((disabled_day_QMARK_)?"off":((cljs.core._EQ_.call(null,focus_month,cljs_time.core.month.call(null,date)))?"available":"available off"
)));
var styles__$1 = ((re_com.datepicker._EQ_date.call(null,selected,date))?[cljs.core.str(styles),cljs.core.str(" active start-date end-date")].join(''):(cljs.core.truth_((function (){var and__3745__auto__ = today;
if(cljs.core.truth_(and__3745__auto__)){
return re_com.datepicker._EQ_date.call(null,date,today);
} else {
return and__3745__auto__;
}
})())?[cljs.core.str(styles),cljs.core.str(" today")].join(''):styles
));
var on_click = ((function (enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,map__6088,map__6088__$1,attributes,minimum,maximum){
return (function (){
if(cljs.core.truth_((function (){var or__3757__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return disabled_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed.call(null,date,on_change);
}
});})(enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,map__6088,map__6088__$1,attributes,minimum,maximum))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),styles__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,on_click,map__6088,map__6088__$1,attributes,minimum,maximum){
return (function (event){
on_click.call(null);

return null;
});})(enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,on_click,map__6088,map__6088__$1,attributes,minimum,maximum))
], null),cljs_time.core.day.call(null,date)], null);
});
re_com.datepicker.week_td = (function week_td(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"week"], null),cljs_time.format.unparse.call(null,re_com.datepicker.week_format,date)], null);
});
/**
* Return 7 columns of date cells from date inclusive
*/
re_com.datepicker.table_tr = (function table_tr(date,focus_month,selected,attributes,disabled_QMARK_,on_change){
if(cljs_time.predicates.sunday_QMARK_.call(null,date)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sunday?","sunday?",-572392579,null),new cljs.core.Symbol(null,"date","date",177097065,null))))].join('')));
}

var table_row = (cljs.core.truth_(new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),re_com.datepicker.week_td.call(null,date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var row_dates = cljs.core.map.call(null,((function (table_row){
return (function (p1__6089_SHARP_){
return re_com.datepicker.inc_date.call(null,date,p1__6089_SHARP_);
});})(table_row))
,cljs.core.range.call(null,(7)));
var today = (cljs.core.truth_(new cljs.core.Keyword(null,"show-today?","show-today?",513056415).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.Keyword(null,"today","today",945271563).cljs$core$IFn$_invoke$arity$1(attributes):null);
return cljs.core.into.call(null,table_row,cljs.core.map.call(null,((function (table_row,row_dates,today){
return (function (p1__6090_SHARP_){
return re_com.datepicker.table_td.call(null,p1__6090_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change);
});})(table_row,row_dates,today))
,row_dates));
});
/**
* Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
*/
re_com.datepicker.table_tbody = (function table_tbody(current,selected,attributes,disabled_QMARK_,on_change){
if(cljs.core.truth_((function (){var and__3745__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113).cljs$core$IFn$_invoke$arity$1(attributes));
if(and__3745__auto__){
return new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113).cljs$core$IFn$_invoke$arity$1(attributes).call(null,cljs_time.core.day_of_week.call(null,selected));
} else {
return and__3745__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113),new cljs.core.Symbol(null,"attributes","attributes",1566517923,null))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113),new cljs.core.Symbol(null,"attributes","attributes",1566517923,null)),cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",-1015109040,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null))))))].join('')));
}

var current_start = re_com.datepicker.previous.call(null,cljs_time.predicates.sunday_QMARK_,current);
var focus_month = cljs_time.core.month.call(null,current);
var row_start_dates = cljs.core.map.call(null,((function (current_start,focus_month){
return (function (p1__6091_SHARP_){
return re_com.datepicker.inc_date.call(null,current_start,((7) * p1__6091_SHARP_));
});})(current_start,focus_month))
,cljs.core.range.call(null,(6)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.call(null,((function (current_start,focus_month,row_start_dates){
return (function (p1__6092_SHARP_){
return re_com.datepicker.table_tr.call(null,p1__6092_SHARP_,focus_month,selected,attributes,disabled_QMARK_,on_change);
});})(current_start,focus_month,row_start_dates))
,row_start_dates));
});
/**
* Augment passed attributes with extra info/defaults
*/
re_com.datepicker.configure = (function configure(attributes){
var enabled_days = cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__6093_SHARP_){
return p1__6093_SHARP_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Su","Su",1604604633),(7),new cljs.core.Keyword(null,"Sa","Sa",1909936819),(6),new cljs.core.Keyword(null,"Fr","Fr",1051514106),(5),new cljs.core.Keyword(null,"Th","Th",1409372402),(4),new cljs.core.Keyword(null,"We","We",-705480743),(3),new cljs.core.Keyword(null,"Tu","Tu",-1088052995),(2),new cljs.core.Keyword(null,"Mo","Mo",706762113),(1)], null));
}),((cljs.core.seq.call(null,new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113).cljs$core$IFn$_invoke$arity$1(attributes)))?new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113).cljs$core$IFn$_invoke$arity$1(attributes):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Mo","Mo",706762113),null,new cljs.core.Keyword(null,"Th","Th",1409372402),null,new cljs.core.Keyword(null,"Sa","Sa",1909936819),null,new cljs.core.Keyword(null,"Su","Su",1604604633),null,new cljs.core.Keyword(null,"We","We",-705480743),null,new cljs.core.Keyword(null,"Fr","Fr",1051514106),null,new cljs.core.Keyword(null,"Tu","Tu",-1088052995),null], null), null))));
return cljs.core.merge.call(null,attributes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113),enabled_days,new cljs.core.Keyword(null,"today","today",945271563),cljs_time.core.now.call(null)], null));
});
re_com.datepicker.datepicker_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.goog_date_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the selected date. Should match :enabled-days"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when a new selection is made"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"enabled-days","enabled-days",-256114113),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"set",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a subset of #{:Su :Mo :Tu :We :Th :Fr :Sa}. Only dates falling on these days will be user-selectable. Default is all 7 days"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-today?","show-today?",513056415),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.goog_date_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.goog_date_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* @param {...*} var_args
*/
re_com.datepicker.datepicker = (function() { 
var datepicker__delegate = function (p__6094){
var map__6098 = p__6094;
var map__6098__$1 = ((cljs.core.seq_QMARK_.call(null,map__6098))?cljs.core.apply.call(null,cljs.core.hash_map,map__6098):map__6098);
var args = map__6098__$1;
var model = cljs.core.get.call(null,map__6098__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),args,"datepicker"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"datepicker-args-desc","datepicker-args-desc",1193627088,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"datepicker")))].join('')));
}

var current = reagent.core.atom.call(null,cljs_time.core.first_day_of_the_month.call(null,re_com.util.deref_or_value.call(null,model)));
return ((function (current,map__6098,map__6098__$1,args,model){
return (function() { 
var G__6101__delegate = function (p__6099){
var map__6100 = p__6099;
var map__6100__$1 = ((cljs.core.seq_QMARK_.call(null,map__6100))?cljs.core.apply.call(null,cljs.core.hash_map,map__6100):map__6100);
var properties = map__6100__$1;
var attr = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_change = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var hide_border_QMARK_ = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var disabled_QMARK_ = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var model__$1 = cljs.core.get.call(null,map__6100__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),properties,"datepicker"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"datepicker-args-desc","datepicker-args-desc",1193627088,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),"datepicker")))].join('')));
}

var configuration = re_com.datepicker.configure.call(null,properties);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-condensed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,current,configuration], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref.call(null,current),re_com.util.deref_or_value.call(null,model__$1),configuration,(((disabled_QMARK_ == null))?false:re_com.util.deref_or_value.call(null,disabled_QMARK_)),on_change], null)], null),hide_border_QMARK_,class$,style,attr], null);
};
var G__6101 = function (var_args){
var p__6099 = null;
if (arguments.length > 0) {
var G__6102__i = 0, G__6102__a = new Array(arguments.length -  0);
while (G__6102__i < G__6102__a.length) {G__6102__a[G__6102__i] = arguments[G__6102__i + 0]; ++G__6102__i;}
  p__6099 = new cljs.core.IndexedSeq(G__6102__a,0);
} 
return G__6101__delegate.call(this,p__6099);};
G__6101.cljs$lang$maxFixedArity = 0;
G__6101.cljs$lang$applyTo = (function (arglist__6103){
var p__6099 = cljs.core.seq(arglist__6103);
return G__6101__delegate(p__6099);
});
G__6101.cljs$core$IFn$_invoke$arity$variadic = G__6101__delegate;
return G__6101;
})()
;
;})(current,map__6098,map__6098__$1,args,model))
};
var datepicker = function (var_args){
var p__6094 = null;
if (arguments.length > 0) {
var G__6104__i = 0, G__6104__a = new Array(arguments.length -  0);
while (G__6104__i < G__6104__a.length) {G__6104__a[G__6104__i] = arguments[G__6104__i + 0]; ++G__6104__i;}
  p__6094 = new cljs.core.IndexedSeq(G__6104__a,0);
} 
return datepicker__delegate.call(this,p__6094);};
datepicker.cljs$lang$maxFixedArity = 0;
datepicker.cljs$lang$applyTo = (function (arglist__6105){
var p__6094 = cljs.core.seq(arglist__6105);
return datepicker__delegate(p__6094);
});
datepicker.cljs$core$IFn$_invoke$arity$variadic = datepicker__delegate;
return datepicker;
})()
;
/**
* Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
*/
re_com.datepicker.anchor_button = (function anchor_button(shown_QMARK_,model,format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group display-flex noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.call(null,shown_QMARK_,cljs.core.not);

return null;
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control dropdown-button"], null),cljs_time.format.unparse.call(null,((cljs.core.seq.call(null,format))?cljs_time.format.formatter.call(null,format):re_com.datepicker.date_format),cljs.core.deref.call(null,model))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-button.activator.input-group-addon","span.dropdown-button.activator.input-group-addon",-1049661492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0 0 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.md-apps","i.md-apps",-1604347981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = cljs.core.conj.call(null,re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"yyyy MMM dd",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"a represenatation of a date format. See cljs_time.format"], null));
/**
* @param {...*} var_args
*/
re_com.datepicker.datepicker_dropdown = (function() { 
var datepicker_dropdown__delegate = function (p__6106){
var map__6110 = p__6106;
var map__6110__$1 = ((cljs.core.seq_QMARK_.call(null,map__6110))?cljs.core.apply.call(null,cljs.core.hash_map,map__6110):map__6110);
var args = map__6110__$1;
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_dropdown_args_desc),args,"datepicker-dropdown"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"datepicker-dropdown-args-desc","datepicker-dropdown-args-desc",460775465,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"datepicker-dropdown")))].join('')));
}

var shown_QMARK_ = reagent.core.atom.call(null,false);
var cancel_popover = ((function (shown_QMARK_,map__6110,map__6110__$1,args){
return (function (){
return cljs.core.reset_BANG_.call(null,shown_QMARK_,false);
});})(shown_QMARK_,map__6110,map__6110__$1,args))
;
var position = new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
return ((function (shown_QMARK_,cancel_popover,position,map__6110,map__6110__$1,args){
return (function() { 
var G__6113__delegate = function (p__6111){
var map__6112 = p__6111;
var map__6112__$1 = ((cljs.core.seq_QMARK_.call(null,map__6112))?cljs.core.apply.call(null,cljs.core.hash_map,map__6112):map__6112);
var passthrough_args = map__6112__$1;
var format = cljs.core.get.call(null,map__6112__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var on_change = cljs.core.get.call(null,map__6112__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var show_weeks_QMARK_ = cljs.core.get.call(null,map__6112__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var model = cljs.core.get.call(null,map__6112__$1,new cljs.core.Keyword(null,"model","model",331153215));
var collapse_on_select = ((function (map__6112,map__6112__$1,passthrough_args,format,on_change,show_weeks_QMARK_,model,shown_QMARK_,cancel_popover,position,map__6110,map__6110__$1,args){
return (function (new_model){
cljs.core.reset_BANG_.call(null,shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return on_change.call(null,new_model);
} else {
return null;
}
});})(map__6112,map__6112__$1,passthrough_args,format,on_change,show_weeks_QMARK_,model,shown_QMARK_,cancel_popover,position,map__6110,map__6110__$1,args))
;
var passthrough_args__$1 = cljs.core.dissoc.call(null,passthrough_args,new cljs.core.Keyword(null,"format","format",-1306924766));
var passthrough_args__$2 = cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true], null),cljs.core.assoc.call(null,passthrough_args__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),collapse_on_select))));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),shown_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"inherit")], null),(cljs.core.truth_(shown_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_popover], null):null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(0),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(show_weeks_QMARK_)?"-26px":"-13px"),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$2)], null)], null)], null)], null);
};
var G__6113 = function (var_args){
var p__6111 = null;
if (arguments.length > 0) {
var G__6114__i = 0, G__6114__a = new Array(arguments.length -  0);
while (G__6114__i < G__6114__a.length) {G__6114__a[G__6114__i] = arguments[G__6114__i + 0]; ++G__6114__i;}
  p__6111 = new cljs.core.IndexedSeq(G__6114__a,0);
} 
return G__6113__delegate.call(this,p__6111);};
G__6113.cljs$lang$maxFixedArity = 0;
G__6113.cljs$lang$applyTo = (function (arglist__6115){
var p__6111 = cljs.core.seq(arglist__6115);
return G__6113__delegate(p__6111);
});
G__6113.cljs$core$IFn$_invoke$arity$variadic = G__6113__delegate;
return G__6113;
})()
;
;})(shown_QMARK_,cancel_popover,position,map__6110,map__6110__$1,args))
};
var datepicker_dropdown = function (var_args){
var p__6106 = null;
if (arguments.length > 0) {
var G__6116__i = 0, G__6116__a = new Array(arguments.length -  0);
while (G__6116__i < G__6116__a.length) {G__6116__a[G__6116__i] = arguments[G__6116__i + 0]; ++G__6116__i;}
  p__6106 = new cljs.core.IndexedSeq(G__6116__a,0);
} 
return datepicker_dropdown__delegate.call(this,p__6106);};
datepicker_dropdown.cljs$lang$maxFixedArity = 0;
datepicker_dropdown.cljs$lang$applyTo = (function (arglist__6117){
var p__6106 = cljs.core.seq(arglist__6117);
return datepicker_dropdown__delegate(p__6106);
});
datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = datepicker_dropdown__delegate;
return datepicker_dropdown;
})()
;

//# sourceMappingURL=datepicker.js.map