// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.selection_list');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.misc');
goog.require('re_com.text');
re_com.selection_list.label_style = (function label_style(selected_QMARK_,as_exclusions_QMARK_){
var base_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1px"], null);
if(cljs.core.truth_((function (){var and__3745__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return as_exclusions_QMARK_;
} else {
return and__3745__auto__;
}
})())){
return cljs.core.merge.call(null,base_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null));
} else {
return base_style;
}
});
re_com.selection_list.check_clicked = (function check_clicked(selections,item,ticked_QMARK_,required_QMARK_){
var num_selected = cljs.core.count.call(null,selections);
var only_item = ((cljs.core._EQ_.call(null,(1),num_selected))?cljs.core.first.call(null,selections):null);
if(cljs.core.truth_((function (){var and__3745__auto__ = required_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return cljs.core._EQ_.call(null,only_item,item);
} else {
return and__3745__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(ticked_QMARK_)){
return cljs.core.conj.call(null,selections,item);
} else {
return cljs.core.disj.call(null,selections,item);
}
}
});
re_com.selection_list.as_checked = (function as_checked(item,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item compact",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
on_change.call(null,re_com.selection_list.check_clicked.call(null,selections,item,cljs.core.not.call(null,selections.call(null,item)),required_QMARK_));
}

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.checkbox,new cljs.core.Keyword(null,"model","model",331153215),selections.call(null,item),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),re_com.selection_list.label_style.call(null,selections.call(null,item),as_exclusions_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,item)], null)], null);
});
re_com.selection_list.radio_clicked = (function radio_clicked(selections,item,required_QMARK_){
if(cljs.core.truth_((function (){var and__3745__auto__ = required_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return selections.call(null,item);
} else {
return and__3745__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(selections.call(null,item))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.fromArray([item], true);
}
}
});
re_com.selection_list.as_radio = (function as_radio(item,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item compact",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
on_change.call(null,re_com.selection_list.radio_clicked.call(null,selections,item,required_QMARK_));
}

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.radio_button,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.first.call(null,selections),new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),re_com.selection_list.label_style.call(null,selections.call(null,item),as_exclusions_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,item)], null)], null);
});
re_com.selection_list.list_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
re_com.selection_list.spacing_bordered = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null);
re_com.selection_list.spacing_unbordered = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null);
re_com.selection_list.selection_list_args_desc = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the selectable items. Elements can be strings or more interesting data items like {:label \"some name\" :sort 5}. Also see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," below (list of maps also allowed)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"set of :ids within :choices | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.set_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the currently selected items. Note: items are considered distinct"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"set of :ids -> nil | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a callback which will be passed set of selected items"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, use check boxes, otherwise radio buttons"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, selected items are shown with struck-out labels"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, at least one item must be selected. Note: being able to un-select a radio button is not a common use case, so this should probably be set to true when in single select mode"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"250px\". When specified, item labels may be clipped. Otherwise based on widest label"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"150px\". Size beyond which items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"150px\". If there are less items then this height, box will shrink. If there are more, items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the time input will be disabled. Can be atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the list will be displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"item-renderer","item-renderer",-743065410),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called for each element during setup, the returned component renders the element, responds to clicks etc."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Keyword(null,"type","type",1174270348),"-> nil | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called for each element to get label string"], null)], null);
re_com.selection_list.list_container = (function list_container(p__5976){
var map__5978 = p__5976;
var map__5978__$1 = ((cljs.core.seq_QMARK_.call(null,map__5978))?cljs.core.apply.call(null,cljs.core.hash_map,map__5978):map__5978);
var args = map__5978__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var item_renderer = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"item-renderer","item-renderer",-743065410));
var model = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_fn = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var required_QMARK_ = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var as_exclusions_QMARK_ = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285));
var hide_border_QMARK_ = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var choices = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var multi_select_QMARK_ = cljs.core.get.call(null,map__5978__$1,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.selection_list.selection_list_args_desc),args,"selection-list"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"selection-list-args-desc","selection-list-args-desc",-219283300,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"selection-list")))].join('')));
}

var selected = (cljs.core.truth_(multi_select_QMARK_)?model:cljs.core.set.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,model)],null))));
var items = cljs.core.map.call(null,(cljs.core.truth_(item_renderer)?((function (selected,map__5978,map__5978__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,multi_select_QMARK_){
return (function (p1__5973_SHARP_){
return item_renderer.call(null,p1__5973_SHARP_,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__5978,map__5978__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,multi_select_QMARK_))
:(cljs.core.truth_(multi_select_QMARK_)?((function (selected,map__5978,map__5978__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,multi_select_QMARK_){
return (function (p1__5974_SHARP_){
return re_com.selection_list.as_checked.call(null,p1__5974_SHARP_,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__5978,map__5978__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,multi_select_QMARK_))
:((function (selected,map__5978,map__5978__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,multi_select_QMARK_){
return (function (p1__5975_SHARP_){
return re_com.selection_list.as_radio.call(null,p1__5975_SHARP_,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__5978,map__5978__$1,args,disabled_QMARK_,on_change,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,hide_border_QMARK_,choices,multi_select_QMARK_))
)),choices);
var bounds = cljs.core.select_keys.call(null,args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"max-height","max-height",-612563804)], null));
var spacing = (cljs.core.truth_(hide_border_QMARK_)?re_com.selection_list.spacing_unbordered:re_com.selection_list.spacing_bordered);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group noselect",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.selection_list.list_style,bounds,spacing)], null)], null),items)], null);
});
/**
* Augment passed attributes with defaults and deref any atoms
*/
re_com.selection_list.configure = (function configure(attributes){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),false,new cljs.core.Keyword(null,"required?","required?",-872514462),false,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),false,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),cljs.core.str], null),re_com.util.fmap.call(null,re_com.util.deref_or_value,attributes));
});
/**
* Produce a list box with items arranged vertically
* @param {...*} var_args
*/
re_com.selection_list.selection_list = (function() { 
var selection_list__delegate = function (p__5979){
var map__5983 = p__5979;
var map__5983__$1 = ((cljs.core.seq_QMARK_.call(null,map__5983))?cljs.core.apply.call(null,cljs.core.hash_map,map__5983):map__5983);
var args = map__5983__$1;
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.selection_list.selection_list_args_desc),args,"selection-list"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"selection-list-args-desc","selection-list-args-desc",-219283300,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"selection-list")))].join('')));
}

return ((function (map__5983,map__5983__$1,args){
return (function() { 
var G__5986__delegate = function (p__5984){
var map__5985 = p__5984;
var map__5985__$1 = ((cljs.core.seq_QMARK_.call(null,map__5985))?cljs.core.apply.call(null,cljs.core.hash_map,map__5985):map__5985);
var args__$1 = map__5985__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.list_container,re_com.selection_list.configure.call(null,args__$1)], null);
};
var G__5986 = function (var_args){
var p__5984 = null;
if (arguments.length > 0) {
var G__5987__i = 0, G__5987__a = new Array(arguments.length -  0);
while (G__5987__i < G__5987__a.length) {G__5987__a[G__5987__i] = arguments[G__5987__i + 0]; ++G__5987__i;}
  p__5984 = new cljs.core.IndexedSeq(G__5987__a,0);
} 
return G__5986__delegate.call(this,p__5984);};
G__5986.cljs$lang$maxFixedArity = 0;
G__5986.cljs$lang$applyTo = (function (arglist__5988){
var p__5984 = cljs.core.seq(arglist__5988);
return G__5986__delegate(p__5984);
});
G__5986.cljs$core$IFn$_invoke$arity$variadic = G__5986__delegate;
return G__5986;
})()
;
;})(map__5983,map__5983__$1,args))
};
var selection_list = function (var_args){
var p__5979 = null;
if (arguments.length > 0) {
var G__5989__i = 0, G__5989__a = new Array(arguments.length -  0);
while (G__5989__i < G__5989__a.length) {G__5989__a[G__5989__i] = arguments[G__5989__i + 0]; ++G__5989__i;}
  p__5979 = new cljs.core.IndexedSeq(G__5989__a,0);
} 
return selection_list__delegate.call(this,p__5979);};
selection_list.cljs$lang$maxFixedArity = 0;
selection_list.cljs$lang$applyTo = (function (arglist__5990){
var p__5979 = cljs.core.seq(arglist__5990);
return selection_list__delegate(p__5979);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;

//# sourceMappingURL=selection_list.js.map