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
gin.game_panel.in_rect = (function in_rect(rect,p__18398){var vec__18400 = p__18398;var x = cljs.core.nth.call(null,vec__18400,0,null);var y = cljs.core.nth.call(null,vec__18400,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.draw_table = (function draw_table(conn){var G__18425_18449 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__18425_18449,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__18425_18449,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__18425_18449,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__18426 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__18426,0,null);var pile_y = cljs.core.nth.call(null,vec__18426,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__18426,pile_x,pile_y){
return (function iter__18427(s__18428){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__18426,pile_x,pile_y){
return (function (){var s__18428__$1 = s__18428;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18428__$1);if(temp__4092__auto__)
{var s__18428__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18428__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__18428__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__18430 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__18429 = 0;while(true){
if((i__18429 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__18429);cljs.core.chunk_append.call(null,b__18430,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__18433 = (new goog.fx.Dragger(card_el));G__18433.setLimits(container_wrap);
return G__18433;
})();card_el.dispose = ((function (i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__18429,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__18430,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__18450 = (i__18429 + 1);
i__18429 = G__18450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18430),iter__18427.call(null,cljs.core.chunk_rest.call(null,s__18428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18430),null);
}
} else
{var i = cljs.core.first.call(null,s__18428__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__18434 = (new goog.fx.Dragger(card_el));G__18434.setLimits(container_wrap);
return G__18434;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__18428__$2,temp__4092__auto__,container_wrap,vec__18426,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__18427.call(null,cljs.core.rest.call(null,s__18428__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__18426,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__18426,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__18435_18451 = cljs.core.seq.call(null,cards);var chunk__18436_18452 = null;var count__18437_18453 = 0;var i__18438_18454 = 0;while(true){
if((i__18438_18454 < count__18437_18453))
{var map__18439_18455 = cljs.core._nth.call(null,chunk__18436_18452,i__18438_18454);var map__18439_18456__$1 = ((cljs.core.seq_QMARK_.call(null,map__18439_18455))?cljs.core.apply.call(null,cljs.core.hash_map,map__18439_18455):map__18439_18455);var card_el_18457 = cljs.core.get.call(null,map__18439_18456__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_18457);
{
var G__18458 = seq__18435_18451;
var G__18459 = chunk__18436_18452;
var G__18460 = count__18437_18453;
var G__18461 = (i__18438_18454 + 1);
seq__18435_18451 = G__18458;
chunk__18436_18452 = G__18459;
count__18437_18453 = G__18460;
i__18438_18454 = G__18461;
continue;
}
} else
{var temp__4092__auto___18462 = cljs.core.seq.call(null,seq__18435_18451);if(temp__4092__auto___18462)
{var seq__18435_18463__$1 = temp__4092__auto___18462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18435_18463__$1))
{var c__17389__auto___18464 = cljs.core.chunk_first.call(null,seq__18435_18463__$1);{
var G__18465 = cljs.core.chunk_rest.call(null,seq__18435_18463__$1);
var G__18466 = c__17389__auto___18464;
var G__18467 = cljs.core.count.call(null,c__17389__auto___18464);
var G__18468 = 0;
seq__18435_18451 = G__18465;
chunk__18436_18452 = G__18466;
count__18437_18453 = G__18467;
i__18438_18454 = G__18468;
continue;
}
} else
{var map__18440_18469 = cljs.core.first.call(null,seq__18435_18463__$1);var map__18440_18470__$1 = ((cljs.core.seq_QMARK_.call(null,map__18440_18469))?cljs.core.apply.call(null,cljs.core.hash_map,map__18440_18469):map__18440_18469);var card_el_18471 = cljs.core.get.call(null,map__18440_18470__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_18471);
{
var G__18472 = cljs.core.next.call(null,seq__18435_18463__$1);
var G__18473 = null;
var G__18474 = 0;
var G__18475 = 0;
seq__18435_18451 = G__18472;
chunk__18436_18452 = G__18473;
count__18437_18453 = G__18474;
i__18438_18454 = G__18475;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__18441(s__18442){return (new cljs.core.LazySeq(null,(function (){var s__18442__$1 = s__18442;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18442__$1);if(temp__4092__auto__)
{var s__18442__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18442__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__18442__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__18444 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__18443 = 0;while(true){
if((i__18443 < size__17357__auto__))
{var map__18447 = cljs.core._nth.call(null,c__17356__auto__,i__18443);var map__18447__$1 = ((cljs.core.seq_QMARK_.call(null,map__18447))?cljs.core.apply.call(null,cljs.core.hash_map,map__18447):map__18447);var card_el = cljs.core.get.call(null,map__18447__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__18447__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__18447__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__18444,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__18476 = (i__18443 + 1);
i__18443 = G__18476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18444),iter__18441.call(null,cljs.core.chunk_rest.call(null,s__18442__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18444),null);
}
} else
{var map__18448 = cljs.core.first.call(null,s__18442__$2);var map__18448__$1 = ((cljs.core.seq_QMARK_.call(null,map__18448))?cljs.core.apply.call(null,cljs.core.hash_map,map__18448):map__18448);var card_el = cljs.core.get.call(null,map__18448__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__18448__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__18448__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__18441.call(null,cljs.core.rest.call(null,s__18442__$2)));
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
return (function (p1__18477_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__18477_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__18485 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__18485,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__18485,1,null);var vec__18486 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__18486,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__18486,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y){
return (function (p1__18479_SHARP_,p2__18478_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__18478_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__18478_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18479_SHARP_ * 53)),(their_region_offset_y + (p1__18479_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__18488){var map__18489 = p__18488;var map__18489__$1 = ((cljs.core.seq_QMARK_.call(null,map__18489))?cljs.core.apply.call(null,cljs.core.hash_map,map__18489):map__18489);var id = cljs.core.get.call(null,map__18489__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__18489__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__18489__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__18489,map__18489__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__18489,map__18489__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__18489,map__18489__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__18489,map__18489__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__18485,their_region_offset_x,their_region_offset_y,vec__18486,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__18487 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__18487,0,null);var second_deal = cljs.core.nth.call(null,vec__18487,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
return (function (p1__18490_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__18490_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__18491_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__18491_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__18537 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__18537,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__18537,1,null);var seq__18538_18574 = cljs.core.seq.call(null,pile_cards_el);var chunk__18540_18575 = null;var count__18541_18576 = 0;var i__18542_18577 = 0;while(true){
if((i__18542_18577 < count__18541_18576))
{var pile_card_el_18578 = cljs.core._nth.call(null,chunk__18540_18575,i__18542_18577);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_current_position.call(null,pile_card_el_18578)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18578){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_18578,"card_back");
});})(seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18578))
,((function (seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18578){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_18578);
});})(seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18578))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_18578,gin.game_panel.pile_position.call(null))));
{
var G__18579 = seq__18538_18574;
var G__18580 = chunk__18540_18575;
var G__18581 = count__18541_18576;
var G__18582 = (i__18542_18577 + 1);
seq__18538_18574 = G__18579;
chunk__18540_18575 = G__18580;
count__18541_18576 = G__18581;
i__18542_18577 = G__18582;
continue;
}
} else
{{
var G__18583 = seq__18538_18574;
var G__18584 = chunk__18540_18575;
var G__18585 = count__18541_18576;
var G__18586 = (i__18542_18577 + 1);
seq__18538_18574 = G__18583;
chunk__18540_18575 = G__18584;
count__18541_18576 = G__18585;
i__18542_18577 = G__18586;
continue;
}
}
} else
{var temp__4092__auto___18587 = cljs.core.seq.call(null,seq__18538_18574);if(temp__4092__auto___18587)
{var seq__18538_18588__$1 = temp__4092__auto___18587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18538_18588__$1))
{var c__17389__auto___18589 = cljs.core.chunk_first.call(null,seq__18538_18588__$1);{
var G__18590 = cljs.core.chunk_rest.call(null,seq__18538_18588__$1);
var G__18591 = c__17389__auto___18589;
var G__18592 = cljs.core.count.call(null,c__17389__auto___18589);
var G__18593 = 0;
seq__18538_18574 = G__18590;
chunk__18540_18575 = G__18591;
count__18541_18576 = G__18592;
i__18542_18577 = G__18593;
continue;
}
} else
{var pile_card_el_18594 = cljs.core.first.call(null,seq__18538_18588__$1);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_current_position.call(null,pile_card_el_18594)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18594,seq__18538_18588__$1,temp__4092__auto___18587){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_18594,"card_back");
});})(seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18594,seq__18538_18588__$1,temp__4092__auto___18587))
,((function (seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18594,seq__18538_18588__$1,temp__4092__auto___18587){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_18594);
});})(seq__18538_18574,chunk__18540_18575,count__18541_18576,i__18542_18577,pile_card_el_18594,seq__18538_18588__$1,temp__4092__auto___18587))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_18594,gin.game_panel.pile_position.call(null))));
{
var G__18595 = cljs.core.next.call(null,seq__18538_18588__$1);
var G__18596 = null;
var G__18597 = 0;
var G__18598 = 0;
seq__18538_18574 = G__18595;
chunk__18540_18575 = G__18596;
count__18541_18576 = G__18597;
i__18542_18577 = G__18598;
continue;
}
} else
{{
var G__18599 = cljs.core.next.call(null,seq__18538_18588__$1);
var G__18600 = null;
var G__18601 = 0;
var G__18602 = 0;
seq__18538_18574 = G__18599;
chunk__18540_18575 = G__18600;
count__18541_18576 = G__18601;
i__18542_18577 = G__18602;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___18603 = cljs.core.peek.call(null,pile_cards_el);if(cljs.core.truth_(temp__4092__auto___18603))
{var pile_card_el_18604 = temp__4092__auto___18603;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_18604,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_18604,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var seq__18544_18605 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__18492_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__18492_SHARP_], null));
}),new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));var chunk__18547_18606 = null;var count__18548_18607 = 0;var i__18549_18608 = 0;while(true){
if((i__18549_18608 < count__18548_18607))
{var discard_card_es_18609 = cljs.core._nth.call(null,chunk__18547_18606,i__18549_18608);var discard_card_el_18610 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_18609));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_current_position.call(null,discard_card_el_18610)))
{var suit_18611 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_18609);var rank_18612 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_18609);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18611,rank_18612,discard_card_el_18610,discard_card_es_18609){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_18610,[cljs.core.str(cljs.core.name.call(null,suit_18611)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_18612))].join(''));
});})(seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18611,rank_18612,discard_card_el_18610,discard_card_es_18609))
,((function (seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18611,rank_18612,discard_card_el_18610,discard_card_es_18609){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_18610);
});})(seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18611,rank_18612,discard_card_el_18610,discard_card_es_18609))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_18610,gin.game_panel.discard_position.call(null))));
{
var G__18613 = seq__18544_18605;
var G__18614 = chunk__18547_18606;
var G__18615 = count__18548_18607;
var G__18616 = (i__18549_18608 + 1);
seq__18544_18605 = G__18613;
chunk__18547_18606 = G__18614;
count__18548_18607 = G__18615;
i__18549_18608 = G__18616;
continue;
}
} else
{{
var G__18617 = seq__18544_18605;
var G__18618 = chunk__18547_18606;
var G__18619 = count__18548_18607;
var G__18620 = (i__18549_18608 + 1);
seq__18544_18605 = G__18617;
chunk__18547_18606 = G__18618;
count__18548_18607 = G__18619;
i__18549_18608 = G__18620;
continue;
}
}
} else
{var temp__4092__auto___18621 = cljs.core.seq.call(null,seq__18544_18605);if(temp__4092__auto___18621)
{var seq__18544_18622__$1 = temp__4092__auto___18621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18544_18622__$1))
{var c__17389__auto___18623 = cljs.core.chunk_first.call(null,seq__18544_18622__$1);{
var G__18624 = cljs.core.chunk_rest.call(null,seq__18544_18622__$1);
var G__18625 = c__17389__auto___18623;
var G__18626 = cljs.core.count.call(null,c__17389__auto___18623);
var G__18627 = 0;
seq__18544_18605 = G__18624;
chunk__18547_18606 = G__18625;
count__18548_18607 = G__18626;
i__18549_18608 = G__18627;
continue;
}
} else
{var discard_card_es_18628 = cljs.core.first.call(null,seq__18544_18622__$1);var discard_card_el_18629 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_18628));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_current_position.call(null,discard_card_el_18629)))
{var suit_18630 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_18628);var rank_18631 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_18628);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18630,rank_18631,discard_card_el_18629,discard_card_es_18628,seq__18544_18622__$1,temp__4092__auto___18621){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_18629,[cljs.core.str(cljs.core.name.call(null,suit_18630)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_18631))].join(''));
});})(seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18630,rank_18631,discard_card_el_18629,discard_card_es_18628,seq__18544_18622__$1,temp__4092__auto___18621))
,((function (seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18630,rank_18631,discard_card_el_18629,discard_card_es_18628,seq__18544_18622__$1,temp__4092__auto___18621){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_18629);
});})(seq__18544_18605,chunk__18547_18606,count__18548_18607,i__18549_18608,suit_18630,rank_18631,discard_card_el_18629,discard_card_es_18628,seq__18544_18622__$1,temp__4092__auto___18621))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_18629,gin.game_panel.discard_position.call(null))));
{
var G__18632 = cljs.core.next.call(null,seq__18544_18622__$1);
var G__18633 = null;
var G__18634 = 0;
var G__18635 = 0;
seq__18544_18605 = G__18632;
chunk__18547_18606 = G__18633;
count__18548_18607 = G__18634;
i__18549_18608 = G__18635;
continue;
}
} else
{{
var G__18636 = cljs.core.next.call(null,seq__18544_18622__$1);
var G__18637 = null;
var G__18638 = 0;
var G__18639 = 0;
seq__18544_18605 = G__18636;
chunk__18547_18606 = G__18637;
count__18548_18607 = G__18638;
i__18549_18608 = G__18639;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___18640 = cljs.core.peek.call(null,discard_cards_el);if(cljs.core.truth_(temp__4092__auto___18640))
{var discard_card_el_18641 = temp__4092__auto___18640;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_18641,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_18641,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_18642 = cljs.core.map.call(null,(function (p1__18493_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__18493_SHARP_));
}),opp_cards_es);if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_current_position.call(null,cljs.core.first.call(null,opp_cards_el_18642)),gin.dom_helpers.get_current_position.call(null,cljs.core.second.call(null,opp_cards_el_18642))))
{gin.dom_helpers.schedule.call(null,cljs.core.map.call(null,(function (idx,el){return (function (){gin.dom_helpers.show_on_top.call(null,el);
return gin.dom_helpers.set_position.call(null,el,(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4)));
});
}),cljs.core.range.call(null),opp_cards_el_18642));
} else
{var temp__4090__auto___18643 = (function (){var and__16629__auto__ = cljs.core._EQ_.call(null,11,cljs.core.count.call(null,opp_cards_el_18642));if(and__16629__auto__)
{return cljs.core.some.call(null,((function (and__16629__auto__){
return (function (el){if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_current_position.call(null,el)))
{return el;
} else
{return null;
}
});})(and__16629__auto__))
,opp_cards_el_18642);
} else
{return and__16629__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto___18643))
{var from_pile_18644 = temp__4090__auto___18643;console.log("opp from pile");
gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18495_SHARP_,p2__18494_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__18494_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18495_SHARP_ * 48.18)),(their_region_offset_y + (p1__18495_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__18494_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el_18642))));
} else
{var temp__4090__auto___18645__$1 = (function (){var and__16629__auto__ = cljs.core._EQ_.call(null,11,cljs.core.count.call(null,opp_cards_el_18642));if(and__16629__auto__)
{return cljs.core.some.call(null,((function (and__16629__auto__){
return (function (el){if(cljs.core._EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_current_position.call(null,el)))
{return el;
} else
{return null;
}
});})(and__16629__auto__))
,opp_cards_el_18642);
} else
{return and__16629__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto___18645__$1))
{var from_discard_18646 = temp__4090__auto___18645__$1;console.log("opp-from-discard");
gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,from_discard_18646,"card_back");
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18497_SHARP_,p2__18496_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__18496_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18497_SHARP_ * 48.18)),(their_region_offset_y + (p1__18497_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__18496_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el_18642))));
} else
{var vec__18552_18647 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_18642)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_18648 = cljs.core.nth.call(null,vec__18552_18647,0,null);var y_step_18649 = cljs.core.nth.call(null,vec__18552_18647,1,null);console.log("opp reg");
gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__18499_SHARP_,p2__18498_SHARP_){return gin.dom_helpers.slide_from.call(null,p2__18498_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__18499_SHARP_ * x_step_18648)),(their_region_offset_y + (p1__18499_SHARP_ * y_step_18649))], null));
}),cljs.core.range.call(null),opp_cards_el_18642)));
}
}
}
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,opp_cards_es))))
{var seq__18553_18650 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_18642,opp_cards_es));var chunk__18554_18651 = null;var count__18555_18652 = 0;var i__18556_18653 = 0;while(true){
if((i__18556_18653 < count__18555_18652))
{var vec__18557_18654 = cljs.core._nth.call(null,chunk__18554_18651,i__18556_18653);var el_18655 = cljs.core.nth.call(null,vec__18557_18654,0,null);var es_18656 = cljs.core.nth.call(null,vec__18557_18654,1,null);var suit_18657 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_18656);var rank_18658 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_18656);gin.dom_helpers.set_card_class.call(null,el_18655,[cljs.core.str(cljs.core.name.call(null,suit_18657)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_18658))].join(''));
{
var G__18659 = seq__18553_18650;
var G__18660 = chunk__18554_18651;
var G__18661 = count__18555_18652;
var G__18662 = (i__18556_18653 + 1);
seq__18553_18650 = G__18659;
chunk__18554_18651 = G__18660;
count__18555_18652 = G__18661;
i__18556_18653 = G__18662;
continue;
}
} else
{var temp__4092__auto___18663 = cljs.core.seq.call(null,seq__18553_18650);if(temp__4092__auto___18663)
{var seq__18553_18664__$1 = temp__4092__auto___18663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18553_18664__$1))
{var c__17389__auto___18665 = cljs.core.chunk_first.call(null,seq__18553_18664__$1);{
var G__18666 = cljs.core.chunk_rest.call(null,seq__18553_18664__$1);
var G__18667 = c__17389__auto___18665;
var G__18668 = cljs.core.count.call(null,c__17389__auto___18665);
var G__18669 = 0;
seq__18553_18650 = G__18666;
chunk__18554_18651 = G__18667;
count__18555_18652 = G__18668;
i__18556_18653 = G__18669;
continue;
}
} else
{var vec__18558_18670 = cljs.core.first.call(null,seq__18553_18664__$1);var el_18671 = cljs.core.nth.call(null,vec__18558_18670,0,null);var es_18672 = cljs.core.nth.call(null,vec__18558_18670,1,null);var suit_18673 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_18672);var rank_18674 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_18672);gin.dom_helpers.set_card_class.call(null,el_18671,[cljs.core.str(cljs.core.name.call(null,suit_18673)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_18674))].join(''));
{
var G__18675 = cljs.core.next.call(null,seq__18553_18664__$1);
var G__18676 = null;
var G__18677 = 0;
var G__18678 = 0;
seq__18553_18650 = G__18675;
chunk__18554_18651 = G__18676;
count__18555_18652 = G__18677;
i__18556_18653 = G__18678;
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
var seq__18559 = cljs.core.seq.call(null,our_cards_es);var chunk__18560 = null;var count__18561 = 0;var i__18562 = 0;while(true){
if((i__18562 < count__18561))
{var our_card_es = cljs.core._nth.call(null,chunk__18560,i__18562);var our_card_el_18679 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_18680 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_18681 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_18679,((cljs.core._EQ_.call(null,suit_18680,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_18680)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_18681))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_18679,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__18682 = seq__18559;
var G__18683 = chunk__18560;
var G__18684 = count__18561;
var G__18685 = (i__18562 + 1);
seq__18559 = G__18682;
chunk__18560 = G__18683;
count__18561 = G__18684;
i__18562 = G__18685;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18559);if(temp__4092__auto__)
{var seq__18559__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18559__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__18559__$1);{
var G__18686 = cljs.core.chunk_rest.call(null,seq__18559__$1);
var G__18687 = c__17389__auto__;
var G__18688 = cljs.core.count.call(null,c__17389__auto__);
var G__18689 = 0;
seq__18559 = G__18686;
chunk__18560 = G__18687;
count__18561 = G__18688;
i__18562 = G__18689;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__18559__$1);var our_card_el_18690 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_18691 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_18692 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_18690,((cljs.core._EQ_.call(null,suit_18691,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_18691)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_18692))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_18690,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__18693 = cljs.core.next.call(null,seq__18559__$1);
var G__18694 = null;
var G__18695 = 0;
var G__18696 = 0;
seq__18559 = G__18693;
chunk__18560 = G__18694;
count__18561 = G__18695;
i__18562 = G__18696;
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
var seq__18563 = cljs.core.seq.call(null,our_cards_es);var chunk__18564 = null;var count__18565 = 0;var i__18566 = 0;while(true){
if((i__18566 < count__18565))
{var our_card_es = cljs.core._nth.call(null,chunk__18564,i__18566);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__18697 = seq__18563;
var G__18698 = chunk__18564;
var G__18699 = count__18565;
var G__18700 = (i__18566 + 1);
seq__18563 = G__18697;
chunk__18564 = G__18698;
count__18565 = G__18699;
i__18566 = G__18700;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18563);if(temp__4092__auto__)
{var seq__18563__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18563__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__18563__$1);{
var G__18701 = cljs.core.chunk_rest.call(null,seq__18563__$1);
var G__18702 = c__17389__auto__;
var G__18703 = cljs.core.count.call(null,c__17389__auto__);
var G__18704 = 0;
seq__18563 = G__18701;
chunk__18564 = G__18702;
count__18565 = G__18703;
i__18566 = G__18704;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__18563__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__18705 = cljs.core.next.call(null,seq__18563__$1);
var G__18706 = null;
var G__18707 = 0;
var G__18708 = 0;
seq__18563 = G__18705;
chunk__18564 = G__18706;
count__18565 = G__18707;
i__18566 = G__18708;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__18567 = cljs.core._EQ_;var expr__18568 = result;if(cljs.core.truth_(pred__18567.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__18568)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__18567.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__18568)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__18567.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__18568)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__18567.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__18568)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__18567.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__18568)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__18568)].join('')));
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
var seq__18570 = cljs.core.seq.call(null,our_cards_es);var chunk__18571 = null;var count__18572 = 0;var i__18573 = 0;while(true){
if((i__18573 < count__18572))
{var our_card_es = cljs.core._nth.call(null,chunk__18571,i__18573);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__18709 = seq__18570;
var G__18710 = chunk__18571;
var G__18711 = count__18572;
var G__18712 = (i__18573 + 1);
seq__18570 = G__18709;
chunk__18571 = G__18710;
count__18572 = G__18711;
i__18573 = G__18712;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18570);if(temp__4092__auto__)
{var seq__18570__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18570__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__18570__$1);{
var G__18713 = cljs.core.chunk_rest.call(null,seq__18570__$1);
var G__18714 = c__17389__auto__;
var G__18715 = cljs.core.count.call(null,c__17389__auto__);
var G__18716 = 0;
seq__18570 = G__18713;
chunk__18571 = G__18714;
count__18572 = G__18715;
i__18573 = G__18716;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__18570__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__18717 = cljs.core.next.call(null,seq__18570__$1);
var G__18718 = null;
var G__18719 = 0;
var G__18720 = 0;
seq__18570 = G__18717;
chunk__18571 = G__18718;
count__18572 = G__18719;
i__18573 = G__18720;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__18724 = report;var map__18724__$1 = ((cljs.core.seq_QMARK_.call(null,map__18724))?cljs.core.apply.call(null,cljs.core.hash_map,map__18724):map__18724);var db_after = cljs.core.get.call(null,map__18724__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__18725 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__18725,0,null);var vec__18726 = cljs.core.nth.call(null,vec__18725,1,null);var game_id = cljs.core.nth.call(null,vec__18726,0,null);var args = cljs.core.nthnext.call(null,vec__18726,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
