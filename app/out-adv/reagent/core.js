// Compiled by ClojureScript 0.0-2725 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
* Turns a vector of Hiccup syntax into a React component. Returns form unchanged if it is not a vector.
*/
reagent.core.as_component = (function as_component(form){
return reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$1(form);
});
/**
* Render a Reagent component into the DOM. The first argument may be either a
* vector (using Reagent's Hiccup syntax), or a React component. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.core.render_component = (function() {
var render_component = null;
var render_component__2 = (function (comp,container){
return render_component.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});
var render_component__3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_component(((cljs.core.fn_QMARK_(comp))?(function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})():comp));
});
return reagent.impl.util.render_component(f,container,callback);
});
render_component = function(comp,container,callback){
switch(arguments.length){
case 2:
return render_component__2.call(this,comp,container);
case 3:
return render_component__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_component.cljs$core$IFn$_invoke$arity$2 = render_component__2;
render_component.cljs$core$IFn$_invoke$arity$3 = render_component__3;
return render_component;
})()
;
/**
* Remove a component from the given DOM node.
*/
reagent.core.unmount_component_at_node = (function unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node(container);
});
/**
* Turns a component into an HTML string.
*/
reagent.core.render_component_to_string = (function render_component_to_string(component){
return (React["renderComponentToString"])(reagent.core.as_component(component));
});
reagent.core.force_update_all = (function force_update_all(){
return reagent.impl.util.force_update_all();
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
* Create a component, React style. Should be called with a map,
* looking like this:
* {:get-initial-state (fn [this])
* :component-will-receive-props (fn [this new-argv])
* :should-component-update (fn [this old-argv new-argv])
* :component-will-mount (fn [this])
* :component-did-mount (fn [this])
* :component-will-update (fn [this new-argv])
* :component-did-update (fn [this old-argv])
* :component-will-unmount (fn [this])
* :render (fn [this])}
* 
* Everything is optional, except :render.
*/
reagent.core.create_class = (function create_class(spec){
return reagent.impl.template.create_class(spec);
});
/**
* Returns the current React component (a.k.a this) in a component
* function.
*/
reagent.core.current_component = (function current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
* Returns the state of a component, as set with replace-state or set-state.
*/
reagent.core.state = (function state(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.component.state(this$);
});
/**
* Set state of a component.
*/
reagent.core.replace_state = (function replace_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))], 0)))].join('')));
}

return reagent.impl.component.replace_state(this$,new_state);
});
/**
* Merge component state with new-state.
*/
reagent.core.set_state = (function set_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))], 0)))].join('')));
}

return reagent.impl.component.set_state(this$,new_state);
});
/**
* Returns the props passed to a component.
*/
reagent.core.props = (function props(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.util.get_props(this$);
});
/**
* Returns the children passed to a component.
*/
reagent.core.children = (function children(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.util.get_children(this$);
});
/**
* Returns the entire Hiccup form passed to the component.
*/
reagent.core.argv = (function argv(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.util.get_argv(this$);
});
/**
* Returns the root DOM node of a mounted component.
*/
reagent.core.dom_node = (function dom_node(this$){
return (this$["getDOMNode"])();
});
/**
* Utility function that merges two maps, handling :class and :style
* specially, like React's transferPropsTo.
*/
reagent.core.merge_props = (function merge_props(defaults,props){
return reagent.impl.util.merge_props(defaults,props);
});
/**
* Render dirty components immediately to the DOM.
* 
* Note that this may not work in event handlers, since React.js does
* batching of updates there.
*/
reagent.core.flush = (function flush(){
return reagent.impl.batching.flush();
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* Reagent components that derefs one of these are automatically
* re-rendered.
* @param {...*} var_args
*/
reagent.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});
var atom__2 = (function() { 
var G__17404__delegate = function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
};
var G__17404 = function (x,var_args){
var rest = null;
if (arguments.length > 1) {
var G__17405__i = 0, G__17405__a = new Array(arguments.length -  1);
while (G__17405__i < G__17405__a.length) {G__17405__a[G__17405__i] = arguments[G__17405__i + 1]; ++G__17405__i;}
  rest = new cljs.core.IndexedSeq(G__17405__a,0);
} 
return G__17404__delegate.call(this,x,rest);};
G__17404.cljs$lang$maxFixedArity = 1;
G__17404.cljs$lang$applyTo = (function (arglist__17406){
var x = cljs.core.first(arglist__17406);
var rest = cljs.core.rest(arglist__17406);
return G__17404__delegate(x,rest);
});
G__17404.cljs$core$IFn$_invoke$arity$variadic = G__17404__delegate;
return G__17404;
})()
;
atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17407 = null;
if (arguments.length > 1) {
var G__17408__i = 0, G__17408__a = new Array(arguments.length -  1);
while (G__17408__i < G__17408__a.length) {G__17408__a[G__17408__i] = arguments[G__17408__i + 1]; ++G__17408__i;}
G__17407 = new cljs.core.IndexedSeq(G__17408__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17407);
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
* Provide a cursor into a Reagent atom.
* 
* Behaves like a Reagent atom but focuses updates and derefs to
* the specified path within the wrapped Reagent atom. e.g.,
* (let [c (cursor [:nested :content] ra)]
* ... @c ;; equivalent to (get-in @ra [:nested :content])
* ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
* ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
* )
*/
reagent.core.cursor = (function() {
var cursor = null;
var cursor__1 = (function (path){
return (function (ra){
return cursor.cljs$core$IFn$_invoke$arity$2(path,ra);
});
});
var cursor__2 = (function (path,ra){
return reagent.ratom.cursor(path,ra);
});
cursor = function(path,ra){
switch(arguments.length){
case 1:
return cursor__1.call(this,path);
case 2:
return cursor__2.call(this,path,ra);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
return cursor;
})()
;
/**
* Run f using requestAnimationFrame or equivalent.
*/
reagent.core.next_tick = (function next_tick(f){
var G__17412 = f;
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__17412) : reagent.impl.batching.next_tick.call(null,G__17412));
});
/**
* Works just like clojure.core/partial, except that it is an IFn, and
* the result can be compared with =
* @param {...*} var_args
*/
reagent.core.partial = (function() { 
var partial__delegate = function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
};
var partial = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__17413__i = 0, G__17413__a = new Array(arguments.length -  1);
while (G__17413__i < G__17413__a.length) {G__17413__a[G__17413__i] = arguments[G__17413__i + 1]; ++G__17413__i;}
  args = new cljs.core.IndexedSeq(G__17413__a,0);
} 
return partial__delegate.call(this,f,args);};
partial.cljs$lang$maxFixedArity = 1;
partial.cljs$lang$applyTo = (function (arglist__17414){
var f = cljs.core.first(arglist__17414);
var args = cljs.core.rest(arglist__17414);
return partial__delegate(f,args);
});
partial.cljs$core$IFn$_invoke$arity$variadic = partial__delegate;
return partial;
})()
;
