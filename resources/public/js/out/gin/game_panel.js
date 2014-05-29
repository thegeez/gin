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
gin.game_panel.set_msg = (function set_msg(msg){console.log("set-msg",msg);
return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.msg = (function (){var method_table__17499__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17500__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17501__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17502__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17503__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("msg",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17503__auto__,method_table__17499__auto__,prefer_table__17500__auto__,method_cache__17501__auto__,cached_hierarchy__17502__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Dealing ...");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Ready, waiting on opponent");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"join-game","join-game",4768214567),(function (event,p__29240,p__29241,_){var vec__29242 = p__29240;var game_id = cljs.core.nth.call(null,vec__29242,0,null);var map__29243 = p__29241;var map__29243__$1 = ((cljs.core.seq_QMARK_.call(null,map__29243))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);var db_after = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.game_panel.set_msg.call(null,[cljs.core.str("Returned to game: "),cljs.core.str(console.log("GAME: ",cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game)], null)))),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game)))?"Your turn to ":"Opponent to ")),cljs.core.str(((cljs.core._EQ_.call(null,20,(cljs.core.count.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game)) + cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game)))))?"draw a card or pick a discard":"choose card to discard"))].join(''));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__29244,p__29245,_){var vec__29246 = p__29244;var game_id = cljs.core.nth.call(null,vec__29246,0,null);var map__29247 = p__29245;var map__29247__$1 = ((cljs.core.seq_QMARK_.call(null,map__29247))?cljs.core.apply.call(null,cljs.core.hash_map,map__29247):map__29247);var db_after = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__29248 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__29248__$1 = ((cljs.core.seq_QMARK_.call(null,map__29248))?cljs.core.apply.call(null,cljs.core.hash_map,map__29248):map__29248);var game = map__29248__$1;var turn = cljs.core.get.call(null,map__29248__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__29248__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"You've chosen a card from the deck.");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Drag a card from your hand to discard.");
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__29249,___$1,___$2){var vec__29250 = p__29249;var game_id = cljs.core.nth.call(null,vec__29250,0,null);var result = cljs.core.nth.call(null,vec__29250,1,null);var ___$3 = cljs.core.nth.call(null,vec__29250,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__29251 = cljs.core._EQ_;var expr__29252 = result;if(cljs.core.truth_(pred__29251.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__29252)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__29251.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__29252)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__29251.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__29252)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__29251.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__29252)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__29251.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__29252)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29252)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__29254){var vec__29256 = p__29254;var x = cljs.core.nth.call(null,vec__29256,0,null);var y = cljs.core.nth.call(null,vec__29256,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.handle = (function (){var method_table__17499__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17500__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17501__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17502__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17503__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17503__auto__,method_table__17499__auto__,prefer_table__17500__auto__,method_cache__17501__auto__,cached_hierarchy__17502__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__29260,p__29261,conn){var vec__29262 = p__29260;var game_id = cljs.core.nth.call(null,vec__29262,0,null);var map__29263 = p__29261;var map__29263__$1 = ((cljs.core.seq_QMARK_.call(null,map__29263))?cljs.core.apply.call(null,cljs.core.hash_map,map__29263):map__29263);var report = map__29263__$1;var db_after = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__29257_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29257_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__29264 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29264,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29264,1,null);var vec__29265 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__29265,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__29265,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y){
return (function (p1__29259_SHARP_,p2__29258_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__29258_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__29258_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29259_SHARP_ * 53)),(their_region_offset_y + (p1__29259_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__29267){var map__29268 = p__29267;var map__29268__$1 = ((cljs.core.seq_QMARK_.call(null,map__29268))?cljs.core.apply.call(null,cljs.core.hash_map,map__29268):map__29268);var id = cljs.core.get.call(null,map__29268__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__29268__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29268__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__29268,map__29268__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__29268,map__29268__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__29268,map__29268__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__29268,map__29268__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__29264,their_region_offset_x,their_region_offset_y,vec__29265,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__29266 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__29266,0,null);var second_deal = cljs.core.nth.call(null,vec__29266,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"join-game","join-game",4768214567),(function (event,p__29271,p__29272,conn){var vec__29273 = p__29271;var game_id = cljs.core.nth.call(null,vec__29273,0,null);var map__29274 = p__29272;var map__29274__$1 = ((cljs.core.seq_QMARK_.call(null,map__29274))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);var report = map__29274__$1;var db_after = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__29269_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29269_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discards_es = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es){
return (function (p1__29270_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29270_SHARP_], null));
});})(game,opp_cards_el,our_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__29275 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29275,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29275,1,null);var vec__29276 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__29276,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__29276,1,null);var their_cards = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return ((function (game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y){
return (function (){gin.dom_helpers.show_on_top.call(null,el);
return gin.dom_helpers.set_position.call(null,el,(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4)));
});
;})(game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y))
});})(game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_cards = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards){
return (function (idx,p__29277){var map__29278 = p__29277;var map__29278__$1 = ((cljs.core.seq_QMARK_.call(null,map__29278))?cljs.core.apply.call(null,cljs.core.hash_map,map__29278):map__29278);var id = cljs.core.get.call(null,map__29278__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__29278__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29278__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return ((function (el,map__29278,map__29278__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards){
return (function (){gin.dom_helpers.show_on_top.call(null,el);
gin.dom_helpers.set_position.call(null,el,(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4)));
gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});
;})(el,map__29278,map__29278__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards))
});})(game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards))
,cljs.core.range.call(null),our_cards_es);var discards = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards,our_cards){
return (function (idx,p__29279){var map__29280 = p__29279;var map__29280__$1 = ((cljs.core.seq_QMARK_.call(null,map__29280))?cljs.core.apply.call(null,cljs.core.hash_map,map__29280):map__29280);var id = cljs.core.get.call(null,map__29280__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__29280__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29280__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return ((function (el,map__29280,map__29280__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards,our_cards){
return (function (){gin.dom_helpers.show_on_top.call(null,el);
cljs.core.apply.call(null,gin.dom_helpers.set_position,el,gin.game_panel.discard_position.call(null));
return gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(el,map__29280,map__29280__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards,our_cards))
});})(game,opp_cards_el,our_cards_es,discards_es,vec__29275,their_region_offset_x,their_region_offset_y,vec__29276,our_region_offset_x,our_region_offset_y,their_cards,our_cards))
,cljs.core.range.call(null),discards_es);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,their_cards,our_cards,discards));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__29281,p__29282,conn){var vec__29283 = p__29281;var game_id = cljs.core.nth.call(null,vec__29283,0,null);var turn = cljs.core.nth.call(null,vec__29283,1,null);var map__29284 = p__29282;var map__29284__$1 = ((cljs.core.seq_QMARK_.call(null,map__29284))?cljs.core.apply.call(null,cljs.core.hash_map,map__29284):map__29284);var report = map__29284__$1;var db_after = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__29285 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__29285__$1 = ((cljs.core.seq_QMARK_.call(null,map__29285))?cljs.core.apply.call(null,cljs.core.hash_map,map__29285):map__29285);var game = map__29285__$1;var turn__$1 = cljs.core.get.call(null,map__29285__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__29285__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__29286,p__29287,conn){var vec__29288 = p__29286;var game_id = cljs.core.nth.call(null,vec__29288,0,null);var card_id = cljs.core.nth.call(null,vec__29288,1,null);var map__29289 = p__29287;var map__29289__$1 = ((cljs.core.seq_QMARK_.call(null,map__29289))?cljs.core.apply.call(null,cljs.core.hash_map,map__29289):map__29289);var report = map__29289__$1;var db_after = cljs.core.get.call(null,map__29289__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__29291,p__29292,conn){var vec__29293 = p__29291;var game_id = cljs.core.nth.call(null,vec__29293,0,null);var card_id = cljs.core.nth.call(null,vec__29293,1,null);var suit = cljs.core.nth.call(null,vec__29293,2,null);var rank = cljs.core.nth.call(null,vec__29293,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__29293,4,null);var map__29294 = p__29292;var map__29294__$1 = ((cljs.core.seq_QMARK_.call(null,map__29294))?cljs.core.apply.call(null,cljs.core.hash_map,map__29294):map__29294);var report = map__29294__$1;var db_after = cljs.core.get.call(null,map__29294__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__29295_29299 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__29296_29300 = null;var count__29297_29301 = 0;var i__29298_29302 = 0;while(true){
if((i__29298_29302 < count__29297_29301))
{var card_id_29303__$1 = cljs.core._nth.call(null,chunk__29296_29300,i__29298_29302);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_29303__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29304 = seq__29295_29299;
var G__29305 = chunk__29296_29300;
var G__29306 = count__29297_29301;
var G__29307 = (i__29298_29302 + 1);
seq__29295_29299 = G__29304;
chunk__29296_29300 = G__29305;
count__29297_29301 = G__29306;
i__29298_29302 = G__29307;
continue;
}
} else
{var temp__4092__auto___29308 = cljs.core.seq.call(null,seq__29295_29299);if(temp__4092__auto___29308)
{var seq__29295_29309__$1 = temp__4092__auto___29308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29295_29309__$1))
{var c__17389__auto___29310 = cljs.core.chunk_first.call(null,seq__29295_29309__$1);{
var G__29311 = cljs.core.chunk_rest.call(null,seq__29295_29309__$1);
var G__29312 = c__17389__auto___29310;
var G__29313 = cljs.core.count.call(null,c__17389__auto___29310);
var G__29314 = 0;
seq__29295_29299 = G__29311;
chunk__29296_29300 = G__29312;
count__29297_29301 = G__29313;
i__29298_29302 = G__29314;
continue;
}
} else
{var card_id_29315__$1 = cljs.core.first.call(null,seq__29295_29309__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_29315__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29316 = cljs.core.next.call(null,seq__29295_29309__$1);
var G__29317 = null;
var G__29318 = 0;
var G__29319 = 0;
seq__29295_29299 = G__29316;
chunk__29296_29300 = G__29317;
count__29297_29301 = G__29318;
i__29298_29302 = G__29319;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29290_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__29290_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__29290_SHARP_,gin.game_panel.pile_position.call(null)));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__29320,p__29321,conn){var vec__29322 = p__29320;var game_id = cljs.core.nth.call(null,vec__29322,0,null);var card_id = cljs.core.nth.call(null,vec__29322,1,null);var map__29323 = p__29321;var map__29323__$1 = ((cljs.core.seq_QMARK_.call(null,map__29323))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323):map__29323);var report = map__29323__$1;var db_after = cljs.core.get.call(null,map__29323__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__29324 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__29324__$1 = ((cljs.core.seq_QMARK_.call(null,map__29324))?cljs.core.apply.call(null,cljs.core.hash_map,map__29324):map__29324);var game = map__29324__$1;var our_cards = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__29325 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__29326 = null;var count__29327 = 0;var i__29328 = 0;while(true){
if((i__29328 < count__29327))
{var card_id__$1 = cljs.core._nth.call(null,chunk__29326,i__29328);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29329 = seq__29325;
var G__29330 = chunk__29326;
var G__29331 = count__29327;
var G__29332 = (i__29328 + 1);
seq__29325 = G__29329;
chunk__29326 = G__29330;
count__29327 = G__29331;
i__29328 = G__29332;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29325);if(temp__4092__auto__)
{var seq__29325__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29325__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29325__$1);{
var G__29333 = cljs.core.chunk_rest.call(null,seq__29325__$1);
var G__29334 = c__17389__auto__;
var G__29335 = cljs.core.count.call(null,c__17389__auto__);
var G__29336 = 0;
seq__29325 = G__29333;
chunk__29326 = G__29334;
count__29327 = G__29335;
i__29328 = G__29336;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__29325__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29337 = cljs.core.next.call(null,seq__29325__$1);
var G__29338 = null;
var G__29339 = 0;
var G__29340 = 0;
seq__29325 = G__29337;
chunk__29326 = G__29338;
count__29327 = G__29339;
i__29328 = G__29340;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__29341,p__29342,conn){var vec__29343 = p__29341;var game_id = cljs.core.nth.call(null,vec__29343,0,null);var card_id = cljs.core.nth.call(null,vec__29343,1,null);var map__29344 = p__29342;var map__29344__$1 = ((cljs.core.seq_QMARK_.call(null,map__29344))?cljs.core.apply.call(null,cljs.core.hash_map,map__29344):map__29344);var report = map__29344__$1;var db_after = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__29345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__29346 = null;var count__29347 = 0;var i__29348 = 0;while(true){
if((i__29348 < count__29347))
{var card_id__$1 = cljs.core._nth.call(null,chunk__29346,i__29348);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__29349 = seq__29345;
var G__29350 = chunk__29346;
var G__29351 = count__29347;
var G__29352 = (i__29348 + 1);
seq__29345 = G__29349;
chunk__29346 = G__29350;
count__29347 = G__29351;
i__29348 = G__29352;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29345);if(temp__4092__auto__)
{var seq__29345__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29345__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29345__$1);{
var G__29353 = cljs.core.chunk_rest.call(null,seq__29345__$1);
var G__29354 = c__17389__auto__;
var G__29355 = cljs.core.count.call(null,c__17389__auto__);
var G__29356 = 0;
seq__29345 = G__29353;
chunk__29346 = G__29354;
count__29347 = G__29355;
i__29348 = G__29356;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__29345__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__29357 = cljs.core.next.call(null,seq__29345__$1);
var G__29358 = null;
var G__29359 = 0;
var G__29360 = 0;
seq__29345 = G__29357;
chunk__29346 = G__29358;
count__29347 = G__29359;
i__29348 = G__29360;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__29364,p__29365,conn){var vec__29366 = p__29364;var game_id = cljs.core.nth.call(null,vec__29366,0,null);var card_id = cljs.core.nth.call(null,vec__29366,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__29366,2,null);var map__29367 = p__29365;var map__29367__$1 = ((cljs.core.seq_QMARK_.call(null,map__29367))?cljs.core.apply.call(null,cljs.core.hash_map,map__29367):map__29367);var report = map__29367__$1;var db_after = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__29368 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29368,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29368,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29362_SHARP_,p2__29361_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__29361_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29362_SHARP_ * 48.18)),(their_region_offset_y + (p1__29362_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__29361_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29363_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__29363_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__29363_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__29371,p__29372,conn){var vec__29373 = p__29371;var game_id = cljs.core.nth.call(null,vec__29373,0,null);var card_id = cljs.core.nth.call(null,vec__29373,1,null);var _ = cljs.core.nth.call(null,vec__29373,2,null);var ___$1 = cljs.core.nth.call(null,vec__29373,3,null);var map__29374 = p__29372;var map__29374__$1 = ((cljs.core.seq_QMARK_.call(null,map__29374))?cljs.core.apply.call(null,cljs.core.hash_map,map__29374):map__29374);var report = map__29374__$1;var db_after = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__29375 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29375,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29375,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29370_SHARP_,p2__29369_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__29369_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29370_SHARP_ * 48.18)),(their_region_offset_y + (p1__29370_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__29369_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__29378,p__29379,conn){var vec__29380 = p__29378;var game_id = cljs.core.nth.call(null,vec__29380,0,null);var card_id = cljs.core.nth.call(null,vec__29380,1,null);var suit = cljs.core.nth.call(null,vec__29380,2,null);var rank = cljs.core.nth.call(null,vec__29380,3,null);var map__29381 = p__29379;var map__29381__$1 = ((cljs.core.seq_QMARK_.call(null,map__29381))?cljs.core.apply.call(null,cljs.core.hash_map,map__29381):map__29381);var report = map__29381__$1;var db_after = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__29382 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29382,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29382,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29377_SHARP_,p2__29376_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__29376_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29377_SHARP_ * 53)),(their_region_offset_y + (p1__29377_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__29383,p__29384,conn){var vec__29385 = p__29383;var game_id = cljs.core.nth.call(null,vec__29385,0,null);var result = cljs.core.nth.call(null,vec__29385,1,null);var map__29386 = p__29384;var map__29386__$1 = ((cljs.core.seq_QMARK_.call(null,map__29386))?cljs.core.apply.call(null,cljs.core.hash_map,map__29386):map__29386);var report = map__29386__$1;var db_after = cljs.core.get.call(null,map__29386__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_29395 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_29396 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_29396,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_29395,restart_button_29396);
return gin.dom_helpers.schedule.call(null,(function (){var iter__17358__auto__ = (function iter__29387(s__29388){return (new cljs.core.LazySeq(null,(function (){var s__29388__$1 = s__29388;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29388__$1);if(temp__4092__auto__)
{var s__29388__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29388__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__29388__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__29390 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__29389 = 0;while(true){
if((i__29389 < size__17357__auto__))
{var card_id = cljs.core._nth.call(null,c__17356__auto__,i__29389);cljs.core.chunk_append.call(null,b__29390,(function (){var map__29393 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__29393__$1 = ((cljs.core.seq_QMARK_.call(null,map__29393))?cljs.core.apply.call(null,cljs.core.hash_map,map__29393):map__29393);var suit = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__29389,map__29393,map__29393__$1,suit,rank,card_id,c__17356__auto__,size__17357__auto__,b__29390,s__29388__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__29389,map__29393,map__29393__$1,suit,rank,card_id,c__17356__auto__,size__17357__auto__,b__29390,s__29388__$2,temp__4092__auto__))
})());
{
var G__29397 = (i__29389 + 1);
i__29389 = G__29397;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29390),iter__29387.call(null,cljs.core.chunk_rest.call(null,s__29388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29390),null);
}
} else
{var card_id = cljs.core.first.call(null,s__29388__$2);return cljs.core.cons.call(null,(function (){var map__29394 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__29394__$1 = ((cljs.core.seq_QMARK_.call(null,map__29394))?cljs.core.apply.call(null,cljs.core.hash_map,map__29394):map__29394);var suit = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__29394,map__29394__$1,suit,rank,card_id,s__29388__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__29394,map__29394__$1,suit,rank,card_id,s__29388__$2,temp__4092__auto__))
})(),iter__29387.call(null,cljs.core.rest.call(null,s__29388__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));
})());
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__29400 = report;var map__29400__$1 = ((cljs.core.seq_QMARK_.call(null,map__29400))?cljs.core.apply.call(null,cljs.core.hash_map,map__29400):map__29400);var db_after = cljs.core.get.call(null,map__29400__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__29401 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__29401,0,null);var args = cljs.core.nth.call(null,vec__29401,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__29432_29462 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__29432_29462,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__29432_29462,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__29432_29462,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17358__auto__ = (function iter__29433(s__29434){return (new cljs.core.LazySeq(null,(function (){var s__29434__$1 = s__29434;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29434__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17354__auto__ = ((function (s__29434__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__29435(s__29436){return (new cljs.core.LazySeq(null,((function (s__29434__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__29436__$1 = s__29436;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29436__$1);if(temp__4092__auto____$1)
{var s__29436__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29436__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__29436__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__29438 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__29437 = 0;while(true){
if((i__29437 < size__17357__auto__))
{var rank = cljs.core._nth.call(null,c__17356__auto__,i__29437);cljs.core.chunk_append.call(null,b__29438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__29463 = (i__29437 + 1);
i__29437 = G__29463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29438),iter__29435.call(null,cljs.core.chunk_rest.call(null,s__29436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29438),null);
}
} else
{var rank = cljs.core.first.call(null,s__29436__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__29435.call(null,cljs.core.rest.call(null,s__29436__$2)));
}
} else
{return null;
}
break;
}
});})(s__29434__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__29434__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17355__auto__ = cljs.core.seq.call(null,iterys__17354__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17355__auto__)
{return cljs.core.concat.call(null,fs__17355__auto__,iter__29433.call(null,cljs.core.rest.call(null,s__29434__$1)));
} else
{{
var G__29464 = cljs.core.rest.call(null,s__29434__$1);
s__29434__$1 = G__29464;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"spade","spade",1123542167)], null));
})())));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__29439 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__29439,0,null);var pile_y = cljs.core.nth.call(null,vec__29439,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__29439,pile_x,pile_y){
return (function iter__29440(s__29441){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__29439,pile_x,pile_y){
return (function (){var s__29441__$1 = s__29441;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29441__$1);if(temp__4092__auto__)
{var s__29441__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29441__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__29441__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__29443 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__29442 = 0;while(true){
if((i__29442 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__29442);cljs.core.chunk_append.call(null,b__29443,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__29446 = (new goog.fx.Dragger(card_el));G__29446.setLimits(container_wrap);
return G__29446;
})();card_el.dispose = ((function (i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29442,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29443,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__29465 = (i__29442 + 1);
i__29442 = G__29465;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29443),iter__29440.call(null,cljs.core.chunk_rest.call(null,s__29441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29443),null);
}
} else
{var i = cljs.core.first.call(null,s__29441__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__29447 = (new goog.fx.Dragger(card_el));G__29447.setLimits(container_wrap);
return G__29447;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29441__$2,temp__4092__auto__,container_wrap,vec__29439,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__29440.call(null,cljs.core.rest.call(null,s__29441__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__29439,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__29439,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__29448_29466 = cljs.core.seq.call(null,cards);var chunk__29449_29467 = null;var count__29450_29468 = 0;var i__29451_29469 = 0;while(true){
if((i__29451_29469 < count__29450_29468))
{var map__29452_29470 = cljs.core._nth.call(null,chunk__29449_29467,i__29451_29469);var map__29452_29471__$1 = ((cljs.core.seq_QMARK_.call(null,map__29452_29470))?cljs.core.apply.call(null,cljs.core.hash_map,map__29452_29470):map__29452_29470);var card_el_29472 = cljs.core.get.call(null,map__29452_29471__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_29472);
{
var G__29473 = seq__29448_29466;
var G__29474 = chunk__29449_29467;
var G__29475 = count__29450_29468;
var G__29476 = (i__29451_29469 + 1);
seq__29448_29466 = G__29473;
chunk__29449_29467 = G__29474;
count__29450_29468 = G__29475;
i__29451_29469 = G__29476;
continue;
}
} else
{var temp__4092__auto___29477 = cljs.core.seq.call(null,seq__29448_29466);if(temp__4092__auto___29477)
{var seq__29448_29478__$1 = temp__4092__auto___29477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29448_29478__$1))
{var c__17389__auto___29479 = cljs.core.chunk_first.call(null,seq__29448_29478__$1);{
var G__29480 = cljs.core.chunk_rest.call(null,seq__29448_29478__$1);
var G__29481 = c__17389__auto___29479;
var G__29482 = cljs.core.count.call(null,c__17389__auto___29479);
var G__29483 = 0;
seq__29448_29466 = G__29480;
chunk__29449_29467 = G__29481;
count__29450_29468 = G__29482;
i__29451_29469 = G__29483;
continue;
}
} else
{var map__29453_29484 = cljs.core.first.call(null,seq__29448_29478__$1);var map__29453_29485__$1 = ((cljs.core.seq_QMARK_.call(null,map__29453_29484))?cljs.core.apply.call(null,cljs.core.hash_map,map__29453_29484):map__29453_29484);var card_el_29486 = cljs.core.get.call(null,map__29453_29485__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_29486);
{
var G__29487 = cljs.core.next.call(null,seq__29448_29478__$1);
var G__29488 = null;
var G__29489 = 0;
var G__29490 = 0;
seq__29448_29466 = G__29487;
chunk__29449_29467 = G__29488;
count__29450_29468 = G__29489;
i__29451_29469 = G__29490;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__29454(s__29455){return (new cljs.core.LazySeq(null,(function (){var s__29455__$1 = s__29455;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29455__$1);if(temp__4092__auto__)
{var s__29455__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29455__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__29455__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__29457 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__29456 = 0;while(true){
if((i__29456 < size__17357__auto__))
{var map__29460 = cljs.core._nth.call(null,c__17356__auto__,i__29456);var map__29460__$1 = ((cljs.core.seq_QMARK_.call(null,map__29460))?cljs.core.apply.call(null,cljs.core.hash_map,map__29460):map__29460);var card_el = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__29457,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__29491 = (i__29456 + 1);
i__29456 = G__29491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29457),iter__29454.call(null,cljs.core.chunk_rest.call(null,s__29455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29457),null);
}
} else
{var map__29461 = cljs.core.first.call(null,s__29455__$2);var map__29461__$1 = ((cljs.core.seq_QMARK_.call(null,map__29461))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);var card_el = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__29454.call(null,cljs.core.rest.call(null,s__29455__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,cards);
})());
});
gin.game_panel.anim_deal = (function anim_deal(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game: ",game,game_id);var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__29492_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29492_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__29500 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29500,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29500,1,null);var vec__29501 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__29501,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__29501,1,null);var ___$1 = console.log("here");var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1){
return (function (p1__29494_SHARP_,p2__29493_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__29493_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1))
], null),gin.dom_helpers.slide_from.call(null,p2__29493_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29494_SHARP_ * 53)),(their_region_offset_y + (p1__29494_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1,their_deal){
return (function (idx,p__29503){var map__29504 = p__29503;var map__29504__$1 = ((cljs.core.seq_QMARK_.call(null,map__29504))?cljs.core.apply.call(null,cljs.core.hash_map,map__29504):map__29504);var id = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__29504,map__29504__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__29504,map__29504__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__29504,map__29504__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__29504,map__29504__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__29500,their_region_offset_x,their_region_offset_y,vec__29501,our_region_offset_x,our_region_offset_y,___$1,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__29502 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__29502,0,null);var second_deal = cljs.core.nth.call(null,vec__29502,1,null);console.log("here222",cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)));
return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return console.log("1111");
})], null),first_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return console.log("333333333");
})], null),second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return console.log("444444");
})], null),(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
});
gin.game_panel.draw = (function draw(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game)))
{return gin.game_panel.set_msg.call(null,"Game created.");
} else
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"ready","ready",1122290965).cljs$core$IFn$_invoke$arity$1(game))))
{gin.game_panel.set_msg.call(null,"Dealing ...");
return gin.game_panel.anim_deal.call(null,db,game_id,conn);
} else
{if(cljs.core.not.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game)))
{return gin.game_panel.set_msg.call(null,"Ready, waiting on opponent");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var _ = console.log("Regular draw case");var us_pick_card = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,10,cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game))));var our_cards_es = cljs.core.map.call(null,((function (_,us_pick_card){
return (function (p1__29505_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29505_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__29541 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29541,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29541,1,null);var seq__29542_29569 = cljs.core.seq.call(null,pile_cards_el);var chunk__29544_29570 = null;var count__29545_29571 = 0;var i__29546_29572 = 0;while(true){
if((i__29546_29572 < count__29545_29571))
{var pile_card_el_29573 = cljs.core._nth.call(null,chunk__29544_29570,i__29546_29572);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,pile_card_el_29573)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29573){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_29573,"card_back");
});})(seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29573))
,((function (seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29573){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_29573);
});})(seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29573))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_29573,gin.game_panel.pile_position.call(null))));
{
var G__29574 = seq__29542_29569;
var G__29575 = chunk__29544_29570;
var G__29576 = count__29545_29571;
var G__29577 = (i__29546_29572 + 1);
seq__29542_29569 = G__29574;
chunk__29544_29570 = G__29575;
count__29545_29571 = G__29576;
i__29546_29572 = G__29577;
continue;
}
} else
{{
var G__29578 = seq__29542_29569;
var G__29579 = chunk__29544_29570;
var G__29580 = count__29545_29571;
var G__29581 = (i__29546_29572 + 1);
seq__29542_29569 = G__29578;
chunk__29544_29570 = G__29579;
count__29545_29571 = G__29580;
i__29546_29572 = G__29581;
continue;
}
}
} else
{var temp__4092__auto___29582 = cljs.core.seq.call(null,seq__29542_29569);if(temp__4092__auto___29582)
{var seq__29542_29583__$1 = temp__4092__auto___29582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29542_29583__$1))
{var c__17389__auto___29584 = cljs.core.chunk_first.call(null,seq__29542_29583__$1);{
var G__29585 = cljs.core.chunk_rest.call(null,seq__29542_29583__$1);
var G__29586 = c__17389__auto___29584;
var G__29587 = cljs.core.count.call(null,c__17389__auto___29584);
var G__29588 = 0;
seq__29542_29569 = G__29585;
chunk__29544_29570 = G__29586;
count__29545_29571 = G__29587;
i__29546_29572 = G__29588;
continue;
}
} else
{var pile_card_el_29589 = cljs.core.first.call(null,seq__29542_29583__$1);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,pile_card_el_29589)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29589,seq__29542_29583__$1,temp__4092__auto___29582){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_29589,"card_back");
});})(seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29589,seq__29542_29583__$1,temp__4092__auto___29582))
,((function (seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29589,seq__29542_29583__$1,temp__4092__auto___29582){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_29589);
});})(seq__29542_29569,chunk__29544_29570,count__29545_29571,i__29546_29572,pile_card_el_29589,seq__29542_29583__$1,temp__4092__auto___29582))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_29589,gin.game_panel.pile_position.call(null))));
{
var G__29590 = cljs.core.next.call(null,seq__29542_29583__$1);
var G__29591 = null;
var G__29592 = 0;
var G__29593 = 0;
seq__29542_29569 = G__29590;
chunk__29544_29570 = G__29591;
count__29545_29571 = G__29592;
i__29546_29572 = G__29593;
continue;
}
} else
{{
var G__29594 = cljs.core.next.call(null,seq__29542_29583__$1);
var G__29595 = null;
var G__29596 = 0;
var G__29597 = 0;
seq__29542_29569 = G__29594;
chunk__29544_29570 = G__29595;
count__29545_29571 = G__29596;
i__29546_29572 = G__29597;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___29598 = cljs.core.peek.call(null,pile_cards_el);if(cljs.core.truth_(temp__4092__auto___29598))
{var pile_card_el_29599 = temp__4092__auto___29598;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_29599,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_29599,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var seq__29548_29600 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__29506_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29506_SHARP_], null));
}),new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));var chunk__29551_29601 = null;var count__29552_29602 = 0;var i__29553_29603 = 0;while(true){
if((i__29553_29603 < count__29552_29602))
{var discard_card_es_29604 = cljs.core._nth.call(null,chunk__29551_29601,i__29553_29603);var discard_card_el_29605 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_29604));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,discard_card_el_29605)))
{var suit_29606 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_29604);var rank_29607 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_29604);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29606,rank_29607,discard_card_el_29605,discard_card_es_29604){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_29605,[cljs.core.str(cljs.core.name.call(null,suit_29606)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_29607))].join(''));
});})(seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29606,rank_29607,discard_card_el_29605,discard_card_es_29604))
,((function (seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29606,rank_29607,discard_card_el_29605,discard_card_es_29604){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_29605);
});})(seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29606,rank_29607,discard_card_el_29605,discard_card_es_29604))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_29605,gin.game_panel.discard_position.call(null))));
{
var G__29608 = seq__29548_29600;
var G__29609 = chunk__29551_29601;
var G__29610 = count__29552_29602;
var G__29611 = (i__29553_29603 + 1);
seq__29548_29600 = G__29608;
chunk__29551_29601 = G__29609;
count__29552_29602 = G__29610;
i__29553_29603 = G__29611;
continue;
}
} else
{{
var G__29612 = seq__29548_29600;
var G__29613 = chunk__29551_29601;
var G__29614 = count__29552_29602;
var G__29615 = (i__29553_29603 + 1);
seq__29548_29600 = G__29612;
chunk__29551_29601 = G__29613;
count__29552_29602 = G__29614;
i__29553_29603 = G__29615;
continue;
}
}
} else
{var temp__4092__auto___29616 = cljs.core.seq.call(null,seq__29548_29600);if(temp__4092__auto___29616)
{var seq__29548_29617__$1 = temp__4092__auto___29616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29548_29617__$1))
{var c__17389__auto___29618 = cljs.core.chunk_first.call(null,seq__29548_29617__$1);{
var G__29619 = cljs.core.chunk_rest.call(null,seq__29548_29617__$1);
var G__29620 = c__17389__auto___29618;
var G__29621 = cljs.core.count.call(null,c__17389__auto___29618);
var G__29622 = 0;
seq__29548_29600 = G__29619;
chunk__29551_29601 = G__29620;
count__29552_29602 = G__29621;
i__29553_29603 = G__29622;
continue;
}
} else
{var discard_card_es_29623 = cljs.core.first.call(null,seq__29548_29617__$1);var discard_card_el_29624 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_29623));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,discard_card_el_29624)))
{var suit_29625 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_29623);var rank_29626 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_29623);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29625,rank_29626,discard_card_el_29624,discard_card_es_29623,seq__29548_29617__$1,temp__4092__auto___29616){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_29624,[cljs.core.str(cljs.core.name.call(null,suit_29625)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_29626))].join(''));
});})(seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29625,rank_29626,discard_card_el_29624,discard_card_es_29623,seq__29548_29617__$1,temp__4092__auto___29616))
,((function (seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29625,rank_29626,discard_card_el_29624,discard_card_es_29623,seq__29548_29617__$1,temp__4092__auto___29616){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_29624);
});})(seq__29548_29600,chunk__29551_29601,count__29552_29602,i__29553_29603,suit_29625,rank_29626,discard_card_el_29624,discard_card_es_29623,seq__29548_29617__$1,temp__4092__auto___29616))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_29624,gin.game_panel.discard_position.call(null))));
{
var G__29627 = cljs.core.next.call(null,seq__29548_29617__$1);
var G__29628 = null;
var G__29629 = 0;
var G__29630 = 0;
seq__29548_29600 = G__29627;
chunk__29551_29601 = G__29628;
count__29552_29602 = G__29629;
i__29553_29603 = G__29630;
continue;
}
} else
{{
var G__29631 = cljs.core.next.call(null,seq__29548_29617__$1);
var G__29632 = null;
var G__29633 = 0;
var G__29634 = 0;
seq__29548_29600 = G__29631;
chunk__29551_29601 = G__29632;
count__29552_29602 = G__29633;
i__29553_29603 = G__29634;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___29635 = cljs.core.peek.call(null,discard_cards_el);if(cljs.core.truth_(temp__4092__auto___29635))
{var discard_card_el_29636 = temp__4092__auto___29635;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_29636,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_29636,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,cljs.core.first.call(null,opp_cards_el)),gin.dom_helpers.get_pos.call(null,cljs.core.second.call(null,opp_cards_el))))
{gin.dom_helpers.schedule.call(null,cljs.core.map.call(null,(function (idx,el){return (function (){gin.dom_helpers.show_on_top.call(null,el);
return gin.dom_helpers.set_position.call(null,el,(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4)));
});
}),cljs.core.range.call(null),opp_cards_el));
} else
{var temp__4090__auto___29637 = cljs.core.some.call(null,(function (el){if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,el)))
{return el;
} else
{return null;
}
}),opp_cards_el);if(cljs.core.truth_(temp__4090__auto___29637))
{var from_pile_29638 = temp__4090__auto___29637;gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29508_SHARP_,p2__29507_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__29507_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29508_SHARP_ * 48.18)),(their_region_offset_y + (p1__29508_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__29507_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el))));
} else
{var temp__4090__auto___29639__$1 = cljs.core.some.call(null,(function (el){if(cljs.core._EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,el)))
{return el;
} else
{return null;
}
}),opp_cards_el);if(cljs.core.truth_(temp__4090__auto___29639__$1))
{var from_discard_29640 = temp__4090__auto___29639__$1;gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,from_discard_29640,"card_back");
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29510_SHARP_,p2__29509_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__29509_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29510_SHARP_ * 48.18)),(their_region_offset_y + (p1__29510_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__29509_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el))));
} else
{var vec__29556_29641 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_29642 = cljs.core.nth.call(null,vec__29556_29641,0,null);var y_step_29643 = cljs.core.nth.call(null,vec__29556_29641,1,null);gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__29512_SHARP_,p2__29511_SHARP_){return gin.dom_helpers.slide_from.call(null,p2__29511_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29512_SHARP_ * x_step_29642)),(their_region_offset_y + (p1__29512_SHARP_ * y_step_29643))], null));
}),cljs.core.range.call(null),opp_cards_el)));
}
}
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__29557 = cljs.core.seq.call(null,our_cards_es);var chunk__29558 = null;var count__29559 = 0;var i__29560 = 0;while(true){
if((i__29560 < count__29559))
{var our_card_es = cljs.core._nth.call(null,chunk__29558,i__29560);console.log("our-card-es",cljs.core.pr_str.call(null,our_card_es),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));
var our_card_el_29644 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_29645 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_29646 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_29644,((cljs.core._EQ_.call(null,suit_29645,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_29645)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_29646))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_29644,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29647 = seq__29557;
var G__29648 = chunk__29558;
var G__29649 = count__29559;
var G__29650 = (i__29560 + 1);
seq__29557 = G__29647;
chunk__29558 = G__29648;
count__29559 = G__29649;
i__29560 = G__29650;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29557);if(temp__4092__auto__)
{var seq__29557__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29557__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29557__$1);{
var G__29651 = cljs.core.chunk_rest.call(null,seq__29557__$1);
var G__29652 = c__17389__auto__;
var G__29653 = cljs.core.count.call(null,c__17389__auto__);
var G__29654 = 0;
seq__29557 = G__29651;
chunk__29558 = G__29652;
count__29559 = G__29653;
i__29560 = G__29654;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__29557__$1);console.log("our-card-es",cljs.core.pr_str.call(null,our_card_es),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));
var our_card_el_29655 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_29656 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_29657 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_29655,((cljs.core._EQ_.call(null,suit_29656,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_29656)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_29657))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_29655,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__29658 = cljs.core.next.call(null,seq__29557__$1);
var G__29659 = null;
var G__29660 = 0;
var G__29661 = 0;
seq__29557 = G__29658;
chunk__29558 = G__29659;
count__29559 = G__29660;
i__29560 = G__29661;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{gin.game_panel.set_msg.call(null,"Your turn. Draw a card or pickup a discard.");
var seq__29561 = cljs.core.seq.call(null,our_cards_es);var chunk__29562 = null;var count__29563 = 0;var i__29564 = 0;while(true){
if((i__29564 < count__29563))
{var our_card_es = cljs.core._nth.call(null,chunk__29562,i__29564);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__29662 = seq__29561;
var G__29663 = chunk__29562;
var G__29664 = count__29563;
var G__29665 = (i__29564 + 1);
seq__29561 = G__29662;
chunk__29562 = G__29663;
count__29563 = G__29664;
i__29564 = G__29665;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29561);if(temp__4092__auto__)
{var seq__29561__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29561__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29561__$1);{
var G__29666 = cljs.core.chunk_rest.call(null,seq__29561__$1);
var G__29667 = c__17389__auto__;
var G__29668 = cljs.core.count.call(null,c__17389__auto__);
var G__29669 = 0;
seq__29561 = G__29666;
chunk__29562 = G__29667;
count__29563 = G__29668;
i__29564 = G__29669;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__29561__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__29670 = cljs.core.next.call(null,seq__29561__$1);
var G__29671 = null;
var G__29672 = 0;
var G__29673 = 0;
seq__29561 = G__29670;
chunk__29562 = G__29671;
count__29563 = G__29672;
i__29564 = G__29673;
continue;
}
}
} else
{return null;
}
}
break;
}
}
} else
{gin.game_panel.set_msg.call(null,"Opponent to move.");
var seq__29565 = cljs.core.seq.call(null,our_cards_es);var chunk__29566 = null;var count__29567 = 0;var i__29568 = 0;while(true){
if((i__29568 < count__29567))
{var our_card_es = cljs.core._nth.call(null,chunk__29566,i__29568);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__29674 = seq__29565;
var G__29675 = chunk__29566;
var G__29676 = count__29567;
var G__29677 = (i__29568 + 1);
seq__29565 = G__29674;
chunk__29566 = G__29675;
count__29567 = G__29676;
i__29568 = G__29677;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29565);if(temp__4092__auto__)
{var seq__29565__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29565__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29565__$1);{
var G__29678 = cljs.core.chunk_rest.call(null,seq__29565__$1);
var G__29679 = c__17389__auto__;
var G__29680 = cljs.core.count.call(null,c__17389__auto__);
var G__29681 = 0;
seq__29565 = G__29678;
chunk__29566 = G__29679;
count__29567 = G__29680;
i__29568 = G__29681;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__29565__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__29682 = cljs.core.next.call(null,seq__29565__$1);
var G__29683 = null;
var G__29684 = 0;
var G__29685 = 0;
seq__29565 = G__29682;
chunk__29566 = G__29683;
count__29567 = G__29684;
i__29568 = G__29685;
continue;
}
}
} else
{return null;
}
}
break;
}
}
} else
{return null;
}
}
}
}
});
gin.game_panel.draw_game = (function draw_game(report,conn){var map__29689 = report;var map__29689__$1 = ((cljs.core.seq_QMARK_.call(null,map__29689))?cljs.core.apply.call(null,cljs.core.hash_map,map__29689):map__29689);var db_after = cljs.core.get.call(null,map__29689__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__29690 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__29690,0,null);var vec__29691 = cljs.core.nth.call(null,vec__29690,1,null);var game_id = cljs.core.nth.call(null,vec__29691,0,null);var args = cljs.core.nthnext.call(null,vec__29691,1);return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
