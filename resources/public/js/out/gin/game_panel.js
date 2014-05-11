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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__11475,p__11476,_){var vec__11477 = p__11475;var game_id = cljs.core.nth.call(null,vec__11477,0,null);var map__11478 = p__11476;var map__11478__$1 = ((cljs.core.seq_QMARK_.call(null,map__11478))?cljs.core.apply.call(null,cljs.core.hash_map,map__11478):map__11478);var db_after = cljs.core.get.call(null,map__11478__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__11479 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__11479__$1 = ((cljs.core.seq_QMARK_.call(null,map__11479))?cljs.core.apply.call(null,cljs.core.hash_map,map__11479):map__11479);var game = map__11479__$1;var turn = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__11480,___$1,___$2){var vec__11481 = p__11480;var game_id = cljs.core.nth.call(null,vec__11481,0,null);var result = cljs.core.nth.call(null,vec__11481,1,null);var ___$3 = cljs.core.nth.call(null,vec__11481,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__11482 = cljs.core._EQ_;var expr__11483 = result;if(cljs.core.truth_(pred__11482.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__11483)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__11482.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__11483)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__11482.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__11483)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__11482.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__11483)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__11482.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__11483)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11483)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__11485){var vec__11487 = p__11485;var x = cljs.core.nth.call(null,vec__11487,0,null);var y = cljs.core.nth.call(null,vec__11487,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__11491,p__11492,conn){var vec__11493 = p__11491;var game_id = cljs.core.nth.call(null,vec__11493,0,null);var map__11494 = p__11492;var map__11494__$1 = ((cljs.core.seq_QMARK_.call(null,map__11494))?cljs.core.apply.call(null,cljs.core.hash_map,map__11494):map__11494);var report = map__11494__$1;var db_after = cljs.core.get.call(null,map__11494__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__11488_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__11488_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__11495 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__11495,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__11495,1,null);var vec__11496 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__11496,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__11496,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y){
return (function (p1__11490_SHARP_,p2__11489_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__11489_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__11489_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__11490_SHARP_ * 53)),(their_region_offset_y + (p1__11490_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__11498){var map__11499 = p__11498;var map__11499__$1 = ((cljs.core.seq_QMARK_.call(null,map__11499))?cljs.core.apply.call(null,cljs.core.hash_map,map__11499):map__11499);var id = cljs.core.get.call(null,map__11499__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__11499__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__11499__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__11499,map__11499__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__11499,map__11499__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__11499,map__11499__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__11499,map__11499__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__11495,their_region_offset_x,their_region_offset_y,vec__11496,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var _ = console.log("anim starting ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game)),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)));var vec__11497 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__11497,0,null);var second_deal = cljs.core.nth.call(null,vec__11497,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__11500,p__11501,conn){var vec__11502 = p__11500;var game_id = cljs.core.nth.call(null,vec__11502,0,null);var turn = cljs.core.nth.call(null,vec__11502,1,null);var map__11503 = p__11501;var map__11503__$1 = ((cljs.core.seq_QMARK_.call(null,map__11503))?cljs.core.apply.call(null,cljs.core.hash_map,map__11503):map__11503);var report = map__11503__$1;var db_after = cljs.core.get.call(null,map__11503__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__11504 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__11504__$1 = ((cljs.core.seq_QMARK_.call(null,map__11504))?cljs.core.apply.call(null,cljs.core.hash_map,map__11504):map__11504);var game = map__11504__$1;var turn__$1 = cljs.core.get.call(null,map__11504__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__11504__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__11505,p__11506,conn){var vec__11507 = p__11505;var game_id = cljs.core.nth.call(null,vec__11507,0,null);var card_id = cljs.core.nth.call(null,vec__11507,1,null);var map__11508 = p__11506;var map__11508__$1 = ((cljs.core.seq_QMARK_.call(null,map__11508))?cljs.core.apply.call(null,cljs.core.hash_map,map__11508):map__11508);var report = map__11508__$1;var db_after = cljs.core.get.call(null,map__11508__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__11510,p__11511,conn){var vec__11512 = p__11510;var game_id = cljs.core.nth.call(null,vec__11512,0,null);var card_id = cljs.core.nth.call(null,vec__11512,1,null);var suit = cljs.core.nth.call(null,vec__11512,2,null);var rank = cljs.core.nth.call(null,vec__11512,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__11512,4,null);var map__11513 = p__11511;var map__11513__$1 = ((cljs.core.seq_QMARK_.call(null,map__11513))?cljs.core.apply.call(null,cljs.core.hash_map,map__11513):map__11513);var report = map__11513__$1;var db_after = cljs.core.get.call(null,map__11513__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
console.log("our-cards: ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)))));
var seq__11514_11518 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__11515_11519 = null;var count__11516_11520 = 0;var i__11517_11521 = 0;while(true){
if((i__11517_11521 < count__11516_11520))
{var card_id_11522__$1 = cljs.core._nth.call(null,chunk__11515_11519,i__11517_11521);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_11522__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__11523 = seq__11514_11518;
var G__11524 = chunk__11515_11519;
var G__11525 = count__11516_11520;
var G__11526 = (i__11517_11521 + 1);
seq__11514_11518 = G__11523;
chunk__11515_11519 = G__11524;
count__11516_11520 = G__11525;
i__11517_11521 = G__11526;
continue;
}
} else
{var temp__4092__auto___11527 = cljs.core.seq.call(null,seq__11514_11518);if(temp__4092__auto___11527)
{var seq__11514_11528__$1 = temp__4092__auto___11527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11514_11528__$1))
{var c__10127__auto___11529 = cljs.core.chunk_first.call(null,seq__11514_11528__$1);{
var G__11530 = cljs.core.chunk_rest.call(null,seq__11514_11528__$1);
var G__11531 = c__10127__auto___11529;
var G__11532 = cljs.core.count.call(null,c__10127__auto___11529);
var G__11533 = 0;
seq__11514_11518 = G__11530;
chunk__11515_11519 = G__11531;
count__11516_11520 = G__11532;
i__11517_11521 = G__11533;
continue;
}
} else
{var card_id_11534__$1 = cljs.core.first.call(null,seq__11514_11528__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_11534__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__11535 = cljs.core.next.call(null,seq__11514_11528__$1);
var G__11536 = null;
var G__11537 = 0;
var G__11538 = 0;
seq__11514_11518 = G__11535;
chunk__11515_11519 = G__11536;
count__11516_11520 = G__11537;
i__11517_11521 = G__11538;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__11509_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__11509_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__11509_SHARP_,gin.game_panel.pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__11539,p__11540,conn){var vec__11541 = p__11539;var game_id = cljs.core.nth.call(null,vec__11541,0,null);var card_id = cljs.core.nth.call(null,vec__11541,1,null);var map__11542 = p__11540;var map__11542__$1 = ((cljs.core.seq_QMARK_.call(null,map__11542))?cljs.core.apply.call(null,cljs.core.hash_map,map__11542):map__11542);var report = map__11542__$1;var db_after = cljs.core.get.call(null,map__11542__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__11543 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__11543__$1 = ((cljs.core.seq_QMARK_.call(null,map__11543))?cljs.core.apply.call(null,cljs.core.hash_map,map__11543):map__11543);var game = map__11543__$1;var our_cards = cljs.core.get.call(null,map__11543__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__11543__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__11544 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__11545 = null;var count__11546 = 0;var i__11547 = 0;while(true){
if((i__11547 < count__11546))
{var card_id__$1 = cljs.core._nth.call(null,chunk__11545,i__11547);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__11548 = seq__11544;
var G__11549 = chunk__11545;
var G__11550 = count__11546;
var G__11551 = (i__11547 + 1);
seq__11544 = G__11548;
chunk__11545 = G__11549;
count__11546 = G__11550;
i__11547 = G__11551;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11544);if(temp__4092__auto__)
{var seq__11544__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11544__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__11544__$1);{
var G__11552 = cljs.core.chunk_rest.call(null,seq__11544__$1);
var G__11553 = c__10127__auto__;
var G__11554 = cljs.core.count.call(null,c__10127__auto__);
var G__11555 = 0;
seq__11544 = G__11552;
chunk__11545 = G__11553;
count__11546 = G__11554;
i__11547 = G__11555;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__11544__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__11556 = cljs.core.next.call(null,seq__11544__$1);
var G__11557 = null;
var G__11558 = 0;
var G__11559 = 0;
seq__11544 = G__11556;
chunk__11545 = G__11557;
count__11546 = G__11558;
i__11547 = G__11559;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__11560,p__11561,conn){var vec__11562 = p__11560;var game_id = cljs.core.nth.call(null,vec__11562,0,null);var card_id = cljs.core.nth.call(null,vec__11562,1,null);var map__11563 = p__11561;var map__11563__$1 = ((cljs.core.seq_QMARK_.call(null,map__11563))?cljs.core.apply.call(null,cljs.core.hash_map,map__11563):map__11563);var report = map__11563__$1;var db_after = cljs.core.get.call(null,map__11563__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__11564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__11565 = null;var count__11566 = 0;var i__11567 = 0;while(true){
if((i__11567 < count__11566))
{var card_id__$1 = cljs.core._nth.call(null,chunk__11565,i__11567);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__11568 = seq__11564;
var G__11569 = chunk__11565;
var G__11570 = count__11566;
var G__11571 = (i__11567 + 1);
seq__11564 = G__11568;
chunk__11565 = G__11569;
count__11566 = G__11570;
i__11567 = G__11571;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11564);if(temp__4092__auto__)
{var seq__11564__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11564__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__11564__$1);{
var G__11572 = cljs.core.chunk_rest.call(null,seq__11564__$1);
var G__11573 = c__10127__auto__;
var G__11574 = cljs.core.count.call(null,c__10127__auto__);
var G__11575 = 0;
seq__11564 = G__11572;
chunk__11565 = G__11573;
count__11566 = G__11574;
i__11567 = G__11575;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__11564__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__11576 = cljs.core.next.call(null,seq__11564__$1);
var G__11577 = null;
var G__11578 = 0;
var G__11579 = 0;
seq__11564 = G__11576;
chunk__11565 = G__11577;
count__11566 = G__11578;
i__11567 = G__11579;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__11583,p__11584,conn){var vec__11585 = p__11583;var game_id = cljs.core.nth.call(null,vec__11585,0,null);var card_id = cljs.core.nth.call(null,vec__11585,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__11585,2,null);var map__11586 = p__11584;var map__11586__$1 = ((cljs.core.seq_QMARK_.call(null,map__11586))?cljs.core.apply.call(null,cljs.core.hash_map,map__11586):map__11586);var report = map__11586__$1;var db_after = cljs.core.get.call(null,map__11586__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__11587 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__11587,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__11587,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__11581_SHARP_,p2__11580_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__11580_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__11581_SHARP_ * 48.18)),(their_region_offset_y + (p1__11581_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__11580_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__11582_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__11582_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__11582_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__11590,p__11591,conn){var vec__11592 = p__11590;var game_id = cljs.core.nth.call(null,vec__11592,0,null);var card_id = cljs.core.nth.call(null,vec__11592,1,null);var _ = cljs.core.nth.call(null,vec__11592,2,null);var ___$1 = cljs.core.nth.call(null,vec__11592,3,null);var map__11593 = p__11591;var map__11593__$1 = ((cljs.core.seq_QMARK_.call(null,map__11593))?cljs.core.apply.call(null,cljs.core.hash_map,map__11593):map__11593);var report = map__11593__$1;var db_after = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__11594 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__11594,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__11594,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__11589_SHARP_,p2__11588_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__11588_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__11589_SHARP_ * 48.18)),(their_region_offset_y + (p1__11589_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__11588_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__11597,p__11598,conn){var vec__11599 = p__11597;var game_id = cljs.core.nth.call(null,vec__11599,0,null);var card_id = cljs.core.nth.call(null,vec__11599,1,null);var suit = cljs.core.nth.call(null,vec__11599,2,null);var rank = cljs.core.nth.call(null,vec__11599,3,null);var map__11600 = p__11598;var map__11600__$1 = ((cljs.core.seq_QMARK_.call(null,map__11600))?cljs.core.apply.call(null,cljs.core.hash_map,map__11600):map__11600);var report = map__11600__$1;var db_after = cljs.core.get.call(null,map__11600__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__11601 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__11601,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__11601,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__11596_SHARP_,p2__11595_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__11595_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__11596_SHARP_ * 53)),(their_region_offset_y + (p1__11596_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__11602,p__11603,conn){var vec__11604 = p__11602;var game_id = cljs.core.nth.call(null,vec__11604,0,null);var result = cljs.core.nth.call(null,vec__11604,1,null);var map__11605 = p__11603;var map__11605__$1 = ((cljs.core.seq_QMARK_.call(null,map__11605))?cljs.core.apply.call(null,cljs.core.hash_map,map__11605):map__11605);var report = map__11605__$1;var db_after = cljs.core.get.call(null,map__11605__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_11614 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_11615 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_11615,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_11614,restart_button_11615);
return gin.dom_helpers.schedule.call(null,(function (){var iter__10096__auto__ = (function iter__11606(s__11607){return (new cljs.core.LazySeq(null,(function (){var s__11607__$1 = s__11607;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11607__$1);if(temp__4092__auto__)
{var s__11607__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11607__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11607__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11609 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11608 = 0;while(true){
if((i__11608 < size__10095__auto__))
{var card_id = cljs.core._nth.call(null,c__10094__auto__,i__11608);cljs.core.chunk_append.call(null,b__11609,(function (){var map__11612 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__11612__$1 = ((cljs.core.seq_QMARK_.call(null,map__11612))?cljs.core.apply.call(null,cljs.core.hash_map,map__11612):map__11612);var suit = cljs.core.get.call(null,map__11612__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__11612__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__11608,map__11612,map__11612__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__11609,s__11607__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__11608,map__11612,map__11612__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__11609,s__11607__$2,temp__4092__auto__))
})());
{
var G__11616 = (i__11608 + 1);
i__11608 = G__11616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11609),iter__11606.call(null,cljs.core.chunk_rest.call(null,s__11607__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11609),null);
}
} else
{var card_id = cljs.core.first.call(null,s__11607__$2);return cljs.core.cons.call(null,(function (){var map__11613 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__11613__$1 = ((cljs.core.seq_QMARK_.call(null,map__11613))?cljs.core.apply.call(null,cljs.core.hash_map,map__11613):map__11613);var suit = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__11613,map__11613__$1,suit,rank,card_id,s__11607__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__11613,map__11613__$1,suit,rank,card_id,s__11607__$2,temp__4092__auto__))
})(),iter__11606.call(null,cljs.core.rest.call(null,s__11607__$2)));
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
gin.game_panel.render = (function render(report,conn){var map__11619 = report;var map__11619__$1 = ((cljs.core.seq_QMARK_.call(null,map__11619))?cljs.core.apply.call(null,cljs.core.hash_map,map__11619):map__11619);var db_after = cljs.core.get.call(null,map__11619__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__11620 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__11620,0,null);var args = cljs.core.nth.call(null,vec__11620,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__11651_11681 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__11651_11681,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__11651_11681,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__11651_11681,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__11652(s__11653){return (new cljs.core.LazySeq(null,(function (){var s__11653__$1 = s__11653;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11653__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__11653__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__11654(s__11655){return (new cljs.core.LazySeq(null,((function (s__11653__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11655__$1 = s__11655;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11655__$1);if(temp__4092__auto____$1)
{var s__11655__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11655__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11655__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11657 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11656 = 0;while(true){
if((i__11656 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__11656);cljs.core.chunk_append.call(null,b__11657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__11682 = (i__11656 + 1);
i__11656 = G__11682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11657),iter__11654.call(null,cljs.core.chunk_rest.call(null,s__11655__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11657),null);
}
} else
{var rank = cljs.core.first.call(null,s__11655__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__11654.call(null,cljs.core.rest.call(null,s__11655__$2)));
}
} else
{return null;
}
break;
}
});})(s__11653__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11653__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__11652.call(null,cljs.core.rest.call(null,s__11653__$1)));
} else
{{
var G__11683 = cljs.core.rest.call(null,s__11653__$1);
s__11653__$1 = G__11683;
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
})();var vec__11658 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__11658,0,null);var pile_y = cljs.core.nth.call(null,vec__11658,1,null);var cards = (function (){var iter__10096__auto__ = ((function (container_wrap,vec__11658,pile_x,pile_y){
return (function iter__11659(s__11660){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__11658,pile_x,pile_y){
return (function (){var s__11660__$1 = s__11660;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11660__$1);if(temp__4092__auto__)
{var s__11660__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11660__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11660__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11662 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11661 = 0;while(true){
if((i__11661 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__11661);cljs.core.chunk_append.call(null,b__11662,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__11665 = (new goog.fx.Dragger(card_el));G__11665.setLimits(container_wrap);
return G__11665;
})();card_el.dispose = ((function (i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__11661,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__11662,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__11684 = (i__11661 + 1);
i__11661 = G__11684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11662),iter__11659.call(null,cljs.core.chunk_rest.call(null,s__11660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11662),null);
}
} else
{var i = cljs.core.first.call(null,s__11660__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__11666 = (new goog.fx.Dragger(card_el));G__11666.setLimits(container_wrap);
return G__11666;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__11660__$2,temp__4092__auto__,container_wrap,vec__11658,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__11659.call(null,cljs.core.rest.call(null,s__11660__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__11658,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__11658,pile_x,pile_y))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__11667_11685 = cljs.core.seq.call(null,cards);var chunk__11668_11686 = null;var count__11669_11687 = 0;var i__11670_11688 = 0;while(true){
if((i__11670_11688 < count__11669_11687))
{var map__11671_11689 = cljs.core._nth.call(null,chunk__11668_11686,i__11670_11688);var map__11671_11690__$1 = ((cljs.core.seq_QMARK_.call(null,map__11671_11689))?cljs.core.apply.call(null,cljs.core.hash_map,map__11671_11689):map__11671_11689);var card_el_11691 = cljs.core.get.call(null,map__11671_11690__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_11691);
{
var G__11692 = seq__11667_11685;
var G__11693 = chunk__11668_11686;
var G__11694 = count__11669_11687;
var G__11695 = (i__11670_11688 + 1);
seq__11667_11685 = G__11692;
chunk__11668_11686 = G__11693;
count__11669_11687 = G__11694;
i__11670_11688 = G__11695;
continue;
}
} else
{var temp__4092__auto___11696 = cljs.core.seq.call(null,seq__11667_11685);if(temp__4092__auto___11696)
{var seq__11667_11697__$1 = temp__4092__auto___11696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11667_11697__$1))
{var c__10127__auto___11698 = cljs.core.chunk_first.call(null,seq__11667_11697__$1);{
var G__11699 = cljs.core.chunk_rest.call(null,seq__11667_11697__$1);
var G__11700 = c__10127__auto___11698;
var G__11701 = cljs.core.count.call(null,c__10127__auto___11698);
var G__11702 = 0;
seq__11667_11685 = G__11699;
chunk__11668_11686 = G__11700;
count__11669_11687 = G__11701;
i__11670_11688 = G__11702;
continue;
}
} else
{var map__11672_11703 = cljs.core.first.call(null,seq__11667_11697__$1);var map__11672_11704__$1 = ((cljs.core.seq_QMARK_.call(null,map__11672_11703))?cljs.core.apply.call(null,cljs.core.hash_map,map__11672_11703):map__11672_11703);var card_el_11705 = cljs.core.get.call(null,map__11672_11704__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_11705);
{
var G__11706 = cljs.core.next.call(null,seq__11667_11697__$1);
var G__11707 = null;
var G__11708 = 0;
var G__11709 = 0;
seq__11667_11685 = G__11706;
chunk__11668_11686 = G__11707;
count__11669_11687 = G__11708;
i__11670_11688 = G__11709;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__11673(s__11674){return (new cljs.core.LazySeq(null,(function (){var s__11674__$1 = s__11674;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11674__$1);if(temp__4092__auto__)
{var s__11674__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11674__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11674__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11676 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11675 = 0;while(true){
if((i__11675 < size__10095__auto__))
{var map__11679 = cljs.core._nth.call(null,c__10094__auto__,i__11675);var map__11679__$1 = ((cljs.core.seq_QMARK_.call(null,map__11679))?cljs.core.apply.call(null,cljs.core.hash_map,map__11679):map__11679);var card_el = cljs.core.get.call(null,map__11679__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__11679__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__11679__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__11676,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__11710 = (i__11675 + 1);
i__11675 = G__11710;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11676),iter__11673.call(null,cljs.core.chunk_rest.call(null,s__11674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11676),null);
}
} else
{var map__11680 = cljs.core.first.call(null,s__11674__$2);var map__11680__$1 = ((cljs.core.seq_QMARK_.call(null,map__11680))?cljs.core.apply.call(null,cljs.core.hash_map,map__11680):map__11680);var card_el = cljs.core.get.call(null,map__11680__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__11680__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__11680__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__11673.call(null,cljs.core.rest.call(null,s__11674__$2)));
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
