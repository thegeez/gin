// Compiled by ClojureScript 0.0-2173
goog.provide('gin.game_panel');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('gin.transact');
goog.require('gin.animator');
goog.require('gin.transact');
goog.require('datascript');
goog.require('goog.events');
goog.require('gin.dom_helpers');
goog.require('gin.datascript_helpers');
goog.require('gin.animator');
goog.require('datascript');
goog.require('gin.dom_helpers');
goog.require('goog.math');
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('gin.datascript_helpers');
goog.require('goog.fx.Dragger');
gin.game_panel.set_msg = (function set_msg(msg){return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.in_rect = (function in_rect(rect,p__24574){var vec__24576 = p__24574;var x = cljs.core.nth.call(null,vec__24576,0,null);var y = cljs.core.nth.call(null,vec__24576,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return gin.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
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
return gin.animator.slide.call(null,card_el,gin.game_panel.pile_position.call(null));
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
{return gin.animator.slide.call(null,card_el,(function (){var p = card_el.drag_origin;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})());
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
return gin.animator.slide.call(null,card_el,gin.game_panel.discard_position.call(null));
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
console.log("snap to discard slide",card_el.anim_idx,card_el.id);
return gin.animator.slide.call(null,card_el,gin.game_panel.discard_position.call(null),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_chosen,card_id], null)], null));
}));
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
{return gin.animator.slide.call(null,card_el,(function (){var p = card_el.drag_origin;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})());
}
})], null);
});
gin.game_panel.draw_table = (function draw_table(conn){var G__24601_24625 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__24601_24625,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__24601_24625,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__24601_24625,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__24602 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__24602,0,null);var pile_y = cljs.core.nth.call(null,vec__24602,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__24602,pile_x,pile_y){
return (function iter__24603(s__24604){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__24602,pile_x,pile_y){
return (function (){var s__24604__$1 = s__24604;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24604__$1);if(temp__4092__auto__)
{var s__24604__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24604__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__24604__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__24606 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__24605 = 0;while(true){
if((i__24605 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__24605);cljs.core.chunk_append.call(null,b__24606,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__24609 = (new goog.fx.Dragger(card_el));G__24609.setLimits(container_wrap);
return G__24609;
})();card_el.dispose = ((function (i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24605,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__24606,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__24626 = (i__24605 + 1);
i__24605 = G__24626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24606),iter__24603.call(null,cljs.core.chunk_rest.call(null,s__24604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24606),null);
}
} else
{var i = cljs.core.first.call(null,s__24604__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__24610 = (new goog.fx.Dragger(card_el));G__24610.setLimits(container_wrap);
return G__24610;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24604__$2,temp__4092__auto__,container_wrap,vec__24602,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__24603.call(null,cljs.core.rest.call(null,s__24604__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__24602,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__24602,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__24611_24627 = cljs.core.seq.call(null,cards);var chunk__24612_24628 = null;var count__24613_24629 = 0;var i__24614_24630 = 0;while(true){
if((i__24614_24630 < count__24613_24629))
{var map__24615_24631 = cljs.core._nth.call(null,chunk__24612_24628,i__24614_24630);var map__24615_24632__$1 = ((cljs.core.seq_QMARK_.call(null,map__24615_24631))?cljs.core.apply.call(null,cljs.core.hash_map,map__24615_24631):map__24615_24631);var idx_24633 = cljs.core.get.call(null,map__24615_24632__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_24634 = cljs.core.get.call(null,map__24615_24632__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_24634.anim_idx = idx_24633;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_24634);
{
var G__24635 = seq__24611_24627;
var G__24636 = chunk__24612_24628;
var G__24637 = count__24613_24629;
var G__24638 = (i__24614_24630 + 1);
seq__24611_24627 = G__24635;
chunk__24612_24628 = G__24636;
count__24613_24629 = G__24637;
i__24614_24630 = G__24638;
continue;
}
} else
{var temp__4092__auto___24639 = cljs.core.seq.call(null,seq__24611_24627);if(temp__4092__auto___24639)
{var seq__24611_24640__$1 = temp__4092__auto___24639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24611_24640__$1))
{var c__17389__auto___24641 = cljs.core.chunk_first.call(null,seq__24611_24640__$1);{
var G__24642 = cljs.core.chunk_rest.call(null,seq__24611_24640__$1);
var G__24643 = c__17389__auto___24641;
var G__24644 = cljs.core.count.call(null,c__17389__auto___24641);
var G__24645 = 0;
seq__24611_24627 = G__24642;
chunk__24612_24628 = G__24643;
count__24613_24629 = G__24644;
i__24614_24630 = G__24645;
continue;
}
} else
{var map__24616_24646 = cljs.core.first.call(null,seq__24611_24640__$1);var map__24616_24647__$1 = ((cljs.core.seq_QMARK_.call(null,map__24616_24646))?cljs.core.apply.call(null,cljs.core.hash_map,map__24616_24646):map__24616_24646);var idx_24648 = cljs.core.get.call(null,map__24616_24647__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_24649 = cljs.core.get.call(null,map__24616_24647__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_24649.anim_idx = idx_24648;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_24649);
{
var G__24650 = cljs.core.next.call(null,seq__24611_24640__$1);
var G__24651 = null;
var G__24652 = 0;
var G__24653 = 0;
seq__24611_24627 = G__24650;
chunk__24612_24628 = G__24651;
count__24613_24629 = G__24652;
i__24614_24630 = G__24653;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__24617(s__24618){return (new cljs.core.LazySeq(null,(function (){var s__24618__$1 = s__24618;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24618__$1);if(temp__4092__auto__)
{var s__24618__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24618__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__24618__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__24620 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__24619 = 0;while(true){
if((i__24619 < size__17357__auto__))
{var map__24623 = cljs.core._nth.call(null,c__17356__auto__,i__24619);var map__24623__$1 = ((cljs.core.seq_QMARK_.call(null,map__24623))?cljs.core.apply.call(null,cljs.core.hash_map,map__24623):map__24623);var card_el = cljs.core.get.call(null,map__24623__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__24623__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__24623__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__24620,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__24654 = (i__24619 + 1);
i__24619 = G__24654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24620),iter__24617.call(null,cljs.core.chunk_rest.call(null,s__24618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24620),null);
}
} else
{var map__24624 = cljs.core.first.call(null,s__24618__$2);var map__24624__$1 = ((cljs.core.seq_QMARK_.call(null,map__24624))?cljs.core.apply.call(null,cljs.core.hash_map,map__24624):map__24624);var card_el = cljs.core.get.call(null,map__24624__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__24624__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__24624__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__24617.call(null,cljs.core.rest.call(null,s__24618__$2)));
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
gin.game_panel.anim_deal = (function anim_deal(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game: ",game,game_id);var opp_cards_el = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),((function (game,_){
return (function (p1__24655_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24655_SHARP_], null));
});})(game,_))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__24656_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24656_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__24664 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__24664,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__24664,1,null);var vec__24665 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__24665,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__24665,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y){
return (function (p1__24658_SHARP_,p2__24657_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__24657_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__24657_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__24658_SHARP_ * 53)),(their_region_offset_y + (p1__24658_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__24667){var map__24668 = p__24667;var map__24668__$1 = ((cljs.core.seq_QMARK_.call(null,map__24668))?cljs.core.apply.call(null,cljs.core.hash_map,map__24668):map__24668);var id = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__24668,map__24668__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(map__24668,map__24668__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__24668,map__24668__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(map__24668,map__24668__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__24664,their_region_offset_x,their_region_offset_y,vec__24665,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__24666 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__24666,0,null);var second_deal = cljs.core.nth.call(null,vec__24666,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
})], null),gin.dom_helpers.slide_from.call(null,discard_el,gin.game_panel.discard_position.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [300,(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
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
return (function (p1__24669_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24669_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__24670_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24670_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__24671_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24671_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__24672_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24672_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__24714 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__24714,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__24714,1,null);var seq__24715_24755 = cljs.core.seq.call(null,pile_cards_es);var chunk__24717_24756 = null;var count__24718_24757 = 0;var i__24719_24758 = 0;while(true){
if((i__24719_24758 < count__24718_24757))
{var pile_card_es_24759 = cljs.core._nth.call(null,chunk__24717_24756,i__24719_24758);var pile_card_el_24760 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_24759);gin.dom_helpers.set_card_class.call(null,pile_card_el_24760,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_24760);
gin.animator.slide.call(null,pile_card_el_24760,gin.game_panel.pile_position.call(null));
{
var G__24761 = seq__24715_24755;
var G__24762 = chunk__24717_24756;
var G__24763 = count__24718_24757;
var G__24764 = (i__24719_24758 + 1);
seq__24715_24755 = G__24761;
chunk__24717_24756 = G__24762;
count__24718_24757 = G__24763;
i__24719_24758 = G__24764;
continue;
}
} else
{var temp__4092__auto___24765 = cljs.core.seq.call(null,seq__24715_24755);if(temp__4092__auto___24765)
{var seq__24715_24766__$1 = temp__4092__auto___24765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715_24766__$1))
{var c__17389__auto___24767 = cljs.core.chunk_first.call(null,seq__24715_24766__$1);{
var G__24768 = cljs.core.chunk_rest.call(null,seq__24715_24766__$1);
var G__24769 = c__17389__auto___24767;
var G__24770 = cljs.core.count.call(null,c__17389__auto___24767);
var G__24771 = 0;
seq__24715_24755 = G__24768;
chunk__24717_24756 = G__24769;
count__24718_24757 = G__24770;
i__24719_24758 = G__24771;
continue;
}
} else
{var pile_card_es_24772 = cljs.core.first.call(null,seq__24715_24766__$1);var pile_card_el_24773 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_24772);gin.dom_helpers.set_card_class.call(null,pile_card_el_24773,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_24773);
gin.animator.slide.call(null,pile_card_el_24773,gin.game_panel.pile_position.call(null));
{
var G__24774 = cljs.core.next.call(null,seq__24715_24766__$1);
var G__24775 = null;
var G__24776 = 0;
var G__24777 = 0;
seq__24715_24755 = G__24774;
chunk__24717_24756 = G__24775;
count__24718_24757 = G__24776;
i__24719_24758 = G__24777;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___24778 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___24778))
{var pile_card_el_24779 = temp__4092__auto___24778;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_24779,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_24779,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_24780 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__24721_24781 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_24780)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_24782 = cljs.core.nth.call(null,vec__24721_24781,0,null);var y_step_24783 = cljs.core.nth.call(null,vec__24721_24781,1,null);console.log("opp reg");
var seq__24722_24784 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__24723_24785 = null;var count__24724_24786 = 0;var i__24725_24787 = 0;while(true){
if((i__24725_24787 < count__24724_24786))
{var vec__24726_24788 = cljs.core._nth.call(null,chunk__24723_24785,i__24725_24787);var i_24789 = cljs.core.nth.call(null,vec__24726_24788,0,null);var e_24790 = cljs.core.nth.call(null,vec__24726_24788,1,null);var el_24791 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_24790);gin.animator.slide.call(null,el_24791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_24789 * x_step_24782))),cljs.core.long$.call(null,(their_region_offset_y + (i_24789 * y_step_24783)))], null));
{
var G__24792 = seq__24722_24784;
var G__24793 = chunk__24723_24785;
var G__24794 = count__24724_24786;
var G__24795 = (i__24725_24787 + 1);
seq__24722_24784 = G__24792;
chunk__24723_24785 = G__24793;
count__24724_24786 = G__24794;
i__24725_24787 = G__24795;
continue;
}
} else
{var temp__4092__auto___24796 = cljs.core.seq.call(null,seq__24722_24784);if(temp__4092__auto___24796)
{var seq__24722_24797__$1 = temp__4092__auto___24796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24722_24797__$1))
{var c__17389__auto___24798 = cljs.core.chunk_first.call(null,seq__24722_24797__$1);{
var G__24799 = cljs.core.chunk_rest.call(null,seq__24722_24797__$1);
var G__24800 = c__17389__auto___24798;
var G__24801 = cljs.core.count.call(null,c__17389__auto___24798);
var G__24802 = 0;
seq__24722_24784 = G__24799;
chunk__24723_24785 = G__24800;
count__24724_24786 = G__24801;
i__24725_24787 = G__24802;
continue;
}
} else
{var vec__24727_24803 = cljs.core.first.call(null,seq__24722_24797__$1);var i_24804 = cljs.core.nth.call(null,vec__24727_24803,0,null);var e_24805 = cljs.core.nth.call(null,vec__24727_24803,1,null);var el_24806 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_24805);gin.animator.slide.call(null,el_24806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_24804 * x_step_24782))),cljs.core.long$.call(null,(their_region_offset_y + (i_24804 * y_step_24783)))], null));
{
var G__24807 = cljs.core.next.call(null,seq__24722_24797__$1);
var G__24808 = null;
var G__24809 = 0;
var G__24810 = 0;
seq__24722_24784 = G__24807;
chunk__24723_24785 = G__24808;
count__24724_24786 = G__24809;
i__24725_24787 = G__24810;
continue;
}
}
} else
{}
}
break;
}
var seq__24728_24811 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_24780,opp_cards_es));var chunk__24729_24812 = null;var count__24730_24813 = 0;var i__24731_24814 = 0;while(true){
if((i__24731_24814 < count__24730_24813))
{var vec__24732_24815 = cljs.core._nth.call(null,chunk__24729_24812,i__24731_24814);var el_24816 = cljs.core.nth.call(null,vec__24732_24815,0,null);var es_24817 = cljs.core.nth.call(null,vec__24732_24815,1,null);var suit_24818 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_24817);var rank_24819 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_24817);gin.dom_helpers.show_on_top.call(null,el_24816);
gin.dom_helpers.set_card_class.call(null,el_24816,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_24818))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24818)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24819))].join('')));
{
var G__24820 = seq__24728_24811;
var G__24821 = chunk__24729_24812;
var G__24822 = count__24730_24813;
var G__24823 = (i__24731_24814 + 1);
seq__24728_24811 = G__24820;
chunk__24729_24812 = G__24821;
count__24730_24813 = G__24822;
i__24731_24814 = G__24823;
continue;
}
} else
{var temp__4092__auto___24824 = cljs.core.seq.call(null,seq__24728_24811);if(temp__4092__auto___24824)
{var seq__24728_24825__$1 = temp__4092__auto___24824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24728_24825__$1))
{var c__17389__auto___24826 = cljs.core.chunk_first.call(null,seq__24728_24825__$1);{
var G__24827 = cljs.core.chunk_rest.call(null,seq__24728_24825__$1);
var G__24828 = c__17389__auto___24826;
var G__24829 = cljs.core.count.call(null,c__17389__auto___24826);
var G__24830 = 0;
seq__24728_24811 = G__24827;
chunk__24729_24812 = G__24828;
count__24730_24813 = G__24829;
i__24731_24814 = G__24830;
continue;
}
} else
{var vec__24733_24831 = cljs.core.first.call(null,seq__24728_24825__$1);var el_24832 = cljs.core.nth.call(null,vec__24733_24831,0,null);var es_24833 = cljs.core.nth.call(null,vec__24733_24831,1,null);var suit_24834 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_24833);var rank_24835 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_24833);gin.dom_helpers.show_on_top.call(null,el_24832);
gin.dom_helpers.set_card_class.call(null,el_24832,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_24834))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24834)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24835))].join('')));
{
var G__24836 = cljs.core.next.call(null,seq__24728_24825__$1);
var G__24837 = null;
var G__24838 = 0;
var G__24839 = 0;
seq__24728_24811 = G__24836;
chunk__24729_24812 = G__24837;
count__24730_24813 = G__24838;
i__24731_24814 = G__24839;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__24734_24840 = cljs.core.seq.call(null,discard_cards_es);var chunk__24736_24841 = null;var count__24737_24842 = 0;var i__24738_24843 = 0;while(true){
if((i__24738_24843 < count__24737_24842))
{var discard_card_es_24844 = cljs.core._nth.call(null,chunk__24736_24841,i__24738_24843);var discard_card_el_24845 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_24844);var suit_24846 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_24844);var rank_24847 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_24844);gin.dom_helpers.set_card_class.call(null,discard_card_el_24845,[cljs.core.str(cljs.core.name.call(null,suit_24846)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24847))].join(''));
gin.animator.slide.call(null,discard_card_el_24845,gin.game_panel.discard_position.call(null));
{
var G__24848 = seq__24734_24840;
var G__24849 = chunk__24736_24841;
var G__24850 = count__24737_24842;
var G__24851 = (i__24738_24843 + 1);
seq__24734_24840 = G__24848;
chunk__24736_24841 = G__24849;
count__24737_24842 = G__24850;
i__24738_24843 = G__24851;
continue;
}
} else
{var temp__4092__auto___24852 = cljs.core.seq.call(null,seq__24734_24840);if(temp__4092__auto___24852)
{var seq__24734_24853__$1 = temp__4092__auto___24852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24734_24853__$1))
{var c__17389__auto___24854 = cljs.core.chunk_first.call(null,seq__24734_24853__$1);{
var G__24855 = cljs.core.chunk_rest.call(null,seq__24734_24853__$1);
var G__24856 = c__17389__auto___24854;
var G__24857 = cljs.core.count.call(null,c__17389__auto___24854);
var G__24858 = 0;
seq__24734_24840 = G__24855;
chunk__24736_24841 = G__24856;
count__24737_24842 = G__24857;
i__24738_24843 = G__24858;
continue;
}
} else
{var discard_card_es_24859 = cljs.core.first.call(null,seq__24734_24853__$1);var discard_card_el_24860 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_24859);var suit_24861 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_24859);var rank_24862 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_24859);gin.dom_helpers.set_card_class.call(null,discard_card_el_24860,[cljs.core.str(cljs.core.name.call(null,suit_24861)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24862))].join(''));
gin.animator.slide.call(null,discard_card_el_24860,gin.game_panel.discard_position.call(null));
{
var G__24863 = cljs.core.next.call(null,seq__24734_24853__$1);
var G__24864 = null;
var G__24865 = 0;
var G__24866 = 0;
seq__24734_24840 = G__24863;
chunk__24736_24841 = G__24864;
count__24737_24842 = G__24865;
i__24738_24843 = G__24866;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___24867 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___24867))
{var discard_card_el_24868 = temp__4092__auto___24867;gin.dom_helpers.show_on_top.call(null,discard_card_el_24868);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_24868,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_24868,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__24740 = cljs.core.seq.call(null,our_cards_es);var chunk__24741 = null;var count__24742 = 0;var i__24743 = 0;while(true){
if((i__24743 < count__24742))
{var our_card_es = cljs.core._nth.call(null,chunk__24741,i__24743);var our_card_el_24869 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es);var suit_24870 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_24871 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_24869,((cljs.core._EQ_.call(null,suit_24870,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24870)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24871))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_24869,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__24872 = seq__24740;
var G__24873 = chunk__24741;
var G__24874 = count__24742;
var G__24875 = (i__24743 + 1);
seq__24740 = G__24872;
chunk__24741 = G__24873;
count__24742 = G__24874;
i__24743 = G__24875;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24740);if(temp__4092__auto__)
{var seq__24740__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24740__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__24740__$1);{
var G__24876 = cljs.core.chunk_rest.call(null,seq__24740__$1);
var G__24877 = c__17389__auto__;
var G__24878 = cljs.core.count.call(null,c__17389__auto__);
var G__24879 = 0;
seq__24740 = G__24876;
chunk__24741 = G__24877;
count__24742 = G__24878;
i__24743 = G__24879;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__24740__$1);var our_card_el_24880 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es);var suit_24881 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_24882 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_24880,((cljs.core._EQ_.call(null,suit_24881,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24881)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24882))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_24880,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__24883 = cljs.core.next.call(null,seq__24740__$1);
var G__24884 = null;
var G__24885 = 0;
var G__24886 = 0;
seq__24740 = G__24883;
chunk__24741 = G__24884;
count__24742 = G__24885;
i__24743 = G__24886;
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
var seq__24744 = cljs.core.seq.call(null,our_cards_es);var chunk__24745 = null;var count__24746 = 0;var i__24747 = 0;while(true){
if((i__24747 < count__24746))
{var our_card_es = cljs.core._nth.call(null,chunk__24745,i__24747);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__24887 = seq__24744;
var G__24888 = chunk__24745;
var G__24889 = count__24746;
var G__24890 = (i__24747 + 1);
seq__24744 = G__24887;
chunk__24745 = G__24888;
count__24746 = G__24889;
i__24747 = G__24890;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24744);if(temp__4092__auto__)
{var seq__24744__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24744__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__24744__$1);{
var G__24891 = cljs.core.chunk_rest.call(null,seq__24744__$1);
var G__24892 = c__17389__auto__;
var G__24893 = cljs.core.count.call(null,c__17389__auto__);
var G__24894 = 0;
seq__24744 = G__24891;
chunk__24745 = G__24892;
count__24746 = G__24893;
i__24747 = G__24894;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__24744__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__24895 = cljs.core.next.call(null,seq__24744__$1);
var G__24896 = null;
var G__24897 = 0;
var G__24898 = 0;
seq__24744 = G__24895;
chunk__24745 = G__24896;
count__24746 = G__24897;
i__24747 = G__24898;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__24748 = cljs.core._EQ_;var expr__24749 = result;if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__24749)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__24749)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__24749)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__24749)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__24749)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24749)].join('')));
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
var seq__24751 = cljs.core.seq.call(null,our_cards_es);var chunk__24752 = null;var count__24753 = 0;var i__24754 = 0;while(true){
if((i__24754 < count__24753))
{var our_card_es = cljs.core._nth.call(null,chunk__24752,i__24754);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__24899 = seq__24751;
var G__24900 = chunk__24752;
var G__24901 = count__24753;
var G__24902 = (i__24754 + 1);
seq__24751 = G__24899;
chunk__24752 = G__24900;
count__24753 = G__24901;
i__24754 = G__24902;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24751);if(temp__4092__auto__)
{var seq__24751__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24751__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__24751__$1);{
var G__24903 = cljs.core.chunk_rest.call(null,seq__24751__$1);
var G__24904 = c__17389__auto__;
var G__24905 = cljs.core.count.call(null,c__17389__auto__);
var G__24906 = 0;
seq__24751 = G__24903;
chunk__24752 = G__24904;
count__24753 = G__24905;
i__24754 = G__24906;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__24751__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__24907 = cljs.core.next.call(null,seq__24751__$1);
var G__24908 = null;
var G__24909 = 0;
var G__24910 = 0;
seq__24751 = G__24907;
chunk__24752 = G__24908;
count__24753 = G__24909;
i__24754 = G__24910;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__24914 = report;var map__24914__$1 = ((cljs.core.seq_QMARK_.call(null,map__24914))?cljs.core.apply.call(null,cljs.core.hash_map,map__24914):map__24914);var db_after = cljs.core.get.call(null,map__24914__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__24915 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__24915,0,null);var vec__24916 = cljs.core.nth.call(null,vec__24915,1,null);var game_id = cljs.core.nth.call(null,vec__24916,0,null);var args = cljs.core.nthnext.call(null,vec__24916,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
