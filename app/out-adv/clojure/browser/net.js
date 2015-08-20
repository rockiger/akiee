// Compiled by ClojureScript 0.0-2725 {}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.json');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17982){
var vec__17983 = p__17982;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));

clojure.browser.net.IConnection = (function (){var obj17985 = {};
return obj17985;
})();

clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.connect[(function (){var G__17995 = x__4401__auto__;
return goog.typeOf(G__17995);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.connect[(function (){var G__17997 = x__4401__auto__;
return goog.typeOf(G__17997);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.connect[(function (){var G__17999 = x__4401__auto__;
return goog.typeOf(G__17999);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$4;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.connect[(function (){var G__18001 = x__4401__auto__;
return goog.typeOf(G__18001);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connect.cljs$core$IFn$_invoke$arity$1 = connect__1;
connect.cljs$core$IFn$_invoke$arity$2 = connect__2;
connect.cljs$core$IFn$_invoke$arity$3 = connect__3;
connect.cljs$core$IFn$_invoke$arity$4 = connect__4;
return connect;
})()
;

clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.transmit[(function (){var G__18013 = x__4401__auto__;
return goog.typeOf(G__18013);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.transmit[(function (){var G__18015 = x__4401__auto__;
return goog.typeOf(G__18015);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.transmit[(function (){var G__18017 = x__4401__auto__;
return goog.typeOf(G__18017);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.transmit[(function (){var G__18019 = x__4401__auto__;
return goog.typeOf(G__18019);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.transmit[(function (){var G__18021 = x__4401__auto__;
return goog.typeOf(G__18021);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmit.cljs$core$IFn$_invoke$arity$2 = transmit__2;
transmit.cljs$core$IFn$_invoke$arity$3 = transmit__3;
transmit.cljs$core$IFn$_invoke$arity$4 = transmit__4;
transmit.cljs$core$IFn$_invoke$arity$5 = transmit__5;
transmit.cljs$core$IFn$_invoke$arity$6 = transmit__6;
return transmit;
})()
;

clojure.browser.net.close = (function close(this$){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$IConnection$close$arity$1;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.close[(function (){var G__18025 = x__4401__auto__;
return goog.typeOf(G__18025);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.close["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.close",this$);
}
}
})().call(null,this$);
}
});

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = true;

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__18026){
var vec__18027 = p__18026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18028){
var vec__18029 = p__18028;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18029,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});

clojure.browser.net.ICrossPageChannel = (function (){var obj18031 = {};
return obj18031;
})();

clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.register_service[(function (){var G__18037 = x__4401__auto__;
return goog.typeOf(G__18037);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.register_service["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3745__auto__ = this$;
if(and__3745__auto__){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else {
return and__3745__auto__;
}
})()){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
var x__4401__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3757__auto__ = (clojure.browser.net.register_service[(function (){var G__18039 = x__4401__auto__;
return goog.typeOf(G__18039);
})()]);
if(or__3757__auto__){
return or__3757__auto__;
} else {
var or__3757__auto____$1 = (clojure.browser.net.register_service["_"]);
if(or__3757__auto____$1){
return or__3757__auto____$1;
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
register_service.cljs$core$IFn$_invoke$arity$3 = register_service__3;
register_service.cljs$core$IFn$_invoke$arity$4 = register_service__4;
return register_service;
})()
;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(this$__$1,null);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4(this$__$1,on_connect_fn,config_iframe_fn,document.body);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name(service_name),payload);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4(this$__$1,service_name,fn,false);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name(service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__4126__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4126__auto__)){
var config = temp__4126__auto__;
return (new goog.net.xpc.CrossPageChannel((function (){var G__18046 = config;
return goog.json.parse(G__18046);
})()));
} else {
return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__18047){
var vec__18048 = p__18047;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(1),null);
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__4124__auto__)){
var field = temp__4124__auto__;
var G__18049 = sum;
(G__18049[field] = v);

return G__18049;
} else {
return sum;
}
}),(function (){var obj18051 = {};
return obj18051;
})(),config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xpc_connection.cljs$core$IFn$_invoke$arity$0 = xpc_connection__0;
xpc_connection.cljs$core$IFn$_invoke$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
