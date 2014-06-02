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
gin.game_panel.in_rect = (function in_rect(rect,p__30728){var vec__30730 = p__30728;var x = cljs.core.nth.call(null,vec__30730,0,null);var y = cljs.core.nth.call(null,vec__30730,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.draw_table = (function draw_table(conn){var G__30755_30779 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__30755_30779,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__30755_30779,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__30755_30779,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__30756 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__30756,0,null);var pile_y = cljs.core.nth.call(null,vec__30756,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__30756,pile_x,pile_y){
return (function iter__30757(s__30758){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__30756,pile_x,pile_y){
return (function (){var s__30758__$1 = s__30758;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30758__$1);if(temp__4092__auto__)
{var s__30758__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30758__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30758__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30760 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30759 = 0;while(true){
if((i__30759 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__30759);cljs.core.chunk_append.call(null,b__30760,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__30763 = (new goog.fx.Dragger(card_el));G__30763.setLimits(container_wrap);
return G__30763;
})();card_el.dispose = ((function (i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__30759,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__30760,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__30780 = (i__30759 + 1);
i__30759 = G__30780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30760),iter__30757.call(null,cljs.core.chunk_rest.call(null,s__30758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30760),null);
}
} else
{var i = cljs.core.first.call(null,s__30758__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__30764 = (new goog.fx.Dragger(card_el));G__30764.setLimits(container_wrap);
return G__30764;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__30758__$2,temp__4092__auto__,container_wrap,vec__30756,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__30757.call(null,cljs.core.rest.call(null,s__30758__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__30756,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__30756,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__30765_30781 = cljs.core.seq.call(null,cards);var chunk__30766_30782 = null;var count__30767_30783 = 0;var i__30768_30784 = 0;while(true){
if((i__30768_30784 < count__30767_30783))
{var map__30769_30785 = cljs.core._nth.call(null,chunk__30766_30782,i__30768_30784);var map__30769_30786__$1 = ((cljs.core.seq_QMARK_.call(null,map__30769_30785))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769_30785):map__30769_30785);var idx_30787 = cljs.core.get.call(null,map__30769_30786__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_30788 = cljs.core.get.call(null,map__30769_30786__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_30788.anim_idx = idx_30787;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_30788);
{
var G__30789 = seq__30765_30781;
var G__30790 = chunk__30766_30782;
var G__30791 = count__30767_30783;
var G__30792 = (i__30768_30784 + 1);
seq__30765_30781 = G__30789;
chunk__30766_30782 = G__30790;
count__30767_30783 = G__30791;
i__30768_30784 = G__30792;
continue;
}
} else
{var temp__4092__auto___30793 = cljs.core.seq.call(null,seq__30765_30781);if(temp__4092__auto___30793)
{var seq__30765_30794__$1 = temp__4092__auto___30793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30765_30794__$1))
{var c__17389__auto___30795 = cljs.core.chunk_first.call(null,seq__30765_30794__$1);{
var G__30796 = cljs.core.chunk_rest.call(null,seq__30765_30794__$1);
var G__30797 = c__17389__auto___30795;
var G__30798 = cljs.core.count.call(null,c__17389__auto___30795);
var G__30799 = 0;
seq__30765_30781 = G__30796;
chunk__30766_30782 = G__30797;
count__30767_30783 = G__30798;
i__30768_30784 = G__30799;
continue;
}
} else
{var map__30770_30800 = cljs.core.first.call(null,seq__30765_30794__$1);var map__30770_30801__$1 = ((cljs.core.seq_QMARK_.call(null,map__30770_30800))?cljs.core.apply.call(null,cljs.core.hash_map,map__30770_30800):map__30770_30800);var idx_30802 = cljs.core.get.call(null,map__30770_30801__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_30803 = cljs.core.get.call(null,map__30770_30801__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_30803.anim_idx = idx_30802;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_30803);
{
var G__30804 = cljs.core.next.call(null,seq__30765_30794__$1);
var G__30805 = null;
var G__30806 = 0;
var G__30807 = 0;
seq__30765_30781 = G__30804;
chunk__30766_30782 = G__30805;
count__30767_30783 = G__30806;
i__30768_30784 = G__30807;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__30771(s__30772){return (new cljs.core.LazySeq(null,(function (){var s__30772__$1 = s__30772;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30772__$1);if(temp__4092__auto__)
{var s__30772__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30772__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30772__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30774 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30773 = 0;while(true){
if((i__30773 < size__17357__auto__))
{var map__30777 = cljs.core._nth.call(null,c__17356__auto__,i__30773);var map__30777__$1 = ((cljs.core.seq_QMARK_.call(null,map__30777))?cljs.core.apply.call(null,cljs.core.hash_map,map__30777):map__30777);var card_el = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__30774,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__30808 = (i__30773 + 1);
i__30773 = G__30808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30774),iter__30771.call(null,cljs.core.chunk_rest.call(null,s__30772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30774),null);
}
} else
{var map__30778 = cljs.core.first.call(null,s__30772__$2);var map__30778__$1 = ((cljs.core.seq_QMARK_.call(null,map__30778))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);var card_el = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__30771.call(null,cljs.core.rest.call(null,s__30772__$2)));
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
return (function (p1__30809_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30809_SHARP_], null));
});})(game,_))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__30810_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30810_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__30821 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__30821,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__30821,1,null);var vec__30822 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__30822,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__30822,1,null);var their_deal = cljs.core.map.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4))], null)], null);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.map.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__30824){var map__30825 = p__30824;var map__30825__$1 = ((cljs.core.seq_QMARK_.call(null,map__30825))?cljs.core.apply.call(null,cljs.core.hash_map,map__30825):map__30825);var id = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null),((function (map__30825,map__30825__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(map__30825,map__30825__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal))
], null);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__30823 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__30823,0,null);var second_deal = cljs.core.nth.call(null,vec__30823,1,null);var discard_deal = (function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_el,gin.game_panel.discard_position.call(null),((function (discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
return gin.dom_helpers.set_timeout.call(null,((function (discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal){
return (function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
});})(discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal))
,300);
});})(discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal))
], null);
})();var actions = cljs.core.concat.call(null,first_deal,second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_deal], null));var step = ((function (game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal,discard_deal,actions){
return (function step(p__30826){var vec__30829 = p__30826;var action = cljs.core.nth.call(null,vec__30829,0,null);var actions__$1 = cljs.core.nthnext.call(null,vec__30829,1);if(cljs.core.truth_(action))
{var vec__30830 = action;var el = cljs.core.nth.call(null,vec__30830,0,null);var to = cljs.core.nth.call(null,vec__30830,1,null);var f = cljs.core.nth.call(null,vec__30830,2,null);gin.dom_helpers.show_on_top.call(null,el);
return gin.animator.slide.call(null,el,to,((function (vec__30830,el,to,f,vec__30829,action,actions__$1,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal,discard_deal,actions){
return (function (){if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);
});})(vec__30830,el,to,f,vec__30829,action,actions__$1,game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal,discard_deal,actions))
);
} else
{return null;
}
});})(game,_,opp_cards_el,our_cards_es,discard,vec__30821,their_region_offset_x,their_region_offset_y,vec__30822,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__30823,first_deal,second_deal,discard_deal,actions))
;return step.call(null,actions);
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
return (function (p1__30831_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30831_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__30832_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30832_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__30833_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30833_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__30834_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30834_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__30876 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__30876,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__30876,1,null);var seq__30877_30917 = cljs.core.seq.call(null,pile_cards_es);var chunk__30879_30918 = null;var count__30880_30919 = 0;var i__30881_30920 = 0;while(true){
if((i__30881_30920 < count__30880_30919))
{var pile_card_es_30921 = cljs.core._nth.call(null,chunk__30879_30918,i__30881_30920);var pile_card_el_30922 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_30921);gin.dom_helpers.set_card_class.call(null,pile_card_el_30922,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_30922);
gin.animator.slide.call(null,pile_card_el_30922,gin.game_panel.pile_position.call(null));
{
var G__30923 = seq__30877_30917;
var G__30924 = chunk__30879_30918;
var G__30925 = count__30880_30919;
var G__30926 = (i__30881_30920 + 1);
seq__30877_30917 = G__30923;
chunk__30879_30918 = G__30924;
count__30880_30919 = G__30925;
i__30881_30920 = G__30926;
continue;
}
} else
{var temp__4092__auto___30927 = cljs.core.seq.call(null,seq__30877_30917);if(temp__4092__auto___30927)
{var seq__30877_30928__$1 = temp__4092__auto___30927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30877_30928__$1))
{var c__17389__auto___30929 = cljs.core.chunk_first.call(null,seq__30877_30928__$1);{
var G__30930 = cljs.core.chunk_rest.call(null,seq__30877_30928__$1);
var G__30931 = c__17389__auto___30929;
var G__30932 = cljs.core.count.call(null,c__17389__auto___30929);
var G__30933 = 0;
seq__30877_30917 = G__30930;
chunk__30879_30918 = G__30931;
count__30880_30919 = G__30932;
i__30881_30920 = G__30933;
continue;
}
} else
{var pile_card_es_30934 = cljs.core.first.call(null,seq__30877_30928__$1);var pile_card_el_30935 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_30934);gin.dom_helpers.set_card_class.call(null,pile_card_el_30935,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_30935);
gin.animator.slide.call(null,pile_card_el_30935,gin.game_panel.pile_position.call(null));
{
var G__30936 = cljs.core.next.call(null,seq__30877_30928__$1);
var G__30937 = null;
var G__30938 = 0;
var G__30939 = 0;
seq__30877_30917 = G__30936;
chunk__30879_30918 = G__30937;
count__30880_30919 = G__30938;
i__30881_30920 = G__30939;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___30940 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___30940))
{var pile_card_el_30941 = temp__4092__auto___30940;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_30941,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_30941,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_30942 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__30883_30943 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_30942)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_30944 = cljs.core.nth.call(null,vec__30883_30943,0,null);var y_step_30945 = cljs.core.nth.call(null,vec__30883_30943,1,null);console.log("opp reg");
var seq__30884_30946 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__30885_30947 = null;var count__30886_30948 = 0;var i__30887_30949 = 0;while(true){
if((i__30887_30949 < count__30886_30948))
{var vec__30888_30950 = cljs.core._nth.call(null,chunk__30885_30947,i__30887_30949);var i_30951 = cljs.core.nth.call(null,vec__30888_30950,0,null);var e_30952 = cljs.core.nth.call(null,vec__30888_30950,1,null);var el_30953 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_30952);gin.animator.slide.call(null,el_30953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_30951 * x_step_30944))),cljs.core.long$.call(null,(their_region_offset_y + (i_30951 * y_step_30945)))], null));
{
var G__30954 = seq__30884_30946;
var G__30955 = chunk__30885_30947;
var G__30956 = count__30886_30948;
var G__30957 = (i__30887_30949 + 1);
seq__30884_30946 = G__30954;
chunk__30885_30947 = G__30955;
count__30886_30948 = G__30956;
i__30887_30949 = G__30957;
continue;
}
} else
{var temp__4092__auto___30958 = cljs.core.seq.call(null,seq__30884_30946);if(temp__4092__auto___30958)
{var seq__30884_30959__$1 = temp__4092__auto___30958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30884_30959__$1))
{var c__17389__auto___30960 = cljs.core.chunk_first.call(null,seq__30884_30959__$1);{
var G__30961 = cljs.core.chunk_rest.call(null,seq__30884_30959__$1);
var G__30962 = c__17389__auto___30960;
var G__30963 = cljs.core.count.call(null,c__17389__auto___30960);
var G__30964 = 0;
seq__30884_30946 = G__30961;
chunk__30885_30947 = G__30962;
count__30886_30948 = G__30963;
i__30887_30949 = G__30964;
continue;
}
} else
{var vec__30889_30965 = cljs.core.first.call(null,seq__30884_30959__$1);var i_30966 = cljs.core.nth.call(null,vec__30889_30965,0,null);var e_30967 = cljs.core.nth.call(null,vec__30889_30965,1,null);var el_30968 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_30967);gin.animator.slide.call(null,el_30968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_30966 * x_step_30944))),cljs.core.long$.call(null,(their_region_offset_y + (i_30966 * y_step_30945)))], null));
{
var G__30969 = cljs.core.next.call(null,seq__30884_30959__$1);
var G__30970 = null;
var G__30971 = 0;
var G__30972 = 0;
seq__30884_30946 = G__30969;
chunk__30885_30947 = G__30970;
count__30886_30948 = G__30971;
i__30887_30949 = G__30972;
continue;
}
}
} else
{}
}
break;
}
var seq__30890_30973 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_30942,opp_cards_es));var chunk__30891_30974 = null;var count__30892_30975 = 0;var i__30893_30976 = 0;while(true){
if((i__30893_30976 < count__30892_30975))
{var vec__30894_30977 = cljs.core._nth.call(null,chunk__30891_30974,i__30893_30976);var el_30978 = cljs.core.nth.call(null,vec__30894_30977,0,null);var es_30979 = cljs.core.nth.call(null,vec__30894_30977,1,null);var suit_30980 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_30979);var rank_30981 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_30979);gin.dom_helpers.show_on_top.call(null,el_30978);
gin.dom_helpers.set_card_class.call(null,el_30978,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_30980))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_30980)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30981))].join('')));
{
var G__30982 = seq__30890_30973;
var G__30983 = chunk__30891_30974;
var G__30984 = count__30892_30975;
var G__30985 = (i__30893_30976 + 1);
seq__30890_30973 = G__30982;
chunk__30891_30974 = G__30983;
count__30892_30975 = G__30984;
i__30893_30976 = G__30985;
continue;
}
} else
{var temp__4092__auto___30986 = cljs.core.seq.call(null,seq__30890_30973);if(temp__4092__auto___30986)
{var seq__30890_30987__$1 = temp__4092__auto___30986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30890_30987__$1))
{var c__17389__auto___30988 = cljs.core.chunk_first.call(null,seq__30890_30987__$1);{
var G__30989 = cljs.core.chunk_rest.call(null,seq__30890_30987__$1);
var G__30990 = c__17389__auto___30988;
var G__30991 = cljs.core.count.call(null,c__17389__auto___30988);
var G__30992 = 0;
seq__30890_30973 = G__30989;
chunk__30891_30974 = G__30990;
count__30892_30975 = G__30991;
i__30893_30976 = G__30992;
continue;
}
} else
{var vec__30895_30993 = cljs.core.first.call(null,seq__30890_30987__$1);var el_30994 = cljs.core.nth.call(null,vec__30895_30993,0,null);var es_30995 = cljs.core.nth.call(null,vec__30895_30993,1,null);var suit_30996 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_30995);var rank_30997 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_30995);gin.dom_helpers.show_on_top.call(null,el_30994);
gin.dom_helpers.set_card_class.call(null,el_30994,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_30996))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_30996)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30997))].join('')));
{
var G__30998 = cljs.core.next.call(null,seq__30890_30987__$1);
var G__30999 = null;
var G__31000 = 0;
var G__31001 = 0;
seq__30890_30973 = G__30998;
chunk__30891_30974 = G__30999;
count__30892_30975 = G__31000;
i__30893_30976 = G__31001;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__30896_31002 = cljs.core.seq.call(null,discard_cards_es);var chunk__30898_31003 = null;var count__30899_31004 = 0;var i__30900_31005 = 0;while(true){
if((i__30900_31005 < count__30899_31004))
{var discard_card_es_31006 = cljs.core._nth.call(null,chunk__30898_31003,i__30900_31005);var discard_card_el_31007 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_31006);var suit_31008 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_31006);var rank_31009 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_31006);gin.dom_helpers.set_card_class.call(null,discard_card_el_31007,[cljs.core.str(cljs.core.name.call(null,suit_31008)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_31009))].join(''));
gin.animator.slide.call(null,discard_card_el_31007,gin.game_panel.discard_position.call(null));
{
var G__31010 = seq__30896_31002;
var G__31011 = chunk__30898_31003;
var G__31012 = count__30899_31004;
var G__31013 = (i__30900_31005 + 1);
seq__30896_31002 = G__31010;
chunk__30898_31003 = G__31011;
count__30899_31004 = G__31012;
i__30900_31005 = G__31013;
continue;
}
} else
{var temp__4092__auto___31014 = cljs.core.seq.call(null,seq__30896_31002);if(temp__4092__auto___31014)
{var seq__30896_31015__$1 = temp__4092__auto___31014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30896_31015__$1))
{var c__17389__auto___31016 = cljs.core.chunk_first.call(null,seq__30896_31015__$1);{
var G__31017 = cljs.core.chunk_rest.call(null,seq__30896_31015__$1);
var G__31018 = c__17389__auto___31016;
var G__31019 = cljs.core.count.call(null,c__17389__auto___31016);
var G__31020 = 0;
seq__30896_31002 = G__31017;
chunk__30898_31003 = G__31018;
count__30899_31004 = G__31019;
i__30900_31005 = G__31020;
continue;
}
} else
{var discard_card_es_31021 = cljs.core.first.call(null,seq__30896_31015__$1);var discard_card_el_31022 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_31021);var suit_31023 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_31021);var rank_31024 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_31021);gin.dom_helpers.set_card_class.call(null,discard_card_el_31022,[cljs.core.str(cljs.core.name.call(null,suit_31023)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_31024))].join(''));
gin.animator.slide.call(null,discard_card_el_31022,gin.game_panel.discard_position.call(null));
{
var G__31025 = cljs.core.next.call(null,seq__30896_31015__$1);
var G__31026 = null;
var G__31027 = 0;
var G__31028 = 0;
seq__30896_31002 = G__31025;
chunk__30898_31003 = G__31026;
count__30899_31004 = G__31027;
i__30900_31005 = G__31028;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___31029 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___31029))
{var discard_card_el_31030 = temp__4092__auto___31029;gin.dom_helpers.show_on_top.call(null,discard_card_el_31030);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_31030,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_31030,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__30902 = cljs.core.seq.call(null,our_cards_es);var chunk__30903 = null;var count__30904 = 0;var i__30905 = 0;while(true){
if((i__30905 < count__30904))
{var our_card_es = cljs.core._nth.call(null,chunk__30903,i__30905);var our_card_el_31031 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es);var suit_31032 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_31033 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_31031,((cljs.core._EQ_.call(null,suit_31032,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_31032)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_31033))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_31031,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__31034 = seq__30902;
var G__31035 = chunk__30903;
var G__31036 = count__30904;
var G__31037 = (i__30905 + 1);
seq__30902 = G__31034;
chunk__30903 = G__31035;
count__30904 = G__31036;
i__30905 = G__31037;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30902);if(temp__4092__auto__)
{var seq__30902__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30902__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__30902__$1);{
var G__31038 = cljs.core.chunk_rest.call(null,seq__30902__$1);
var G__31039 = c__17389__auto__;
var G__31040 = cljs.core.count.call(null,c__17389__auto__);
var G__31041 = 0;
seq__30902 = G__31038;
chunk__30903 = G__31039;
count__30904 = G__31040;
i__30905 = G__31041;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__30902__$1);var our_card_el_31042 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es);var suit_31043 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_31044 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_31042,((cljs.core._EQ_.call(null,suit_31043,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_31043)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_31044))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_31042,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__31045 = cljs.core.next.call(null,seq__30902__$1);
var G__31046 = null;
var G__31047 = 0;
var G__31048 = 0;
seq__30902 = G__31045;
chunk__30903 = G__31046;
count__30904 = G__31047;
i__30905 = G__31048;
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
var seq__30906 = cljs.core.seq.call(null,our_cards_es);var chunk__30907 = null;var count__30908 = 0;var i__30909 = 0;while(true){
if((i__30909 < count__30908))
{var our_card_es = cljs.core._nth.call(null,chunk__30907,i__30909);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__31049 = seq__30906;
var G__31050 = chunk__30907;
var G__31051 = count__30908;
var G__31052 = (i__30909 + 1);
seq__30906 = G__31049;
chunk__30907 = G__31050;
count__30908 = G__31051;
i__30909 = G__31052;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30906);if(temp__4092__auto__)
{var seq__30906__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30906__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__30906__$1);{
var G__31053 = cljs.core.chunk_rest.call(null,seq__30906__$1);
var G__31054 = c__17389__auto__;
var G__31055 = cljs.core.count.call(null,c__17389__auto__);
var G__31056 = 0;
seq__30906 = G__31053;
chunk__30907 = G__31054;
count__30908 = G__31055;
i__30909 = G__31056;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__30906__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__31057 = cljs.core.next.call(null,seq__30906__$1);
var G__31058 = null;
var G__31059 = 0;
var G__31060 = 0;
seq__30906 = G__31057;
chunk__30907 = G__31058;
count__30908 = G__31059;
i__30909 = G__31060;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__30910 = cljs.core._EQ_;var expr__30911 = result;if(cljs.core.truth_(pred__30910.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__30911)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__30910.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__30911)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__30910.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__30911)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__30910.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__30911)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__30910.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__30911)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30911)].join('')));
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
var seq__30913 = cljs.core.seq.call(null,our_cards_es);var chunk__30914 = null;var count__30915 = 0;var i__30916 = 0;while(true){
if((i__30916 < count__30915))
{var our_card_es = cljs.core._nth.call(null,chunk__30914,i__30916);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__31061 = seq__30913;
var G__31062 = chunk__30914;
var G__31063 = count__30915;
var G__31064 = (i__30916 + 1);
seq__30913 = G__31061;
chunk__30914 = G__31062;
count__30915 = G__31063;
i__30916 = G__31064;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30913);if(temp__4092__auto__)
{var seq__30913__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30913__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__30913__$1);{
var G__31065 = cljs.core.chunk_rest.call(null,seq__30913__$1);
var G__31066 = c__17389__auto__;
var G__31067 = cljs.core.count.call(null,c__17389__auto__);
var G__31068 = 0;
seq__30913 = G__31065;
chunk__30914 = G__31066;
count__30915 = G__31067;
i__30916 = G__31068;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__30913__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es),gin.game_panel.home_region_handler.call(null,conn));
{
var G__31069 = cljs.core.next.call(null,seq__30913__$1);
var G__31070 = null;
var G__31071 = 0;
var G__31072 = 0;
seq__30913 = G__31069;
chunk__30914 = G__31070;
count__30915 = G__31071;
i__30916 = G__31072;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__31076 = report;var map__31076__$1 = ((cljs.core.seq_QMARK_.call(null,map__31076))?cljs.core.apply.call(null,cljs.core.hash_map,map__31076):map__31076);var db_after = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__31077 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__31077,0,null);var vec__31078 = cljs.core.nth.call(null,vec__31077,1,null);var game_id = cljs.core.nth.call(null,vec__31078,0,null);var args = cljs.core.nthnext.call(null,vec__31078,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
