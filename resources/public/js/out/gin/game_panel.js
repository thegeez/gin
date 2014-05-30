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
gin.game_panel.in_rect = (function in_rect(rect,p__37021){var vec__37023 = p__37021;var x = cljs.core.nth.call(null,vec__37023,0,null);var y = cljs.core.nth.call(null,vec__37023,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.draw_table = (function draw_table(conn){var G__37048_37072 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__37048_37072,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__37048_37072,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__37048_37072,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__37049 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__37049,0,null);var pile_y = cljs.core.nth.call(null,vec__37049,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__37049,pile_x,pile_y){
return (function iter__37050(s__37051){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__37049,pile_x,pile_y){
return (function (){var s__37051__$1 = s__37051;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37051__$1);if(temp__4092__auto__)
{var s__37051__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37051__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__37051__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__37053 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__37052 = 0;while(true){
if((i__37052 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__37052);cljs.core.chunk_append.call(null,b__37053,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__37056 = (new goog.fx.Dragger(card_el));G__37056.setLimits(container_wrap);
return G__37056;
})();card_el.dispose = ((function (i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__37052,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__37053,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__37073 = (i__37052 + 1);
i__37052 = G__37073;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37053),iter__37050.call(null,cljs.core.chunk_rest.call(null,s__37051__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37053),null);
}
} else
{var i = cljs.core.first.call(null,s__37051__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__37057 = (new goog.fx.Dragger(card_el));G__37057.setLimits(container_wrap);
return G__37057;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__37051__$2,temp__4092__auto__,container_wrap,vec__37049,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__37050.call(null,cljs.core.rest.call(null,s__37051__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__37049,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__37049,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__37058_37074 = cljs.core.seq.call(null,cards);var chunk__37059_37075 = null;var count__37060_37076 = 0;var i__37061_37077 = 0;while(true){
if((i__37061_37077 < count__37060_37076))
{var map__37062_37078 = cljs.core._nth.call(null,chunk__37059_37075,i__37061_37077);var map__37062_37079__$1 = ((cljs.core.seq_QMARK_.call(null,map__37062_37078))?cljs.core.apply.call(null,cljs.core.hash_map,map__37062_37078):map__37062_37078);var card_el_37080 = cljs.core.get.call(null,map__37062_37079__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_37080);
{
var G__37081 = seq__37058_37074;
var G__37082 = chunk__37059_37075;
var G__37083 = count__37060_37076;
var G__37084 = (i__37061_37077 + 1);
seq__37058_37074 = G__37081;
chunk__37059_37075 = G__37082;
count__37060_37076 = G__37083;
i__37061_37077 = G__37084;
continue;
}
} else
{var temp__4092__auto___37085 = cljs.core.seq.call(null,seq__37058_37074);if(temp__4092__auto___37085)
{var seq__37058_37086__$1 = temp__4092__auto___37085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37058_37086__$1))
{var c__17389__auto___37087 = cljs.core.chunk_first.call(null,seq__37058_37086__$1);{
var G__37088 = cljs.core.chunk_rest.call(null,seq__37058_37086__$1);
var G__37089 = c__17389__auto___37087;
var G__37090 = cljs.core.count.call(null,c__17389__auto___37087);
var G__37091 = 0;
seq__37058_37074 = G__37088;
chunk__37059_37075 = G__37089;
count__37060_37076 = G__37090;
i__37061_37077 = G__37091;
continue;
}
} else
{var map__37063_37092 = cljs.core.first.call(null,seq__37058_37086__$1);var map__37063_37093__$1 = ((cljs.core.seq_QMARK_.call(null,map__37063_37092))?cljs.core.apply.call(null,cljs.core.hash_map,map__37063_37092):map__37063_37092);var card_el_37094 = cljs.core.get.call(null,map__37063_37093__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_37094);
{
var G__37095 = cljs.core.next.call(null,seq__37058_37086__$1);
var G__37096 = null;
var G__37097 = 0;
var G__37098 = 0;
seq__37058_37074 = G__37095;
chunk__37059_37075 = G__37096;
count__37060_37076 = G__37097;
i__37061_37077 = G__37098;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__37064(s__37065){return (new cljs.core.LazySeq(null,(function (){var s__37065__$1 = s__37065;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37065__$1);if(temp__4092__auto__)
{var s__37065__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37065__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__37065__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__37067 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__37066 = 0;while(true){
if((i__37066 < size__17357__auto__))
{var map__37070 = cljs.core._nth.call(null,c__17356__auto__,i__37066);var map__37070__$1 = ((cljs.core.seq_QMARK_.call(null,map__37070))?cljs.core.apply.call(null,cljs.core.hash_map,map__37070):map__37070);var card_el = cljs.core.get.call(null,map__37070__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__37070__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__37070__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__37067,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__37099 = (i__37066 + 1);
i__37066 = G__37099;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37067),iter__37064.call(null,cljs.core.chunk_rest.call(null,s__37065__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37067),null);
}
} else
{var map__37071 = cljs.core.first.call(null,s__37065__$2);var map__37071__$1 = ((cljs.core.seq_QMARK_.call(null,map__37071))?cljs.core.apply.call(null,cljs.core.hash_map,map__37071):map__37071);var card_el = cljs.core.get.call(null,map__37071__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__37071__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__37071__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__37064.call(null,cljs.core.rest.call(null,s__37065__$2)));
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
return (function (p1__37100_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__37100_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__37108 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__37108,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__37108,1,null);var vec__37109 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__37109,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__37109,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y){
return (function (p1__37102_SHARP_,p2__37101_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__37101_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__37101_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__37102_SHARP_ * 53)),(their_region_offset_y + (p1__37102_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__37111){var map__37112 = p__37111;var map__37112__$1 = ((cljs.core.seq_QMARK_.call(null,map__37112))?cljs.core.apply.call(null,cljs.core.hash_map,map__37112):map__37112);var id = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__37112__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__37112,map__37112__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__37112,map__37112__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__37112,map__37112__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__37112,map__37112__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__37108,their_region_offset_x,their_region_offset_y,vec__37109,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__37110 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__37110,0,null);var second_deal = cljs.core.nth.call(null,vec__37110,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game))))
{return gin.game_panel.set_msg.call(null,"Ready, waiting on opponent");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var _ = console.log("Regular draw case");var us_pick_card = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,10,cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592)));var our_cards_es = cljs.core.map.call(null,((function (_,us_pick_card){
return (function (p1__37113_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__37113_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__37114_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__37114_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__37160 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__37160,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__37160,1,null);var seq__37161_37197 = cljs.core.seq.call(null,pile_cards_el);var chunk__37163_37198 = null;var count__37164_37199 = 0;var i__37165_37200 = 0;while(true){
if((i__37165_37200 < count__37164_37199))
{var pile_card_el_37201 = cljs.core._nth.call(null,chunk__37163_37198,i__37165_37200);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,pile_card_el_37201)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37201){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_37201,"card_back");
});})(seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37201))
,((function (seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37201){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_37201);
});})(seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37201))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_37201,gin.game_panel.pile_position.call(null))));
{
var G__37202 = seq__37161_37197;
var G__37203 = chunk__37163_37198;
var G__37204 = count__37164_37199;
var G__37205 = (i__37165_37200 + 1);
seq__37161_37197 = G__37202;
chunk__37163_37198 = G__37203;
count__37164_37199 = G__37204;
i__37165_37200 = G__37205;
continue;
}
} else
{{
var G__37206 = seq__37161_37197;
var G__37207 = chunk__37163_37198;
var G__37208 = count__37164_37199;
var G__37209 = (i__37165_37200 + 1);
seq__37161_37197 = G__37206;
chunk__37163_37198 = G__37207;
count__37164_37199 = G__37208;
i__37165_37200 = G__37209;
continue;
}
}
} else
{var temp__4092__auto___37210 = cljs.core.seq.call(null,seq__37161_37197);if(temp__4092__auto___37210)
{var seq__37161_37211__$1 = temp__4092__auto___37210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37161_37211__$1))
{var c__17389__auto___37212 = cljs.core.chunk_first.call(null,seq__37161_37211__$1);{
var G__37213 = cljs.core.chunk_rest.call(null,seq__37161_37211__$1);
var G__37214 = c__17389__auto___37212;
var G__37215 = cljs.core.count.call(null,c__17389__auto___37212);
var G__37216 = 0;
seq__37161_37197 = G__37213;
chunk__37163_37198 = G__37214;
count__37164_37199 = G__37215;
i__37165_37200 = G__37216;
continue;
}
} else
{var pile_card_el_37217 = cljs.core.first.call(null,seq__37161_37211__$1);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,pile_card_el_37217)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37217,seq__37161_37211__$1,temp__4092__auto___37210){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_37217,"card_back");
});})(seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37217,seq__37161_37211__$1,temp__4092__auto___37210))
,((function (seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37217,seq__37161_37211__$1,temp__4092__auto___37210){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_37217);
});})(seq__37161_37197,chunk__37163_37198,count__37164_37199,i__37165_37200,pile_card_el_37217,seq__37161_37211__$1,temp__4092__auto___37210))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_37217,gin.game_panel.pile_position.call(null))));
{
var G__37218 = cljs.core.next.call(null,seq__37161_37211__$1);
var G__37219 = null;
var G__37220 = 0;
var G__37221 = 0;
seq__37161_37197 = G__37218;
chunk__37163_37198 = G__37219;
count__37164_37199 = G__37220;
i__37165_37200 = G__37221;
continue;
}
} else
{{
var G__37222 = cljs.core.next.call(null,seq__37161_37211__$1);
var G__37223 = null;
var G__37224 = 0;
var G__37225 = 0;
seq__37161_37197 = G__37222;
chunk__37163_37198 = G__37223;
count__37164_37199 = G__37224;
i__37165_37200 = G__37225;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___37226 = cljs.core.peek.call(null,pile_cards_el);if(cljs.core.truth_(temp__4092__auto___37226))
{var pile_card_el_37227 = temp__4092__auto___37226;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_37227,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_37227,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var seq__37167_37228 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__37115_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__37115_SHARP_], null));
}),new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));var chunk__37170_37229 = null;var count__37171_37230 = 0;var i__37172_37231 = 0;while(true){
if((i__37172_37231 < count__37171_37230))
{var discard_card_es_37232 = cljs.core._nth.call(null,chunk__37170_37229,i__37172_37231);var discard_card_el_37233 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_37232));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,discard_card_el_37233)))
{var suit_37234 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_37232);var rank_37235 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_37232);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37234,rank_37235,discard_card_el_37233,discard_card_es_37232){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_37233,[cljs.core.str(cljs.core.name.call(null,suit_37234)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_37235))].join(''));
});})(seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37234,rank_37235,discard_card_el_37233,discard_card_es_37232))
,((function (seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37234,rank_37235,discard_card_el_37233,discard_card_es_37232){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_37233);
});})(seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37234,rank_37235,discard_card_el_37233,discard_card_es_37232))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_37233,gin.game_panel.discard_position.call(null))));
{
var G__37236 = seq__37167_37228;
var G__37237 = chunk__37170_37229;
var G__37238 = count__37171_37230;
var G__37239 = (i__37172_37231 + 1);
seq__37167_37228 = G__37236;
chunk__37170_37229 = G__37237;
count__37171_37230 = G__37238;
i__37172_37231 = G__37239;
continue;
}
} else
{{
var G__37240 = seq__37167_37228;
var G__37241 = chunk__37170_37229;
var G__37242 = count__37171_37230;
var G__37243 = (i__37172_37231 + 1);
seq__37167_37228 = G__37240;
chunk__37170_37229 = G__37241;
count__37171_37230 = G__37242;
i__37172_37231 = G__37243;
continue;
}
}
} else
{var temp__4092__auto___37244 = cljs.core.seq.call(null,seq__37167_37228);if(temp__4092__auto___37244)
{var seq__37167_37245__$1 = temp__4092__auto___37244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37167_37245__$1))
{var c__17389__auto___37246 = cljs.core.chunk_first.call(null,seq__37167_37245__$1);{
var G__37247 = cljs.core.chunk_rest.call(null,seq__37167_37245__$1);
var G__37248 = c__17389__auto___37246;
var G__37249 = cljs.core.count.call(null,c__17389__auto___37246);
var G__37250 = 0;
seq__37167_37228 = G__37247;
chunk__37170_37229 = G__37248;
count__37171_37230 = G__37249;
i__37172_37231 = G__37250;
continue;
}
} else
{var discard_card_es_37251 = cljs.core.first.call(null,seq__37167_37245__$1);var discard_card_el_37252 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_37251));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,discard_card_el_37252)))
{var suit_37253 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_37251);var rank_37254 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_37251);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37253,rank_37254,discard_card_el_37252,discard_card_es_37251,seq__37167_37245__$1,temp__4092__auto___37244){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_37252,[cljs.core.str(cljs.core.name.call(null,suit_37253)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_37254))].join(''));
});})(seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37253,rank_37254,discard_card_el_37252,discard_card_es_37251,seq__37167_37245__$1,temp__4092__auto___37244))
,((function (seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37253,rank_37254,discard_card_el_37252,discard_card_es_37251,seq__37167_37245__$1,temp__4092__auto___37244){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_37252);
});})(seq__37167_37228,chunk__37170_37229,count__37171_37230,i__37172_37231,suit_37253,rank_37254,discard_card_el_37252,discard_card_es_37251,seq__37167_37245__$1,temp__4092__auto___37244))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_37252,gin.game_panel.discard_position.call(null))));
{
var G__37255 = cljs.core.next.call(null,seq__37167_37245__$1);
var G__37256 = null;
var G__37257 = 0;
var G__37258 = 0;
seq__37167_37228 = G__37255;
chunk__37170_37229 = G__37256;
count__37171_37230 = G__37257;
i__37172_37231 = G__37258;
continue;
}
} else
{{
var G__37259 = cljs.core.next.call(null,seq__37167_37245__$1);
var G__37260 = null;
var G__37261 = 0;
var G__37262 = 0;
seq__37167_37228 = G__37259;
chunk__37170_37229 = G__37260;
count__37171_37230 = G__37261;
i__37172_37231 = G__37262;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___37263 = cljs.core.peek.call(null,discard_cards_el);if(cljs.core.truth_(temp__4092__auto___37263))
{var discard_card_el_37264 = temp__4092__auto___37263;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_37264,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_37264,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_37265 = cljs.core.map.call(null,(function (p1__37116_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__37116_SHARP_));
}),opp_cards_es);if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,cljs.core.first.call(null,opp_cards_el_37265)),gin.dom_helpers.get_pos.call(null,cljs.core.second.call(null,opp_cards_el_37265))))
{gin.dom_helpers.schedule.call(null,cljs.core.map.call(null,(function (idx,el){return (function (){gin.dom_helpers.show_on_top.call(null,el);
return gin.dom_helpers.set_position.call(null,el,(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4)));
});
}),cljs.core.range.call(null),opp_cards_el_37265));
} else
{var temp__4090__auto___37266 = (function (){var and__16629__auto__ = cljs.core._EQ_.call(null,11,cljs.core.count.call(null,opp_cards_el_37265));if(and__16629__auto__)
{return cljs.core.some.call(null,((function (and__16629__auto__){
return (function (el){if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,el)))
{return el;
} else
{return null;
}
});})(and__16629__auto__))
,opp_cards_el_37265);
} else
{return and__16629__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto___37266))
{var from_pile_37267 = temp__4090__auto___37266;gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__37118_SHARP_,p2__37117_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__37117_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__37118_SHARP_ * 48.18)),(their_region_offset_y + (p1__37118_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__37117_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el_37265))));
} else
{var temp__4090__auto___37268__$1 = (function (){var and__16629__auto__ = cljs.core._EQ_.call(null,11,cljs.core.count.call(null,opp_cards_el_37265));if(and__16629__auto__)
{return cljs.core.some.call(null,((function (and__16629__auto__){
return (function (el){if(cljs.core._EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,el)))
{return el;
} else
{return null;
}
});})(and__16629__auto__))
,opp_cards_el_37265);
} else
{return and__16629__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto___37268__$1))
{var from_discard_37269 = temp__4090__auto___37268__$1;gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,from_discard_37269,"card_back");
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__37120_SHARP_,p2__37119_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__37119_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__37120_SHARP_ * 48.18)),(their_region_offset_y + (p1__37120_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__37119_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el_37265))));
} else
{var vec__37175_37270 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_37265)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_37271 = cljs.core.nth.call(null,vec__37175_37270,0,null);var y_step_37272 = cljs.core.nth.call(null,vec__37175_37270,1,null);gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__37122_SHARP_,p2__37121_SHARP_){return gin.dom_helpers.slide_from.call(null,p2__37121_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__37122_SHARP_ * x_step_37271)),(their_region_offset_y + (p1__37122_SHARP_ * y_step_37272))], null));
}),cljs.core.range.call(null),opp_cards_el_37265)));
}
}
}
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,opp_cards_es))))
{var seq__37176_37273 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_37265,opp_cards_es));var chunk__37177_37274 = null;var count__37178_37275 = 0;var i__37179_37276 = 0;while(true){
if((i__37179_37276 < count__37178_37275))
{var vec__37180_37277 = cljs.core._nth.call(null,chunk__37177_37274,i__37179_37276);var el_37278 = cljs.core.nth.call(null,vec__37180_37277,0,null);var es_37279 = cljs.core.nth.call(null,vec__37180_37277,1,null);var suit_37280 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_37279);var rank_37281 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_37279);gin.dom_helpers.set_card_class.call(null,el_37278,[cljs.core.str(cljs.core.name.call(null,suit_37280)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_37281))].join(''));
{
var G__37282 = seq__37176_37273;
var G__37283 = chunk__37177_37274;
var G__37284 = count__37178_37275;
var G__37285 = (i__37179_37276 + 1);
seq__37176_37273 = G__37282;
chunk__37177_37274 = G__37283;
count__37178_37275 = G__37284;
i__37179_37276 = G__37285;
continue;
}
} else
{var temp__4092__auto___37286 = cljs.core.seq.call(null,seq__37176_37273);if(temp__4092__auto___37286)
{var seq__37176_37287__$1 = temp__4092__auto___37286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37176_37287__$1))
{var c__17389__auto___37288 = cljs.core.chunk_first.call(null,seq__37176_37287__$1);{
var G__37289 = cljs.core.chunk_rest.call(null,seq__37176_37287__$1);
var G__37290 = c__17389__auto___37288;
var G__37291 = cljs.core.count.call(null,c__17389__auto___37288);
var G__37292 = 0;
seq__37176_37273 = G__37289;
chunk__37177_37274 = G__37290;
count__37178_37275 = G__37291;
i__37179_37276 = G__37292;
continue;
}
} else
{var vec__37181_37293 = cljs.core.first.call(null,seq__37176_37287__$1);var el_37294 = cljs.core.nth.call(null,vec__37181_37293,0,null);var es_37295 = cljs.core.nth.call(null,vec__37181_37293,1,null);var suit_37296 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_37295);var rank_37297 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_37295);gin.dom_helpers.set_card_class.call(null,el_37294,[cljs.core.str(cljs.core.name.call(null,suit_37296)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_37297))].join(''));
{
var G__37298 = cljs.core.next.call(null,seq__37176_37287__$1);
var G__37299 = null;
var G__37300 = 0;
var G__37301 = 0;
seq__37176_37273 = G__37298;
chunk__37177_37274 = G__37299;
count__37178_37275 = G__37300;
i__37179_37276 = G__37301;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__37182 = cljs.core.seq.call(null,our_cards_es);var chunk__37183 = null;var count__37184 = 0;var i__37185 = 0;while(true){
if((i__37185 < count__37184))
{var our_card_es = cljs.core._nth.call(null,chunk__37183,i__37185);var our_card_el_37302 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_37303 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_37304 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_37302,((cljs.core._EQ_.call(null,suit_37303,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_37303)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_37304))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_37302,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__37305 = seq__37182;
var G__37306 = chunk__37183;
var G__37307 = count__37184;
var G__37308 = (i__37185 + 1);
seq__37182 = G__37305;
chunk__37183 = G__37306;
count__37184 = G__37307;
i__37185 = G__37308;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37182);if(temp__4092__auto__)
{var seq__37182__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37182__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__37182__$1);{
var G__37309 = cljs.core.chunk_rest.call(null,seq__37182__$1);
var G__37310 = c__17389__auto__;
var G__37311 = cljs.core.count.call(null,c__17389__auto__);
var G__37312 = 0;
seq__37182 = G__37309;
chunk__37183 = G__37310;
count__37184 = G__37311;
i__37185 = G__37312;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__37182__$1);var our_card_el_37313 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_37314 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_37315 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_37313,((cljs.core._EQ_.call(null,suit_37314,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_37314)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_37315))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_37313,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__37316 = cljs.core.next.call(null,seq__37182__$1);
var G__37317 = null;
var G__37318 = 0;
var G__37319 = 0;
seq__37182 = G__37316;
chunk__37183 = G__37317;
count__37184 = G__37318;
i__37185 = G__37319;
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
var seq__37186 = cljs.core.seq.call(null,our_cards_es);var chunk__37187 = null;var count__37188 = 0;var i__37189 = 0;while(true){
if((i__37189 < count__37188))
{var our_card_es = cljs.core._nth.call(null,chunk__37187,i__37189);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__37320 = seq__37186;
var G__37321 = chunk__37187;
var G__37322 = count__37188;
var G__37323 = (i__37189 + 1);
seq__37186 = G__37320;
chunk__37187 = G__37321;
count__37188 = G__37322;
i__37189 = G__37323;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37186);if(temp__4092__auto__)
{var seq__37186__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37186__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__37186__$1);{
var G__37324 = cljs.core.chunk_rest.call(null,seq__37186__$1);
var G__37325 = c__17389__auto__;
var G__37326 = cljs.core.count.call(null,c__17389__auto__);
var G__37327 = 0;
seq__37186 = G__37324;
chunk__37187 = G__37325;
count__37188 = G__37326;
i__37189 = G__37327;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__37186__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__37328 = cljs.core.next.call(null,seq__37186__$1);
var G__37329 = null;
var G__37330 = 0;
var G__37331 = 0;
seq__37186 = G__37328;
chunk__37187 = G__37329;
count__37188 = G__37330;
i__37189 = G__37331;
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
{var temp__4090__auto__ = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game);if(cljs.core.truth_(temp__4090__auto__))
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__37190 = cljs.core._EQ_;var expr__37191 = result;if(cljs.core.truth_(pred__37190.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__37191)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__37190.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__37191)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__37190.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__37191)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__37190.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__37191)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__37190.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__37191)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37191)].join('')));
}
}
}
}
}
})());
} else
{if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{gin.game_panel.set_msg.call(null,"Opponent's turn.");
} else
{gin.game_panel.set_msg.call(null,"Your turn is done.");
}
var seq__37193 = cljs.core.seq.call(null,our_cards_es);var chunk__37194 = null;var count__37195 = 0;var i__37196 = 0;while(true){
if((i__37196 < count__37195))
{var our_card_es = cljs.core._nth.call(null,chunk__37194,i__37196);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__37332 = seq__37193;
var G__37333 = chunk__37194;
var G__37334 = count__37195;
var G__37335 = (i__37196 + 1);
seq__37193 = G__37332;
chunk__37194 = G__37333;
count__37195 = G__37334;
i__37196 = G__37335;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37193);if(temp__4092__auto__)
{var seq__37193__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37193__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__37193__$1);{
var G__37336 = cljs.core.chunk_rest.call(null,seq__37193__$1);
var G__37337 = c__17389__auto__;
var G__37338 = cljs.core.count.call(null,c__17389__auto__);
var G__37339 = 0;
seq__37193 = G__37336;
chunk__37194 = G__37337;
count__37195 = G__37338;
i__37196 = G__37339;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__37193__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__37340 = cljs.core.next.call(null,seq__37193__$1);
var G__37341 = null;
var G__37342 = 0;
var G__37343 = 0;
seq__37193 = G__37340;
chunk__37194 = G__37341;
count__37195 = G__37342;
i__37196 = G__37343;
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
}
} else
{return null;
}
}
}
}
});
gin.game_panel.draw_game = (function draw_game(report,conn){var map__37347 = report;var map__37347__$1 = ((cljs.core.seq_QMARK_.call(null,map__37347))?cljs.core.apply.call(null,cljs.core.hash_map,map__37347):map__37347);var db_after = cljs.core.get.call(null,map__37347__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__37348 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__37348,0,null);var vec__37349 = cljs.core.nth.call(null,vec__37348,1,null);var game_id = cljs.core.nth.call(null,vec__37349,0,null);var args = cljs.core.nthnext.call(null,vec__37349,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
