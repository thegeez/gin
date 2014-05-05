// Compiled by ClojureScript 0.0-2173
goog.provide('gin.game_panel');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gin.transact');
goog.require('gin.transact');
goog.require('datascript');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('gin.dom_helpers');
goog.require('goog.net.ImageLoader');
goog.require('goog.dom');
goog.require('goog.net.ImageLoader');
goog.require('gin.datascript_helpers');
goog.require('datascript');
goog.require('gin.dom_helpers');
goog.require('cljs.core.async');
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('gin.datascript_helpers');
goog.require('goog.fx.Dragger');
goog.require('goog.async.AnimationDelay');
gin.game_panel.set_msg = (function set_msg(msg){return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.in_rect = (function in_rect(rect,p__24130){var vec__24132 = p__24130;var x = cljs.core.nth.call(null,vec__24132,0,null);var y = cljs.core.nth.call(null,vec__24132,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.pile_position = (function pile_position(){var pos = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"deck"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos.x + 4),(pos.y + 4)], null);
});
gin.game_panel.set_drag_handler = (function set_drag_handler(card_el,handler){var cursor = new cljs.core.Keyword(null,"cursor","cursor",3959752392).cljs$core$IFn$_invoke$arity$1(handler);if(cljs.core._EQ_.call(null,cursor,new cljs.core.Keyword(null,"hand","hand",1017099233)))
{gin.dom_helpers.add_class.call(null,card_el,"cursor_hand");
} else
{gin.dom_helpers.remove_class.call(null,card_el,"cursor_hand");
}
return card_el.drag_handler = handler;
});
gin.game_panel.undraggable_handler = (function undraggable_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"none","none",1017291434),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){return null;
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){return null;
})], null);
});
gin.game_panel.pile_pick_handler = (function pile_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){if(gin.game_panel.in_our_region.call(null,event.clientX,event.clientY))
{return null;
} else
{gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.pile_drag_handler.call(null,conn));
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
})], null);
});
gin.game_panel.pile_drag_handler = (function pile_drag_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);console.log("pile drag start",card_el);
gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_drag","cursor_hand");
return gin.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);if(gin.game_panel.in_our_region.call(null,pos.x,pos.y))
{gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.pile_pick_handler.call(null,conn));
return gin.dom_helpers.add_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
} else
{return null;
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
return gin.dom_helpers.schedule.call(null,gin.dom_helpers.slide_from.call(null,card_el,gin.game_panel.pile_position.call(null)));
})], null);
});
gin.game_panel.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (_,p__24133,p__24134,conn){var vec__24135 = p__24133;var game_id = cljs.core.nth.call(null,vec__24135,0,null);var map__24136 = p__24134;var map__24136__$1 = ((cljs.core.seq_QMARK_.call(null,map__24136))?cljs.core.apply.call(null,cljs.core.hash_map,map__24136):map__24136);var report = map__24136__$1;var db_after = cljs.core.get.call(null,map__24136__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 35)));
})();var cards = (function (){var iter__10096__auto__ = ((function (container_wrap){
return (function iter__24137(s__24138){return (new cljs.core.LazySeq(null,((function (container_wrap){
return (function (){var s__24138__$1 = s__24138;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24138__$1);if(temp__4092__auto__)
{var s__24138__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24138__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__24138__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__24140 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__24139 = 0;while(true){
if((i__24139 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__24139);cljs.core.chunk_append.call(null,b__24140,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__24143 = (new goog.fx.Dragger(card_el));G__24143.setLimits(container_wrap);
return G__24143;
})();card_el.dispose = ((function (i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24139,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__24140,s__24138__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__24159 = (i__24139 + 1);
i__24139 = G__24159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24140),iter__24137.call(null,cljs.core.chunk_rest.call(null,s__24138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24140),null);
}
} else
{var i = cljs.core.first.call(null,s__24138__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__24144 = (new goog.fx.Dragger(card_el));G__24144.setLimits(container_wrap);
return G__24144;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24138__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__24137.call(null,cljs.core.rest.call(null,s__24138__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap))
,null,null));
});})(container_wrap))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__24145_24160 = cljs.core.seq.call(null,cards);var chunk__24146_24161 = null;var count__24147_24162 = 0;var i__24148_24163 = 0;while(true){
if((i__24148_24163 < count__24147_24162))
{var map__24149_24164 = cljs.core._nth.call(null,chunk__24146_24161,i__24148_24163);var map__24149_24165__$1 = ((cljs.core.seq_QMARK_.call(null,map__24149_24164))?cljs.core.apply.call(null,cljs.core.hash_map,map__24149_24164):map__24149_24164);var card_el_24166 = cljs.core.get.call(null,map__24149_24165__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_24166);
{
var G__24167 = seq__24145_24160;
var G__24168 = chunk__24146_24161;
var G__24169 = count__24147_24162;
var G__24170 = (i__24148_24163 + 1);
seq__24145_24160 = G__24167;
chunk__24146_24161 = G__24168;
count__24147_24162 = G__24169;
i__24148_24163 = G__24170;
continue;
}
} else
{var temp__4092__auto___24171 = cljs.core.seq.call(null,seq__24145_24160);if(temp__4092__auto___24171)
{var seq__24145_24172__$1 = temp__4092__auto___24171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24145_24172__$1))
{var c__10127__auto___24173 = cljs.core.chunk_first.call(null,seq__24145_24172__$1);{
var G__24174 = cljs.core.chunk_rest.call(null,seq__24145_24172__$1);
var G__24175 = c__10127__auto___24173;
var G__24176 = cljs.core.count.call(null,c__10127__auto___24173);
var G__24177 = 0;
seq__24145_24160 = G__24174;
chunk__24146_24161 = G__24175;
count__24147_24162 = G__24176;
i__24148_24163 = G__24177;
continue;
}
} else
{var map__24150_24178 = cljs.core.first.call(null,seq__24145_24172__$1);var map__24150_24179__$1 = ((cljs.core.seq_QMARK_.call(null,map__24150_24178))?cljs.core.apply.call(null,cljs.core.hash_map,map__24150_24178):map__24150_24178);var card_el_24180 = cljs.core.get.call(null,map__24150_24179__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_24180);
{
var G__24181 = cljs.core.next.call(null,seq__24145_24172__$1);
var G__24182 = null;
var G__24183 = 0;
var G__24184 = 0;
seq__24145_24160 = G__24181;
chunk__24146_24161 = G__24182;
count__24147_24162 = G__24183;
i__24148_24163 = G__24184;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,cljs.core.concat.call(null,(function (){var iter__10096__auto__ = (function iter__24151(s__24152){return (new cljs.core.LazySeq(null,(function (){var s__24152__$1 = s__24152;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24152__$1);if(temp__4092__auto__)
{var s__24152__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24152__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__24152__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__24154 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__24153 = 0;while(true){
if((i__24153 < size__10095__auto__))
{var map__24157 = cljs.core._nth.call(null,c__10094__auto__,i__24153);var map__24157__$1 = ((cljs.core.seq_QMARK_.call(null,map__24157))?cljs.core.apply.call(null,cljs.core.hash_map,map__24157):map__24157);var card_el = cljs.core.get.call(null,map__24157__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__24157__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__24157__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__24154,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null));
{
var G__24185 = (i__24153 + 1);
i__24153 = G__24185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24154),iter__24151.call(null,cljs.core.chunk_rest.call(null,s__24152__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24154),null);
}
} else
{var map__24158 = cljs.core.first.call(null,s__24152__$2);var map__24158__$1 = ((cljs.core.seq_QMARK_.call(null,map__24158))?cljs.core.apply.call(null,cljs.core.hash_map,map__24158):map__24158);var card_el = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null),iter__24151.call(null,cljs.core.rest.call(null,s__24152__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,cards);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"deck","deck",1016983579),cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",1013907597),cards)], null)], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__24190,p__24191,conn){var vec__24192 = p__24190;var game_id = cljs.core.nth.call(null,vec__24192,0,null);var map__24193 = p__24191;var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);var report = map__24193__$1;var db_after = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game",cljs.core.pr_str.call(null,game));var opp_cards_el = cljs.core.map.call(null,((function (game,_){
return (function (p1__24186_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24186_SHARP_], null)));
});})(game,_))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__24187_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24187_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__24194 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var their_region_offset_x = cljs.core.nth.call(null,vec__24194,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__24194,1,null);var discard_position = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + p.x),(12 + p.y)], null);
})();var vec__24195 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var our_region_offset_x = cljs.core.nth.call(null,vec__24195,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__24195,1,null);console.log("their-cards ",cljs.core.count.call(null,opp_cards_el));
console.log("our-cards-es",cljs.core.pr_str.call(null,our_cards_es));
console.log("discard: ",cljs.core.pr_str.call(null,discard));
return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__24189_SHARP_,p2__24188_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__24188_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__24188_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__24189_SHARP_ * 53)),(their_region_offset_y + (p1__24189_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__24196){var map__24197 = p__24196;var map__24197__$1 = ((cljs.core.seq_QMARK_.call(null,map__24197))?cljs.core.apply.call(null,cljs.core.hash_map,map__24197):map__24197);var el = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null));
}),cljs.core.range.call(null),our_cards_es),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard));
})], null),gin.dom_helpers.slide_from.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),discard_position),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__24198,p__24199,conn){var vec__24200 = p__24198;var game_id = cljs.core.nth.call(null,vec__24200,0,null);var turn = cljs.core.nth.call(null,vec__24200,1,null);var map__24201 = p__24199;var map__24201__$1 = ((cljs.core.seq_QMARK_.call(null,map__24201))?cljs.core.apply.call(null,cljs.core.hash_map,map__24201):map__24201);var report = map__24201__$1;var db_after = cljs.core.get.call(null,map__24201__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__24202 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?us","?us",-1640467242,null),new cljs.core.Symbol(null,"?turn","?turn",-1578777867,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"us","us",1013907984),new cljs.core.Symbol(null,"?us","?us",-1640467242,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"turn","turn",1017476079),new cljs.core.Symbol(null,"?turn","?turn",-1578777867,null)], null)], null)], null),db_after,game_id));var game_eid = cljs.core.nth.call(null,vec__24202,0,null);var us = cljs.core.nth.call(null,vec__24202,1,null);var turn__$1 = cljs.core.nth.call(null,vec__24202,2,null);console.log("turn-assigned",game_eid,us,turn__$1);
if(cljs.core._EQ_.call(null,us,turn__$1))
{var vec__24203 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?elem","?elem",-1579233785,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null),new cljs.core.Symbol(null,"?last","?last",-1579035378,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"deck","deck",1016983579),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?last","?last",-1579035378,null),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","id","dom/id",1020278687),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),new cljs.core.Symbol(null,"?elem","?elem",-1579233785,null)], null)], null)], null),db_after,game_id,cljs.core.last));var pile_eid = cljs.core.nth.call(null,vec__24203,0,null);var pile_elem = cljs.core.nth.call(null,vec__24203,1,null);console.log("found top of deck: ",pile_eid,pile_elem);
return gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__24206 = report;var map__24206__$1 = ((cljs.core.seq_QMARK_.call(null,map__24206))?cljs.core.apply.call(null,cljs.core.hash_map,map__24206):map__24206);var db_after = cljs.core.get.call(null,map__24206__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__24207 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__24207,0,null);var args = cljs.core.nth.call(null,vec__24207,1,null);return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(){var G__24209 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__24209,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.deck","div.deck",1323685720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"deck"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__24209,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
return G__24209;
});
gin.game_panel.load_images = (function load_images(){var c = cljs.core.async.chan.call(null);var image_loader = (new goog.net.ImageLoader());var done = cljs.core.atom.call(null,0);var updater = goog.events.listen(image_loader,goog.events.EventType.LOAD,((function (c,image_loader,done){
return (function (e){return gin.game_panel.set_msg.call(null,[cljs.core.str("Loading image ["),cljs.core.str(cljs.core.swap_BANG_.call(null,done,cljs.core.inc)),cljs.core.str("/53]")].join(''));
});})(c,image_loader,done))
);image_loader.addImage("/public/images/b.png","/public/images/b.png");
var seq__24220_24230 = cljs.core.seq.call(null,(function (){var iter__10096__auto__ = (function iter__24224(s__24225){return (new cljs.core.LazySeq(null,(function (){var s__24225__$1 = s__24225;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24225__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__24225__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__24226(s__24227){return (new cljs.core.LazySeq(null,((function (s__24225__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__24227__$1 = s__24227;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__24227__$1);if(temp__4092__auto____$1)
{var s__24227__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__24227__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__24227__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__24229 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__24228 = 0;while(true){
if((i__24228 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__24228);cljs.core.chunk_append.call(null,b__24229,[cljs.core.str("/public/images/"),cljs.core.str(suit),cljs.core.str("_"),cljs.core.str(rank),cljs.core.str(".png")].join(''));
{
var G__24234 = (i__24228 + 1);
i__24228 = G__24234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24229),iter__24226.call(null,cljs.core.chunk_rest.call(null,s__24227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24229),null);
}
} else
{var rank = cljs.core.first.call(null,s__24227__$2);return cljs.core.cons.call(null,[cljs.core.str("/public/images/"),cljs.core.str(suit),cljs.core.str("_"),cljs.core.str(rank),cljs.core.str(".png")].join(''),iter__24226.call(null,cljs.core.rest.call(null,s__24227__$2)));
}
} else
{return null;
}
break;
}
});})(s__24225__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__24225__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,"AKQJT98765432"));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__24224.call(null,cljs.core.rest.call(null,s__24225__$1)));
} else
{{
var G__24235 = cljs.core.rest.call(null,s__24225__$1);
s__24225__$1 = G__24235;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diamond","club","heart","spade"], null));
})());var chunk__24221_24231 = null;var count__24222_24232 = 0;var i__24223_24233 = 0;while(true){
if((i__24223_24233 < count__24222_24232))
{var img_loc_24236 = cljs.core._nth.call(null,chunk__24221_24231,i__24223_24233);image_loader.addImage(img_loc_24236,img_loc_24236);
{
var G__24237 = seq__24220_24230;
var G__24238 = chunk__24221_24231;
var G__24239 = count__24222_24232;
var G__24240 = (i__24223_24233 + 1);
seq__24220_24230 = G__24237;
chunk__24221_24231 = G__24238;
count__24222_24232 = G__24239;
i__24223_24233 = G__24240;
continue;
}
} else
{var temp__4092__auto___24241 = cljs.core.seq.call(null,seq__24220_24230);if(temp__4092__auto___24241)
{var seq__24220_24242__$1 = temp__4092__auto___24241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24220_24242__$1))
{var c__10127__auto___24243 = cljs.core.chunk_first.call(null,seq__24220_24242__$1);{
var G__24244 = cljs.core.chunk_rest.call(null,seq__24220_24242__$1);
var G__24245 = c__10127__auto___24243;
var G__24246 = cljs.core.count.call(null,c__10127__auto___24243);
var G__24247 = 0;
seq__24220_24230 = G__24244;
chunk__24221_24231 = G__24245;
count__24222_24232 = G__24246;
i__24223_24233 = G__24247;
continue;
}
} else
{var img_loc_24248 = cljs.core.first.call(null,seq__24220_24242__$1);image_loader.addImage(img_loc_24248,img_loc_24248);
{
var G__24249 = cljs.core.next.call(null,seq__24220_24242__$1);
var G__24250 = null;
var G__24251 = 0;
var G__24252 = 0;
seq__24220_24230 = G__24249;
chunk__24221_24231 = G__24250;
count__24222_24232 = G__24251;
i__24223_24233 = G__24252;
continue;
}
}
} else
{}
}
break;
}
goog.events.listenOnce(image_loader,goog.net.EventType.COMPLETE,(function (){goog.events.unlistenByKey(updater);
gin.game_panel.set_msg.call(null,"");
return cljs.core.async.close_BANG_.call(null,c);
}));
gin.game_panel.set_msg.call(null,"Loading images [0/53]");
image_loader.start();
return c;
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){var ch = cljs.core.async.chan.call(null,50);datascript.listen_BANG_.call(null,conn,(function (report){return cljs.core.async.put_BANG_.call(null,ch,report);
}));
gin.game_panel.draw_table.call(null);
var c__11515__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_24301){var state_val_24302 = (state_24301[1]);if((state_val_24302 === 8))
{var inst_24297 = (state_24301[2]);var state_24301__$1 = state_24301;var statearr_24303_24319 = state_24301__$1;(statearr_24303_24319[2] = inst_24297);
(statearr_24303_24319[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24302 === 7))
{var state_24301__$1 = state_24301;var statearr_24304_24320 = state_24301__$1;(statearr_24304_24320[2] = null);
(statearr_24304_24320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24302 === 6))
{var inst_24291 = (state_24301[7]);var inst_24293 = gin.game_panel.render.call(null,inst_24291,conn);var state_24301__$1 = (function (){var statearr_24305 = state_24301;(statearr_24305[8] = inst_24293);
return statearr_24305;
})();var statearr_24306_24321 = state_24301__$1;(statearr_24306_24321[2] = null);
(statearr_24306_24321[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24302 === 5))
{var inst_24291 = (state_24301[7]);var inst_24291__$1 = (state_24301[2]);var state_24301__$1 = (function (){var statearr_24307 = state_24301;(statearr_24307[7] = inst_24291__$1);
return statearr_24307;
})();if(cljs.core.truth_(inst_24291__$1))
{var statearr_24308_24322 = state_24301__$1;(statearr_24308_24322[1] = 6);
} else
{var statearr_24309_24323 = state_24301__$1;(statearr_24309_24323[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24302 === 4))
{var inst_24299 = (state_24301[2]);var state_24301__$1 = state_24301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24301__$1,inst_24299);
} else
{if((state_val_24302 === 3))
{var state_24301__$1 = state_24301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,5,ch);
} else
{if((state_val_24302 === 2))
{var inst_24288 = (state_24301[2]);var state_24301__$1 = (function (){var statearr_24310 = state_24301;(statearr_24310[9] = inst_24288);
return statearr_24310;
})();var statearr_24311_24324 = state_24301__$1;(statearr_24311_24324[2] = null);
(statearr_24311_24324[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24302 === 1))
{var inst_24286 = gin.game_panel.load_images.call(null);var state_24301__$1 = state_24301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,2,inst_24286);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_24315 = [null,null,null,null,null,null,null,null,null,null];(statearr_24315[0] = state_machine__11501__auto__);
(statearr_24315[1] = 1);
return statearr_24315;
});
var state_machine__11501__auto____1 = (function (state_24301){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_24301);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e24316){if((e24316 instanceof Object))
{var ex__11504__auto__ = e24316;var statearr_24317_24325 = state_24301;(statearr_24317_24325[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24316;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24326 = state_24301;
state_24301 = G__24326;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_24301){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_24301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_24318 = f__11516__auto__.call(null);(statearr_24318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto__);
return statearr_24318;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return c__11515__auto__;
});
