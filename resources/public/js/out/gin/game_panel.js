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
gin.game_panel.set_msg = (function set_msg(msg){return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.msg = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("msg",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Dealing ...");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Ready");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__28970,p__28971,_){var vec__28972 = p__28970;var game_id = cljs.core.nth.call(null,vec__28972,0,null);var map__28973 = p__28971;var map__28973__$1 = ((cljs.core.seq_QMARK_.call(null,map__28973))?cljs.core.apply.call(null,cljs.core.hash_map,map__28973):map__28973);var db_after = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__28974 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__28974__$1 = ((cljs.core.seq_QMARK_.call(null,map__28974))?cljs.core.apply.call(null,cljs.core.hash_map,map__28974):map__28974);var game = map__28974__$1;var turn = cljs.core.get.call(null,map__28974__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__28974__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"pile-picked","pile-picked",752847085),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"You've chosen a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"discard-picked","discard-picked",2413694977),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Drag a card from your hand to discard.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"discard-chosen","discard-chosen",2040957683),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Your move is done.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__28975){var vec__28977 = p__28975;var x = cljs.core.nth.call(null,vec__28977,0,null);var y = cljs.core.nth.call(null,vec__28977,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"discard_pile"));return gin.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.pile_position = (function pile_position(){var pos = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"deck"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos.x + 4),(pos.y + 4)], null);
});
gin.game_panel.discard_position = (function discard_position(){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + p.x),(12 + p.y)], null);
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);if(gin.game_panel.in_our_region.call(null,pos.x,pos.y))
{return null;
} else
{gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.pile_picked,card_id], null)], null));
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
gin.game_panel.home_region_handler = (function home_region_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,gin.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
card_el.drag_origin = gin.dom_helpers.get_position.call(null,card_el);
return gin.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){return null;
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.game_panel.in_our_region.call(null,pos.x,pos.y))
{return null;
} else
{return gin.dom_helpers.fly_card.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.game_panel.discard_pick_handler = (function discard_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);if(gin.game_panel.in_our_region.call(null,pos.x,pos.y))
{return null;
} else
{gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.discard_drag_handler.call(null,conn));
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.home_region_handler.call(null,conn));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.discard_picked,card_id], null)], null));
})], null);
});
gin.game_panel.discard_drag_handler = (function discard_drag_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){gin.dom_helpers.add_remove_class.call(null,gin.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
return gin.dom_helpers.show_on_top.call(null,gin.dom_helpers.get_element.call(null,card_id));
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);if(gin.game_panel.in_our_region.call(null,pos.x,pos.y))
{gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.discard_pick_handler.call(null,conn));
return gin.dom_helpers.add_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
} else
{return null;
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
return gin.dom_helpers.schedule.call(null,gin.dom_helpers.slide_from.call(null,card_el,gin.game_panel.discard_position.call(null)));
})], null);
});
gin.game_panel.snap_to_discard_handler = (function snap_to_discard_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);if(gin.game_panel.in_discard_pile.call(null,event.clientX,event.clientY))
{return null;
} else
{gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.home_discard_handler.call(null,conn));
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"),"region_hover");
return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.slide_from.call(null,card_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.discard_chosen,card_id], null)], null));
})], null)));
})], null);
});
gin.game_panel.home_discard_handler = (function home_discard_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,gin.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
card_el.drag_origin = gin.dom_helpers.get_position.call(null,card_el);
return gin.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);if(gin.game_panel.in_discard_pile.call(null,pos.x,pos.y))
{gin.dom_helpers.add_class.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"),"region_hover");
return gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.snap_to_discard_handler.call(null,conn));
} else
{return null;
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var pos = gin.dom_helpers.get_position.call(null,card_el);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.game_panel.in_our_region.call(null,pos.x,pos.y))
{return null;
} else
{return gin.dom_helpers.fly_card.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.game_panel.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__28982,p__28983,conn){var vec__28984 = p__28982;var game_id = cljs.core.nth.call(null,vec__28984,0,null);var map__28985 = p__28983;var map__28985__$1 = ((cljs.core.seq_QMARK_.call(null,map__28985))?cljs.core.apply.call(null,cljs.core.hash_map,map__28985):map__28985);var report = map__28985__$1;var db_after = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game",cljs.core.pr_str.call(null,game));var opp_cards_el = cljs.core.map.call(null,((function (game,_){
return (function (p1__28978_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__28978_SHARP_], null)));
});})(game,_))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__28979_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__28979_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__28986 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var their_region_offset_x = cljs.core.nth.call(null,vec__28986,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__28986,1,null);var vec__28987 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var our_region_offset_x = cljs.core.nth.call(null,vec__28987,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__28987,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__28981_SHARP_,p2__28980_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__28980_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__28980_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__28981_SHARP_ * 53)),(their_region_offset_y + (p1__28981_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__28988){var map__28989 = p__28988;var map__28989__$1 = ((cljs.core.seq_QMARK_.call(null,map__28989))?cljs.core.apply.call(null,cljs.core.hash_map,map__28989):map__28989);var el = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard));
})], null),gin.dom_helpers.slide_from.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__28990,p__28991,conn){var vec__28992 = p__28990;var game_id = cljs.core.nth.call(null,vec__28992,0,null);var turn = cljs.core.nth.call(null,vec__28992,1,null);var map__28993 = p__28991;var map__28993__$1 = ((cljs.core.seq_QMARK_.call(null,map__28993))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);var report = map__28993__$1;var db_after = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__28994 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__28994__$1 = ((cljs.core.seq_QMARK_.call(null,map__28994))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);var game = map__28994__$1;var turn__$1 = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"deck","deck",1016983579).cljs$core$IFn$_invoke$arity$1(game))], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null)));if(cljs.core._EQ_.call(null,us,turn__$1))
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.undraggable_handler.call(null,conn));
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"pile-picked","pile-picked",752847085),(function (event,p__28995,p__28996,conn){var vec__28997 = p__28995;var game_id = cljs.core.nth.call(null,vec__28997,0,null);var card_id = cljs.core.nth.call(null,vec__28997,1,null);var map__28998 = p__28996;var map__28998__$1 = ((cljs.core.seq_QMARK_.call(null,map__28998))?cljs.core.apply.call(null,cljs.core.hash_map,map__28998):map__28998);var report = map__28998__$1;var db_after = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"pile-pick-revealed","pile-pick-revealed",3549672303),(function (event,p__28999,p__29000,conn){var vec__29001 = p__28999;var game_id = cljs.core.nth.call(null,vec__29001,0,null);var card_id = cljs.core.nth.call(null,vec__29001,1,null);var suit = cljs.core.nth.call(null,vec__29001,2,null);var rank = cljs.core.nth.call(null,vec__29001,3,null);var map__29002 = p__29000;var map__29002__$1 = ((cljs.core.seq_QMARK_.call(null,map__29002))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);var report = map__29002__$1;var db_after = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__29003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__29004 = null;var count__29005 = 0;var i__29006 = 0;while(true){
if((i__29006 < count__29005))
{var card_id__$1 = cljs.core._nth.call(null,chunk__29004,i__29006);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29007 = seq__29003;
var G__29008 = chunk__29004;
var G__29009 = count__29005;
var G__29010 = (i__29006 + 1);
seq__29003 = G__29007;
chunk__29004 = G__29008;
count__29005 = G__29009;
i__29006 = G__29010;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29003);if(temp__4092__auto__)
{var seq__29003__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29003__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__29003__$1);{
var G__29011 = cljs.core.chunk_rest.call(null,seq__29003__$1);
var G__29012 = c__10127__auto__;
var G__29013 = cljs.core.count.call(null,c__10127__auto__);
var G__29014 = 0;
seq__29003 = G__29011;
chunk__29004 = G__29012;
count__29005 = G__29013;
i__29006 = G__29014;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__29003__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29015 = cljs.core.next.call(null,seq__29003__$1);
var G__29016 = null;
var G__29017 = 0;
var G__29018 = 0;
seq__29003 = G__29015;
chunk__29004 = G__29016;
count__29005 = G__29017;
i__29006 = G__29018;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"discard-picked","discard-picked",2413694977),(function (event,p__29019,p__29020,conn){var vec__29021 = p__29019;var game_id = cljs.core.nth.call(null,vec__29021,0,null);var card_id = cljs.core.nth.call(null,vec__29021,1,null);var map__29022 = p__29020;var map__29022__$1 = ((cljs.core.seq_QMARK_.call(null,map__29022))?cljs.core.apply.call(null,cljs.core.hash_map,map__29022):map__29022);var report = map__29022__$1;var db_after = cljs.core.get.call(null,map__29022__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__29023 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__29023__$1 = ((cljs.core.seq_QMARK_.call(null,map__29023))?cljs.core.apply.call(null,cljs.core.hash_map,map__29023):map__29023);var game = map__29023__$1;var our_cards = cljs.core.get.call(null,map__29023__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var deck = cljs.core.get.call(null,map__29023__$1,new cljs.core.Keyword(null,"deck","deck",1016983579));var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,deck)], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null)));gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__29024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__29025 = null;var count__29026 = 0;var i__29027 = 0;while(true){
if((i__29027 < count__29026))
{var card_id__$1 = cljs.core._nth.call(null,chunk__29025,i__29027);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29028 = seq__29024;
var G__29029 = chunk__29025;
var G__29030 = count__29026;
var G__29031 = (i__29027 + 1);
seq__29024 = G__29028;
chunk__29025 = G__29029;
count__29026 = G__29030;
i__29027 = G__29031;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29024);if(temp__4092__auto__)
{var seq__29024__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29024__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__29024__$1);{
var G__29032 = cljs.core.chunk_rest.call(null,seq__29024__$1);
var G__29033 = c__10127__auto__;
var G__29034 = cljs.core.count.call(null,c__10127__auto__);
var G__29035 = 0;
seq__29024 = G__29032;
chunk__29025 = G__29033;
count__29026 = G__29034;
i__29027 = G__29035;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__29024__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29036 = cljs.core.next.call(null,seq__29024__$1);
var G__29037 = null;
var G__29038 = 0;
var G__29039 = 0;
seq__29024 = G__29036;
chunk__29025 = G__29037;
count__29026 = G__29038;
i__29027 = G__29039;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"discard-chosen","discard-chosen",2040957683),(function (event,p__29040,p__29041,conn){var vec__29042 = p__29040;var game_id = cljs.core.nth.call(null,vec__29042,0,null);var card_id = cljs.core.nth.call(null,vec__29042,1,null);var map__29043 = p__29041;var map__29043__$1 = ((cljs.core.seq_QMARK_.call(null,map__29043))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043):map__29043);var report = map__29043__$1;var db_after = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__29044 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__29045 = null;var count__29046 = 0;var i__29047 = 0;while(true){
if((i__29047 < count__29046))
{var card_id__$1 = cljs.core._nth.call(null,chunk__29045,i__29047);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.undraggable_handler.call(null,conn));
{
var G__29048 = seq__29044;
var G__29049 = chunk__29045;
var G__29050 = count__29046;
var G__29051 = (i__29047 + 1);
seq__29044 = G__29048;
chunk__29045 = G__29049;
count__29046 = G__29050;
i__29047 = G__29051;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29044);if(temp__4092__auto__)
{var seq__29044__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29044__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__29044__$1);{
var G__29052 = cljs.core.chunk_rest.call(null,seq__29044__$1);
var G__29053 = c__10127__auto__;
var G__29054 = cljs.core.count.call(null,c__10127__auto__);
var G__29055 = 0;
seq__29044 = G__29052;
chunk__29045 = G__29053;
count__29046 = G__29054;
i__29047 = G__29055;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__29044__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.undraggable_handler.call(null,conn));
{
var G__29056 = cljs.core.next.call(null,seq__29044__$1);
var G__29057 = null;
var G__29058 = 0;
var G__29059 = 0;
seq__29044 = G__29056;
chunk__29045 = G__29057;
count__29046 = G__29058;
i__29047 = G__29059;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__29062 = report;var map__29062__$1 = ((cljs.core.seq_QMARK_.call(null,map__29062))?cljs.core.apply.call(null,cljs.core.hash_map,map__29062):map__29062);var db_after = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__29063 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__29063,0,null);var args = cljs.core.nth.call(null,vec__29063,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__29093_29122 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__29093_29122,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.deck","div.deck",1323685720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"deck"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__29093_29122,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__29093_29122,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__29094(s__29095){return (new cljs.core.LazySeq(null,(function (){var s__29095__$1 = s__29095;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29095__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__29095__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__29096(s__29097){return (new cljs.core.LazySeq(null,((function (s__29095__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__29097__$1 = s__29097;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29097__$1);if(temp__4092__auto____$1)
{var s__29097__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29097__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__29097__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__29099 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__29098 = 0;while(true){
if((i__29098 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__29098);cljs.core.chunk_append.call(null,b__29099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__29123 = (i__29098 + 1);
i__29098 = G__29123;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29099),iter__29096.call(null,cljs.core.chunk_rest.call(null,s__29097__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29099),null);
}
} else
{var rank = cljs.core.first.call(null,s__29097__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__29096.call(null,cljs.core.rest.call(null,s__29097__$2)));
}
} else
{return null;
}
break;
}
});})(s__29095__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__29095__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__29094.call(null,cljs.core.rest.call(null,s__29095__$1)));
} else
{{
var G__29124 = cljs.core.rest.call(null,s__29095__$1);
s__29095__$1 = G__29124;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"spade","spade",1123542167)], null));
})())));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 38)));
})();var cards = (function (){var iter__10096__auto__ = ((function (container_wrap){
return (function iter__29100(s__29101){return (new cljs.core.LazySeq(null,((function (container_wrap){
return (function (){var s__29101__$1 = s__29101;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29101__$1);if(temp__4092__auto__)
{var s__29101__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29101__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__29101__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__29103 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__29102 = 0;while(true){
if((i__29102 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__29102);cljs.core.chunk_append.call(null,b__29103,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__29106 = (new goog.fx.Dragger(card_el));G__29106.setLimits(container_wrap);
return G__29106;
})();card_el.dispose = ((function (i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29102,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__29103,s__29101__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__29125 = (i__29102 + 1);
i__29102 = G__29125;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29103),iter__29100.call(null,cljs.core.chunk_rest.call(null,s__29101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29103),null);
}
} else
{var i = cljs.core.first.call(null,s__29101__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__29107 = (new goog.fx.Dragger(card_el));G__29107.setLimits(container_wrap);
return G__29107;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29101__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__29100.call(null,cljs.core.rest.call(null,s__29101__$2)));
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
})();var seq__29108_29126 = cljs.core.seq.call(null,cards);var chunk__29109_29127 = null;var count__29110_29128 = 0;var i__29111_29129 = 0;while(true){
if((i__29111_29129 < count__29110_29128))
{var map__29112_29130 = cljs.core._nth.call(null,chunk__29109_29127,i__29111_29129);var map__29112_29131__$1 = ((cljs.core.seq_QMARK_.call(null,map__29112_29130))?cljs.core.apply.call(null,cljs.core.hash_map,map__29112_29130):map__29112_29130);var card_el_29132 = cljs.core.get.call(null,map__29112_29131__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_29132);
{
var G__29133 = seq__29108_29126;
var G__29134 = chunk__29109_29127;
var G__29135 = count__29110_29128;
var G__29136 = (i__29111_29129 + 1);
seq__29108_29126 = G__29133;
chunk__29109_29127 = G__29134;
count__29110_29128 = G__29135;
i__29111_29129 = G__29136;
continue;
}
} else
{var temp__4092__auto___29137 = cljs.core.seq.call(null,seq__29108_29126);if(temp__4092__auto___29137)
{var seq__29108_29138__$1 = temp__4092__auto___29137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29108_29138__$1))
{var c__10127__auto___29139 = cljs.core.chunk_first.call(null,seq__29108_29138__$1);{
var G__29140 = cljs.core.chunk_rest.call(null,seq__29108_29138__$1);
var G__29141 = c__10127__auto___29139;
var G__29142 = cljs.core.count.call(null,c__10127__auto___29139);
var G__29143 = 0;
seq__29108_29126 = G__29140;
chunk__29109_29127 = G__29141;
count__29110_29128 = G__29142;
i__29111_29129 = G__29143;
continue;
}
} else
{var map__29113_29144 = cljs.core.first.call(null,seq__29108_29138__$1);var map__29113_29145__$1 = ((cljs.core.seq_QMARK_.call(null,map__29113_29144))?cljs.core.apply.call(null,cljs.core.hash_map,map__29113_29144):map__29113_29144);var card_el_29146 = cljs.core.get.call(null,map__29113_29145__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_29146);
{
var G__29147 = cljs.core.next.call(null,seq__29108_29138__$1);
var G__29148 = null;
var G__29149 = 0;
var G__29150 = 0;
seq__29108_29126 = G__29147;
chunk__29109_29127 = G__29148;
count__29110_29128 = G__29149;
i__29111_29129 = G__29150;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__29114(s__29115){return (new cljs.core.LazySeq(null,(function (){var s__29115__$1 = s__29115;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29115__$1);if(temp__4092__auto__)
{var s__29115__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29115__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__29115__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__29117 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__29116 = 0;while(true){
if((i__29116 < size__10095__auto__))
{var map__29120 = cljs.core._nth.call(null,c__10094__auto__,i__29116);var map__29120__$1 = ((cljs.core.seq_QMARK_.call(null,map__29120))?cljs.core.apply.call(null,cljs.core.hash_map,map__29120):map__29120);var card_el = cljs.core.get.call(null,map__29120__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__29120__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__29120__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__29117,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__29151 = (i__29116 + 1);
i__29116 = G__29151;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29117),iter__29114.call(null,cljs.core.chunk_rest.call(null,s__29115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29117),null);
}
} else
{var map__29121 = cljs.core.first.call(null,s__29115__$2);var map__29121__$1 = ((cljs.core.seq_QMARK_.call(null,map__29121))?cljs.core.apply.call(null,cljs.core.hash_map,map__29121):map__29121);var card_el = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__29114.call(null,cljs.core.rest.call(null,s__29115__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,cards);
})());
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.render.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
