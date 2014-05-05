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
gin.game_panel.in_rect = (function in_rect(rect,p__35428){var vec__35430 = p__35428;var x = cljs.core.nth.call(null,vec__35430,0,null);var y = cljs.core.nth.call(null,vec__35430,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.pile_position = (function pile_position(){var pos = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"deck"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos.x + 4),(pos.y + 4)], null);
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){if(gin.game_panel.in_our_region.call(null,event.clientX,event.clientY))
{return null;
} else
{gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,card_id),gin.game_panel.pile_drag_handler.call(null,conn));
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
return gin.dom_helpers.remove_class.call(null,gin.dom_helpers.get_element.call(null,"our_region"),"region_hover");
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
gin.game_panel.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,p__35435,p__35436,conn){var vec__35437 = p__35435;var game_id = cljs.core.nth.call(null,vec__35437,0,null);var map__35438 = p__35436;var map__35438__$1 = ((cljs.core.seq_QMARK_.call(null,map__35438))?cljs.core.apply.call(null,cljs.core.hash_map,map__35438):map__35438);var report = map__35438__$1;var db_after = cljs.core.get.call(null,map__35438__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.game_panel.set_msg.call(null,"Dealing ...");
var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game",cljs.core.pr_str.call(null,game));var opp_cards_el = cljs.core.map.call(null,((function (game,_){
return (function (p1__35431_SHARP_){return new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__35431_SHARP_], null)));
});})(game,_))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__35432_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__35432_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__35439 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var their_region_offset_x = cljs.core.nth.call(null,vec__35439,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__35439,1,null);var discard_position = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + p.x),(12 + p.y)], null);
})();var vec__35440 = (function (){var p = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + p.x),(10 + p.y)], null);
})();var our_region_offset_x = cljs.core.nth.call(null,vec__35440,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__35440,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__35434_SHARP_,p2__35433_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,p2__35433_SHARP_);
})], null),gin.dom_helpers.slide_from.call(null,p2__35433_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__35434_SHARP_ * 53)),(their_region_offset_y + (p1__35434_SHARP_ * 4))], null)));
}),cljs.core.range.call(null),opp_cards_el),cljs.core.mapcat.call(null,(function (idx,p__35441){var map__35442 = p__35441;var map__35442__$1 = ((cljs.core.seq_QMARK_.call(null,map__35442))?cljs.core.apply.call(null,cljs.core.hash_map,map__35442):map__35442);var el = cljs.core.get.call(null,map__35442__$1,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648));var suit = cljs.core.get.call(null,map__35442__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__35442__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,el);
})], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
})], null));
}),cljs.core.range.call(null),our_cards_es),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard));
})], null),gin.dom_helpers.slide_from.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),discard_position),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648).cljs$core$IFn$_invoke$arity$1(discard),[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.game_panel.set_msg.call(null,"Ginrummy");
})], null))));
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__35443,p__35444,conn){var vec__35445 = p__35443;var game_id = cljs.core.nth.call(null,vec__35445,0,null);var turn = cljs.core.nth.call(null,vec__35445,1,null);var map__35446 = p__35444;var map__35446__$1 = ((cljs.core.seq_QMARK_.call(null,map__35446))?cljs.core.apply.call(null,cljs.core.hash_map,map__35446):map__35446);var report = map__35446__$1;var db_after = cljs.core.get.call(null,map__35446__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__35447 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?us","?us",-1640467242,null),new cljs.core.Symbol(null,"?turn","?turn",-1578777867,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"us","us",1013907984),new cljs.core.Symbol(null,"?us","?us",-1640467242,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"turn","turn",1017476079),new cljs.core.Symbol(null,"?turn","?turn",-1578777867,null)], null)], null)], null),db_after,game_id));var game_eid = cljs.core.nth.call(null,vec__35447,0,null);var us = cljs.core.nth.call(null,vec__35447,1,null);var turn__$1 = cljs.core.nth.call(null,vec__35447,2,null);console.log("turn-assigned",game_eid,us,turn__$1);
if(cljs.core._EQ_.call(null,us,turn__$1))
{var vec__35448 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?elem","?elem",-1579233785,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null),new cljs.core.Symbol(null,"?last","?last",-1579035378,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"deck","deck",1016983579),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?last","?last",-1579035378,null),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","id","dom/id",1020278687),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),new cljs.core.Symbol(null,"?elem","?elem",-1579233785,null)], null)], null)], null),db_after,game_id,cljs.core.last));var pile_eid = cljs.core.nth.call(null,vec__35448,0,null);var pile_elem = cljs.core.nth.call(null,vec__35448,1,null);console.log("found top of deck: ",pile_eid,pile_elem);
return gin.game_panel.set_drag_handler.call(null,pile_elem,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.game_panel.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1,___$2,___$3){return null;
}));
gin.game_panel.render = (function render(report,conn){var map__35451 = report;var map__35451__$1 = ((cljs.core.seq_QMARK_.call(null,map__35451))?cljs.core.apply.call(null,cljs.core.hash_map,map__35451):map__35451);var db_after = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__35452 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__35452,0,null);var args = cljs.core.nth.call(null,vec__35452,1,null);return gin.game_panel.handle.call(null,event,args,report,conn);
} else
{return null;
}
});
gin.game_panel.draw_table = (function draw_table(conn){var G__35482_35511 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__35482_35511,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.deck","div.deck",1323685720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"deck"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__35482_35511,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__35482_35511,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__10096__auto__ = (function iter__35483(s__35484){return (new cljs.core.LazySeq(null,(function (){var s__35484__$1 = s__35484;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35484__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__35484__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__35485(s__35486){return (new cljs.core.LazySeq(null,((function (s__35484__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__35486__$1 = s__35486;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__35486__$1);if(temp__4092__auto____$1)
{var s__35486__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__35486__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__35486__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__35488 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__35487 = 0;while(true){
if((i__35487 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__35487);cljs.core.chunk_append.call(null,b__35488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__35512 = (i__35487 + 1);
i__35487 = G__35512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35488),iter__35485.call(null,cljs.core.chunk_rest.call(null,s__35486__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35488),null);
}
} else
{var rank = cljs.core.first.call(null,s__35486__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__35485.call(null,cljs.core.rest.call(null,s__35486__$2)));
}
} else
{return null;
}
break;
}
});})(s__35484__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__35484__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__35483.call(null,cljs.core.rest.call(null,s__35484__$1)));
} else
{{
var G__35513 = cljs.core.rest.call(null,s__35484__$1);
s__35484__$1 = G__35513;
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
gin.game_panel.set_msg.call(null,"Ginrummy.");
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 35)));
})();var cards = (function (){var iter__10096__auto__ = ((function (container_wrap){
return (function iter__35489(s__35490){return (new cljs.core.LazySeq(null,((function (container_wrap){
return (function (){var s__35490__$1 = s__35490;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35490__$1);if(temp__4092__auto__)
{var s__35490__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35490__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__35490__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__35492 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__35491 = 0;while(true){
if((i__35491 < size__10095__auto__))
{var i = cljs.core._nth.call(null,c__10094__auto__,i__35491);cljs.core.chunk_append.call(null,b__35492,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__35495 = (new goog.fx.Dragger(card_el));G__35495.setLimits(container_wrap);
return G__35495;
})();card_el.dispose = ((function (i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__35491,card_id,card_el,dragger,i,c__10094__auto__,size__10095__auto__,b__35492,s__35490__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__35514 = (i__35491 + 1);
i__35491 = G__35514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35492),iter__35489.call(null,cljs.core.chunk_rest.call(null,s__35490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35492),null);
}
} else
{var i = cljs.core.first.call(null,s__35490__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__35496 = (new goog.fx.Dragger(card_el));G__35496.setLimits(container_wrap);
return G__35496;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (event){console.log([cljs.core.str("START")].join(''),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler),card_id);
return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__35490__$2,temp__4092__auto__,container_wrap))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__35489.call(null,cljs.core.rest.call(null,s__35490__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap))
,null,null));
});})(container_wrap))
;return iter__10096__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__35497_35515 = cljs.core.seq.call(null,cards);var chunk__35498_35516 = null;var count__35499_35517 = 0;var i__35500_35518 = 0;while(true){
if((i__35500_35518 < count__35499_35517))
{var map__35501_35519 = cljs.core._nth.call(null,chunk__35498_35516,i__35500_35518);var map__35501_35520__$1 = ((cljs.core.seq_QMARK_.call(null,map__35501_35519))?cljs.core.apply.call(null,cljs.core.hash_map,map__35501_35519):map__35501_35519);var card_el_35521 = cljs.core.get.call(null,map__35501_35520__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_35521);
{
var G__35522 = seq__35497_35515;
var G__35523 = chunk__35498_35516;
var G__35524 = count__35499_35517;
var G__35525 = (i__35500_35518 + 1);
seq__35497_35515 = G__35522;
chunk__35498_35516 = G__35523;
count__35499_35517 = G__35524;
i__35500_35518 = G__35525;
continue;
}
} else
{var temp__4092__auto___35526 = cljs.core.seq.call(null,seq__35497_35515);if(temp__4092__auto___35526)
{var seq__35497_35527__$1 = temp__4092__auto___35526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35497_35527__$1))
{var c__10127__auto___35528 = cljs.core.chunk_first.call(null,seq__35497_35527__$1);{
var G__35529 = cljs.core.chunk_rest.call(null,seq__35497_35527__$1);
var G__35530 = c__10127__auto___35528;
var G__35531 = cljs.core.count.call(null,c__10127__auto___35528);
var G__35532 = 0;
seq__35497_35515 = G__35529;
chunk__35498_35516 = G__35530;
count__35499_35517 = G__35531;
i__35500_35518 = G__35532;
continue;
}
} else
{var map__35502_35533 = cljs.core.first.call(null,seq__35497_35527__$1);var map__35502_35534__$1 = ((cljs.core.seq_QMARK_.call(null,map__35502_35533))?cljs.core.apply.call(null,cljs.core.hash_map,map__35502_35533):map__35502_35533);var card_el_35535 = cljs.core.get.call(null,map__35502_35534__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"deck"),card_el_35535);
{
var G__35536 = cljs.core.next.call(null,seq__35497_35527__$1);
var G__35537 = null;
var G__35538 = 0;
var G__35539 = 0;
seq__35497_35515 = G__35536;
chunk__35498_35516 = G__35537;
count__35499_35517 = G__35538;
i__35500_35518 = G__35539;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__10096__auto__ = (function iter__35503(s__35504){return (new cljs.core.LazySeq(null,(function (){var s__35504__$1 = s__35504;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35504__$1);if(temp__4092__auto__)
{var s__35504__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35504__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__35504__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__35506 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__35505 = 0;while(true){
if((i__35505 < size__10095__auto__))
{var map__35509 = cljs.core._nth.call(null,c__10094__auto__,i__35505);var map__35509__$1 = ((cljs.core.seq_QMARK_.call(null,map__35509))?cljs.core.apply.call(null,cljs.core.hash_map,map__35509):map__35509);var card_el = cljs.core.get.call(null,map__35509__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__35509__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__35509__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__35506,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null));
{
var G__35540 = (i__35505 + 1);
i__35505 = G__35540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35506),iter__35503.call(null,cljs.core.chunk_rest.call(null,s__35504__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35506),null);
}
} else
{var map__35510 = cljs.core.first.call(null,s__35504__$2);var map__35510__$1 = ((cljs.core.seq_QMARK_.call(null,map__35510))?cljs.core.apply.call(null,cljs.core.hash_map,map__35510):map__35510);var card_el = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","card-el","dom/card-el",1574224648),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","deck","location/deck",4800728563)], null),iter__35503.call(null,cljs.core.rest.call(null,s__35504__$2)));
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
