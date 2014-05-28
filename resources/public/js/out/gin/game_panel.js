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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__18334,p__18335,_){var vec__18336 = p__18334;var game_id = cljs.core.nth.call(null,vec__18336,0,null);var map__18337 = p__18335;var map__18337__$1 = ((cljs.core.seq_QMARK_.call(null,map__18337))?cljs.core.apply.call(null,cljs.core.hash_map,map__18337):map__18337);var db_after = cljs.core.get.call(null,map__18337__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__18338 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__18338__$1 = ((cljs.core.seq_QMARK_.call(null,map__18338))?cljs.core.apply.call(null,cljs.core.hash_map,map__18338):map__18338);var game = map__18338__$1;var turn = cljs.core.get.call(null,map__18338__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__18338__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__18339,___$1,___$2){var vec__18340 = p__18339;var game_id = cljs.core.nth.call(null,vec__18340,0,null);var result = cljs.core.nth.call(null,vec__18340,1,null);var ___$3 = cljs.core.nth.call(null,vec__18340,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__18341 = cljs.core._EQ_;var expr__18342 = result;if(cljs.core.truth_(pred__18341.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__18342)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__18341.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__18342)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__18341.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__18342)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__18341.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__18342)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__18341.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__18342)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__18342)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__18344){var vec__18346 = p__18344;var x = cljs.core.nth.call(null,vec__18346,0,null);var y = cljs.core.nth.call(null,vec__18346,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__18350,p__18351,conn){var vec__18352 = p__18350;var game_id = cljs.core.nth.call(null,vec__18352,0,null);var map__18353 = p__18351;var map__18353__$1 = ((cljs.core.seq_QMARK_.call(null,map__18353))?cljs.core.apply.call(null,cljs.core.hash_map,map__18353):map__18353);var report = map__18353__$1;var db_after = cljs.core.get.call(null,map__18353__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__18347_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__18347_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__18354 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__18354,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__18354,1,null);var vec__18355 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__18355,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__18355,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y){
return (function (p1__18349_SHARP_,p2__18348_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__18348_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__18348_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18349_SHARP_ * 53)),(their_region_offset_y + (p1__18349_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__18357){var map__18358 = p__18357;var map__18358__$1 = ((cljs.core.seq_QMARK_.call(null,map__18358))?cljs.core.apply.call(null,cljs.core.hash_map,map__18358):map__18358);var id = cljs.core.get.call(null,map__18358__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__18358__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__18358__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__18358,map__18358__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__18358,map__18358__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__18358,map__18358__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__18358,map__18358__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__18354,their_region_offset_x,their_region_offset_y,vec__18355,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__18356 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__18356,0,null);var second_deal = cljs.core.nth.call(null,vec__18356,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__18359,p__18360,conn){var vec__18361 = p__18359;var game_id = cljs.core.nth.call(null,vec__18361,0,null);var turn = cljs.core.nth.call(null,vec__18361,1,null);var map__18362 = p__18360;var map__18362__$1 = ((cljs.core.seq_QMARK_.call(null,map__18362))?cljs.core.apply.call(null,cljs.core.hash_map,map__18362):map__18362);var report = map__18362__$1;var db_after = cljs.core.get.call(null,map__18362__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__18363 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__18363__$1 = ((cljs.core.seq_QMARK_.call(null,map__18363))?cljs.core.apply.call(null,cljs.core.hash_map,map__18363):map__18363);var game = map__18363__$1;var turn__$1 = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__18364,p__18365,conn){var vec__18366 = p__18364;var game_id = cljs.core.nth.call(null,vec__18366,0,null);var card_id = cljs.core.nth.call(null,vec__18366,1,null);var map__18367 = p__18365;var map__18367__$1 = ((cljs.core.seq_QMARK_.call(null,map__18367))?cljs.core.apply.call(null,cljs.core.hash_map,map__18367):map__18367);var report = map__18367__$1;var db_after = cljs.core.get.call(null,map__18367__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__18369,p__18370,conn){var vec__18371 = p__18369;var game_id = cljs.core.nth.call(null,vec__18371,0,null);var card_id = cljs.core.nth.call(null,vec__18371,1,null);var suit = cljs.core.nth.call(null,vec__18371,2,null);var rank = cljs.core.nth.call(null,vec__18371,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__18371,4,null);var map__18372 = p__18370;var map__18372__$1 = ((cljs.core.seq_QMARK_.call(null,map__18372))?cljs.core.apply.call(null,cljs.core.hash_map,map__18372):map__18372);var report = map__18372__$1;var db_after = cljs.core.get.call(null,map__18372__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__18373_18377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__18374_18378 = null;var count__18375_18379 = 0;var i__18376_18380 = 0;while(true){
if((i__18376_18380 < count__18375_18379))
{var card_id_18381__$1 = cljs.core._nth.call(null,chunk__18374_18378,i__18376_18380);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_18381__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__18382 = seq__18373_18377;
var G__18383 = chunk__18374_18378;
var G__18384 = count__18375_18379;
var G__18385 = (i__18376_18380 + 1);
seq__18373_18377 = G__18382;
chunk__18374_18378 = G__18383;
count__18375_18379 = G__18384;
i__18376_18380 = G__18385;
continue;
}
} else
{var temp__4092__auto___18386 = cljs.core.seq.call(null,seq__18373_18377);if(temp__4092__auto___18386)
{var seq__18373_18387__$1 = temp__4092__auto___18386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18373_18387__$1))
{var c__17381__auto___18388 = cljs.core.chunk_first.call(null,seq__18373_18387__$1);{
var G__18389 = cljs.core.chunk_rest.call(null,seq__18373_18387__$1);
var G__18390 = c__17381__auto___18388;
var G__18391 = cljs.core.count.call(null,c__17381__auto___18388);
var G__18392 = 0;
seq__18373_18377 = G__18389;
chunk__18374_18378 = G__18390;
count__18375_18379 = G__18391;
i__18376_18380 = G__18392;
continue;
}
} else
{var card_id_18393__$1 = cljs.core.first.call(null,seq__18373_18387__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_18393__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__18394 = cljs.core.next.call(null,seq__18373_18387__$1);
var G__18395 = null;
var G__18396 = 0;
var G__18397 = 0;
seq__18373_18377 = G__18394;
chunk__18374_18378 = G__18395;
count__18375_18379 = G__18396;
i__18376_18380 = G__18397;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18368_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__18368_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__18368_SHARP_,gin.game_panel.pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__18398,p__18399,conn){var vec__18400 = p__18398;var game_id = cljs.core.nth.call(null,vec__18400,0,null);var card_id = cljs.core.nth.call(null,vec__18400,1,null);var map__18401 = p__18399;var map__18401__$1 = ((cljs.core.seq_QMARK_.call(null,map__18401))?cljs.core.apply.call(null,cljs.core.hash_map,map__18401):map__18401);var report = map__18401__$1;var db_after = cljs.core.get.call(null,map__18401__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__18402 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__18402__$1 = ((cljs.core.seq_QMARK_.call(null,map__18402))?cljs.core.apply.call(null,cljs.core.hash_map,map__18402):map__18402);var game = map__18402__$1;var our_cards = cljs.core.get.call(null,map__18402__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__18402__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__18403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__18404 = null;var count__18405 = 0;var i__18406 = 0;while(true){
if((i__18406 < count__18405))
{var card_id__$1 = cljs.core._nth.call(null,chunk__18404,i__18406);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__18407 = seq__18403;
var G__18408 = chunk__18404;
var G__18409 = count__18405;
var G__18410 = (i__18406 + 1);
seq__18403 = G__18407;
chunk__18404 = G__18408;
count__18405 = G__18409;
i__18406 = G__18410;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18403);if(temp__4092__auto__)
{var seq__18403__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18403__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__18403__$1);{
var G__18411 = cljs.core.chunk_rest.call(null,seq__18403__$1);
var G__18412 = c__17381__auto__;
var G__18413 = cljs.core.count.call(null,c__17381__auto__);
var G__18414 = 0;
seq__18403 = G__18411;
chunk__18404 = G__18412;
count__18405 = G__18413;
i__18406 = G__18414;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__18403__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__18415 = cljs.core.next.call(null,seq__18403__$1);
var G__18416 = null;
var G__18417 = 0;
var G__18418 = 0;
seq__18403 = G__18415;
chunk__18404 = G__18416;
count__18405 = G__18417;
i__18406 = G__18418;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__18419,p__18420,conn){var vec__18421 = p__18419;var game_id = cljs.core.nth.call(null,vec__18421,0,null);var card_id = cljs.core.nth.call(null,vec__18421,1,null);var map__18422 = p__18420;var map__18422__$1 = ((cljs.core.seq_QMARK_.call(null,map__18422))?cljs.core.apply.call(null,cljs.core.hash_map,map__18422):map__18422);var report = map__18422__$1;var db_after = cljs.core.get.call(null,map__18422__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__18423 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__18424 = null;var count__18425 = 0;var i__18426 = 0;while(true){
if((i__18426 < count__18425))
{var card_id__$1 = cljs.core._nth.call(null,chunk__18424,i__18426);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__18427 = seq__18423;
var G__18428 = chunk__18424;
var G__18429 = count__18425;
var G__18430 = (i__18426 + 1);
seq__18423 = G__18427;
chunk__18424 = G__18428;
count__18425 = G__18429;
i__18426 = G__18430;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18423);if(temp__4092__auto__)
{var seq__18423__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18423__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__18423__$1);{
var G__18431 = cljs.core.chunk_rest.call(null,seq__18423__$1);
var G__18432 = c__17381__auto__;
var G__18433 = cljs.core.count.call(null,c__17381__auto__);
var G__18434 = 0;
seq__18423 = G__18431;
chunk__18424 = G__18432;
count__18425 = G__18433;
i__18426 = G__18434;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__18423__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__18435 = cljs.core.next.call(null,seq__18423__$1);
var G__18436 = null;
var G__18437 = 0;
var G__18438 = 0;
seq__18423 = G__18435;
chunk__18424 = G__18436;
count__18425 = G__18437;
i__18426 = G__18438;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__18442,p__18443,conn){var vec__18444 = p__18442;var game_id = cljs.core.nth.call(null,vec__18444,0,null);var card_id = cljs.core.nth.call(null,vec__18444,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__18444,2,null);var map__18445 = p__18443;var map__18445__$1 = ((cljs.core.seq_QMARK_.call(null,map__18445))?cljs.core.apply.call(null,cljs.core.hash_map,map__18445):map__18445);var report = map__18445__$1;var db_after = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__18446 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__18446,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__18446,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18440_SHARP_,p2__18439_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__18439_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18440_SHARP_ * 48.18)),(their_region_offset_y + (p1__18440_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__18439_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18441_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__18441_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__18441_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__18449,p__18450,conn){var vec__18451 = p__18449;var game_id = cljs.core.nth.call(null,vec__18451,0,null);var card_id = cljs.core.nth.call(null,vec__18451,1,null);var _ = cljs.core.nth.call(null,vec__18451,2,null);var ___$1 = cljs.core.nth.call(null,vec__18451,3,null);var map__18452 = p__18450;var map__18452__$1 = ((cljs.core.seq_QMARK_.call(null,map__18452))?cljs.core.apply.call(null,cljs.core.hash_map,map__18452):map__18452);var report = map__18452__$1;var db_after = cljs.core.get.call(null,map__18452__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__18453 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__18453,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__18453,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18448_SHARP_,p2__18447_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__18447_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18448_SHARP_ * 48.18)),(their_region_offset_y + (p1__18448_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__18447_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__18456,p__18457,conn){var vec__18458 = p__18456;var game_id = cljs.core.nth.call(null,vec__18458,0,null);var card_id = cljs.core.nth.call(null,vec__18458,1,null);var suit = cljs.core.nth.call(null,vec__18458,2,null);var rank = cljs.core.nth.call(null,vec__18458,3,null);var map__18459 = p__18457;var map__18459__$1 = ((cljs.core.seq_QMARK_.call(null,map__18459))?cljs.core.apply.call(null,cljs.core.hash_map,map__18459):map__18459);var report = map__18459__$1;var db_after = cljs.core.get.call(null,map__18459__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__18460 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__18460,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__18460,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18455_SHARP_,p2__18454_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__18454_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18455_SHARP_ * 53)),(their_region_offset_y + (p1__18455_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__18461,p__18462,conn){var vec__18463 = p__18461;var game_id = cljs.core.nth.call(null,vec__18463,0,null);var result = cljs.core.nth.call(null,vec__18463,1,null);var map__18464 = p__18462;var map__18464__$1 = ((cljs.core.seq_QMARK_.call(null,map__18464))?cljs.core.apply.call(null,cljs.core.hash_map,map__18464):map__18464);var report = map__18464__$1;var db_after = cljs.core.get.call(null,map__18464__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_18473 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_18474 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_18474,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_18473,restart_button_18474);
return gin.dom_helpers.schedule.call(null,(function (){var iter__17350__auto__ = (function iter__18465(s__18466){return (new cljs.core.LazySeq(null,(function (){var s__18466__$1 = s__18466;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18466__$1);if(temp__4092__auto__)
{var s__18466__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18466__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__18466__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__18468 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__18467 = 0;while(true){
if((i__18467 < size__17349__auto__))
{var card_id = cljs.core._nth.call(null,c__17348__auto__,i__18467);cljs.core.chunk_append.call(null,b__18468,(function (){var map__18471 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__18471__$1 = ((cljs.core.seq_QMARK_.call(null,map__18471))?cljs.core.apply.call(null,cljs.core.hash_map,map__18471):map__18471);var suit = cljs.core.get.call(null,map__18471__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__18471__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__18467,map__18471,map__18471__$1,suit,rank,card_id,c__17348__auto__,size__17349__auto__,b__18468,s__18466__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__18467,map__18471,map__18471__$1,suit,rank,card_id,c__17348__auto__,size__17349__auto__,b__18468,s__18466__$2,temp__4092__auto__))
})());
{
var G__18475 = (i__18467 + 1);
i__18467 = G__18475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18468),iter__18465.call(null,cljs.core.chunk_rest.call(null,s__18466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18468),null);
}
} else
{var card_id = cljs.core.first.call(null,s__18466__$2);return cljs.core.cons.call(null,(function (){var map__18472 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__18472__$1 = ((cljs.core.seq_QMARK_.call(null,map__18472))?cljs.core.apply.call(null,cljs.core.hash_map,map__18472):map__18472);var suit = cljs.core.get.call(null,map__18472__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__18472__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__18472,map__18472__$1,suit,rank,card_id,s__18466__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__18472,map__18472__$1,suit,rank,card_id,s__18466__$2,temp__4092__auto__))
})(),iter__18465.call(null,cljs.core.rest.call(null,s__18466__$2)));
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
gin.game_panel.render = (function render(report,conn){var map__18478 = report;var map__18478__$1 = ((cljs.core.seq_QMARK_.call(null,map__18478))?cljs.core.apply.call(null,cljs.core.hash_map,map__18478):map__18478);var db_after = cljs.core.get.call(null,map__18478__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__18479 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__18479,0,null);var args = cljs.core.nth.call(null,vec__18479,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__18510_18540 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__18510_18540,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__18510_18540,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__18510_18540,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17350__auto__ = (function iter__18511(s__18512){return (new cljs.core.LazySeq(null,(function (){var s__18512__$1 = s__18512;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18512__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17346__auto__ = ((function (s__18512__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__18513(s__18514){return (new cljs.core.LazySeq(null,((function (s__18512__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__18514__$1 = s__18514;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18514__$1);if(temp__4092__auto____$1)
{var s__18514__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18514__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__18514__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__18516 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__18515 = 0;while(true){
if((i__18515 < size__17349__auto__))
{var rank = cljs.core._nth.call(null,c__17348__auto__,i__18515);cljs.core.chunk_append.call(null,b__18516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__18541 = (i__18515 + 1);
i__18515 = G__18541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18516),iter__18513.call(null,cljs.core.chunk_rest.call(null,s__18514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18516),null);
}
} else
{var rank = cljs.core.first.call(null,s__18514__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__18513.call(null,cljs.core.rest.call(null,s__18514__$2)));
}
} else
{return null;
}
break;
}
});})(s__18512__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__18512__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17347__auto__ = cljs.core.seq.call(null,iterys__17346__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17347__auto__)
{return cljs.core.concat.call(null,fs__17347__auto__,iter__18511.call(null,cljs.core.rest.call(null,s__18512__$1)));
} else
{{
var G__18542 = cljs.core.rest.call(null,s__18512__$1);
s__18512__$1 = G__18542;
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
})();var vec__18517 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__18517,0,null);var pile_y = cljs.core.nth.call(null,vec__18517,1,null);var cards = (function (){var iter__17350__auto__ = ((function (container_wrap,vec__18517,pile_x,pile_y){
return (function iter__18518(s__18519){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__18517,pile_x,pile_y){
return (function (){var s__18519__$1 = s__18519;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18519__$1);if(temp__4092__auto__)
{var s__18519__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18519__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__18519__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__18521 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__18520 = 0;while(true){
if((i__18520 < size__17349__auto__))
{var i = cljs.core._nth.call(null,c__17348__auto__,i__18520);cljs.core.chunk_append.call(null,b__18521,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__18524 = (new goog.fx.Dragger(card_el));G__18524.setLimits(container_wrap);
return G__18524;
})();card_el.dispose = ((function (i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__18520,card_id,card_el,dragger,i,c__17348__auto__,size__17349__auto__,b__18521,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__18543 = (i__18520 + 1);
i__18520 = G__18543;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18521),iter__18518.call(null,cljs.core.chunk_rest.call(null,s__18519__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18521),null);
}
} else
{var i = cljs.core.first.call(null,s__18519__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__18525 = (new goog.fx.Dragger(card_el));G__18525.setLimits(container_wrap);
return G__18525;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__18519__$2,temp__4092__auto__,container_wrap,vec__18517,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__18518.call(null,cljs.core.rest.call(null,s__18519__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__18517,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__18517,pile_x,pile_y))
;return iter__17350__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__18526_18544 = cljs.core.seq.call(null,cards);var chunk__18527_18545 = null;var count__18528_18546 = 0;var i__18529_18547 = 0;while(true){
if((i__18529_18547 < count__18528_18546))
{var map__18530_18548 = cljs.core._nth.call(null,chunk__18527_18545,i__18529_18547);var map__18530_18549__$1 = ((cljs.core.seq_QMARK_.call(null,map__18530_18548))?cljs.core.apply.call(null,cljs.core.hash_map,map__18530_18548):map__18530_18548);var card_el_18550 = cljs.core.get.call(null,map__18530_18549__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_18550);
{
var G__18551 = seq__18526_18544;
var G__18552 = chunk__18527_18545;
var G__18553 = count__18528_18546;
var G__18554 = (i__18529_18547 + 1);
seq__18526_18544 = G__18551;
chunk__18527_18545 = G__18552;
count__18528_18546 = G__18553;
i__18529_18547 = G__18554;
continue;
}
} else
{var temp__4092__auto___18555 = cljs.core.seq.call(null,seq__18526_18544);if(temp__4092__auto___18555)
{var seq__18526_18556__$1 = temp__4092__auto___18555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18526_18556__$1))
{var c__17381__auto___18557 = cljs.core.chunk_first.call(null,seq__18526_18556__$1);{
var G__18558 = cljs.core.chunk_rest.call(null,seq__18526_18556__$1);
var G__18559 = c__17381__auto___18557;
var G__18560 = cljs.core.count.call(null,c__17381__auto___18557);
var G__18561 = 0;
seq__18526_18544 = G__18558;
chunk__18527_18545 = G__18559;
count__18528_18546 = G__18560;
i__18529_18547 = G__18561;
continue;
}
} else
{var map__18531_18562 = cljs.core.first.call(null,seq__18526_18556__$1);var map__18531_18563__$1 = ((cljs.core.seq_QMARK_.call(null,map__18531_18562))?cljs.core.apply.call(null,cljs.core.hash_map,map__18531_18562):map__18531_18562);var card_el_18564 = cljs.core.get.call(null,map__18531_18563__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_18564);
{
var G__18565 = cljs.core.next.call(null,seq__18526_18556__$1);
var G__18566 = null;
var G__18567 = 0;
var G__18568 = 0;
seq__18526_18544 = G__18565;
chunk__18527_18545 = G__18566;
count__18528_18546 = G__18567;
i__18529_18547 = G__18568;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17350__auto__ = (function iter__18532(s__18533){return (new cljs.core.LazySeq(null,(function (){var s__18533__$1 = s__18533;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18533__$1);if(temp__4092__auto__)
{var s__18533__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18533__$2))
{var c__17348__auto__ = cljs.core.chunk_first.call(null,s__18533__$2);var size__17349__auto__ = cljs.core.count.call(null,c__17348__auto__);var b__18535 = cljs.core.chunk_buffer.call(null,size__17349__auto__);if((function (){var i__18534 = 0;while(true){
if((i__18534 < size__17349__auto__))
{var map__18538 = cljs.core._nth.call(null,c__17348__auto__,i__18534);var map__18538__$1 = ((cljs.core.seq_QMARK_.call(null,map__18538))?cljs.core.apply.call(null,cljs.core.hash_map,map__18538):map__18538);var card_el = cljs.core.get.call(null,map__18538__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__18538__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__18538__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__18535,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__18569 = (i__18534 + 1);
i__18534 = G__18569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18535),iter__18532.call(null,cljs.core.chunk_rest.call(null,s__18533__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18535),null);
}
} else
{var map__18539 = cljs.core.first.call(null,s__18533__$2);var map__18539__$1 = ((cljs.core.seq_QMARK_.call(null,map__18539))?cljs.core.apply.call(null,cljs.core.hash_map,map__18539):map__18539);var card_el = cljs.core.get.call(null,map__18539__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__18539__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__18539__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__18532.call(null,cljs.core.rest.call(null,s__18533__$2)));
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
