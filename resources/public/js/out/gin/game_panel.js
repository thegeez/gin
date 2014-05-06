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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__16401,p__16402,_){var vec__16403 = p__16401;var game_id = cljs.core.nth.call(null,vec__16403,0,null);var map__16404 = p__16402;var map__16404__$1 = ((cljs.core.seq_QMARK_.call(null,map__16404))?cljs.core.apply.call(null,cljs.core.hash_map,map__16404):map__16404);var db_after = cljs.core.get.call(null,map__16404__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__16405 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__16405__$1 = ((cljs.core.seq_QMARK_.call(null,map__16405))?cljs.core.apply.call(null,cljs.core.hash_map,map__16405):map__16405);var game = map__16405__$1;var turn = cljs.core.get.call(null,map__16405__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__16405__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__16406){var vec__16408 = p__16406;var x = cljs.core.nth.call(null,vec__16408,0,null);var y = cljs.core.nth.call(null,vec__16408,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
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
return gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.home_region_handler.call(null,conn));
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
gin.game_panel.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__16413,p__16414,conn){var vec__16415 = p__16413;var game_id = cljs.core.nth.call(null,vec__16415,0,null);var map__16416 = p__16414;var map__16416__$1 = ((cljs.core.seq_QMARK_.call(null,map__16416))?cljs.core.apply.call(null,cljs.core.hash_map,map__16416):map__16416);var report = map__16416__$1;var db_after = cljs.core.get.call(null,map__16416__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game",cljs.core.pr_str.call(null,game));var opp_cards_el = cljs.core.map.call(null,((function (game,_){
return (function (p1__16409_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__16409_SHARP_], null)));
});})(game,_))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__16410_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__16410_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__16417 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var their_region_offset_x = cljs.core.nth.call(null,vec__16417,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__16417,1,null);var vec__16418 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var our_region_offset_x = cljs.core.nth.call(null,vec__16418,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__16418,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__16412_SHARP_,p2__16411_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__16411_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__16411_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__16412_SHARP_ * 53)),(their_region_offset_y + (p1__16412_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__16419){var map__16420 = p__16419;var map__16420__$1 = ((cljs.core.seq_QMARK_.call(null,map__16420))?cljs.core.apply.call(null,cljs.core.hash_map,map__16420):map__16420);var el = cljs.core.get.call(null,map__16420__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__16420__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__16420__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard));
})], null),gin.dom_helpers.slide_from.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__16421,p__16422,conn){var vec__16423 = p__16421;var game_id = cljs.core.nth.call(null,vec__16423,0,null);var turn = cljs.core.nth.call(null,vec__16423,1,null);var map__16424 = p__16422;var map__16424__$1 = ((cljs.core.seq_QMARK_.call(null,map__16424))?cljs.core.apply.call(null,cljs.core.hash_map,map__16424):map__16424);var report = map__16424__$1;var db_after = cljs.core.get.call(null,map__16424__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__16425 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__16425__$1 = ((cljs.core.seq_QMARK_.call(null,map__16425))?cljs.core.apply.call(null,cljs.core.hash_map,map__16425):map__16425);var game = map__16425__$1;var turn__$1 = cljs.core.get.call(null,map__16425__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__16425__$1,new cljs.core.Keyword(null,"us","us",1013907984));console.log("turn-assigned",gin.game_panel.game_eid,us,turn__$1);
if(cljs.core._EQ_.call(null,us,turn__$1))
{var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"deck","deck",1016983579).cljs$core$IFn$_invoke$arity$1(game))], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null)));console.log("found top of deck: ",gin.game_panel.pile_eid,pile_elem);
gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__16428 = report;var map__16428__$1 = ((cljs.core.seq_QMARK_.call(null,map__16428))?cljs.core.apply.call(null,cljs.core.hash_map,map__16428):map__16428);var db_after = cljs.core.get.call(null,map__16428__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__16429 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__16429,0,null);var args = cljs.core.nth.call(null,vec__16429,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__16459_16488 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__16459_16488,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.deck","div.deck",1323685720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"deck"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__16459_16488,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__16459_16488,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__16460(s__16461){return (new cljs.core.LazySeq(null,(function (){var s__16461__$1 = s__16461;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16461__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__16461__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__16462(s__16463){return (new cljs.core.LazySeq(null,((function (s__16461__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__16463__$1 = s__16463;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16463__$1);if(temp__4092__auto____$1)
{var s__16463__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16463__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__16463__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__16465 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__16464 = 0;while(true){
if((i__16464 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__16464);cljs.core.chunk_append.call(null,b__16465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__16489 = (i__16464 + 1);
i__16464 = G__16489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16465),iter__16462.call(null,cljs.core.chunk_rest.call(null,s__16463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16465),null);
}
} else
{var rank = cljs.core.first.call(null,s__16463__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__16462.call(null,cljs.core.rest.call(null,s__16463__$2)));
}
} else
{return null;
}
break;
}
});})(s__16461__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__16461__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__16460.call(null,cljs.core.rest.call(null,s__16461__$1)));
} else
{{
var G__16490 = cljs.core.rest.call(null,s__16461__$1);
s__16461__$1 = G__16490;
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
return (function iter__16466(s__16467){return (new cljs.core.LazySeq(null,((function (container_wrap){
return (function (){var s__16467__$1 = s__16467;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16467__$1);if(temp__4092__auto__)
{var s__16467__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16467__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__16467__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__16469 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__16468 = 0;while(true){
if((i__16468 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__16468);cljs.core.chunk_append.call(null,b__16469,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__16472 = (new goog.fx.Dragger(card_el));G__16472.setLimits(container_wrap);
return G__16472;
})();card_el.dispose = ((function (i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__16468,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__16469,s__16467__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__16491 = (i__16468 + 1);
i__16468 = G__16491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16469),iter__16466.call(null,cljs.core.chunk_rest.call(null,s__16467__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16469),null);
}
} else
{var i = cljs.core.first.call(null,s__16467__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__16473 = (new goog.fx.Dragger(card_el));G__16473.setLimits(container_wrap);
return G__16473;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__16467__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__16466.call(null,cljs.core.rest.call(null,s__16467__$2)));
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
})();var seq__16474_16492 = cljs.core.seq.call(null,cards);var chunk__16475_16493 = null;var count__16476_16494 = 0;var i__16477_16495 = 0;while(true){
if((i__16477_16495 < count__16476_16494))
{var map__16478_16496 = cljs.core._nth.call(null,chunk__16475_16493,i__16477_16495);var map__16478_16497__$1 = ((cljs.core.seq_QMARK_.call(null,map__16478_16496))?cljs.core.apply.call(null,cljs.core.hash_map,map__16478_16496):map__16478_16496);var card_el_16498 = cljs.core.get.call(null,map__16478_16497__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_16498);
{
var G__16499 = seq__16474_16492;
var G__16500 = chunk__16475_16493;
var G__16501 = count__16476_16494;
var G__16502 = (i__16477_16495 + 1);
seq__16474_16492 = G__16499;
chunk__16475_16493 = G__16500;
count__16476_16494 = G__16501;
i__16477_16495 = G__16502;
continue;
}
} else
{var temp__4092__auto___16503 = cljs.core.seq.call(null,seq__16474_16492);if(temp__4092__auto___16503)
{var seq__16474_16504__$1 = temp__4092__auto___16503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16474_16504__$1))
{var c__10127__auto___16505 = cljs.core.chunk_first.call(null,seq__16474_16504__$1);{
var G__16506 = cljs.core.chunk_rest.call(null,seq__16474_16504__$1);
var G__16507 = c__10127__auto___16505;
var G__16508 = cljs.core.count.call(null,c__10127__auto___16505);
var G__16509 = 0;
seq__16474_16492 = G__16506;
chunk__16475_16493 = G__16507;
count__16476_16494 = G__16508;
i__16477_16495 = G__16509;
continue;
}
} else
{var map__16479_16510 = cljs.core.first.call(null,seq__16474_16504__$1);var map__16479_16511__$1 = ((cljs.core.seq_QMARK_.call(null,map__16479_16510))?cljs.core.apply.call(null,cljs.core.hash_map,map__16479_16510):map__16479_16510);var card_el_16512 = cljs.core.get.call(null,map__16479_16511__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_16512);
{
var G__16513 = cljs.core.next.call(null,seq__16474_16504__$1);
var G__16514 = null;
var G__16515 = 0;
var G__16516 = 0;
seq__16474_16492 = G__16513;
chunk__16475_16493 = G__16514;
count__16476_16494 = G__16515;
i__16477_16495 = G__16516;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__16480(s__16481){return (new cljs.core.LazySeq(null,(function (){var s__16481__$1 = s__16481;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16481__$1);if(temp__4092__auto__)
{var s__16481__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16481__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__16481__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__16483 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__16482 = 0;while(true){
if((i__16482 < size__10095__auto__))
{var map__16486 = cljs.core._nth.call(null,c__10094__auto__,i__16482);var map__16486__$1 = ((cljs.core.seq_QMARK_.call(null,map__16486))?cljs.core.apply.call(null,cljs.core.hash_map,map__16486):map__16486);var card_el = cljs.core.get.call(null,map__16486__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__16486__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__16486__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__16483,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null));
{
var G__16517 = (i__16482 + 1);
i__16482 = G__16517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16483),iter__16480.call(null,cljs.core.chunk_rest.call(null,s__16481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16483),null);
}
} else
{var map__16487 = cljs.core.first.call(null,s__16481__$2);var map__16487__$1 = ((cljs.core.seq_QMARK_.call(null,map__16487))?cljs.core.apply.call(null,cljs.core.hash_map,map__16487):map__16487);var card_el = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null),iter__16480.call(null,cljs.core.rest.call(null,s__16481__$2)));
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
