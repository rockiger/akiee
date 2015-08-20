// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.text');
goog.require('cljs.core');
goog.require('re_com.validate');
goog.require('re_com.box');
re_com.text.label_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),"text or hiccup or whatever to display"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the label is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"additional CSS styles"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* Returns markup for a basic label
* @param {...*} var_args
*/
re_com.text.label = (function() { 
var label__delegate = function (p__6582){
var map__6584 = p__6582;
var map__6584__$1 = ((cljs.core.seq_QMARK_.call(null,map__6584))?cljs.core.apply.call(null,cljs.core.hash_map,map__6584):map__6584);
var args = map__6584__$1;
var attr = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var width = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_click = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var label__$1 = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.text.label_args_desc),args,"label"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"label-args-desc","label-args-desc",-1662978130,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"label")))].join('')));
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"class","class",-2030961996),"display-inline-flex",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-label "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),style)], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__6584,map__6584__$1,args,attr,style,class$,width,on_click,label__$1){
return (function (event){
on_click.call(null);

return null;
});})(map__6584,map__6584__$1,args,attr,style,class$,width,on_click,label__$1))
], null):null),attr),label__$1], null)], null);
};
var label = function (var_args){
var p__6582 = null;
if (arguments.length > 0) {
var G__6585__i = 0, G__6585__a = new Array(arguments.length -  0);
while (G__6585__i < G__6585__a.length) {G__6585__a[G__6585__i] = arguments[G__6585__i + 0]; ++G__6585__i;}
  p__6582 = new cljs.core.IndexedSeq(G__6585__a,0);
} 
return label__delegate.call(this,p__6582);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__6586){
var p__6582 = cljs.core.seq(arglist__6586);
return label__delegate(p__6582);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
re_com.text.title_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),"title or hiccup or anything to display"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.title_level_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.title_levels_list,". If not provided then style the title using ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"underline?","underline?",-1123247603),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the title is underlined"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"0.4em",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS size for space above the title"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"0.1em",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS size for space below the title"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* A title with four preset levels
* @param {...*} var_args
*/
re_com.text.title = (function() { 
var title__delegate = function (p__6587){
var map__6589 = p__6587;
var map__6589__$1 = ((cljs.core.seq_QMARK_.call(null,map__6589))?cljs.core.apply.call(null,cljs.core.hash_map,map__6589):map__6589);
var args = map__6589__$1;
var attr = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var margin_bottom = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.3em");
var margin_top = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.6em");
var underline_QMARK_ = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"underline?","underline?",-1123247603));
var level = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var label = cljs.core.get.call(null,map__6589__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.text.title_args_desc),args,"title"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"title-args-desc","title-args-desc",-1722879237,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"title")))].join('')));
}

var preset_class = (((level == null))?"":cljs.core.name.call(null,level));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),preset_class,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-title display-flex "),cljs.core.str(preset_class),cljs.core.str(" "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1)], null),(cljs.core.truth_(underline_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),margin_bottom], null)),style)], null),attr),label], null),(cljs.core.truth_(underline_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,new cljs.core.Keyword(null,"size","size",1098693007),"1px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),margin_bottom], null)], null):null)], null)], null);
};
var title = function (var_args){
var p__6587 = null;
if (arguments.length > 0) {
var G__6590__i = 0, G__6590__a = new Array(arguments.length -  0);
while (G__6590__i < G__6590__a.length) {G__6590__a[G__6590__i] = arguments[G__6590__i + 0]; ++G__6590__i;}
  p__6587 = new cljs.core.IndexedSeq(G__6590__a,0);
} 
return title__delegate.call(this,p__6587);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__6591){
var p__6587 = cljs.core.seq(arglist__6591);
return title__delegate(p__6587);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* acts like [:p ]
* Designed for paragraphs of body text.
* First child can be a map of styles / attributes
* Sets appropriate font-size and line length.
* @param {...*} var_args
*/
re_com.text.p = (function() { 
var p__delegate = function (children){
var f = cljs.core.first.call(null,children);
var vec__6593 = ((cljs.core.map_QMARK_.call(null,f))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null));
var m = cljs.core.nth.call(null,vec__6593,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__6593,(1),null);
var m__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"none",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"450px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px"], null)], null),m);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),m__$1,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),children__$1)], null);
};
var p = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__6594__i = 0, G__6594__a = new Array(arguments.length -  0);
while (G__6594__i < G__6594__a.length) {G__6594__a[G__6594__i] = arguments[G__6594__i + 0]; ++G__6594__i;}
  children = new cljs.core.IndexedSeq(G__6594__a,0);
} 
return p__delegate.call(this,children);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__6595){
var children = cljs.core.seq(arglist__6595);
return p__delegate(children);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

//# sourceMappingURL=text.js.map