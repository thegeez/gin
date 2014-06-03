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
gin.ui.game_panel.in_rect = (function in_rect(rect,p__23154){var vec__23156 = p__23154;var x = cljs.core.nth.call(null,vec__23156,0,null);var y = cljs.core.nth.call(null,vec__23156,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.ui.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"));return gin.ui.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.ui.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"));return gin.ui.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.ui.game_panel.pile_position = (function pile_position(){var vec__23158 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"));var x = cljs.core.nth.call(null,vec__23158,0,null);var y = cljs.core.nth.call(null,vec__23158,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 4),(y + 4)], null);
});
gin.ui.game_panel.discard_position = (function discard_position(){var vec__23160 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"));var x = cljs.core.nth.call(null,vec__23160,0,null);var y = cljs.core.nth.call(null,vec__23160,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + x),(12 + y)], null);
});
gin.ui.game_panel.their_region_position = (function their_region_position(){var vec__23162 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"their_region"));var x = cljs.core.nth.call(null,vec__23162,0,null);var y = cljs.core.nth.call(null,vec__23162,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
});
gin.ui.game_panel.our_region_position = (function our_region_position(){var vec__23164 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"));var x = cljs.core.nth.call(null,vec__23164,0,null);var y = cljs.core.nth.call(null,vec__23164,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__23166 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__23166,0,null);var y = cljs.core.nth.call(null,vec__23166,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__23168 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__23168,0,null);var y = cljs.core.nth.call(null,vec__23168,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__23170 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__23170,0,null);var y = cljs.core.nth.call(null,vec__23170,1,null);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.ui.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.ui.game_panel.discard_pick_handler = (function discard_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__23172 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__23172,0,null);var y = cljs.core.nth.call(null,vec__23172,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__23174 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__23174,0,null);var y = cljs.core.nth.call(null,vec__23174,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__23176 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__23176,0,null);var y = cljs.core.nth.call(null,vec__23176,1,null);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.ui.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.ui.game_panel.draw_table = (function draw_table(conn){var G__23201_23225 = gin.ui.dom_helpers.get_element.call(null,"game-panel");gin.ui.dom_helpers.append.call(null,G__23201_23225,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.ui.dom_helpers.append.call(null,G__23201_23225,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.ui.dom_helpers.append.call(null,G__23201_23225,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__23202 = gin.ui.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__23202,0,null);var pile_y = cljs.core.nth.call(null,vec__23202,1,null);var cards = (function (){var iter__17378__auto__ = ((function (container_wrap,vec__23202,pile_x,pile_y){
return (function iter__23203(s__23204){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__23202,pile_x,pile_y){
return (function (){var s__23204__$1 = s__23204;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23204__$1);if(temp__4092__auto__)
{var s__23204__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23204__$2))
{var c__17376__auto__ = cljs.core.chunk_first.call(null,s__23204__$2);var size__17377__auto__ = cljs.core.count.call(null,c__17376__auto__);var b__23206 = cljs.core.chunk_buffer.call(null,size__17377__auto__);if((function (){var i__23205 = 0;while(true){
if((i__23205 < size__17377__auto__))
{var i = cljs.core._nth.call(null,c__17376__auto__,i__23205);cljs.core.chunk_append.call(null,b__23206,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__23209 = (new goog.fx.Dragger(card_el));G__23209.setLimits(container_wrap);
return G__23209;
})();card_el.dispose = ((function (i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__23205,card_id,card_el,dragger,i,c__17376__auto__,size__17377__auto__,b__23206,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__23226 = (i__23205 + 1);
i__23205 = G__23226;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23206),iter__23203.call(null,cljs.core.chunk_rest.call(null,s__23204__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23206),null);
}
} else
{var i = cljs.core.first.call(null,s__23204__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__23210 = (new goog.fx.Dragger(card_el));G__23210.setLimits(container_wrap);
return G__23210;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__23204__$2,temp__4092__auto__,container_wrap,vec__23202,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__23203.call(null,cljs.core.rest.call(null,s__23204__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__23202,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__23202,pile_x,pile_y))
;return iter__17378__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__23211_23227 = cljs.core.seq.call(null,cards);var chunk__23212_23228 = null;var count__23213_23229 = 0;var i__23214_23230 = 0;while(true){
if((i__23214_23230 < count__23213_23229))
{var map__23215_23231 = cljs.core._nth.call(null,chunk__23212_23228,i__23214_23230);var map__23215_23232__$1 = ((cljs.core.seq_QMARK_.call(null,map__23215_23231))?cljs.core.apply.call(null,cljs.core.hash_map,map__23215_23231):map__23215_23231);var idx_23233 = cljs.core.get.call(null,map__23215_23232__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_23234 = cljs.core.get.call(null,map__23215_23232__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_23234.anim_idx = idx_23233;
gin.ui.dom_helpers.append.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"),card_el_23234);
{
var G__23235 = seq__23211_23227;
var G__23236 = chunk__23212_23228;
var G__23237 = count__23213_23229;
var G__23238 = (i__23214_23230 + 1);
seq__23211_23227 = G__23235;
chunk__23212_23228 = G__23236;
count__23213_23229 = G__23237;
i__23214_23230 = G__23238;
continue;
}
} else
{var temp__4092__auto___23239 = cljs.core.seq.call(null,seq__23211_23227);if(temp__4092__auto___23239)
{var seq__23211_23240__$1 = temp__4092__auto___23239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23211_23240__$1))
{var c__17409__auto___23241 = cljs.core.chunk_first.call(null,seq__23211_23240__$1);{
var G__23242 = cljs.core.chunk_rest.call(null,seq__23211_23240__$1);
var G__23243 = c__17409__auto___23241;
var G__23244 = cljs.core.count.call(null,c__17409__auto___23241);
var G__23245 = 0;
seq__23211_23227 = G__23242;
chunk__23212_23228 = G__23243;
count__23213_23229 = G__23244;
i__23214_23230 = G__23245;
continue;
}
} else
{var map__23216_23246 = cljs.core.first.call(null,seq__23211_23240__$1);var map__23216_23247__$1 = ((cljs.core.seq_QMARK_.call(null,map__23216_23246))?cljs.core.apply.call(null,cljs.core.hash_map,map__23216_23246):map__23216_23246);var idx_23248 = cljs.core.get.call(null,map__23216_23247__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_23249 = cljs.core.get.call(null,map__23216_23247__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_23249.anim_idx = idx_23248;
gin.ui.dom_helpers.append.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"),card_el_23249);
{
var G__23250 = cljs.core.next.call(null,seq__23211_23240__$1);
var G__23251 = null;
var G__23252 = 0;
var G__23253 = 0;
seq__23211_23227 = G__23250;
chunk__23212_23228 = G__23251;
count__23213_23229 = G__23252;
i__23214_23230 = G__23253;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17378__auto__ = (function iter__23217(s__23218){return (new cljs.core.LazySeq(null,(function (){var s__23218__$1 = s__23218;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23218__$1);if(temp__4092__auto__)
{var s__23218__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23218__$2))
{var c__17376__auto__ = cljs.core.chunk_first.call(null,s__23218__$2);var size__17377__auto__ = cljs.core.count.call(null,c__17376__auto__);var b__23220 = cljs.core.chunk_buffer.call(null,size__17377__auto__);if((function (){var i__23219 = 0;while(true){
if((i__23219 < size__17377__auto__))
{var map__23223 = cljs.core._nth.call(null,c__17376__auto__,i__23219);var map__23223__$1 = ((cljs.core.seq_QMARK_.call(null,map__23223))?cljs.core.apply.call(null,cljs.core.hash_map,map__23223):map__23223);var card_el = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__23220,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__23254 = (i__23219 + 1);
i__23219 = G__23254;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23220),iter__23217.call(null,cljs.core.chunk_rest.call(null,s__23218__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23220),null);
}
} else
{var map__23224 = cljs.core.first.call(null,s__23218__$2);var map__23224__$1 = ((cljs.core.seq_QMARK_.call(null,map__23224))?cljs.core.apply.call(null,cljs.core.hash_map,map__23224):map__23224);var card_el = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__23217.call(null,cljs.core.rest.call(null,s__23218__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17378__auto__.call(null,cards);
})());
});
gin.ui.game_panel.anim_deal = (function anim_deal(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),((function (game){
return (function (p1__23255_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__23255_SHARP_], null));
});})(game))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__23256_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__23256_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__23267 = gin.ui.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__23267,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__23267,1,null);var vec__23268 = gin.ui.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__23268,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__23268,1,null);var their_deal = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4))], null)], null);
});})(game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__23270){var map__23271 = p__23270;var map__23271__$1 = ((cljs.core.seq_QMARK_.call(null,map__23271))?cljs.core.apply.call(null,cljs.core.hash_map,map__23271):map__23271);var id = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null),((function (map__23271,map__23271__$1,id,el,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.ui.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.ui.game_panel.set_drag_handler.call(null,el,gin.ui.game_panel.home_region_handler.call(null,conn));
});})(map__23271,map__23271__$1,id,el,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal))
], null);
});})(game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__23269 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__23269,0,null);var second_deal = cljs.core.nth.call(null,vec__23269,1,null);var discard_deal = (function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_el,gin.ui.game_panel.discard_position.call(null),((function (discard_el,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal){
return (function (){gin.ui.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
return gin.ui.dom_helpers.set_timeout.call(null,((function (discard_el,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal){
return (function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
});})(discard_el,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal))
,300);
});})(discard_el,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal))
], null);
})();var actions = cljs.core.concat.call(null,first_deal,second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_deal], null));var step = ((function (game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal,discard_deal,actions){
return (function step(p__23272){var vec__23275 = p__23272;var action = cljs.core.nth.call(null,vec__23275,0,null);var actions__$1 = cljs.core.nthnext.call(null,vec__23275,1);if(cljs.core.truth_(action))
{var vec__23276 = action;var el = cljs.core.nth.call(null,vec__23276,0,null);var to = cljs.core.nth.call(null,vec__23276,1,null);var f = cljs.core.nth.call(null,vec__23276,2,null);gin.ui.dom_helpers.show_on_top.call(null,el);
return gin.ui.animator.slide.call(null,el,to,((function (vec__23276,el,to,f,vec__23275,action,actions__$1,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal,discard_deal,actions){
return (function (){if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);
});})(vec__23276,el,to,f,vec__23275,action,actions__$1,game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal,discard_deal,actions))
);
} else
{return null;
}
});})(game,opp_cards_el,our_cards_es,discard,vec__23267,their_region_offset_x,their_region_offset_y,vec__23268,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__23269,first_deal,second_deal,discard_deal,actions))
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
return (function (p1__23277_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__23277_SHARP_], null));
});})(us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es){
return (function (p1__23278_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__23278_SHARP_], null));
});})(us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__23279_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__23279_SHARP_], null));
});})(us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__23280_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__23280_SHARP_], null));
});})(us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__23330 = gin.ui.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__23330,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__23330,1,null);var vec__23331 = gin.ui.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__23331,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__23331,1,null);var pile_position = gin.ui.game_panel.pile_position.call(null);var discard_position = gin.ui.game_panel.discard_position.call(null);var seq__23332_23379 = cljs.core.seq.call(null,pile_cards_es);var chunk__23334_23380 = null;var count__23335_23381 = 0;var i__23336_23382 = 0;while(true){
if((i__23336_23382 < count__23335_23381))
{var pile_card_es_23383 = cljs.core._nth.call(null,chunk__23334_23380,i__23336_23382);var pile_card_el_23384 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_23383);gin.ui.dom_helpers.set_card_class.call(null,pile_card_el_23384,"card_back");
gin.ui.dom_helpers.show_on_top.call(null,pile_card_el_23384);
gin.ui.animator.slide.call(null,pile_card_el_23384,pile_position);
{
var G__23385 = seq__23332_23379;
var G__23386 = chunk__23334_23380;
var G__23387 = count__23335_23381;
var G__23388 = (i__23336_23382 + 1);
seq__23332_23379 = G__23385;
chunk__23334_23380 = G__23386;
count__23335_23381 = G__23387;
i__23336_23382 = G__23388;
continue;
}
} else
{var temp__4092__auto___23389 = cljs.core.seq.call(null,seq__23332_23379);if(temp__4092__auto___23389)
{var seq__23332_23390__$1 = temp__4092__auto___23389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23332_23390__$1))
{var c__17409__auto___23391 = cljs.core.chunk_first.call(null,seq__23332_23390__$1);{
var G__23392 = cljs.core.chunk_rest.call(null,seq__23332_23390__$1);
var G__23393 = c__17409__auto___23391;
var G__23394 = cljs.core.count.call(null,c__17409__auto___23391);
var G__23395 = 0;
seq__23332_23379 = G__23392;
chunk__23334_23380 = G__23393;
count__23335_23381 = G__23394;
i__23336_23382 = G__23395;
continue;
}
} else
{var pile_card_es_23396 = cljs.core.first.call(null,seq__23332_23390__$1);var pile_card_el_23397 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_23396);gin.ui.dom_helpers.set_card_class.call(null,pile_card_el_23397,"card_back");
gin.ui.dom_helpers.show_on_top.call(null,pile_card_el_23397);
gin.ui.animator.slide.call(null,pile_card_el_23397,pile_position);
{
var G__23398 = cljs.core.next.call(null,seq__23332_23390__$1);
var G__23399 = null;
var G__23400 = 0;
var G__23401 = 0;
seq__23332_23379 = G__23398;
chunk__23334_23380 = G__23399;
count__23335_23381 = G__23400;
i__23336_23382 = G__23401;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___23402 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___23402))
{var pile_card_el_23403 = temp__4092__auto___23402;if(us_pick_card)
{gin.ui.game_panel.set_drag_handler.call(null,pile_card_el_23403,gin.ui.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.ui.game_panel.set_drag_handler.call(null,pile_card_el_23403,gin.ui.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_23404 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__23338_23405 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_23404)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_23406 = cljs.core.nth.call(null,vec__23338_23405,0,null);var y_step_23407 = cljs.core.nth.call(null,vec__23338_23405,1,null);var seq__23339_23408 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__23340_23409 = null;var count__23341_23410 = 0;var i__23342_23411 = 0;while(true){
if((i__23342_23411 < count__23341_23410))
{var vec__23343_23412 = cljs.core._nth.call(null,chunk__23340_23409,i__23342_23411);var i_23413 = cljs.core.nth.call(null,vec__23343_23412,0,null);var e_23414 = cljs.core.nth.call(null,vec__23343_23412,1,null);var el_23415 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_23414);gin.ui.animator.slide.call(null,el_23415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_23413 * x_step_23406))),cljs.core.long$.call(null,(their_region_offset_y + (i_23413 * y_step_23407)))], null));
{
var G__23416 = seq__23339_23408;
var G__23417 = chunk__23340_23409;
var G__23418 = count__23341_23410;
var G__23419 = (i__23342_23411 + 1);
seq__23339_23408 = G__23416;
chunk__23340_23409 = G__23417;
count__23341_23410 = G__23418;
i__23342_23411 = G__23419;
continue;
}
} else
{var temp__4092__auto___23420 = cljs.core.seq.call(null,seq__23339_23408);if(temp__4092__auto___23420)
{var seq__23339_23421__$1 = temp__4092__auto___23420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23339_23421__$1))
{var c__17409__auto___23422 = cljs.core.chunk_first.call(null,seq__23339_23421__$1);{
var G__23423 = cljs.core.chunk_rest.call(null,seq__23339_23421__$1);
var G__23424 = c__17409__auto___23422;
var G__23425 = cljs.core.count.call(null,c__17409__auto___23422);
var G__23426 = 0;
seq__23339_23408 = G__23423;
chunk__23340_23409 = G__23424;
count__23341_23410 = G__23425;
i__23342_23411 = G__23426;
continue;
}
} else
{var vec__23344_23427 = cljs.core.first.call(null,seq__23339_23421__$1);var i_23428 = cljs.core.nth.call(null,vec__23344_23427,0,null);var e_23429 = cljs.core.nth.call(null,vec__23344_23427,1,null);var el_23430 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_23429);gin.ui.animator.slide.call(null,el_23430,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_23428 * x_step_23406))),cljs.core.long$.call(null,(their_region_offset_y + (i_23428 * y_step_23407)))], null));
{
var G__23431 = cljs.core.next.call(null,seq__23339_23421__$1);
var G__23432 = null;
var G__23433 = 0;
var G__23434 = 0;
seq__23339_23408 = G__23431;
chunk__23340_23409 = G__23432;
count__23341_23410 = G__23433;
i__23342_23411 = G__23434;
continue;
}
}
} else
{}
}
break;
}
var seq__23345_23435 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_23404,opp_cards_es));var chunk__23346_23436 = null;var count__23347_23437 = 0;var i__23348_23438 = 0;while(true){
if((i__23348_23438 < count__23347_23437))
{var vec__23349_23439 = cljs.core._nth.call(null,chunk__23346_23436,i__23348_23438);var el_23440 = cljs.core.nth.call(null,vec__23349_23439,0,null);var es_23441 = cljs.core.nth.call(null,vec__23349_23439,1,null);var suit_23442 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_23441);var rank_23443 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_23441);gin.ui.dom_helpers.show_on_top.call(null,el_23440);
gin.ui.dom_helpers.set_card_class.call(null,el_23440,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_23442))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_23442)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23443))].join('')));
{
var G__23444 = seq__23345_23435;
var G__23445 = chunk__23346_23436;
var G__23446 = count__23347_23437;
var G__23447 = (i__23348_23438 + 1);
seq__23345_23435 = G__23444;
chunk__23346_23436 = G__23445;
count__23347_23437 = G__23446;
i__23348_23438 = G__23447;
continue;
}
} else
{var temp__4092__auto___23448 = cljs.core.seq.call(null,seq__23345_23435);if(temp__4092__auto___23448)
{var seq__23345_23449__$1 = temp__4092__auto___23448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23345_23449__$1))
{var c__17409__auto___23450 = cljs.core.chunk_first.call(null,seq__23345_23449__$1);{
var G__23451 = cljs.core.chunk_rest.call(null,seq__23345_23449__$1);
var G__23452 = c__17409__auto___23450;
var G__23453 = cljs.core.count.call(null,c__17409__auto___23450);
var G__23454 = 0;
seq__23345_23435 = G__23451;
chunk__23346_23436 = G__23452;
count__23347_23437 = G__23453;
i__23348_23438 = G__23454;
continue;
}
} else
{var vec__23350_23455 = cljs.core.first.call(null,seq__23345_23449__$1);var el_23456 = cljs.core.nth.call(null,vec__23350_23455,0,null);var es_23457 = cljs.core.nth.call(null,vec__23350_23455,1,null);var suit_23458 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_23457);var rank_23459 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_23457);gin.ui.dom_helpers.show_on_top.call(null,el_23456);
gin.ui.dom_helpers.set_card_class.call(null,el_23456,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_23458))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_23458)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23459))].join('')));
{
var G__23460 = cljs.core.next.call(null,seq__23345_23449__$1);
var G__23461 = null;
var G__23462 = 0;
var G__23463 = 0;
seq__23345_23435 = G__23460;
chunk__23346_23436 = G__23461;
count__23347_23437 = G__23462;
i__23348_23438 = G__23463;
continue;
}
}
} else
{}
}
break;
}
var seq__23351_23464 = cljs.core.seq.call(null,discard_cards_es);var chunk__23353_23465 = null;var count__23354_23466 = 0;var i__23355_23467 = 0;while(true){
if((i__23355_23467 < count__23354_23466))
{var discard_card_es_23468 = cljs.core._nth.call(null,chunk__23353_23465,i__23355_23467);var discard_card_el_23469 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_23468);var suit_23470 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_23468);var rank_23471 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_23468);gin.ui.dom_helpers.set_card_class.call(null,discard_card_el_23469,[cljs.core.str(cljs.core.name.call(null,suit_23470)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23471))].join(''));
gin.ui.animator.slide.call(null,discard_card_el_23469,discard_position);
{
var G__23472 = seq__23351_23464;
var G__23473 = chunk__23353_23465;
var G__23474 = count__23354_23466;
var G__23475 = (i__23355_23467 + 1);
seq__23351_23464 = G__23472;
chunk__23353_23465 = G__23473;
count__23354_23466 = G__23474;
i__23355_23467 = G__23475;
continue;
}
} else
{var temp__4092__auto___23476 = cljs.core.seq.call(null,seq__23351_23464);if(temp__4092__auto___23476)
{var seq__23351_23477__$1 = temp__4092__auto___23476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23351_23477__$1))
{var c__17409__auto___23478 = cljs.core.chunk_first.call(null,seq__23351_23477__$1);{
var G__23479 = cljs.core.chunk_rest.call(null,seq__23351_23477__$1);
var G__23480 = c__17409__auto___23478;
var G__23481 = cljs.core.count.call(null,c__17409__auto___23478);
var G__23482 = 0;
seq__23351_23464 = G__23479;
chunk__23353_23465 = G__23480;
count__23354_23466 = G__23481;
i__23355_23467 = G__23482;
continue;
}
} else
{var discard_card_es_23483 = cljs.core.first.call(null,seq__23351_23477__$1);var discard_card_el_23484 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_23483);var suit_23485 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_23483);var rank_23486 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_23483);gin.ui.dom_helpers.set_card_class.call(null,discard_card_el_23484,[cljs.core.str(cljs.core.name.call(null,suit_23485)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23486))].join(''));
gin.ui.animator.slide.call(null,discard_card_el_23484,discard_position);
{
var G__23487 = cljs.core.next.call(null,seq__23351_23477__$1);
var G__23488 = null;
var G__23489 = 0;
var G__23490 = 0;
seq__23351_23464 = G__23487;
chunk__23353_23465 = G__23488;
count__23354_23466 = G__23489;
i__23355_23467 = G__23490;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___23491 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___23491))
{var discard_card_el_23492 = temp__4092__auto___23491;gin.ui.dom_helpers.show_on_top.call(null,discard_card_el_23492);
if(us_pick_card)
{gin.ui.game_panel.set_drag_handler.call(null,discard_card_el_23492,gin.ui.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.ui.game_panel.set_drag_handler.call(null,discard_card_el_23492,gin.ui.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if(cljs.core._EQ_.call(null,pile_position,gin.ui.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,our_cards_es))),gin.ui.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,our_cards_es)))))
{var vec__23357_23493 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,our_cards_es)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_23494 = cljs.core.nth.call(null,vec__23357_23493,0,null);var y_step_23495 = cljs.core.nth.call(null,vec__23357_23493,1,null);var seq__23358_23496 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),our_cards_es));var chunk__23359_23497 = null;var count__23360_23498 = 0;var i__23361_23499 = 0;while(true){
if((i__23361_23499 < count__23360_23498))
{var vec__23362_23500 = cljs.core._nth.call(null,chunk__23359_23497,i__23361_23499);var i_23501 = cljs.core.nth.call(null,vec__23362_23500,0,null);var e_23502 = cljs.core.nth.call(null,vec__23362_23500,1,null);var el_23503 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_23502);var suit_23504 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_23502);var rank_23505 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_23502);gin.ui.dom_helpers.set_card_class.call(null,el_23503,[cljs.core.str(cljs.core.name.call(null,suit_23504)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23505))].join(''));
gin.ui.animator.slide.call(null,el_23503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_23501 * x_step_23494))),cljs.core.long$.call(null,(our_region_offset_y + (i_23501 * y_step_23495)))], null));
{
var G__23506 = seq__23358_23496;
var G__23507 = chunk__23359_23497;
var G__23508 = count__23360_23498;
var G__23509 = (i__23361_23499 + 1);
seq__23358_23496 = G__23506;
chunk__23359_23497 = G__23507;
count__23360_23498 = G__23508;
i__23361_23499 = G__23509;
continue;
}
} else
{var temp__4092__auto___23510 = cljs.core.seq.call(null,seq__23358_23496);if(temp__4092__auto___23510)
{var seq__23358_23511__$1 = temp__4092__auto___23510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23358_23511__$1))
{var c__17409__auto___23512 = cljs.core.chunk_first.call(null,seq__23358_23511__$1);{
var G__23513 = cljs.core.chunk_rest.call(null,seq__23358_23511__$1);
var G__23514 = c__17409__auto___23512;
var G__23515 = cljs.core.count.call(null,c__17409__auto___23512);
var G__23516 = 0;
seq__23358_23496 = G__23513;
chunk__23359_23497 = G__23514;
count__23360_23498 = G__23515;
i__23361_23499 = G__23516;
continue;
}
} else
{var vec__23363_23517 = cljs.core.first.call(null,seq__23358_23511__$1);var i_23518 = cljs.core.nth.call(null,vec__23363_23517,0,null);var e_23519 = cljs.core.nth.call(null,vec__23363_23517,1,null);var el_23520 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_23519);var suit_23521 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_23519);var rank_23522 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_23519);gin.ui.dom_helpers.set_card_class.call(null,el_23520,[cljs.core.str(cljs.core.name.call(null,suit_23521)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23522))].join(''));
gin.ui.animator.slide.call(null,el_23520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_23518 * x_step_23494))),cljs.core.long$.call(null,(our_region_offset_y + (i_23518 * y_step_23495)))], null));
{
var G__23523 = cljs.core.next.call(null,seq__23358_23511__$1);
var G__23524 = null;
var G__23525 = 0;
var G__23526 = 0;
seq__23358_23496 = G__23523;
chunk__23359_23497 = G__23524;
count__23360_23498 = G__23525;
i__23361_23499 = G__23526;
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
var seq__23364_23527 = cljs.core.seq.call(null,our_cards_es);var chunk__23365_23528 = null;var count__23366_23529 = 0;var i__23367_23530 = 0;while(true){
if((i__23367_23530 < count__23366_23529))
{var our_card_es_23531 = cljs.core._nth.call(null,chunk__23365_23528,i__23367_23530);var our_card_el_23532 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_23531);var suit_23533 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_23531);var rank_23534 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_23531);gin.ui.dom_helpers.set_card_class.call(null,our_card_el_23532,((cljs.core._EQ_.call(null,suit_23533,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_23533)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23534))].join('')));
gin.ui.game_panel.set_drag_handler.call(null,our_card_el_23532,gin.ui.game_panel.home_discard_handler.call(null,conn));
{
var G__23535 = seq__23364_23527;
var G__23536 = chunk__23365_23528;
var G__23537 = count__23366_23529;
var G__23538 = (i__23367_23530 + 1);
seq__23364_23527 = G__23535;
chunk__23365_23528 = G__23536;
count__23366_23529 = G__23537;
i__23367_23530 = G__23538;
continue;
}
} else
{var temp__4092__auto___23539 = cljs.core.seq.call(null,seq__23364_23527);if(temp__4092__auto___23539)
{var seq__23364_23540__$1 = temp__4092__auto___23539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23364_23540__$1))
{var c__17409__auto___23541 = cljs.core.chunk_first.call(null,seq__23364_23540__$1);{
var G__23542 = cljs.core.chunk_rest.call(null,seq__23364_23540__$1);
var G__23543 = c__17409__auto___23541;
var G__23544 = cljs.core.count.call(null,c__17409__auto___23541);
var G__23545 = 0;
seq__23364_23527 = G__23542;
chunk__23365_23528 = G__23543;
count__23366_23529 = G__23544;
i__23367_23530 = G__23545;
continue;
}
} else
{var our_card_es_23546 = cljs.core.first.call(null,seq__23364_23540__$1);var our_card_el_23547 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_23546);var suit_23548 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_23546);var rank_23549 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_23546);gin.ui.dom_helpers.set_card_class.call(null,our_card_el_23547,((cljs.core._EQ_.call(null,suit_23548,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_23548)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_23549))].join('')));
gin.ui.game_panel.set_drag_handler.call(null,our_card_el_23547,gin.ui.game_panel.home_discard_handler.call(null,conn));
{
var G__23550 = cljs.core.next.call(null,seq__23364_23540__$1);
var G__23551 = null;
var G__23552 = 0;
var G__23553 = 0;
seq__23364_23527 = G__23550;
chunk__23365_23528 = G__23551;
count__23366_23529 = G__23552;
i__23367_23530 = G__23553;
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
var seq__23368_23554 = cljs.core.seq.call(null,our_cards_es);var chunk__23369_23555 = null;var count__23370_23556 = 0;var i__23371_23557 = 0;while(true){
if((i__23371_23557 < count__23370_23556))
{var our_card_es_23558 = cljs.core._nth.call(null,chunk__23369_23555,i__23371_23557);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_23558),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__23559 = seq__23368_23554;
var G__23560 = chunk__23369_23555;
var G__23561 = count__23370_23556;
var G__23562 = (i__23371_23557 + 1);
seq__23368_23554 = G__23559;
chunk__23369_23555 = G__23560;
count__23370_23556 = G__23561;
i__23371_23557 = G__23562;
continue;
}
} else
{var temp__4092__auto___23563 = cljs.core.seq.call(null,seq__23368_23554);if(temp__4092__auto___23563)
{var seq__23368_23564__$1 = temp__4092__auto___23563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23368_23564__$1))
{var c__17409__auto___23565 = cljs.core.chunk_first.call(null,seq__23368_23564__$1);{
var G__23566 = cljs.core.chunk_rest.call(null,seq__23368_23564__$1);
var G__23567 = c__17409__auto___23565;
var G__23568 = cljs.core.count.call(null,c__17409__auto___23565);
var G__23569 = 0;
seq__23368_23554 = G__23566;
chunk__23369_23555 = G__23567;
count__23370_23556 = G__23568;
i__23371_23557 = G__23569;
continue;
}
} else
{var our_card_es_23570 = cljs.core.first.call(null,seq__23368_23564__$1);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_23570),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__23571 = cljs.core.next.call(null,seq__23368_23564__$1);
var G__23572 = null;
var G__23573 = 0;
var G__23574 = 0;
seq__23368_23554 = G__23571;
chunk__23369_23555 = G__23572;
count__23370_23556 = G__23573;
i__23371_23557 = G__23574;
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
var seq__23372_23575 = cljs.core.seq.call(null,our_cards_es);var chunk__23373_23576 = null;var count__23374_23577 = 0;var i__23375_23578 = 0;while(true){
if((i__23375_23578 < count__23374_23577))
{var our_card_es_23579 = cljs.core._nth.call(null,chunk__23373_23576,i__23375_23578);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_23579),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__23580 = seq__23372_23575;
var G__23581 = chunk__23373_23576;
var G__23582 = count__23374_23577;
var G__23583 = (i__23375_23578 + 1);
seq__23372_23575 = G__23580;
chunk__23373_23576 = G__23581;
count__23374_23577 = G__23582;
i__23375_23578 = G__23583;
continue;
}
} else
{var temp__4092__auto___23584 = cljs.core.seq.call(null,seq__23372_23575);if(temp__4092__auto___23584)
{var seq__23372_23585__$1 = temp__4092__auto___23584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23372_23585__$1))
{var c__17409__auto___23586 = cljs.core.chunk_first.call(null,seq__23372_23585__$1);{
var G__23587 = cljs.core.chunk_rest.call(null,seq__23372_23585__$1);
var G__23588 = c__17409__auto___23586;
var G__23589 = cljs.core.count.call(null,c__17409__auto___23586);
var G__23590 = 0;
seq__23372_23575 = G__23587;
chunk__23373_23576 = G__23588;
count__23374_23577 = G__23589;
i__23375_23578 = G__23590;
continue;
}
} else
{var our_card_es_23591 = cljs.core.first.call(null,seq__23372_23585__$1);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_23591),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__23592 = cljs.core.next.call(null,seq__23372_23585__$1);
var G__23593 = null;
var G__23594 = 0;
var G__23595 = 0;
seq__23372_23575 = G__23592;
chunk__23373_23576 = G__23593;
count__23374_23577 = G__23594;
i__23375_23578 = G__23595;
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
{var result = temp__4092__auto__;return gin.ui.game_panel.set_msg.call(null,(function (){var pred__23376 = cljs.core._EQ_;var expr__23377 = result;if(cljs.core.truth_(pred__23376.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__23377)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__23376.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__23377)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__23376.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__23377)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__23376.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__23377)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__23376.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__23377)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23377)].join('')));
}
}
}
}
}
})());
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
gin.ui.game_panel.draw_game = (function draw_game(report,conn){var map__23599 = report;var map__23599__$1 = ((cljs.core.seq_QMARK_.call(null,map__23599))?cljs.core.apply.call(null,cljs.core.hash_map,map__23599):map__23599);var db_after = cljs.core.get.call(null,map__23599__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__23600 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__23600,0,null);var vec__23601 = cljs.core.nth.call(null,vec__23600,1,null);var game_id = cljs.core.nth.call(null,vec__23601,0,null);var args = cljs.core.nthnext.call(null,vec__23601,1);if(cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"error","error",1110689146)))
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
