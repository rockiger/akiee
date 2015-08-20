// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.splits');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.util');
/**
* Return a drag handle to go into a vertical or horizontal splitter bar:
* orientation: Can be :horizonal or :vertical
* over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
*/
re_com.splits.drag_handle = (function drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = [cljs.core.str("solid 1px "),cljs.core.str(color)].join('');
var flex_flow = [cljs.core.str(((vertical_QMARK_)?"row":"column")),cljs.core.str(" nowrap")].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_flow_style.call(null,flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null)], null);
});
re_com.splits.hv_split_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"markup to go in the left (or top) panel"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"markup to go in the right (or bottom) panel"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"applied to the outer container of the two panels. Equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"width of the outer container of the two panels. A CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"height of the outer container of the two panels. A CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user moves the splitter bar (on mouse up, not on each mouse move). Given the new ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null)," percentage split"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(50),new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"initial split percentage for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null),". Can be double value or string (with/without percentage sign)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"8px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"thickness of the splitter"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"8px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"thickness of the margin around the panels"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated, applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override, applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed, applied to outer container"], null)], null)], null);
/**
* Returns markup for a horizontal layout component
* @param {...*} var_args
*/
re_com.splits.h_split = (function() { 
var h_split__delegate = function (p__5877){
var map__5879 = p__5877;
var map__5879__$1 = ((cljs.core.seq_QMARK_.call(null,map__5879))?cljs.core.apply.call(null,cljs.core.hash_map,map__5879):map__5879);
var args = map__5879__$1;
var panel_2 = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var height = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var attr = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var initial_split = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var on_split_change = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var width = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var size = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var style = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.splits.hv_split_args_desc),args,"h-split"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"hv-split-args-desc","hv-split-args-desc",-782944186,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"h-split")))].join('')));
}

var container_id = cljs.core.gensym.call(null,"h-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (mouse_x){
var container = re_com.util.get_element_by_id.call(null,container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var _LT_html_GT__QMARK_ = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (p1__5876_SHARP_){
return cljs.core._EQ_.call(null,p1__5876_SHARP_,document.documentElement);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mouseout = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
if(_LT_html_GT__QMARK_.call(null,event.relatedTarget)){
return stop_drag.call(null);
} else {
return null;
}
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientX));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (class$__$1,style__$1,attr__$1,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-h-split display-flex "),cljs.core.str(class$__$1)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style__$1)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mouseout.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
], null):null),attr__$1);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (class$__$1,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("display-flex "),cljs.core.str(class$__$1)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str(percentage),cljs.core.str(" 1 0px")].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (class$__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("display-flex "),cljs.core.str(class$__$1)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str("0 0 "),cljs.core.str(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
});
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__5879,map__5879__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
};
var h_split = function (var_args){
var p__5877 = null;
if (arguments.length > 0) {
var G__5880__i = 0, G__5880__a = new Array(arguments.length -  0);
while (G__5880__i < G__5880__a.length) {G__5880__a[G__5880__i] = arguments[G__5880__i + 0]; ++G__5880__i;}
  p__5877 = new cljs.core.IndexedSeq(G__5880__a,0);
} 
return h_split__delegate.call(this,p__5877);};
h_split.cljs$lang$maxFixedArity = 0;
h_split.cljs$lang$applyTo = (function (arglist__5881){
var p__5877 = cljs.core.seq(arglist__5881);
return h_split__delegate(p__5877);
});
h_split.cljs$core$IFn$_invoke$arity$variadic = h_split__delegate;
return h_split;
})()
;
/**
* Returns markup for a vertical layout component
* @param {...*} var_args
*/
re_com.splits.v_split = (function() { 
var v_split__delegate = function (p__5883){
var map__5885 = p__5883;
var map__5885__$1 = ((cljs.core.seq_QMARK_.call(null,map__5885))?cljs.core.apply.call(null,cljs.core.hash_map,map__5885):map__5885);
var args = map__5885__$1;
var panel_2 = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var height = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var attr = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var initial_split = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var on_split_change = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var width = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var size = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var style = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.splits.hv_split_args_desc),args,"v-split"))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"hv-split-args-desc","hv-split-args-desc",-782944186,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"v-split")))].join('')));
}

var container_id = cljs.core.gensym.call(null,"v-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (mouse_y){
var container = re_com.util.get_element_by_id.call(null,container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var _LT_html_GT__QMARK_ = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (p1__5882_SHARP_){
return cljs.core._EQ_.call(null,p1__5882_SHARP_,document.documentElement);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mouseout = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
if(_LT_html_GT__QMARK_.call(null,event.relatedTarget)){
return stop_drag.call(null);
} else {
return null;
}
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientY));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (class$__$1,style__$1,attr__$1,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-v-split display-flex "),cljs.core.str(class$__$1)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style__$1)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mouseout.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
], null):null),attr__$1);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (class$__$1,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("display-flex "),cljs.core.str(class$__$1)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str(percentage),cljs.core.str(" 1 0px")].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (class$__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("display-flex "),cljs.core.str(class$__$1)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str("0 0 "),cljs.core.str(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
});
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__5885,map__5885__$1,args,panel_2,panel_1,height,margin,attr,initial_split,splitter_size,on_split_change,width,size,style,class$))
};
var v_split = function (var_args){
var p__5883 = null;
if (arguments.length > 0) {
var G__5886__i = 0, G__5886__a = new Array(arguments.length -  0);
while (G__5886__i < G__5886__a.length) {G__5886__a[G__5886__i] = arguments[G__5886__i + 0]; ++G__5886__i;}
  p__5883 = new cljs.core.IndexedSeq(G__5886__a,0);
} 
return v_split__delegate.call(this,p__5883);};
v_split.cljs$lang$maxFixedArity = 0;
v_split.cljs$lang$applyTo = (function (arglist__5887){
var p__5883 = cljs.core.seq(arglist__5887);
return v_split__delegate(p__5883);
});
v_split.cljs$core$IFn$_invoke$arity$variadic = v_split__delegate;
return v_split;
})()
;

//# sourceMappingURL=splits.js.map