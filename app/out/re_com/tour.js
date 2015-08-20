// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.tour');
goog.require('cljs.core');
goog.require('re_com.buttons');
goog.require('re_com.box');
goog.require('reagent.core');
/**
* Returns a map containing
* - A reagent atom for each tour step controlling popover show/hide (boolean)
* - A standard atom holding the current step (integer)
* - A copy of the steps parameter passed in, to determine the order for prev/next functions
* It sets the first step atom to true so that it will be initially shown
* Sample return value:
* {:steps [:step1 :step2 :step3]
* :current-step (atom 0)
* :step1 (reagent/atom true)
* :step2 (reagent/atom false)
* :step3 (reagent/atom false)}
*/
re_com.tour.make_tour = (function make_tour(tour_spec){
var tour_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-step","current-step",-2023410137),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"steps","steps",-128433302),tour_spec], null);
return cljs.core.reduce.call(null,((function (tour_map){
return (function (p1__5993_SHARP_,p2__5994_SHARP_){
return cljs.core.assoc.call(null,p1__5993_SHARP_,p2__5994_SHARP_,reagent.core.atom.call(null,false));
});})(tour_map))
,tour_map,tour_spec);
});
/**
* Resets all poover atoms to false
*/
re_com.tour.initialise_tour = (function initialise_tour(tour){
return cljs.core.doall.call(null,(function (){var iter__4513__auto__ = (function iter__5999(s__6000){
return (new cljs.core.LazySeq(null,(function (){
var s__6000__$1 = s__6000;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6000__$1);
if(temp__4126__auto__){
var s__6000__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6000__$2)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,s__6000__$2);
var size__4512__auto__ = cljs.core.count.call(null,c__4511__auto__);
var b__6002 = cljs.core.chunk_buffer.call(null,size__4512__auto__);
if((function (){var i__6001 = (0);
while(true){
if((i__6001 < size__4512__auto__)){
var step = cljs.core._nth.call(null,c__4511__auto__,i__6001);
cljs.core.chunk_append.call(null,b__6002,cljs.core.reset_BANG_.call(null,step.call(null,tour),false));

var G__6003 = (i__6001 + (1));
i__6001 = G__6003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6002),iter__5999.call(null,cljs.core.chunk_rest.call(null,s__6000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6002),null);
}
} else {
var step = cljs.core.first.call(null,s__6000__$2);
return cljs.core.cons.call(null,cljs.core.reset_BANG_.call(null,step.call(null,tour),false),iter__5999.call(null,cljs.core.rest.call(null,s__6000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4513__auto__.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour));
})());
});
/**
* Sets the first popover atom in the tour to true
*/
re_com.tour.start_tour = (function start_tour(tour){
re_com.tour.initialise_tour.call(null,tour);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour),(0));

return cljs.core.reset_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour)).call(null,tour),true);
});
/**
* Closes all tour popovers
*/
re_com.tour.finish_tour = (function finish_tour(tour){
return re_com.tour.initialise_tour.call(null,tour);
});
re_com.tour.next_tour_step = (function next_tour_step(tour){
var steps = new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step + (1));
if((new_step < cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour)))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,old_step).call(null,tour),false);

return cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,new_step).call(null,tour),true);
} else {
return null;
}
});
re_com.tour.prev_tour_step = (function prev_tour_step(tour){
var steps = new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step - (1));
if((new_step >= (0))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,old_step).call(null,tour),false);

return cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,new_step).call(null,tour),true);
} else {
return null;
}
});
/**
* Generate the hr and previous/next buttons markup.
* If first button in tour, don't generate a Previous button.
* If last button in tour, change Next button to a Finish button
*/
re_com.tour.make_tour_nav = (function make_tour_nav(tour){
var on_first_button = cljs.core._EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour)),(0));
var on_last_button = cljs.core._EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour)),(cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour)) - (1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0 10px"], null))], null)], null),((on_first_button)?null:new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_first_button,on_last_button){
return (function (event){
re_com.tour.prev_tour_step.call(null,tour);

return null;
});})(on_first_button,on_last_button))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"15px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),((on_last_button)?"Finish":"Next"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_first_button,on_last_button){
return (function (event){
if(on_last_button){
re_com.tour.finish_tour.call(null,tour);
} else {
re_com.tour.next_tour_step.call(null,tour);
}

return null;
});})(on_first_button,on_last_button))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null)], null);
});

//# sourceMappingURL=tour.js.map