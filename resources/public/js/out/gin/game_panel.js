// Compiled by ClojureScript 0.0-2173
goog.provide('gin.game_panel');
goog.require('cljs.core');
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
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('gin.datascript_helpers');
goog.require('goog.fx.Dragger');
gin.game_panel.set_msg = (function set_msg(msg){return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.in_rect = (function in_rect(rect,p__46217){var vec__46219 = p__46217;var x = cljs.core.nth.call(null,vec__46219,0,null);var y = cljs.core.nth.call(null,vec__46219,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
return gin.game_panel.slide.call(null,card_el,gin.game_panel.pile_position.call(null));
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
{return gin.game_panel.slide.call(null,card_el,(function (){var p = card_el.drag_origin;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
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
gin.game_panel.draw_table = (function draw_table(conn){var G__46244_46268 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__46244_46268,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__46244_46268,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__46244_46268,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__46245 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__46245,0,null);var pile_y = cljs.core.nth.call(null,vec__46245,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__46245,pile_x,pile_y){
return (function iter__46246(s__46247){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__46245,pile_x,pile_y){
return (function (){var s__46247__$1 = s__46247;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46247__$1);if(temp__4092__auto__)
{var s__46247__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46247__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__46247__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__46249 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__46248 = 0;while(true){
if((i__46248 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__46248);cljs.core.chunk_append.call(null,b__46249,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__46252 = (new goog.fx.Dragger(card_el));G__46252.setLimits(container_wrap);
return G__46252;
})();card_el.dispose = ((function (i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__46248,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__46249,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__46269 = (i__46248 + 1);
i__46248 = G__46269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46249),iter__46246.call(null,cljs.core.chunk_rest.call(null,s__46247__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46249),null);
}
} else
{var i = cljs.core.first.call(null,s__46247__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__46253 = (new goog.fx.Dragger(card_el));G__46253.setLimits(container_wrap);
return G__46253;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__46247__$2,temp__4092__auto__,container_wrap,vec__46245,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__46246.call(null,cljs.core.rest.call(null,s__46247__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__46245,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__46245,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__46254_46270 = cljs.core.seq.call(null,cards);var chunk__46255_46271 = null;var count__46256_46272 = 0;var i__46257_46273 = 0;while(true){
if((i__46257_46273 < count__46256_46272))
{var map__46258_46274 = cljs.core._nth.call(null,chunk__46255_46271,i__46257_46273);var map__46258_46275__$1 = ((cljs.core.seq_QMARK_.call(null,map__46258_46274))?cljs.core.apply.call(null,cljs.core.hash_map,map__46258_46274):map__46258_46274);var idx_46276 = cljs.core.get.call(null,map__46258_46275__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_46277 = cljs.core.get.call(null,map__46258_46275__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_46277.anim_idx = idx_46276;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_46277);
{
var G__46278 = seq__46254_46270;
var G__46279 = chunk__46255_46271;
var G__46280 = count__46256_46272;
var G__46281 = (i__46257_46273 + 1);
seq__46254_46270 = G__46278;
chunk__46255_46271 = G__46279;
count__46256_46272 = G__46280;
i__46257_46273 = G__46281;
continue;
}
} else
{var temp__4092__auto___46282 = cljs.core.seq.call(null,seq__46254_46270);if(temp__4092__auto___46282)
{var seq__46254_46283__$1 = temp__4092__auto___46282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46254_46283__$1))
{var c__17389__auto___46284 = cljs.core.chunk_first.call(null,seq__46254_46283__$1);{
var G__46285 = cljs.core.chunk_rest.call(null,seq__46254_46283__$1);
var G__46286 = c__17389__auto___46284;
var G__46287 = cljs.core.count.call(null,c__17389__auto___46284);
var G__46288 = 0;
seq__46254_46270 = G__46285;
chunk__46255_46271 = G__46286;
count__46256_46272 = G__46287;
i__46257_46273 = G__46288;
continue;
}
} else
{var map__46259_46289 = cljs.core.first.call(null,seq__46254_46283__$1);var map__46259_46290__$1 = ((cljs.core.seq_QMARK_.call(null,map__46259_46289))?cljs.core.apply.call(null,cljs.core.hash_map,map__46259_46289):map__46259_46289);var idx_46291 = cljs.core.get.call(null,map__46259_46290__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_46292 = cljs.core.get.call(null,map__46259_46290__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_46292.anim_idx = idx_46291;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_46292);
{
var G__46293 = cljs.core.next.call(null,seq__46254_46283__$1);
var G__46294 = null;
var G__46295 = 0;
var G__46296 = 0;
seq__46254_46270 = G__46293;
chunk__46255_46271 = G__46294;
count__46256_46272 = G__46295;
i__46257_46273 = G__46296;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__46260(s__46261){return (new cljs.core.LazySeq(null,(function (){var s__46261__$1 = s__46261;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46261__$1);if(temp__4092__auto__)
{var s__46261__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46261__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__46261__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__46263 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__46262 = 0;while(true){
if((i__46262 < size__17357__auto__))
{var map__46266 = cljs.core._nth.call(null,c__17356__auto__,i__46262);var map__46266__$1 = ((cljs.core.seq_QMARK_.call(null,map__46266))?cljs.core.apply.call(null,cljs.core.hash_map,map__46266):map__46266);var card_el = cljs.core.get.call(null,map__46266__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__46266__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__46266__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__46263,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__46297 = (i__46262 + 1);
i__46262 = G__46297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46263),iter__46260.call(null,cljs.core.chunk_rest.call(null,s__46261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46263),null);
}
} else
{var map__46267 = cljs.core.first.call(null,s__46261__$2);var map__46267__$1 = ((cljs.core.seq_QMARK_.call(null,map__46267))?cljs.core.apply.call(null,cljs.core.hash_map,map__46267):map__46267);var card_el = cljs.core.get.call(null,map__46267__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__46267__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__46267__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__46260.call(null,cljs.core.rest.call(null,s__46261__$2)));
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
return (function (p1__46298_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__46298_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__46306 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__46306,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__46306,1,null);var vec__46307 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__46307,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__46307,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y){
return (function (p1__46300_SHARP_,p2__46299_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__46299_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__46299_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__46300_SHARP_ * 53)),(their_region_offset_y + (p1__46300_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__46309){var map__46310 = p__46309;var map__46310__$1 = ((cljs.core.seq_QMARK_.call(null,map__46310))?cljs.core.apply.call(null,cljs.core.hash_map,map__46310):map__46310);var id = cljs.core.get.call(null,map__46310__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__46310__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__46310__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__46310,map__46310__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__46310,map__46310__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__46310,map__46310__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__46310,map__46310__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__46306,their_region_offset_x,their_region_offset_y,vec__46307,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__46308 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__46308,0,null);var second_deal = cljs.core.nth.call(null,vec__46308,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
return (function (p1__46311_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__46311_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__46312_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__46312_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__46313_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__46313_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__46314_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__46314_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__46357 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__46357,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__46357,1,null);var seq__46358_46398 = cljs.core.seq.call(null,pile_cards_es);var chunk__46360_46399 = null;var count__46361_46400 = 0;var i__46362_46401 = 0;while(true){
if((i__46362_46401 < count__46361_46400))
{var pile_card_es_46402 = cljs.core._nth.call(null,chunk__46360_46399,i__46362_46401);var pile_card_el_46403 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_46402));gin.dom_helpers.set_card_class.call(null,pile_card_el_46403,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_46403);
gin.animator.slide.call(null,pile_card_el_46403,gin.game_panel.pile_position.call(null));
{
var G__46404 = seq__46358_46398;
var G__46405 = chunk__46360_46399;
var G__46406 = count__46361_46400;
var G__46407 = (i__46362_46401 + 1);
seq__46358_46398 = G__46404;
chunk__46360_46399 = G__46405;
count__46361_46400 = G__46406;
i__46362_46401 = G__46407;
continue;
}
} else
{var temp__4092__auto___46408 = cljs.core.seq.call(null,seq__46358_46398);if(temp__4092__auto___46408)
{var seq__46358_46409__$1 = temp__4092__auto___46408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46358_46409__$1))
{var c__17389__auto___46410 = cljs.core.chunk_first.call(null,seq__46358_46409__$1);{
var G__46411 = cljs.core.chunk_rest.call(null,seq__46358_46409__$1);
var G__46412 = c__17389__auto___46410;
var G__46413 = cljs.core.count.call(null,c__17389__auto___46410);
var G__46414 = 0;
seq__46358_46398 = G__46411;
chunk__46360_46399 = G__46412;
count__46361_46400 = G__46413;
i__46362_46401 = G__46414;
continue;
}
} else
{var pile_card_es_46415 = cljs.core.first.call(null,seq__46358_46409__$1);var pile_card_el_46416 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_46415));gin.dom_helpers.set_card_class.call(null,pile_card_el_46416,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_46416);
gin.animator.slide.call(null,pile_card_el_46416,gin.game_panel.pile_position.call(null));
{
var G__46417 = cljs.core.next.call(null,seq__46358_46409__$1);
var G__46418 = null;
var G__46419 = 0;
var G__46420 = 0;
seq__46358_46398 = G__46417;
chunk__46360_46399 = G__46418;
count__46361_46400 = G__46419;
i__46362_46401 = G__46420;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___46421 = cljs.core.last.call(null,pile_cards_es);if(cljs.core.truth_(temp__4092__auto___46421))
{var pile_card_es_46422 = temp__4092__auto___46421;var pile_card_el_46423 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_46422));if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_46423,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_46423,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_46424 = cljs.core.map.call(null,(function (p1__46315_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__46315_SHARP_));
}),opp_cards_es);var vec__46364_46425 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_46424)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_46426 = cljs.core.nth.call(null,vec__46364_46425,0,null);var y_step_46427 = cljs.core.nth.call(null,vec__46364_46425,1,null);console.log("opp reg");
var seq__46365_46428 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__46366_46429 = null;var count__46367_46430 = 0;var i__46368_46431 = 0;while(true){
if((i__46368_46431 < count__46367_46430))
{var vec__46369_46432 = cljs.core._nth.call(null,chunk__46366_46429,i__46368_46431);var i_46433 = cljs.core.nth.call(null,vec__46369_46432,0,null);var e_46434 = cljs.core.nth.call(null,vec__46369_46432,1,null);var idx_46435 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_46434);var el_46436 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_46434));gin.animator.slide.call(null,el_46436,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_46433 * x_step_46426))),cljs.core.long$.call(null,(their_region_offset_y + (i_46433 * y_step_46427)))], null));
{
var G__46437 = seq__46365_46428;
var G__46438 = chunk__46366_46429;
var G__46439 = count__46367_46430;
var G__46440 = (i__46368_46431 + 1);
seq__46365_46428 = G__46437;
chunk__46366_46429 = G__46438;
count__46367_46430 = G__46439;
i__46368_46431 = G__46440;
continue;
}
} else
{var temp__4092__auto___46441 = cljs.core.seq.call(null,seq__46365_46428);if(temp__4092__auto___46441)
{var seq__46365_46442__$1 = temp__4092__auto___46441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46365_46442__$1))
{var c__17389__auto___46443 = cljs.core.chunk_first.call(null,seq__46365_46442__$1);{
var G__46444 = cljs.core.chunk_rest.call(null,seq__46365_46442__$1);
var G__46445 = c__17389__auto___46443;
var G__46446 = cljs.core.count.call(null,c__17389__auto___46443);
var G__46447 = 0;
seq__46365_46428 = G__46444;
chunk__46366_46429 = G__46445;
count__46367_46430 = G__46446;
i__46368_46431 = G__46447;
continue;
}
} else
{var vec__46370_46448 = cljs.core.first.call(null,seq__46365_46442__$1);var i_46449 = cljs.core.nth.call(null,vec__46370_46448,0,null);var e_46450 = cljs.core.nth.call(null,vec__46370_46448,1,null);var idx_46451 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_46450);var el_46452 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_46450));gin.animator.slide.call(null,el_46452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_46449 * x_step_46426))),cljs.core.long$.call(null,(their_region_offset_y + (i_46449 * y_step_46427)))], null));
{
var G__46453 = cljs.core.next.call(null,seq__46365_46442__$1);
var G__46454 = null;
var G__46455 = 0;
var G__46456 = 0;
seq__46365_46428 = G__46453;
chunk__46366_46429 = G__46454;
count__46367_46430 = G__46455;
i__46368_46431 = G__46456;
continue;
}
}
} else
{}
}
break;
}
var seq__46371_46457 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_46424,opp_cards_es));var chunk__46372_46458 = null;var count__46373_46459 = 0;var i__46374_46460 = 0;while(true){
if((i__46374_46460 < count__46373_46459))
{var vec__46375_46461 = cljs.core._nth.call(null,chunk__46372_46458,i__46374_46460);var el_46462 = cljs.core.nth.call(null,vec__46375_46461,0,null);var es_46463 = cljs.core.nth.call(null,vec__46375_46461,1,null);var suit_46464 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_46463);var rank_46465 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_46463);gin.dom_helpers.show_on_top.call(null,el_46462);
gin.dom_helpers.set_card_class.call(null,el_46462,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_46464))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_46464)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_46465))].join('')));
{
var G__46466 = seq__46371_46457;
var G__46467 = chunk__46372_46458;
var G__46468 = count__46373_46459;
var G__46469 = (i__46374_46460 + 1);
seq__46371_46457 = G__46466;
chunk__46372_46458 = G__46467;
count__46373_46459 = G__46468;
i__46374_46460 = G__46469;
continue;
}
} else
{var temp__4092__auto___46470 = cljs.core.seq.call(null,seq__46371_46457);if(temp__4092__auto___46470)
{var seq__46371_46471__$1 = temp__4092__auto___46470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46371_46471__$1))
{var c__17389__auto___46472 = cljs.core.chunk_first.call(null,seq__46371_46471__$1);{
var G__46473 = cljs.core.chunk_rest.call(null,seq__46371_46471__$1);
var G__46474 = c__17389__auto___46472;
var G__46475 = cljs.core.count.call(null,c__17389__auto___46472);
var G__46476 = 0;
seq__46371_46457 = G__46473;
chunk__46372_46458 = G__46474;
count__46373_46459 = G__46475;
i__46374_46460 = G__46476;
continue;
}
} else
{var vec__46376_46477 = cljs.core.first.call(null,seq__46371_46471__$1);var el_46478 = cljs.core.nth.call(null,vec__46376_46477,0,null);var es_46479 = cljs.core.nth.call(null,vec__46376_46477,1,null);var suit_46480 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_46479);var rank_46481 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_46479);gin.dom_helpers.show_on_top.call(null,el_46478);
gin.dom_helpers.set_card_class.call(null,el_46478,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_46480))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_46480)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_46481))].join('')));
{
var G__46482 = cljs.core.next.call(null,seq__46371_46471__$1);
var G__46483 = null;
var G__46484 = 0;
var G__46485 = 0;
seq__46371_46457 = G__46482;
chunk__46372_46458 = G__46483;
count__46373_46459 = G__46484;
i__46374_46460 = G__46485;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__46377_46486 = cljs.core.seq.call(null,discard_cards_es);var chunk__46379_46487 = null;var count__46380_46488 = 0;var i__46381_46489 = 0;while(true){
if((i__46381_46489 < count__46380_46488))
{var discard_card_es_46490 = cljs.core._nth.call(null,chunk__46379_46487,i__46381_46489);var discard_card_el_46491 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_46490));var suit_46492 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_46490);var rank_46493 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_46490);gin.dom_helpers.set_card_class.call(null,discard_card_el_46491,[cljs.core.str(cljs.core.name.call(null,suit_46492)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_46493))].join(''));
gin.animator.slide.call(null,discard_card_el_46491,gin.game_panel.discard_position.call(null));
{
var G__46494 = seq__46377_46486;
var G__46495 = chunk__46379_46487;
var G__46496 = count__46380_46488;
var G__46497 = (i__46381_46489 + 1);
seq__46377_46486 = G__46494;
chunk__46379_46487 = G__46495;
count__46380_46488 = G__46496;
i__46381_46489 = G__46497;
continue;
}
} else
{var temp__4092__auto___46498 = cljs.core.seq.call(null,seq__46377_46486);if(temp__4092__auto___46498)
{var seq__46377_46499__$1 = temp__4092__auto___46498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46377_46499__$1))
{var c__17389__auto___46500 = cljs.core.chunk_first.call(null,seq__46377_46499__$1);{
var G__46501 = cljs.core.chunk_rest.call(null,seq__46377_46499__$1);
var G__46502 = c__17389__auto___46500;
var G__46503 = cljs.core.count.call(null,c__17389__auto___46500);
var G__46504 = 0;
seq__46377_46486 = G__46501;
chunk__46379_46487 = G__46502;
count__46380_46488 = G__46503;
i__46381_46489 = G__46504;
continue;
}
} else
{var discard_card_es_46505 = cljs.core.first.call(null,seq__46377_46499__$1);var discard_card_el_46506 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_46505));var suit_46507 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_46505);var rank_46508 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_46505);gin.dom_helpers.set_card_class.call(null,discard_card_el_46506,[cljs.core.str(cljs.core.name.call(null,suit_46507)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_46508))].join(''));
gin.animator.slide.call(null,discard_card_el_46506,gin.game_panel.discard_position.call(null));
{
var G__46509 = cljs.core.next.call(null,seq__46377_46499__$1);
var G__46510 = null;
var G__46511 = 0;
var G__46512 = 0;
seq__46377_46486 = G__46509;
chunk__46379_46487 = G__46510;
count__46380_46488 = G__46511;
i__46381_46489 = G__46512;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___46513 = cljs.core.last.call(null,discard_cards_es);if(cljs.core.truth_(temp__4092__auto___46513))
{var discard_card_es_46514 = temp__4092__auto___46513;var discard_card_el_46515 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_46514));gin.dom_helpers.show_on_top.call(null,discard_card_el_46515);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_46515,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_46515,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__46383 = cljs.core.seq.call(null,our_cards_es);var chunk__46384 = null;var count__46385 = 0;var i__46386 = 0;while(true){
if((i__46386 < count__46385))
{var our_card_es = cljs.core._nth.call(null,chunk__46384,i__46386);var our_card_el_46516 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_46517 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_46518 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_46516,((cljs.core._EQ_.call(null,suit_46517,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_46517)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_46518))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_46516,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__46519 = seq__46383;
var G__46520 = chunk__46384;
var G__46521 = count__46385;
var G__46522 = (i__46386 + 1);
seq__46383 = G__46519;
chunk__46384 = G__46520;
count__46385 = G__46521;
i__46386 = G__46522;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46383);if(temp__4092__auto__)
{var seq__46383__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46383__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__46383__$1);{
var G__46523 = cljs.core.chunk_rest.call(null,seq__46383__$1);
var G__46524 = c__17389__auto__;
var G__46525 = cljs.core.count.call(null,c__17389__auto__);
var G__46526 = 0;
seq__46383 = G__46523;
chunk__46384 = G__46524;
count__46385 = G__46525;
i__46386 = G__46526;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__46383__$1);var our_card_el_46527 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_46528 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_46529 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_46527,((cljs.core._EQ_.call(null,suit_46528,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_46528)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_46529))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_46527,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__46530 = cljs.core.next.call(null,seq__46383__$1);
var G__46531 = null;
var G__46532 = 0;
var G__46533 = 0;
seq__46383 = G__46530;
chunk__46384 = G__46531;
count__46385 = G__46532;
i__46386 = G__46533;
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
var seq__46387 = cljs.core.seq.call(null,our_cards_es);var chunk__46388 = null;var count__46389 = 0;var i__46390 = 0;while(true){
if((i__46390 < count__46389))
{var our_card_es = cljs.core._nth.call(null,chunk__46388,i__46390);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__46534 = seq__46387;
var G__46535 = chunk__46388;
var G__46536 = count__46389;
var G__46537 = (i__46390 + 1);
seq__46387 = G__46534;
chunk__46388 = G__46535;
count__46389 = G__46536;
i__46390 = G__46537;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46387);if(temp__4092__auto__)
{var seq__46387__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46387__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__46387__$1);{
var G__46538 = cljs.core.chunk_rest.call(null,seq__46387__$1);
var G__46539 = c__17389__auto__;
var G__46540 = cljs.core.count.call(null,c__17389__auto__);
var G__46541 = 0;
seq__46387 = G__46538;
chunk__46388 = G__46539;
count__46389 = G__46540;
i__46390 = G__46541;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__46387__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__46542 = cljs.core.next.call(null,seq__46387__$1);
var G__46543 = null;
var G__46544 = 0;
var G__46545 = 0;
seq__46387 = G__46542;
chunk__46388 = G__46543;
count__46389 = G__46544;
i__46390 = G__46545;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__46391 = cljs.core._EQ_;var expr__46392 = result;if(cljs.core.truth_(pred__46391.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__46392)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__46391.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__46392)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__46391.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__46392)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__46391.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__46392)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__46391.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__46392)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46392)].join('')));
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
var seq__46394 = cljs.core.seq.call(null,our_cards_es);var chunk__46395 = null;var count__46396 = 0;var i__46397 = 0;while(true){
if((i__46397 < count__46396))
{var our_card_es = cljs.core._nth.call(null,chunk__46395,i__46397);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__46546 = seq__46394;
var G__46547 = chunk__46395;
var G__46548 = count__46396;
var G__46549 = (i__46397 + 1);
seq__46394 = G__46546;
chunk__46395 = G__46547;
count__46396 = G__46548;
i__46397 = G__46549;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46394);if(temp__4092__auto__)
{var seq__46394__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46394__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__46394__$1);{
var G__46550 = cljs.core.chunk_rest.call(null,seq__46394__$1);
var G__46551 = c__17389__auto__;
var G__46552 = cljs.core.count.call(null,c__17389__auto__);
var G__46553 = 0;
seq__46394 = G__46550;
chunk__46395 = G__46551;
count__46396 = G__46552;
i__46397 = G__46553;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__46394__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__46554 = cljs.core.next.call(null,seq__46394__$1);
var G__46555 = null;
var G__46556 = 0;
var G__46557 = 0;
seq__46394 = G__46554;
chunk__46395 = G__46555;
count__46396 = G__46556;
i__46397 = G__46557;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__46561 = report;var map__46561__$1 = ((cljs.core.seq_QMARK_.call(null,map__46561))?cljs.core.apply.call(null,cljs.core.hash_map,map__46561):map__46561);var db_after = cljs.core.get.call(null,map__46561__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__46562 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__46562,0,null);var vec__46563 = cljs.core.nth.call(null,vec__46562,1,null);var game_id = cljs.core.nth.call(null,vec__46563,0,null);var args = cljs.core.nthnext.call(null,vec__46563,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
