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
gin.game_panel.msg = (function (){var method_table__17517__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17521__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("msg",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17521__auto__,method_table__17517__auto__,prefer_table__17518__auto__,method_cache__17519__auto__,cached_hierarchy__17520__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Dealing ...");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,___$1,___$2,___$3){return gin.game_panel.set_msg.call(null,"Ready, waiting on opponent");
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"join-game","join-game",4768214567),(function (event,p__21331,p__21332,_){var vec__21333 = p__21331;var game_id = cljs.core.nth.call(null,vec__21333,0,null);var map__21334 = p__21332;var map__21334__$1 = ((cljs.core.seq_QMARK_.call(null,map__21334))?cljs.core.apply.call(null,cljs.core.hash_map,map__21334):map__21334);var db_after = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.game_panel.set_msg.call(null,[cljs.core.str("Returned to game: "),cljs.core.str(console.log("GAME: ",cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game)], null)))),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game)))?"Your turn to ":"Opponent to ")),cljs.core.str(((cljs.core._EQ_.call(null,20,(cljs.core.count.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game)) + cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game)))))?"draw a card or pick a discard":"choose card to discard"))].join(''));
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__21335,p__21336,_){var vec__21337 = p__21335;var game_id = cljs.core.nth.call(null,vec__21337,0,null);var map__21338 = p__21336;var map__21338__$1 = ((cljs.core.seq_QMARK_.call(null,map__21338))?cljs.core.apply.call(null,cljs.core.hash_map,map__21338):map__21338);var db_after = cljs.core.get.call(null,map__21338__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21339 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21339__$1 = ((cljs.core.seq_QMARK_.call(null,map__21339))?cljs.core.apply.call(null,cljs.core.hash_map,map__21339):map__21339);var game = map__21339__$1;var turn = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__21340,___$1,___$2){var vec__21341 = p__21340;var game_id = cljs.core.nth.call(null,vec__21341,0,null);var result = cljs.core.nth.call(null,vec__21341,1,null);var ___$3 = cljs.core.nth.call(null,vec__21341,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__21342 = cljs.core._EQ_;var expr__21343 = result;if(cljs.core.truth_(pred__21342.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__21343)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__21342.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__21343)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__21342.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__21343)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__21342.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__21343)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__21342.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__21343)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21343)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__21345){var vec__21347 = p__21345;var x = cljs.core.nth.call(null,vec__21347,0,null);var y = cljs.core.nth.call(null,vec__21347,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.handle = (function (){var method_table__17517__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17521__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17521__auto__,method_table__17517__auto__,prefer_table__17518__auto__,method_cache__17519__auto__,cached_hierarchy__17520__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__21351,p__21352,conn){var vec__21353 = p__21351;var game_id = cljs.core.nth.call(null,vec__21353,0,null);var map__21354 = p__21352;var map__21354__$1 = ((cljs.core.seq_QMARK_.call(null,map__21354))?cljs.core.apply.call(null,cljs.core.hash_map,map__21354):map__21354);var report = map__21354__$1;var db_after = cljs.core.get.call(null,map__21354__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__21348_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__21348_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__21355 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21355,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21355,1,null);var vec__21356 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__21356,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__21356,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y){
return (function (p1__21350_SHARP_,p2__21349_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__21349_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__21349_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21350_SHARP_ * 53)),(their_region_offset_y + (p1__21350_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__21358){var map__21359 = p__21358;var map__21359__$1 = ((cljs.core.seq_QMARK_.call(null,map__21359))?cljs.core.apply.call(null,cljs.core.hash_map,map__21359):map__21359);var id = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__21359,map__21359__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__21359,map__21359__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__21359,map__21359__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__21359,map__21359__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__21355,their_region_offset_x,their_region_offset_y,vec__21356,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__21357 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__21357,0,null);var second_deal = cljs.core.nth.call(null,vec__21357,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"join-game","join-game",4768214567),(function (event,p__21362,p__21363,conn){var vec__21364 = p__21362;var game_id = cljs.core.nth.call(null,vec__21364,0,null);var map__21365 = p__21363;var map__21365__$1 = ((cljs.core.seq_QMARK_.call(null,map__21365))?cljs.core.apply.call(null,cljs.core.hash_map,map__21365):map__21365);var report = map__21365__$1;var db_after = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__21360_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__21360_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discards_es = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es){
return (function (p1__21361_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__21361_SHARP_], null));
});})(game,opp_cards_el,our_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__21366 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21366,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21366,1,null);var vec__21367 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__21367,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__21367,1,null);var their_cards = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return ((function (game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y){
return (function (){gin.dom_helpers.show_on_top.call(null,el);
return gin.dom_helpers.set_position.call(null,el,(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4)));
});
;})(game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y))
});})(game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_cards = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards){
return (function (idx,p__21368){var map__21369 = p__21368;var map__21369__$1 = ((cljs.core.seq_QMARK_.call(null,map__21369))?cljs.core.apply.call(null,cljs.core.hash_map,map__21369):map__21369);var id = cljs.core.get.call(null,map__21369__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__21369__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21369__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return ((function (el,map__21369,map__21369__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards){
return (function (){gin.dom_helpers.show_on_top.call(null,el);
gin.dom_helpers.set_position.call(null,el,(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4)));
gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});
;})(el,map__21369,map__21369__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards))
});})(game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards))
,cljs.core.range.call(null),our_cards_es);var discards = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards,our_cards){
return (function (idx,p__21370){var map__21371 = p__21370;var map__21371__$1 = ((cljs.core.seq_QMARK_.call(null,map__21371))?cljs.core.apply.call(null,cljs.core.hash_map,map__21371):map__21371);var id = cljs.core.get.call(null,map__21371__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__21371__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21371__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return ((function (el,map__21371,map__21371__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards,our_cards){
return (function (){gin.dom_helpers.show_on_top.call(null,el);
cljs.core.apply.call(null,gin.dom_helpers.set_position,el,gin.game_panel.discard_position.call(null));
return gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(el,map__21371,map__21371__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards,our_cards))
});})(game,opp_cards_el,our_cards_es,discards_es,vec__21366,their_region_offset_x,their_region_offset_y,vec__21367,our_region_offset_x,our_region_offset_y,their_cards,our_cards))
,cljs.core.range.call(null),discards_es);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,their_cards,our_cards,discards));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__21372,p__21373,conn){var vec__21374 = p__21372;var game_id = cljs.core.nth.call(null,vec__21374,0,null);var turn = cljs.core.nth.call(null,vec__21374,1,null);var map__21375 = p__21373;var map__21375__$1 = ((cljs.core.seq_QMARK_.call(null,map__21375))?cljs.core.apply.call(null,cljs.core.hash_map,map__21375):map__21375);var report = map__21375__$1;var db_after = cljs.core.get.call(null,map__21375__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21376 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21376__$1 = ((cljs.core.seq_QMARK_.call(null,map__21376))?cljs.core.apply.call(null,cljs.core.hash_map,map__21376):map__21376);var game = map__21376__$1;var turn__$1 = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__21377,p__21378,conn){var vec__21379 = p__21377;var game_id = cljs.core.nth.call(null,vec__21379,0,null);var card_id = cljs.core.nth.call(null,vec__21379,1,null);var map__21380 = p__21378;var map__21380__$1 = ((cljs.core.seq_QMARK_.call(null,map__21380))?cljs.core.apply.call(null,cljs.core.hash_map,map__21380):map__21380);var report = map__21380__$1;var db_after = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)),card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__21382,p__21383,conn){var vec__21384 = p__21382;var game_id = cljs.core.nth.call(null,vec__21384,0,null);var card_id = cljs.core.nth.call(null,vec__21384,1,null);var suit = cljs.core.nth.call(null,vec__21384,2,null);var rank = cljs.core.nth.call(null,vec__21384,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__21384,4,null);var map__21385 = p__21383;var map__21385__$1 = ((cljs.core.seq_QMARK_.call(null,map__21385))?cljs.core.apply.call(null,cljs.core.hash_map,map__21385):map__21385);var report = map__21385__$1;var db_after = cljs.core.get.call(null,map__21385__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__21386_21390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__21387_21391 = null;var count__21388_21392 = 0;var i__21389_21393 = 0;while(true){
if((i__21389_21393 < count__21388_21392))
{var card_id_21394__$1 = cljs.core._nth.call(null,chunk__21387_21391,i__21389_21393);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_21394__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21395 = seq__21386_21390;
var G__21396 = chunk__21387_21391;
var G__21397 = count__21388_21392;
var G__21398 = (i__21389_21393 + 1);
seq__21386_21390 = G__21395;
chunk__21387_21391 = G__21396;
count__21388_21392 = G__21397;
i__21389_21393 = G__21398;
continue;
}
} else
{var temp__4092__auto___21399 = cljs.core.seq.call(null,seq__21386_21390);if(temp__4092__auto___21399)
{var seq__21386_21400__$1 = temp__4092__auto___21399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21386_21400__$1))
{var c__17407__auto___21401 = cljs.core.chunk_first.call(null,seq__21386_21400__$1);{
var G__21402 = cljs.core.chunk_rest.call(null,seq__21386_21400__$1);
var G__21403 = c__17407__auto___21401;
var G__21404 = cljs.core.count.call(null,c__17407__auto___21401);
var G__21405 = 0;
seq__21386_21390 = G__21402;
chunk__21387_21391 = G__21403;
count__21388_21392 = G__21404;
i__21389_21393 = G__21405;
continue;
}
} else
{var card_id_21406__$1 = cljs.core.first.call(null,seq__21386_21400__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_21406__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21407 = cljs.core.next.call(null,seq__21386_21400__$1);
var G__21408 = null;
var G__21409 = 0;
var G__21410 = 0;
seq__21386_21390 = G__21407;
chunk__21387_21391 = G__21408;
count__21388_21392 = G__21409;
i__21389_21393 = G__21410;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21381_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__21381_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__21381_SHARP_,gin.game_panel.pile_position.call(null)));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__21411,p__21412,conn){var vec__21413 = p__21411;var game_id = cljs.core.nth.call(null,vec__21413,0,null);var card_id = cljs.core.nth.call(null,vec__21413,1,null);var map__21414 = p__21412;var map__21414__$1 = ((cljs.core.seq_QMARK_.call(null,map__21414))?cljs.core.apply.call(null,cljs.core.hash_map,map__21414):map__21414);var report = map__21414__$1;var db_after = cljs.core.get.call(null,map__21414__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__21415 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__21415__$1 = ((cljs.core.seq_QMARK_.call(null,map__21415))?cljs.core.apply.call(null,cljs.core.hash_map,map__21415):map__21415);var game = map__21415__$1;var our_cards = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__21416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__21417 = null;var count__21418 = 0;var i__21419 = 0;while(true){
if((i__21419 < count__21418))
{var card_id__$1 = cljs.core._nth.call(null,chunk__21417,i__21419);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21420 = seq__21416;
var G__21421 = chunk__21417;
var G__21422 = count__21418;
var G__21423 = (i__21419 + 1);
seq__21416 = G__21420;
chunk__21417 = G__21421;
count__21418 = G__21422;
i__21419 = G__21423;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21416);if(temp__4092__auto__)
{var seq__21416__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21416__$1))
{var c__17407__auto__ = cljs.core.chunk_first.call(null,seq__21416__$1);{
var G__21424 = cljs.core.chunk_rest.call(null,seq__21416__$1);
var G__21425 = c__17407__auto__;
var G__21426 = cljs.core.count.call(null,c__17407__auto__);
var G__21427 = 0;
seq__21416 = G__21424;
chunk__21417 = G__21425;
count__21418 = G__21426;
i__21419 = G__21427;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__21416__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__21428 = cljs.core.next.call(null,seq__21416__$1);
var G__21429 = null;
var G__21430 = 0;
var G__21431 = 0;
seq__21416 = G__21428;
chunk__21417 = G__21429;
count__21418 = G__21430;
i__21419 = G__21431;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__21432,p__21433,conn){var vec__21434 = p__21432;var game_id = cljs.core.nth.call(null,vec__21434,0,null);var card_id = cljs.core.nth.call(null,vec__21434,1,null);var map__21435 = p__21433;var map__21435__$1 = ((cljs.core.seq_QMARK_.call(null,map__21435))?cljs.core.apply.call(null,cljs.core.hash_map,map__21435):map__21435);var report = map__21435__$1;var db_after = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__21436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__21437 = null;var count__21438 = 0;var i__21439 = 0;while(true){
if((i__21439 < count__21438))
{var card_id__$1 = cljs.core._nth.call(null,chunk__21437,i__21439);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__21440 = seq__21436;
var G__21441 = chunk__21437;
var G__21442 = count__21438;
var G__21443 = (i__21439 + 1);
seq__21436 = G__21440;
chunk__21437 = G__21441;
count__21438 = G__21442;
i__21439 = G__21443;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21436);if(temp__4092__auto__)
{var seq__21436__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21436__$1))
{var c__17407__auto__ = cljs.core.chunk_first.call(null,seq__21436__$1);{
var G__21444 = cljs.core.chunk_rest.call(null,seq__21436__$1);
var G__21445 = c__17407__auto__;
var G__21446 = cljs.core.count.call(null,c__17407__auto__);
var G__21447 = 0;
seq__21436 = G__21444;
chunk__21437 = G__21445;
count__21438 = G__21446;
i__21439 = G__21447;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__21436__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__21448 = cljs.core.next.call(null,seq__21436__$1);
var G__21449 = null;
var G__21450 = 0;
var G__21451 = 0;
seq__21436 = G__21448;
chunk__21437 = G__21449;
count__21438 = G__21450;
i__21439 = G__21451;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__21455,p__21456,conn){var vec__21457 = p__21455;var game_id = cljs.core.nth.call(null,vec__21457,0,null);var card_id = cljs.core.nth.call(null,vec__21457,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__21457,2,null);var map__21458 = p__21456;var map__21458__$1 = ((cljs.core.seq_QMARK_.call(null,map__21458))?cljs.core.apply.call(null,cljs.core.hash_map,map__21458):map__21458);var report = map__21458__$1;var db_after = cljs.core.get.call(null,map__21458__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21459 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21459,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21459,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21453_SHARP_,p2__21452_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__21452_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21453_SHARP_ * 48.18)),(their_region_offset_y + (p1__21453_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__21452_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21454_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__21454_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__21454_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__21462,p__21463,conn){var vec__21464 = p__21462;var game_id = cljs.core.nth.call(null,vec__21464,0,null);var card_id = cljs.core.nth.call(null,vec__21464,1,null);var _ = cljs.core.nth.call(null,vec__21464,2,null);var ___$1 = cljs.core.nth.call(null,vec__21464,3,null);var map__21465 = p__21463;var map__21465__$1 = ((cljs.core.seq_QMARK_.call(null,map__21465))?cljs.core.apply.call(null,cljs.core.hash_map,map__21465):map__21465);var report = map__21465__$1;var db_after = cljs.core.get.call(null,map__21465__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21466 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21466,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21466,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21461_SHARP_,p2__21460_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__21460_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21461_SHARP_ * 48.18)),(their_region_offset_y + (p1__21461_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__21460_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__21469,p__21470,conn){var vec__21471 = p__21469;var game_id = cljs.core.nth.call(null,vec__21471,0,null);var card_id = cljs.core.nth.call(null,vec__21471,1,null);var suit = cljs.core.nth.call(null,vec__21471,2,null);var rank = cljs.core.nth.call(null,vec__21471,3,null);var map__21472 = p__21470;var map__21472__$1 = ((cljs.core.seq_QMARK_.call(null,map__21472))?cljs.core.apply.call(null,cljs.core.hash_map,map__21472):map__21472);var report = map__21472__$1;var db_after = cljs.core.get.call(null,map__21472__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__21473 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__21473,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__21473,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__21468_SHARP_,p2__21467_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__21467_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__21468_SHARP_ * 53)),(their_region_offset_y + (p1__21468_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__21474,p__21475,conn){var vec__21476 = p__21474;var game_id = cljs.core.nth.call(null,vec__21476,0,null);var result = cljs.core.nth.call(null,vec__21476,1,null);var map__21477 = p__21475;var map__21477__$1 = ((cljs.core.seq_QMARK_.call(null,map__21477))?cljs.core.apply.call(null,cljs.core.hash_map,map__21477):map__21477);var report = map__21477__$1;var db_after = cljs.core.get.call(null,map__21477__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_21486 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_21487 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_21487,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_21486,restart_button_21487);
return gin.dom_helpers.schedule.call(null,(function (){var iter__17376__auto__ = (function iter__21478(s__21479){return (new cljs.core.LazySeq(null,(function (){var s__21479__$1 = s__21479;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21479__$1);if(temp__4092__auto__)
{var s__21479__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21479__$2))
{var c__17374__auto__ = cljs.core.chunk_first.call(null,s__21479__$2);var size__17375__auto__ = cljs.core.count.call(null,c__17374__auto__);var b__21481 = cljs.core.chunk_buffer.call(null,size__17375__auto__);if((function (){var i__21480 = 0;while(true){
if((i__21480 < size__17375__auto__))
{var card_id = cljs.core._nth.call(null,c__17374__auto__,i__21480);cljs.core.chunk_append.call(null,b__21481,(function (){var map__21484 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__21484__$1 = ((cljs.core.seq_QMARK_.call(null,map__21484))?cljs.core.apply.call(null,cljs.core.hash_map,map__21484):map__21484);var suit = cljs.core.get.call(null,map__21484__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21484__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__21480,map__21484,map__21484__$1,suit,rank,card_id,c__17374__auto__,size__17375__auto__,b__21481,s__21479__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__21480,map__21484,map__21484__$1,suit,rank,card_id,c__17374__auto__,size__17375__auto__,b__21481,s__21479__$2,temp__4092__auto__))
})());
{
var G__21488 = (i__21480 + 1);
i__21480 = G__21488;
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
{var card_id = cljs.core.first.call(null,s__21479__$2);return cljs.core.cons.call(null,(function (){var map__21485 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__21485__$1 = ((cljs.core.seq_QMARK_.call(null,map__21485))?cljs.core.apply.call(null,cljs.core.hash_map,map__21485):map__21485);var suit = cljs.core.get.call(null,map__21485__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__21485__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__21485,map__21485__$1,suit,rank,card_id,s__21479__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__21485,map__21485__$1,suit,rank,card_id,s__21479__$2,temp__4092__auto__))
})(),iter__21478.call(null,cljs.core.rest.call(null,s__21479__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17376__auto__.call(null,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));
})());
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__21491 = report;var map__21491__$1 = ((cljs.core.seq_QMARK_.call(null,map__21491))?cljs.core.apply.call(null,cljs.core.hash_map,map__21491):map__21491);var db_after = cljs.core.get.call(null,map__21491__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__21492 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__21492,0,null);var args = cljs.core.nth.call(null,vec__21492,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__21523_21553 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__21523_21553,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__21523_21553,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__21523_21553,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17376__auto__ = (function iter__21524(s__21525){return (new cljs.core.LazySeq(null,(function (){var s__21525__$1 = s__21525;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21525__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17372__auto__ = ((function (s__21525__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__21526(s__21527){return (new cljs.core.LazySeq(null,((function (s__21525__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__21527__$1 = s__21527;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__21527__$1);if(temp__4092__auto____$1)
{var s__21527__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21527__$2))
{var c__17374__auto__ = cljs.core.chunk_first.call(null,s__21527__$2);var size__17375__auto__ = cljs.core.count.call(null,c__17374__auto__);var b__21529 = cljs.core.chunk_buffer.call(null,size__17375__auto__);if((function (){var i__21528 = 0;while(true){
if((i__21528 < size__17375__auto__))
{var rank = cljs.core._nth.call(null,c__17374__auto__,i__21528);cljs.core.chunk_append.call(null,b__21529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__21554 = (i__21528 + 1);
i__21528 = G__21554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21529),iter__21526.call(null,cljs.core.chunk_rest.call(null,s__21527__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21529),null);
}
} else
{var rank = cljs.core.first.call(null,s__21527__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__21526.call(null,cljs.core.rest.call(null,s__21527__$2)));
}
} else
{return null;
}
break;
}
});})(s__21525__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__21525__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17373__auto__ = cljs.core.seq.call(null,iterys__17372__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17373__auto__)
{return cljs.core.concat.call(null,fs__17373__auto__,iter__21524.call(null,cljs.core.rest.call(null,s__21525__$1)));
} else
{{
var G__21555 = cljs.core.rest.call(null,s__21525__$1);
s__21525__$1 = G__21555;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17376__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"spade","spade",1123542167)], null));
})())));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__21530 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__21530,0,null);var pile_y = cljs.core.nth.call(null,vec__21530,1,null);var cards = (function (){var iter__17376__auto__ = ((function (container_wrap,vec__21530,pile_x,pile_y){
return (function iter__21531(s__21532){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__21530,pile_x,pile_y){
return (function (){var s__21532__$1 = s__21532;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21532__$1);if(temp__4092__auto__)
{var s__21532__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21532__$2))
{var c__17374__auto__ = cljs.core.chunk_first.call(null,s__21532__$2);var size__17375__auto__ = cljs.core.count.call(null,c__17374__auto__);var b__21534 = cljs.core.chunk_buffer.call(null,size__17375__auto__);if((function (){var i__21533 = 0;while(true){
if((i__21533 < size__17375__auto__))
{var i = cljs.core._nth.call(null,c__17374__auto__,i__21533);cljs.core.chunk_append.call(null,b__21534,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__21537 = (new goog.fx.Dragger(card_el));G__21537.setLimits(container_wrap);
return G__21537;
})();card_el.dispose = ((function (i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__21533,card_id,card_el,dragger,i,c__17374__auto__,size__17375__auto__,b__21534,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__21556 = (i__21533 + 1);
i__21533 = G__21556;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21534),iter__21531.call(null,cljs.core.chunk_rest.call(null,s__21532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21534),null);
}
} else
{var i = cljs.core.first.call(null,s__21532__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__21538 = (new goog.fx.Dragger(card_el));G__21538.setLimits(container_wrap);
return G__21538;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__21532__$2,temp__4092__auto__,container_wrap,vec__21530,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__21531.call(null,cljs.core.rest.call(null,s__21532__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__21530,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__21530,pile_x,pile_y))
;return iter__17376__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__21539_21557 = cljs.core.seq.call(null,cards);var chunk__21540_21558 = null;var count__21541_21559 = 0;var i__21542_21560 = 0;while(true){
if((i__21542_21560 < count__21541_21559))
{var map__21543_21561 = cljs.core._nth.call(null,chunk__21540_21558,i__21542_21560);var map__21543_21562__$1 = ((cljs.core.seq_QMARK_.call(null,map__21543_21561))?cljs.core.apply.call(null,cljs.core.hash_map,map__21543_21561):map__21543_21561);var card_el_21563 = cljs.core.get.call(null,map__21543_21562__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_21563);
{
var G__21564 = seq__21539_21557;
var G__21565 = chunk__21540_21558;
var G__21566 = count__21541_21559;
var G__21567 = (i__21542_21560 + 1);
seq__21539_21557 = G__21564;
chunk__21540_21558 = G__21565;
count__21541_21559 = G__21566;
i__21542_21560 = G__21567;
continue;
}
} else
{var temp__4092__auto___21568 = cljs.core.seq.call(null,seq__21539_21557);if(temp__4092__auto___21568)
{var seq__21539_21569__$1 = temp__4092__auto___21568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21539_21569__$1))
{var c__17407__auto___21570 = cljs.core.chunk_first.call(null,seq__21539_21569__$1);{
var G__21571 = cljs.core.chunk_rest.call(null,seq__21539_21569__$1);
var G__21572 = c__17407__auto___21570;
var G__21573 = cljs.core.count.call(null,c__17407__auto___21570);
var G__21574 = 0;
seq__21539_21557 = G__21571;
chunk__21540_21558 = G__21572;
count__21541_21559 = G__21573;
i__21542_21560 = G__21574;
continue;
}
} else
{var map__21544_21575 = cljs.core.first.call(null,seq__21539_21569__$1);var map__21544_21576__$1 = ((cljs.core.seq_QMARK_.call(null,map__21544_21575))?cljs.core.apply.call(null,cljs.core.hash_map,map__21544_21575):map__21544_21575);var card_el_21577 = cljs.core.get.call(null,map__21544_21576__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_21577);
{
var G__21578 = cljs.core.next.call(null,seq__21539_21569__$1);
var G__21579 = null;
var G__21580 = 0;
var G__21581 = 0;
seq__21539_21557 = G__21578;
chunk__21540_21558 = G__21579;
count__21541_21559 = G__21580;
i__21542_21560 = G__21581;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17376__auto__ = (function iter__21545(s__21546){return (new cljs.core.LazySeq(null,(function (){var s__21546__$1 = s__21546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21546__$1);if(temp__4092__auto__)
{var s__21546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21546__$2))
{var c__17374__auto__ = cljs.core.chunk_first.call(null,s__21546__$2);var size__17375__auto__ = cljs.core.count.call(null,c__17374__auto__);var b__21548 = cljs.core.chunk_buffer.call(null,size__17375__auto__);if((function (){var i__21547 = 0;while(true){
if((i__21547 < size__17375__auto__))
{var map__21551 = cljs.core._nth.call(null,c__17374__auto__,i__21547);var map__21551__$1 = ((cljs.core.seq_QMARK_.call(null,map__21551))?cljs.core.apply.call(null,cljs.core.hash_map,map__21551):map__21551);var card_el = cljs.core.get.call(null,map__21551__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__21551__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__21551__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__21548,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__21582 = (i__21547 + 1);
i__21547 = G__21582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21548),iter__21545.call(null,cljs.core.chunk_rest.call(null,s__21546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21548),null);
}
} else
{var map__21552 = cljs.core.first.call(null,s__21546__$2);var map__21552__$1 = ((cljs.core.seq_QMARK_.call(null,map__21552))?cljs.core.apply.call(null,cljs.core.hash_map,map__21552):map__21552);var card_el = cljs.core.get.call(null,map__21552__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__21552__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__21552__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__21545.call(null,cljs.core.rest.call(null,s__21546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17376__auto__.call(null,cards);
})());
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.render.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
