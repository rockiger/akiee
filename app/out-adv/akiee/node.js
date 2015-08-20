// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.node');
goog.require('cljs.core');
goog.require('akiee.datadefinitions');
goog.require('cljs.nodejs');
goog.require('akiee.fileoperations');
goog.require('cljs.test');
goog.require('akiee.constants');
goog.require('clojure.string');
akiee.node.org = (function (){var G__10639 = "./lib/markdown-org-mode-parser";
return (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1(G__10639) : cljs.nodejs.require.call(null,G__10639));
})();
akiee.node.parse_file = akiee.node.org.parseBigString;
/**
* Nil -> String
* Returns a unique key for new nodes
*/
akiee.node.__GT_key = (function __GT_key(){
return [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("node_"))].join('');
});
try{var values__9971__auto___10641 = cljs.core.List.EMPTY;
var result__9972__auto___10642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.__GT_key,values__9971__auto___10641);
if(cljs.core.truth_(result__9972__auto___10642)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.__GT_key,values__9971__auto___10641),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"->key","->key",-764907874,null),values__9971__auto___10641)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10640){var t__10009__auto___10643 = e10640;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),cljs.core.constant$keyword$60,t__10009__auto___10643,cljs.core.constant$keyword$58,null], null));
}/**
* Node Node -> Boolean
* Compares 2 Nodes n1 n2, the :key of the nodes is ignored,
* because it's random
*/
akiee.node.node_EQ_ = (function node_EQ_(n1,n2){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(n1),cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(n2)));
});
try{var values__9971__auto___10645 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),akiee.node.node_EQ_(akiee.datadefinitions.N1,akiee.datadefinitions.N1a));
var result__9972__auto___10646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10645);
if(cljs.core.truth_(result__9972__auto___10646)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10645),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10645)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10644){var t__10009__auto___10647 = e10644;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),cljs.core.constant$keyword$60,t__10009__auto___10647,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10649 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),akiee.node.node_EQ_(akiee.datadefinitions.N1,akiee.datadefinitions.N2));
var result__9972__auto___10650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10649);
if(cljs.core.truth_(result__9972__auto___10650)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10649),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10649)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10648){var t__10009__auto___10651 = e10648;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),cljs.core.constant$keyword$60,t__10009__auto___10651,cljs.core.constant$keyword$58,null], null));
}/**
* JsArray Vector -> Vector
* consumes a javascript array a and Vector v and produces a vector
* TODO make this more robust and general
*/
akiee.node.array__GT_vec = (function array__GT_vec(v,a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.length,(0))){
return v;
} else {
return array__GT_vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,a.shift()),a);
}
});
try{var values__9971__auto___10655 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY),akiee.node.array__GT_vec(cljs.core.PersistentVector.EMPTY,[]));
var result__9972__auto___10656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10655);
if(cljs.core.truth_(result__9972__auto___10656)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10655),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10655)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10654){var t__10009__auto___10657 = e10654;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$60,t__10009__auto___10657,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10659 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),akiee.node.array__GT_vec(cljs.core.PersistentVector.EMPTY,[1, 2, 3]));
var result__9972__auto___10660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10659);
if(cljs.core.truth_(result__9972__auto___10660)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10659),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10659)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10658){var t__10009__auto___10661 = e10658;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),cljs.core.constant$keyword$60,t__10009__auto___10661,cljs.core.constant$keyword$58,null], null));
}/**
* JsNode -> Node
* consumes a javascript org-node (object) jn and produces a node
* TODO make this more robust and general
*/
akiee.node.jsnode__GT_node = (function jsnode__GT_node(jn){
var rank = (jn["rank"]);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str((jn["headline"]))].join(''),(jn["key"]),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rank,null))?(rank | (0)):null),cljs.core.PersistentArrayMap.EMPTY,null,(jn["level"]),null,(jn["todo"]),null,null,((((cljs.core.count(clojure.string.trim((jn["body"]))) > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((jn["body"]),"\n")))?clojure.string.trim((jn["body"])):null),null]);
});
try{var values__9971__auto___10663 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(akiee.datadefinitions.N1)),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(akiee.node.jsnode__GT_node(akiee.datadefinitions.jsN1)));
var result__9972__auto___10664 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10663);
if(cljs.core.truth_(result__9972__auto___10664)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.constant$keyword$25,cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(cljs.core.constant$keyword$25,new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10663),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.constant$keyword$25,cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(cljs.core.constant$keyword$25,new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10663)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10662){var t__10009__auto___10665 = e10662;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.constant$keyword$25,cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(cljs.core.constant$keyword$25,new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),cljs.core.constant$keyword$60,t__10009__auto___10665,cljs.core.constant$keyword$58,null], null));
}/**
* TaskState String String -> Node
* Consumes a TaskState ts a headline hl, a project pro, a Rank r;
* creates a node
*/
akiee.node.__GT_node = (function __GT_node(ts,hl,pro,r){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,hl,akiee.node.__GT_key(),r,cljs.core.PersistentArrayMap.EMPTY,null,(2),null,pro,ts,null,null,"",null]);
});
try{var values__9971__auto___10667 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",akiee.constants.TODO,null,null,"",null])),akiee.node.__GT_node(akiee.constants.TODO,"Test Headline","Inbox",(10)));
var result__9972__auto___10668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.node_EQ_,values__9971__auto___10667);
if(cljs.core.truth_(result__9972__auto___10668)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,"",null])),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.node_EQ_,values__9971__auto___10667),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,"",null])),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"node=","node=",1955998775,null),values__9971__auto___10667)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10666){var t__10009__auto___10669 = e10666;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,"",null])),cljs.core.constant$keyword$60,t__10009__auto___10669,cljs.core.constant$keyword$58,null], null));
}/**
* ListOfNodes Node String -> String
* Consumes a lon, a Node n and a project name pr returns the project of n
*/
akiee.node.project = (function project(lon,n){
akiee.node.project_helper = (function project_helper(lon__$1,n__$1,pr){
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(cljs.core.first(lon__$1)),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(n__$1))) || (cljs.core.not(cljs.core.first(lon__$1)))){
return pr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(cljs.core.first(lon__$1)),(1))){
var G__10670 = cljs.core.rest(lon__$1);
var G__10671 = n__$1;
var G__10672 = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(cljs.core.first(lon__$1));
lon__$1 = G__10670;
n__$1 = G__10671;
pr = G__10672;
continue;
} else {
var G__10673 = cljs.core.rest(lon__$1);
var G__10674 = n__$1;
var G__10675 = pr;
lon__$1 = G__10673;
n__$1 = G__10674;
pr = G__10675;
continue;

}
}
break;
}
});

return akiee.node.project_helper(lon,n,"Inbox");
});
akiee.node.lon = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,akiee.node.__GT_key(),cljs.core.constant$keyword$24,"head 1",cljs.core.constant$keyword$29,(1)], null),akiee.node.__GT_node("TODO","Task 1","head 1",(1)),akiee.node.__GT_node("TODO","Task 2","head 1",(2)),akiee.node.__GT_node("TODO","Task 3","head 1",(3)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,akiee.node.__GT_key(),cljs.core.constant$keyword$24,"head 2",cljs.core.constant$keyword$29,(1)], null),akiee.node.__GT_node("TODO","Task 4","head 2",(4)),akiee.node.__GT_node("TODO","Task 5","head 2",(5)),akiee.node.__GT_node("TODO","Task 6","head 2",(6))], null);
try{var values__9971__auto___10677 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(akiee.node.lon,(1))),akiee.node.lon);
var result__9972__auto___10678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.project,values__9971__auto___10677);
if(cljs.core.truth_(result__9972__auto___10678)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.project,values__9971__auto___10677),cljs.core.constant$keyword$58,"head 1"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"project","project",-1530041190,null),values__9971__auto___10677)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,"head 1"], null));
}

}catch (e10676){var t__10009__auto___10679 = e10676;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),cljs.core.constant$keyword$60,t__10009__auto___10679,cljs.core.constant$keyword$58,"head 1"], null));
}try{var values__9971__auto___10681 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(akiee.node.lon,(2))),akiee.node.lon);
var result__9972__auto___10682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.project,values__9971__auto___10681);
if(cljs.core.truth_(result__9972__auto___10682)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.project,values__9971__auto___10681),cljs.core.constant$keyword$58,"head 1"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"project","project",-1530041190,null),values__9971__auto___10681)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,"head 1"], null));
}

}catch (e10680){var t__10009__auto___10683 = e10680;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),cljs.core.constant$keyword$60,t__10009__auto___10683,cljs.core.constant$keyword$58,"head 1"], null));
}try{var values__9971__auto___10685 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(akiee.node.lon,(3))),akiee.node.lon);
var result__9972__auto___10686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.project,values__9971__auto___10685);
if(cljs.core.truth_(result__9972__auto___10686)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.project,values__9971__auto___10685),cljs.core.constant$keyword$58,"head 1"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"project","project",-1530041190,null),values__9971__auto___10685)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,"head 1"], null));
}

}catch (e10684){var t__10009__auto___10687 = e10684;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),cljs.core.constant$keyword$60,t__10009__auto___10687,cljs.core.constant$keyword$58,"head 1"], null));
}try{var values__9971__auto___10689 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(akiee.node.lon,(5))),akiee.node.lon);
var result__9972__auto___10690 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.project,values__9971__auto___10689);
if(cljs.core.truth_(result__9972__auto___10690)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.project,values__9971__auto___10689),cljs.core.constant$keyword$58,"head 2"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"project","project",-1530041190,null),values__9971__auto___10689)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,"head 2"], null));
}

}catch (e10688){var t__10009__auto___10691 = e10688;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),cljs.core.constant$keyword$60,t__10009__auto___10691,cljs.core.constant$keyword$58,"head 2"], null));
}try{var values__9971__auto___10693 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(akiee.node.lon,(6))),akiee.node.lon);
var result__9972__auto___10694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.project,values__9971__auto___10693);
if(cljs.core.truth_(result__9972__auto___10694)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.project,values__9971__auto___10693),cljs.core.constant$keyword$58,"head 2"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"project","project",-1530041190,null),values__9971__auto___10693)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,"head 2"], null));
}

}catch (e10692){var t__10009__auto___10695 = e10692;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),cljs.core.constant$keyword$60,t__10009__auto___10695,cljs.core.constant$keyword$58,"head 2"], null));
}try{var values__9971__auto___10697 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(akiee.node.lon,(7))),akiee.node.lon);
var result__9972__auto___10698 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(akiee.node.project,values__9971__auto___10697);
if(cljs.core.truth_(result__9972__auto___10698)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),cljs.core.constant$keyword$60,cljs.core.cons(akiee.node.project,values__9971__auto___10697),cljs.core.constant$keyword$58,"head 2"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"project","project",-1530041190,null),values__9971__auto___10697)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,"head 2"], null));
}

}catch (e10696){var t__10009__auto___10699 = e10696;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),cljs.core.constant$keyword$60,t__10009__auto___10699,cljs.core.constant$keyword$58,"head 2"], null));
}/**
* String -> ListOfNodes
* consumes the path p to the task file and produces a list of nodes
* TODO find way to test, without :key
*/
akiee.node.__GT_nodes = (function __GT_nodes(p){
var nodes_array = (function (){var G__10701 = akiee.fileoperations.load_task_file(p);
return (akiee.node.parse_file.cljs$core$IFn$_invoke$arity$1 ? akiee.node.parse_file.cljs$core$IFn$_invoke$arity$1(G__10701) : akiee.node.parse_file.call(null,G__10701));
})();
var lon_sin_pro = cljs.core.map.cljs$core$IFn$_invoke$arity$2(akiee.node.jsnode__GT_node,akiee.node.array__GT_vec(cljs.core.PersistentVector.EMPTY,nodes_array));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_array,lon_sin_pro){
return (function (x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.constant$keyword$31,akiee.node.project(lon_sin_pro,x));
});})(nodes_array,lon_sin_pro))
,lon_sin_pro);
});
akiee.node.lon__GT_md = (function lon__GT_md(lon){
if(cljs.core.empty_QMARK_(lon)){
return "";
} else {
var n = cljs.core.first(lon);
return [cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(n),(1)))?"# ":"## ")),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str(" ")].join(''):null)),cljs.core.str(clojure.string.trim(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str("\n"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(n)))?[cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str("\n")].join(''):null)),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str("RANK: "),cljs.core.str(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str("\n")].join(''):null)),cljs.core.str(lon__GT_md(cljs.core.rest(lon)))].join('');
}
});
try{var values__9971__auto___10704 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"## TODO Ueberschrift\nRANK: 1\n"),akiee.node.lon__GT_md(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.node.__GT_node(akiee.constants.TODO,"Ueberschrift","Inbox",(1))], null)));
var result__9972__auto___10705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10704);
if(cljs.core.truth_(result__9972__auto___10705)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10704),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10704)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10703){var t__10009__auto___10706 = e10703;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),cljs.core.constant$keyword$60,t__10009__auto___10706,cljs.core.constant$keyword$58,null], null));
}/**
* Node Node -> Boolean
* Determens if Node n1 has a higher Rank than Node n2
*/
akiee.node.higher_rank_QMARK_ = (function higher_rank_QMARK_(n1,n2){
if((n2 == null)){
return true;
} else {
if((!((n2 == null))) && ((n1 == null))){
return false;
} else {
if((n2 < n1)){
return false;
} else {
return true;

}
}
}
});
akiee.node.n1 = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,"Test-Node 1",cljs.core.constant$keyword$26,(0)], null));
akiee.node.n2 = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,"Test-Node 2",cljs.core.constant$keyword$26,(5)], null));
akiee.node.n3 = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,"Test-Node 3",cljs.core.constant$keyword$26,(11)], null));
akiee.node.n4 = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,"Test-Node 11",cljs.core.constant$keyword$26,null], null));
try{var values__9971__auto___10708 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),akiee.node.higher_rank_QMARK_(akiee.node.n2,akiee.node.n1));
var result__9972__auto___10709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10708);
if(cljs.core.truth_(result__9972__auto___10709)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10708),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10708)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10707){var t__10009__auto___10710 = e10707;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,t__10009__auto___10710,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10712 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),akiee.node.higher_rank_QMARK_(akiee.node.n1,akiee.node.n2));
var result__9972__auto___10713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10712);
if(cljs.core.truth_(result__9972__auto___10713)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10712),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10712)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10711){var t__10009__auto___10714 = e10711;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),cljs.core.constant$keyword$60,t__10009__auto___10714,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10716 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),akiee.node.higher_rank_QMARK_(akiee.node.n3,akiee.node.n1));
var result__9972__auto___10717 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10716);
if(cljs.core.truth_(result__9972__auto___10717)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10716),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10716)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10715){var t__10009__auto___10718 = e10715;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,t__10009__auto___10718,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10720 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),akiee.node.higher_rank_QMARK_(akiee.node.n1,akiee.node.n3));
var result__9972__auto___10721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10720);
if(cljs.core.truth_(result__9972__auto___10721)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10720),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10720)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10719){var t__10009__auto___10722 = e10719;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),cljs.core.constant$keyword$60,t__10009__auto___10722,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10724 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),akiee.node.higher_rank_QMARK_(akiee.node.n1,akiee.node.n1));
var result__9972__auto___10725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10724);
if(cljs.core.truth_(result__9972__auto___10725)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10724),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10724)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10723){var t__10009__auto___10726 = e10723;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),cljs.core.constant$keyword$60,t__10009__auto___10726,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10728 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),akiee.node.higher_rank_QMARK_(akiee.node.n3,akiee.node.n3));
var result__9972__auto___10729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10728);
if(cljs.core.truth_(result__9972__auto___10729)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10728),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10728)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10727){var t__10009__auto___10730 = e10727;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),cljs.core.constant$keyword$60,t__10009__auto___10730,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10732 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),akiee.node.higher_rank_QMARK_(akiee.node.n1,akiee.node.n4));
var result__9972__auto___10733 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10732);
if(cljs.core.truth_(result__9972__auto___10733)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10732),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10732)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10731){var t__10009__auto___10734 = e10731;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),cljs.core.constant$keyword$60,t__10009__auto___10734,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10736 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,false),akiee.node.higher_rank_QMARK_(akiee.node.n4,akiee.node.n1));
var result__9972__auto___10737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10736);
if(cljs.core.truth_(result__9972__auto___10737)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10736),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10736)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10735){var t__10009__auto___10738 = e10735;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),cljs.core.constant$keyword$60,t__10009__auto___10738,cljs.core.constant$keyword$58,null], null));
}