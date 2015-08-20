// Compiled by ClojureScript 0.0-2725 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__17576 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17576) : cljs.core.atom.call(null,G__17576));
})();
reagent.ratom.running = (function running(){
var G__17578 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17578) : cljs.core.deref.call(null,G__17578));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_17580 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17580;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17581 = this$__$1;
return goog.getUid(G__17581);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__17582_17593 = key;
var G__17583_17594 = this$__$1;
var G__17584_17595 = oldval;
var G__17585_17596 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17582_17593,G__17583_17594,G__17584_17595,G__17585_17596) : f.call(null,G__17582_17593,G__17583_17594,G__17584_17595,G__17585_17596));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17586 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17586) : f.call(null,G__17586));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17587 = self__.state;
var G__17588 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17587,G__17588) : f.call(null,G__17587,G__17588));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17589 = self__.state;
var G__17590 = x;
var G__17591 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17589,G__17590,G__17591) : f.call(null,G__17589,G__17590,G__17591));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__17592 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__17592) : self__.validator.call(null,G__17592));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write(writer__4345__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__17600__delegate = function (x,p__17597){
var map__17599 = p__17597;
var map__17599__$1 = ((cljs.core.seq_QMARK_(map__17599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17599):map__17599);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17600 = function (x,var_args){
var p__17597 = null;
if (arguments.length > 1) {
var G__17601__i = 0, G__17601__a = new Array(arguments.length -  1);
while (G__17601__i < G__17601__a.length) {G__17601__a[G__17601__i] = arguments[G__17601__i + 1]; ++G__17601__i;}
  p__17597 = new cljs.core.IndexedSeq(G__17601__a,0);
} 
return G__17600__delegate.call(this,x,p__17597);};
G__17600.cljs$lang$maxFixedArity = 1;
G__17600.cljs$lang$applyTo = (function (arglist__17602){
var x = cljs.core.first(arglist__17602);
var p__17597 = cljs.core.rest(arglist__17602);
return G__17600__delegate(x,p__17597);
});
G__17600.cljs$core$IFn$_invoke$arity$variadic = G__17600__delegate;
return G__17600;
})()
;
atom = function(x,var_args){
var p__17597 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17603 = null;
if (arguments.length > 1) {
var G__17604__i = 0, G__17604__a = new Array(arguments.length -  1);
while (G__17604__i < G__17604__a.length) {G__17604__a[G__17604__i] = arguments[G__17604__i + 1]; ++G__17604__i;}
G__17603 = new cljs.core.IndexedSeq(G__17604__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17605 = this$__$1;
return goog.getUid(G__17605);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(self__.path,writer,opts);

cljs.core._write(writer," ");

cljs.core.pr_writer(self__.ratom,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta(self__.ratom);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.update_in,self__.path,f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y,more], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17606 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17606) : cljs.core.deref.call(null,G__17606));
})(),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write(writer__4345__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj17608 = {};
return obj17608;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__17612 = x__4401__auto__;
return goog.typeOf(G__17612);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj17614 = {};
return obj17614;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (reagent.ratom.run[(function (){var G__17618 = x__4401__auto__;
return goog.typeOf(G__17618);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (reagent.ratom.run["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj17620 = {};
return obj17620;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (reagent.ratom._update_watching[(function (){var G__17624 = x__4401__auto__;
return goog.typeOf(G__17624);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3745__auto__ = k;
if(and__3745__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3745__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4401__auto__ = (((k == null))?null:k);
return (function (){var or__3757__auto__ = (reagent.ratom._handle_change[(function (){var G__17628 = x__4401__auto__;
return goog.typeOf(G__17628);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__17633_17637 = key;
var G__17634_17638 = obs;
var G__17635_17639 = oldval;
var G__17636_17640 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17633_17637,G__17634_17638,G__17635_17639,G__17636_17640) : f.call(null,G__17633_17637,G__17634_17638,G__17635_17639,G__17636_17640));

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3745__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3745__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3745__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3757__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__17641_17662 = cljs.core.seq(derefed);
var chunk__17642_17663 = null;
var count__17643_17664 = (0);
var i__17644_17665 = (0);
while(true){
if((i__17644_17665 < count__17643_17664)){
var w_17666 = chunk__17642_17663.cljs$core$IIndexed$_nth$arity$2(null,i__17644_17665);
if(cljs.core.contains_QMARK_(self__.watching,w_17666)){
} else {
cljs.core.add_watch(w_17666,this$__$1,reagent.ratom._handle_change);
}

var G__17667 = seq__17641_17662;
var G__17668 = chunk__17642_17663;
var G__17669 = count__17643_17664;
var G__17670 = (i__17644_17665 + (1));
seq__17641_17662 = G__17667;
chunk__17642_17663 = G__17668;
count__17643_17664 = G__17669;
i__17644_17665 = G__17670;
continue;
} else {
var temp__4126__auto___17671 = cljs.core.seq(seq__17641_17662);
if(temp__4126__auto___17671){
var seq__17641_17672__$1 = temp__4126__auto___17671;
if(cljs.core.chunked_seq_QMARK_(seq__17641_17672__$1)){
var c__4544__auto___17673 = cljs.core.chunk_first(seq__17641_17672__$1);
var G__17674 = cljs.core.chunk_rest(seq__17641_17672__$1);
var G__17675 = c__4544__auto___17673;
var G__17676 = cljs.core.count(c__4544__auto___17673);
var G__17677 = (0);
seq__17641_17662 = G__17674;
chunk__17642_17663 = G__17675;
count__17643_17664 = G__17676;
i__17644_17665 = G__17677;
continue;
} else {
var w_17678 = cljs.core.first(seq__17641_17672__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17678)){
} else {
cljs.core.add_watch(w_17678,this$__$1,reagent.ratom._handle_change);
}

var G__17679 = cljs.core.next(seq__17641_17672__$1);
var G__17680 = null;
var G__17681 = (0);
var G__17682 = (0);
seq__17641_17662 = G__17679;
chunk__17642_17663 = G__17680;
count__17643_17664 = G__17681;
i__17644_17665 = G__17682;
continue;
}
} else {
}
}
break;
}

var seq__17645_17683 = cljs.core.seq(self__.watching);
var chunk__17646_17684 = null;
var count__17647_17685 = (0);
var i__17648_17686 = (0);
while(true){
if((i__17648_17686 < count__17647_17685)){
var w_17687 = chunk__17646_17684.cljs$core$IIndexed$_nth$arity$2(null,i__17648_17686);
if(cljs.core.contains_QMARK_(derefed,w_17687)){
} else {
cljs.core.remove_watch(w_17687,this$__$1);
}

var G__17688 = seq__17645_17683;
var G__17689 = chunk__17646_17684;
var G__17690 = count__17647_17685;
var G__17691 = (i__17648_17686 + (1));
seq__17645_17683 = G__17688;
chunk__17646_17684 = G__17689;
count__17647_17685 = G__17690;
i__17648_17686 = G__17691;
continue;
} else {
var temp__4126__auto___17692 = cljs.core.seq(seq__17645_17683);
if(temp__4126__auto___17692){
var seq__17645_17693__$1 = temp__4126__auto___17692;
if(cljs.core.chunked_seq_QMARK_(seq__17645_17693__$1)){
var c__4544__auto___17694 = cljs.core.chunk_first(seq__17645_17693__$1);
var G__17695 = cljs.core.chunk_rest(seq__17645_17693__$1);
var G__17696 = c__4544__auto___17694;
var G__17697 = cljs.core.count(c__4544__auto___17694);
var G__17698 = (0);
seq__17645_17683 = G__17695;
chunk__17646_17684 = G__17696;
count__17647_17685 = G__17697;
i__17648_17686 = G__17698;
continue;
} else {
var w_17699 = cljs.core.first(seq__17645_17693__$1);
if(cljs.core.contains_QMARK_(derefed,w_17699)){
} else {
cljs.core.remove_watch(w_17699,this$__$1);
}

var G__17700 = cljs.core.next(seq__17645_17693__$1);
var G__17701 = null;
var G__17702 = (0);
var G__17703 = (0);
seq__17645_17683 = G__17700;
chunk__17646_17684 = G__17701;
count__17647_17685 = G__17702;
i__17648_17686 = G__17703;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17649 = this$__$1;
return goog.getUid(G__17649);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__17650_17704 = cljs.core.seq(self__.watching);
var chunk__17651_17705 = null;
var count__17652_17706 = (0);
var i__17653_17707 = (0);
while(true){
if((i__17653_17707 < count__17652_17706)){
var w_17708 = chunk__17651_17705.cljs$core$IIndexed$_nth$arity$2(null,i__17653_17707);
cljs.core.remove_watch(w_17708,this$__$1);

var G__17709 = seq__17650_17704;
var G__17710 = chunk__17651_17705;
var G__17711 = count__17652_17706;
var G__17712 = (i__17653_17707 + (1));
seq__17650_17704 = G__17709;
chunk__17651_17705 = G__17710;
count__17652_17706 = G__17711;
i__17653_17707 = G__17712;
continue;
} else {
var temp__4126__auto___17713 = cljs.core.seq(seq__17650_17704);
if(temp__4126__auto___17713){
var seq__17650_17714__$1 = temp__4126__auto___17713;
if(cljs.core.chunked_seq_QMARK_(seq__17650_17714__$1)){
var c__4544__auto___17715 = cljs.core.chunk_first(seq__17650_17714__$1);
var G__17716 = cljs.core.chunk_rest(seq__17650_17714__$1);
var G__17717 = c__4544__auto___17715;
var G__17718 = cljs.core.count(c__4544__auto___17715);
var G__17719 = (0);
seq__17650_17704 = G__17716;
chunk__17651_17705 = G__17717;
count__17652_17706 = G__17718;
i__17653_17707 = G__17719;
continue;
} else {
var w_17720 = cljs.core.first(seq__17650_17714__$1);
cljs.core.remove_watch(w_17720,this$__$1);

var G__17721 = cljs.core.next(seq__17650_17714__$1);
var G__17722 = null;
var G__17723 = (0);
var G__17724 = (0);
seq__17650_17704 = G__17721;
chunk__17651_17705 = G__17722;
count__17652_17706 = G__17723;
i__17653_17707 = G__17724;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches(a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17654 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17654) : f__$1.call(null,G__17654));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17655 = self__.state;
var G__17656 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__17655,G__17656) : f__$1.call(null,G__17655,G__17656));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17657 = self__.state;
var G__17658 = x;
var G__17659 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__17657,G__17658,G__17659) : f__$1.call(null,G__17657,G__17658,G__17659));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
var G__17660_17725 = oldval;
var G__17661_17726 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17660_17725,G__17661_17726) : self__.on_set.call(null,G__17660_17725,G__17661_17726));
} else {
}

return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if(cljs.core.empty_QMARK_(self__.watches)){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not((function (){var or__3757__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__10168__auto___17727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__10168__auto___17727], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3757__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3757__auto__)){
return or__3757__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0)))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__,opt__4346__auto__){
return cljs.core._write(writer__4345__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__17728){
var map__17730 = p__17728;
var map__17730__$1 = ((cljs.core.seq_QMARK_(map__17730))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17730):map__17730);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,cljs.core.constant$keyword$74);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,cljs.core.constant$keyword$75);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,cljs.core.constant$keyword$76);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,cljs.core.constant$keyword$77);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__17728 = null;
if (arguments.length > 1) {
var G__17731__i = 0, G__17731__a = new Array(arguments.length -  1);
while (G__17731__i < G__17731__a.length) {G__17731__a[G__17731__i] = arguments[G__17731__i + 1]; ++G__17731__i;}
  p__17728 = new cljs.core.IndexedSeq(G__17731__a,0);
} 
return make_reaction__delegate.call(this,f,p__17728);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17732){
var f = cljs.core.first(arglist__17732);
var p__17728 = cljs.core.rest(arglist__17732);
return make_reaction__delegate(f,p__17728);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
