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
* Create a native React element, by calling React.createElement directly.
* 
* That means the second argument must be a javascript object (or nil), and
* that any Reagent hiccup forms must be processed with as-element. For example
* like this:
* 
* (r/create-element "div" #js{:className "foo"}
* "Hi " (r/as-element [:strong "world!"])
* 
* which is equivalent to
* 
* [:div.foo "Hi" [:strong "world!"]]
* @param {...*} var_args
*/
reagent.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (type){
return create_element.call(null,type,null);
});
var create_element__2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return React.createElement(type,props);
});
var create_element__3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return React.createElement(type,props,child);
});
var create_element__4 = (function() { 
var G__13286__delegate = function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return cljs.core.apply.call(null,React.createElement,type,props,child,children);
};
var G__13286 = function (type,props,child,var_args){
var children = null;
if (arguments.length > 3) {
var G__13287__i = 0, G__13287__a = new Array(arguments.length -  3);
while (G__13287__i < G__13287__a.length) {G__13287__a[G__13287__i] = arguments[G__13287__i + 3]; ++G__13287__i;}
  children = new cljs.core.IndexedSeq(G__13287__a,0);
} 
return G__13286__delegate.call(this,type,props,child,children);};
G__13286.cljs$lang$maxFixedArity = 3;
G__13286.cljs$lang$applyTo = (function (arglist__13288){
var type = cljs.core.first(arglist__13288);
arglist__13288 = cljs.core.next(arglist__13288);
var props = cljs.core.first(arglist__13288);
arglist__13288 = cljs.core.next(arglist__13288);
var child = cljs.core.first(arglist__13288);
var children = cljs.core.rest(arglist__13288);
return G__13286__delegate(type,props,child,children);
});
G__13286.cljs$core$IFn$_invoke$arity$variadic = G__13286__delegate;
return G__13286;
})()
;
create_element = function(type,props,child,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return create_element__1.call(this,type);
case 2:
return create_element__2.call(this,type,props);
case 3:
return create_element__3.call(this,type,props,child);
default:
var G__13289 = null;
if (arguments.length > 3) {
var G__13290__i = 0, G__13290__a = new Array(arguments.length -  3);
while (G__13290__i < G__13290__a.length) {G__13290__a[G__13290__i] = arguments[G__13290__i + 3]; ++G__13290__i;}
G__13289 = new cljs.core.IndexedSeq(G__13290__a,0);
}
return create_element__4.cljs$core$IFn$_invoke$arity$variadic(type,props,child, G__13289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$lang$maxFixedArity = 3;
create_element.cljs$lang$applyTo = create_element__4.cljs$lang$applyTo;
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
create_element.cljs$core$IFn$_invoke$arity$3 = create_element__3;
create_element.cljs$core$IFn$_invoke$arity$variadic = create_element__4.cljs$core$IFn$_invoke$arity$variadic;
return create_element;
})()
;
/**
* Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
*/
reagent.core.as_element = (function as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
* Returns an adapter for a native React class, that may be used
* just like a Reagent component function or class in Hiccup forms.
*/
reagent.core.adapt_react_class = (function adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
* Returns an adapter for a Reagent component, that may be used from
* React, for example in JSX. A single argument, props, is passed to
* the component, converted to a map.
*/
reagent.core.reactify_component = (function reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return reagent.impl.component.reactify_component.call(null,c);
});
/**
* Render a Reagent component into the DOM. The first argument may be
* either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.core.render = (function() {
var render = null;
var render__2 = (function (comp,container){
return render.call(null,comp,container,null);
});
var render__3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.impl.util.render_component.call(null,f,container,callback);
});
render = function(comp,container,callback){
switch(arguments.length){
case 2:
return render__2.call(this,comp,container);
case 3:
return render__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$2 = render__2;
render.cljs$core$IFn$_invoke$arity$3 = render__3;
return render;
})()
;
/**
* Remove a component from the given DOM node.
*/
reagent.core.unmount_component_at_node = (function unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node.call(null,container);
});
/**
* Turns a component into an HTML string.
*/
reagent.core.render_to_string = (function render_to_string(component){
var _STAR_non_reactive_STAR_13292 = reagent.impl.component._STAR_non_reactive_STAR_;
try{reagent.impl.component._STAR_non_reactive_STAR_ = true;

return (React["renderToString"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_13292;
}});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
* Turns a component into an HTML string, without data-react-id attributes, etc.
*/
reagent.core.render_to_static_markup = (function render_to_static_markup(component){
var _STAR_non_reactive_STAR_13294 = reagent.impl.component._STAR_non_reactive_STAR_;
try{reagent.impl.component._STAR_non_reactive_STAR_ = true;

return (React["renderToStaticMarkup"])(reagent.core.as_element.call(null,component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_13294;
}});
/**
* Force re-rendering of all mounted Reagent components. This is
* probably only useful in a development environment, when you want to
* update components in response to some dynamic changes to code.
* 
* Note that force-update-all may not update root components. This
* happens if a component 'foo' is mounted with `(render [foo])` (since
* functions are passed by value, and not by reference, in
* ClojureScript). To get around this you'll have to introduce a layer
* of indirection, for example by using `(render [#'foo])` instead.
*/
reagent.core.force_update_all = (function force_update_all(){
return reagent.impl.util.force_update_all.call(null);
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
* :reagent-render (fn [args....])   ;; or :render (fn [this])
* }
* 
* Everything is optional, except either :reagent-render or :render.
*/
reagent.core.create_class = (function create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
* Returns the current React component (a.k.a this) in a component
* function.
*/
reagent.core.current_component = (function current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
* Returns an atom containing a components state.
*/
reagent.core.state_atom = (function state_atom(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
* Returns the state of a component, as set with replace-state or set-state.
* Equivalent to (deref (r/state-atom this))
*/
reagent.core.state = (function state(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
* Set state of a component.
* Equivalent to (reset! (state-atom this) new-state)
*/
reagent.core.replace_state = (function replace_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
* Merge component state with new-state.
* Equivalent to (swap! (state-atom this) merge new-state)
*/
reagent.core.set_state = (function set_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
* Force a component to re-render immediately.
* 
* If the second argument is true, child components will also be
* re-rendered, even is their arguments have not changed.
*/
reagent.core.force_update = (function() {
var force_update = null;
var force_update__1 = (function (this$){
return force_update.call(null,this$,false);
});
var force_update__2 = (function (this$,deep){
return reagent.impl.util.force_update.call(null,this$,deep);
});
force_update = function(this$,deep){
switch(arguments.length){
case 1:
return force_update__1.call(this,this$);
case 2:
return force_update__2.call(this,this$,deep);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
force_update.cljs$core$IFn$_invoke$arity$1 = force_update__1;
force_update.cljs$core$IFn$_invoke$arity$2 = force_update__2;
return force_update;
})()
;
/**
* Returns the props passed to a component.
*/
reagent.core.props = (function props(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_props.call(null,this$);
});
/**
* Returns the children passed to a component.
*/
reagent.core.children = (function children(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_children.call(null,this$);
});
/**
* Returns the entire Hiccup form passed to the component.
*/
reagent.core.argv = (function argv(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_argv.call(null,this$);
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
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
* Render dirty components immediately to the DOM.
* 
* Note that this may not work in event handlers, since React.js does
* batching of updates there.
*/
reagent.core.flush = (function flush(){
return reagent.impl.batching.flush.call(null);
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
return reagent.ratom.atom.call(null,x);
});
var atom__2 = (function() { 
var G__13295__delegate = function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
};
var G__13295 = function (x,var_args){
var rest = null;
if (arguments.length > 1) {
var G__13296__i = 0, G__13296__a = new Array(arguments.length -  1);
while (G__13296__i < G__13296__a.length) {G__13296__a[G__13296__i] = arguments[G__13296__i + 1]; ++G__13296__i;}
  rest = new cljs.core.IndexedSeq(G__13296__a,0);
} 
return G__13295__delegate.call(this,x,rest);};
G__13295.cljs$lang$maxFixedArity = 1;
G__13295.cljs$lang$applyTo = (function (arglist__13297){
var x = cljs.core.first(arglist__13297);
var rest = cljs.core.rest(arglist__13297);
return G__13295__delegate(x,rest);
});
G__13295.cljs$core$IFn$_invoke$arity$variadic = G__13295__delegate;
return G__13295;
})()
;
atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__13298 = null;
if (arguments.length > 1) {
var G__13299__i = 0, G__13299__a = new Array(arguments.length -  1);
while (G__13299__i < G__13299__a.length) {G__13299__a[G__13299__i] = arguments[G__13299__i + 1]; ++G__13299__i;}
G__13298 = new cljs.core.IndexedSeq(G__13299__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__13298);
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
* Provide a combination of value and callback, that looks like an atom.
* 
* The first argument can be any value, that will be returned when the
* result is deref'ed.
* 
* The second argument should be a function, that is called with the
* optional extra arguments provided to wrap, and the new value of the
* resulting 'atom'.
* 
* Use for example like this:
* 
* (wrap (:foo @state)
* swap! state assoc :foo)
* 
* Probably useful only for passing to child components.
* @param {...*} var_args
*/
reagent.core.wrap = (function() { 
var wrap__delegate = function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"reset-fn","reset-fn",949643977,null))))].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
};
var wrap = function (value,reset_fn,var_args){
var args = null;
if (arguments.length > 2) {
var G__13300__i = 0, G__13300__a = new Array(arguments.length -  2);
while (G__13300__i < G__13300__a.length) {G__13300__a[G__13300__i] = arguments[G__13300__i + 2]; ++G__13300__i;}
  args = new cljs.core.IndexedSeq(G__13300__a,0);
} 
return wrap__delegate.call(this,value,reset_fn,args);};
wrap.cljs$lang$maxFixedArity = 2;
wrap.cljs$lang$applyTo = (function (arglist__13301){
var value = cljs.core.first(arglist__13301);
arglist__13301 = cljs.core.next(arglist__13301);
var reset_fn = cljs.core.first(arglist__13301);
var args = cljs.core.rest(arglist__13301);
return wrap__delegate(value,reset_fn,args);
});
wrap.cljs$core$IFn$_invoke$arity$variadic = wrap__delegate;
return wrap;
})()
;
/**
* Provide a cursor into a Reagent atom.
* 
* Behaves like a Reagent atom but focuses updates and derefs to
* the specified path within the wrapped Reagent atom. e.g.,
* (let [c (cursor ra [:nested :content])]
* ... @c ;; equivalent to (get-in @ra [:nested :content])
* ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
* ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
* )
* 
* The first parameter can also be a function, that should look something
* like this:
* 
* (defn set-get
* ([k] (get-in @state k))
* ([k v] (swap! state assoc-in k v)))
* 
* The function will be called with one argument – the path passed to
* cursor – when the cursor is deref'ed, and two arguments (path and new
* value) when the cursor is modified.
* 
* Given that set-get function, (and that state is a Reagent atom, or
* another cursor) these cursors are equivalent:
* (cursor state [:foo]) and (cursor set-get [:foo]).
*/
reagent.core.cursor = (function cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
* Run f using requestAnimationFrame or equivalent.
*/
reagent.core.next_tick = (function next_tick(f){
return reagent.impl.batching.next_tick.call(null,f);
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
var G__13302__i = 0, G__13302__a = new Array(arguments.length -  1);
while (G__13302__i < G__13302__a.length) {G__13302__a[G__13302__i] = arguments[G__13302__i + 1]; ++G__13302__i;}
  args = new cljs.core.IndexedSeq(G__13302__a,0);
} 
return partial__delegate.call(this,f,args);};
partial.cljs$lang$maxFixedArity = 1;
partial.cljs$lang$applyTo = (function (arglist__13303){
var f = cljs.core.first(arglist__13303);
var args = cljs.core.rest(arglist__13303);
return partial__delegate(f,args);
});
partial.cljs$core$IFn$_invoke$arity$variadic = partial__delegate;
return partial;
})()
;
reagent.core.component_path = (function component_path(c){
return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map