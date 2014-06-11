// Compiled by ClojureScript 0.0-2173
goog.provide('gin.ui.game_panel');
goog.require('cljs.core');
goog.require('goog.math');
goog.require('gin.transact');
goog.require('gin.transact');
goog.require('datascript');
goog.require('goog.events');
goog.require('gin.ui.dom_helpers');
goog.require('gin.ui.animator');
goog.require('gin.datascript_helpers');
goog.require('gin.ui.animator');
goog.require('datascript');
goog.require('goog.math');
goog.require('gin.ui.dom_helpers');
goog.require('goog.fx.Dragger');
goog.require('goog.events');
goog.require('gin.datascript_helpers');
goog.require('goog.fx.Dragger');
gin.ui.game_panel.set_msg = (function set_msg(msg){return gin.ui.dom_helpers.set_text.call(null,gin.ui.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.ui.game_panel.in_rect = (function in_rect(rect,p__22533){var vec__22535 = p__22533;var x = cljs.core.nth.call(null,vec__22535,0,null);var y = cljs.core.nth.call(null,vec__22535,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.ui.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"));return gin.ui.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.ui.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"));return gin.ui.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.ui.game_panel.pile_position = (function pile_position(){var vec__22537 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"));var x = cljs.core.nth.call(null,vec__22537,0,null);var y = cljs.core.nth.call(null,vec__22537,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 4),(y + 4)], null);
});
gin.ui.game_panel.discard_position = (function discard_position(){var vec__22539 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"));var x = cljs.core.nth.call(null,vec__22539,0,null);var y = cljs.core.nth.call(null,vec__22539,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + x),(12 + y)], null);
});
gin.ui.game_panel.their_region_position = (function their_region_position(){var vec__22541 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"their_region"));var x = cljs.core.nth.call(null,vec__22541,0,null);var y = cljs.core.nth.call(null,vec__22541,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
});
gin.ui.game_panel.our_region_position = (function our_region_position(){var vec__22543 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"));var x = cljs.core.nth.call(null,vec__22543,0,null);var y = cljs.core.nth.call(null,vec__22543,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
});
gin.ui.game_panel.set_drag_handler = (function set_drag_handler(card_el,handler){var cursor = new cljs.core.Keyword(null,"cursor","cursor",3959752392).cljs$core$IFn$_invoke$arity$1(handler);if(cljs.core._EQ_.call(null,cursor,new cljs.core.Keyword(null,"hand","hand",1017099233)))
{gin.ui.dom_helpers.add_class.call(null,card_el,"cursor_hand");
} else
{gin.ui.dom_helpers.remove_class.call(null,card_el,"cursor_hand");
}
return card_el.drag_handler = handler;
});
gin.ui.game_panel.undraggable_handler = (function undraggable_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"none","none",1017291434),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){return null;
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){return null;
})], null);
});
gin.ui.game_panel.pile_pick_handler = (function pile_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__22545 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__22545,0,null);var y = cljs.core.nth.call(null,vec__22545,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.pile_drag_handler.call(null,conn));
return gin.ui.dom_helpers.remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
gin.ui.dom_helpers.remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"),"region_hover");
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_pile_picked,card_id], null)], null));
})], null);
});
gin.ui.game_panel.pile_drag_handler = (function pile_drag_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_drag","cursor_hand");
return gin.ui.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__22547 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__22547,0,null);var y = cljs.core.nth.call(null,vec__22547,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
{gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.pile_pick_handler.call(null,conn));
return gin.ui.dom_helpers.add_class.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"),"region_hover");
} else
{return null;
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
return gin.ui.animator.slide.call(null,card_el,gin.ui.game_panel.pile_position.call(null));
})], null);
});
gin.ui.game_panel.home_region_handler = (function home_region_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
card_el.drag_origin = gin.ui.dom_helpers.get_position.call(null,card_el);
return gin.ui.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){return null;
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__22549 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__22549,0,null);var y = cljs.core.nth.call(null,vec__22549,1,null);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.ui.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.ui.game_panel.discard_pick_handler = (function discard_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__22551 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__22551,0,null);var y = cljs.core.nth.call(null,vec__22551,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.discard_drag_handler.call(null,conn));
return gin.ui.dom_helpers.remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
gin.ui.dom_helpers.remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"),"region_hover");
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.home_region_handler.call(null,conn));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_picked,card_id], null)], null));
})], null);
});
gin.ui.game_panel.discard_drag_handler = (function discard_drag_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){gin.ui.dom_helpers.add_remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
return gin.ui.dom_helpers.show_on_top.call(null,gin.ui.dom_helpers.get_element.call(null,card_id));
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__22553 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__22553,0,null);var y = cljs.core.nth.call(null,vec__22553,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
{gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.discard_pick_handler.call(null,conn));
return gin.ui.dom_helpers.add_class.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"),"region_hover");
} else
{return null;
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
return gin.ui.animator.slide.call(null,card_el,gin.ui.game_panel.discard_position.call(null));
})], null);
});
gin.ui.game_panel.snap_to_discard_handler = (function snap_to_discard_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);if(gin.ui.game_panel.in_discard_pile.call(null,event.clientX,event.clientY))
{return null;
} else
{gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.home_discard_handler.call(null,conn));
return gin.ui.dom_helpers.remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"),"region_hover");
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
gin.ui.dom_helpers.remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"),"region_hover");
return gin.ui.animator.slide.call(null,card_el,gin.ui.game_panel.discard_position.call(null),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_chosen,card_id], null)], null));
}));
})], null);
});
gin.ui.game_panel.home_discard_handler = (function home_discard_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);gin.ui.dom_helpers.add_remove_class.call(null,gin.ui.dom_helpers.get_element.call(null,card_id),"cursor_drag","cursor_hand");
card_el.drag_origin = gin.ui.dom_helpers.get_position.call(null,card_el);
return gin.ui.dom_helpers.show_on_top.call(null,card_el);
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);if(gin.ui.game_panel.in_discard_pile.call(null,event.clientX,event.clientY))
{gin.ui.dom_helpers.add_class.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"),"region_hover");
return gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.snap_to_discard_handler.call(null,conn));
} else
{return null;
}
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__22555 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__22555,0,null);var y = cljs.core.nth.call(null,vec__22555,1,null);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.ui.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.ui.game_panel.draw_table = (function draw_table(conn){var G__22580_22604 = gin.ui.dom_helpers.get_element.call(null,"game-panel");gin.ui.dom_helpers.append.call(null,G__22580_22604,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.ui.dom_helpers.append.call(null,G__22580_22604,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
var container_wrap = (function (){var r = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__22581 = gin.ui.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__22581,0,null);var pile_y = cljs.core.nth.call(null,vec__22581,1,null);var cards = (function (){var iter__17881__auto__ = ((function (container_wrap,vec__22581,pile_x,pile_y){
return (function iter__22582(s__22583){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__22581,pile_x,pile_y){
return (function (){var s__22583__$1 = s__22583;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22583__$1);if(temp__4092__auto__)
{var s__22583__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22583__$2))
{var c__17879__auto__ = cljs.core.chunk_first.call(null,s__22583__$2);var size__17880__auto__ = cljs.core.count.call(null,c__17879__auto__);var b__22585 = cljs.core.chunk_buffer.call(null,size__17880__auto__);if((function (){var i__22584 = 0;while(true){
if((i__22584 < size__17880__auto__))
{var i = cljs.core._nth.call(null,c__17879__auto__,i__22584);cljs.core.chunk_append.call(null,b__22585,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__22588 = (new goog.fx.Dragger(card_el));G__22588.setLimits(container_wrap);
return G__22588;
})();card_el.dispose = ((function (i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__22584,card_id,card_el,dragger,i,c__17879__auto__,size__17880__auto__,b__22585,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__22605 = (i__22584 + 1);
i__22584 = G__22605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22585),iter__22582.call(null,cljs.core.chunk_rest.call(null,s__22583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22585),null);
}
} else
{var i = cljs.core.first.call(null,s__22583__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__22589 = (new goog.fx.Dragger(card_el));G__22589.setLimits(container_wrap);
return G__22589;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__22583__$2,temp__4092__auto__,container_wrap,vec__22581,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__22582.call(null,cljs.core.rest.call(null,s__22583__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__22581,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__22581,pile_x,pile_y))
;return iter__17881__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__22590_22606 = cljs.core.seq.call(null,cards);var chunk__22591_22607 = null;var count__22592_22608 = 0;var i__22593_22609 = 0;while(true){
if((i__22593_22609 < count__22592_22608))
{var map__22594_22610 = cljs.core._nth.call(null,chunk__22591_22607,i__22593_22609);var map__22594_22611__$1 = ((cljs.core.seq_QMARK_.call(null,map__22594_22610))?cljs.core.apply.call(null,cljs.core.hash_map,map__22594_22610):map__22594_22610);var idx_22612 = cljs.core.get.call(null,map__22594_22611__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_22613 = cljs.core.get.call(null,map__22594_22611__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_22613.anim_idx = idx_22612;
gin.ui.dom_helpers.append.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"),card_el_22613);
{
var G__22614 = seq__22590_22606;
var G__22615 = chunk__22591_22607;
var G__22616 = count__22592_22608;
var G__22617 = (i__22593_22609 + 1);
seq__22590_22606 = G__22614;
chunk__22591_22607 = G__22615;
count__22592_22608 = G__22616;
i__22593_22609 = G__22617;
continue;
}
} else
{var temp__4092__auto___22618 = cljs.core.seq.call(null,seq__22590_22606);if(temp__4092__auto___22618)
{var seq__22590_22619__$1 = temp__4092__auto___22618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22590_22619__$1))
{var c__17912__auto___22620 = cljs.core.chunk_first.call(null,seq__22590_22619__$1);{
var G__22621 = cljs.core.chunk_rest.call(null,seq__22590_22619__$1);
var G__22622 = c__17912__auto___22620;
var G__22623 = cljs.core.count.call(null,c__17912__auto___22620);
var G__22624 = 0;
seq__22590_22606 = G__22621;
chunk__22591_22607 = G__22622;
count__22592_22608 = G__22623;
i__22593_22609 = G__22624;
continue;
}
} else
{var map__22595_22625 = cljs.core.first.call(null,seq__22590_22619__$1);var map__22595_22626__$1 = ((cljs.core.seq_QMARK_.call(null,map__22595_22625))?cljs.core.apply.call(null,cljs.core.hash_map,map__22595_22625):map__22595_22625);var idx_22627 = cljs.core.get.call(null,map__22595_22626__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_22628 = cljs.core.get.call(null,map__22595_22626__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_22628.anim_idx = idx_22627;
gin.ui.dom_helpers.append.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"),card_el_22628);
{
var G__22629 = cljs.core.next.call(null,seq__22590_22619__$1);
var G__22630 = null;
var G__22631 = 0;
var G__22632 = 0;
seq__22590_22606 = G__22629;
chunk__22591_22607 = G__22630;
count__22592_22608 = G__22631;
i__22593_22609 = G__22632;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17881__auto__ = (function iter__22596(s__22597){return (new cljs.core.LazySeq(null,(function (){var s__22597__$1 = s__22597;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22597__$1);if(temp__4092__auto__)
{var s__22597__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22597__$2))
{var c__17879__auto__ = cljs.core.chunk_first.call(null,s__22597__$2);var size__17880__auto__ = cljs.core.count.call(null,c__17879__auto__);var b__22599 = cljs.core.chunk_buffer.call(null,size__17880__auto__);if((function (){var i__22598 = 0;while(true){
if((i__22598 < size__17880__auto__))
{var map__22602 = cljs.core._nth.call(null,c__17879__auto__,i__22598);var map__22602__$1 = ((cljs.core.seq_QMARK_.call(null,map__22602))?cljs.core.apply.call(null,cljs.core.hash_map,map__22602):map__22602);var card_el = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__22599,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__22633 = (i__22598 + 1);
i__22598 = G__22633;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22599),iter__22596.call(null,cljs.core.chunk_rest.call(null,s__22597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22599),null);
}
} else
{var map__22603 = cljs.core.first.call(null,s__22597__$2);var map__22603__$1 = ((cljs.core.seq_QMARK_.call(null,map__22603))?cljs.core.apply.call(null,cljs.core.hash_map,map__22603):map__22603);var card_el = cljs.core.get.call(null,map__22603__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__22603__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__22603__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__22596.call(null,cljs.core.rest.call(null,s__22597__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17881__auto__.call(null,cards);
})());
});
gin.ui.game_panel.anim_deal = (function anim_deal(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),((function (game){
return (function (p1__22634_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22634_SHARP_], null));
});})(game))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__22635_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22635_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__22646 = gin.ui.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__22646,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__22646,1,null);var vec__22647 = gin.ui.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__22647,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__22647,1,null);var their_deal = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4))], null)], null);
});})(game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__22649){var map__22650 = p__22649;var map__22650__$1 = ((cljs.core.seq_QMARK_.call(null,map__22650))?cljs.core.apply.call(null,cljs.core.hash_map,map__22650):map__22650);var id = cljs.core.get.call(null,map__22650__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__22650__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__22650__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__22650__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null),((function (map__22650,map__22650__$1,id,el,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.ui.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.ui.game_panel.set_drag_handler.call(null,el,gin.ui.game_panel.home_region_handler.call(null,conn));
});})(map__22650,map__22650__$1,id,el,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal))
], null);
});})(game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__22648 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__22648,0,null);var second_deal = cljs.core.nth.call(null,vec__22648,1,null);var discard_deal = (function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_el,gin.ui.game_panel.discard_position.call(null),((function (discard_el,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal){
return (function (){gin.ui.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
return gin.ui.dom_helpers.set_timeout.call(null,((function (discard_el,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal){
return (function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
});})(discard_el,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal))
,300);
});})(discard_el,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal))
], null);
})();var actions = cljs.core.concat.call(null,first_deal,second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_deal], null));var step = ((function (game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal,discard_deal,actions){
return (function step(p__22651){var vec__22654 = p__22651;var action = cljs.core.nth.call(null,vec__22654,0,null);var actions__$1 = cljs.core.nthnext.call(null,vec__22654,1);if(cljs.core.truth_(action))
{var vec__22655 = action;var el = cljs.core.nth.call(null,vec__22655,0,null);var to = cljs.core.nth.call(null,vec__22655,1,null);var f = cljs.core.nth.call(null,vec__22655,2,null);gin.ui.dom_helpers.show_on_top.call(null,el);
return gin.ui.animator.slide.call(null,el,to,((function (vec__22655,el,to,f,vec__22654,action,actions__$1,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal,discard_deal,actions){
return (function (){if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);
});})(vec__22655,el,to,f,vec__22654,action,actions__$1,game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal,discard_deal,actions))
);
} else
{return null;
}
});})(game,opp_cards_el,our_cards_es,discard,vec__22646,their_region_offset_x,their_region_offset_y,vec__22647,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__22648,first_deal,second_deal,discard_deal,actions))
;return step.call(null,actions);
});
gin.ui.game_panel.draw = (function draw(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game)))
{return gin.ui.game_panel.set_msg.call(null,"Game created.");
} else
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"ready","ready",1122290965).cljs$core$IFn$_invoke$arity$1(game))))
{gin.ui.game_panel.set_msg.call(null,"Dealing ...");
return gin.ui.game_panel.anim_deal.call(null,db,game_id,conn);
} else
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game))))
{return gin.ui.game_panel.set_msg.call(null,"Ready, waiting on opponent");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var us_pick_card = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,10,cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game)));var our_cards_es = cljs.core.map.call(null,((function (us_pick_card){
return (function (p1__22656_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22656_SHARP_], null));
});})(us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es){
return (function (p1__22657_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22657_SHARP_], null));
});})(us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__22658_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22658_SHARP_], null));
});})(us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__22659_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__22659_SHARP_], null));
});})(us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__22709 = gin.ui.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__22709,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__22709,1,null);var vec__22710 = gin.ui.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__22710,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__22710,1,null);var pile_position = gin.ui.game_panel.pile_position.call(null);var discard_position = gin.ui.game_panel.discard_position.call(null);var seq__22711_22758 = cljs.core.seq.call(null,pile_cards_es);var chunk__22713_22759 = null;var count__22714_22760 = 0;var i__22715_22761 = 0;while(true){
if((i__22715_22761 < count__22714_22760))
{var pile_card_es_22762 = cljs.core._nth.call(null,chunk__22713_22759,i__22715_22761);var pile_card_el_22763 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_22762);gin.ui.dom_helpers.set_card_class.call(null,pile_card_el_22763,"card_back");
gin.ui.dom_helpers.show_on_top.call(null,pile_card_el_22763);
gin.ui.animator.slide.call(null,pile_card_el_22763,pile_position);
{
var G__22764 = seq__22711_22758;
var G__22765 = chunk__22713_22759;
var G__22766 = count__22714_22760;
var G__22767 = (i__22715_22761 + 1);
seq__22711_22758 = G__22764;
chunk__22713_22759 = G__22765;
count__22714_22760 = G__22766;
i__22715_22761 = G__22767;
continue;
}
} else
{var temp__4092__auto___22768 = cljs.core.seq.call(null,seq__22711_22758);if(temp__4092__auto___22768)
{var seq__22711_22769__$1 = temp__4092__auto___22768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22711_22769__$1))
{var c__17912__auto___22770 = cljs.core.chunk_first.call(null,seq__22711_22769__$1);{
var G__22771 = cljs.core.chunk_rest.call(null,seq__22711_22769__$1);
var G__22772 = c__17912__auto___22770;
var G__22773 = cljs.core.count.call(null,c__17912__auto___22770);
var G__22774 = 0;
seq__22711_22758 = G__22771;
chunk__22713_22759 = G__22772;
count__22714_22760 = G__22773;
i__22715_22761 = G__22774;
continue;
}
} else
{var pile_card_es_22775 = cljs.core.first.call(null,seq__22711_22769__$1);var pile_card_el_22776 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_22775);gin.ui.dom_helpers.set_card_class.call(null,pile_card_el_22776,"card_back");
gin.ui.dom_helpers.show_on_top.call(null,pile_card_el_22776);
gin.ui.animator.slide.call(null,pile_card_el_22776,pile_position);
{
var G__22777 = cljs.core.next.call(null,seq__22711_22769__$1);
var G__22778 = null;
var G__22779 = 0;
var G__22780 = 0;
seq__22711_22758 = G__22777;
chunk__22713_22759 = G__22778;
count__22714_22760 = G__22779;
i__22715_22761 = G__22780;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___22781 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___22781))
{var pile_card_el_22782 = temp__4092__auto___22781;if(us_pick_card)
{gin.ui.game_panel.set_drag_handler.call(null,pile_card_el_22782,gin.ui.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.ui.game_panel.set_drag_handler.call(null,pile_card_el_22782,gin.ui.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_22783 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__22717_22784 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_22783)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_22785 = cljs.core.nth.call(null,vec__22717_22784,0,null);var y_step_22786 = cljs.core.nth.call(null,vec__22717_22784,1,null);var seq__22718_22787 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__22719_22788 = null;var count__22720_22789 = 0;var i__22721_22790 = 0;while(true){
if((i__22721_22790 < count__22720_22789))
{var vec__22722_22791 = cljs.core._nth.call(null,chunk__22719_22788,i__22721_22790);var i_22792 = cljs.core.nth.call(null,vec__22722_22791,0,null);var e_22793 = cljs.core.nth.call(null,vec__22722_22791,1,null);var el_22794 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_22793);gin.ui.animator.slide.call(null,el_22794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_22792 * x_step_22785))),cljs.core.long$.call(null,(their_region_offset_y + (i_22792 * y_step_22786)))], null));
{
var G__22795 = seq__22718_22787;
var G__22796 = chunk__22719_22788;
var G__22797 = count__22720_22789;
var G__22798 = (i__22721_22790 + 1);
seq__22718_22787 = G__22795;
chunk__22719_22788 = G__22796;
count__22720_22789 = G__22797;
i__22721_22790 = G__22798;
continue;
}
} else
{var temp__4092__auto___22799 = cljs.core.seq.call(null,seq__22718_22787);if(temp__4092__auto___22799)
{var seq__22718_22800__$1 = temp__4092__auto___22799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718_22800__$1))
{var c__17912__auto___22801 = cljs.core.chunk_first.call(null,seq__22718_22800__$1);{
var G__22802 = cljs.core.chunk_rest.call(null,seq__22718_22800__$1);
var G__22803 = c__17912__auto___22801;
var G__22804 = cljs.core.count.call(null,c__17912__auto___22801);
var G__22805 = 0;
seq__22718_22787 = G__22802;
chunk__22719_22788 = G__22803;
count__22720_22789 = G__22804;
i__22721_22790 = G__22805;
continue;
}
} else
{var vec__22723_22806 = cljs.core.first.call(null,seq__22718_22800__$1);var i_22807 = cljs.core.nth.call(null,vec__22723_22806,0,null);var e_22808 = cljs.core.nth.call(null,vec__22723_22806,1,null);var el_22809 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_22808);gin.ui.animator.slide.call(null,el_22809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_22807 * x_step_22785))),cljs.core.long$.call(null,(their_region_offset_y + (i_22807 * y_step_22786)))], null));
{
var G__22810 = cljs.core.next.call(null,seq__22718_22800__$1);
var G__22811 = null;
var G__22812 = 0;
var G__22813 = 0;
seq__22718_22787 = G__22810;
chunk__22719_22788 = G__22811;
count__22720_22789 = G__22812;
i__22721_22790 = G__22813;
continue;
}
}
} else
{}
}
break;
}
var seq__22724_22814 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_22783,opp_cards_es));var chunk__22725_22815 = null;var count__22726_22816 = 0;var i__22727_22817 = 0;while(true){
if((i__22727_22817 < count__22726_22816))
{var vec__22728_22818 = cljs.core._nth.call(null,chunk__22725_22815,i__22727_22817);var el_22819 = cljs.core.nth.call(null,vec__22728_22818,0,null);var es_22820 = cljs.core.nth.call(null,vec__22728_22818,1,null);var suit_22821 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_22820);var rank_22822 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_22820);gin.ui.dom_helpers.show_on_top.call(null,el_22819);
gin.ui.dom_helpers.set_card_class.call(null,el_22819,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_22821))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_22821)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22822))].join('')));
{
var G__22823 = seq__22724_22814;
var G__22824 = chunk__22725_22815;
var G__22825 = count__22726_22816;
var G__22826 = (i__22727_22817 + 1);
seq__22724_22814 = G__22823;
chunk__22725_22815 = G__22824;
count__22726_22816 = G__22825;
i__22727_22817 = G__22826;
continue;
}
} else
{var temp__4092__auto___22827 = cljs.core.seq.call(null,seq__22724_22814);if(temp__4092__auto___22827)
{var seq__22724_22828__$1 = temp__4092__auto___22827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22724_22828__$1))
{var c__17912__auto___22829 = cljs.core.chunk_first.call(null,seq__22724_22828__$1);{
var G__22830 = cljs.core.chunk_rest.call(null,seq__22724_22828__$1);
var G__22831 = c__17912__auto___22829;
var G__22832 = cljs.core.count.call(null,c__17912__auto___22829);
var G__22833 = 0;
seq__22724_22814 = G__22830;
chunk__22725_22815 = G__22831;
count__22726_22816 = G__22832;
i__22727_22817 = G__22833;
continue;
}
} else
{var vec__22729_22834 = cljs.core.first.call(null,seq__22724_22828__$1);var el_22835 = cljs.core.nth.call(null,vec__22729_22834,0,null);var es_22836 = cljs.core.nth.call(null,vec__22729_22834,1,null);var suit_22837 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_22836);var rank_22838 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_22836);gin.ui.dom_helpers.show_on_top.call(null,el_22835);
gin.ui.dom_helpers.set_card_class.call(null,el_22835,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_22837))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_22837)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22838))].join('')));
{
var G__22839 = cljs.core.next.call(null,seq__22724_22828__$1);
var G__22840 = null;
var G__22841 = 0;
var G__22842 = 0;
seq__22724_22814 = G__22839;
chunk__22725_22815 = G__22840;
count__22726_22816 = G__22841;
i__22727_22817 = G__22842;
continue;
}
}
} else
{}
}
break;
}
var seq__22730_22843 = cljs.core.seq.call(null,discard_cards_es);var chunk__22732_22844 = null;var count__22733_22845 = 0;var i__22734_22846 = 0;while(true){
if((i__22734_22846 < count__22733_22845))
{var discard_card_es_22847 = cljs.core._nth.call(null,chunk__22732_22844,i__22734_22846);var discard_card_el_22848 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_22847);var suit_22849 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_22847);var rank_22850 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_22847);gin.ui.dom_helpers.set_card_class.call(null,discard_card_el_22848,[cljs.core.str(cljs.core.name.call(null,suit_22849)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22850))].join(''));
gin.ui.animator.slide.call(null,discard_card_el_22848,discard_position);
{
var G__22851 = seq__22730_22843;
var G__22852 = chunk__22732_22844;
var G__22853 = count__22733_22845;
var G__22854 = (i__22734_22846 + 1);
seq__22730_22843 = G__22851;
chunk__22732_22844 = G__22852;
count__22733_22845 = G__22853;
i__22734_22846 = G__22854;
continue;
}
} else
{var temp__4092__auto___22855 = cljs.core.seq.call(null,seq__22730_22843);if(temp__4092__auto___22855)
{var seq__22730_22856__$1 = temp__4092__auto___22855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22730_22856__$1))
{var c__17912__auto___22857 = cljs.core.chunk_first.call(null,seq__22730_22856__$1);{
var G__22858 = cljs.core.chunk_rest.call(null,seq__22730_22856__$1);
var G__22859 = c__17912__auto___22857;
var G__22860 = cljs.core.count.call(null,c__17912__auto___22857);
var G__22861 = 0;
seq__22730_22843 = G__22858;
chunk__22732_22844 = G__22859;
count__22733_22845 = G__22860;
i__22734_22846 = G__22861;
continue;
}
} else
{var discard_card_es_22862 = cljs.core.first.call(null,seq__22730_22856__$1);var discard_card_el_22863 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_22862);var suit_22864 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_22862);var rank_22865 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_22862);gin.ui.dom_helpers.set_card_class.call(null,discard_card_el_22863,[cljs.core.str(cljs.core.name.call(null,suit_22864)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22865))].join(''));
gin.ui.animator.slide.call(null,discard_card_el_22863,discard_position);
{
var G__22866 = cljs.core.next.call(null,seq__22730_22856__$1);
var G__22867 = null;
var G__22868 = 0;
var G__22869 = 0;
seq__22730_22843 = G__22866;
chunk__22732_22844 = G__22867;
count__22733_22845 = G__22868;
i__22734_22846 = G__22869;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___22870 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___22870))
{var discard_card_el_22871 = temp__4092__auto___22870;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,opp_cards_es),10))
{gin.ui.dom_helpers.show_on_top.call(null,discard_card_el_22871);
} else
{}
if(us_pick_card)
{gin.ui.game_panel.set_drag_handler.call(null,discard_card_el_22871,gin.ui.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.ui.game_panel.set_drag_handler.call(null,discard_card_el_22871,gin.ui.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if(cljs.core._EQ_.call(null,pile_position,gin.ui.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,our_cards_es))),gin.ui.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,our_cards_es)))))
{var vec__22736_22872 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,our_cards_es)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_22873 = cljs.core.nth.call(null,vec__22736_22872,0,null);var y_step_22874 = cljs.core.nth.call(null,vec__22736_22872,1,null);var seq__22737_22875 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),our_cards_es));var chunk__22738_22876 = null;var count__22739_22877 = 0;var i__22740_22878 = 0;while(true){
if((i__22740_22878 < count__22739_22877))
{var vec__22741_22879 = cljs.core._nth.call(null,chunk__22738_22876,i__22740_22878);var i_22880 = cljs.core.nth.call(null,vec__22741_22879,0,null);var e_22881 = cljs.core.nth.call(null,vec__22741_22879,1,null);var el_22882 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_22881);var suit_22883 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_22881);var rank_22884 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_22881);gin.ui.dom_helpers.set_card_class.call(null,el_22882,[cljs.core.str(cljs.core.name.call(null,suit_22883)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22884))].join(''));
gin.ui.animator.slide.call(null,el_22882,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_22880 * x_step_22873))),cljs.core.long$.call(null,(our_region_offset_y + (i_22880 * y_step_22874)))], null));
{
var G__22885 = seq__22737_22875;
var G__22886 = chunk__22738_22876;
var G__22887 = count__22739_22877;
var G__22888 = (i__22740_22878 + 1);
seq__22737_22875 = G__22885;
chunk__22738_22876 = G__22886;
count__22739_22877 = G__22887;
i__22740_22878 = G__22888;
continue;
}
} else
{var temp__4092__auto___22889 = cljs.core.seq.call(null,seq__22737_22875);if(temp__4092__auto___22889)
{var seq__22737_22890__$1 = temp__4092__auto___22889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22737_22890__$1))
{var c__17912__auto___22891 = cljs.core.chunk_first.call(null,seq__22737_22890__$1);{
var G__22892 = cljs.core.chunk_rest.call(null,seq__22737_22890__$1);
var G__22893 = c__17912__auto___22891;
var G__22894 = cljs.core.count.call(null,c__17912__auto___22891);
var G__22895 = 0;
seq__22737_22875 = G__22892;
chunk__22738_22876 = G__22893;
count__22739_22877 = G__22894;
i__22740_22878 = G__22895;
continue;
}
} else
{var vec__22742_22896 = cljs.core.first.call(null,seq__22737_22890__$1);var i_22897 = cljs.core.nth.call(null,vec__22742_22896,0,null);var e_22898 = cljs.core.nth.call(null,vec__22742_22896,1,null);var el_22899 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_22898);var suit_22900 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_22898);var rank_22901 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_22898);gin.ui.dom_helpers.set_card_class.call(null,el_22899,[cljs.core.str(cljs.core.name.call(null,suit_22900)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22901))].join(''));
gin.ui.animator.slide.call(null,el_22899,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_22897 * x_step_22873))),cljs.core.long$.call(null,(our_region_offset_y + (i_22897 * y_step_22874)))], null));
{
var G__22902 = cljs.core.next.call(null,seq__22737_22890__$1);
var G__22903 = null;
var G__22904 = 0;
var G__22905 = 0;
seq__22737_22875 = G__22902;
chunk__22738_22876 = G__22903;
count__22739_22877 = G__22904;
i__22740_22878 = G__22905;
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
{gin.ui.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__22743_22906 = cljs.core.seq.call(null,our_cards_es);var chunk__22744_22907 = null;var count__22745_22908 = 0;var i__22746_22909 = 0;while(true){
if((i__22746_22909 < count__22745_22908))
{var our_card_es_22910 = cljs.core._nth.call(null,chunk__22744_22907,i__22746_22909);var our_card_el_22911 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_22910);var suit_22912 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_22910);var rank_22913 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_22910);gin.ui.dom_helpers.set_card_class.call(null,our_card_el_22911,((cljs.core._EQ_.call(null,suit_22912,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_22912)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22913))].join('')));
gin.ui.game_panel.set_drag_handler.call(null,our_card_el_22911,gin.ui.game_panel.home_discard_handler.call(null,conn));
{
var G__22914 = seq__22743_22906;
var G__22915 = chunk__22744_22907;
var G__22916 = count__22745_22908;
var G__22917 = (i__22746_22909 + 1);
seq__22743_22906 = G__22914;
chunk__22744_22907 = G__22915;
count__22745_22908 = G__22916;
i__22746_22909 = G__22917;
continue;
}
} else
{var temp__4092__auto___22918 = cljs.core.seq.call(null,seq__22743_22906);if(temp__4092__auto___22918)
{var seq__22743_22919__$1 = temp__4092__auto___22918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22743_22919__$1))
{var c__17912__auto___22920 = cljs.core.chunk_first.call(null,seq__22743_22919__$1);{
var G__22921 = cljs.core.chunk_rest.call(null,seq__22743_22919__$1);
var G__22922 = c__17912__auto___22920;
var G__22923 = cljs.core.count.call(null,c__17912__auto___22920);
var G__22924 = 0;
seq__22743_22906 = G__22921;
chunk__22744_22907 = G__22922;
count__22745_22908 = G__22923;
i__22746_22909 = G__22924;
continue;
}
} else
{var our_card_es_22925 = cljs.core.first.call(null,seq__22743_22919__$1);var our_card_el_22926 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_22925);var suit_22927 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_22925);var rank_22928 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_22925);gin.ui.dom_helpers.set_card_class.call(null,our_card_el_22926,((cljs.core._EQ_.call(null,suit_22927,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_22927)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_22928))].join('')));
gin.ui.game_panel.set_drag_handler.call(null,our_card_el_22926,gin.ui.game_panel.home_discard_handler.call(null,conn));
{
var G__22929 = cljs.core.next.call(null,seq__22743_22919__$1);
var G__22930 = null;
var G__22931 = 0;
var G__22932 = 0;
seq__22743_22906 = G__22929;
chunk__22744_22907 = G__22930;
count__22745_22908 = G__22931;
i__22746_22909 = G__22932;
continue;
}
}
} else
{}
}
break;
}
} else
{gin.ui.game_panel.set_msg.call(null,"Your turn. Draw a card or pickup a discard.");
var seq__22747_22933 = cljs.core.seq.call(null,our_cards_es);var chunk__22748_22934 = null;var count__22749_22935 = 0;var i__22750_22936 = 0;while(true){
if((i__22750_22936 < count__22749_22935))
{var our_card_es_22937 = cljs.core._nth.call(null,chunk__22748_22934,i__22750_22936);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_22937),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__22938 = seq__22747_22933;
var G__22939 = chunk__22748_22934;
var G__22940 = count__22749_22935;
var G__22941 = (i__22750_22936 + 1);
seq__22747_22933 = G__22938;
chunk__22748_22934 = G__22939;
count__22749_22935 = G__22940;
i__22750_22936 = G__22941;
continue;
}
} else
{var temp__4092__auto___22942 = cljs.core.seq.call(null,seq__22747_22933);if(temp__4092__auto___22942)
{var seq__22747_22943__$1 = temp__4092__auto___22942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22747_22943__$1))
{var c__17912__auto___22944 = cljs.core.chunk_first.call(null,seq__22747_22943__$1);{
var G__22945 = cljs.core.chunk_rest.call(null,seq__22747_22943__$1);
var G__22946 = c__17912__auto___22944;
var G__22947 = cljs.core.count.call(null,c__17912__auto___22944);
var G__22948 = 0;
seq__22747_22933 = G__22945;
chunk__22748_22934 = G__22946;
count__22749_22935 = G__22947;
i__22750_22936 = G__22948;
continue;
}
} else
{var our_card_es_22949 = cljs.core.first.call(null,seq__22747_22943__$1);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_22949),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__22950 = cljs.core.next.call(null,seq__22747_22943__$1);
var G__22951 = null;
var G__22952 = 0;
var G__22953 = 0;
seq__22747_22933 = G__22950;
chunk__22748_22934 = G__22951;
count__22749_22935 = G__22952;
i__22750_22936 = G__22953;
continue;
}
}
} else
{}
}
break;
}
}
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game)))
{} else
{if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{gin.ui.game_panel.set_msg.call(null,"Opponent's turn.");
} else
{gin.ui.game_panel.set_msg.call(null,"Your turn is done.");
}
var seq__22751_22954 = cljs.core.seq.call(null,our_cards_es);var chunk__22752_22955 = null;var count__22753_22956 = 0;var i__22754_22957 = 0;while(true){
if((i__22754_22957 < count__22753_22956))
{var our_card_es_22958 = cljs.core._nth.call(null,chunk__22752_22955,i__22754_22957);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_22958),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__22959 = seq__22751_22954;
var G__22960 = chunk__22752_22955;
var G__22961 = count__22753_22956;
var G__22962 = (i__22754_22957 + 1);
seq__22751_22954 = G__22959;
chunk__22752_22955 = G__22960;
count__22753_22956 = G__22961;
i__22754_22957 = G__22962;
continue;
}
} else
{var temp__4092__auto___22963 = cljs.core.seq.call(null,seq__22751_22954);if(temp__4092__auto___22963)
{var seq__22751_22964__$1 = temp__4092__auto___22963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22751_22964__$1))
{var c__17912__auto___22965 = cljs.core.chunk_first.call(null,seq__22751_22964__$1);{
var G__22966 = cljs.core.chunk_rest.call(null,seq__22751_22964__$1);
var G__22967 = c__17912__auto___22965;
var G__22968 = cljs.core.count.call(null,c__17912__auto___22965);
var G__22969 = 0;
seq__22751_22954 = G__22966;
chunk__22752_22955 = G__22967;
count__22753_22956 = G__22968;
i__22754_22957 = G__22969;
continue;
}
} else
{var our_card_es_22970 = cljs.core.first.call(null,seq__22751_22964__$1);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_22970),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__22971 = cljs.core.next.call(null,seq__22751_22964__$1);
var G__22972 = null;
var G__22973 = 0;
var G__22974 = 0;
seq__22751_22954 = G__22971;
chunk__22752_22955 = G__22972;
count__22753_22956 = G__22973;
i__22754_22957 = G__22974;
continue;
}
}
} else
{}
}
break;
}
}
}
var temp__4092__auto__ = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game);if(cljs.core.truth_(temp__4092__auto__))
{var result = temp__4092__auto__;gin.ui.game_panel.set_msg.call(null,(function (){var pred__22755 = cljs.core._EQ_;var expr__22756 = result;if(cljs.core.truth_(pred__22755.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__22756)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__22755.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__22756)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__22755.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__22756)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__22755.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__22756)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__22755.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__22756)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22756)].join('')));
}
}
}
}
}
})());
var msg_area = gin.ui.dom_helpers.get_element.call(null,"msg");var back_button = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"/"], null),gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"back_button",new cljs.core.Keyword(null,"class","class",1108647146),"back_button"], null),"Back to lobby"));return gin.ui.dom_helpers.append.call(null,msg_area,back_button);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
gin.ui.game_panel.draw_game = (function draw_game(report,conn){var map__22978 = report;var map__22978__$1 = ((cljs.core.seq_QMARK_.call(null,map__22978))?cljs.core.apply.call(null,cljs.core.hash_map,map__22978):map__22978);var db_after = cljs.core.get.call(null,map__22978__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__22979 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__22979,0,null);var vec__22980 = cljs.core.nth.call(null,vec__22979,1,null);var game_id = cljs.core.nth.call(null,vec__22980,0,null);var args = cljs.core.nthnext.call(null,vec__22980,1);if(cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"error","error",1110689146)))
{return gin.ui.game_panel.set_msg.call(null,"An error occured, refresh the page.");
} else
{return gin.ui.game_panel.draw.call(null,db_after,game_id,conn);
}
} else
{return null;
}
});
gin.ui.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.ui.game_panel.draw_game.call(null,report,conn);
}));
return gin.ui.game_panel.draw_table.call(null,conn);
});
