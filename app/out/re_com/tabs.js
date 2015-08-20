// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
/**
* @param {...*} var_args
*/
re_com.tabs.horizontal_tabs = (function() { 
var horizontal_tabs__delegate = function (p__6463){
var map__6469 = p__6463;
var map__6469__$1 = ((cljs.core.seq_QMARK_.call(null,map__6469))?cljs.core.apply.call(null,cljs.core.hash_map,map__6469):map__6469);
var args = map__6469__$1;
var style = cljs.core.get.call(null,map__6469__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__6469__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__6469__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__6469__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6469__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6469__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__6462_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__6462_SHARP_));
});})(current,tabs__$1,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__6462#","p1__6462#",-2131322133,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__6462#","p1__6462#",-2131322133,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__4513__auto__ = ((function (current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function iter__6470(s__6471){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__6471__$1 = s__6471;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6471__$1);
if(temp__4126__auto__){
var s__6471__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6471__$2)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,s__6471__$2);
var size__4512__auto__ = cljs.core.count.call(null,c__4511__auto__);
var b__6473 = cljs.core.chunk_buffer.call(null,size__4512__auto__);
if((function (){var i__6472 = (0);
while(true){
if((i__6472 < size__4512__auto__)){
var t = cljs.core._nth.call(null,c__4511__auto__,i__6472);
cljs.core.chunk_append.call(null,b__6473,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__6472,id,label,selected_QMARK_,t,c__4511__auto__,size__4512__auto__,b__6473,s__6471__$2,temp__4126__auto__,current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__6472,id,label,selected_QMARK_,t,c__4511__auto__,size__4512__auto__,b__6473,s__6471__$2,temp__4126__auto__,current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__6474 = (i__6472 + (1));
i__6472 = G__6474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6473),iter__6470.call(null,cljs.core.chunk_rest.call(null,s__6471__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6473),null);
}
} else {
var t = cljs.core.first.call(null,s__6471__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__6471__$2,temp__4126__auto__,current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__6471__$2,temp__4126__auto__,current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),iter__6470.call(null,cljs.core.rest.call(null,s__6471__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__6469,map__6469__$1,args,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__4513__auto__.call(null,tabs__$1);
})()], null);
};
var horizontal_tabs = function (var_args){
var p__6463 = null;
if (arguments.length > 0) {
var G__6475__i = 0, G__6475__a = new Array(arguments.length -  0);
while (G__6475__i < G__6475__a.length) {G__6475__a[G__6475__i] = arguments[G__6475__i + 0]; ++G__6475__i;}
  p__6463 = new cljs.core.IndexedSeq(G__6475__a,0);
} 
return horizontal_tabs__delegate.call(this,p__6463);};
horizontal_tabs.cljs$lang$maxFixedArity = 0;
horizontal_tabs.cljs$lang$applyTo = (function (arglist__6476){
var p__6463 = cljs.core.seq(arglist__6476);
return horizontal_tabs__delegate(p__6463);
});
horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = horizontal_tabs__delegate;
return horizontal_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.bar_tabs = (function() { 
var bar_tabs__delegate = function (p__6478){
var map__6484 = p__6478;
var map__6484__$1 = ((cljs.core.seq_QMARK_.call(null,map__6484))?cljs.core.apply.call(null,cljs.core.hash_map,map__6484):map__6484);
var vertical_QMARK_ = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6484__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__6477_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__6477_SHARP_));
});})(current,tabs__$1,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__6477#","p1__6477#",1068150389,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__6477#","p1__6477#",1068150389,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__4513__auto__ = ((function (current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function iter__6485(s__6486){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__6486__$1 = s__6486;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6486__$1);
if(temp__4126__auto__){
var s__6486__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6486__$2)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,s__6486__$2);
var size__4512__auto__ = cljs.core.count.call(null,c__4511__auto__);
var b__6488 = cljs.core.chunk_buffer.call(null,size__4512__auto__);
if((function (){var i__6487 = (0);
while(true){
if((i__6487 < size__4512__auto__)){
var t = cljs.core._nth.call(null,c__4511__auto__,i__6487);
cljs.core.chunk_append.call(null,b__6488,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__6487,id,label,selected_QMARK_,t,c__4511__auto__,size__4512__auto__,b__6488,s__6486__$2,temp__4126__auto__,current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__6487,id,label,selected_QMARK_,t,c__4511__auto__,size__4512__auto__,b__6488,s__6486__$2,temp__4126__auto__,current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})());

var G__6489 = (i__6487 + (1));
i__6487 = G__6489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6488),iter__6485.call(null,cljs.core.chunk_rest.call(null,s__6486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6488),null);
}
} else {
var t = cljs.core.first.call(null,s__6486__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__6486__$2,temp__4126__auto__,current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__6486__$2,temp__4126__auto__,current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})(),iter__6485.call(null,cljs.core.rest.call(null,s__6486__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__6484,map__6484__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__4513__auto__.call(null,tabs__$1);
})()], null);
};
var bar_tabs = function (var_args){
var p__6478 = null;
if (arguments.length > 0) {
var G__6490__i = 0, G__6490__a = new Array(arguments.length -  0);
while (G__6490__i < G__6490__a.length) {G__6490__a[G__6490__i] = arguments[G__6490__i + 0]; ++G__6490__i;}
  p__6478 = new cljs.core.IndexedSeq(G__6490__a,0);
} 
return bar_tabs__delegate.call(this,p__6478);};
bar_tabs.cljs$lang$maxFixedArity = 0;
bar_tabs.cljs$lang$applyTo = (function (arglist__6491){
var p__6478 = cljs.core.seq(arglist__6491);
return bar_tabs__delegate(p__6478);
});
bar_tabs.cljs$core$IFn$_invoke$arity$variadic = bar_tabs__delegate;
return bar_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.horizontal_bar_tabs = (function() { 
var horizontal_bar_tabs__delegate = function (p__6492){
var map__6494 = p__6492;
var map__6494__$1 = ((cljs.core.seq_QMARK_.call(null,map__6494))?cljs.core.apply.call(null,cljs.core.hash_map,map__6494):map__6494);
var args = map__6494__$1;
var style = cljs.core.get.call(null,map__6494__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__6494__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__6494__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__6494__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6494__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6494__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
};
var horizontal_bar_tabs = function (var_args){
var p__6492 = null;
if (arguments.length > 0) {
var G__6495__i = 0, G__6495__a = new Array(arguments.length -  0);
while (G__6495__i < G__6495__a.length) {G__6495__a[G__6495__i] = arguments[G__6495__i + 0]; ++G__6495__i;}
  p__6492 = new cljs.core.IndexedSeq(G__6495__a,0);
} 
return horizontal_bar_tabs__delegate.call(this,p__6492);};
horizontal_bar_tabs.cljs$lang$maxFixedArity = 0;
horizontal_bar_tabs.cljs$lang$applyTo = (function (arglist__6496){
var p__6492 = cljs.core.seq(arglist__6496);
return horizontal_bar_tabs__delegate(p__6492);
});
horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = horizontal_bar_tabs__delegate;
return horizontal_bar_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.vertical_bar_tabs = (function() { 
var vertical_bar_tabs__delegate = function (p__6497){
var map__6499 = p__6497;
var map__6499__$1 = ((cljs.core.seq_QMARK_.call(null,map__6499))?cljs.core.apply.call(null,cljs.core.hash_map,map__6499):map__6499);
var args = map__6499__$1;
var style = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
};
var vertical_bar_tabs = function (var_args){
var p__6497 = null;
if (arguments.length > 0) {
var G__6500__i = 0, G__6500__a = new Array(arguments.length -  0);
while (G__6500__i < G__6500__a.length) {G__6500__a[G__6500__i] = arguments[G__6500__i + 0]; ++G__6500__i;}
  p__6497 = new cljs.core.IndexedSeq(G__6500__a,0);
} 
return vertical_bar_tabs__delegate.call(this,p__6497);};
vertical_bar_tabs.cljs$lang$maxFixedArity = 0;
vertical_bar_tabs.cljs$lang$applyTo = (function (arglist__6501){
var p__6497 = cljs.core.seq(arglist__6501);
return vertical_bar_tabs__delegate(p__6497);
});
vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = vertical_bar_tabs__delegate;
return vertical_bar_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.pill_tabs = (function() { 
var pill_tabs__delegate = function (p__6503){
var map__6509 = p__6503;
var map__6509__$1 = ((cljs.core.seq_QMARK_.call(null,map__6509))?cljs.core.apply.call(null,cljs.core.hash_map,map__6509):map__6509);
var vertical_QMARK_ = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6509__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__6502_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__6502_SHARP_));
});})(current,tabs__$1,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__6502#","p1__6502#",-835178591,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__6502#","p1__6502#",-835178591,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__4513__auto__ = ((function (current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function iter__6510(s__6511){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__6511__$1 = s__6511;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6511__$1);
if(temp__4126__auto__){
var s__6511__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6511__$2)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,s__6511__$2);
var size__4512__auto__ = cljs.core.count.call(null,c__4511__auto__);
var b__6513 = cljs.core.chunk_buffer.call(null,size__4512__auto__);
if((function (){var i__6512 = (0);
while(true){
if((i__6512 < size__4512__auto__)){
var t = cljs.core._nth.call(null,c__4511__auto__,i__6512);
cljs.core.chunk_append.call(null,b__6513,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__6512,id,label,selected_QMARK_,t,c__4511__auto__,size__4512__auto__,b__6513,s__6511__$2,temp__4126__auto__,current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__6512,id,label,selected_QMARK_,t,c__4511__auto__,size__4512__auto__,b__6513,s__6511__$2,temp__4126__auto__,current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__6514 = (i__6512 + (1));
i__6512 = G__6514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6513),iter__6510.call(null,cljs.core.chunk_rest.call(null,s__6511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6513),null);
}
} else {
var t = cljs.core.first.call(null,s__6511__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__6511__$2,temp__4126__auto__,current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__6511__$2,temp__4126__auto__,current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),iter__6510.call(null,cljs.core.rest.call(null,s__6511__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__6509,map__6509__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__4513__auto__.call(null,tabs__$1);
})()], null);
};
var pill_tabs = function (var_args){
var p__6503 = null;
if (arguments.length > 0) {
var G__6515__i = 0, G__6515__a = new Array(arguments.length -  0);
while (G__6515__i < G__6515__a.length) {G__6515__a[G__6515__i] = arguments[G__6515__i + 0]; ++G__6515__i;}
  p__6503 = new cljs.core.IndexedSeq(G__6515__a,0);
} 
return pill_tabs__delegate.call(this,p__6503);};
pill_tabs.cljs$lang$maxFixedArity = 0;
pill_tabs.cljs$lang$applyTo = (function (arglist__6516){
var p__6503 = cljs.core.seq(arglist__6516);
return pill_tabs__delegate(p__6503);
});
pill_tabs.cljs$core$IFn$_invoke$arity$variadic = pill_tabs__delegate;
return pill_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.horizontal_pill_tabs = (function() { 
var horizontal_pill_tabs__delegate = function (p__6517){
var map__6519 = p__6517;
var map__6519__$1 = ((cljs.core.seq_QMARK_.call(null,map__6519))?cljs.core.apply.call(null,cljs.core.hash_map,map__6519):map__6519);
var args = map__6519__$1;
var label_fn = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
};
var horizontal_pill_tabs = function (var_args){
var p__6517 = null;
if (arguments.length > 0) {
var G__6520__i = 0, G__6520__a = new Array(arguments.length -  0);
while (G__6520__i < G__6520__a.length) {G__6520__a[G__6520__i] = arguments[G__6520__i + 0]; ++G__6520__i;}
  p__6517 = new cljs.core.IndexedSeq(G__6520__a,0);
} 
return horizontal_pill_tabs__delegate.call(this,p__6517);};
horizontal_pill_tabs.cljs$lang$maxFixedArity = 0;
horizontal_pill_tabs.cljs$lang$applyTo = (function (arglist__6521){
var p__6517 = cljs.core.seq(arglist__6521);
return horizontal_pill_tabs__delegate(p__6517);
});
horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = horizontal_pill_tabs__delegate;
return horizontal_pill_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.vertical_pill_tabs = (function() { 
var vertical_pill_tabs__delegate = function (p__6522){
var map__6524 = p__6522;
var map__6524__$1 = ((cljs.core.seq_QMARK_.call(null,map__6524))?cljs.core.apply.call(null,cljs.core.hash_map,map__6524):map__6524);
var args = map__6524__$1;
var label_fn = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
};
var vertical_pill_tabs = function (var_args){
var p__6522 = null;
if (arguments.length > 0) {
var G__6525__i = 0, G__6525__a = new Array(arguments.length -  0);
while (G__6525__i < G__6525__a.length) {G__6525__a[G__6525__i] = arguments[G__6525__i + 0]; ++G__6525__i;}
  p__6522 = new cljs.core.IndexedSeq(G__6525__a,0);
} 
return vertical_pill_tabs__delegate.call(this,p__6522);};
vertical_pill_tabs.cljs$lang$maxFixedArity = 0;
vertical_pill_tabs.cljs$lang$applyTo = (function (arglist__6526){
var p__6522 = cljs.core.seq(arglist__6526);
return vertical_pill_tabs__delegate(p__6522);
});
vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = vertical_pill_tabs__delegate;
return vertical_pill_tabs;
})()
;

//# sourceMappingURL=tabs.js.map