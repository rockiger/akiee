// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.datadefinitions');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
akiee.datadefinitions.ddd = (function() { 
var ddd__delegate = function (args){
return true;
};
var ddd = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9816__i = 0, G__9816__a = new Array(arguments.length -  0);
while (G__9816__i < G__9816__a.length) {G__9816__a[G__9816__i] = arguments[G__9816__i + 0]; ++G__9816__i;}
  args = new cljs.core.IndexedSeq(G__9816__a,0);
} 
return ddd__delegate.call(this,args);};
ddd.cljs$lang$maxFixedArity = 0;
ddd.cljs$lang$applyTo = (function (arglist__9817){
var args = cljs.core.seq(arglist__9817);
return ddd__delegate(args);
});
ddd.cljs$core$IFn$_invoke$arity$variadic = ddd__delegate;
return ddd;
})()
;
cljs.core.enable_console_print_BANG_();
akiee.datadefinitions.N1 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"As a user I want to change the state of a task with a simple action.","orgode_33.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox","DOING",null,null,"",null]);
akiee.datadefinitions.jsN1 = cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"As a user I want to change the state of a task with a simple action.","orgode_33.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"nil","DOING",null,null,"",null]));
akiee.datadefinitions.N1a = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"As a user I want to change the state of a task with a simple action.","orgode_45.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"nil","DOING",null,null,"",null]);
akiee.datadefinitions.N2 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"As a user I want to change the state of a task with a simple action.","orgode_83.##",null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null,"nil",null,null,null,"",null]);
akiee.datadefinitions.LON_1 = cljs.core.PersistentVector.EMPTY;
akiee.datadefinitions.LON_2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,akiee.datadefinitions.N1);
akiee.datadefinitions.RANK_1 = (10);
akiee.datadefinitions.RANK_2 = null;
akiee.datadefinitions.LS_1 = "TODO";
akiee.datadefinitions.LS_2 = "ALL";
akiee.datadefinitions.LS_3 = "DOING";
akiee.datadefinitions.NS_1 = "TODO";
akiee.datadefinitions.NS_2 = null;
akiee.datadefinitions.editor_switch = false;
akiee.datadefinitions.search_switch = true;
akiee.datadefinitions.sel1 = null;
akiee.datadefinitions.sel2 = "orgode_33.##";

/**
* @constructor
* @param {*} editor_QMARK_
* @param {*} search_QMARK_
* @param {*} entry_QMARK_
* @param {*} changed_QMARK_
* @param {*} ss
* @param {*} selected
* @param {*} editable
* @param {*} ls
* @param {*} lon
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
akiee.datadefinitions.global_state = (function (editor_QMARK_,search_QMARK_,entry_QMARK_,changed_QMARK_,ss,selected,editable,ls,lon,__meta,__extmap,__hash){
this.editor_QMARK_ = editor_QMARK_;
this.search_QMARK_ = search_QMARK_;
this.entry_QMARK_ = entry_QMARK_;
this.changed_QMARK_ = changed_QMARK_;
this.ss = ss;
this.selected = selected;
this.editable = editable;
this.ls = ls;
this.lon = lon;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
akiee.datadefinitions.global_state.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4360__auto__,k__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4360__auto____$1,k__4361__auto__,null);
});

akiee.datadefinitions.global_state.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4362__auto__,k9819,else__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
var G__9821 = (((k9819 instanceof cljs.core.Keyword))?k9819.fqn:null);
switch (G__9821) {
case "lon":
return self__.lon;

break;
case "ls":
return self__.ls;

break;
case "editable":
return self__.editable;

break;
case "selected":
return self__.selected;

break;
case "ss":
return self__.ss;

break;
case "changed?":
return self__.changed_QMARK_;

break;
case "entry?":
return self__.entry_QMARK_;

break;
case "search?":
return self__.search_QMARK_;

break;
case "editor?":
return self__.editor_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9819,else__4363__auto__);

}
});

akiee.datadefinitions.global_state.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4374__auto__,writer__4375__auto__,opts__4376__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
var pr_pair__4377__auto__ = ((function (this__4374__auto____$1){
return (function (keyval__4378__auto__){
return cljs.core.pr_sequential_writer(writer__4375__auto__,cljs.core.pr_writer,""," ","",opts__4376__auto__,keyval__4378__auto__);
});})(this__4374__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4375__auto__,pr_pair__4377__auto__,"#akiee.datadefinitions.global-state{",", ","}",opts__4376__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.editor_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.search_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.entry_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.changed_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.ss],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.selected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.editable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.ls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.lon],null))], null),self__.__extmap));
});

akiee.datadefinitions.global_state.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4358__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return self__.__meta;
});

akiee.datadefinitions.global_state.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4354__auto__){
var self__ = this;
var this__4354__auto____$1 = this;
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,self__.__hash));
});

akiee.datadefinitions.global_state.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4364__auto__){
var self__ = this;
var this__4364__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
});

akiee.datadefinitions.global_state.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var h__4178__auto__ = self__.__hash;
if(!((h__4178__auto__ == null))){
return h__4178__auto__;
} else {
var h__4178__auto____$1 = cljs.core.hash_imap(this__4355__auto____$1);
self__.__hash = h__4178__auto____$1;

return h__4178__auto____$1;
}
});

akiee.datadefinitions.global_state.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4356__auto__,other__4357__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3745__auto__ = other__4357__auto__;
if(cljs.core.truth_(and__3745__auto__)){
return ((this__4356__auto____$1.constructor === other__4357__auto__.constructor)) && (cljs.core.equiv_map(this__4356__auto____$1,other__4357__auto__));
} else {
return and__3745__auto__;
}
})())){
return true;
} else {
return false;
}
});

akiee.datadefinitions.global_state.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4369__auto__,k__4370__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$37,null,cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$39,null,cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null], null), null),k__4370__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4369__auto____$1),self__.__meta),k__4370__auto__);
} else {
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4370__auto__)),null));
}
});

akiee.datadefinitions.global_state.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4367__auto__,k__4368__auto__,G__9818){
var self__ = this;
var this__4367__auto____$1 = this;
var pred__9822 = cljs.core.keyword_identical_QMARK_;
var expr__9823 = k__4368__auto__;
if(cljs.core.truth_((function (){var G__9825 = cljs.core.constant$keyword$37;
var G__9826 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9825,G__9826) : pred__9822.call(null,G__9825,G__9826));
})())){
return (new akiee.datadefinitions.global_state(G__9818,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9827 = cljs.core.constant$keyword$38;
var G__9828 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9827,G__9828) : pred__9822.call(null,G__9827,G__9828));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,G__9818,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9829 = cljs.core.constant$keyword$39;
var G__9830 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9829,G__9830) : pred__9822.call(null,G__9829,G__9830));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,G__9818,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9831 = cljs.core.constant$keyword$40;
var G__9832 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9831,G__9832) : pred__9822.call(null,G__9831,G__9832));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,G__9818,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9833 = cljs.core.constant$keyword$41;
var G__9834 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9833,G__9834) : pred__9822.call(null,G__9833,G__9834));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,G__9818,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9835 = cljs.core.constant$keyword$42;
var G__9836 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9835,G__9836) : pred__9822.call(null,G__9835,G__9836));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,G__9818,self__.editable,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9837 = cljs.core.constant$keyword$43;
var G__9838 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9837,G__9838) : pred__9822.call(null,G__9837,G__9838));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,G__9818,self__.ls,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9839 = cljs.core.constant$keyword$44;
var G__9840 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9839,G__9840) : pred__9822.call(null,G__9839,G__9840));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,G__9818,self__.lon,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9841 = cljs.core.constant$keyword$45;
var G__9842 = expr__9823;
return (pred__9822.cljs$core$IFn$_invoke$arity$2 ? pred__9822.cljs$core$IFn$_invoke$arity$2(G__9841,G__9842) : pred__9822.call(null,G__9841,G__9842));
})())){
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,G__9818,self__.__meta,self__.__extmap,null));
} else {
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4368__auto__,G__9818),null));
}
}
}
}
}
}
}
}
}
});

akiee.datadefinitions.global_state.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.editor_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.search_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.entry_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.changed_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.ss],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.selected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.editable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.ls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.lon],null))], null),self__.__extmap));
});

akiee.datadefinitions.global_state.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4359__auto__,G__9818){
var self__ = this;
var this__4359__auto____$1 = this;
return (new akiee.datadefinitions.global_state(self__.editor_QMARK_,self__.search_QMARK_,self__.entry_QMARK_,self__.changed_QMARK_,self__.ss,self__.selected,self__.editable,self__.ls,self__.lon,G__9818,self__.__extmap,self__.__hash));
});

akiee.datadefinitions.global_state.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4365__auto__,entry__4366__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4366__auto__)){
return cljs.core._assoc(this__4365__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4366__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4366__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4365__auto____$1,entry__4366__auto__);
}
});

akiee.datadefinitions.global_state.cljs$lang$type = true;

akiee.datadefinitions.global_state.cljs$lang$ctorPrSeq = (function (this__4394__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"akiee.datadefinitions/global-state");
});

akiee.datadefinitions.global_state.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__){
return cljs.core._write(writer__4395__auto__,"akiee.datadefinitions/global-state");
});

akiee.datadefinitions.__GT_global_state = (function __GT_global_state(editor_QMARK_,search_QMARK_,entry_QMARK_,changed_QMARK_,ss,selected,editable,ls,lon){
return (new akiee.datadefinitions.global_state(editor_QMARK_,search_QMARK_,entry_QMARK_,changed_QMARK_,ss,selected,editable,ls,lon,null,null,null));
});

akiee.datadefinitions.map__GT_global_state = (function map__GT_global_state(G__9820){
return (new akiee.datadefinitions.global_state(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(G__9820),cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(G__9820),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9820,cljs.core.constant$keyword$37,cljs.core.array_seq([cljs.core.constant$keyword$38,cljs.core.constant$keyword$39,cljs.core.constant$keyword$40,cljs.core.constant$keyword$41,cljs.core.constant$keyword$42,cljs.core.constant$keyword$43,cljs.core.constant$keyword$44,cljs.core.constant$keyword$45], 0)),null));
});

akiee.datadefinitions.GS1 = (new akiee.datadefinitions.global_state(false,false,false,false,"",null,null,akiee.datadefinitions.LS_3,akiee.datadefinitions.LON_2,null,null,null));
akiee.datadefinitions.GS2 = (new akiee.datadefinitions.global_state(false,false,false,false,"",null,null,akiee.datadefinitions.LS_3,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(akiee.datadefinitions.LON_2,akiee.datadefinitions.N1),null,null,null));
