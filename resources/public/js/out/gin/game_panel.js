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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__22082,p__22083,_){var vec__22084 = p__22082;var game_id = cljs.core.nth.call(null,vec__22084,0,null);var map__22085 = p__22083;var map__22085__$1 = ((cljs.core.seq_QMARK_.call(null,map__22085))?cljs.core.apply.call(null,cljs.core.hash_map,map__22085):map__22085);var db_after = cljs.core.get.call(null,map__22085__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__22086 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__22086__$1 = ((cljs.core.seq_QMARK_.call(null,map__22086))?cljs.core.apply.call(null,cljs.core.hash_map,map__22086):map__22086);var game = map__22086__$1;var turn = cljs.core.get.call(null,map__22086__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__22086__$1,new cljs.core.Keyword(null,"us","us",1013907984));return gin.game_panel.set_msg.call(null,((cljs.core._EQ_.call(null,us,turn))?"Your turn. Draw a card or pickup a discard.":"Opponent to move."));
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
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (_,p__22087,___$1,___$2){var vec__22088 = p__22087;var game_id = cljs.core.nth.call(null,vec__22088,0,null);var result = cljs.core.nth.call(null,vec__22088,1,null);var ___$3 = cljs.core.nth.call(null,vec__22088,2,null);return gin.game_panel.set_msg.call(null,(function (){var pred__22089 = cljs.core._EQ_;var expr__22090 = result;if(cljs.core.truth_(pred__22089.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__22090)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__22089.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__22090)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__22089.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__22090)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__22089.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__22090)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__22089.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__22090)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22090)].join('')));
}
}
}
}
}
})());
}));
cljs.core._add_method.call(null,gin.game_panel.msg,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,args,report,conn){return null;
}));
gin.game_panel.in_rect = (function in_rect(rect,p__22092){var vec__22094 = p__22092;var x = cljs.core.nth.call(null,vec__22094,0,null);var y = cljs.core.nth.call(null,vec__22094,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__22098,p__22099,conn){var vec__22100 = p__22098;var game_id = cljs.core.nth.call(null,vec__22100,0,null);var map__22101 = p__22099;var map__22101__$1 = ((cljs.core.seq_QMARK_.call(null,map__22101))?cljs.core.apply.call(null,cljs.core.hash_map,map__22101):map__22101);var report = map__22101__$1;var db_after = cljs.core.get.call(null,map__22101__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__22095_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22095_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__22102 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__22102,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__22102,1,null);var vec__22103 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__22103,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__22103,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__22097_SHARP_,p2__22096_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__22096_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__22096_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__22097_SHARP_ * 53)),(their_region_offset_y + (p1__22097_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__22104){var map__22105 = p__22104;var map__22105__$1 = ((cljs.core.seq_QMARK_.call(null,map__22105))?cljs.core.apply.call(null,cljs.core.hash_map,map__22105):map__22105);var id = cljs.core.get.call(null,map__22105__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__22105__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__22105__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
})], null));
})()));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__22106,p__22107,conn){var vec__22108 = p__22106;var game_id = cljs.core.nth.call(null,vec__22108,0,null);var turn = cljs.core.nth.call(null,vec__22108,1,null);var map__22109 = p__22107;var map__22109__$1 = ((cljs.core.seq_QMARK_.call(null,map__22109))?cljs.core.apply.call(null,cljs.core.hash_map,map__22109):map__22109);var report = map__22109__$1;var db_after = cljs.core.get.call(null,map__22109__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__22110 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__22110__$1 = ((cljs.core.seq_QMARK_.call(null,map__22110))?cljs.core.apply.call(null,cljs.core.hash_map,map__22110):map__22110);var game = map__22110__$1;var turn__$1 = cljs.core.get.call(null,map__22110__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var us = cljs.core.get.call(null,map__22110__$1,new cljs.core.Keyword(null,"us","us",1013907984));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)));var discard_elem = gin.dom_helpers.get_element.call(null,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));if(cljs.core._EQ_.call(null,us,turn__$1))
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
return gin.game_panel.set_drag_handler.call(null,discard_elem,gin.game_panel.undraggable_handler.call(null,conn));
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__22111,p__22112,conn){var vec__22113 = p__22111;var game_id = cljs.core.nth.call(null,vec__22113,0,null);var card_id = cljs.core.nth.call(null,vec__22113,1,null);var map__22114 = p__22112;var map__22114__$1 = ((cljs.core.seq_QMARK_.call(null,map__22114))?cljs.core.apply.call(null,cljs.core.hash_map,map__22114):map__22114);var report = map__22114__$1;var db_after = cljs.core.get.call(null,map__22114__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,p__22115,p__22116,conn){var vec__22117 = p__22115;var game_id = cljs.core.nth.call(null,vec__22117,0,null);var card_id = cljs.core.nth.call(null,vec__22117,1,null);var suit = cljs.core.nth.call(null,vec__22117,2,null);var rank = cljs.core.nth.call(null,vec__22117,3,null);var map__22118 = p__22116;var map__22118__$1 = ((cljs.core.seq_QMARK_.call(null,map__22118))?cljs.core.apply.call(null,cljs.core.hash_map,map__22118):map__22118);var report = map__22118__$1;var db_after = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
console.log("our-cards: ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)))));
var seq__22119 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__22120 = null;var count__22121 = 0;var i__22122 = 0;while(true){
if((i__22122 < count__22121))
{var card_id__$1 = cljs.core._nth.call(null,chunk__22120,i__22122);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__22123 = seq__22119;
var G__22124 = chunk__22120;
var G__22125 = count__22121;
var G__22126 = (i__22122 + 1);
seq__22119 = G__22123;
chunk__22120 = G__22124;
count__22121 = G__22125;
i__22122 = G__22126;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22119);if(temp__4092__auto__)
{var seq__22119__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22119__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__22119__$1);{
var G__22127 = cljs.core.chunk_rest.call(null,seq__22119__$1);
var G__22128 = c__10127__auto__;
var G__22129 = cljs.core.count.call(null,c__10127__auto__);
var G__22130 = 0;
seq__22119 = G__22127;
chunk__22120 = G__22128;
count__22121 = G__22129;
i__22122 = G__22130;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__22119__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__22131 = cljs.core.next.call(null,seq__22119__$1);
var G__22132 = null;
var G__22133 = 0;
var G__22134 = 0;
seq__22119 = G__22131;
chunk__22120 = G__22132;
count__22121 = G__22133;
i__22122 = G__22134;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__22135,p__22136,conn){var vec__22137 = p__22135;var game_id = cljs.core.nth.call(null,vec__22137,0,null);var card_id = cljs.core.nth.call(null,vec__22137,1,null);var map__22138 = p__22136;var map__22138__$1 = ((cljs.core.seq_QMARK_.call(null,map__22138))?cljs.core.apply.call(null,cljs.core.hash_map,map__22138):map__22138);var report = map__22138__$1;var db_after = cljs.core.get.call(null,map__22138__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__22139 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__22139__$1 = ((cljs.core.seq_QMARK_.call(null,map__22139))?cljs.core.apply.call(null,cljs.core.hash_map,map__22139):map__22139);var game = map__22139__$1;var our_cards = cljs.core.get.call(null,map__22139__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var pile = cljs.core.get.call(null,map__22139__$1,new cljs.core.Keyword(null,"pile","pile",1017345188));var pile_elem = gin.dom_helpers.get_element.call(null,cljs.core.last.call(null,pile));var discard_elem = gin.dom_helpers.get_element.call(null,card_id);gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.undraggable_handler.call(null,conn));
var seq__22140 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var chunk__22141 = null;var count__22142 = 0;var i__22143 = 0;while(true){
if((i__22143 < count__22142))
{var card_id__$1 = cljs.core._nth.call(null,chunk__22141,i__22143);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__22144 = seq__22140;
var G__22145 = chunk__22141;
var G__22146 = count__22142;
var G__22147 = (i__22143 + 1);
seq__22140 = G__22144;
chunk__22141 = G__22145;
count__22142 = G__22146;
i__22143 = G__22147;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22140);if(temp__4092__auto__)
{var seq__22140__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22140__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__22140__$1);{
var G__22148 = cljs.core.chunk_rest.call(null,seq__22140__$1);
var G__22149 = c__10127__auto__;
var G__22150 = cljs.core.count.call(null,c__10127__auto__);
var G__22151 = 0;
seq__22140 = G__22148;
chunk__22141 = G__22149;
count__22142 = G__22150;
i__22143 = G__22151;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__22140__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_discard_handler.call(null,conn));
{
var G__22152 = cljs.core.next.call(null,seq__22140__$1);
var G__22153 = null;
var G__22154 = 0;
var G__22155 = 0;
seq__22140 = G__22152;
chunk__22141 = G__22153;
count__22142 = G__22154;
i__22143 = G__22155;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__22156,p__22157,conn){var vec__22158 = p__22156;var game_id = cljs.core.nth.call(null,vec__22158,0,null);var card_id = cljs.core.nth.call(null,vec__22158,1,null);var map__22159 = p__22157;var map__22159__$1 = ((cljs.core.seq_QMARK_.call(null,map__22159))?cljs.core.apply.call(null,cljs.core.hash_map,map__22159):map__22159);var report = map__22159__$1;var db_after = cljs.core.get.call(null,map__22159__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.undraggable_handler.call(null,conn));
var seq__22160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));var chunk__22161 = null;var count__22162 = 0;var i__22163 = 0;while(true){
if((i__22163 < count__22162))
{var card_id__$1 = cljs.core._nth.call(null,chunk__22161,i__22163);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__22164 = seq__22160;
var G__22165 = chunk__22161;
var G__22166 = count__22162;
var G__22167 = (i__22163 + 1);
seq__22160 = G__22164;
chunk__22161 = G__22165;
count__22162 = G__22166;
i__22163 = G__22167;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22160);if(temp__4092__auto__)
{var seq__22160__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22160__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__22160__$1);{
var G__22168 = cljs.core.chunk_rest.call(null,seq__22160__$1);
var G__22169 = c__10127__auto__;
var G__22170 = cljs.core.count.call(null,c__10127__auto__);
var G__22171 = 0;
seq__22160 = G__22168;
chunk__22161 = G__22169;
count__22162 = G__22170;
i__22163 = G__22171;
continue;
}
} else
{var card_id__$1 = cljs.core.first.call(null,seq__22160__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id__$1),gin.game_panel.home_region_handler.call(null,conn));
{
var G__22172 = cljs.core.next.call(null,seq__22160__$1);
var G__22173 = null;
var G__22174 = 0;
var G__22175 = 0;
seq__22160 = G__22172;
chunk__22161 = G__22173;
count__22162 = G__22174;
i__22163 = G__22175;
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
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,p__22178,p__22179,conn){var vec__22180 = p__22178;var game_id = cljs.core.nth.call(null,vec__22180,0,null);var card_id = cljs.core.nth.call(null,vec__22180,1,null);var map__22181 = p__22179;var map__22181__$1 = ((cljs.core.seq_QMARK_.call(null,map__22181))?cljs.core.apply.call(null,cljs.core.hash_map,map__22181):map__22181);var report = map__22181__$1;var db_after = cljs.core.get.call(null,map__22181__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var pile_card = gin.dom_helpers.get_element.call(null,card_id);var vec__22182 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__22182,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__22182,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__22177_SHARP_,p2__22176_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__22176_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__22177_SHARP_ * 48.18)),(their_region_offset_y + (p1__22177_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__22176_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,p__22185,p__22186,conn){var vec__22187 = p__22185;var game_id = cljs.core.nth.call(null,vec__22187,0,null);var card_id = cljs.core.nth.call(null,vec__22187,1,null);var _ = cljs.core.nth.call(null,vec__22187,2,null);var ___$1 = cljs.core.nth.call(null,vec__22187,3,null);var map__22188 = p__22186;var map__22188__$1 = ((cljs.core.seq_QMARK_.call(null,map__22188))?cljs.core.apply.call(null,cljs.core.hash_map,map__22188):map__22188);var report = map__22188__$1;var db_after = cljs.core.get.call(null,map__22188__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__22189 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__22189,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__22189,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__22184_SHARP_,p2__22183_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__22183_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__22184_SHARP_ * 48.18)),(their_region_offset_y + (p1__22184_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__22183_SHARP_);
}));
}),cljs.core.range.call(null),cljs.core.map.call(null,gin.dom_helpers.get_element,opp_cards))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,"card_back");
}),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
})], null)));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__22192,p__22193,conn){var vec__22194 = p__22192;var game_id = cljs.core.nth.call(null,vec__22194,0,null);var card_id = cljs.core.nth.call(null,vec__22194,1,null);var suit = cljs.core.nth.call(null,vec__22194,2,null);var rank = cljs.core.nth.call(null,vec__22194,3,null);var map__22195 = p__22193;var map__22195__$1 = ((cljs.core.seq_QMARK_.call(null,map__22195))?cljs.core.apply.call(null,cljs.core.hash_map,map__22195):map__22195);var report = map__22195__$1;var db_after = cljs.core.get.call(null,map__22195__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards = new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game);var discard_card = gin.dom_helpers.get_element.call(null,card_id);var vec__22196 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__22196,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__22196,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_card);
})], null),gin.dom_helpers.slide_from.call(null,discard_card,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_card,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__22191_SHARP_,p2__22190_SHARP_){return gin.dom_helpers.slide_from.call(null,gin.dom_helpers.get_element.call(null,p2__22190_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__22191_SHARP_ * 53)),(their_region_offset_y + (p1__22191_SHARP_ * 4))], null));
}),cljs.core.range.call(null),opp_cards))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,p__22197,p__22198,conn){var vec__22199 = p__22197;var game_id = cljs.core.nth.call(null,vec__22199,0,null);var result = cljs.core.nth.call(null,vec__22199,1,null);var map__22200 = p__22198;var map__22200__$1 = ((cljs.core.seq_QMARK_.call(null,map__22200))?cljs.core.apply.call(null,cljs.core.hash_map,map__22200):map__22200);var report = map__22200__$1;var db_after = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var msg_area_22209 = gin.dom_helpers.get_element.call(null,"msg");var restart_button_22210 = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"restart_button",new cljs.core.Keyword(null,"class","class",1108647146),"restart_button"], null),"New game");goog.events.listenOnce(restart_button_22210,goog.events.EventType.CLICK,(function (){return alert("restart game");
}));
gin.dom_helpers.append.call(null,msg_area_22209,restart_button_22210);
return gin.dom_helpers.schedule.call(null,(function (){var iter__10096__auto__ = (function iter__22201(s__22202){return (new cljs.core.LazySeq(null,(function (){var s__22202__$1 = s__22202;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22202__$1);if(temp__4092__auto__)
{var s__22202__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22202__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__22202__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__22204 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__22203 = 0;while(true){
if((i__22203 < size__10095__auto__))
{var card_id = cljs.core._nth.call(null,c__10094__auto__,i__22203);cljs.core.chunk_append.call(null,b__22204,(function (){var map__22207 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__22207__$1 = ((cljs.core.seq_QMARK_.call(null,map__22207))?cljs.core.apply.call(null,cljs.core.hash_map,map__22207):map__22207);var suit = cljs.core.get.call(null,map__22207__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__22207__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (i__22203,map__22207,map__22207__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__22204,s__22202__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(i__22203,map__22207,map__22207__$1,suit,rank,card_id,c__10094__auto__,size__10095__auto__,b__22204,s__22202__$2,temp__4092__auto__))
})());
{
var G__22211 = (i__22203 + 1);
i__22203 = G__22211;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22204),iter__22201.call(null,cljs.core.chunk_rest.call(null,s__22202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22204),null);
}
} else
{var card_id = cljs.core.first.call(null,s__22202__$2);return cljs.core.cons.call(null,(function (){var map__22208 = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var map__22208__$1 = ((cljs.core.seq_QMARK_.call(null,map__22208))?cljs.core.apply.call(null,cljs.core.hash_map,map__22208):map__22208);var suit = cljs.core.get.call(null,map__22208__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__22208__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return ((function (map__22208,map__22208__$1,suit,rank,card_id,s__22202__$2,temp__4092__auto__){
return (function (){return gin.dom_helpers.set_card_class.call(null,gin.dom_helpers.get_element.call(null,card_id),[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
});
;})(map__22208,map__22208__$1,suit,rank,card_id,s__22202__$2,temp__4092__auto__))
})(),iter__22201.call(null,cljs.core.rest.call(null,s__22202__$2)));
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
gin.game_panel.render = (function render(report,conn){var map__22214 = report;var map__22214__$1 = ((cljs.core.seq_QMARK_.call(null,map__22214))?cljs.core.apply.call(null,cljs.core.hash_map,map__22214):map__22214);var db_after = cljs.core.get.call(null,map__22214__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__22215 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__22215,0,null);var args = cljs.core.nth.call(null,vec__22215,1,null);gin.game_panel.msg.call(null,event,args,report,conn);
return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__22246_22276 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__22246_22276,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__22246_22276,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__22246_22276,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__22247(s__22248){return (new cljs.core.LazySeq(null,(function (){var s__22248__$1 = s__22248;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22248__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__22248__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__22249(s__22250){return (new cljs.core.LazySeq(null,((function (s__22248__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__22250__$1 = s__22250;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__22250__$1);if(temp__4092__auto____$1)
{var s__22250__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22250__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__22250__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__22252 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__22251 = 0;while(true){
if((i__22251 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__22251);cljs.core.chunk_append.call(null,b__22252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__22277 = (i__22251 + 1);
i__22251 = G__22277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22252),iter__22249.call(null,cljs.core.chunk_rest.call(null,s__22250__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22252),null);
}
} else
{var rank = cljs.core.first.call(null,s__22250__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__22249.call(null,cljs.core.rest.call(null,s__22250__$2)));
}
} else
{return null;
}
break;
}
});})(s__22248__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__22248__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__22247.call(null,cljs.core.rest.call(null,s__22248__$1)));
} else
{{
var G__22278 = cljs.core.rest.call(null,s__22248__$1);
s__22248__$1 = G__22278;
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
})();var vec__22253 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__22253,0,null);var pile_y = cljs.core.nth.call(null,vec__22253,1,null);var cards = (function (){var iter__10096__auto__ = ((function (container_wrap,vec__22253,pile_x,pile_y){
return (function iter__22254(s__22255){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__22253,pile_x,pile_y){
return (function (){var s__22255__$1 = s__22255;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22255__$1);if(temp__4092__auto__)
{var s__22255__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22255__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__22255__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__22257 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__22256 = 0;while(true){
if((i__22256 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__22256);cljs.core.chunk_append.call(null,b__22257,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__22260 = (new goog.fx.Dragger(card_el));G__22260.setLimits(container_wrap);
return G__22260;
})();card_el.dispose = ((function (i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__22256,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__22257,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__22279 = (i__22256 + 1);
i__22256 = G__22279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22257),iter__22254.call(null,cljs.core.chunk_rest.call(null,s__22255__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22257),null);
}
} else
{var i = cljs.core.first.call(null,s__22255__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__22261 = (new goog.fx.Dragger(card_el));G__22261.setLimits(container_wrap);
return G__22261;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__22255__$2,temp__4092__auto__,container_wrap,vec__22253,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__22254.call(null,cljs.core.rest.call(null,s__22255__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__22253,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__22253,pile_x,pile_y))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__22262_22280 = cljs.core.seq.call(null,cards);var chunk__22263_22281 = null;var count__22264_22282 = 0;var i__22265_22283 = 0;while(true){
if((i__22265_22283 < count__22264_22282))
{var map__22266_22284 = cljs.core._nth.call(null,chunk__22263_22281,i__22265_22283);var map__22266_22285__$1 = ((cljs.core.seq_QMARK_.call(null,map__22266_22284))?cljs.core.apply.call(null,cljs.core.hash_map,map__22266_22284):map__22266_22284);var card_el_22286 = cljs.core.get.call(null,map__22266_22285__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_22286);
{
var G__22287 = seq__22262_22280;
var G__22288 = chunk__22263_22281;
var G__22289 = count__22264_22282;
var G__22290 = (i__22265_22283 + 1);
seq__22262_22280 = G__22287;
chunk__22263_22281 = G__22288;
count__22264_22282 = G__22289;
i__22265_22283 = G__22290;
continue;
}
} else
{var temp__4092__auto___22291 = cljs.core.seq.call(null,seq__22262_22280);if(temp__4092__auto___22291)
{var seq__22262_22292__$1 = temp__4092__auto___22291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22262_22292__$1))
{var c__10127__auto___22293 = cljs.core.chunk_first.call(null,seq__22262_22292__$1);{
var G__22294 = cljs.core.chunk_rest.call(null,seq__22262_22292__$1);
var G__22295 = c__10127__auto___22293;
var G__22296 = cljs.core.count.call(null,c__10127__auto___22293);
var G__22297 = 0;
seq__22262_22280 = G__22294;
chunk__22263_22281 = G__22295;
count__22264_22282 = G__22296;
i__22265_22283 = G__22297;
continue;
}
} else
{var map__22267_22298 = cljs.core.first.call(null,seq__22262_22292__$1);var map__22267_22299__$1 = ((cljs.core.seq_QMARK_.call(null,map__22267_22298))?cljs.core.apply.call(null,cljs.core.hash_map,map__22267_22298):map__22267_22298);var card_el_22300 = cljs.core.get.call(null,map__22267_22299__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_22300);
{
var G__22301 = cljs.core.next.call(null,seq__22262_22292__$1);
var G__22302 = null;
var G__22303 = 0;
var G__22304 = 0;
seq__22262_22280 = G__22301;
chunk__22263_22281 = G__22302;
count__22264_22282 = G__22303;
i__22265_22283 = G__22304;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__22268(s__22269){return (new cljs.core.LazySeq(null,(function (){var s__22269__$1 = s__22269;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22269__$1);if(temp__4092__auto__)
{var s__22269__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22269__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__22269__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__22271 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__22270 = 0;while(true){
if((i__22270 < size__10095__auto__))
{var map__22274 = cljs.core._nth.call(null,c__10094__auto__,i__22270);var map__22274__$1 = ((cljs.core.seq_QMARK_.call(null,map__22274))?cljs.core.apply.call(null,cljs.core.hash_map,map__22274):map__22274);var card_el = cljs.core.get.call(null,map__22274__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__22274__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__22274__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__22271,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__22305 = (i__22270 + 1);
i__22270 = G__22305;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22271),iter__22268.call(null,cljs.core.chunk_rest.call(null,s__22269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22271),null);
}
} else
{var map__22275 = cljs.core.first.call(null,s__22269__$2);var map__22275__$1 = ((cljs.core.seq_QMARK_.call(null,map__22275))?cljs.core.apply.call(null,cljs.core.hash_map,map__22275):map__22275);var card_el = cljs.core.get.call(null,map__22275__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__22275__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__22275__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__22268.call(null,cljs.core.rest.call(null,s__22269__$2)));
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
