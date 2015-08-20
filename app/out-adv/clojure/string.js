// Compiled by ClojureScript 0.0-2725 {}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp((function (){var G__17361 = match;
return goog.string.regExpEscape(G__17361);
})(),"g")),replacement);
} else {
if(cljs.core.truth_(match.hasOwnProperty("source"))){
return s.replace((new RegExp(match.source,"g")),replacement);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var G__17362 = sb.append([cljs.core.str(cljs.core.first(coll__$1))].join(''));
var G__17363 = cljs.core.next(coll__$1);
sb = G__17362;
coll__$1 = G__17363;
continue;
} else {
return sb.toString();
}
break;
}
});
var join__2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
sb.append([cljs.core.str(cljs.core.first(coll__$1))].join(''));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__17364 = sb;
var G__17365 = coll__$2;
sb = G__17364;
coll__$1 = G__17365;
continue;
} else {
return sb.toString();
}
break;
}
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$1 = join__1;
join.cljs$core$IFn$_invoke$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.peek(v__$1))){
var G__17366 = cljs.core.pop(v__$1);
v__$1 = G__17366;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function discard_trailing_if_needed(limit,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
return clojure.string.pop_last_while_empty(v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count(s))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s)))),"");
} else {
var pred__17374 = cljs.core._EQ_;
var expr__17375 = limit;
if(cljs.core.truth_((function (){var G__17377 = (1);
var G__17378 = expr__17375;
return (pred__17374.cljs$core$IFn$_invoke$arity$2 ? pred__17374.cljs$core$IFn$_invoke$arity$2(G__17377,G__17378) : pred__17374.call(null,G__17377,G__17378));
})())){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_((function (){var G__17379 = (2);
var G__17380 = expr__17375;
return (pred__17374.cljs$core$IFn$_invoke$arity$2 ? pred__17374.cljs$core$IFn$_invoke$arity$2(G__17379,G__17380) : pred__17374.call(null,G__17379,G__17380));
})())){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s))),(0),c))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,c));
}
}
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return split.cljs$core$IFn$_invoke$arity$3(s,re,(0));
});
var split__3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed(limit,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(re)].join(''),"/(?:)/"))?clojure.string.split_with_empty_regex(s,limit):(((limit < (1)))?cljs.core.vec([cljs.core.str(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limit__$1,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
} else {
var temp__4124__auto__ = cljs.core.re_find(re,s__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var index = s__$1.indexOf(m);
var G__17384 = s__$1.substring((index + cljs.core.count(m)));
var G__17385 = (limit__$1 - (1));
var G__17386 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1.substring((0),index));
s__$1 = G__17384;
limit__$1 = G__17385;
parts = G__17386;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
}
}
break;
}
})())));
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
var G__17388 = s;
return goog.string.trim(G__17388);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
var G__17390 = s;
return goog.string.trimLeft(G__17390);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
var G__17392 = s;
return goog.string.trimRight(G__17392);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(index - (1)));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\r"))){
var G__17393 = (index - (1));
index = G__17393;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var G__17395 = s;
return goog.string.isEmptySafe(G__17395);
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape__$1(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var temp__4124__auto___17396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cmap,ch);
if(cljs.core.truth_(temp__4124__auto___17396)){
var replacement_17397 = temp__4124__auto___17396;
buffer.append([cljs.core.str(replacement_17397)].join(''));
} else {
buffer.append(ch);
}

var G__17398 = (index + (1));
index = G__17398;
continue;
}
break;
}
});
