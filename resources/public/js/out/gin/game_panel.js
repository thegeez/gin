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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__40729,p__40730,_){var vec__40731 = p__40729;var game_id = cljs.core.nth.call(null,vec__40731,0,null);var map__40732 = p__40730;var map__40732__$1 = ((cljs.core.seq_QMARK_.call(null,map__40732))?cljs.core.apply.call(null,cljs.core.hash_map,map__40732):map__40732);var db_after = cljs.core.get.call(null,map__40732__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__40733 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__40733__$1 = ((cljs.core.seq_QMARK_.call(null,map__40733))?cljs.core.apply.call(null,cljs.core.hash_map,map__40733):map__40733);var game = map__40733__$1;var turn = cljs.core.get.call(null,map__40733__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__40733__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"You've chosen a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Drag a card from your hand to discard.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Your move is done.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponent picked a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponent picked the discard.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"Their-discard-chosen","Their-discard-chosen",3921237990),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponents move is done.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__40734){var vec__40736 = p__40734;var x = cljs.core.nth.call(null,vec__40736,0,null);var y = cljs.core.nth.call(null,vec__40736,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__40741,p__40742,conn){var vec__40743 = p__40741;var game_id = cljs.core.nth.call(null,vec__40743,0,null);var map__40744 = p__40742;var map__40744__$1 = ((cljs.core.seq_QMARK_.call(null,map__40744))?cljs.core.apply.call(null,cljs.core.hash_map,map__40744):map__40744);var report = map__40744__$1;var db_after = cljs.core.get.call(null,map__40744__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,((function (game){
return (function (p1__40737_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__40737_SHARP_], null)));
});})(game))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__40738_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__40738_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__40745 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__40745,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__40745,1,null);var vec__40746 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__40746,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__40746,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__40740_SHARP_,p2__40739_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__40739_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__40739_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__40740_SHARP_ * 53)),(their_region_offset_y + (p1__40740_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__40747){var map__40748 = p__40747;var map__40748__$1 = ((cljs.core.seq_QMARK_.call(null,map__40748))?cljs.core.apply.call(null,cljs.core.hash_map,map__40748):map__40748);var el = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard));
})], null),gin.dom_helpers.slide_from.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__40749,p__40750,conn){var vec__40751 = p__40749;var game_id = cljs.core.nth.call(null,vec__40751,0,null);var turn = cljs.core.nth.call(null,vec__40751,1,null);var map__40752 = p__40750;var map__40752__$1 = ((cljs.core.seq_QMARK_.call(null,map__40752))?cljs.core.apply.call(null,cljs.core.hash_map,map__40752):map__40752);var report = map__40752__$1;var db_after = cljs.core.get.call(null,map__40752__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__40753 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__40753__$1 = ((cljs.core.seq_QMARK_.call(null,map__40753))?cljs.core.apply.call(null,cljs.core.hash_map,map__40753):map__40753);var game = map__40753__$1;var turn__$1 = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game))], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null)));if(cljs.core._EQ_.call(null,us,turn__$1))
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.undraggable_handler.call(null,conn));
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__40754,p__40755,conn){var vec__40756 = p__40754;var game_id = cljs.core.nth.call(null,vec__40756,0,null);var card_id = cljs.core.nth.call(null,vec__40756,1,null);var map__40757 = p__40755;var map__40757__$1 = ((cljs.core.seq_QMARK_.call(null,map__40757))?cljs.core.apply.call(null,cljs.core.hash_map,map__40757):map__40757);var report = map__40757__$1;var db_after = cljs.core.get.call(null,map__40757__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__40758,p__40759,conn){var vec__40760 = p__40758;var game_id = cljs.core.nth.call(null,vec__40760,0,null);var card_id = cljs.core.nth.call(null,vec__40760,1,null);var suit = cljs.core.nth.call(null,vec__40760,2,null);var rank = cljs.core.nth.call(null,vec__40760,3,null);var map__40761 = p__40759;var map__40761__$1 = ((cljs.core.seq_QMARK_.call(null,map__40761))?cljs.core.apply.call(null,cljs.core.hash_map,map__40761):map__40761);var report = map__40761__$1;var db_after = cljs.core.get.call(null,map__40761__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
console.log("our-cards: ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)))));
var seq__40762 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__40763 = null;var count__40764 = 0;var i__40765 = 0;while(true){
if((i__40765 < count__40764))
{var card_id__$1 = cljs.core._nth.call(null,chunk__40763,i__40765);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__40766 = seq__40762;
var G__40767 = chunk__40763;
var G__40768 = count__40764;
var G__40769 = (i__40765 + 1);
seq__40762 = G__40766;
chunk__40763 = G__40767;
count__40764 = G__40768;
i__40765 = G__40769;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40762);if(temp__4092__auto__)
{var seq__40762__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40762__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__40762__$1);{
var G__40770 = cljs.core.chunk_rest.call(null,seq__40762__$1);
var G__40771 = c__10127__auto__;
var G__40772 = cljs.core.count.call(null,c__10127__auto__);
var G__40773 = 0;
seq__40762 = G__40770;
chunk__40763 = G__40771;
count__40764 = G__40772;
i__40765 = G__40773;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__40762__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__40774 = cljs.core.next.call(null,seq__40762__$1);
var G__40775 = null;
var G__40776 = 0;
var G__40777 = 0;
seq__40762 = G__40774;
chunk__40763 = G__40775;
count__40764 = G__40776;
i__40765 = G__40777;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__40778,p__40779,conn){var vec__40780 = p__40778;var game_id = cljs.core.nth.call(null,vec__40780,0,null);var card_id = cljs.core.nth.call(null,vec__40780,1,null);var map__40781 = p__40779;var map__40781__$1 = ((cljs.core.seq_QMARK_.call(null,map__40781))?cljs.core.apply.call(null,cljs.core.hash_map,map__40781):map__40781);var report = map__40781__$1;var db_after = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__40782 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__40782__$1 = ((cljs.core.seq_QMARK_.call(null,map__40782))?cljs.core.apply.call(null,cljs.core.hash_map,map__40782):map__40782);var game = map__40782__$1;var our_cards = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.last.call(null,pile)], null)));var discard_elem = new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null)));gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__40783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__40784 = null;var count__40785 = 0;var i__40786 = 0;while(true){
if((i__40786 < count__40785))
{var card_id__$1 = cljs.core._nth.call(null,chunk__40784,i__40786);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__40787 = seq__40783;
var G__40788 = chunk__40784;
var G__40789 = count__40785;
var G__40790 = (i__40786 + 1);
seq__40783 = G__40787;
chunk__40784 = G__40788;
count__40785 = G__40789;
i__40786 = G__40790;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40783);if(temp__4092__auto__)
{var seq__40783__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40783__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__40783__$1);{
var G__40791 = cljs.core.chunk_rest.call(null,seq__40783__$1);
var G__40792 = c__10127__auto__;
var G__40793 = cljs.core.count.call(null,c__10127__auto__);
var G__40794 = 0;
seq__40783 = G__40791;
chunk__40784 = G__40792;
count__40785 = G__40793;
i__40786 = G__40794;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__40783__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__40795 = cljs.core.next.call(null,seq__40783__$1);
var G__40796 = null;
var G__40797 = 0;
var G__40798 = 0;
seq__40783 = G__40795;
chunk__40784 = G__40796;
count__40785 = G__40797;
i__40786 = G__40798;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__40799,p__40800,conn){var vec__40801 = p__40799;var game_id = cljs.core.nth.call(null,vec__40801,0,null);var card_id = cljs.core.nth.call(null,vec__40801,1,null);var map__40802 = p__40800;var map__40802__$1 = ((cljs.core.seq_QMARK_.call(null,map__40802))?cljs.core.apply.call(null,cljs.core.hash_map,map__40802):map__40802);var report = map__40802__$1;var db_after = cljs.core.get.call(null,map__40802__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__40803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__40804 = null;var count__40805 = 0;var i__40806 = 0;while(true){
if((i__40806 < count__40805))
{var card_id__$1 = cljs.core._nth.call(null,chunk__40804,i__40806);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__40807 = seq__40803;
var G__40808 = chunk__40804;
var G__40809 = count__40805;
var G__40810 = (i__40806 + 1);
seq__40803 = G__40807;
chunk__40804 = G__40808;
count__40805 = G__40809;
i__40806 = G__40810;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40803);if(temp__4092__auto__)
{var seq__40803__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40803__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__40803__$1);{
var G__40811 = cljs.core.chunk_rest.call(null,seq__40803__$1);
var G__40812 = c__10127__auto__;
var G__40813 = cljs.core.count.call(null,c__10127__auto__);
var G__40814 = 0;
seq__40803 = G__40811;
chunk__40804 = G__40812;
count__40805 = G__40813;
i__40806 = G__40814;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__40803__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__40815 = cljs.core.next.call(null,seq__40803__$1);
var G__40816 = null;
var G__40817 = 0;
var G__40818 = 0;
seq__40803 = G__40815;
chunk__40804 = G__40816;
count__40805 = G__40817;
i__40806 = G__40818;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__40821,p__40822,conn){var vec__40823 = p__40821;var game_id = cljs.core.nth.call(null,vec__40823,0,null);var card_id = cljs.core.nth.call(null,vec__40823,1,null);var map__40824 = p__40822;var map__40824__$1 = ((cljs.core.seq_QMARK_.call(null,map__40824))?cljs.core.apply.call(null,cljs.core.hash_map,map__40824):map__40824);var report = map__40824__$1;var db_after = cljs.core.get.call(null,map__40824__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__40825 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__40825,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__40825,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__40820_SHARP_,p2__40819_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__40819_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__40820_SHARP_ * 48.18)),(their_region_offset_y + (p1__40820_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__40819_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__40828,p__40829,conn){var vec__40830 = p__40828;var game_id = cljs.core.nth.call(null,vec__40830,0,null);var card_id = cljs.core.nth.call(null,vec__40830,1,null);var _ = cljs.core.nth.call(null,vec__40830,2,null);var ___$1 = cljs.core.nth.call(null,vec__40830,3,null);var map__40831 = p__40829;var map__40831__$1 = ((cljs.core.seq_QMARK_.call(null,map__40831))?cljs.core.apply.call(null,cljs.core.hash_map,map__40831):map__40831);var report = map__40831__$1;var db_after = cljs.core.get.call(null,map__40831__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__40832 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__40832,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__40832,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__40827_SHARP_,p2__40826_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__40826_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__40827_SHARP_ * 48.18)),(their_region_offset_y + (p1__40827_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__40826_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__40835,p__40836,conn){var vec__40837 = p__40835;var game_id = cljs.core.nth.call(null,vec__40837,0,null);var card_id = cljs.core.nth.call(null,vec__40837,1,null);var suit = cljs.core.nth.call(null,vec__40837,2,null);var rank = cljs.core.nth.call(null,vec__40837,3,null);var map__40838 = p__40836;var map__40838__$1 = ((cljs.core.seq_QMARK_.call(null,map__40838))?cljs.core.apply.call(null,cljs.core.hash_map,map__40838):map__40838);var report = map__40838__$1;var db_after = cljs.core.get.call(null,map__40838__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__40839 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__40839,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__40839,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__40834_SHARP_,p2__40833_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__40833_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__40834_SHARP_ * 53)),(their_region_offset_y + (p1__40834_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__40842 = report;var map__40842__$1 = ((cljs.core.seq_QMARK_.call(null,map__40842))?cljs.core.apply.call(null,cljs.core.hash_map,map__40842):map__40842);var db_after = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__40843 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__40843,0,null);var args = cljs.core.nth.call(null,vec__40843,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__40874_40904 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__40874_40904,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__40874_40904,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__40874_40904,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__40875(s__40876){return (new cljs.core.LazySeq(null,(function (){var s__40876__$1 = s__40876;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40876__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__40876__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__40877(s__40878){return (new cljs.core.LazySeq(null,((function (s__40876__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__40878__$1 = s__40878;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40878__$1);if(temp__4092__auto____$1)
{var s__40878__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40878__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__40878__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__40880 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__40879 = 0;while(true){
if((i__40879 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__40879);cljs.core.chunk_append.call(null,b__40880,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__40905 = (i__40879 + 1);
i__40879 = G__40905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40880),iter__40877.call(null,cljs.core.chunk_rest.call(null,s__40878__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40880),null);
}
} else
{var rank = cljs.core.first.call(null,s__40878__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__40877.call(null,cljs.core.rest.call(null,s__40878__$2)));
}
} else
{return null;
}
break;
}
});})(s__40876__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__40876__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__40875.call(null,cljs.core.rest.call(null,s__40876__$1)));
} else
{{
var G__40906 = cljs.core.rest.call(null,s__40876__$1);
s__40876__$1 = G__40906;
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
})();var vec__40881 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__40881,0,null);var pile_y = cljs.core.nth.call(null,vec__40881,1,null);var cards = (function (){var iter__10096__auto__ = ((function (container_wrap,vec__40881,pile_x,pile_y){
return (function iter__40882(s__40883){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__40881,pile_x,pile_y){
return (function (){var s__40883__$1 = s__40883;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40883__$1);if(temp__4092__auto__)
{var s__40883__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40883__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__40883__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__40885 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__40884 = 0;while(true){
if((i__40884 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__40884);cljs.core.chunk_append.call(null,b__40885,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__40888 = (new goog.fx.Dragger(card_el));G__40888.setLimits(container_wrap);
return G__40888;
})();card_el.dispose = ((function (i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__40884,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__40885,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__40907 = (i__40884 + 1);
i__40884 = G__40907;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40885),iter__40882.call(null,cljs.core.chunk_rest.call(null,s__40883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40885),null);
}
} else
{var i = cljs.core.first.call(null,s__40883__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__40889 = (new goog.fx.Dragger(card_el));G__40889.setLimits(container_wrap);
return G__40889;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__40883__$2,temp__4092__auto__,container_wrap,vec__40881,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__40882.call(null,cljs.core.rest.call(null,s__40883__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__40881,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__40881,pile_x,pile_y))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__40890_40908 = cljs.core.seq.call(null,cards);var chunk__40891_40909 = null;var count__40892_40910 = 0;var i__40893_40911 = 0;while(true){
if((i__40893_40911 < count__40892_40910))
{var map__40894_40912 = cljs.core._nth.call(null,chunk__40891_40909,i__40893_40911);var map__40894_40913__$1 = ((cljs.core.seq_QMARK_.call(null,map__40894_40912))?cljs.core.apply.call(null,cljs.core.hash_map,map__40894_40912):map__40894_40912);var card_el_40914 = cljs.core.get.call(null,map__40894_40913__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_40914);
{
var G__40915 = seq__40890_40908;
var G__40916 = chunk__40891_40909;
var G__40917 = count__40892_40910;
var G__40918 = (i__40893_40911 + 1);
seq__40890_40908 = G__40915;
chunk__40891_40909 = G__40916;
count__40892_40910 = G__40917;
i__40893_40911 = G__40918;
continue;
}
} else
{var temp__4092__auto___40919 = cljs.core.seq.call(null,seq__40890_40908);if(temp__4092__auto___40919)
{var seq__40890_40920__$1 = temp__4092__auto___40919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40890_40920__$1))
{var c__10127__auto___40921 = cljs.core.chunk_first.call(null,seq__40890_40920__$1);{
var G__40922 = cljs.core.chunk_rest.call(null,seq__40890_40920__$1);
var G__40923 = c__10127__auto___40921;
var G__40924 = cljs.core.count.call(null,c__10127__auto___40921);
var G__40925 = 0;
seq__40890_40908 = G__40922;
chunk__40891_40909 = G__40923;
count__40892_40910 = G__40924;
i__40893_40911 = G__40925;
continue;
}
} else
{var map__40895_40926 = cljs.core.first.call(null,seq__40890_40920__$1);var map__40895_40927__$1 = ((cljs.core.seq_QMARK_.call(null,map__40895_40926))?cljs.core.apply.call(null,cljs.core.hash_map,map__40895_40926):map__40895_40926);var card_el_40928 = cljs.core.get.call(null,map__40895_40927__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_40928);
{
var G__40929 = cljs.core.next.call(null,seq__40890_40920__$1);
var G__40930 = null;
var G__40931 = 0;
var G__40932 = 0;
seq__40890_40908 = G__40929;
chunk__40891_40909 = G__40930;
count__40892_40910 = G__40931;
i__40893_40911 = G__40932;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__40896(s__40897){return (new cljs.core.LazySeq(null,(function (){var s__40897__$1 = s__40897;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40897__$1);if(temp__4092__auto__)
{var s__40897__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40897__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__40897__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__40899 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__40898 = 0;while(true){
if((i__40898 < size__10095__auto__))
{var map__40902 = cljs.core._nth.call(null,c__10094__auto__,i__40898);var map__40902__$1 = ((cljs.core.seq_QMARK_.call(null,map__40902))?cljs.core.apply.call(null,cljs.core.hash_map,map__40902):map__40902);var card_el = cljs.core.get.call(null,map__40902__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__40902__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__40902__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__40899,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__40933 = (i__40898 + 1);
i__40898 = G__40933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40899),iter__40896.call(null,cljs.core.chunk_rest.call(null,s__40897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40899),null);
}
} else
{var map__40903 = cljs.core.first.call(null,s__40897__$2);var map__40903__$1 = ((cljs.core.seq_QMARK_.call(null,map__40903))?cljs.core.apply.call(null,cljs.core.hash_map,map__40903):map__40903);var card_el = cljs.core.get.call(null,map__40903__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__40903__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__40903__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__40896.call(null,cljs.core.rest.call(null,s__40897__$2)));
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
