// Compiled by ClojureScript 0.0-2173
goog.provide('gin.dom_helpers');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.classes');
goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('goog.fx');
/**
* Return the element with the passed id.
*/
gin.dom_helpers.get_element = (function get_element(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
gin.dom_helpers.show_element = (function show_element(e,b){return goog.style.showElement(e,b);
});
gin.dom_helpers.add_remove_class = (function add_remove_class(e,add_classes,remove_classes){return goog.dom.classes.addRemove(e,remove_classes,add_classes);
});
gin.dom_helpers.get_radio_value = (function get_radio_value(form_name,name){return goog.dom.forms.getValueByName(gin.dom_helpers.get_element.call(null,form_name),name);
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
gin.dom_helpers.append = (function() { 
var append__delegate = function (parent,children){var seq__24921_24925 = cljs.core.seq.call(null,children);var chunk__24922_24926 = null;var count__24923_24927 = 0;var i__24924_24928 = 0;while(true){
if((i__24924_24928 < count__24923_24927))
{var child_24929 = cljs.core._nth.call(null,chunk__24922_24926,i__24924_24928);goog.dom.appendChild(parent,child_24929);
{
var G__24930 = seq__24921_24925;
var G__24931 = chunk__24922_24926;
var G__24932 = count__24923_24927;
var G__24933 = (i__24924_24928 + 1);
seq__24921_24925 = G__24930;
chunk__24922_24926 = G__24931;
count__24923_24927 = G__24932;
i__24924_24928 = G__24933;
continue;
}
} else
{var temp__4092__auto___24934 = cljs.core.seq.call(null,seq__24921_24925);if(temp__4092__auto___24934)
{var seq__24921_24935__$1 = temp__4092__auto___24934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24921_24935__$1))
{var c__17389__auto___24936 = cljs.core.chunk_first.call(null,seq__24921_24935__$1);{
var G__24937 = cljs.core.chunk_rest.call(null,seq__24921_24935__$1);
var G__24938 = c__17389__auto___24936;
var G__24939 = cljs.core.count.call(null,c__17389__auto___24936);
var G__24940 = 0;
seq__24921_24925 = G__24937;
chunk__24922_24926 = G__24938;
count__24923_24927 = G__24939;
i__24924_24928 = G__24940;
continue;
}
} else
{var child_24941 = cljs.core.first.call(null,seq__24921_24935__$1);goog.dom.appendChild(parent,child_24941);
{
var G__24942 = cljs.core.next.call(null,seq__24921_24935__$1);
var G__24943 = null;
var G__24944 = 0;
var G__24945 = 0;
seq__24921_24925 = G__24942;
chunk__24922_24926 = G__24943;
count__24923_24927 = G__24944;
i__24924_24928 = G__24945;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var append = function (parent,var_args){
var children = null;if (arguments.length > 1) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return append__delegate.call(this,parent,children);};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__24946){
var parent = cljs.core.first(arglist__24946);
var children = cljs.core.rest(arglist__24946);
return append__delegate(parent,children);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
gin.dom_helpers.set_text = (function set_text(e,s){var e__$1 = ((((e instanceof cljs.core.Keyword)) || (typeof e === 'string'))?gin.dom_helpers.get_element.call(null,e):e);var G__24948 = e__$1;goog.dom.setTextContent(G__24948,s);
return G__24948;
});
gin.dom_helpers.normalize_args = (function normalize_args(tag,args){var parts = clojure.string.split.call(null,tag,/(\.|#)/);var vec__24951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,((function (parts){
return (function (p1__24949_SHARP_){if(cljs.core._EQ_.call(null,p1__24949_SHARP_,"."))
{return new cljs.core.Keyword(null,"class","class",1108647146);
} else
{if(cljs.core._EQ_.call(null,p1__24949_SHARP_,"#"))
{return new cljs.core.Keyword(null,"id","id",1013907597);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__24949_SHARP_;
} else
{return null;
}
}
}
});})(parts))
,cljs.core.rest.call(null,parts)))], null);var tag__$1 = cljs.core.nth.call(null,vec__24951,0,null);var attrs = cljs.core.nth.call(null,vec__24951,1,null);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,attrs,cljs.core.first.call(null,args)),cljs.core.rest.call(null,args)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,attrs,args], null);
}
});
/**
* Create a dom element using a keyword for the element name and a map
* for the attributes. Append all children to parent. If the first
* child is a string then the string will be set as the text content of
* the parent and all remaining children will be appended.
* @param {...*} var_args
*/
gin.dom_helpers.element = (function() { 
var element__delegate = function (tag,args){var vec__24958 = gin.dom_helpers.normalize_args.call(null,tag,args);var tag__$1 = cljs.core.nth.call(null,vec__24958,0,null);var attrs = cljs.core.nth.call(null,vec__24958,1,null);var children = cljs.core.nth.call(null,vec__24958,2,null);var parent = goog.dom.createDom(cljs.core.subs.call(null,tag__$1,1),cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,((function (vec__24958,tag__$1,attrs,children){
return (function (m,p__24960){var vec__24961 = p__24960;var k = cljs.core.nth.call(null,vec__24961,0,null);var v = cljs.core.nth.call(null,vec__24961,1,null);return cljs.core.assoc.call(null,m,k,v);
});})(vec__24958,tag__$1,attrs,children))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__24958,tag__$1,attrs,children){
return (function (p1__24952_SHARP_,p2__24953_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,p1__24952_SHARP_),p2__24953_SHARP_],null));
});})(vec__24958,tag__$1,attrs,children))
,cljs.core.keys.call(null,attrs),cljs.core.vals.call(null,attrs)))));var vec__24959 = ((typeof cljs.core.first.call(null,children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.dom_helpers.set_text.call(null,element.call(null,tag__$1,attrs),cljs.core.first.call(null,children)),cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,children], null));var parent__$1 = cljs.core.nth.call(null,vec__24959,0,null);var children__$1 = cljs.core.nth.call(null,vec__24959,1,null);return cljs.core.apply.call(null,gin.dom_helpers.append,parent__$1,children__$1);
};
var element = function (tag,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return element__delegate.call(this,tag,args);};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = (function (arglist__24962){
var tag = cljs.core.first(arglist__24962);
var args = cljs.core.rest(arglist__24962);
return element__delegate(tag,args);
});
element.cljs$core$IFn$_invoke$arity$variadic = element__delegate;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
gin.dom_helpers.remove_children = (function remove_children(parent_el){return goog.dom.removeChildren(parent_el);
});
/**
* Create a dom element from an html string.
*/
gin.dom_helpers.html = (function html(s){return goog.dom.htmlToDocumentFragment(s);
});
gin.dom_helpers.element_arg_QMARK_ = (function element_arg_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string');
});
/**
* Build up a dom element from nested vectors.
*/
gin.dom_helpers.build = (function build(x){if(cljs.core.vector_QMARK_.call(null,x))
{var vec__24964 = (((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,gin.dom_helpers.element,cljs.core.take_while.call(null,gin.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,gin.dom_helpers.element_arg_QMARK_,x)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x),cljs.core.rest.call(null,x)], null));var parent = cljs.core.nth.call(null,vec__24964,0,null);var children = cljs.core.nth.call(null,vec__24964,1,null);var children__$1 = cljs.core.map.call(null,build,children);return cljs.core.apply.call(null,gin.dom_helpers.append,parent,children__$1);
} else
{return x;
}
});
/**
* Insert a child element at a specific location.
*/
gin.dom_helpers.insert_at = (function insert_at(parent,child,index){return goog.dom.insertChildAt(parent,child,index);
});
gin.dom_helpers.set_timeout = (function set_timeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
gin.dom_helpers.set_position = (function set_position(e,x,y){return goog.style.setPosition(e,x,y);
});
gin.dom_helpers.get_position = (function get_position(e){return goog.style.getPosition(e);
});
gin.dom_helpers.get_bounds = (function get_bounds(e){return goog.style.getBounds(e);
});
gin.dom_helpers.z_level = cljs.core.atom.call(null,100);
gin.dom_helpers.show_on_top = (function show_on_top(card){return card.style.zIndex = cljs.core.swap_BANG_.call(null,gin.dom_helpers.z_level,cljs.core.inc);
});
gin.dom_helpers.set_card_class = (function set_card_class(card_el,card_class){if(cljs.core._EQ_.call(null,card_class,"card_back"))
{return goog.dom.classes.set(card_el,[cljs.core.str("card "),cljs.core.str(card_class)].join(''));
} else
{return gin.dom_helpers.add_remove_class.call(null,card_el,card_class,"card_back");
}
});
gin.dom_helpers.toggle_class = (function toggle_class(el,classname){return goog.dom.classes.toggle(el,classname);
});
gin.dom_helpers.add_class = (function add_class(el,classname){return goog.dom.classes.add(el,classname);
});
gin.dom_helpers.remove_class = (function remove_class(el,classname){return goog.dom.classes.remove(el,classname);
});
gin.dom_helpers.schedule = (function schedule(steps){if(cljs.core.seq.call(null,steps))
{var step = cljs.core.first.call(null,steps);if(typeof step === 'number')
{return gin.dom_helpers.set_timeout.call(null,(function (){return schedule.call(null,cljs.core.rest.call(null,steps));
}),step);
} else
{step.call(null);
return schedule.call(null,cljs.core.rest.call(null,steps));
}
} else
{return null;
}
});
gin.dom_helpers.simultanious = (function simultanious(stepss){return cljs.core.apply.call(null,cljs.core.map,(function() { 
var G__24977__delegate = function (p__24971){var vec__24972 = p__24971;var arg = cljs.core.nth.call(null,vec__24972,0,null);var args = vec__24972;if(typeof arg === 'number')
{return arg;
} else
{return (function (){var seq__24973 = cljs.core.seq.call(null,args);var chunk__24974 = null;var count__24975 = 0;var i__24976 = 0;while(true){
if((i__24976 < count__24975))
{var a = cljs.core._nth.call(null,chunk__24974,i__24976);a.call(null);
{
var G__24978 = seq__24973;
var G__24979 = chunk__24974;
var G__24980 = count__24975;
var G__24981 = (i__24976 + 1);
seq__24973 = G__24978;
chunk__24974 = G__24979;
count__24975 = G__24980;
i__24976 = G__24981;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24973);if(temp__4092__auto__)
{var seq__24973__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24973__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__24973__$1);{
var G__24982 = cljs.core.chunk_rest.call(null,seq__24973__$1);
var G__24983 = c__17389__auto__;
var G__24984 = cljs.core.count.call(null,c__17389__auto__);
var G__24985 = 0;
seq__24973 = G__24982;
chunk__24974 = G__24983;
count__24975 = G__24984;
i__24976 = G__24985;
continue;
}
} else
{var a = cljs.core.first.call(null,seq__24973__$1);a.call(null);
{
var G__24986 = cljs.core.next.call(null,seq__24973__$1);
var G__24987 = null;
var G__24988 = 0;
var G__24989 = 0;
seq__24973 = G__24986;
chunk__24974 = G__24987;
count__24975 = G__24988;
i__24976 = G__24989;
continue;
}
}
} else
{return null;
}
}
break;
}
});
}
};
var G__24977 = function (var_args){
var p__24971 = null;if (arguments.length > 0) {
  p__24971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24977__delegate.call(this,p__24971);};
G__24977.cljs$lang$maxFixedArity = 0;
G__24977.cljs$lang$applyTo = (function (arglist__24990){
var p__24971 = cljs.core.seq(arglist__24990);
return G__24977__delegate(p__24971);
});
G__24977.cljs$core$IFn$_invoke$arity$variadic = G__24977__delegate;
return G__24977;
})()
,stepss);
});
gin.dom_helpers.slide = (function() {
var slide = null;
var slide__3 = (function (el,from,to){return slide.call(null,el,from,to,300,30);
});
var slide__5 = (function (el,p__24991,p__24992,msec,steps){var vec__24999 = p__24991;var from_x = cljs.core.nth.call(null,vec__24999,0,null);var from_y = cljs.core.nth.call(null,vec__24999,1,null);var vec__25000 = p__24992;var to_x = cljs.core.nth.call(null,vec__25000,0,null);var to_y = cljs.core.nth.call(null,vec__25000,1,null);var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);var step_time = (msec / steps);console.log("don't make the moves when already at to-x to-y");
el.currentPosition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_x,to_y], null);
return cljs.core.interleave.call(null,(function (){var iter__17358__auto__ = (function iter__25001(s__25002){return (new cljs.core.LazySeq(null,(function (){var s__25002__$1 = s__25002;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25002__$1);if(temp__4092__auto__)
{var s__25002__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25002__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__25002__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__25004 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__25003 = 0;while(true){
if((i__25003 < size__17357__auto__))
{var n = cljs.core._nth.call(null,c__17356__auto__,i__25003);cljs.core.chunk_append.call(null,b__25004,((function (i__25003,n,c__17356__auto__,size__17357__auto__,b__25004,s__25002__$2,temp__4092__auto__){
return (function (){return goog.style.setPosition(el,cljs.core.long$.call(null,(from_x + (n * dx))),cljs.core.long$.call(null,(from_y + (n * dy))));
});})(i__25003,n,c__17356__auto__,size__17357__auto__,b__25004,s__25002__$2,temp__4092__auto__))
);
{
var G__25005 = (i__25003 + 1);
i__25003 = G__25005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25004),iter__25001.call(null,cljs.core.chunk_rest.call(null,s__25002__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25004),null);
}
} else
{var n = cljs.core.first.call(null,s__25002__$2);return cljs.core.cons.call(null,((function (n,s__25002__$2,temp__4092__auto__){
return (function (){return goog.style.setPosition(el,cljs.core.long$.call(null,(from_x + (n * dx))),cljs.core.long$.call(null,(from_y + (n * dy))));
});})(n,s__25002__$2,temp__4092__auto__))
,iter__25001.call(null,cljs.core.rest.call(null,s__25002__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,cljs.core.range.call(null,(steps + 1)));
})(),cljs.core.repeat.call(null,step_time));
});
slide = function(el,p__24991,p__24992,msec,steps){
switch(arguments.length){
case 3:
return slide__3.call(this,el,p__24991,p__24992);
case 5:
return slide__5.call(this,el,p__24991,p__24992,msec,steps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slide.cljs$core$IFn$_invoke$arity$3 = slide__3;
slide.cljs$core$IFn$_invoke$arity$5 = slide__5;
return slide;
})()
;
gin.dom_helpers.slide_from = (function() {
var slide_from = null;
var slide_from__2 = (function (el,to){return slide_from.call(null,el,to,300,30);
});
var slide_from__4 = (function (el,to,msec,steps){var from = goog.style.getPosition(el);var from_x = from.x;var from_y = from.y;return gin.dom_helpers.slide.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_x,from_y], null),to,msec,steps);
});
slide_from = function(el,to,msec,steps){
switch(arguments.length){
case 2:
return slide_from__2.call(this,el,to);
case 4:
return slide_from__4.call(this,el,to,msec,steps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slide_from.cljs$core$IFn$_invoke$arity$2 = slide_from__2;
slide_from.cljs$core$IFn$_invoke$arity$4 = slide_from__4;
return slide_from;
})()
;
gin.dom_helpers.fly_card = (function fly_card(el,snap_position){return gin.dom_helpers.schedule.call(null,gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snap_position.x,snap_position.y], null)));
});
