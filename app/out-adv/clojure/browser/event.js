// Compiled by ClojureScript 0.0-2725 {}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events');

clojure.browser.event.IEventType = (function (){var obj17927 = {};
return obj17927;
})();

clojure.browser.event.event_types = (function event_types(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.event.event_types[(function (){var G__17931 = x__4401__auto__;
return goog.typeOf(G__17931);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
})().call(null,this$);
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17932){
var vec__17933 = p__17932;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17933,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17934){
var vec__17935 = p__17934;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function() {
var listen = null;
var listen__3 = (function (src,type,fn){
return listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var listen__4 = (function (src,type,fn,capture_QMARK_){
var G__17944 = src;
var G__17945 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__17946 = fn;
var G__17947 = capture_QMARK_;
return goog.events.listen(G__17944,G__17945,G__17946,G__17947);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen__3.call(this,src,type,fn);
case 4:
return listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__3 = (function (src,type,fn){
return listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var listen_once__4 = (function (src,type,fn,capture_QMARK_){
var G__17956 = src;
var G__17957 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__17958 = fn;
var G__17959 = capture_QMARK_;
return goog.events.listenOnce(G__17956,G__17957,G__17958,G__17959);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen_once__3.call(this,src,type,fn);
case 4:
return listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once.cljs$core$IFn$_invoke$arity$3 = listen_once__3;
listen_once.cljs$core$IFn$_invoke$arity$4 = listen_once__4;
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__3 = (function (src,type,fn){
return unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var unlisten__4 = (function (src,type,fn,capture_QMARK_){
var G__17968 = src;
var G__17969 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__17970 = fn;
var G__17971 = capture_QMARK_;
return goog.events.unlisten(G__17968,G__17969,G__17970,G__17971);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return unlisten__3.call(this,src,type,fn);
case 4:
return unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$3 = unlisten__3;
unlisten.cljs$core$IFn$_invoke$arity$4 = unlisten__4;
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){
var G__17973 = key;
return goog.events.unlistenByKey(G__17973);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){
var G__17976 = src;
var G__17977 = event;
return goog.events.dispatchEvent(G__17976,G__17977);
});
clojure.browser.event.expose = (function expose(e){
var G__17979 = e;
return goog.events.expose(G__17979);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){
return null;
});
