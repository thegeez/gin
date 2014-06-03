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
gin.game_panel.in_rect = (function in_rect(rect,p__19884){var vec__19886 = p__19884;var x = cljs.core.nth.call(null,vec__19886,0,null);var y = cljs.core.nth.call(null,vec__19886,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return gin.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.pile_position = (function pile_position(){var vec__19888 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"pile"));var x = cljs.core.nth.call(null,vec__19888,0,null);var y = cljs.core.nth.call(null,vec__19888,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 4),(y + 4)], null);
});
gin.game_panel.discard_position = (function discard_position(){var vec__19890 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));var x = cljs.core.nth.call(null,vec__19890,0,null);var y = cljs.core.nth.call(null,vec__19890,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + x),(12 + y)], null);
});
gin.game_panel.their_region_position = (function their_region_position(){var vec__19892 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));var x = cljs.core.nth.call(null,vec__19892,0,null);var y = cljs.core.nth.call(null,vec__19892,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
});
gin.game_panel.our_region_position = (function our_region_position(){var vec__19894 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));var x = cljs.core.nth.call(null,vec__19894,0,null);var y = cljs.core.nth.call(null,vec__19894,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__19896 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__19896,0,null);var y = cljs.core.nth.call(null,vec__19896,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__19898 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__19898,0,null);var y = cljs.core.nth.call(null,vec__19898,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__19900 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__19900,0,null);var y = cljs.core.nth.call(null,vec__19900,1,null);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.game_panel.discard_pick_handler = (function discard_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__19902 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__19902,0,null);var y = cljs.core.nth.call(null,vec__19902,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__19904 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__19904,0,null);var y = cljs.core.nth.call(null,vec__19904,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__19906 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__19906,0,null);var y = cljs.core.nth.call(null,vec__19906,1,null);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.game_panel.draw_table = (function draw_table(conn){var G__19931_19955 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__19931_19955,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__19931_19955,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__19931_19955,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__19932 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__19932,0,null);var pile_y = cljs.core.nth.call(null,vec__19932,1,null);var cards = (function (){var iter__17402__auto__ = ((function (container_wrap,vec__19932,pile_x,pile_y){
return (function iter__19933(s__19934){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__19932,pile_x,pile_y){
return (function (){var s__19934__$1 = s__19934;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19934__$1);if(temp__4092__auto__)
{var s__19934__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19934__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19934__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19936 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19935 = 0;while(true){
if((i__19935 < size__17401__auto__))
{var i = cljs.core._nth.call(null,c__17400__auto__,i__19935);cljs.core.chunk_append.call(null,b__19936,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__19939 = (new goog.fx.Dragger(card_el));G__19939.setLimits(container_wrap);
return G__19939;
})();card_el.dispose = ((function (i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__19935,card_id,card_el,dragger,i,c__17400__auto__,size__17401__auto__,b__19936,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__19956 = (i__19935 + 1);
i__19935 = G__19956;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19936),iter__19933.call(null,cljs.core.chunk_rest.call(null,s__19934__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19936),null);
}
} else
{var i = cljs.core.first.call(null,s__19934__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__19940 = (new goog.fx.Dragger(card_el));G__19940.setLimits(container_wrap);
return G__19940;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__19934__$2,temp__4092__auto__,container_wrap,vec__19932,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__19933.call(null,cljs.core.rest.call(null,s__19934__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__19932,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__19932,pile_x,pile_y))
;return iter__17402__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__19941_19957 = cljs.core.seq.call(null,cards);var chunk__19942_19958 = null;var count__19943_19959 = 0;var i__19944_19960 = 0;while(true){
if((i__19944_19960 < count__19943_19959))
{var map__19945_19961 = cljs.core._nth.call(null,chunk__19942_19958,i__19944_19960);var map__19945_19962__$1 = ((cljs.core.seq_QMARK_.call(null,map__19945_19961))?cljs.core.apply.call(null,cljs.core.hash_map,map__19945_19961):map__19945_19961);var idx_19963 = cljs.core.get.call(null,map__19945_19962__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_19964 = cljs.core.get.call(null,map__19945_19962__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_19964.anim_idx = idx_19963;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_19964);
{
var G__19965 = seq__19941_19957;
var G__19966 = chunk__19942_19958;
var G__19967 = count__19943_19959;
var G__19968 = (i__19944_19960 + 1);
seq__19941_19957 = G__19965;
chunk__19942_19958 = G__19966;
count__19943_19959 = G__19967;
i__19944_19960 = G__19968;
continue;
}
} else
{var temp__4092__auto___19969 = cljs.core.seq.call(null,seq__19941_19957);if(temp__4092__auto___19969)
{var seq__19941_19970__$1 = temp__4092__auto___19969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19941_19970__$1))
{var c__17433__auto___19971 = cljs.core.chunk_first.call(null,seq__19941_19970__$1);{
var G__19972 = cljs.core.chunk_rest.call(null,seq__19941_19970__$1);
var G__19973 = c__17433__auto___19971;
var G__19974 = cljs.core.count.call(null,c__17433__auto___19971);
var G__19975 = 0;
seq__19941_19957 = G__19972;
chunk__19942_19958 = G__19973;
count__19943_19959 = G__19974;
i__19944_19960 = G__19975;
continue;
}
} else
{var map__19946_19976 = cljs.core.first.call(null,seq__19941_19970__$1);var map__19946_19977__$1 = ((cljs.core.seq_QMARK_.call(null,map__19946_19976))?cljs.core.apply.call(null,cljs.core.hash_map,map__19946_19976):map__19946_19976);var idx_19978 = cljs.core.get.call(null,map__19946_19977__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_19979 = cljs.core.get.call(null,map__19946_19977__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_19979.anim_idx = idx_19978;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_19979);
{
var G__19980 = cljs.core.next.call(null,seq__19941_19970__$1);
var G__19981 = null;
var G__19982 = 0;
var G__19983 = 0;
seq__19941_19957 = G__19980;
chunk__19942_19958 = G__19981;
count__19943_19959 = G__19982;
i__19944_19960 = G__19983;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17402__auto__ = (function iter__19947(s__19948){return (new cljs.core.LazySeq(null,(function (){var s__19948__$1 = s__19948;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19948__$1);if(temp__4092__auto__)
{var s__19948__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19948__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19948__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19950 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19949 = 0;while(true){
if((i__19949 < size__17401__auto__))
{var map__19953 = cljs.core._nth.call(null,c__17400__auto__,i__19949);var map__19953__$1 = ((cljs.core.seq_QMARK_.call(null,map__19953))?cljs.core.apply.call(null,cljs.core.hash_map,map__19953):map__19953);var card_el = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__19950,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__19984 = (i__19949 + 1);
i__19949 = G__19984;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19950),iter__19947.call(null,cljs.core.chunk_rest.call(null,s__19948__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19950),null);
}
} else
{var map__19954 = cljs.core.first.call(null,s__19948__$2);var map__19954__$1 = ((cljs.core.seq_QMARK_.call(null,map__19954))?cljs.core.apply.call(null,cljs.core.hash_map,map__19954):map__19954);var card_el = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__19947.call(null,cljs.core.rest.call(null,s__19948__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,cards);
})());
});
gin.game_panel.anim_deal = (function anim_deal(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var _ = console.log("game: ",game,game_id);var opp_cards_el = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),((function (game,_){
return (function (p1__19985_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__19985_SHARP_], null));
});})(game,_))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__19986_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__19986_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__19997 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__19997,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__19997,1,null);var vec__19998 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__19998,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__19998,1,null);var their_deal = cljs.core.map.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4))], null)], null);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.map.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__20000){var map__20001 = p__20000;var map__20001__$1 = ((cljs.core.seq_QMARK_.call(null,map__20001))?cljs.core.apply.call(null,cljs.core.hash_map,map__20001):map__20001);var id = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null),((function (map__20001,map__20001__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(map__20001,map__20001__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal))
], null);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__19999 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__19999,0,null);var second_deal = cljs.core.nth.call(null,vec__19999,1,null);var discard_deal = (function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_el,gin.game_panel.discard_position.call(null),((function (discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
return gin.dom_helpers.set_timeout.call(null,((function (discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal){
return (function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
});})(discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal))
,300);
});})(discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal))
], null);
})();var actions = cljs.core.concat.call(null,first_deal,second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_deal], null));var step = ((function (game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal,discard_deal,actions){
return (function step(p__20002){var vec__20005 = p__20002;var action = cljs.core.nth.call(null,vec__20005,0,null);var actions__$1 = cljs.core.nthnext.call(null,vec__20005,1);if(cljs.core.truth_(action))
{var vec__20006 = action;var el = cljs.core.nth.call(null,vec__20006,0,null);var to = cljs.core.nth.call(null,vec__20006,1,null);var f = cljs.core.nth.call(null,vec__20006,2,null);gin.dom_helpers.show_on_top.call(null,el);
return gin.animator.slide.call(null,el,to,((function (vec__20006,el,to,f,vec__20005,action,actions__$1,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal,discard_deal,actions){
return (function (){if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);
});})(vec__20006,el,to,f,vec__20005,action,actions__$1,game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal,discard_deal,actions))
);
} else
{return null;
}
});})(game,_,opp_cards_el,our_cards_es,discard,vec__19997,their_region_offset_x,their_region_offset_y,vec__19998,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__19999,first_deal,second_deal,discard_deal,actions))
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
{var _ = console.log("Regular draw case");var us_pick_card = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,10,cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(game)));var our_cards_es = cljs.core.map.call(null,((function (_,us_pick_card){
return (function (p1__20007_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__20007_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__20008_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__20008_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__20009_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__20009_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__20010_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__20010_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__20060 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__20060,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__20060,1,null);var vec__20061 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__20061,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__20061,1,null);var pile_position = gin.game_panel.pile_position.call(null);var discard_position = gin.game_panel.discard_position.call(null);var seq__20062_20109 = cljs.core.seq.call(null,pile_cards_es);var chunk__20064_20110 = null;var count__20065_20111 = 0;var i__20066_20112 = 0;while(true){
if((i__20066_20112 < count__20065_20111))
{var pile_card_es_20113 = cljs.core._nth.call(null,chunk__20064_20110,i__20066_20112);var pile_card_el_20114 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_20113);gin.dom_helpers.set_card_class.call(null,pile_card_el_20114,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_20114);
gin.animator.slide.call(null,pile_card_el_20114,pile_position);
{
var G__20115 = seq__20062_20109;
var G__20116 = chunk__20064_20110;
var G__20117 = count__20065_20111;
var G__20118 = (i__20066_20112 + 1);
seq__20062_20109 = G__20115;
chunk__20064_20110 = G__20116;
count__20065_20111 = G__20117;
i__20066_20112 = G__20118;
continue;
}
} else
{var temp__4092__auto___20119 = cljs.core.seq.call(null,seq__20062_20109);if(temp__4092__auto___20119)
{var seq__20062_20120__$1 = temp__4092__auto___20119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20062_20120__$1))
{var c__17433__auto___20121 = cljs.core.chunk_first.call(null,seq__20062_20120__$1);{
var G__20122 = cljs.core.chunk_rest.call(null,seq__20062_20120__$1);
var G__20123 = c__17433__auto___20121;
var G__20124 = cljs.core.count.call(null,c__17433__auto___20121);
var G__20125 = 0;
seq__20062_20109 = G__20122;
chunk__20064_20110 = G__20123;
count__20065_20111 = G__20124;
i__20066_20112 = G__20125;
continue;
}
} else
{var pile_card_es_20126 = cljs.core.first.call(null,seq__20062_20120__$1);var pile_card_el_20127 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_20126);gin.dom_helpers.set_card_class.call(null,pile_card_el_20127,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_20127);
gin.animator.slide.call(null,pile_card_el_20127,pile_position);
{
var G__20128 = cljs.core.next.call(null,seq__20062_20120__$1);
var G__20129 = null;
var G__20130 = 0;
var G__20131 = 0;
seq__20062_20109 = G__20128;
chunk__20064_20110 = G__20129;
count__20065_20111 = G__20130;
i__20066_20112 = G__20131;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___20132 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___20132))
{var pile_card_el_20133 = temp__4092__auto___20132;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_20133,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_20133,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_20134 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__20068_20135 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_20134)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_20136 = cljs.core.nth.call(null,vec__20068_20135,0,null);var y_step_20137 = cljs.core.nth.call(null,vec__20068_20135,1,null);console.log("opp reg");
var seq__20069_20138 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__20070_20139 = null;var count__20071_20140 = 0;var i__20072_20141 = 0;while(true){
if((i__20072_20141 < count__20071_20140))
{var vec__20073_20142 = cljs.core._nth.call(null,chunk__20070_20139,i__20072_20141);var i_20143 = cljs.core.nth.call(null,vec__20073_20142,0,null);var e_20144 = cljs.core.nth.call(null,vec__20073_20142,1,null);var el_20145 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_20144);gin.animator.slide.call(null,el_20145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_20143 * x_step_20136))),cljs.core.long$.call(null,(their_region_offset_y + (i_20143 * y_step_20137)))], null));
{
var G__20146 = seq__20069_20138;
var G__20147 = chunk__20070_20139;
var G__20148 = count__20071_20140;
var G__20149 = (i__20072_20141 + 1);
seq__20069_20138 = G__20146;
chunk__20070_20139 = G__20147;
count__20071_20140 = G__20148;
i__20072_20141 = G__20149;
continue;
}
} else
{var temp__4092__auto___20150 = cljs.core.seq.call(null,seq__20069_20138);if(temp__4092__auto___20150)
{var seq__20069_20151__$1 = temp__4092__auto___20150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20069_20151__$1))
{var c__17433__auto___20152 = cljs.core.chunk_first.call(null,seq__20069_20151__$1);{
var G__20153 = cljs.core.chunk_rest.call(null,seq__20069_20151__$1);
var G__20154 = c__17433__auto___20152;
var G__20155 = cljs.core.count.call(null,c__17433__auto___20152);
var G__20156 = 0;
seq__20069_20138 = G__20153;
chunk__20070_20139 = G__20154;
count__20071_20140 = G__20155;
i__20072_20141 = G__20156;
continue;
}
} else
{var vec__20074_20157 = cljs.core.first.call(null,seq__20069_20151__$1);var i_20158 = cljs.core.nth.call(null,vec__20074_20157,0,null);var e_20159 = cljs.core.nth.call(null,vec__20074_20157,1,null);var el_20160 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_20159);gin.animator.slide.call(null,el_20160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_20158 * x_step_20136))),cljs.core.long$.call(null,(their_region_offset_y + (i_20158 * y_step_20137)))], null));
{
var G__20161 = cljs.core.next.call(null,seq__20069_20151__$1);
var G__20162 = null;
var G__20163 = 0;
var G__20164 = 0;
seq__20069_20138 = G__20161;
chunk__20070_20139 = G__20162;
count__20071_20140 = G__20163;
i__20072_20141 = G__20164;
continue;
}
}
} else
{}
}
break;
}
var seq__20075_20165 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_20134,opp_cards_es));var chunk__20076_20166 = null;var count__20077_20167 = 0;var i__20078_20168 = 0;while(true){
if((i__20078_20168 < count__20077_20167))
{var vec__20079_20169 = cljs.core._nth.call(null,chunk__20076_20166,i__20078_20168);var el_20170 = cljs.core.nth.call(null,vec__20079_20169,0,null);var es_20171 = cljs.core.nth.call(null,vec__20079_20169,1,null);var suit_20172 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_20171);var rank_20173 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_20171);gin.dom_helpers.show_on_top.call(null,el_20170);
gin.dom_helpers.set_card_class.call(null,el_20170,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_20172))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_20172)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20173))].join('')));
{
var G__20174 = seq__20075_20165;
var G__20175 = chunk__20076_20166;
var G__20176 = count__20077_20167;
var G__20177 = (i__20078_20168 + 1);
seq__20075_20165 = G__20174;
chunk__20076_20166 = G__20175;
count__20077_20167 = G__20176;
i__20078_20168 = G__20177;
continue;
}
} else
{var temp__4092__auto___20178 = cljs.core.seq.call(null,seq__20075_20165);if(temp__4092__auto___20178)
{var seq__20075_20179__$1 = temp__4092__auto___20178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20075_20179__$1))
{var c__17433__auto___20180 = cljs.core.chunk_first.call(null,seq__20075_20179__$1);{
var G__20181 = cljs.core.chunk_rest.call(null,seq__20075_20179__$1);
var G__20182 = c__17433__auto___20180;
var G__20183 = cljs.core.count.call(null,c__17433__auto___20180);
var G__20184 = 0;
seq__20075_20165 = G__20181;
chunk__20076_20166 = G__20182;
count__20077_20167 = G__20183;
i__20078_20168 = G__20184;
continue;
}
} else
{var vec__20080_20185 = cljs.core.first.call(null,seq__20075_20179__$1);var el_20186 = cljs.core.nth.call(null,vec__20080_20185,0,null);var es_20187 = cljs.core.nth.call(null,vec__20080_20185,1,null);var suit_20188 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_20187);var rank_20189 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_20187);gin.dom_helpers.show_on_top.call(null,el_20186);
gin.dom_helpers.set_card_class.call(null,el_20186,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_20188))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_20188)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20189))].join('')));
{
var G__20190 = cljs.core.next.call(null,seq__20075_20179__$1);
var G__20191 = null;
var G__20192 = 0;
var G__20193 = 0;
seq__20075_20165 = G__20190;
chunk__20076_20166 = G__20191;
count__20077_20167 = G__20192;
i__20078_20168 = G__20193;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__20081_20194 = cljs.core.seq.call(null,discard_cards_es);var chunk__20083_20195 = null;var count__20084_20196 = 0;var i__20085_20197 = 0;while(true){
if((i__20085_20197 < count__20084_20196))
{var discard_card_es_20198 = cljs.core._nth.call(null,chunk__20083_20195,i__20085_20197);var discard_card_el_20199 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_20198);var suit_20200 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_20198);var rank_20201 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_20198);gin.dom_helpers.set_card_class.call(null,discard_card_el_20199,[cljs.core.str(cljs.core.name.call(null,suit_20200)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20201))].join(''));
gin.animator.slide.call(null,discard_card_el_20199,discard_position);
{
var G__20202 = seq__20081_20194;
var G__20203 = chunk__20083_20195;
var G__20204 = count__20084_20196;
var G__20205 = (i__20085_20197 + 1);
seq__20081_20194 = G__20202;
chunk__20083_20195 = G__20203;
count__20084_20196 = G__20204;
i__20085_20197 = G__20205;
continue;
}
} else
{var temp__4092__auto___20206 = cljs.core.seq.call(null,seq__20081_20194);if(temp__4092__auto___20206)
{var seq__20081_20207__$1 = temp__4092__auto___20206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20081_20207__$1))
{var c__17433__auto___20208 = cljs.core.chunk_first.call(null,seq__20081_20207__$1);{
var G__20209 = cljs.core.chunk_rest.call(null,seq__20081_20207__$1);
var G__20210 = c__17433__auto___20208;
var G__20211 = cljs.core.count.call(null,c__17433__auto___20208);
var G__20212 = 0;
seq__20081_20194 = G__20209;
chunk__20083_20195 = G__20210;
count__20084_20196 = G__20211;
i__20085_20197 = G__20212;
continue;
}
} else
{var discard_card_es_20213 = cljs.core.first.call(null,seq__20081_20207__$1);var discard_card_el_20214 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_20213);var suit_20215 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_20213);var rank_20216 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_20213);gin.dom_helpers.set_card_class.call(null,discard_card_el_20214,[cljs.core.str(cljs.core.name.call(null,suit_20215)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20216))].join(''));
gin.animator.slide.call(null,discard_card_el_20214,discard_position);
{
var G__20217 = cljs.core.next.call(null,seq__20081_20207__$1);
var G__20218 = null;
var G__20219 = 0;
var G__20220 = 0;
seq__20081_20194 = G__20217;
chunk__20083_20195 = G__20218;
count__20084_20196 = G__20219;
i__20085_20197 = G__20220;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___20221 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___20221))
{var discard_card_el_20222 = temp__4092__auto___20221;gin.dom_helpers.show_on_top.call(null,discard_card_el_20222);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_20222,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_20222,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if(cljs.core._EQ_.call(null,pile_position,gin.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,our_cards_es))),gin.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,our_cards_es)))))
{var vec__20087_20223 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,our_cards_es)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_20224 = cljs.core.nth.call(null,vec__20087_20223,0,null);var y_step_20225 = cljs.core.nth.call(null,vec__20087_20223,1,null);var seq__20088_20226 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),our_cards_es));var chunk__20089_20227 = null;var count__20090_20228 = 0;var i__20091_20229 = 0;while(true){
if((i__20091_20229 < count__20090_20228))
{var vec__20092_20230 = cljs.core._nth.call(null,chunk__20089_20227,i__20091_20229);var i_20231 = cljs.core.nth.call(null,vec__20092_20230,0,null);var e_20232 = cljs.core.nth.call(null,vec__20092_20230,1,null);var el_20233 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_20232);var suit_20234 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_20232);var rank_20235 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_20232);gin.dom_helpers.set_card_class.call(null,el_20233,[cljs.core.str(cljs.core.name.call(null,suit_20234)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20235))].join(''));
gin.animator.slide.call(null,el_20233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_20231 * x_step_20224))),cljs.core.long$.call(null,(our_region_offset_y + (i_20231 * y_step_20225)))], null));
{
var G__20236 = seq__20088_20226;
var G__20237 = chunk__20089_20227;
var G__20238 = count__20090_20228;
var G__20239 = (i__20091_20229 + 1);
seq__20088_20226 = G__20236;
chunk__20089_20227 = G__20237;
count__20090_20228 = G__20238;
i__20091_20229 = G__20239;
continue;
}
} else
{var temp__4092__auto___20240 = cljs.core.seq.call(null,seq__20088_20226);if(temp__4092__auto___20240)
{var seq__20088_20241__$1 = temp__4092__auto___20240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20088_20241__$1))
{var c__17433__auto___20242 = cljs.core.chunk_first.call(null,seq__20088_20241__$1);{
var G__20243 = cljs.core.chunk_rest.call(null,seq__20088_20241__$1);
var G__20244 = c__17433__auto___20242;
var G__20245 = cljs.core.count.call(null,c__17433__auto___20242);
var G__20246 = 0;
seq__20088_20226 = G__20243;
chunk__20089_20227 = G__20244;
count__20090_20228 = G__20245;
i__20091_20229 = G__20246;
continue;
}
} else
{var vec__20093_20247 = cljs.core.first.call(null,seq__20088_20241__$1);var i_20248 = cljs.core.nth.call(null,vec__20093_20247,0,null);var e_20249 = cljs.core.nth.call(null,vec__20093_20247,1,null);var el_20250 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_20249);var suit_20251 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_20249);var rank_20252 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_20249);gin.dom_helpers.set_card_class.call(null,el_20250,[cljs.core.str(cljs.core.name.call(null,suit_20251)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20252))].join(''));
gin.animator.slide.call(null,el_20250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_20248 * x_step_20224))),cljs.core.long$.call(null,(our_region_offset_y + (i_20248 * y_step_20225)))], null));
{
var G__20253 = cljs.core.next.call(null,seq__20088_20241__$1);
var G__20254 = null;
var G__20255 = 0;
var G__20256 = 0;
seq__20088_20226 = G__20253;
chunk__20089_20227 = G__20254;
count__20090_20228 = G__20255;
i__20091_20229 = G__20256;
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
var seq__20094_20257 = cljs.core.seq.call(null,our_cards_es);var chunk__20095_20258 = null;var count__20096_20259 = 0;var i__20097_20260 = 0;while(true){
if((i__20097_20260 < count__20096_20259))
{var our_card_es_20261 = cljs.core._nth.call(null,chunk__20095_20258,i__20097_20260);var our_card_el_20262 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_20261);var suit_20263 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_20261);var rank_20264 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_20261);gin.dom_helpers.set_card_class.call(null,our_card_el_20262,((cljs.core._EQ_.call(null,suit_20263,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_20263)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20264))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_20262,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__20265 = seq__20094_20257;
var G__20266 = chunk__20095_20258;
var G__20267 = count__20096_20259;
var G__20268 = (i__20097_20260 + 1);
seq__20094_20257 = G__20265;
chunk__20095_20258 = G__20266;
count__20096_20259 = G__20267;
i__20097_20260 = G__20268;
continue;
}
} else
{var temp__4092__auto___20269 = cljs.core.seq.call(null,seq__20094_20257);if(temp__4092__auto___20269)
{var seq__20094_20270__$1 = temp__4092__auto___20269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20094_20270__$1))
{var c__17433__auto___20271 = cljs.core.chunk_first.call(null,seq__20094_20270__$1);{
var G__20272 = cljs.core.chunk_rest.call(null,seq__20094_20270__$1);
var G__20273 = c__17433__auto___20271;
var G__20274 = cljs.core.count.call(null,c__17433__auto___20271);
var G__20275 = 0;
seq__20094_20257 = G__20272;
chunk__20095_20258 = G__20273;
count__20096_20259 = G__20274;
i__20097_20260 = G__20275;
continue;
}
} else
{var our_card_es_20276 = cljs.core.first.call(null,seq__20094_20270__$1);var our_card_el_20277 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_20276);var suit_20278 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_20276);var rank_20279 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_20276);gin.dom_helpers.set_card_class.call(null,our_card_el_20277,((cljs.core._EQ_.call(null,suit_20278,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_20278)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_20279))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_20277,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__20280 = cljs.core.next.call(null,seq__20094_20270__$1);
var G__20281 = null;
var G__20282 = 0;
var G__20283 = 0;
seq__20094_20257 = G__20280;
chunk__20095_20258 = G__20281;
count__20096_20259 = G__20282;
i__20097_20260 = G__20283;
continue;
}
}
} else
{}
}
break;
}
} else
{gin.game_panel.set_msg.call(null,"Your turn. Draw a card or pickup a discard.");
var seq__20098_20284 = cljs.core.seq.call(null,our_cards_es);var chunk__20099_20285 = null;var count__20100_20286 = 0;var i__20101_20287 = 0;while(true){
if((i__20101_20287 < count__20100_20286))
{var our_card_es_20288 = cljs.core._nth.call(null,chunk__20099_20285,i__20101_20287);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_20288),gin.game_panel.home_region_handler.call(null,conn));
{
var G__20289 = seq__20098_20284;
var G__20290 = chunk__20099_20285;
var G__20291 = count__20100_20286;
var G__20292 = (i__20101_20287 + 1);
seq__20098_20284 = G__20289;
chunk__20099_20285 = G__20290;
count__20100_20286 = G__20291;
i__20101_20287 = G__20292;
continue;
}
} else
{var temp__4092__auto___20293 = cljs.core.seq.call(null,seq__20098_20284);if(temp__4092__auto___20293)
{var seq__20098_20294__$1 = temp__4092__auto___20293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20098_20294__$1))
{var c__17433__auto___20295 = cljs.core.chunk_first.call(null,seq__20098_20294__$1);{
var G__20296 = cljs.core.chunk_rest.call(null,seq__20098_20294__$1);
var G__20297 = c__17433__auto___20295;
var G__20298 = cljs.core.count.call(null,c__17433__auto___20295);
var G__20299 = 0;
seq__20098_20284 = G__20296;
chunk__20099_20285 = G__20297;
count__20100_20286 = G__20298;
i__20101_20287 = G__20299;
continue;
}
} else
{var our_card_es_20300 = cljs.core.first.call(null,seq__20098_20294__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_20300),gin.game_panel.home_region_handler.call(null,conn));
{
var G__20301 = cljs.core.next.call(null,seq__20098_20294__$1);
var G__20302 = null;
var G__20303 = 0;
var G__20304 = 0;
seq__20098_20284 = G__20301;
chunk__20099_20285 = G__20302;
count__20100_20286 = G__20303;
i__20101_20287 = G__20304;
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
{gin.game_panel.set_msg.call(null,"Opponent's turn.");
} else
{gin.game_panel.set_msg.call(null,"Your turn is done.");
}
var seq__20102_20305 = cljs.core.seq.call(null,our_cards_es);var chunk__20103_20306 = null;var count__20104_20307 = 0;var i__20105_20308 = 0;while(true){
if((i__20105_20308 < count__20104_20307))
{var our_card_es_20309 = cljs.core._nth.call(null,chunk__20103_20306,i__20105_20308);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_20309),gin.game_panel.home_region_handler.call(null,conn));
{
var G__20310 = seq__20102_20305;
var G__20311 = chunk__20103_20306;
var G__20312 = count__20104_20307;
var G__20313 = (i__20105_20308 + 1);
seq__20102_20305 = G__20310;
chunk__20103_20306 = G__20311;
count__20104_20307 = G__20312;
i__20105_20308 = G__20313;
continue;
}
} else
{var temp__4092__auto___20314 = cljs.core.seq.call(null,seq__20102_20305);if(temp__4092__auto___20314)
{var seq__20102_20315__$1 = temp__4092__auto___20314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20102_20315__$1))
{var c__17433__auto___20316 = cljs.core.chunk_first.call(null,seq__20102_20315__$1);{
var G__20317 = cljs.core.chunk_rest.call(null,seq__20102_20315__$1);
var G__20318 = c__17433__auto___20316;
var G__20319 = cljs.core.count.call(null,c__17433__auto___20316);
var G__20320 = 0;
seq__20102_20305 = G__20317;
chunk__20103_20306 = G__20318;
count__20104_20307 = G__20319;
i__20105_20308 = G__20320;
continue;
}
} else
{var our_card_es_20321 = cljs.core.first.call(null,seq__20102_20315__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_20321),gin.game_panel.home_region_handler.call(null,conn));
{
var G__20322 = cljs.core.next.call(null,seq__20102_20315__$1);
var G__20323 = null;
var G__20324 = 0;
var G__20325 = 0;
seq__20102_20305 = G__20322;
chunk__20103_20306 = G__20323;
count__20104_20307 = G__20324;
i__20105_20308 = G__20325;
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
{var result = temp__4092__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__20106 = cljs.core._EQ_;var expr__20107 = result;if(cljs.core.truth_(pred__20106.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__20107)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__20106.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__20107)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__20106.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__20107)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__20106.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__20107)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__20106.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__20107)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20107)].join('')));
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__20329 = report;var map__20329__$1 = ((cljs.core.seq_QMARK_.call(null,map__20329))?cljs.core.apply.call(null,cljs.core.hash_map,map__20329):map__20329);var db_after = cljs.core.get.call(null,map__20329__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__20330 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__20330,0,null);var vec__20331 = cljs.core.nth.call(null,vec__20330,1,null);var game_id = cljs.core.nth.call(null,vec__20331,0,null);var args = cljs.core.nthnext.call(null,vec__20331,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
if(cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"error","error",1110689146)))
{return gin.game_panel.set_msg.call(null,"An error occured, refresh the page.");
} else
{return gin.game_panel.draw.call(null,db_after,game_id,conn);
}
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
