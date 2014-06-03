// Compiled by ClojureScript 0.0-2173
goog.provide('gin.ui.dom_helpers');
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
gin.ui.dom_helpers.get_element = (function get_element(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
gin.ui.dom_helpers.show_element = (function show_element(e,b){return goog.style.showElement(e,b);
});
gin.ui.dom_helpers.add_remove_class = (function add_remove_class(e,add_classes,remove_classes){return goog.dom.classes.addRemove(e,remove_classes,add_classes);
});
gin.ui.dom_helpers.get_radio_value = (function get_radio_value(form_name,name){return goog.dom.forms.getValueByName(gin.ui.dom_helpers.get_element.call(null,form_name),name);
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
gin.ui.dom_helpers.append = (function() { 
var append__delegate = function (parent,children){var seq__19367_19371 = cljs.core.seq.call(null,children);var chunk__19368_19372 = null;var count__19369_19373 = 0;var i__19370_19374 = 0;while(true){
if((i__19370_19374 < count__19369_19373))
{var child_19375 = cljs.core._nth.call(null,chunk__19368_19372,i__19370_19374);goog.dom.appendChild(parent,child_19375);
{
var G__19376 = seq__19367_19371;
var G__19377 = chunk__19368_19372;
var G__19378 = count__19369_19373;
var G__19379 = (i__19370_19374 + 1);
seq__19367_19371 = G__19376;
chunk__19368_19372 = G__19377;
count__19369_19373 = G__19378;
i__19370_19374 = G__19379;
continue;
}
} else
{var temp__4092__auto___19380 = cljs.core.seq.call(null,seq__19367_19371);if(temp__4092__auto___19380)
{var seq__19367_19381__$1 = temp__4092__auto___19380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19367_19381__$1))
{var c__17409__auto___19382 = cljs.core.chunk_first.call(null,seq__19367_19381__$1);{
var G__19383 = cljs.core.chunk_rest.call(null,seq__19367_19381__$1);
var G__19384 = c__17409__auto___19382;
var G__19385 = cljs.core.count.call(null,c__17409__auto___19382);
var G__19386 = 0;
seq__19367_19371 = G__19383;
chunk__19368_19372 = G__19384;
count__19369_19373 = G__19385;
i__19370_19374 = G__19386;
continue;
}
} else
{var child_19387 = cljs.core.first.call(null,seq__19367_19381__$1);goog.dom.appendChild(parent,child_19387);
{
var G__19388 = cljs.core.next.call(null,seq__19367_19381__$1);
var G__19389 = null;
var G__19390 = 0;
var G__19391 = 0;
seq__19367_19371 = G__19388;
chunk__19368_19372 = G__19389;
count__19369_19373 = G__19390;
i__19370_19374 = G__19391;
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
append.cljs$lang$applyTo = (function (arglist__19392){
var parent = cljs.core.first(arglist__19392);
var children = cljs.core.rest(arglist__19392);
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
gin.ui.dom_helpers.set_text = (function set_text(e,s){var e__$1 = ((((e instanceof cljs.core.Keyword)) || (typeof e === 'string'))?gin.ui.dom_helpers.get_element.call(null,e):e);var G__19394 = e__$1;goog.dom.setTextContent(G__19394,s);
return G__19394;
});
gin.ui.dom_helpers.normalize_args = (function normalize_args(tag,args){var parts = clojure.string.split.call(null,tag,/(\.|#)/);var vec__19397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,((function (parts){
return (function (p1__19395_SHARP_){if(cljs.core._EQ_.call(null,p1__19395_SHARP_,"."))
{return new cljs.core.Keyword(null,"class","class",1108647146);
} else
{if(cljs.core._EQ_.call(null,p1__19395_SHARP_,"#"))
{return new cljs.core.Keyword(null,"id","id",1013907597);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__19395_SHARP_;
} else
{return null;
}
}
}
});})(parts))
,cljs.core.rest.call(null,parts)))], null);var tag__$1 = cljs.core.nth.call(null,vec__19397,0,null);var attrs = cljs.core.nth.call(null,vec__19397,1,null);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
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
gin.ui.dom_helpers.element = (function() { 
var element__delegate = function (tag,args){var vec__19404 = gin.ui.dom_helpers.normalize_args.call(null,tag,args);var tag__$1 = cljs.core.nth.call(null,vec__19404,0,null);var attrs = cljs.core.nth.call(null,vec__19404,1,null);var children = cljs.core.nth.call(null,vec__19404,2,null);var parent = goog.dom.createDom(cljs.core.subs.call(null,tag__$1,1),cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,((function (vec__19404,tag__$1,attrs,children){
return (function (m,p__19406){var vec__19407 = p__19406;var k = cljs.core.nth.call(null,vec__19407,0,null);var v = cljs.core.nth.call(null,vec__19407,1,null);return cljs.core.assoc.call(null,m,k,v);
});})(vec__19404,tag__$1,attrs,children))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__19404,tag__$1,attrs,children){
return (function (p1__19398_SHARP_,p2__19399_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,p1__19398_SHARP_),p2__19399_SHARP_],null));
});})(vec__19404,tag__$1,attrs,children))
,cljs.core.keys.call(null,attrs),cljs.core.vals.call(null,attrs)))));var vec__19405 = ((typeof cljs.core.first.call(null,children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.ui.dom_helpers.set_text.call(null,element.call(null,tag__$1,attrs),cljs.core.first.call(null,children)),cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,children], null));var parent__$1 = cljs.core.nth.call(null,vec__19405,0,null);var children__$1 = cljs.core.nth.call(null,vec__19405,1,null);return cljs.core.apply.call(null,gin.ui.dom_helpers.append,parent__$1,children__$1);
};
var element = function (tag,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return element__delegate.call(this,tag,args);};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = (function (arglist__19408){
var tag = cljs.core.first(arglist__19408);
var args = cljs.core.rest(arglist__19408);
return element__delegate(tag,args);
});
element.cljs$core$IFn$_invoke$arity$variadic = element__delegate;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
gin.ui.dom_helpers.remove_children = (function remove_children(parent_el){return goog.dom.removeChildren(parent_el);
});
/**
* Create a dom element from an html string.
*/
gin.ui.dom_helpers.html = (function html(s){return goog.dom.htmlToDocumentFragment(s);
});
gin.ui.dom_helpers.element_arg_QMARK_ = (function element_arg_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string');
});
/**
* Build up a dom element from nested vectors.
*/
gin.ui.dom_helpers.build = (function build(x){if(cljs.core.vector_QMARK_.call(null,x))
{var vec__19410 = (((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,gin.ui.dom_helpers.element,cljs.core.take_while.call(null,gin.ui.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,gin.ui.dom_helpers.element_arg_QMARK_,x)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x),cljs.core.rest.call(null,x)], null));var parent = cljs.core.nth.call(null,vec__19410,0,null);var children = cljs.core.nth.call(null,vec__19410,1,null);var children__$1 = cljs.core.map.call(null,build,children);return cljs.core.apply.call(null,gin.ui.dom_helpers.append,parent,children__$1);
} else
{return x;
}
});
/**
* Insert a child element at a specific location.
*/
gin.ui.dom_helpers.insert_at = (function insert_at(parent,child,index){return goog.dom.insertChildAt(parent,child,index);
});
gin.ui.dom_helpers.set_timeout = (function set_timeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
gin.ui.dom_helpers.set_position = (function set_position(e,x,y){return goog.style.setPosition(e,x,y);
});
gin.ui.dom_helpers.get_position = (function get_position(e){var p = goog.style.getPosition(e);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
});
gin.ui.dom_helpers.get_bounds = (function get_bounds(e){return goog.style.getBounds(e);
});
gin.ui.dom_helpers.z_level = cljs.core.atom.call(null,100);
gin.ui.dom_helpers.show_on_top = (function show_on_top(card){return card.style.zIndex = cljs.core.swap_BANG_.call(null,gin.ui.dom_helpers.z_level,cljs.core.inc);
});
gin.ui.dom_helpers.set_card_class = (function set_card_class(card_el,card_class){if(cljs.core._EQ_.call(null,card_class,"card_back"))
{return goog.dom.classes.set(card_el,[cljs.core.str("card "),cljs.core.str(card_class)].join(''));
} else
{return gin.ui.dom_helpers.add_remove_class.call(null,card_el,card_class,"card_back");
}
});
gin.ui.dom_helpers.toggle_class = (function toggle_class(el,classname){return goog.dom.classes.toggle(el,classname);
});
gin.ui.dom_helpers.add_class = (function add_class(el,classname){return goog.dom.classes.add(el,classname);
});
gin.ui.dom_helpers.remove_class = (function remove_class(el,classname){return goog.dom.classes.remove(el,classname);
});
