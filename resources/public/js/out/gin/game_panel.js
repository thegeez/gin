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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__12120,p__12121,_){var vec__12122 = p__12120;var game_id = cljs.core.nth.call(null,vec__12122,0,null);var map__12123 = p__12121;var map__12123__$1 = ((cljs.core.seq_QMARK_.call(null,map__12123))?cljs.core.apply.call(null,cljs.core.hash_map,map__12123):map__12123);var db_after = cljs.core.get.call(null,map__12123__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__12124 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__12124__$1 = ((cljs.core.seq_QMARK_.call(null,map__12124))?cljs.core.apply.call(null,cljs.core.hash_map,map__12124):map__12124);var game = map__12124__$1;var turn = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__12125,___$1,___$2){var vec__12126 = p__12125;var game_id = cljs.core.nth.call(null,vec__12126,0,null);var result = cljs.core.nth.call(null,vec__12126,1,null);var ___$3 = cljs.core.nth.call(null,vec__12126,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__12127 = cljs.core._EQ_;var expr__12128 = result;if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__12128)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__12128)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__12128)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__12128)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__12128)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12128)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__12130){var vec__12132 = p__12130;var x = cljs.core.nth.call(null,vec__12132,0,null);var y = cljs.core.nth.call(null,vec__12132,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__12136,p__12137,conn){var vec__12138 = p__12136;var game_id = cljs.core.nth.call(null,vec__12138,0,null);var map__12139 = p__12137;var map__12139__$1 = ((cljs.core.seq_QMARK_.call(null,map__12139))?cljs.core.apply.call(null,cljs.core.hash_map,map__12139):map__12139);var report = map__12139__$1;var db_after = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__12133_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__12133_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__12140 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__12140,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__12140,1,null);var vec__12141 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__12141,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__12141,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y){
return (function (p1__12135_SHARP_,p2__12134_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__12134_SHARP_);
});})(game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__12134_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__12135_SHARP_ * 53)),(their_region_offset_y + (p1__12135_SHARP_ * 4))], null)));
});})(game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__12143){var map__12144 = p__12143;var map__12144__$1 = ((cljs.core.seq_QMARK_.call(null,map__12144))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144):map__12144);var id = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__12144,map__12144__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__12144,map__12144__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__12144,map__12144__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__12144,map__12144__$1,id,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,opp_cards_el,our_cards_es,discard,vec__12140,their_region_offset_x,their_region_offset_y,vec__12141,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__12142 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__12142,0,null);var second_deal = cljs.core.nth.call(null,vec__12142,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__12145,p__12146,conn){var vec__12147 = p__12145;var game_id = cljs.core.nth.call(null,vec__12147,0,null);var turn = cljs.core.nth.call(null,vec__12147,1,null);var map__12148 = p__12146;var map__12148__$1 = ((cljs.core.seq_QMARK_.call(null,map__12148))?cljs.core.apply.call(null,cljs.core.hash_map,map__12148):map__12148);var report = map__12148__$1;var db_after = cljs.core.get.call(null,map__12148__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__12149 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__12149__$1 = ((cljs.core.seq_QMARK_.call(null,map__12149))?cljs.core.apply.call(null,cljs.core.hash_map,map__12149):map__12149);var game = map__12149__$1;var turn__$1 = cljs.core.get.call(null,map__12149__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__12149__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__12150,p__12151,conn){var vec__12152 = p__12150;var game_id = cljs.core.nth.call(null,vec__12152,0,null);var card_id = cljs.core.nth.call(null,vec__12152,1,null);var map__12153 = p__12151;var map__12153__$1 = ((cljs.core.seq_QMARK_.call(null,map__12153))?cljs.core.apply.call(null,cljs.core.hash_map,map__12153):map__12153);var report = map__12153__$1;var db_after = cljs.core.get.call(null,map__12153__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__12155,p__12156,conn){var vec__12157 = p__12155;var game_id = cljs.core.nth.call(null,vec__12157,0,null);var card_id = cljs.core.nth.call(null,vec__12157,1,null);var suit = cljs.core.nth.call(null,vec__12157,2,null);var rank = cljs.core.nth.call(null,vec__12157,3,null);var pile_reshuffle = cljs.core.nth.call(null,vec__12157,4,null);var map__12158 = p__12156;var map__12158__$1 = ((cljs.core.seq_QMARK_.call(null,map__12158))?cljs.core.apply.call(null,cljs.core.hash_map,map__12158):map__12158);var report = map__12158__$1;var db_after = cljs.core.get.call(null,map__12158__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
var seq__12159_12163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__12160_12164 = null;var count__12161_12165 = 0;var i__12162_12166 = 0;while(true){
if((i__12162_12166 < count__12161_12165))
{var card_id_12167__$1 = cljs.core._nth.call(null,chunk__12160_12164,i__12162_12166);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_12167__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__12168 = seq__12159_12163;
var G__12169 = chunk__12160_12164;
var G__12170 = count__12161_12165;
var G__12171 = (i__12162_12166 + 1);
seq__12159_12163 = G__12168;
chunk__12160_12164 = G__12169;
count__12161_12165 = G__12170;
i__12162_12166 = G__12171;
continue;
}
} else
{var temp__4092__auto___12172 = cljs.core.seq.call(null,seq__12159_12163);if(temp__4092__auto___12172)
{var seq__12159_12173__$1 = temp__4092__auto___12172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12159_12173__$1))
{var c__10127__auto___12174 = cljs.core.chunk_first.call(null,seq__12159_12173__$1);{
var G__12175 = cljs.core.chunk_rest.call(null,seq__12159_12173__$1);
var G__12176 = c__10127__auto___12174;
var G__12177 = cljs.core.count.call(null,c__10127__auto___12174);
var G__12178 = 0;
seq__12159_12163 = G__12175;
chunk__12160_12164 = G__12176;
count__12161_12165 = G__12177;
i__12162_12166 = G__12178;
continue;
}
} else
{var card_id_12179__$1 = cljs.core.first.call(null,seq__12159_12173__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id_12179__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__12180 = cljs.core.next.call(null,seq__12159_12173__$1);
var G__12181 = null;
var G__12182 = 0;
var G__12183 = 0;
seq__12159_12163 = G__12180;
chunk__12160_12164 = G__12181;
count__12161_12165 = G__12182;
i__12162_12166 = G__12183;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pile_reshuffle))
{var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__12154_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__12154_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__12154_SHARP_,gin.game_panel.pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__12184,p__12185,conn){var vec__12186 = p__12184;var game_id = cljs.core.nth.call(null,vec__12186,0,null);var card_id = cljs.core.nth.call(null,vec__12186,1,null);var map__12187 = p__12185;var map__12187__$1 = ((cljs.core.seq_QMARK_.call(null,map__12187))?cljs.core.apply.call(null,cljs.core.hash_map,map__12187):map__12187);var report = map__12187__$1;var db_after = cljs.core.get.call(null,map__12187__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__12188 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__12188__$1 = ((cljs.core.seq_QMARK_.call(null,map__12188))?cljs.core.apply.call(null,cljs.core.hash_map,map__12188):map__12188);var game = map__12188__$1;var our_cards = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__12188__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__12189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__12190 = null;var count__12191 = 0;var i__12192 = 0;while(true){
if((i__12192 < count__12191))
{var card_id__$1 = cljs.core._nth.call(null,chunk__12190,i__12192);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__12193 = seq__12189;
var G__12194 = chunk__12190;
var G__12195 = count__12191;
var G__12196 = (i__12192 + 1);
seq__12189 = G__12193;
chunk__12190 = G__12194;
count__12191 = G__12195;
i__12192 = G__12196;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12189);if(temp__4092__auto__)
{var seq__12189__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12189__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__12189__$1);{
var G__12197 = cljs.core.chunk_rest.call(null,seq__12189__$1);
var G__12198 = c__10127__auto__;
var G__12199 = cljs.core.count.call(null,c__10127__auto__);
var G__12200 = 0;
seq__12189 = G__12197;
chunk__12190 = G__12198;
count__12191 = G__12199;
i__12192 = G__12200;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__12189__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__12201 = cljs.core.next.call(null,seq__12189__$1);
var G__12202 = null;
var G__12203 = 0;
var G__12204 = 0;
seq__12189 = G__12201;
chunk__12190 = G__12202;
count__12191 = G__12203;
i__12192 = G__12204;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__12205,p__12206,conn){var vec__12207 = p__12205;var game_id = cljs.core.nth.call(null,vec__12207,0,null);var card_id = cljs.core.nth.call(null,vec__12207,1,null);var map__12208 = p__12206;var map__12208__$1 = ((cljs.core.seq_QMARK_.call(null,map__12208))?cljs.core.apply.call(null,cljs.core.hash_map,map__12208):map__12208);var report = map__12208__$1;var db_after = cljs.core.get.call(null,map__12208__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__12209 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__12210 = null;var count__12211 = 0;var i__12212 = 0;while(true){
if((i__12212 < count__12211))
{var card_id__$1 = cljs.core._nth.call(null,chunk__12210,i__12212);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__12213 = seq__12209;
var G__12214 = chunk__12210;
var G__12215 = count__12211;
var G__12216 = (i__12212 + 1);
seq__12209 = G__12213;
chunk__12210 = G__12214;
count__12211 = G__12215;
i__12212 = G__12216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12209);if(temp__4092__auto__)
{var seq__12209__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12209__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__12209__$1);{
var G__12217 = cljs.core.chunk_rest.call(null,seq__12209__$1);
var G__12218 = c__10127__auto__;
var G__12219 = cljs.core.count.call(null,c__10127__auto__);
var G__12220 = 0;
seq__12209 = G__12217;
chunk__12210 = G__12218;
count__12211 = G__12219;
i__12212 = G__12220;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__12209__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__12221 = cljs.core.next.call(null,seq__12209__$1);
var G__12222 = null;
var G__12223 = 0;
var G__12224 = 0;
seq__12209 = G__12221;
chunk__12210 = G__12222;
count__12211 = G__12223;
i__12212 = G__12224;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__12228,p__12229,conn){var vec__12230 = p__12228;var game_id = cljs.core.nth.call(null,vec__12230,0,null);var card_id = cljs.core.nth.call(null,vec__12230,1,null);var pile_reshuffle = cljs.core.nth.call(null,vec__12230,2,null);var map__12231 = p__12229;var map__12231__$1 = ((cljs.core.seq_QMARK_.call(null,map__12231))?cljs.core.apply.call(null,cljs.core.hash_map,map__12231):map__12231);var report = map__12231__$1;var db_after = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__12232 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__12232,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__12232,1,null);var pile_position = gin.game_panel.pile_position.call(null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__12226_SHARP_,p2__12225_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__12225_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__12226_SHARP_ * 48.18)),(their_region_offset_y + (p1__12226_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__12225_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),(cljs.core.truth_(pile_reshuffle)?gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__12227_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,p1__12227_SHARP_,"card_back");
})], null),gin.dom_helpers.slide_from.call(null,p1__12227_SHARP_,pile_position));
}),cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)))):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__12235,p__12236,conn){var vec__12237 = p__12235;var game_id = cljs.core.nth.call(null,vec__12237,0,null);var card_id = cljs.core.nth.call(null,vec__12237,1,null);var _ = cljs.core.nth.call(null,vec__12237,2,null);var ___$1 = cljs.core.nth.call(null,vec__12237,3,null);var map__12238 = p__12236;var map__12238__$1 = ((cljs.core.seq_QMARK_.call(null,map__12238))?cljs.core.apply.call(null,cljs.core.hash_map,map__12238):map__12238);var report = map__12238__$1;var db_after = cljs.core.get.call(null,map__12238__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__12239 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__12239,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__12239,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__12234_SHARP_,p2__12233_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__12233_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__12234_SHARP_ * 48.18)),(their_region_offset_y + (p1__12234_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__12233_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__12242,p__12243,conn){var vec__12244 = p__12242;var game_id = cljs.core.nth.call(null,vec__12244,0,null);var card_id = cljs.core.nth.call(null,vec__12244,1,null);var suit = cljs.core.nth.call(null,vec__12244,2,null);var rank = cljs.core.nth.call(null,vec__12244,3,null);var map__12245 = p__12243;var map__12245__$1 = ((cljs.core.seq_QMARK_.call(null,map__12245))?cljs.core.apply.call(null,cljs.core.hash_map,map__12245):map__12245);var report = map__12245__$1;var db_after = cljs.core.get.call(null,map__12245__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__12246 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__12246,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__12246,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__12241_SHARP_,p2__12240_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__12240_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__12241_SHARP_ * 53)),(their_region_offset_y + (p1__12241_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__12247,p__12248,conn){var vec__12249 = p__12247;var game_id = cljs.core.nth.call(null,vec__12249,0,null);var result = cljs.core.nth.call(null,vec__12249,1,null);var map__12250 = p__12248;var map__12250__$1 = ((cljs.core.seq_QMARK_.call(null,map__12250))?cljs.core.apply.call(null,cljs.core.hash_map,map__12250):map__12250);var report = map__12250__$1;var db_after = cljs.core.get.call(null,map__12250__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_12259 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_12260 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_12260,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_12259,restart_button_12260);
return gin.dom_helpers.schedule.call(null,(function (){var iter__10096__auto__ = (function iter__12251(s__12252){return (new cljs.core.LazySeq(null,(function (){var s__12252__$1 = s__12252;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12252__$1);if(temp__4092__auto__)
{var s__12252__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12252__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__12252__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__12254 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__12253 = 0;while(true){
if((i__12253 < size__10095__auto__))
{var card_id = cljs.core._nth.call(null,c__10094__auto__,i__12253);cljs.core.chunk_append.call(null,b__12254,(function (){var map__12257 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__12257__$1 = ((cljs.core.seq_QMARK_.call(null,map__12257))?cljs.core.apply.call(null,cljs.core.hash_map,map__12257):map__12257);var suit = cljs.core.get.call(null,map__12257__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__12257__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__12253,map__12257,map__12257__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__12254,s__12252__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__12253,map__12257,map__12257__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__12254,s__12252__$2,temp__4092__auto__))
})());
{
var G__12261 = (i__12253 + 1);
i__12253 = G__12261;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12254),iter__12251.call(null,cljs.core.chunk_rest.call(null,s__12252__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12254),null);
}
} else
{var card_id = cljs.core.first.call(null,s__12252__$2);return cljs.core.cons.call(null,(function (){var map__12258 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__12258__$1 = ((cljs.core.seq_QMARK_.call(null,map__12258))?cljs.core.apply.call(null,cljs.core.hash_map,map__12258):map__12258);var suit = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__12258,map__12258__$1,suit,rank,card_id,s__12252__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__12258,map__12258__$1,suit,rank,card_id,s__12252__$2,temp__4092__auto__))
})(),iter__12251.call(null,cljs.core.rest.call(null,s__12252__$2)));
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
gin.game_panel.render = (function render(report,conn){var map__12264 = report;var map__12264__$1 = ((cljs.core.seq_QMARK_.call(null,map__12264))?cljs.core.apply.call(null,cljs.core.hash_map,map__12264):map__12264);var db_after = cljs.core.get.call(null,map__12264__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__12265 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__12265,0,null);var args = cljs.core.nth.call(null,vec__12265,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__12296_12326 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__12296_12326,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__12296_12326,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__12296_12326,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__12297(s__12298){return (new cljs.core.LazySeq(null,(function (){var s__12298__$1 = s__12298;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12298__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__12298__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__12299(s__12300){return (new cljs.core.LazySeq(null,((function (s__12298__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12300__$1 = s__12300;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12300__$1);if(temp__4092__auto____$1)
{var s__12300__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12300__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__12300__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__12302 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__12301 = 0;while(true){
if((i__12301 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__12301);cljs.core.chunk_append.call(null,b__12302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__12327 = (i__12301 + 1);
i__12301 = G__12327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12302),iter__12299.call(null,cljs.core.chunk_rest.call(null,s__12300__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12302),null);
}
} else
{var rank = cljs.core.first.call(null,s__12300__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__12299.call(null,cljs.core.rest.call(null,s__12300__$2)));
}
} else
{return null;
}
break;
}
});})(s__12298__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12298__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__12297.call(null,cljs.core.rest.call(null,s__12298__$1)));
} else
{{
var G__12328 = cljs.core.rest.call(null,s__12298__$1);
s__12298__$1 = G__12328;
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
})();var vec__12303 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__12303,0,null);var pile_y = cljs.core.nth.call(null,vec__12303,1,null);var cards = (function (){var iter__10096__auto__ = ((function (container_wrap,vec__12303,pile_x,pile_y){
return (function iter__12304(s__12305){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__12303,pile_x,pile_y){
return (function (){var s__12305__$1 = s__12305;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12305__$1);if(temp__4092__auto__)
{var s__12305__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12305__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__12305__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__12307 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__12306 = 0;while(true){
if((i__12306 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__12306);cljs.core.chunk_append.call(null,b__12307,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__12310 = (new goog.fx.Dragger(card_el));G__12310.setLimits(container_wrap);
return G__12310;
})();card_el.dispose = ((function (i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__12306,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__12307,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__12329 = (i__12306 + 1);
i__12306 = G__12329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12307),iter__12304.call(null,cljs.core.chunk_rest.call(null,s__12305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12307),null);
}
} else
{var i = cljs.core.first.call(null,s__12305__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__12311 = (new goog.fx.Dragger(card_el));G__12311.setLimits(container_wrap);
return G__12311;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__12305__$2,temp__4092__auto__,container_wrap,vec__12303,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__12304.call(null,cljs.core.rest.call(null,s__12305__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__12303,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__12303,pile_x,pile_y))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__12312_12330 = cljs.core.seq.call(null,cards);var chunk__12313_12331 = null;var count__12314_12332 = 0;var i__12315_12333 = 0;while(true){
if((i__12315_12333 < count__12314_12332))
{var map__12316_12334 = cljs.core._nth.call(null,chunk__12313_12331,i__12315_12333);var map__12316_12335__$1 = ((cljs.core.seq_QMARK_.call(null,map__12316_12334))?cljs.core.apply.call(null,cljs.core.hash_map,map__12316_12334):map__12316_12334);var card_el_12336 = cljs.core.get.call(null,map__12316_12335__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_12336);
{
var G__12337 = seq__12312_12330;
var G__12338 = chunk__12313_12331;
var G__12339 = count__12314_12332;
var G__12340 = (i__12315_12333 + 1);
seq__12312_12330 = G__12337;
chunk__12313_12331 = G__12338;
count__12314_12332 = G__12339;
i__12315_12333 = G__12340;
continue;
}
} else
{var temp__4092__auto___12341 = cljs.core.seq.call(null,seq__12312_12330);if(temp__4092__auto___12341)
{var seq__12312_12342__$1 = temp__4092__auto___12341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12312_12342__$1))
{var c__10127__auto___12343 = cljs.core.chunk_first.call(null,seq__12312_12342__$1);{
var G__12344 = cljs.core.chunk_rest.call(null,seq__12312_12342__$1);
var G__12345 = c__10127__auto___12343;
var G__12346 = cljs.core.count.call(null,c__10127__auto___12343);
var G__12347 = 0;
seq__12312_12330 = G__12344;
chunk__12313_12331 = G__12345;
count__12314_12332 = G__12346;
i__12315_12333 = G__12347;
continue;
}
} else
{var map__12317_12348 = cljs.core.first.call(null,seq__12312_12342__$1);var map__12317_12349__$1 = ((cljs.core.seq_QMARK_.call(null,map__12317_12348))?cljs.core.apply.call(null,cljs.core.hash_map,map__12317_12348):map__12317_12348);var card_el_12350 = cljs.core.get.call(null,map__12317_12349__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_12350);
{
var G__12351 = cljs.core.next.call(null,seq__12312_12342__$1);
var G__12352 = null;
var G__12353 = 0;
var G__12354 = 0;
seq__12312_12330 = G__12351;
chunk__12313_12331 = G__12352;
count__12314_12332 = G__12353;
i__12315_12333 = G__12354;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__12318(s__12319){return (new cljs.core.LazySeq(null,(function (){var s__12319__$1 = s__12319;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12319__$1);if(temp__4092__auto__)
{var s__12319__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12319__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__12319__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__12321 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__12320 = 0;while(true){
if((i__12320 < size__10095__auto__))
{var map__12324 = cljs.core._nth.call(null,c__10094__auto__,i__12320);var map__12324__$1 = ((cljs.core.seq_QMARK_.call(null,map__12324))?cljs.core.apply.call(null,cljs.core.hash_map,map__12324):map__12324);var card_el = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__12321,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__12355 = (i__12320 + 1);
i__12320 = G__12355;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12321),iter__12318.call(null,cljs.core.chunk_rest.call(null,s__12319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12321),null);
}
} else
{var map__12325 = cljs.core.first.call(null,s__12319__$2);var map__12325__$1 = ((cljs.core.seq_QMARK_.call(null,map__12325))?cljs.core.apply.call(null,cljs.core.hash_map,map__12325):map__12325);var card_el = cljs.core.get.call(null,map__12325__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__12325__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__12325__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__12318.call(null,cljs.core.rest.call(null,s__12319__$2)));
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
