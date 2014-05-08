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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__31264,p__31265,_){var vec__31266 = p__31264;var game_id = cljs.core.nth.call(null,vec__31266,0,null);var map__31267 = p__31265;var map__31267__$1 = ((cljs.core.seq_QMARK_.call(null,map__31267))?cljs.core.apply.call(null,cljs.core.hash_map,map__31267):map__31267);var db_after = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__31268 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__31268__$1 = ((cljs.core.seq_QMARK_.call(null,map__31268))?cljs.core.apply.call(null,cljs.core.hash_map,map__31268):map__31268);var game = map__31268__$1;var turn = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"You've chosen a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponent picked a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Drag a card from your hand to discard.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Your move is done.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__31269){var vec__31271 = p__31269;var x = cljs.core.nth.call(null,vec__31271,0,null);var y = cljs.core.nth.call(null,vec__31271,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"discard_pile"));return gin.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.pile_position = (function pile_position(){var pos = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"pile"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos.x + 4),(pos.y + 4)], null);
});
gin.game_panel.discard_position = (function discard_position(){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + p.x),(12 + p.y)], null);
});
gin.game_panel.their_region_position = (function their_region_position(){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
});
gin.game_panel.our_region_position = (function our_region_position(){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
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
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_pile_picked,card_id], null)], null));
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
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_picked,card_id], null)], null));
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
return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.slide_from.call(null,card_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_chosen,card_id], null)], null));
})], null)));
})], null);
});
gin.game_panel.home_discard_handler = (function home_discard_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,gin.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
card_el.drag_origin = gin.dom_helpers.get_position.call(null,card_el);
return gin.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);if(gin.game_panel.in_discard_pile.call(null,event.clientX,event.clientY))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__31276,p__31277,conn){var vec__31278 = p__31276;var game_id = cljs.core.nth.call(null,vec__31278,0,null);var map__31279 = p__31277;var map__31279__$1 = ((cljs.core.seq_QMARK_.call(null,map__31279))?cljs.core.apply.call(null,cljs.core.hash_map,map__31279):map__31279);var report = map__31279__$1;var db_after = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,((function (game){
return (function (p1__31272_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__31272_SHARP_], null)));
});})(game))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__31273_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__31273_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__31280 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__31280,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__31280,1,null);var vec__31281 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__31281,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__31281,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__31275_SHARP_,p2__31274_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__31274_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__31274_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__31275_SHARP_ * 53)),(their_region_offset_y + (p1__31275_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__31282){var map__31283 = p__31282;var map__31283__$1 = ((cljs.core.seq_QMARK_.call(null,map__31283))?cljs.core.apply.call(null,cljs.core.hash_map,map__31283):map__31283);var el = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard));
})], null),gin.dom_helpers.slide_from.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__31284,p__31285,conn){var vec__31286 = p__31284;var game_id = cljs.core.nth.call(null,vec__31286,0,null);var turn = cljs.core.nth.call(null,vec__31286,1,null);var map__31287 = p__31285;var map__31287__$1 = ((cljs.core.seq_QMARK_.call(null,map__31287))?cljs.core.apply.call(null,cljs.core.hash_map,map__31287):map__31287);var report = map__31287__$1;var db_after = cljs.core.get.call(null,map__31287__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__31288 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__31288__$1 = ((cljs.core.seq_QMARK_.call(null,map__31288))?cljs.core.apply.call(null,cljs.core.hash_map,map__31288):map__31288);var game = map__31288__$1;var turn__$1 = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game))], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null)));if(cljs.core._EQ_.call(null,us,turn__$1))
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.undraggable_handler.call(null,conn));
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__31289,p__31290,conn){var vec__31291 = p__31289;var game_id = cljs.core.nth.call(null,vec__31291,0,null);var card_id = cljs.core.nth.call(null,vec__31291,1,null);var map__31292 = p__31290;var map__31292__$1 = ((cljs.core.seq_QMARK_.call(null,map__31292))?cljs.core.apply.call(null,cljs.core.hash_map,map__31292):map__31292);var report = map__31292__$1;var db_after = cljs.core.get.call(null,map__31292__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__31293,p__31294,conn){var vec__31295 = p__31293;var game_id = cljs.core.nth.call(null,vec__31295,0,null);var card_id = cljs.core.nth.call(null,vec__31295,1,null);var suit = cljs.core.nth.call(null,vec__31295,2,null);var rank = cljs.core.nth.call(null,vec__31295,3,null);var map__31296 = p__31294;var map__31296__$1 = ((cljs.core.seq_QMARK_.call(null,map__31296))?cljs.core.apply.call(null,cljs.core.hash_map,map__31296):map__31296);var report = map__31296__$1;var db_after = cljs.core.get.call(null,map__31296__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
console.log("our-cards: ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)))));
var seq__31297 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__31298 = null;var count__31299 = 0;var i__31300 = 0;while(true){
if((i__31300 < count__31299))
{var card_id__$1 = cljs.core._nth.call(null,chunk__31298,i__31300);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__31301 = seq__31297;
var G__31302 = chunk__31298;
var G__31303 = count__31299;
var G__31304 = (i__31300 + 1);
seq__31297 = G__31301;
chunk__31298 = G__31302;
count__31299 = G__31303;
i__31300 = G__31304;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31297);if(temp__4092__auto__)
{var seq__31297__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31297__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__31297__$1);{
var G__31305 = cljs.core.chunk_rest.call(null,seq__31297__$1);
var G__31306 = c__10127__auto__;
var G__31307 = cljs.core.count.call(null,c__10127__auto__);
var G__31308 = 0;
seq__31297 = G__31305;
chunk__31298 = G__31306;
count__31299 = G__31307;
i__31300 = G__31308;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__31297__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__31309 = cljs.core.next.call(null,seq__31297__$1);
var G__31310 = null;
var G__31311 = 0;
var G__31312 = 0;
seq__31297 = G__31309;
chunk__31298 = G__31310;
count__31299 = G__31311;
i__31300 = G__31312;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__31313,p__31314,conn){var vec__31315 = p__31313;var game_id = cljs.core.nth.call(null,vec__31315,0,null);var card_id = cljs.core.nth.call(null,vec__31315,1,null);var map__31316 = p__31314;var map__31316__$1 = ((cljs.core.seq_QMARK_.call(null,map__31316))?cljs.core.apply.call(null,cljs.core.hash_map,map__31316):map__31316);var report = map__31316__$1;var db_after = cljs.core.get.call(null,map__31316__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__31317 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__31317__$1 = ((cljs.core.seq_QMARK_.call(null,map__31317))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);var game = map__31317__$1;var our_cards = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,pile)], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null)));gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__31318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__31319 = null;var count__31320 = 0;var i__31321 = 0;while(true){
if((i__31321 < count__31320))
{var card_id__$1 = cljs.core._nth.call(null,chunk__31319,i__31321);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__31322 = seq__31318;
var G__31323 = chunk__31319;
var G__31324 = count__31320;
var G__31325 = (i__31321 + 1);
seq__31318 = G__31322;
chunk__31319 = G__31323;
count__31320 = G__31324;
i__31321 = G__31325;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31318);if(temp__4092__auto__)
{var seq__31318__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31318__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__31318__$1);{
var G__31326 = cljs.core.chunk_rest.call(null,seq__31318__$1);
var G__31327 = c__10127__auto__;
var G__31328 = cljs.core.count.call(null,c__10127__auto__);
var G__31329 = 0;
seq__31318 = G__31326;
chunk__31319 = G__31327;
count__31320 = G__31328;
i__31321 = G__31329;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__31318__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__31330 = cljs.core.next.call(null,seq__31318__$1);
var G__31331 = null;
var G__31332 = 0;
var G__31333 = 0;
seq__31318 = G__31330;
chunk__31319 = G__31331;
count__31320 = G__31332;
i__31321 = G__31333;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__31334,p__31335,conn){var vec__31336 = p__31334;var game_id = cljs.core.nth.call(null,vec__31336,0,null);var card_id = cljs.core.nth.call(null,vec__31336,1,null);var map__31337 = p__31335;var map__31337__$1 = ((cljs.core.seq_QMARK_.call(null,map__31337))?cljs.core.apply.call(null,cljs.core.hash_map,map__31337):map__31337);var report = map__31337__$1;var db_after = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__31338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__31339 = null;var count__31340 = 0;var i__31341 = 0;while(true){
if((i__31341 < count__31340))
{var card_id__$1 = cljs.core._nth.call(null,chunk__31339,i__31341);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__31342 = seq__31338;
var G__31343 = chunk__31339;
var G__31344 = count__31340;
var G__31345 = (i__31341 + 1);
seq__31338 = G__31342;
chunk__31339 = G__31343;
count__31340 = G__31344;
i__31341 = G__31345;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31338);if(temp__4092__auto__)
{var seq__31338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31338__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__31338__$1);{
var G__31346 = cljs.core.chunk_rest.call(null,seq__31338__$1);
var G__31347 = c__10127__auto__;
var G__31348 = cljs.core.count.call(null,c__10127__auto__);
var G__31349 = 0;
seq__31338 = G__31346;
chunk__31339 = G__31347;
count__31340 = G__31348;
i__31341 = G__31349;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__31338__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__31350 = cljs.core.next.call(null,seq__31338__$1);
var G__31351 = null;
var G__31352 = 0;
var G__31353 = 0;
seq__31338 = G__31350;
chunk__31339 = G__31351;
count__31340 = G__31352;
i__31341 = G__31353;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__31356,p__31357,conn){var vec__31358 = p__31356;var game_id = cljs.core.nth.call(null,vec__31358,0,null);var card_id = cljs.core.nth.call(null,vec__31358,1,null);var map__31359 = p__31357;var map__31359__$1 = ((cljs.core.seq_QMARK_.call(null,map__31359))?cljs.core.apply.call(null,cljs.core.hash_map,map__31359):map__31359);var report = map__31359__$1;var db_after = cljs.core.get.call(null,map__31359__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var insert_idx = cljs.core.rand_nth.call(null,cljs.core.range.call(null,10));var opp_cards = cljs.core.pop.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_card = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game)));var to_card = gin.dom_helpers.get_element.call(null,cljs.core.nth.call(null,opp_cards,insert_idx));var vec__31360 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__31360,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__31360,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__31355_SHARP_,p2__31354_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__31354_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__31355_SHARP_ * 48.18)),(their_region_offset_y + (p1__31355_SHARP_ * 3.63))], null));
}),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([insert_idx], true),cljs.core.range.call(null,10)),opp_cards)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return pile_card.style.zIndex = to_card.style.zIndex;
})], null),gin.dom_helpers.slide_from.call(null,pile_card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (insert_idx * 48.18)),(their_region_offset_y + (insert_idx * 3.63))], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__31363 = report;var map__31363__$1 = ((cljs.core.seq_QMARK_.call(null,map__31363))?cljs.core.apply.call(null,cljs.core.hash_map,map__31363):map__31363);var db_after = cljs.core.get.call(null,map__31363__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__31364 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__31364,0,null);var args = cljs.core.nth.call(null,vec__31364,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__31395_31425 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__31395_31425,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__31395_31425,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__31395_31425,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__31396(s__31397){return (new cljs.core.LazySeq(null,(function (){var s__31397__$1 = s__31397;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31397__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__31397__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__31398(s__31399){return (new cljs.core.LazySeq(null,((function (s__31397__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__31399__$1 = s__31399;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__31399__$1);if(temp__4092__auto____$1)
{var s__31399__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31399__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__31399__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__31401 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__31400 = 0;while(true){
if((i__31400 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__31400);cljs.core.chunk_append.call(null,b__31401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__31426 = (i__31400 + 1);
i__31400 = G__31426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31401),iter__31398.call(null,cljs.core.chunk_rest.call(null,s__31399__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31401),null);
}
} else
{var rank = cljs.core.first.call(null,s__31399__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__31398.call(null,cljs.core.rest.call(null,s__31399__$2)));
}
} else
{return null;
}
break;
}
});})(s__31397__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__31397__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__31396.call(null,cljs.core.rest.call(null,s__31397__$1)));
} else
{{
var G__31427 = cljs.core.rest.call(null,s__31397__$1);
s__31397__$1 = G__31427;
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
})();var vec__31402 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__31402,0,null);var pile_y = cljs.core.nth.call(null,vec__31402,1,null);var cards = (function (){var iter__10096__auto__ = ((function (container_wrap,vec__31402,pile_x,pile_y){
return (function iter__31403(s__31404){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__31402,pile_x,pile_y){
return (function (){var s__31404__$1 = s__31404;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31404__$1);if(temp__4092__auto__)
{var s__31404__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31404__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__31404__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__31406 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__31405 = 0;while(true){
if((i__31405 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__31405);cljs.core.chunk_append.call(null,b__31406,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__31409 = (new goog.fx.Dragger(card_el));G__31409.setLimits(container_wrap);
return G__31409;
})();card_el.dispose = ((function (i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__31405,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__31406,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__31428 = (i__31405 + 1);
i__31405 = G__31428;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31406),iter__31403.call(null,cljs.core.chunk_rest.call(null,s__31404__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31406),null);
}
} else
{var i = cljs.core.first.call(null,s__31404__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__31410 = (new goog.fx.Dragger(card_el));G__31410.setLimits(container_wrap);
return G__31410;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__31404__$2,temp__4092__auto__,container_wrap,vec__31402,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__31403.call(null,cljs.core.rest.call(null,s__31404__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__31402,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__31402,pile_x,pile_y))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__31411_31429 = cljs.core.seq.call(null,cards);var chunk__31412_31430 = null;var count__31413_31431 = 0;var i__31414_31432 = 0;while(true){
if((i__31414_31432 < count__31413_31431))
{var map__31415_31433 = cljs.core._nth.call(null,chunk__31412_31430,i__31414_31432);var map__31415_31434__$1 = ((cljs.core.seq_QMARK_.call(null,map__31415_31433))?cljs.core.apply.call(null,cljs.core.hash_map,map__31415_31433):map__31415_31433);var card_el_31435 = cljs.core.get.call(null,map__31415_31434__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_31435);
{
var G__31436 = seq__31411_31429;
var G__31437 = chunk__31412_31430;
var G__31438 = count__31413_31431;
var G__31439 = (i__31414_31432 + 1);
seq__31411_31429 = G__31436;
chunk__31412_31430 = G__31437;
count__31413_31431 = G__31438;
i__31414_31432 = G__31439;
continue;
}
} else
{var temp__4092__auto___31440 = cljs.core.seq.call(null,seq__31411_31429);if(temp__4092__auto___31440)
{var seq__31411_31441__$1 = temp__4092__auto___31440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31411_31441__$1))
{var c__10127__auto___31442 = cljs.core.chunk_first.call(null,seq__31411_31441__$1);{
var G__31443 = cljs.core.chunk_rest.call(null,seq__31411_31441__$1);
var G__31444 = c__10127__auto___31442;
var G__31445 = cljs.core.count.call(null,c__10127__auto___31442);
var G__31446 = 0;
seq__31411_31429 = G__31443;
chunk__31412_31430 = G__31444;
count__31413_31431 = G__31445;
i__31414_31432 = G__31446;
continue;
}
} else
{var map__31416_31447 = cljs.core.first.call(null,seq__31411_31441__$1);var map__31416_31448__$1 = ((cljs.core.seq_QMARK_.call(null,map__31416_31447))?cljs.core.apply.call(null,cljs.core.hash_map,map__31416_31447):map__31416_31447);var card_el_31449 = cljs.core.get.call(null,map__31416_31448__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_31449);
{
var G__31450 = cljs.core.next.call(null,seq__31411_31441__$1);
var G__31451 = null;
var G__31452 = 0;
var G__31453 = 0;
seq__31411_31429 = G__31450;
chunk__31412_31430 = G__31451;
count__31413_31431 = G__31452;
i__31414_31432 = G__31453;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__31417(s__31418){return (new cljs.core.LazySeq(null,(function (){var s__31418__$1 = s__31418;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31418__$1);if(temp__4092__auto__)
{var s__31418__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31418__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__31418__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__31420 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__31419 = 0;while(true){
if((i__31419 < size__10095__auto__))
{var map__31423 = cljs.core._nth.call(null,c__10094__auto__,i__31419);var map__31423__$1 = ((cljs.core.seq_QMARK_.call(null,map__31423))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);var card_el = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__31420,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__31454 = (i__31419 + 1);
i__31419 = G__31454;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31420),iter__31417.call(null,cljs.core.chunk_rest.call(null,s__31418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31420),null);
}
} else
{var map__31424 = cljs.core.first.call(null,s__31418__$2);var map__31424__$1 = ((cljs.core.seq_QMARK_.call(null,map__31424))?cljs.core.apply.call(null,cljs.core.hash_map,map__31424):map__31424);var card_el = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__31417.call(null,cljs.core.rest.call(null,s__31418__$2)));
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
