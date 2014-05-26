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
gin.game_panel.msg = (function (){var method_table__17354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17358__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("msg",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17358__auto__,method_table__17354__auto__,prefer_table__17355__auto__,method_cache__17356__auto__,cached_hierarchy__17357__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Dealing ...");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Ready");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__19347,p__19348,_){var vec__19349 = p__19347;var game_id = cljs.core.nth.call(null,vec__19349,0,null);var map__19350 = p__19348;var map__19350__$1 = ((cljs.core.seq_QMARK_.call(null,map__19350))?cljs.core.apply.call(null,cljs.core.hash_map,map__19350):map__19350);var db_after = cljs.core.get.call(null,map__19350__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__19351 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__19351__$1 = ((cljs.core.seq_QMARK_.call(null,map__19351))?cljs.core.apply.call(null,cljs.core.hash_map,map__19351):map__19351);var game = map__19351__$1;var turn = cljs.core.get.call(null,map__19351__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__19351__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__19352,___$1,___$2){var vec__19353 = p__19352;var game_id = cljs.core.nth.call(null,vec__19353,0,null);var result = cljs.core.nth.call(null,vec__19353,1,null);var ___$3 = cljs.core.nth.call(null,vec__19353,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__19354 = cljs.core._EQ_;var expr__19355 = result;if(cljs.core.truth_(pred__19354.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__19355)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__19354.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__19355)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__19354.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__19355)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__19354.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__19355)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__19354.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__19355)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19355)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__19357){var vec__19359 = p__19357;var x = cljs.core.nth.call(null,vec__19359,0,null);var y = cljs.core.nth.call(null,vec__19359,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.handle = (function (){var method_table__17354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17358__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17358__auto__,method_table__17354__auto__,prefer_table__17355__auto__,method_cache__17356__auto__,cached_hierarchy__17357__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__19363,p__19364,conn){var vec__19365 = p__19363;var game_id = cljs.core.nth.call(null,vec__19365,0,null);var map__19366 = p__19364;var map__19366__$1 = ((cljs.core.seq_QMARK_.call(null,map__19366))?cljs.core.apply.call(null,cljs.core.hash_map,map__19366):map__19366);var report = map__19366__$1;var db_after = cljs.core.get.call(null,map__19366__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__19360_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__19360_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__19367 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__19367,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__19367,1,null);var vec__19368 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__19368,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__19368,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y){
return (function (p1__19362_SHARP_,p2__19361_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__19361_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__19361_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__19362_SHARP_ * 53)),(their_region_offset_y + (p1__19362_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__19370){var map__19371 = p__19370;var map__19371__$1 = ((cljs.core.seq_QMARK_.call(null,map__19371))?cljs.core.apply.call(null,cljs.core.hash_map,map__19371):map__19371);var id = cljs.core.get.call(null,map__19371__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__19371__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__19371__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__19371,map__19371__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__19371,map__19371__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__19371,map__19371__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__19371,map__19371__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__19367,their_region_offset_x,their_region_offset_y,vec__19368,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__19369 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__19369,0,null);var second_deal = cljs.core.nth.call(null,vec__19369,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__19372,p__19373,conn){var vec__19374 = p__19372;var game_id = cljs.core.nth.call(null,vec__19374,0,null);var turn = cljs.core.nth.call(null,vec__19374,1,null);var map__19375 = p__19373;var map__19375__$1 = ((cljs.core.seq_QMARK_.call(null,map__19375))?cljs.core.apply.call(null,cljs.core.hash_map,map__19375):map__19375);var report = map__19375__$1;var db_after = cljs.core.get.call(null,map__19375__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__19376 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__19376__$1 = ((cljs.core.seq_QMARK_.call(null,map__19376))?cljs.core.apply.call(null,cljs.core.hash_map,map__19376):map__19376);var game = map__19376__$1;var turn__$1 = cljs.core.get.call(null,map__19376__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__19376__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__19377,p__19378,conn){var vec__19379 = p__19377;var game_id = cljs.core.nth.call(null,vec__19379,0,null);var card_id = cljs.core.nth.call(null,vec__19379,1,null);var map__19380 = p__19378;var map__19380__$1 = ((cljs.core.seq_QMARK_.call(null,map__19380))?cljs.core.apply.call(null,cljs.core.hash_map,map__19380):map__19380);var report = map__19380__$1;var db_after = cljs.core.get.call(null,map__19380__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__19382,p__19383,conn){var vec__19384 = p__19382;var game_id = cljs.core.nth.call(null,vec__19384,0,null);var card_id = cljs.core.nth.call(null,vec__19384,1,null);var suit = cljs.core.nth.call(null,vec__19384,2,null);var rank = cljs.core.nth.call(null,vec__19384,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__19384,4,null);var map__19385 = p__19383;var map__19385__$1 = ((cljs.core.seq_QMARK_.call(null,map__19385))?cljs.core.apply.call(null,cljs.core.hash_map,map__19385):map__19385);var report = map__19385__$1;var db_after = cljs.core.get.call(null,map__19385__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__19386_19390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__19387_19391 = null;var count__19388_19392 = 0;var i__19389_19393 = 0;while(true){
if((i__19389_19393 < count__19388_19392))
{var card_id_19394__$1 = cljs.core._nth.call(null,chunk__19387_19391,i__19389_19393);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_19394__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__19395 = seq__19386_19390;
var G__19396 = chunk__19387_19391;
var G__19397 = count__19388_19392;
var G__19398 = (i__19389_19393 + 1);
seq__19386_19390 = G__19395;
chunk__19387_19391 = G__19396;
count__19388_19392 = G__19397;
i__19389_19393 = G__19398;
continue;
}
} else
{var temp__4092__auto___19399 = cljs.core.seq.call(null,seq__19386_19390);if(temp__4092__auto___19399)
{var seq__19386_19400__$1 = temp__4092__auto___19399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19386_19400__$1))
{var c__17244__auto___19401 = cljs.core.chunk_first.call(null,seq__19386_19400__$1);{
var G__19402 = cljs.core.chunk_rest.call(null,seq__19386_19400__$1);
var G__19403 = c__17244__auto___19401;
var G__19404 = cljs.core.count.call(null,c__17244__auto___19401);
var G__19405 = 0;
seq__19386_19390 = G__19402;
chunk__19387_19391 = G__19403;
count__19388_19392 = G__19404;
i__19389_19393 = G__19405;
continue;
}
} else
{var card_id_19406__$1 = cljs.core.first.call(null,seq__19386_19400__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_19406__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__19407 = cljs.core.next.call(null,seq__19386_19400__$1);
var G__19408 = null;
var G__19409 = 0;
var G__19410 = 0;
seq__19386_19390 = G__19407;
chunk__19387_19391 = G__19408;
count__19388_19392 = G__19409;
i__19389_19393 = G__19410;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__19381_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__19381_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__19381_SHARP_,gin.game_panel.pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__19411,p__19412,conn){var vec__19413 = p__19411;var game_id = cljs.core.nth.call(null,vec__19413,0,null);var card_id = cljs.core.nth.call(null,vec__19413,1,null);var map__19414 = p__19412;var map__19414__$1 = ((cljs.core.seq_QMARK_.call(null,map__19414))?cljs.core.apply.call(null,cljs.core.hash_map,map__19414):map__19414);var report = map__19414__$1;var db_after = cljs.core.get.call(null,map__19414__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__19415 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__19415__$1 = ((cljs.core.seq_QMARK_.call(null,map__19415))?cljs.core.apply.call(null,cljs.core.hash_map,map__19415):map__19415);var game = map__19415__$1;var our_cards = cljs.core.get.call(null,map__19415__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__19415__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__19416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__19417 = null;var count__19418 = 0;var i__19419 = 0;while(true){
if((i__19419 < count__19418))
{var card_id__$1 = cljs.core._nth.call(null,chunk__19417,i__19419);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__19420 = seq__19416;
var G__19421 = chunk__19417;
var G__19422 = count__19418;
var G__19423 = (i__19419 + 1);
seq__19416 = G__19420;
chunk__19417 = G__19421;
count__19418 = G__19422;
i__19419 = G__19423;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19416);if(temp__4092__auto__)
{var seq__19416__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19416__$1))
{var c__17244__auto__ = cljs.core.chunk_first.call(null,seq__19416__$1);{
var G__19424 = cljs.core.chunk_rest.call(null,seq__19416__$1);
var G__19425 = c__17244__auto__;
var G__19426 = cljs.core.count.call(null,c__17244__auto__);
var G__19427 = 0;
seq__19416 = G__19424;
chunk__19417 = G__19425;
count__19418 = G__19426;
i__19419 = G__19427;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__19416__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__19428 = cljs.core.next.call(null,seq__19416__$1);
var G__19429 = null;
var G__19430 = 0;
var G__19431 = 0;
seq__19416 = G__19428;
chunk__19417 = G__19429;
count__19418 = G__19430;
i__19419 = G__19431;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__19432,p__19433,conn){var vec__19434 = p__19432;var game_id = cljs.core.nth.call(null,vec__19434,0,null);var card_id = cljs.core.nth.call(null,vec__19434,1,null);var map__19435 = p__19433;var map__19435__$1 = ((cljs.core.seq_QMARK_.call(null,map__19435))?cljs.core.apply.call(null,cljs.core.hash_map,map__19435):map__19435);var report = map__19435__$1;var db_after = cljs.core.get.call(null,map__19435__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__19436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__19437 = null;var count__19438 = 0;var i__19439 = 0;while(true){
if((i__19439 < count__19438))
{var card_id__$1 = cljs.core._nth.call(null,chunk__19437,i__19439);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__19440 = seq__19436;
var G__19441 = chunk__19437;
var G__19442 = count__19438;
var G__19443 = (i__19439 + 1);
seq__19436 = G__19440;
chunk__19437 = G__19441;
count__19438 = G__19442;
i__19439 = G__19443;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19436);if(temp__4092__auto__)
{var seq__19436__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19436__$1))
{var c__17244__auto__ = cljs.core.chunk_first.call(null,seq__19436__$1);{
var G__19444 = cljs.core.chunk_rest.call(null,seq__19436__$1);
var G__19445 = c__17244__auto__;
var G__19446 = cljs.core.count.call(null,c__17244__auto__);
var G__19447 = 0;
seq__19436 = G__19444;
chunk__19437 = G__19445;
count__19438 = G__19446;
i__19439 = G__19447;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__19436__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__19448 = cljs.core.next.call(null,seq__19436__$1);
var G__19449 = null;
var G__19450 = 0;
var G__19451 = 0;
seq__19436 = G__19448;
chunk__19437 = G__19449;
count__19438 = G__19450;
i__19439 = G__19451;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__19455,p__19456,conn){var vec__19457 = p__19455;var game_id = cljs.core.nth.call(null,vec__19457,0,null);var card_id = cljs.core.nth.call(null,vec__19457,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__19457,2,null);var map__19458 = p__19456;var map__19458__$1 = ((cljs.core.seq_QMARK_.call(null,map__19458))?cljs.core.apply.call(null,cljs.core.hash_map,map__19458):map__19458);var report = map__19458__$1;var db_after = cljs.core.get.call(null,map__19458__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__19459 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__19459,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__19459,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__19453_SHARP_,p2__19452_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__19452_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__19453_SHARP_ * 48.18)),(their_region_offset_y + (p1__19453_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__19452_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__19454_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__19454_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__19454_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__19462,p__19463,conn){var vec__19464 = p__19462;var game_id = cljs.core.nth.call(null,vec__19464,0,null);var card_id = cljs.core.nth.call(null,vec__19464,1,null);var _ = cljs.core.nth.call(null,vec__19464,2,null);var ___$1 = cljs.core.nth.call(null,vec__19464,3,null);var map__19465 = p__19463;var map__19465__$1 = ((cljs.core.seq_QMARK_.call(null,map__19465))?cljs.core.apply.call(null,cljs.core.hash_map,map__19465):map__19465);var report = map__19465__$1;var db_after = cljs.core.get.call(null,map__19465__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__19466 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__19466,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__19466,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__19461_SHARP_,p2__19460_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__19460_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__19461_SHARP_ * 48.18)),(their_region_offset_y + (p1__19461_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__19460_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__19469,p__19470,conn){var vec__19471 = p__19469;var game_id = cljs.core.nth.call(null,vec__19471,0,null);var card_id = cljs.core.nth.call(null,vec__19471,1,null);var suit = cljs.core.nth.call(null,vec__19471,2,null);var rank = cljs.core.nth.call(null,vec__19471,3,null);var map__19472 = p__19470;var map__19472__$1 = ((cljs.core.seq_QMARK_.call(null,map__19472))?cljs.core.apply.call(null,cljs.core.hash_map,map__19472):map__19472);var report = map__19472__$1;var db_after = cljs.core.get.call(null,map__19472__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__19473 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__19473,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__19473,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__19468_SHARP_,p2__19467_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__19467_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__19468_SHARP_ * 53)),(their_region_offset_y + (p1__19468_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__19474,p__19475,conn){var vec__19476 = p__19474;var game_id = cljs.core.nth.call(null,vec__19476,0,null);var result = cljs.core.nth.call(null,vec__19476,1,null);var map__19477 = p__19475;var map__19477__$1 = ((cljs.core.seq_QMARK_.call(null,map__19477))?cljs.core.apply.call(null,cljs.core.hash_map,map__19477):map__19477);var report = map__19477__$1;var db_after = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_19486 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_19487 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_19487,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_19486,restart_button_19487);
return gin.dom_helpers.schedule.call(null,(function (){var iter__17213__auto__ = (function iter__19478(s__19479){return (new cljs.core.LazySeq(null,(function (){var s__19479__$1 = s__19479;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19479__$1);if(temp__4092__auto__)
{var s__19479__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19479__$2))
{var c__17211__auto__ = cljs.core.chunk_first.call(null,s__19479__$2);var size__17212__auto__ = cljs.core.count.call(null,c__17211__auto__);var b__19481 = cljs.core.chunk_buffer.call(null,size__17212__auto__);if((function (){var i__19480 = 0;while(true){
if((i__19480 < size__17212__auto__))
{var card_id = cljs.core._nth.call(null,c__17211__auto__,i__19480);cljs.core.chunk_append.call(null,b__19481,(function (){var map__19484 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__19484__$1 = ((cljs.core.seq_QMARK_.call(null,map__19484))?cljs.core.apply.call(null,cljs.core.hash_map,map__19484):map__19484);var suit = cljs.core.get.call(null,map__19484__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__19484__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__19480,map__19484,map__19484__$1,suit,rank,card_id,c__17211__auto__,size__17212__auto__,b__19481,s__19479__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__19480,map__19484,map__19484__$1,suit,rank,card_id,c__17211__auto__,size__17212__auto__,b__19481,s__19479__$2,temp__4092__auto__))
})());
{
var G__19488 = (i__19480 + 1);
i__19480 = G__19488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19481),iter__19478.call(null,cljs.core.chunk_rest.call(null,s__19479__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19481),null);
}
} else
{var card_id = cljs.core.first.call(null,s__19479__$2);return cljs.core.cons.call(null,(function (){var map__19485 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__19485__$1 = ((cljs.core.seq_QMARK_.call(null,map__19485))?cljs.core.apply.call(null,cljs.core.hash_map,map__19485):map__19485);var suit = cljs.core.get.call(null,map__19485__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__19485__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__19485,map__19485__$1,suit,rank,card_id,s__19479__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__19485,map__19485__$1,suit,rank,card_id,s__19479__$2,temp__4092__auto__))
})(),iter__19478.call(null,cljs.core.rest.call(null,s__19479__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17213__auto__.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));
})());
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__19491 = report;var map__19491__$1 = ((cljs.core.seq_QMARK_.call(null,map__19491))?cljs.core.apply.call(null,cljs.core.hash_map,map__19491):map__19491);var db_after = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__19492 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__19492,0,null);var args = cljs.core.nth.call(null,vec__19492,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__19523_19553 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__19523_19553,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__19523_19553,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__19523_19553,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17213__auto__ = (function iter__19524(s__19525){return (new cljs.core.LazySeq(null,(function (){var s__19525__$1 = s__19525;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19525__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17209__auto__ = ((function (s__19525__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__19526(s__19527){return (new cljs.core.LazySeq(null,((function (s__19525__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__19527__$1 = s__19527;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__19527__$1);if(temp__4092__auto____$1)
{var s__19527__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19527__$2))
{var c__17211__auto__ = cljs.core.chunk_first.call(null,s__19527__$2);var size__17212__auto__ = cljs.core.count.call(null,c__17211__auto__);var b__19529 = cljs.core.chunk_buffer.call(null,size__17212__auto__);if((function (){var i__19528 = 0;while(true){
if((i__19528 < size__17212__auto__))
{var rank = cljs.core._nth.call(null,c__17211__auto__,i__19528);cljs.core.chunk_append.call(null,b__19529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__19554 = (i__19528 + 1);
i__19528 = G__19554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19529),iter__19526.call(null,cljs.core.chunk_rest.call(null,s__19527__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19529),null);
}
} else
{var rank = cljs.core.first.call(null,s__19527__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__19526.call(null,cljs.core.rest.call(null,s__19527__$2)));
}
} else
{return null;
}
break;
}
});})(s__19525__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__19525__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17210__auto__ = cljs.core.seq.call(null,iterys__17209__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17210__auto__)
{return cljs.core.concat.call(null,fs__17210__auto__,iter__19524.call(null,cljs.core.rest.call(null,s__19525__$1)));
} else
{{
var G__19555 = cljs.core.rest.call(null,s__19525__$1);
s__19525__$1 = G__19555;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17213__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"spade","spade",1123542167)], null));
})())));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__19530 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__19530,0,null);var pile_y = cljs.core.nth.call(null,vec__19530,1,null);var cards = (function (){var iter__17213__auto__ = ((function (container_wrap,vec__19530,pile_x,pile_y){
return (function iter__19531(s__19532){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__19530,pile_x,pile_y){
return (function (){var s__19532__$1 = s__19532;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19532__$1);if(temp__4092__auto__)
{var s__19532__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19532__$2))
{var c__17211__auto__ = cljs.core.chunk_first.call(null,s__19532__$2);var size__17212__auto__ = cljs.core.count.call(null,c__17211__auto__);var b__19534 = cljs.core.chunk_buffer.call(null,size__17212__auto__);if((function (){var i__19533 = 0;while(true){
if((i__19533 < size__17212__auto__))
{var i = cljs.core._nth.call(null,c__17211__auto__,i__19533);cljs.core.chunk_append.call(null,b__19534,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__19537 = (new goog.fx.Dragger(card_el));G__19537.setLimits(container_wrap);
return G__19537;
})();card_el.dispose = ((function (i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__19533,card_id,card_el,dragger,i,c__17211__auto__,size__17212__auto__,b__19534,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__19556 = (i__19533 + 1);
i__19533 = G__19556;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19534),iter__19531.call(null,cljs.core.chunk_rest.call(null,s__19532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19534),null);
}
} else
{var i = cljs.core.first.call(null,s__19532__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__19538 = (new goog.fx.Dragger(card_el));G__19538.setLimits(container_wrap);
return G__19538;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__19532__$2,temp__4092__auto__,container_wrap,vec__19530,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__19531.call(null,cljs.core.rest.call(null,s__19532__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__19530,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__19530,pile_x,pile_y))
;return iter__17213__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__19539_19557 = cljs.core.seq.call(null,cards);var chunk__19540_19558 = null;var count__19541_19559 = 0;var i__19542_19560 = 0;while(true){
if((i__19542_19560 < count__19541_19559))
{var map__19543_19561 = cljs.core._nth.call(null,chunk__19540_19558,i__19542_19560);var map__19543_19562__$1 = ((cljs.core.seq_QMARK_.call(null,map__19543_19561))?cljs.core.apply.call(null,cljs.core.hash_map,map__19543_19561):map__19543_19561);var card_el_19563 = cljs.core.get.call(null,map__19543_19562__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_19563);
{
var G__19564 = seq__19539_19557;
var G__19565 = chunk__19540_19558;
var G__19566 = count__19541_19559;
var G__19567 = (i__19542_19560 + 1);
seq__19539_19557 = G__19564;
chunk__19540_19558 = G__19565;
count__19541_19559 = G__19566;
i__19542_19560 = G__19567;
continue;
}
} else
{var temp__4092__auto___19568 = cljs.core.seq.call(null,seq__19539_19557);if(temp__4092__auto___19568)
{var seq__19539_19569__$1 = temp__4092__auto___19568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19539_19569__$1))
{var c__17244__auto___19570 = cljs.core.chunk_first.call(null,seq__19539_19569__$1);{
var G__19571 = cljs.core.chunk_rest.call(null,seq__19539_19569__$1);
var G__19572 = c__17244__auto___19570;
var G__19573 = cljs.core.count.call(null,c__17244__auto___19570);
var G__19574 = 0;
seq__19539_19557 = G__19571;
chunk__19540_19558 = G__19572;
count__19541_19559 = G__19573;
i__19542_19560 = G__19574;
continue;
}
} else
{var map__19544_19575 = cljs.core.first.call(null,seq__19539_19569__$1);var map__19544_19576__$1 = ((cljs.core.seq_QMARK_.call(null,map__19544_19575))?cljs.core.apply.call(null,cljs.core.hash_map,map__19544_19575):map__19544_19575);var card_el_19577 = cljs.core.get.call(null,map__19544_19576__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_19577);
{
var G__19578 = cljs.core.next.call(null,seq__19539_19569__$1);
var G__19579 = null;
var G__19580 = 0;
var G__19581 = 0;
seq__19539_19557 = G__19578;
chunk__19540_19558 = G__19579;
count__19541_19559 = G__19580;
i__19542_19560 = G__19581;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17213__auto__ = (function iter__19545(s__19546){return (new cljs.core.LazySeq(null,(function (){var s__19546__$1 = s__19546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19546__$1);if(temp__4092__auto__)
{var s__19546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19546__$2))
{var c__17211__auto__ = cljs.core.chunk_first.call(null,s__19546__$2);var size__17212__auto__ = cljs.core.count.call(null,c__17211__auto__);var b__19548 = cljs.core.chunk_buffer.call(null,size__17212__auto__);if((function (){var i__19547 = 0;while(true){
if((i__19547 < size__17212__auto__))
{var map__19551 = cljs.core._nth.call(null,c__17211__auto__,i__19547);var map__19551__$1 = ((cljs.core.seq_QMARK_.call(null,map__19551))?cljs.core.apply.call(null,cljs.core.hash_map,map__19551):map__19551);var card_el = cljs.core.get.call(null,map__19551__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__19551__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__19551__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__19548,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__19582 = (i__19547 + 1);
i__19547 = G__19582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19548),iter__19545.call(null,cljs.core.chunk_rest.call(null,s__19546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19548),null);
}
} else
{var map__19552 = cljs.core.first.call(null,s__19546__$2);var map__19552__$1 = ((cljs.core.seq_QMARK_.call(null,map__19552))?cljs.core.apply.call(null,cljs.core.hash_map,map__19552):map__19552);var card_el = cljs.core.get.call(null,map__19552__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__19552__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__19552__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__19545.call(null,cljs.core.rest.call(null,s__19546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17213__auto__.call(null,cards);
})());
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.render.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
