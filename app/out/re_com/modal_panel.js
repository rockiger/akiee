// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.modal_panel');
goog.require('cljs.core');
goog.require('re_com.validate');
re_com.modal_panel.modal_panel_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"hiccup to be centered within in the browser window"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if true, wrap ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":child"], null)," in a white, rounded panel"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"black",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS color of backdrop"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.6,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
* Renders a modal window centered on screen. A dark transparent backdrop sits between this and the underlying
* main window to prevent UI interactivity and place user focus on the modal window.
* Parameters:
* - child:  The message to display in the modal (a string or a hiccup vector or function returning a hiccup vector)
* @param {...*} var_args
*/
re_com.modal_panel.modal_panel = (function() { 
var modal_panel__delegate = function (p__5772){
var map__5774 = p__5772;
var map__5774__$1 = ((cljs.core.seq_QMARK_.call(null,map__5774))?cljs.core.apply.call(null,cljs.core.hash_map,map__5774):map__5774);
var args = map__5774__$1;
var attr = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var backdrop_opacity = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.6);
var backdrop_color = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"black");
var wrap_nicely_QMARK_ = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true);
var child = cljs.core.get.call(null,map__5774__$1,new cljs.core.Keyword(null,"child","child",623967545));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.modal_panel.modal_panel_args_desc),args,"modal-panel"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"modal-panel-args-desc","modal-panel-args-desc",645921146,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"modal-panel")))].join('')));
}

return ((function (map__5774,map__5774__$1,args,attr,style,class$,backdrop_opacity,backdrop_color,wrap_nicely_QMARK_,child){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-modal-panel display-flex "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),style)], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),backdrop_color,new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1020),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__5774,map__5774__$1,args,attr,style,class$,backdrop_opacity,backdrop_color,wrap_nicely_QMARK_,child){
return (function (p1__5771_SHARP_){
cljs.core.println.call(null,"stopping propagation");

p1__5771_SHARP_.preventDefault();

return p1__5771_SHARP_.stopPropagation();
});})(map__5774,map__5774__$1,args,attr,style,class$,backdrop_opacity,backdrop_color,wrap_nicely_QMARK_,child))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1020)], null),(cljs.core.truth_(wrap_nicely_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"16px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px"], null):null))], null),child], null)], null);
});
;})(map__5774,map__5774__$1,args,attr,style,class$,backdrop_opacity,backdrop_color,wrap_nicely_QMARK_,child))
};
var modal_panel = function (var_args){
var p__5772 = null;
if (arguments.length > 0) {
var G__5775__i = 0, G__5775__a = new Array(arguments.length -  0);
while (G__5775__i < G__5775__a.length) {G__5775__a[G__5775__i] = arguments[G__5775__i + 0]; ++G__5775__i;}
  p__5772 = new cljs.core.IndexedSeq(G__5775__a,0);
} 
return modal_panel__delegate.call(this,p__5772);};
modal_panel.cljs$lang$maxFixedArity = 0;
modal_panel.cljs$lang$applyTo = (function (arglist__5776){
var p__5772 = cljs.core.seq(arglist__5776);
return modal_panel__delegate(p__5772);
});
modal_panel.cljs$core$IFn$_invoke$arity$variadic = modal_panel__delegate;
return modal_panel;
})()
;

//# sourceMappingURL=modal_panel.js.map