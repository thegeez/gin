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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__30632,p__30633,_){var vec__30634 = p__30632;var game_id = cljs.core.nth.call(null,vec__30634,0,null);var map__30635 = p__30633;var map__30635__$1 = ((cljs.core.seq_QMARK_.call(null,map__30635))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);var db_after = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__30636 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__30636__$1 = ((cljs.core.seq_QMARK_.call(null,map__30636))?cljs.core.apply.call(null,cljs.core.hash_map,map__30636):map__30636);var game = map__30636__$1;var turn = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__30637,___$1,___$2){var vec__30638 = p__30637;var game_id = cljs.core.nth.call(null,vec__30638,0,null);var result = cljs.core.nth.call(null,vec__30638,1,null);var ___$3 = cljs.core.nth.call(null,vec__30638,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__30639 = cljs.core._EQ_;var expr__30640 = result;if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__30640)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__30640)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__30640)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__30640)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__30640)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30640)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__30642){var vec__30644 = p__30642;var x = cljs.core.nth.call(null,vec__30644,0,null);var y = cljs.core.nth.call(null,vec__30644,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__30648,p__30649,conn){var vec__30650 = p__30648;var game_id = cljs.core.nth.call(null,vec__30650,0,null);var map__30651 = p__30649;var map__30651__$1 = ((cljs.core.seq_QMARK_.call(null,map__30651))?cljs.core.apply.call(null,cljs.core.hash_map,map__30651):map__30651);var report = map__30651__$1;var db_after = cljs.core.get.call(null,map__30651__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__30645_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30645_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__30652 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__30652,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__30652,1,null);var vec__30653 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__30653,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__30653,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__30647_SHARP_,p2__30646_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__30646_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__30646_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__30647_SHARP_ * 53)),(their_region_offset_y + (p1__30647_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__30654){var map__30655 = p__30654;var map__30655__$1 = ((cljs.core.seq_QMARK_.call(null,map__30655))?cljs.core.apply.call(null,cljs.core.hash_map,map__30655):map__30655);var id = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__30656,p__30657,conn){var vec__30658 = p__30656;var game_id = cljs.core.nth.call(null,vec__30658,0,null);var turn = cljs.core.nth.call(null,vec__30658,1,null);var map__30659 = p__30657;var map__30659__$1 = ((cljs.core.seq_QMARK_.call(null,map__30659))?cljs.core.apply.call(null,cljs.core.hash_map,map__30659):map__30659);var report = map__30659__$1;var db_after = cljs.core.get.call(null,map__30659__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__30660 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__30660__$1 = ((cljs.core.seq_QMARK_.call(null,map__30660))?cljs.core.apply.call(null,cljs.core.hash_map,map__30660):map__30660);var game = map__30660__$1;var turn__$1 = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__30661,p__30662,conn){var vec__30663 = p__30661;var game_id = cljs.core.nth.call(null,vec__30663,0,null);var card_id = cljs.core.nth.call(null,vec__30663,1,null);var map__30664 = p__30662;var map__30664__$1 = ((cljs.core.seq_QMARK_.call(null,map__30664))?cljs.core.apply.call(null,cljs.core.hash_map,map__30664):map__30664);var report = map__30664__$1;var db_after = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__30666,p__30667,conn){var vec__30668 = p__30666;var game_id = cljs.core.nth.call(null,vec__30668,0,null);var card_id = cljs.core.nth.call(null,vec__30668,1,null);var suit = cljs.core.nth.call(null,vec__30668,2,null);var rank = cljs.core.nth.call(null,vec__30668,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__30668,4,null);var map__30669 = p__30667;var map__30669__$1 = ((cljs.core.seq_QMARK_.call(null,map__30669))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);var report = map__30669__$1;var db_after = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
console.log("our-cards: ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)))));
var seq__30670_30674 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__30671_30675 = null;var count__30672_30676 = 0;var i__30673_30677 = 0;while(true){
if((i__30673_30677 < count__30672_30676))
{var card_id_30678__$1 = cljs.core._nth.call(null,chunk__30671_30675,i__30673_30677);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_30678__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__30679 = seq__30670_30674;
var G__30680 = chunk__30671_30675;
var G__30681 = count__30672_30676;
var G__30682 = (i__30673_30677 + 1);
seq__30670_30674 = G__30679;
chunk__30671_30675 = G__30680;
count__30672_30676 = G__30681;
i__30673_30677 = G__30682;
continue;
}
} else
{var temp__4092__auto___30683 = cljs.core.seq.call(null,seq__30670_30674);if(temp__4092__auto___30683)
{var seq__30670_30684__$1 = temp__4092__auto___30683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30670_30684__$1))
{var c__10127__auto___30685 = cljs.core.chunk_first.call(null,seq__30670_30684__$1);{
var G__30686 = cljs.core.chunk_rest.call(null,seq__30670_30684__$1);
var G__30687 = c__10127__auto___30685;
var G__30688 = cljs.core.count.call(null,c__10127__auto___30685);
var G__30689 = 0;
seq__30670_30674 = G__30686;
chunk__30671_30675 = G__30687;
count__30672_30676 = G__30688;
i__30673_30677 = G__30689;
continue;
}
} else
{var card_id_30690__$1 = cljs.core.first.call(null,seq__30670_30684__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_30690__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__30691 = cljs.core.next.call(null,seq__30670_30684__$1);
var G__30692 = null;
var G__30693 = 0;
var G__30694 = 0;
seq__30670_30674 = G__30691;
chunk__30671_30675 = G__30692;
count__30672_30676 = G__30693;
i__30673_30677 = G__30694;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__30665_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__30665_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__30665_SHARP_,gin.game_panel.pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(gin.game_panel.game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__30695,p__30696,conn){var vec__30697 = p__30695;var game_id = cljs.core.nth.call(null,vec__30697,0,null);var card_id = cljs.core.nth.call(null,vec__30697,1,null);var map__30698 = p__30696;var map__30698__$1 = ((cljs.core.seq_QMARK_.call(null,map__30698))?cljs.core.apply.call(null,cljs.core.hash_map,map__30698):map__30698);var report = map__30698__$1;var db_after = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__30699 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__30699__$1 = ((cljs.core.seq_QMARK_.call(null,map__30699))?cljs.core.apply.call(null,cljs.core.hash_map,map__30699):map__30699);var game = map__30699__$1;var our_cards = cljs.core.get.call(null,map__30699__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__30699__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__30700 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__30701 = null;var count__30702 = 0;var i__30703 = 0;while(true){
if((i__30703 < count__30702))
{var card_id__$1 = cljs.core._nth.call(null,chunk__30701,i__30703);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__30704 = seq__30700;
var G__30705 = chunk__30701;
var G__30706 = count__30702;
var G__30707 = (i__30703 + 1);
seq__30700 = G__30704;
chunk__30701 = G__30705;
count__30702 = G__30706;
i__30703 = G__30707;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30700);if(temp__4092__auto__)
{var seq__30700__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30700__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__30700__$1);{
var G__30708 = cljs.core.chunk_rest.call(null,seq__30700__$1);
var G__30709 = c__10127__auto__;
var G__30710 = cljs.core.count.call(null,c__10127__auto__);
var G__30711 = 0;
seq__30700 = G__30708;
chunk__30701 = G__30709;
count__30702 = G__30710;
i__30703 = G__30711;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__30700__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__30712 = cljs.core.next.call(null,seq__30700__$1);
var G__30713 = null;
var G__30714 = 0;
var G__30715 = 0;
seq__30700 = G__30712;
chunk__30701 = G__30713;
count__30702 = G__30714;
i__30703 = G__30715;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__30716,p__30717,conn){var vec__30718 = p__30716;var game_id = cljs.core.nth.call(null,vec__30718,0,null);var card_id = cljs.core.nth.call(null,vec__30718,1,null);var map__30719 = p__30717;var map__30719__$1 = ((cljs.core.seq_QMARK_.call(null,map__30719))?cljs.core.apply.call(null,cljs.core.hash_map,map__30719):map__30719);var report = map__30719__$1;var db_after = cljs.core.get.call(null,map__30719__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__30720 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__30721 = null;var count__30722 = 0;var i__30723 = 0;while(true){
if((i__30723 < count__30722))
{var card_id__$1 = cljs.core._nth.call(null,chunk__30721,i__30723);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__30724 = seq__30720;
var G__30725 = chunk__30721;
var G__30726 = count__30722;
var G__30727 = (i__30723 + 1);
seq__30720 = G__30724;
chunk__30721 = G__30725;
count__30722 = G__30726;
i__30723 = G__30727;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30720);if(temp__4092__auto__)
{var seq__30720__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30720__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__30720__$1);{
var G__30728 = cljs.core.chunk_rest.call(null,seq__30720__$1);
var G__30729 = c__10127__auto__;
var G__30730 = cljs.core.count.call(null,c__10127__auto__);
var G__30731 = 0;
seq__30720 = G__30728;
chunk__30721 = G__30729;
count__30722 = G__30730;
i__30723 = G__30731;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__30720__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__30732 = cljs.core.next.call(null,seq__30720__$1);
var G__30733 = null;
var G__30734 = 0;
var G__30735 = 0;
seq__30720 = G__30732;
chunk__30721 = G__30733;
count__30722 = G__30734;
i__30723 = G__30735;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__30739,p__30740,conn){var vec__30741 = p__30739;var game_id = cljs.core.nth.call(null,vec__30741,0,null);var card_id = cljs.core.nth.call(null,vec__30741,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__30741,2,null);var map__30742 = p__30740;var map__30742__$1 = ((cljs.core.seq_QMARK_.call(null,map__30742))?cljs.core.apply.call(null,cljs.core.hash_map,map__30742):map__30742);var report = map__30742__$1;var db_after = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__30743 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__30743,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__30743,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__30737_SHARP_,p2__30736_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__30736_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__30737_SHARP_ * 48.18)),(their_region_offset_y + (p1__30737_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__30736_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__30738_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__30738_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__30738_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__30746,p__30747,conn){var vec__30748 = p__30746;var game_id = cljs.core.nth.call(null,vec__30748,0,null);var card_id = cljs.core.nth.call(null,vec__30748,1,null);var _ = cljs.core.nth.call(null,vec__30748,2,null);var ___$1 = cljs.core.nth.call(null,vec__30748,3,null);var map__30749 = p__30747;var map__30749__$1 = ((cljs.core.seq_QMARK_.call(null,map__30749))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);var report = map__30749__$1;var db_after = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__30750 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__30750,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__30750,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__30745_SHARP_,p2__30744_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__30744_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__30745_SHARP_ * 48.18)),(their_region_offset_y + (p1__30745_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__30744_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__30753,p__30754,conn){var vec__30755 = p__30753;var game_id = cljs.core.nth.call(null,vec__30755,0,null);var card_id = cljs.core.nth.call(null,vec__30755,1,null);var suit = cljs.core.nth.call(null,vec__30755,2,null);var rank = cljs.core.nth.call(null,vec__30755,3,null);var map__30756 = p__30754;var map__30756__$1 = ((cljs.core.seq_QMARK_.call(null,map__30756))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);var report = map__30756__$1;var db_after = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__30757 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__30757,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__30757,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__30752_SHARP_,p2__30751_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__30751_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__30752_SHARP_ * 53)),(their_region_offset_y + (p1__30752_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__30758,p__30759,conn){var vec__30760 = p__30758;var game_id = cljs.core.nth.call(null,vec__30760,0,null);var result = cljs.core.nth.call(null,vec__30760,1,null);var map__30761 = p__30759;var map__30761__$1 = ((cljs.core.seq_QMARK_.call(null,map__30761))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);var report = map__30761__$1;var db_after = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_30770 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_30771 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_30771,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_30770,restart_button_30771);
return gin.dom_helpers.schedule.call(null,(function (){var iter__10096__auto__ = (function iter__30762(s__30763){return (new cljs.core.LazySeq(null,(function (){var s__30763__$1 = s__30763;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30763__$1);if(temp__4092__auto__)
{var s__30763__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30763__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__30763__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__30765 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__30764 = 0;while(true){
if((i__30764 < size__10095__auto__))
{var card_id = cljs.core._nth.call(null,c__10094__auto__,i__30764);cljs.core.chunk_append.call(null,b__30765,(function (){var map__30768 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__30768__$1 = ((cljs.core.seq_QMARK_.call(null,map__30768))?cljs.core.apply.call(null,cljs.core.hash_map,map__30768):map__30768);var suit = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__30764,map__30768,map__30768__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__30765,s__30763__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__30764,map__30768,map__30768__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__30765,s__30763__$2,temp__4092__auto__))
})());
{
var G__30772 = (i__30764 + 1);
i__30764 = G__30772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30765),iter__30762.call(null,cljs.core.chunk_rest.call(null,s__30763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30765),null);
}
} else
{var card_id = cljs.core.first.call(null,s__30763__$2);return cljs.core.cons.call(null,(function (){var map__30769 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__30769__$1 = ((cljs.core.seq_QMARK_.call(null,map__30769))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);var suit = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__30769,map__30769__$1,suit,rank,card_id,s__30763__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__30769,map__30769__$1,suit,rank,card_id,s__30763__$2,temp__4092__auto__))
})(),iter__30762.call(null,cljs.core.rest.call(null,s__30763__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));
})());
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__30775 = report;var map__30775__$1 = ((cljs.core.seq_QMARK_.call(null,map__30775))?cljs.core.apply.call(null,cljs.core.hash_map,map__30775):map__30775);var db_after = cljs.core.get.call(null,map__30775__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__30776 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__30776,0,null);var args = cljs.core.nth.call(null,vec__30776,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__30807_30837 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__30807_30837,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__30807_30837,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__30807_30837,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__30808(s__30809){return (new cljs.core.LazySeq(null,(function (){var s__30809__$1 = s__30809;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30809__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__30809__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__30810(s__30811){return (new cljs.core.LazySeq(null,((function (s__30809__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__30811__$1 = s__30811;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__30811__$1);if(temp__4092__auto____$1)
{var s__30811__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30811__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__30811__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__30813 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__30812 = 0;while(true){
if((i__30812 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__30812);cljs.core.chunk_append.call(null,b__30813,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__30838 = (i__30812 + 1);
i__30812 = G__30838;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30813),iter__30810.call(null,cljs.core.chunk_rest.call(null,s__30811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30813),null);
}
} else
{var rank = cljs.core.first.call(null,s__30811__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__30810.call(null,cljs.core.rest.call(null,s__30811__$2)));
}
} else
{return null;
}
break;
}
});})(s__30809__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__30809__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__30808.call(null,cljs.core.rest.call(null,s__30809__$1)));
} else
{{
var G__30839 = cljs.core.rest.call(null,s__30809__$1);
s__30809__$1 = G__30839;
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
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__30814 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__30814,0,null);var pile_y = cljs.core.nth.call(null,vec__30814,1,null);var cards = (function (){var iter__10096__auto__ = ((function (container_wrap,vec__30814,pile_x,pile_y){
return (function iter__30815(s__30816){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__30814,pile_x,pile_y){
return (function (){var s__30816__$1 = s__30816;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30816__$1);if(temp__4092__auto__)
{var s__30816__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30816__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__30816__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__30818 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__30817 = 0;while(true){
if((i__30817 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__30817);cljs.core.chunk_append.call(null,b__30818,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__30821 = (new goog.fx.Dragger(card_el));G__30821.setLimits(container_wrap);
return G__30821;
})();card_el.dispose = ((function (i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__30817,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__30818,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__30840 = (i__30817 + 1);
i__30817 = G__30840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30818),iter__30815.call(null,cljs.core.chunk_rest.call(null,s__30816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30818),null);
}
} else
{var i = cljs.core.first.call(null,s__30816__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__30822 = (new goog.fx.Dragger(card_el));G__30822.setLimits(container_wrap);
return G__30822;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__30816__$2,temp__4092__auto__,container_wrap,vec__30814,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__30815.call(null,cljs.core.rest.call(null,s__30816__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__30814,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__30814,pile_x,pile_y))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__30823_30841 = cljs.core.seq.call(null,cards);var chunk__30824_30842 = null;var count__30825_30843 = 0;var i__30826_30844 = 0;while(true){
if((i__30826_30844 < count__30825_30843))
{var map__30827_30845 = cljs.core._nth.call(null,chunk__30824_30842,i__30826_30844);var map__30827_30846__$1 = ((cljs.core.seq_QMARK_.call(null,map__30827_30845))?cljs.core.apply.call(null,cljs.core.hash_map,map__30827_30845):map__30827_30845);var card_el_30847 = cljs.core.get.call(null,map__30827_30846__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_30847);
{
var G__30848 = seq__30823_30841;
var G__30849 = chunk__30824_30842;
var G__30850 = count__30825_30843;
var G__30851 = (i__30826_30844 + 1);
seq__30823_30841 = G__30848;
chunk__30824_30842 = G__30849;
count__30825_30843 = G__30850;
i__30826_30844 = G__30851;
continue;
}
} else
{var temp__4092__auto___30852 = cljs.core.seq.call(null,seq__30823_30841);if(temp__4092__auto___30852)
{var seq__30823_30853__$1 = temp__4092__auto___30852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30823_30853__$1))
{var c__10127__auto___30854 = cljs.core.chunk_first.call(null,seq__30823_30853__$1);{
var G__30855 = cljs.core.chunk_rest.call(null,seq__30823_30853__$1);
var G__30856 = c__10127__auto___30854;
var G__30857 = cljs.core.count.call(null,c__10127__auto___30854);
var G__30858 = 0;
seq__30823_30841 = G__30855;
chunk__30824_30842 = G__30856;
count__30825_30843 = G__30857;
i__30826_30844 = G__30858;
continue;
}
} else
{var map__30828_30859 = cljs.core.first.call(null,seq__30823_30853__$1);var map__30828_30860__$1 = ((cljs.core.seq_QMARK_.call(null,map__30828_30859))?cljs.core.apply.call(null,cljs.core.hash_map,map__30828_30859):map__30828_30859);var card_el_30861 = cljs.core.get.call(null,map__30828_30860__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_30861);
{
var G__30862 = cljs.core.next.call(null,seq__30823_30853__$1);
var G__30863 = null;
var G__30864 = 0;
var G__30865 = 0;
seq__30823_30841 = G__30862;
chunk__30824_30842 = G__30863;
count__30825_30843 = G__30864;
i__30826_30844 = G__30865;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__30829(s__30830){return (new cljs.core.LazySeq(null,(function (){var s__30830__$1 = s__30830;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30830__$1);if(temp__4092__auto__)
{var s__30830__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30830__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__30830__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__30832 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__30831 = 0;while(true){
if((i__30831 < size__10095__auto__))
{var map__30835 = cljs.core._nth.call(null,c__10094__auto__,i__30831);var map__30835__$1 = ((cljs.core.seq_QMARK_.call(null,map__30835))?cljs.core.apply.call(null,cljs.core.hash_map,map__30835):map__30835);var card_el = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__30832,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__30866 = (i__30831 + 1);
i__30831 = G__30866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30832),iter__30829.call(null,cljs.core.chunk_rest.call(null,s__30830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30832),null);
}
} else
{var map__30836 = cljs.core.first.call(null,s__30830__$2);var map__30836__$1 = ((cljs.core.seq_QMARK_.call(null,map__30836))?cljs.core.apply.call(null,cljs.core.hash_map,map__30836):map__30836);var card_el = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__30829.call(null,cljs.core.rest.call(null,s__30830__$2)));
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
