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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__21299,p__21300,_){var vec__21301 = p__21299;var game_id = cljs.core.nth.call(null,vec__21301,0,null);var map__21302 = p__21300;var map__21302__$1 = ((cljs.core.seq_QMARK_.call(null,map__21302))?cljs.core.apply.call(null,cljs.core.hash_map,map__21302):map__21302);var db_after = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21303 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21303__$1 = ((cljs.core.seq_QMARK_.call(null,map__21303))?cljs.core.apply.call(null,cljs.core.hash_map,map__21303):map__21303);var game = map__21303__$1;var turn = cljs.core.get.call(null,map__21303__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__21303__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__21304,___$1,___$2){var vec__21305 = p__21304;var game_id = cljs.core.nth.call(null,vec__21305,0,null);var result = cljs.core.nth.call(null,vec__21305,1,null);var ___$3 = cljs.core.nth.call(null,vec__21305,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__21306 = cljs.core._EQ_;var expr__21307 = result;if(cljs.core.truth_(pred__21306.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__21307)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__21306.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__21307)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__21306.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__21307)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__21306.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__21307)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__21306.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__21307)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21307)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__21309){var vec__21311 = p__21309;var x = cljs.core.nth.call(null,vec__21311,0,null);var y = cljs.core.nth.call(null,vec__21311,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__21315,p__21316,conn){var vec__21317 = p__21315;var game_id = cljs.core.nth.call(null,vec__21317,0,null);var map__21318 = p__21316;var map__21318__$1 = ((cljs.core.seq_QMARK_.call(null,map__21318))?cljs.core.apply.call(null,cljs.core.hash_map,map__21318):map__21318);var report = map__21318__$1;var db_after = cljs.core.get.call(null,map__21318__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__21312_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__21312_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__21319 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21319,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21319,1,null);var vec__21320 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__21320,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__21320,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y){
return (function (p1__21314_SHARP_,p2__21313_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__21313_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__21313_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21314_SHARP_ * 53)),(their_region_offset_y + (p1__21314_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__21322){var map__21323 = p__21322;var map__21323__$1 = ((cljs.core.seq_QMARK_.call(null,map__21323))?cljs.core.apply.call(null,cljs.core.hash_map,map__21323):map__21323);var id = cljs.core.get.call(null,map__21323__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__21323__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21323__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__21323,map__21323__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__21323,map__21323__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__21323,map__21323__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__21323,map__21323__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__21319,their_region_offset_x,their_region_offset_y,vec__21320,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__21321 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__21321,0,null);var second_deal = cljs.core.nth.call(null,vec__21321,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__21324,p__21325,conn){var vec__21326 = p__21324;var game_id = cljs.core.nth.call(null,vec__21326,0,null);var turn = cljs.core.nth.call(null,vec__21326,1,null);var map__21327 = p__21325;var map__21327__$1 = ((cljs.core.seq_QMARK_.call(null,map__21327))?cljs.core.apply.call(null,cljs.core.hash_map,map__21327):map__21327);var report = map__21327__$1;var db_after = cljs.core.get.call(null,map__21327__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21328 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21328__$1 = ((cljs.core.seq_QMARK_.call(null,map__21328))?cljs.core.apply.call(null,cljs.core.hash_map,map__21328):map__21328);var game = map__21328__$1;var turn__$1 = cljs.core.get.call(null,map__21328__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__21328__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__21329,p__21330,conn){var vec__21331 = p__21329;var game_id = cljs.core.nth.call(null,vec__21331,0,null);var card_id = cljs.core.nth.call(null,vec__21331,1,null);var map__21332 = p__21330;var map__21332__$1 = ((cljs.core.seq_QMARK_.call(null,map__21332))?cljs.core.apply.call(null,cljs.core.hash_map,map__21332):map__21332);var report = map__21332__$1;var db_after = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__21334,p__21335,conn){var vec__21336 = p__21334;var game_id = cljs.core.nth.call(null,vec__21336,0,null);var card_id = cljs.core.nth.call(null,vec__21336,1,null);var suit = cljs.core.nth.call(null,vec__21336,2,null);var rank = cljs.core.nth.call(null,vec__21336,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__21336,4,null);var map__21337 = p__21335;var map__21337__$1 = ((cljs.core.seq_QMARK_.call(null,map__21337))?cljs.core.apply.call(null,cljs.core.hash_map,map__21337):map__21337);var report = map__21337__$1;var db_after = cljs.core.get.call(null,map__21337__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__21338_21342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__21339_21343 = null;var count__21340_21344 = 0;var i__21341_21345 = 0;while(true){
if((i__21341_21345 < count__21340_21344))
{var card_id_21346__$1 = cljs.core._nth.call(null,chunk__21339_21343,i__21341_21345);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_21346__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21347 = seq__21338_21342;
var G__21348 = chunk__21339_21343;
var G__21349 = count__21340_21344;
var G__21350 = (i__21341_21345 + 1);
seq__21338_21342 = G__21347;
chunk__21339_21343 = G__21348;
count__21340_21344 = G__21349;
i__21341_21345 = G__21350;
continue;
}
} else
{var temp__4092__auto___21351 = cljs.core.seq.call(null,seq__21338_21342);if(temp__4092__auto___21351)
{var seq__21338_21352__$1 = temp__4092__auto___21351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21338_21352__$1))
{var c__17381__auto___21353 = cljs.core.chunk_first.call(null,seq__21338_21352__$1);{
var G__21354 = cljs.core.chunk_rest.call(null,seq__21338_21352__$1);
var G__21355 = c__17381__auto___21353;
var G__21356 = cljs.core.count.call(null,c__17381__auto___21353);
var G__21357 = 0;
seq__21338_21342 = G__21354;
chunk__21339_21343 = G__21355;
count__21340_21344 = G__21356;
i__21341_21345 = G__21357;
continue;
}
} else
{var card_id_21358__$1 = cljs.core.first.call(null,seq__21338_21352__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_21358__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21359 = cljs.core.next.call(null,seq__21338_21352__$1);
var G__21360 = null;
var G__21361 = 0;
var G__21362 = 0;
seq__21338_21342 = G__21359;
chunk__21339_21343 = G__21360;
count__21340_21344 = G__21361;
i__21341_21345 = G__21362;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21333_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__21333_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__21333_SHARP_,gin.game_panel.pile_position.call(null)));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__21363,p__21364,conn){var vec__21365 = p__21363;var game_id = cljs.core.nth.call(null,vec__21365,0,null);var card_id = cljs.core.nth.call(null,vec__21365,1,null);var map__21366 = p__21364;var map__21366__$1 = ((cljs.core.seq_QMARK_.call(null,map__21366))?cljs.core.apply.call(null,cljs.core.hash_map,map__21366):map__21366);var report = map__21366__$1;var db_after = cljs.core.get.call(null,map__21366__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21367 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21367__$1 = ((cljs.core.seq_QMARK_.call(null,map__21367))?cljs.core.apply.call(null,cljs.core.hash_map,map__21367):map__21367);var game = map__21367__$1;var our_cards = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__21368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__21369 = null;var count__21370 = 0;var i__21371 = 0;while(true){
if((i__21371 < count__21370))
{var card_id__$1 = cljs.core._nth.call(null,chunk__21369,i__21371);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21372 = seq__21368;
var G__21373 = chunk__21369;
var G__21374 = count__21370;
var G__21375 = (i__21371 + 1);
seq__21368 = G__21372;
chunk__21369 = G__21373;
count__21370 = G__21374;
i__21371 = G__21375;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21368);if(temp__4092__auto__)
{var seq__21368__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21368__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__21368__$1);{
var G__21376 = cljs.core.chunk_rest.call(null,seq__21368__$1);
var G__21377 = c__17381__auto__;
var G__21378 = cljs.core.count.call(null,c__17381__auto__);
var G__21379 = 0;
seq__21368 = G__21376;
chunk__21369 = G__21377;
count__21370 = G__21378;
i__21371 = G__21379;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__21368__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21380 = cljs.core.next.call(null,seq__21368__$1);
var G__21381 = null;
var G__21382 = 0;
var G__21383 = 0;
seq__21368 = G__21380;
chunk__21369 = G__21381;
count__21370 = G__21382;
i__21371 = G__21383;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__21384,p__21385,conn){var vec__21386 = p__21384;var game_id = cljs.core.nth.call(null,vec__21386,0,null);var card_id = cljs.core.nth.call(null,vec__21386,1,null);var map__21387 = p__21385;var map__21387__$1 = ((cljs.core.seq_QMARK_.call(null,map__21387))?cljs.core.apply.call(null,cljs.core.hash_map,map__21387):map__21387);var report = map__21387__$1;var db_after = cljs.core.get.call(null,map__21387__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__21388 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__21389 = null;var count__21390 = 0;var i__21391 = 0;while(true){
if((i__21391 < count__21390))
{var card_id__$1 = cljs.core._nth.call(null,chunk__21389,i__21391);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__21392 = seq__21388;
var G__21393 = chunk__21389;
var G__21394 = count__21390;
var G__21395 = (i__21391 + 1);
seq__21388 = G__21392;
chunk__21389 = G__21393;
count__21390 = G__21394;
i__21391 = G__21395;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21388);if(temp__4092__auto__)
{var seq__21388__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21388__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__21388__$1);{
var G__21396 = cljs.core.chunk_rest.call(null,seq__21388__$1);
var G__21397 = c__17381__auto__;
var G__21398 = cljs.core.count.call(null,c__17381__auto__);
var G__21399 = 0;
seq__21388 = G__21396;
chunk__21389 = G__21397;
count__21390 = G__21398;
i__21391 = G__21399;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__21388__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__21400 = cljs.core.next.call(null,seq__21388__$1);
var G__21401 = null;
var G__21402 = 0;
var G__21403 = 0;
seq__21388 = G__21400;
chunk__21389 = G__21401;
count__21390 = G__21402;
i__21391 = G__21403;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__21407,p__21408,conn){var vec__21409 = p__21407;var game_id = cljs.core.nth.call(null,vec__21409,0,null);var card_id = cljs.core.nth.call(null,vec__21409,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__21409,2,null);var map__21410 = p__21408;var map__21410__$1 = ((cljs.core.seq_QMARK_.call(null,map__21410))?cljs.core.apply.call(null,cljs.core.hash_map,map__21410):map__21410);var report = map__21410__$1;var db_after = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21411 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21411,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21411,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21405_SHARP_,p2__21404_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__21404_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21405_SHARP_ * 48.18)),(their_region_offset_y + (p1__21405_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__21404_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21406_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__21406_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__21406_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__21414,p__21415,conn){var vec__21416 = p__21414;var game_id = cljs.core.nth.call(null,vec__21416,0,null);var card_id = cljs.core.nth.call(null,vec__21416,1,null);var _ = cljs.core.nth.call(null,vec__21416,2,null);var ___$1 = cljs.core.nth.call(null,vec__21416,3,null);var map__21417 = p__21415;var map__21417__$1 = ((cljs.core.seq_QMARK_.call(null,map__21417))?cljs.core.apply.call(null,cljs.core.hash_map,map__21417):map__21417);var report = map__21417__$1;var db_after = cljs.core.get.call(null,map__21417__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21418 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21418,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21418,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21413_SHARP_,p2__21412_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__21412_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21413_SHARP_ * 48.18)),(their_region_offset_y + (p1__21413_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__21412_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__21421,p__21422,conn){var vec__21423 = p__21421;var game_id = cljs.core.nth.call(null,vec__21423,0,null);var card_id = cljs.core.nth.call(null,vec__21423,1,null);var suit = cljs.core.nth.call(null,vec__21423,2,null);var rank = cljs.core.nth.call(null,vec__21423,3,null);var map__21424 = p__21422;var map__21424__$1 = ((cljs.core.seq_QMARK_.call(null,map__21424))?cljs.core.apply.call(null,cljs.core.hash_map,map__21424):map__21424);var report = map__21424__$1;var db_after = cljs.core.get.call(null,map__21424__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21425 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21425,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21425,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21420_SHARP_,p2__21419_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__21419_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21420_SHARP_ * 53)),(their_region_offset_y + (p1__21420_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__21426,p__21427,conn){var vec__21428 = p__21426;var game_id = cljs.core.nth.call(null,vec__21428,0,null);var result = cljs.core.nth.call(null,vec__21428,1,null);var map__21429 = p__21427;var map__21429__$1 = ((cljs.core.seq_QMARK_.call(null,map__21429))?cljs.core.apply.call(null,cljs.core.hash_map,map__21429):map__21429);var report = map__21429__$1;var db_after = cljs.core.get.call(null,map__21429__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_21438 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_21439 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_21439,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_21438,restart_button_21439);
return gin.dom_helpers.schedule.call(null,(function (){var iter__17350__auto__ = (function iter__21430(s__21431){return (new cljs.core.LazySeq(null,(function (){var s__21431__$1 = s__21431;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21431__$1);if(temp__4092__auto__)
{var s__21431__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21431__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21431__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21433 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21432 = 0;while(true){
if((i__21432 < size__17349__auto__))
{var card_id = cljs.core._nth.call(null,c__17348__auto__,i__21432);cljs.core.chunk_append.call(null,b__21433,(function (){var map__21436 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__21436__$1 = ((cljs.core.seq_QMARK_.call(null,map__21436))?cljs.core.apply.call(null,cljs.core.hash_map,map__21436):map__21436);var suit = cljs.core.get.call(null,map__21436__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21436__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__21432,map__21436,map__21436__$1,suit,rank,card_id,c__17348__auto__,size__17349__auto__,b__21433,s__21431__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__21432,map__21436,map__21436__$1,suit,rank,card_id,c__17348__auto__,size__17349__auto__,b__21433,s__21431__$2,temp__4092__auto__))
})());
{
var G__21440 = (i__21432 + 1);
i__21432 = G__21440;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21433),iter__21430.call(null,cljs.core.chunk_rest.call(null,s__21431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21433),null);
}
} else
{var card_id = cljs.core.first.call(null,s__21431__$2);return cljs.core.cons.call(null,(function (){var map__21437 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__21437__$1 = ((cljs.core.seq_QMARK_.call(null,map__21437))?cljs.core.apply.call(null,cljs.core.hash_map,map__21437):map__21437);var suit = cljs.core.get.call(null,map__21437__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21437__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__21437,map__21437__$1,suit,rank,card_id,s__21431__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__21437,map__21437__$1,suit,rank,card_id,s__21431__$2,temp__4092__auto__))
})(),iter__21430.call(null,cljs.core.rest.call(null,s__21431__$2)));
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
gin.game_panel.render = (function render(report,conn){var map__21443 = report;var map__21443__$1 = ((cljs.core.seq_QMARK_.call(null,map__21443))?cljs.core.apply.call(null,cljs.core.hash_map,map__21443):map__21443);var db_after = cljs.core.get.call(null,map__21443__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__21444 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__21444,0,null);var args = cljs.core.nth.call(null,vec__21444,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__21475_21505 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__21475_21505,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__21475_21505,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__21475_21505,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17350__auto__ = (function iter__21476(s__21477){return (new cljs.core.LazySeq(null,(function (){var s__21477__$1 = s__21477;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21477__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17346__auto__ = ((function (s__21477__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__21478(s__21479){return (new cljs.core.LazySeq(null,((function (s__21477__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__21479__$1 = s__21479;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__21479__$1);if(temp__4092__auto____$1)
{var s__21479__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21479__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21479__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21481 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21480 = 0;while(true){
if((i__21480 < size__17349__auto__))
{var rank = cljs.core._nth.call(null,c__17348__auto__,i__21480);cljs.core.chunk_append.call(null,b__21481,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__21506 = (i__21480 + 1);
i__21480 = G__21506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21481),iter__21478.call(null,cljs.core.chunk_rest.call(null,s__21479__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21481),null);
}
} else
{var rank = cljs.core.first.call(null,s__21479__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__21478.call(null,cljs.core.rest.call(null,s__21479__$2)));
}
} else
{return null;
}
break;
}
});})(s__21477__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__21477__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17347__auto__ = cljs.core.seq.call(null,iterys__17346__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17347__auto__)
{return cljs.core.concat.call(null,fs__17347__auto__,iter__21476.call(null,cljs.core.rest.call(null,s__21477__$1)));
} else
{{
var G__21507 = cljs.core.rest.call(null,s__21477__$1);
s__21477__$1 = G__21507;
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
})();var vec__21482 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__21482,0,null);var pile_y = cljs.core.nth.call(null,vec__21482,1,null);var cards = (function (){var iter__17350__auto__ = ((function (container_wrap,vec__21482,pile_x,pile_y){
return (function iter__21483(s__21484){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__21482,pile_x,pile_y){
return (function (){var s__21484__$1 = s__21484;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21484__$1);if(temp__4092__auto__)
{var s__21484__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21484__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21484__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21486 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21485 = 0;while(true){
if((i__21485 < size__17349__auto__))
{var i = cljs.core._nth.call(null,c__17348__auto__,i__21485);cljs.core.chunk_append.call(null,b__21486,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__21489 = (new goog.fx.Dragger(card_el));G__21489.setLimits(container_wrap);
return G__21489;
})();card_el.dispose = ((function (i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21485,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__21486,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__21508 = (i__21485 + 1);
i__21485 = G__21508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21486),iter__21483.call(null,cljs.core.chunk_rest.call(null,s__21484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21486),null);
}
} else
{var i = cljs.core.first.call(null,s__21484__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__21490 = (new goog.fx.Dragger(card_el));G__21490.setLimits(container_wrap);
return G__21490;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21484__$2,temp__4092__auto__,container_wrap,vec__21482,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__21483.call(null,cljs.core.rest.call(null,s__21484__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__21482,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__21482,pile_x,pile_y))
;return iter__17350__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__21491_21509 = cljs.core.seq.call(null,cards);var chunk__21492_21510 = null;var count__21493_21511 = 0;var i__21494_21512 = 0;while(true){
if((i__21494_21512 < count__21493_21511))
{var map__21495_21513 = cljs.core._nth.call(null,chunk__21492_21510,i__21494_21512);var map__21495_21514__$1 = ((cljs.core.seq_QMARK_.call(null,map__21495_21513))?cljs.core.apply.call(null,cljs.core.hash_map,map__21495_21513):map__21495_21513);var card_el_21515 = cljs.core.get.call(null,map__21495_21514__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_21515);
{
var G__21516 = seq__21491_21509;
var G__21517 = chunk__21492_21510;
var G__21518 = count__21493_21511;
var G__21519 = (i__21494_21512 + 1);
seq__21491_21509 = G__21516;
chunk__21492_21510 = G__21517;
count__21493_21511 = G__21518;
i__21494_21512 = G__21519;
continue;
}
} else
{var temp__4092__auto___21520 = cljs.core.seq.call(null,seq__21491_21509);if(temp__4092__auto___21520)
{var seq__21491_21521__$1 = temp__4092__auto___21520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21491_21521__$1))
{var c__17381__auto___21522 = cljs.core.chunk_first.call(null,seq__21491_21521__$1);{
var G__21523 = cljs.core.chunk_rest.call(null,seq__21491_21521__$1);
var G__21524 = c__17381__auto___21522;
var G__21525 = cljs.core.count.call(null,c__17381__auto___21522);
var G__21526 = 0;
seq__21491_21509 = G__21523;
chunk__21492_21510 = G__21524;
count__21493_21511 = G__21525;
i__21494_21512 = G__21526;
continue;
}
} else
{var map__21496_21527 = cljs.core.first.call(null,seq__21491_21521__$1);var map__21496_21528__$1 = ((cljs.core.seq_QMARK_.call(null,map__21496_21527))?cljs.core.apply.call(null,cljs.core.hash_map,map__21496_21527):map__21496_21527);var card_el_21529 = cljs.core.get.call(null,map__21496_21528__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_21529);
{
var G__21530 = cljs.core.next.call(null,seq__21491_21521__$1);
var G__21531 = null;
var G__21532 = 0;
var G__21533 = 0;
seq__21491_21509 = G__21530;
chunk__21492_21510 = G__21531;
count__21493_21511 = G__21532;
i__21494_21512 = G__21533;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17350__auto__ = (function iter__21497(s__21498){return (new cljs.core.LazySeq(null,(function (){var s__21498__$1 = s__21498;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21498__$1);if(temp__4092__auto__)
{var s__21498__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21498__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__21498__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__21500 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__21499 = 0;while(true){
if((i__21499 < size__17349__auto__))
{var map__21503 = cljs.core._nth.call(null,c__17348__auto__,i__21499);var map__21503__$1 = ((cljs.core.seq_QMARK_.call(null,map__21503))?cljs.core.apply.call(null,cljs.core.hash_map,map__21503):map__21503);var card_el = cljs.core.get.call(null,map__21503__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__21503__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__21503__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__21500,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__21534 = (i__21499 + 1);
i__21499 = G__21534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21500),iter__21497.call(null,cljs.core.chunk_rest.call(null,s__21498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21500),null);
}
} else
{var map__21504 = cljs.core.first.call(null,s__21498__$2);var map__21504__$1 = ((cljs.core.seq_QMARK_.call(null,map__21504))?cljs.core.apply.call(null,cljs.core.hash_map,map__21504):map__21504);var card_el = cljs.core.get.call(null,map__21504__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__21504__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__21504__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__21497.call(null,cljs.core.rest.call(null,s__21498__$2)));
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
