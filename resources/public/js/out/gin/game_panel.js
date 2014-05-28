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
gin.game_panel.msg = (function (){var method_table__17491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("msg",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17495__auto__,method_table__17491__auto__,prefer_table__17492__auto__,method_cache__17493__auto__,cached_hierarchy__17494__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Dealing ...");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Ready, waiting on opponent");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__21063,p__21064,_){var vec__21065 = p__21063;var game_id = cljs.core.nth.call(null,vec__21065,0,null);var map__21066 = p__21064;var map__21066__$1 = ((cljs.core.seq_QMARK_.call(null,map__21066))?cljs.core.apply.call(null,cljs.core.hash_map,map__21066):map__21066);var db_after = cljs.core.get.call(null,map__21066__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21067 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21067__$1 = ((cljs.core.seq_QMARK_.call(null,map__21067))?cljs.core.apply.call(null,cljs.core.hash_map,map__21067):map__21067);var game = map__21067__$1;var turn = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"You've chosen a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Drag a card from your hand to discard.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Your move is done.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponent picked a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponent picked the discard.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Opponents move is done.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__21068,___$1,___$2){var vec__21069 = p__21068;var game_id = cljs.core.nth.call(null,vec__21069,0,null);var result = cljs.core.nth.call(null,vec__21069,1,null);var ___$3 = cljs.core.nth.call(null,vec__21069,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__21070 = cljs.core._EQ_;var expr__21071 = result;if(cljs.core.truth_(pred__21070.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__21071)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__21070.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__21071)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__21070.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__21071)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__21070.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__21071)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__21070.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__21071)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21071)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__21073){var vec__21075 = p__21073;var x = cljs.core.nth.call(null,vec__21075,0,null);var y = cljs.core.nth.call(null,vec__21075,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.pile_drag_handler = (function pile_drag_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_drag","cursor_hand");
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
gin.game_panel.handle = (function (){var method_table__17491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17495__auto__,method_table__17491__auto__,prefer_table__17492__auto__,method_cache__17493__auto__,cached_hierarchy__17494__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__21079,p__21080,conn){var vec__21081 = p__21079;var game_id = cljs.core.nth.call(null,vec__21081,0,null);var map__21082 = p__21080;var map__21082__$1 = ((cljs.core.seq_QMARK_.call(null,map__21082))?cljs.core.apply.call(null,cljs.core.hash_map,map__21082):map__21082);var report = map__21082__$1;var db_after = cljs.core.get.call(null,map__21082__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__21076_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__21076_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__21083 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21083,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21083,1,null);var vec__21084 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__21084,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__21084,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y){
return (function (p1__21078_SHARP_,p2__21077_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__21077_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__21077_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21078_SHARP_ * 53)),(their_region_offset_y + (p1__21078_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__21086){var map__21087 = p__21086;var map__21087__$1 = ((cljs.core.seq_QMARK_.call(null,map__21087))?cljs.core.apply.call(null,cljs.core.hash_map,map__21087):map__21087);var id = cljs.core.get.call(null,map__21087__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__21087__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21087__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__21087,map__21087__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__21087,map__21087__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__21087,map__21087__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__21087,map__21087__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__21083,their_region_offset_x,their_region_offset_y,vec__21084,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__21085 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__21085,0,null);var second_deal = cljs.core.nth.call(null,vec__21085,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__21088,p__21089,conn){var vec__21090 = p__21088;var game_id = cljs.core.nth.call(null,vec__21090,0,null);var turn = cljs.core.nth.call(null,vec__21090,1,null);var map__21091 = p__21089;var map__21091__$1 = ((cljs.core.seq_QMARK_.call(null,map__21091))?cljs.core.apply.call(null,cljs.core.hash_map,map__21091):map__21091);var report = map__21091__$1;var db_after = cljs.core.get.call(null,map__21091__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21092 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21092__$1 = ((cljs.core.seq_QMARK_.call(null,map__21092))?cljs.core.apply.call(null,cljs.core.hash_map,map__21092):map__21092);var game = map__21092__$1;var turn__$1 = cljs.core.get.call(null,map__21092__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__21092__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.undraggable_handler.call(null,conn));
var temp__4092__auto__ = cljs.core.peek.call(null,cljs.core.pop.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core.truth_(temp__4092__auto__))
{var prev_discard = temp__4092__auto__;return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,prev_discard),gin.game_panel.undraggable_handler.call(null,conn));
} else
{return null;
}
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__21093,p__21094,conn){var vec__21095 = p__21093;var game_id = cljs.core.nth.call(null,vec__21095,0,null);var card_id = cljs.core.nth.call(null,vec__21095,1,null);var map__21096 = p__21094;var map__21096__$1 = ((cljs.core.seq_QMARK_.call(null,map__21096))?cljs.core.apply.call(null,cljs.core.hash_map,map__21096):map__21096);var report = map__21096__$1;var db_after = cljs.core.get.call(null,map__21096__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__21098,p__21099,conn){var vec__21100 = p__21098;var game_id = cljs.core.nth.call(null,vec__21100,0,null);var card_id = cljs.core.nth.call(null,vec__21100,1,null);var suit = cljs.core.nth.call(null,vec__21100,2,null);var rank = cljs.core.nth.call(null,vec__21100,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__21100,4,null);var map__21101 = p__21099;var map__21101__$1 = ((cljs.core.seq_QMARK_.call(null,map__21101))?cljs.core.apply.call(null,cljs.core.hash_map,map__21101):map__21101);var report = map__21101__$1;var db_after = cljs.core.get.call(null,map__21101__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__21102_21106 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__21103_21107 = null;var count__21104_21108 = 0;var i__21105_21109 = 0;while(true){
if((i__21105_21109 < count__21104_21108))
{var card_id_21110__$1 = cljs.core._nth.call(null,chunk__21103_21107,i__21105_21109);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_21110__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21111 = seq__21102_21106;
var G__21112 = chunk__21103_21107;
var G__21113 = count__21104_21108;
var G__21114 = (i__21105_21109 + 1);
seq__21102_21106 = G__21111;
chunk__21103_21107 = G__21112;
count__21104_21108 = G__21113;
i__21105_21109 = G__21114;
continue;
}
} else
{var temp__4092__auto___21115 = cljs.core.seq.call(null,seq__21102_21106);if(temp__4092__auto___21115)
{var seq__21102_21116__$1 = temp__4092__auto___21115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21102_21116__$1))
{var c__17381__auto___21117 = cljs.core.chunk_first.call(null,seq__21102_21116__$1);{
var G__21118 = cljs.core.chunk_rest.call(null,seq__21102_21116__$1);
var G__21119 = c__17381__auto___21117;
var G__21120 = cljs.core.count.call(null,c__17381__auto___21117);
var G__21121 = 0;
seq__21102_21106 = G__21118;
chunk__21103_21107 = G__21119;
count__21104_21108 = G__21120;
i__21105_21109 = G__21121;
continue;
}
} else
{var card_id_21122__$1 = cljs.core.first.call(null,seq__21102_21116__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_21122__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21123 = cljs.core.next.call(null,seq__21102_21116__$1);
var G__21124 = null;
var G__21125 = 0;
var G__21126 = 0;
seq__21102_21106 = G__21123;
chunk__21103_21107 = G__21124;
count__21104_21108 = G__21125;
i__21105_21109 = G__21126;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21097_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__21097_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__21097_SHARP_,gin.game_panel.pile_position.call(null)));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__21127,p__21128,conn){var vec__21129 = p__21127;var game_id = cljs.core.nth.call(null,vec__21129,0,null);var card_id = cljs.core.nth.call(null,vec__21129,1,null);var map__21130 = p__21128;var map__21130__$1 = ((cljs.core.seq_QMARK_.call(null,map__21130))?cljs.core.apply.call(null,cljs.core.hash_map,map__21130):map__21130);var report = map__21130__$1;var db_after = cljs.core.get.call(null,map__21130__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21131 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21131__$1 = ((cljs.core.seq_QMARK_.call(null,map__21131))?cljs.core.apply.call(null,cljs.core.hash_map,map__21131):map__21131);var game = map__21131__$1;var our_cards = cljs.core.get.call(null,map__21131__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__21131__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__21132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__21133 = null;var count__21134 = 0;var i__21135 = 0;while(true){
if((i__21135 < count__21134))
{var card_id__$1 = cljs.core._nth.call(null,chunk__21133,i__21135);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21136 = seq__21132;
var G__21137 = chunk__21133;
var G__21138 = count__21134;
var G__21139 = (i__21135 + 1);
seq__21132 = G__21136;
chunk__21133 = G__21137;
count__21134 = G__21138;
i__21135 = G__21139;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21132);if(temp__4092__auto__)
{var seq__21132__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21132__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__21132__$1);{
var G__21140 = cljs.core.chunk_rest.call(null,seq__21132__$1);
var G__21141 = c__17381__auto__;
var G__21142 = cljs.core.count.call(null,c__17381__auto__);
var G__21143 = 0;
seq__21132 = G__21140;
chunk__21133 = G__21141;
count__21134 = G__21142;
i__21135 = G__21143;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__21132__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21144 = cljs.core.next.call(null,seq__21132__$1);
var G__21145 = null;
var G__21146 = 0;
var G__21147 = 0;
seq__21132 = G__21144;
chunk__21133 = G__21145;
count__21134 = G__21146;
i__21135 = G__21147;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__21148,p__21149,conn){var vec__21150 = p__21148;var game_id = cljs.core.nth.call(null,vec__21150,0,null);var card_id = cljs.core.nth.call(null,vec__21150,1,null);var map__21151 = p__21149;var map__21151__$1 = ((cljs.core.seq_QMARK_.call(null,map__21151))?cljs.core.apply.call(null,cljs.core.hash_map,map__21151):map__21151);var report = map__21151__$1;var db_after = cljs.core.get.call(null,map__21151__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__21152 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__21153 = null;var count__21154 = 0;var i__21155 = 0;while(true){
if((i__21155 < count__21154))
{var card_id__$1 = cljs.core._nth.call(null,chunk__21153,i__21155);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__21156 = seq__21152;
var G__21157 = chunk__21153;
var G__21158 = count__21154;
var G__21159 = (i__21155 + 1);
seq__21152 = G__21156;
chunk__21153 = G__21157;
count__21154 = G__21158;
i__21155 = G__21159;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21152);if(temp__4092__auto__)
{var seq__21152__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21152__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__21152__$1);{
var G__21160 = cljs.core.chunk_rest.call(null,seq__21152__$1);
var G__21161 = c__17381__auto__;
var G__21162 = cljs.core.count.call(null,c__17381__auto__);
var G__21163 = 0;
seq__21152 = G__21160;
chunk__21153 = G__21161;
count__21154 = G__21162;
i__21155 = G__21163;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__21152__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__21164 = cljs.core.next.call(null,seq__21152__$1);
var G__21165 = null;
var G__21166 = 0;
var G__21167 = 0;
seq__21152 = G__21164;
chunk__21153 = G__21165;
count__21154 = G__21166;
i__21155 = G__21167;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__21171,p__21172,conn){var vec__21173 = p__21171;var game_id = cljs.core.nth.call(null,vec__21173,0,null);var card_id = cljs.core.nth.call(null,vec__21173,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__21173,2,null);var map__21174 = p__21172;var map__21174__$1 = ((cljs.core.seq_QMARK_.call(null,map__21174))?cljs.core.apply.call(null,cljs.core.hash_map,map__21174):map__21174);var report = map__21174__$1;var db_after = cljs.core.get.call(null,map__21174__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21175 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21175,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21175,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21169_SHARP_,p2__21168_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__21168_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21169_SHARP_ * 48.18)),(their_region_offset_y + (p1__21169_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__21168_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21170_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__21170_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__21170_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__21178,p__21179,conn){var vec__21180 = p__21178;var game_id = cljs.core.nth.call(null,vec__21180,0,null);var card_id = cljs.core.nth.call(null,vec__21180,1,null);var _ = cljs.core.nth.call(null,vec__21180,2,null);var ___$1 = cljs.core.nth.call(null,vec__21180,3,null);var map__21181 = p__21179;var map__21181__$1 = ((cljs.core.seq_QMARK_.call(null,map__21181))?cljs.core.apply.call(null,cljs.core.hash_map,map__21181):map__21181);var report = map__21181__$1;var db_after = cljs.core.get.call(null,map__21181__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21182 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21182,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21182,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21177_SHARP_,p2__21176_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__21176_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21177_SHARP_ * 48.18)),(their_region_offset_y + (p1__21177_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__21176_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__21185,p__21186,conn){var vec__21187 = p__21185;var game_id = cljs.core.nth.call(null,vec__21187,0,null);var card_id = cljs.core.nth.call(null,vec__21187,1,null);var suit = cljs.core.nth.call(null,vec__21187,2,null);var rank = cljs.core.nth.call(null,vec__21187,3,null);var map__21188 = p__21186;var map__21188__$1 = ((cljs.core.seq_QMARK_.call(null,map__21188))?cljs.core.apply.call(null,cljs.core.hash_map,map__21188):map__21188);var report = map__21188__$1;var db_after = cljs.core.get.call(null,map__21188__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21189 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21189,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21189,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21184_SHARP_,p2__21183_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__21183_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21184_SHARP_ * 53)),(their_region_offset_y + (p1__21184_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__21190,p__21191,conn){var vec__21192 = p__21190;var game_id = cljs.core.nth.call(null,vec__21192,0,null);var result = cljs.core.nth.call(null,vec__21192,1,null);var map__21193 = p__21191;var map__21193__$1 = ((cljs.core.seq_QMARK_.call(null,map__21193))?cljs.core.apply.call(null,cljs.core.hash_map,map__21193):map__21193);var report = map__21193__$1;var db_after = cljs.core.get.call(null,map__21193__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_21202 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_21203 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_21203,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_21202,restart_button_21203);
return gin.dom_helpers.schedule.call(null,(function (){var iter__17350__auto__ = (function iter__21194(s__21195){return (new cljs.core.LazySeq(null,(function (){var s__21195__$1 = s__21195;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21195__$1);if(temp__4092__auto__)
{var s__21195__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21195__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21195__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21197 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21196 = 0;while(true){
if((i__21196 < size__17349__auto__))
{var card_id = cljs.core._nth.call(null,c__17348__auto__,i__21196);cljs.core.chunk_append.call(null,b__21197,(function (){var map__21200 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__21200__$1 = ((cljs.core.seq_QMARK_.call(null,map__21200))?cljs.core.apply.call(null,cljs.core.hash_map,map__21200):map__21200);var suit = cljs.core.get.call(null,map__21200__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21200__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__21196,map__21200,map__21200__$1,suit,rank,card_id,c__17348__auto__,size__17349__auto__,b__21197,s__21195__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__21196,map__21200,map__21200__$1,suit,rank,card_id,c__17348__auto__,size__17349__auto__,b__21197,s__21195__$2,temp__4092__auto__))
})());
{
var G__21204 = (i__21196 + 1);
i__21196 = G__21204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21197),iter__21194.call(null,cljs.core.chunk_rest.call(null,s__21195__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21197),null);
}
} else
{var card_id = cljs.core.first.call(null,s__21195__$2);return cljs.core.cons.call(null,(function (){var map__21201 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__21201__$1 = ((cljs.core.seq_QMARK_.call(null,map__21201))?cljs.core.apply.call(null,cljs.core.hash_map,map__21201):map__21201);var suit = cljs.core.get.call(null,map__21201__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21201__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__21201,map__21201__$1,suit,rank,card_id,s__21195__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__21201,map__21201__$1,suit,rank,card_id,s__21195__$2,temp__4092__auto__))
})(),iter__21194.call(null,cljs.core.rest.call(null,s__21195__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17350__auto__.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));
})());
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__21207 = report;var map__21207__$1 = ((cljs.core.seq_QMARK_.call(null,map__21207))?cljs.core.apply.call(null,cljs.core.hash_map,map__21207):map__21207);var db_after = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__21208 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__21208,0,null);var args = cljs.core.nth.call(null,vec__21208,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__21239_21269 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__21239_21269,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__21239_21269,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__21239_21269,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17350__auto__ = (function iter__21240(s__21241){return (new cljs.core.LazySeq(null,(function (){var s__21241__$1 = s__21241;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21241__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17346__auto__ = ((function (s__21241__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__21242(s__21243){return (new cljs.core.LazySeq(null,((function (s__21241__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__21243__$1 = s__21243;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__21243__$1);if(temp__4092__auto____$1)
{var s__21243__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21243__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21243__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21245 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21244 = 0;while(true){
if((i__21244 < size__17349__auto__))
{var rank = cljs.core._nth.call(null,c__17348__auto__,i__21244);cljs.core.chunk_append.call(null,b__21245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__21270 = (i__21244 + 1);
i__21244 = G__21270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21245),iter__21242.call(null,cljs.core.chunk_rest.call(null,s__21243__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21245),null);
}
} else
{var rank = cljs.core.first.call(null,s__21243__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__21242.call(null,cljs.core.rest.call(null,s__21243__$2)));
}
} else
{return null;
}
break;
}
});})(s__21241__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__21241__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17347__auto__ = cljs.core.seq.call(null,iterys__17346__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17347__auto__)
{return cljs.core.concat.call(null,fs__17347__auto__,iter__21240.call(null,cljs.core.rest.call(null,s__21241__$1)));
} else
{{
var G__21271 = cljs.core.rest.call(null,s__21241__$1);
s__21241__$1 = G__21271;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17350__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"spade","spade",1123542167)], null));
})())));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__21246 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__21246,0,null);var pile_y = cljs.core.nth.call(null,vec__21246,1,null);var cards = (function (){var iter__17350__auto__ = ((function (container_wrap,vec__21246,pile_x,pile_y){
return (function iter__21247(s__21248){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__21246,pile_x,pile_y){
return (function (){var s__21248__$1 = s__21248;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21248__$1);if(temp__4092__auto__)
{var s__21248__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21248__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21248__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21250 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21249 = 0;while(true){
if((i__21249 < size__17349__auto__))
{var i = cljs.core._nth.call(null,c__17348__auto__,i__21249);cljs.core.chunk_append.call(null,b__21250,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__21253 = (new goog.fx.Dragger(card_el));G__21253.setLimits(container_wrap);
return G__21253;
})();card_el.dispose = ((function (i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21249,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21250,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__21272 = (i__21249 + 1);
i__21249 = G__21272;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21250),iter__21247.call(null,cljs.core.chunk_rest.call(null,s__21248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21250),null);
}
} else
{var i = cljs.core.first.call(null,s__21248__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__21254 = (new goog.fx.Dragger(card_el));G__21254.setLimits(container_wrap);
return G__21254;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21248__$2,temp__4092__auto__,container_wrap,vec__21246,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__21247.call(null,cljs.core.rest.call(null,s__21248__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__21246,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__21246,pile_x,pile_y))
;return iter__17350__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__21255_21273 = cljs.core.seq.call(null,cards);var chunk__21256_21274 = null;var count__21257_21275 = 0;var i__21258_21276 = 0;while(true){
if((i__21258_21276 < count__21257_21275))
{var map__21259_21277 = cljs.core._nth.call(null,chunk__21256_21274,i__21258_21276);var map__21259_21278__$1 = ((cljs.core.seq_QMARK_.call(null,map__21259_21277))?cljs.core.apply.call(null,cljs.core.hash_map,map__21259_21277):map__21259_21277);var card_el_21279 = cljs.core.get.call(null,map__21259_21278__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_21279);
{
var G__21280 = seq__21255_21273;
var G__21281 = chunk__21256_21274;
var G__21282 = count__21257_21275;
var G__21283 = (i__21258_21276 + 1);
seq__21255_21273 = G__21280;
chunk__21256_21274 = G__21281;
count__21257_21275 = G__21282;
i__21258_21276 = G__21283;
continue;
}
} else
{var temp__4092__auto___21284 = cljs.core.seq.call(null,seq__21255_21273);if(temp__4092__auto___21284)
{var seq__21255_21285__$1 = temp__4092__auto___21284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21255_21285__$1))
{var c__17381__auto___21286 = cljs.core.chunk_first.call(null,seq__21255_21285__$1);{
var G__21287 = cljs.core.chunk_rest.call(null,seq__21255_21285__$1);
var G__21288 = c__17381__auto___21286;
var G__21289 = cljs.core.count.call(null,c__17381__auto___21286);
var G__21290 = 0;
seq__21255_21273 = G__21287;
chunk__21256_21274 = G__21288;
count__21257_21275 = G__21289;
i__21258_21276 = G__21290;
continue;
}
} else
{var map__21260_21291 = cljs.core.first.call(null,seq__21255_21285__$1);var map__21260_21292__$1 = ((cljs.core.seq_QMARK_.call(null,map__21260_21291))?cljs.core.apply.call(null,cljs.core.hash_map,map__21260_21291):map__21260_21291);var card_el_21293 = cljs.core.get.call(null,map__21260_21292__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_21293);
{
var G__21294 = cljs.core.next.call(null,seq__21255_21285__$1);
var G__21295 = null;
var G__21296 = 0;
var G__21297 = 0;
seq__21255_21273 = G__21294;
chunk__21256_21274 = G__21295;
count__21257_21275 = G__21296;
i__21258_21276 = G__21297;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17350__auto__ = (function iter__21261(s__21262){return (new cljs.core.LazySeq(null,(function (){var s__21262__$1 = s__21262;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21262__$1);if(temp__4092__auto__)
{var s__21262__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21262__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21262__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21264 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21263 = 0;while(true){
if((i__21263 < size__17349__auto__))
{var map__21267 = cljs.core._nth.call(null,c__17348__auto__,i__21263);var map__21267__$1 = ((cljs.core.seq_QMARK_.call(null,map__21267))?cljs.core.apply.call(null,cljs.core.hash_map,map__21267):map__21267);var card_el = cljs.core.get.call(null,map__21267__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__21267__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__21267__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__21264,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__21298 = (i__21263 + 1);
i__21263 = G__21298;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21264),iter__21261.call(null,cljs.core.chunk_rest.call(null,s__21262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21264),null);
}
} else
{var map__21268 = cljs.core.first.call(null,s__21262__$2);var map__21268__$1 = ((cljs.core.seq_QMARK_.call(null,map__21268))?cljs.core.apply.call(null,cljs.core.hash_map,map__21268):map__21268);var card_el = cljs.core.get.call(null,map__21268__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__21268__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__21268__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__21261.call(null,cljs.core.rest.call(null,s__21262__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17350__auto__.call(null,cards);
})());
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.render.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
