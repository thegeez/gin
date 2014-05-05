// Compiled by ClojureScript 0.0-2173
goog.provide('gin.game_panel');
goog.require('cljs.core');
goog.require('gin.transact');
goog.require('gin.transact');
goog.require('datascript');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('gin.dom_helpers');
goog.require('goog.dom');
goog.require('gin.datascript_helpers');
goog.require('datascript');
goog.require('gin.dom_helpers');
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('gin.datascript_helpers');
goog.require('goog.fx.Dragger');
goog.require('goog.async.AnimationDelay');
gin.game_panel.in_rect = (function in_rect(rect,p__13869){var vec__13871 = p__13869;var x = cljs.core.nth.call(null,vec__13871,0,null);var y = cljs.core.nth.call(null,vec__13871,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (_,p__13872,p__13873,conn){var vec__13874 = p__13872;var game_id = cljs.core.nth.call(null,vec__13874,0,null);var map__13875 = p__13873;var map__13875__$1 = ((cljs.core.seq_QMARK_.call(null,map__13875))?cljs.core.apply.call(null,cljs.core.hash_map,map__13875):map__13875);var report = map__13875__$1;var db_after = cljs.core.get.call(null,map__13875__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 35)));
})();var cards = (function (){var iter__10096__auto__ = ((function (container_wrap){
return (function iter__13876(s__13877){return (new cljs.core.LazySeq(null,((function (container_wrap){
return (function (){var s__13877__$1 = s__13877;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13877__$1);if(temp__4092__auto__)
{var s__13877__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13877__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__13877__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__13879 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__13878 = 0;while(true){
if((i__13878 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__13878);cljs.core.chunk_append.call(null,b__13879,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__13882 = (new goog.fx.Dragger(card_el));G__13882.setLimits(container_wrap);
return G__13882;
})();card_el.dispose = ((function (i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__13878,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__13879,s__13877__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__13898 = (i__13878 + 1);
i__13878 = G__13898;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13879),iter__13876.call(null,cljs.core.chunk_rest.call(null,s__13877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13879),null);
}
} else
{var i = cljs.core.first.call(null,s__13877__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__13883 = (new goog.fx.Dragger(card_el));G__13883.setLimits(container_wrap);
return G__13883;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__13877__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__13876.call(null,cljs.core.rest.call(null,s__13877__$2)));
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
})();var seq__13884_13899 = cljs.core.seq.call(null,cards);var chunk__13885_13900 = null;var count__13886_13901 = 0;var i__13887_13902 = 0;while(true){
if((i__13887_13902 < count__13886_13901))
{var map__13888_13903 = cljs.core._nth.call(null,chunk__13885_13900,i__13887_13902);var map__13888_13904__$1 = ((cljs.core.seq_QMARK_.call(null,map__13888_13903))?cljs.core.apply.call(null,cljs.core.hash_map,map__13888_13903):map__13888_13903);var card_el_13905 = cljs.core.get.call(null,map__13888_13904__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_13905);
{
var G__13906 = seq__13884_13899;
var G__13907 = chunk__13885_13900;
var G__13908 = count__13886_13901;
var G__13909 = (i__13887_13902 + 1);
seq__13884_13899 = G__13906;
chunk__13885_13900 = G__13907;
count__13886_13901 = G__13908;
i__13887_13902 = G__13909;
continue;
}
} else
{var temp__4092__auto___13910 = cljs.core.seq.call(null,seq__13884_13899);if(temp__4092__auto___13910)
{var seq__13884_13911__$1 = temp__4092__auto___13910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13884_13911__$1))
{var c__10127__auto___13912 = cljs.core.chunk_first.call(null,seq__13884_13911__$1);{
var G__13913 = cljs.core.chunk_rest.call(null,seq__13884_13911__$1);
var G__13914 = c__10127__auto___13912;
var G__13915 = cljs.core.count.call(null,c__10127__auto___13912);
var G__13916 = 0;
seq__13884_13899 = G__13913;
chunk__13885_13900 = G__13914;
count__13886_13901 = G__13915;
i__13887_13902 = G__13916;
continue;
}
} else
{var map__13889_13917 = cljs.core.first.call(null,seq__13884_13911__$1);var map__13889_13918__$1 = ((cljs.core.seq_QMARK_.call(null,map__13889_13917))?cljs.core.apply.call(null,cljs.core.hash_map,map__13889_13917):map__13889_13917);var card_el_13919 = cljs.core.get.call(null,map__13889_13918__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_13919);
{
var G__13920 = cljs.core.next.call(null,seq__13884_13911__$1);
var G__13921 = null;
var G__13922 = 0;
var G__13923 = 0;
seq__13884_13899 = G__13920;
chunk__13885_13900 = G__13921;
count__13886_13901 = G__13922;
i__13887_13902 = G__13923;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,cljs.core.concat.call(null,(function (){var iter__10096__auto__ = (function iter__13890(s__13891){return (new cljs.core.LazySeq(null,(function (){var s__13891__$1 = s__13891;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13891__$1);if(temp__4092__auto__)
{var s__13891__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13891__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__13891__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__13893 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__13892 = 0;while(true){
if((i__13892 < size__10095__auto__))
{var map__13896 = cljs.core._nth.call(null,c__10094__auto__,i__13892);var map__13896__$1 = ((cljs.core.seq_QMARK_.call(null,map__13896))?cljs.core.apply.call(null,cljs.core.hash_map,map__13896):map__13896);var card_el = cljs.core.get.call(null,map__13896__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__13896__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__13896__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__13893,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null));
{
var G__13924 = (i__13892 + 1);
i__13892 = G__13924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13893),iter__13890.call(null,cljs.core.chunk_rest.call(null,s__13891__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13893),null);
}
} else
{var map__13897 = cljs.core.first.call(null,s__13891__$2);var map__13897__$1 = ((cljs.core.seq_QMARK_.call(null,map__13897))?cljs.core.apply.call(null,cljs.core.hash_map,map__13897):map__13897);var card_el = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null),iter__13890.call(null,cljs.core.rest.call(null,s__13891__$2)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__13929,p__13930,conn){var vec__13931 = p__13929;var game_id = cljs.core.nth.call(null,vec__13931,0,null);var map__13932 = p__13930;var map__13932__$1 = ((cljs.core.seq_QMARK_.call(null,map__13932))?cljs.core.apply.call(null,cljs.core.hash_map,map__13932):map__13932);var report = map__13932__$1;var db_after = cljs.core.get.call(null,map__13932__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,((function (game){
return (function (p1__13925_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__13925_SHARP_], null)));
});})(game))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__13926_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__13926_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var vec__13933 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})();var their_region_offset_x = cljs.core.nth.call(null,vec__13933,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__13933,1,null);console.log("our-cards-el+card counts",cljs.core.count.call(null,gin.game_panel.our_cards_el_PLUS_card));
return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__13928_SHARP_,p2__13927_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__13927_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__13927_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((their_region_offset_x + 10) + (p1__13928_SHARP_ * 53)),((their_region_offset_y + 10) + (p1__13928_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__13934){var map__13935 = p__13934;var map__13935__$1 = ((cljs.core.seq_QMARK_.call(null,map__13935))?cljs.core.apply.call(null,cljs.core.hash_map,map__13935):map__13935);var el = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(44 + (idx * 53)),(306 + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null));
}),cljs.core.range.call(null),our_cards_es)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__13936,p__13937,conn){var vec__13938 = p__13936;var game_id = cljs.core.nth.call(null,vec__13938,0,null);var turn = cljs.core.nth.call(null,vec__13938,1,null);var map__13939 = p__13937;var map__13939__$1 = ((cljs.core.seq_QMARK_.call(null,map__13939))?cljs.core.apply.call(null,cljs.core.hash_map,map__13939):map__13939);var report = map__13939__$1;var db_after = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__13940 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?us","?us",-1640467242,null),new cljs.core.Symbol(null,"?turn","?turn",-1578777867,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"us","us",1013907984),new cljs.core.Symbol(null,"?us","?us",-1640467242,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"turn","turn",1017476079),new cljs.core.Symbol(null,"?turn","?turn",-1578777867,null)], null)], null)], null),db_after,game_id));var game_eid = cljs.core.nth.call(null,vec__13940,0,null);var us = cljs.core.nth.call(null,vec__13940,1,null);var turn__$1 = cljs.core.nth.call(null,vec__13940,2,null);console.log("turn-assigned",game_eid,us,turn__$1);
if(cljs.core._EQ_.call(null,us,turn__$1))
{var vec__13941 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?elem","?elem",-1579233785,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null),new cljs.core.Symbol(null,"?last","?last",-1579035378,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"deck","deck",1016983579),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?last","?last",-1579035378,null),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","id","dom/id",1020278687),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),new cljs.core.Symbol(null,"?elem","?elem",-1579233785,null)], null)], null)], null),db_after,game_id,cljs.core.last));var pile_eid = cljs.core.nth.call(null,vec__13941,0,null);var pile_elem = cljs.core.nth.call(null,vec__13941,1,null);console.log("found top of deck: ",pile_eid,pile_elem);
return gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__13944 = report;var map__13944__$1 = ((cljs.core.seq_QMARK_.call(null,map__13944))?cljs.core.apply.call(null,cljs.core.hash_map,map__13944):map__13944);var db_after = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__13945 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__13945,0,null);var args = cljs.core.nth.call(null,vec__13945,1,null);return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(){var G__13947 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__13947,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.deck","div.deck",1323685720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"deck"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__13947,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
return G__13947;
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){gin.game_panel.draw_table.call(null);
return datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.render.call(null,report,conn);
}));
});
