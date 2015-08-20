// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.rank');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('akiee.node');
goog.require('akiee.constants');
goog.require('akiee.app_db');
/**
* Integer -> Node
* Returns node at pos
* -------------------------
* Integer ListState -> Node
* Returns node at pos
*/
akiee.rank.task_by_pos = (function() {
var task_by_pos = null;
var task_by_pos__1 = (function (pos){
return cljs.core.get.call(null,akiee.app_db.tasks.call(null),pos);
});
var task_by_pos__2 = (function (pos,ls){
return cljs.core.get.call(null,akiee.app_db.tasks.call(null,ls),pos);
});
task_by_pos = function(pos,ls){
switch(arguments.length){
case 1:
return task_by_pos__1.call(this,pos);
case 2:
return task_by_pos__2.call(this,pos,ls);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
task_by_pos.cljs$core$IFn$_invoke$arity$1 = task_by_pos__1;
task_by_pos.cljs$core$IFn$_invoke$arity$2 = task_by_pos__2;
return task_by_pos;
})()
;
/**
* String Integer Integer -> ?
*/
akiee.rank.move_rank_BANG_ = (function move_rank_BANG_(ky,direction){
var ls = new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(akiee.app_db.node_by_pos.call(null,akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null))));
var sp = akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls));
var tp = ((cljs.core._EQ_.call(null,direction,"up"))?(akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls)) - (1)):(akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls)) + (1)));
var source_task = akiee.rank.task_by_pos.call(null,sp,ls);
var target_task = akiee.rank.task_by_pos.call(null,tp,ls);
var source_rank = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(source_task);
var target_rank = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(target_task);
var pred_QMARK_ = ((cljs.core._EQ_.call(null,direction,"up"))?((function (ls,sp,tp,source_task,target_task,source_rank,target_rank){
return (function (x){
if(((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) >= target_rank)) && ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) < source_rank))){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"rank","rank",-1706728502),(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) + (1)));
} else {
return x;
}
});})(ls,sp,tp,source_task,target_task,source_rank,target_rank))
:((function (ls,sp,tp,source_task,target_task,source_rank,target_rank){
return (function (x){
if(((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) <= target_rank)) && ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) > source_rank))){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"rank","rank",-1706728502),(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) - (1)));
} else {
return x;
}
});})(ls,sp,tp,source_task,target_task,source_rank,target_rank))
);
var new_lon = cljs.core.vec.call(null,cljs.core.map.call(null,pred_QMARK_,akiee.app_db.nodes.call(null)));
var new_task = cljs.core.assoc.call(null,source_task,new cljs.core.Keyword(null,"rank","rank",-1706728502),target_rank);
var np = akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null));
var newer_lon = cljs.core.assoc.call(null,new_lon,np,new_task);
if(cljs.core.truth_(target_rank)){
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,newer_lon);
} else {
return cljs.core.println.call(null,"No target task");
}
});
/**
* String ->
* Consumes a key-String ky;
* changes the rank of the corresponding node to rank higher
*/
akiee.rank.up_rank = (function up_rank(ky){
return akiee.rank.move_rank_BANG_.call(null,ky,"up");
});
/**
* String ->
* Consumes a key-String ky;
* changes the rank of the corresponding node to rank lower
*/
akiee.rank.down_rank = (function down_rank(ky){
return akiee.rank.move_rank_BANG_.call(null,ky,"down");
});

//# sourceMappingURL=rank.js.map