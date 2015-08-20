// Compiled by ClojureScript 0.0-2725 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
/**
* Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
* (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
*/
re_com.util.fmap = (function fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4513__auto__ = (function iter__5841(s__5842){
return (new cljs.core.LazySeq(null,(function (){
var s__5842__$1 = s__5842;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5842__$1);
if(temp__4126__auto__){
var s__5842__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5842__$2)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,s__5842__$2);
var size__4512__auto__ = cljs.core.count.call(null,c__4511__auto__);
var b__5844 = cljs.core.chunk_buffer.call(null,size__4512__auto__);
if((function (){var i__5843 = (0);
while(true){
if((i__5843 < size__4512__auto__)){
var vec__5847 = cljs.core._nth.call(null,c__4511__auto__,i__5843);
var k = cljs.core.nth.call(null,vec__5847,(0),null);
var val = cljs.core.nth.call(null,vec__5847,(1),null);
cljs.core.chunk_append.call(null,b__5844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__5849 = (i__5843 + (1));
i__5843 = G__5849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5844),iter__5841.call(null,cljs.core.chunk_rest.call(null,s__5842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5844),null);
}
} else {
var vec__5848 = cljs.core.first.call(null,s__5842__$2);
var k = cljs.core.nth.call(null,vec__5848,(0),null);
var val = cljs.core.nth.call(null,vec__5848,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),iter__5841.call(null,cljs.core.rest.call(null,s__5842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4513__auto__.call(null,m);
})());
});
re_com.util.deref_or_value = (function deref_or_value(val_or_atom){
if((function (){var G__5851 = val_or_atom;
if(G__5851){
var bit__4438__auto__ = (G__5851.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4438__auto__) || (G__5851.cljs$core$IDeref$)){
return true;
} else {
if((!G__5851.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5851);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5851);
}
})()){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function get_element_by_id(id){
return document.getElementById(id);
});
/**
* Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
*/
re_com.util.pad_zero = (function pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
* return 'num' as a string of 'len' characters, left padding with '0' as necessary
*/
re_com.util.pad_zero_number = (function pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
* takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
* @param {...*} var_args
*/
re_com.util.px = (function() { 
var px__delegate = function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?((0) - val):val)),cljs.core.str("px")].join('');
};
var px = function (val,var_args){
var negative = null;
if (arguments.length > 1) {
var G__5852__i = 0, G__5852__a = new Array(arguments.length -  1);
while (G__5852__i < G__5852__a.length) {G__5852__a[G__5852__i] = arguments[G__5852__i + 1]; ++G__5852__i;}
  negative = new cljs.core.IndexedSeq(G__5852__a,0);
} 
return px__delegate.call(this,val,negative);};
px.cljs$lang$maxFixedArity = 1;
px.cljs$lang$applyTo = (function (arglist__5853){
var val = cljs.core.first(arglist__5853);
var negative = cljs.core.rest(arglist__5853);
return px__delegate(val,negative);
});
px.cljs$core$IFn$_invoke$arity$variadic = px__delegate;
return px;
})()
;
/**
* Removes the item at position n from a vector v, returning a shrunk vector
*/
re_com.util.remove_nth = (function remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
* Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
* Returns nil if id not found
* @param {...*} var_args
*/
re_com.util.position_for_id = (function() { 
var position_for_id__delegate = function (id,v,p__5854){
var map__5856 = p__5854;
var map__5856__$1 = ((cljs.core.seq_QMARK_.call(null,map__5856))?cljs.core.apply.call(null,cljs.core.hash_map,map__5856):map__5856);
var id_fn = cljs.core.get.call(null,map__5856__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__5856,map__5856__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__5856,map__5856__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
};
var position_for_id = function (id,v,var_args){
var p__5854 = null;
if (arguments.length > 2) {
var G__5857__i = 0, G__5857__a = new Array(arguments.length -  2);
while (G__5857__i < G__5857__a.length) {G__5857__a[G__5857__i] = arguments[G__5857__i + 2]; ++G__5857__i;}
  p__5854 = new cljs.core.IndexedSeq(G__5857__a,0);
} 
return position_for_id__delegate.call(this,id,v,p__5854);};
position_for_id.cljs$lang$maxFixedArity = 2;
position_for_id.cljs$lang$applyTo = (function (arglist__5858){
var id = cljs.core.first(arglist__5858);
arglist__5858 = cljs.core.next(arglist__5858);
var v = cljs.core.first(arglist__5858);
var p__5854 = cljs.core.rest(arglist__5858);
return position_for_id__delegate(id,v,p__5854);
});
position_for_id.cljs$core$IFn$_invoke$arity$variadic = position_for_id__delegate;
return position_for_id;
})()
;
/**
* Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
* Returns nil if id not found
* @param {...*} var_args
*/
re_com.util.item_for_id = (function() { 
var item_for_id__delegate = function (id,v,p__5860){
var map__5862 = p__5860;
var map__5862__$1 = ((cljs.core.seq_QMARK_.call(null,map__5862))?cljs.core.apply.call(null,cljs.core.hash_map,map__5862):map__5862);
var id_fn = cljs.core.get.call(null,map__5862__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__5862,map__5862__$1,id_fn){
return (function (p1__5859_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__5859_SHARP_),id);
});})(map__5862,map__5862__$1,id_fn))
,v));
};
var item_for_id = function (id,v,var_args){
var p__5860 = null;
if (arguments.length > 2) {
var G__5863__i = 0, G__5863__a = new Array(arguments.length -  2);
while (G__5863__i < G__5863__a.length) {G__5863__a[G__5863__i] = arguments[G__5863__i + 2]; ++G__5863__i;}
  p__5860 = new cljs.core.IndexedSeq(G__5863__a,0);
} 
return item_for_id__delegate.call(this,id,v,p__5860);};
item_for_id.cljs$lang$maxFixedArity = 2;
item_for_id.cljs$lang$applyTo = (function (arglist__5864){
var id = cljs.core.first(arglist__5864);
arglist__5864 = cljs.core.next(arglist__5864);
var v = cljs.core.first(arglist__5864);
var p__5860 = cljs.core.rest(arglist__5864);
return item_for_id__delegate(id,v,p__5860);
});
item_for_id.cljs$core$IFn$_invoke$arity$variadic = item_for_id__delegate;
return item_for_id;
})()
;
/**
* Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
* Return v where item matching 'id' is excluded
* @param {...*} var_args
*/
re_com.util.remove_id_item = (function() { 
var remove_id_item__delegate = function (id,v,p__5866){
var map__5868 = p__5866;
var map__5868__$1 = ((cljs.core.seq_QMARK_.call(null,map__5868))?cljs.core.apply.call(null,cljs.core.hash_map,map__5868):map__5868);
var id_fn = cljs.core.get.call(null,map__5868__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__5868,map__5868__$1,id_fn){
return (function (p1__5865_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__5865_SHARP_),id);
});})(map__5868,map__5868__$1,id_fn))
,v);
};
var remove_id_item = function (id,v,var_args){
var p__5866 = null;
if (arguments.length > 2) {
var G__5869__i = 0, G__5869__a = new Array(arguments.length -  2);
while (G__5869__i < G__5869__a.length) {G__5869__a[G__5869__i] = arguments[G__5869__i + 2]; ++G__5869__i;}
  p__5866 = new cljs.core.IndexedSeq(G__5869__a,0);
} 
return remove_id_item__delegate.call(this,id,v,p__5866);};
remove_id_item.cljs$lang$maxFixedArity = 2;
remove_id_item.cljs$lang$applyTo = (function (arglist__5870){
var id = cljs.core.first(arglist__5870);
arglist__5870 = cljs.core.next(arglist__5870);
var v = cljs.core.first(arglist__5870);
var p__5866 = cljs.core.rest(arglist__5870);
return remove_id_item__delegate(id,v,p__5866);
});
remove_id_item.cljs$core$IFn$_invoke$arity$variadic = remove_id_item__delegate;
return remove_id_item;
})()
;
/**
* (for [[index item first? last?] (enumerate coll)] ...)
*/
re_com.util.enumerate = (function enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
* Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
* and return these sums in a map
*/
re_com.util.sum_scroll_offsets = (function sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__5871 = current_node.parentNode;
var G__5872 = (sum_scroll_left + current_node.scrollLeft);
var G__5873 = (sum_scroll_top + current_node.scrollTop);
current_node = G__5871;
sum_scroll_left = G__5872;
sum_scroll_top = G__5873;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});

//# sourceMappingURL=util.js.map