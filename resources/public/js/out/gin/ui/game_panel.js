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
gin.ui.game_panel.in_rect = (function in_rect(rect,p__24123){var vec__24125 = p__24123;var x = cljs.core.nth.call(null,vec__24125,0,null);var y = cljs.core.nth.call(null,vec__24125,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.ui.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"));return gin.ui.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.ui.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"));return gin.ui.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.ui.game_panel.pile_position = (function pile_position(){var vec__24127 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"));var x = cljs.core.nth.call(null,vec__24127,0,null);var y = cljs.core.nth.call(null,vec__24127,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 4),(y + 4)], null);
});
gin.ui.game_panel.discard_position = (function discard_position(){var vec__24129 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"discard_pile"));var x = cljs.core.nth.call(null,vec__24129,0,null);var y = cljs.core.nth.call(null,vec__24129,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + x),(12 + y)], null);
});
gin.ui.game_panel.their_region_position = (function their_region_position(){var vec__24131 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"their_region"));var x = cljs.core.nth.call(null,vec__24131,0,null);var y = cljs.core.nth.call(null,vec__24131,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
});
gin.ui.game_panel.our_region_position = (function our_region_position(){var vec__24133 = gin.ui.dom_helpers.get_position.call(null,gin.ui.dom_helpers.get_element.call(null,"our_region"));var x = cljs.core.nth.call(null,vec__24133,0,null);var y = cljs.core.nth.call(null,vec__24133,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__24135 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__24135,0,null);var y = cljs.core.nth.call(null,vec__24135,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__24137 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__24137,0,null);var y = cljs.core.nth.call(null,vec__24137,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__24139 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__24139,0,null);var y = cljs.core.nth.call(null,vec__24139,1,null);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.ui.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.ui.game_panel.discard_pick_handler = (function discard_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__24141 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__24141,0,null);var y = cljs.core.nth.call(null,vec__24141,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__24143 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__24143,0,null);var y = cljs.core.nth.call(null,vec__24143,1,null);if(gin.ui.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.ui.dom_helpers.get_element.call(null,card_id);var vec__24145 = gin.ui.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__24145,0,null);var y = cljs.core.nth.call(null,vec__24145,1,null);gin.ui.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.ui.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.ui.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.ui.game_panel.draw_table = (function draw_table(conn){var G__24170_24194 = gin.ui.dom_helpers.get_element.call(null,"game-panel");gin.ui.dom_helpers.append.call(null,G__24170_24194,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.ui.dom_helpers.append.call(null,G__24170_24194,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.ui.dom_helpers.append.call(null,G__24170_24194,gin.ui.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = gin.ui.dom_helpers.get_bounds.call(null,gin.ui.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__24171 = gin.ui.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__24171,0,null);var pile_y = cljs.core.nth.call(null,vec__24171,1,null);var cards = (function (){var iter__17431__auto__ = ((function (container_wrap,vec__24171,pile_x,pile_y){
return (function iter__24172(s__24173){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__24171,pile_x,pile_y){
return (function (){var s__24173__$1 = s__24173;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24173__$1);if(temp__4092__auto__)
{var s__24173__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24173__$2))
{var c__17429__auto__ = cljs.core.chunk_first.call(null,s__24173__$2);var size__17430__auto__ = cljs.core.count.call(null,c__17429__auto__);var b__24175 = cljs.core.chunk_buffer.call(null,size__17430__auto__);if((function (){var i__24174 = 0;while(true){
if((i__24174 < size__17430__auto__))
{var i = cljs.core._nth.call(null,c__17429__auto__,i__24174);cljs.core.chunk_append.call(null,b__24175,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__24178 = (new goog.fx.Dragger(card_el));G__24178.setLimits(container_wrap);
return G__24178;
})();card_el.dispose = ((function (i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__24174,card_id,card_el,dragger,i,c__17429__auto__,size__17430__auto__,b__24175,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__24195 = (i__24174 + 1);
i__24174 = G__24195;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24175),iter__24172.call(null,cljs.core.chunk_rest.call(null,s__24173__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24175),null);
}
} else
{var i = cljs.core.first.call(null,s__24173__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.ui.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__24179 = (new goog.fx.Dragger(card_el));G__24179.setLimits(container_wrap);
return G__24179;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
;
gin.ui.game_panel.set_drag_handler.call(null,card_el,gin.ui.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__24173__$2,temp__4092__auto__,container_wrap,vec__24171,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__24172.call(null,cljs.core.rest.call(null,s__24173__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__24171,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__24171,pile_x,pile_y))
;return iter__17431__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__24180_24196 = cljs.core.seq.call(null,cards);var chunk__24181_24197 = null;var count__24182_24198 = 0;var i__24183_24199 = 0;while(true){
if((i__24183_24199 < count__24182_24198))
{var map__24184_24200 = cljs.core._nth.call(null,chunk__24181_24197,i__24183_24199);var map__24184_24201__$1 = ((cljs.core.seq_QMARK_.call(null,map__24184_24200))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184_24200):map__24184_24200);var idx_24202 = cljs.core.get.call(null,map__24184_24201__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_24203 = cljs.core.get.call(null,map__24184_24201__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_24203.anim_idx = idx_24202;
gin.ui.dom_helpers.append.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"),card_el_24203);
{
var G__24204 = seq__24180_24196;
var G__24205 = chunk__24181_24197;
var G__24206 = count__24182_24198;
var G__24207 = (i__24183_24199 + 1);
seq__24180_24196 = G__24204;
chunk__24181_24197 = G__24205;
count__24182_24198 = G__24206;
i__24183_24199 = G__24207;
continue;
}
} else
{var temp__4092__auto___24208 = cljs.core.seq.call(null,seq__24180_24196);if(temp__4092__auto___24208)
{var seq__24180_24209__$1 = temp__4092__auto___24208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24180_24209__$1))
{var c__17462__auto___24210 = cljs.core.chunk_first.call(null,seq__24180_24209__$1);{
var G__24211 = cljs.core.chunk_rest.call(null,seq__24180_24209__$1);
var G__24212 = c__17462__auto___24210;
var G__24213 = cljs.core.count.call(null,c__17462__auto___24210);
var G__24214 = 0;
seq__24180_24196 = G__24211;
chunk__24181_24197 = G__24212;
count__24182_24198 = G__24213;
i__24183_24199 = G__24214;
continue;
}
} else
{var map__24185_24215 = cljs.core.first.call(null,seq__24180_24209__$1);var map__24185_24216__$1 = ((cljs.core.seq_QMARK_.call(null,map__24185_24215))?cljs.core.apply.call(null,cljs.core.hash_map,map__24185_24215):map__24185_24215);var idx_24217 = cljs.core.get.call(null,map__24185_24216__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_24218 = cljs.core.get.call(null,map__24185_24216__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_24218.anim_idx = idx_24217;
gin.ui.dom_helpers.append.call(null,gin.ui.dom_helpers.get_element.call(null,"pile"),card_el_24218);
{
var G__24219 = cljs.core.next.call(null,seq__24180_24209__$1);
var G__24220 = null;
var G__24221 = 0;
var G__24222 = 0;
seq__24180_24196 = G__24219;
chunk__24181_24197 = G__24220;
count__24182_24198 = G__24221;
i__24183_24199 = G__24222;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17431__auto__ = (function iter__24186(s__24187){return (new cljs.core.LazySeq(null,(function (){var s__24187__$1 = s__24187;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24187__$1);if(temp__4092__auto__)
{var s__24187__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24187__$2))
{var c__17429__auto__ = cljs.core.chunk_first.call(null,s__24187__$2);var size__17430__auto__ = cljs.core.count.call(null,c__17429__auto__);var b__24189 = cljs.core.chunk_buffer.call(null,size__17430__auto__);if((function (){var i__24188 = 0;while(true){
if((i__24188 < size__17430__auto__))
{var map__24192 = cljs.core._nth.call(null,c__17429__auto__,i__24188);var map__24192__$1 = ((cljs.core.seq_QMARK_.call(null,map__24192))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);var card_el = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__24189,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__24223 = (i__24188 + 1);
i__24188 = G__24223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24189),iter__24186.call(null,cljs.core.chunk_rest.call(null,s__24187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24189),null);
}
} else
{var map__24193 = cljs.core.first.call(null,s__24187__$2);var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);var card_el = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__24186.call(null,cljs.core.rest.call(null,s__24187__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17431__auto__.call(null,cards);
})());
});
gin.ui.game_panel.anim_deal = (function anim_deal(db,game_id,conn){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var opp_cards_el = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),((function (game){
return (function (p1__24224_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24224_SHARP_], null));
});})(game))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,opp_cards_el){
return (function (p1__24225_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24225_SHARP_], null));
});})(game,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__24236 = gin.ui.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__24236,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__24236,1,null);var vec__24237 = gin.ui.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__24237,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__24237,1,null);var their_deal = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4))], null)], null);
});})(game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.map.call(null,((function (game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__24239){var map__24240 = p__24239;var map__24240__$1 = ((cljs.core.seq_QMARK_.call(null,map__24240))?cljs.core.apply.call(null,cljs.core.hash_map,map__24240):map__24240);var id = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null),((function (map__24240,map__24240__$1,id,el,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.ui.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.ui.game_panel.set_drag_handler.call(null,el,gin.ui.game_panel.home_region_handler.call(null,conn));
});})(map__24240,map__24240__$1,id,el,suit,rank,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal))
], null);
});})(game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__24238 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__24238,0,null);var second_deal = cljs.core.nth.call(null,vec__24238,1,null);var discard_deal = (function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_el,gin.ui.game_panel.discard_position.call(null),((function (discard_el,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal){
return (function (){gin.ui.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
return gin.ui.dom_helpers.set_timeout.call(null,((function (discard_el,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal){
return (function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
});})(discard_el,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal))
,300);
});})(discard_el,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal))
], null);
})();var actions = cljs.core.concat.call(null,first_deal,second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_deal], null));var step = ((function (game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal,discard_deal,actions){
return (function step(p__24241){var vec__24244 = p__24241;var action = cljs.core.nth.call(null,vec__24244,0,null);var actions__$1 = cljs.core.nthnext.call(null,vec__24244,1);if(cljs.core.truth_(action))
{var vec__24245 = action;var el = cljs.core.nth.call(null,vec__24245,0,null);var to = cljs.core.nth.call(null,vec__24245,1,null);var f = cljs.core.nth.call(null,vec__24245,2,null);gin.ui.dom_helpers.show_on_top.call(null,el);
return gin.ui.animator.slide.call(null,el,to,((function (vec__24245,el,to,f,vec__24244,action,actions__$1,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal,discard_deal,actions){
return (function (){if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);
});})(vec__24245,el,to,f,vec__24244,action,actions__$1,game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal,discard_deal,actions))
);
} else
{return null;
}
});})(game,opp_cards_el,our_cards_es,discard,vec__24236,their_region_offset_x,their_region_offset_y,vec__24237,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__24238,first_deal,second_deal,discard_deal,actions))
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
return (function (p1__24246_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24246_SHARP_], null));
});})(us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es){
return (function (p1__24247_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24247_SHARP_], null));
});})(us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__24248_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24248_SHARP_], null));
});})(us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__24249_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__24249_SHARP_], null));
});})(us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__24299 = gin.ui.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__24299,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__24299,1,null);var vec__24300 = gin.ui.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__24300,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__24300,1,null);var pile_position = gin.ui.game_panel.pile_position.call(null);var discard_position = gin.ui.game_panel.discard_position.call(null);var seq__24301_24348 = cljs.core.seq.call(null,pile_cards_es);var chunk__24303_24349 = null;var count__24304_24350 = 0;var i__24305_24351 = 0;while(true){
if((i__24305_24351 < count__24304_24350))
{var pile_card_es_24352 = cljs.core._nth.call(null,chunk__24303_24349,i__24305_24351);var pile_card_el_24353 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_24352);gin.ui.dom_helpers.set_card_class.call(null,pile_card_el_24353,"card_back");
gin.ui.dom_helpers.show_on_top.call(null,pile_card_el_24353);
gin.ui.animator.slide.call(null,pile_card_el_24353,pile_position);
{
var G__24354 = seq__24301_24348;
var G__24355 = chunk__24303_24349;
var G__24356 = count__24304_24350;
var G__24357 = (i__24305_24351 + 1);
seq__24301_24348 = G__24354;
chunk__24303_24349 = G__24355;
count__24304_24350 = G__24356;
i__24305_24351 = G__24357;
continue;
}
} else
{var temp__4092__auto___24358 = cljs.core.seq.call(null,seq__24301_24348);if(temp__4092__auto___24358)
{var seq__24301_24359__$1 = temp__4092__auto___24358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24301_24359__$1))
{var c__17462__auto___24360 = cljs.core.chunk_first.call(null,seq__24301_24359__$1);{
var G__24361 = cljs.core.chunk_rest.call(null,seq__24301_24359__$1);
var G__24362 = c__17462__auto___24360;
var G__24363 = cljs.core.count.call(null,c__17462__auto___24360);
var G__24364 = 0;
seq__24301_24348 = G__24361;
chunk__24303_24349 = G__24362;
count__24304_24350 = G__24363;
i__24305_24351 = G__24364;
continue;
}
} else
{var pile_card_es_24365 = cljs.core.first.call(null,seq__24301_24359__$1);var pile_card_el_24366 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_24365);gin.ui.dom_helpers.set_card_class.call(null,pile_card_el_24366,"card_back");
gin.ui.dom_helpers.show_on_top.call(null,pile_card_el_24366);
gin.ui.animator.slide.call(null,pile_card_el_24366,pile_position);
{
var G__24367 = cljs.core.next.call(null,seq__24301_24359__$1);
var G__24368 = null;
var G__24369 = 0;
var G__24370 = 0;
seq__24301_24348 = G__24367;
chunk__24303_24349 = G__24368;
count__24304_24350 = G__24369;
i__24305_24351 = G__24370;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___24371 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___24371))
{var pile_card_el_24372 = temp__4092__auto___24371;if(us_pick_card)
{gin.ui.game_panel.set_drag_handler.call(null,pile_card_el_24372,gin.ui.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.ui.game_panel.set_drag_handler.call(null,pile_card_el_24372,gin.ui.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_24373 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__24307_24374 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_24373)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_24375 = cljs.core.nth.call(null,vec__24307_24374,0,null);var y_step_24376 = cljs.core.nth.call(null,vec__24307_24374,1,null);var seq__24308_24377 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__24309_24378 = null;var count__24310_24379 = 0;var i__24311_24380 = 0;while(true){
if((i__24311_24380 < count__24310_24379))
{var vec__24312_24381 = cljs.core._nth.call(null,chunk__24309_24378,i__24311_24380);var i_24382 = cljs.core.nth.call(null,vec__24312_24381,0,null);var e_24383 = cljs.core.nth.call(null,vec__24312_24381,1,null);var el_24384 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_24383);gin.ui.animator.slide.call(null,el_24384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_24382 * x_step_24375))),cljs.core.long$.call(null,(their_region_offset_y + (i_24382 * y_step_24376)))], null));
{
var G__24385 = seq__24308_24377;
var G__24386 = chunk__24309_24378;
var G__24387 = count__24310_24379;
var G__24388 = (i__24311_24380 + 1);
seq__24308_24377 = G__24385;
chunk__24309_24378 = G__24386;
count__24310_24379 = G__24387;
i__24311_24380 = G__24388;
continue;
}
} else
{var temp__4092__auto___24389 = cljs.core.seq.call(null,seq__24308_24377);if(temp__4092__auto___24389)
{var seq__24308_24390__$1 = temp__4092__auto___24389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24308_24390__$1))
{var c__17462__auto___24391 = cljs.core.chunk_first.call(null,seq__24308_24390__$1);{
var G__24392 = cljs.core.chunk_rest.call(null,seq__24308_24390__$1);
var G__24393 = c__17462__auto___24391;
var G__24394 = cljs.core.count.call(null,c__17462__auto___24391);
var G__24395 = 0;
seq__24308_24377 = G__24392;
chunk__24309_24378 = G__24393;
count__24310_24379 = G__24394;
i__24311_24380 = G__24395;
continue;
}
} else
{var vec__24313_24396 = cljs.core.first.call(null,seq__24308_24390__$1);var i_24397 = cljs.core.nth.call(null,vec__24313_24396,0,null);var e_24398 = cljs.core.nth.call(null,vec__24313_24396,1,null);var el_24399 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_24398);gin.ui.animator.slide.call(null,el_24399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_24397 * x_step_24375))),cljs.core.long$.call(null,(their_region_offset_y + (i_24397 * y_step_24376)))], null));
{
var G__24400 = cljs.core.next.call(null,seq__24308_24390__$1);
var G__24401 = null;
var G__24402 = 0;
var G__24403 = 0;
seq__24308_24377 = G__24400;
chunk__24309_24378 = G__24401;
count__24310_24379 = G__24402;
i__24311_24380 = G__24403;
continue;
}
}
} else
{}
}
break;
}
var seq__24314_24404 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_24373,opp_cards_es));var chunk__24315_24405 = null;var count__24316_24406 = 0;var i__24317_24407 = 0;while(true){
if((i__24317_24407 < count__24316_24406))
{var vec__24318_24408 = cljs.core._nth.call(null,chunk__24315_24405,i__24317_24407);var el_24409 = cljs.core.nth.call(null,vec__24318_24408,0,null);var es_24410 = cljs.core.nth.call(null,vec__24318_24408,1,null);var suit_24411 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_24410);var rank_24412 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_24410);gin.ui.dom_helpers.show_on_top.call(null,el_24409);
gin.ui.dom_helpers.set_card_class.call(null,el_24409,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_24411))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24411)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24412))].join('')));
{
var G__24413 = seq__24314_24404;
var G__24414 = chunk__24315_24405;
var G__24415 = count__24316_24406;
var G__24416 = (i__24317_24407 + 1);
seq__24314_24404 = G__24413;
chunk__24315_24405 = G__24414;
count__24316_24406 = G__24415;
i__24317_24407 = G__24416;
continue;
}
} else
{var temp__4092__auto___24417 = cljs.core.seq.call(null,seq__24314_24404);if(temp__4092__auto___24417)
{var seq__24314_24418__$1 = temp__4092__auto___24417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24314_24418__$1))
{var c__17462__auto___24419 = cljs.core.chunk_first.call(null,seq__24314_24418__$1);{
var G__24420 = cljs.core.chunk_rest.call(null,seq__24314_24418__$1);
var G__24421 = c__17462__auto___24419;
var G__24422 = cljs.core.count.call(null,c__17462__auto___24419);
var G__24423 = 0;
seq__24314_24404 = G__24420;
chunk__24315_24405 = G__24421;
count__24316_24406 = G__24422;
i__24317_24407 = G__24423;
continue;
}
} else
{var vec__24319_24424 = cljs.core.first.call(null,seq__24314_24418__$1);var el_24425 = cljs.core.nth.call(null,vec__24319_24424,0,null);var es_24426 = cljs.core.nth.call(null,vec__24319_24424,1,null);var suit_24427 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_24426);var rank_24428 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_24426);gin.ui.dom_helpers.show_on_top.call(null,el_24425);
gin.ui.dom_helpers.set_card_class.call(null,el_24425,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_24427))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24427)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24428))].join('')));
{
var G__24429 = cljs.core.next.call(null,seq__24314_24418__$1);
var G__24430 = null;
var G__24431 = 0;
var G__24432 = 0;
seq__24314_24404 = G__24429;
chunk__24315_24405 = G__24430;
count__24316_24406 = G__24431;
i__24317_24407 = G__24432;
continue;
}
}
} else
{}
}
break;
}
var seq__24320_24433 = cljs.core.seq.call(null,discard_cards_es);var chunk__24322_24434 = null;var count__24323_24435 = 0;var i__24324_24436 = 0;while(true){
if((i__24324_24436 < count__24323_24435))
{var discard_card_es_24437 = cljs.core._nth.call(null,chunk__24322_24434,i__24324_24436);var discard_card_el_24438 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_24437);var suit_24439 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_24437);var rank_24440 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_24437);gin.ui.dom_helpers.set_card_class.call(null,discard_card_el_24438,[cljs.core.str(cljs.core.name.call(null,suit_24439)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24440))].join(''));
gin.ui.animator.slide.call(null,discard_card_el_24438,discard_position);
{
var G__24441 = seq__24320_24433;
var G__24442 = chunk__24322_24434;
var G__24443 = count__24323_24435;
var G__24444 = (i__24324_24436 + 1);
seq__24320_24433 = G__24441;
chunk__24322_24434 = G__24442;
count__24323_24435 = G__24443;
i__24324_24436 = G__24444;
continue;
}
} else
{var temp__4092__auto___24445 = cljs.core.seq.call(null,seq__24320_24433);if(temp__4092__auto___24445)
{var seq__24320_24446__$1 = temp__4092__auto___24445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24320_24446__$1))
{var c__17462__auto___24447 = cljs.core.chunk_first.call(null,seq__24320_24446__$1);{
var G__24448 = cljs.core.chunk_rest.call(null,seq__24320_24446__$1);
var G__24449 = c__17462__auto___24447;
var G__24450 = cljs.core.count.call(null,c__17462__auto___24447);
var G__24451 = 0;
seq__24320_24433 = G__24448;
chunk__24322_24434 = G__24449;
count__24323_24435 = G__24450;
i__24324_24436 = G__24451;
continue;
}
} else
{var discard_card_es_24452 = cljs.core.first.call(null,seq__24320_24446__$1);var discard_card_el_24453 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_24452);var suit_24454 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_24452);var rank_24455 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_24452);gin.ui.dom_helpers.set_card_class.call(null,discard_card_el_24453,[cljs.core.str(cljs.core.name.call(null,suit_24454)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24455))].join(''));
gin.ui.animator.slide.call(null,discard_card_el_24453,discard_position);
{
var G__24456 = cljs.core.next.call(null,seq__24320_24446__$1);
var G__24457 = null;
var G__24458 = 0;
var G__24459 = 0;
seq__24320_24433 = G__24456;
chunk__24322_24434 = G__24457;
count__24323_24435 = G__24458;
i__24324_24436 = G__24459;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___24460 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___24460))
{var discard_card_el_24461 = temp__4092__auto___24460;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,opp_cards_es),10))
{gin.ui.dom_helpers.show_on_top.call(null,discard_card_el_24461);
} else
{}
if(us_pick_card)
{gin.ui.game_panel.set_drag_handler.call(null,discard_card_el_24461,gin.ui.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.ui.game_panel.set_drag_handler.call(null,discard_card_el_24461,gin.ui.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if(cljs.core._EQ_.call(null,pile_position,gin.ui.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,our_cards_es))),gin.ui.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,our_cards_es)))))
{var vec__24326_24462 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,our_cards_es)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_24463 = cljs.core.nth.call(null,vec__24326_24462,0,null);var y_step_24464 = cljs.core.nth.call(null,vec__24326_24462,1,null);var seq__24327_24465 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),our_cards_es));var chunk__24328_24466 = null;var count__24329_24467 = 0;var i__24330_24468 = 0;while(true){
if((i__24330_24468 < count__24329_24467))
{var vec__24331_24469 = cljs.core._nth.call(null,chunk__24328_24466,i__24330_24468);var i_24470 = cljs.core.nth.call(null,vec__24331_24469,0,null);var e_24471 = cljs.core.nth.call(null,vec__24331_24469,1,null);var el_24472 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_24471);var suit_24473 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_24471);var rank_24474 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_24471);gin.ui.dom_helpers.set_card_class.call(null,el_24472,[cljs.core.str(cljs.core.name.call(null,suit_24473)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24474))].join(''));
gin.ui.animator.slide.call(null,el_24472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_24470 * x_step_24463))),cljs.core.long$.call(null,(our_region_offset_y + (i_24470 * y_step_24464)))], null));
{
var G__24475 = seq__24327_24465;
var G__24476 = chunk__24328_24466;
var G__24477 = count__24329_24467;
var G__24478 = (i__24330_24468 + 1);
seq__24327_24465 = G__24475;
chunk__24328_24466 = G__24476;
count__24329_24467 = G__24477;
i__24330_24468 = G__24478;
continue;
}
} else
{var temp__4092__auto___24479 = cljs.core.seq.call(null,seq__24327_24465);if(temp__4092__auto___24479)
{var seq__24327_24480__$1 = temp__4092__auto___24479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24327_24480__$1))
{var c__17462__auto___24481 = cljs.core.chunk_first.call(null,seq__24327_24480__$1);{
var G__24482 = cljs.core.chunk_rest.call(null,seq__24327_24480__$1);
var G__24483 = c__17462__auto___24481;
var G__24484 = cljs.core.count.call(null,c__17462__auto___24481);
var G__24485 = 0;
seq__24327_24465 = G__24482;
chunk__24328_24466 = G__24483;
count__24329_24467 = G__24484;
i__24330_24468 = G__24485;
continue;
}
} else
{var vec__24332_24486 = cljs.core.first.call(null,seq__24327_24480__$1);var i_24487 = cljs.core.nth.call(null,vec__24332_24486,0,null);var e_24488 = cljs.core.nth.call(null,vec__24332_24486,1,null);var el_24489 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_24488);var suit_24490 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_24488);var rank_24491 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_24488);gin.ui.dom_helpers.set_card_class.call(null,el_24489,[cljs.core.str(cljs.core.name.call(null,suit_24490)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24491))].join(''));
gin.ui.animator.slide.call(null,el_24489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_24487 * x_step_24463))),cljs.core.long$.call(null,(our_region_offset_y + (i_24487 * y_step_24464)))], null));
{
var G__24492 = cljs.core.next.call(null,seq__24327_24480__$1);
var G__24493 = null;
var G__24494 = 0;
var G__24495 = 0;
seq__24327_24465 = G__24492;
chunk__24328_24466 = G__24493;
count__24329_24467 = G__24494;
i__24330_24468 = G__24495;
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
var seq__24333_24496 = cljs.core.seq.call(null,our_cards_es);var chunk__24334_24497 = null;var count__24335_24498 = 0;var i__24336_24499 = 0;while(true){
if((i__24336_24499 < count__24335_24498))
{var our_card_es_24500 = cljs.core._nth.call(null,chunk__24334_24497,i__24336_24499);var our_card_el_24501 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_24500);var suit_24502 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_24500);var rank_24503 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_24500);gin.ui.dom_helpers.set_card_class.call(null,our_card_el_24501,((cljs.core._EQ_.call(null,suit_24502,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24502)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24503))].join('')));
gin.ui.game_panel.set_drag_handler.call(null,our_card_el_24501,gin.ui.game_panel.home_discard_handler.call(null,conn));
{
var G__24504 = seq__24333_24496;
var G__24505 = chunk__24334_24497;
var G__24506 = count__24335_24498;
var G__24507 = (i__24336_24499 + 1);
seq__24333_24496 = G__24504;
chunk__24334_24497 = G__24505;
count__24335_24498 = G__24506;
i__24336_24499 = G__24507;
continue;
}
} else
{var temp__4092__auto___24508 = cljs.core.seq.call(null,seq__24333_24496);if(temp__4092__auto___24508)
{var seq__24333_24509__$1 = temp__4092__auto___24508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24333_24509__$1))
{var c__17462__auto___24510 = cljs.core.chunk_first.call(null,seq__24333_24509__$1);{
var G__24511 = cljs.core.chunk_rest.call(null,seq__24333_24509__$1);
var G__24512 = c__17462__auto___24510;
var G__24513 = cljs.core.count.call(null,c__17462__auto___24510);
var G__24514 = 0;
seq__24333_24496 = G__24511;
chunk__24334_24497 = G__24512;
count__24335_24498 = G__24513;
i__24336_24499 = G__24514;
continue;
}
} else
{var our_card_es_24515 = cljs.core.first.call(null,seq__24333_24509__$1);var our_card_el_24516 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_24515);var suit_24517 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_24515);var rank_24518 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_24515);gin.ui.dom_helpers.set_card_class.call(null,our_card_el_24516,((cljs.core._EQ_.call(null,suit_24517,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_24517)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_24518))].join('')));
gin.ui.game_panel.set_drag_handler.call(null,our_card_el_24516,gin.ui.game_panel.home_discard_handler.call(null,conn));
{
var G__24519 = cljs.core.next.call(null,seq__24333_24509__$1);
var G__24520 = null;
var G__24521 = 0;
var G__24522 = 0;
seq__24333_24496 = G__24519;
chunk__24334_24497 = G__24520;
count__24335_24498 = G__24521;
i__24336_24499 = G__24522;
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
var seq__24337_24523 = cljs.core.seq.call(null,our_cards_es);var chunk__24338_24524 = null;var count__24339_24525 = 0;var i__24340_24526 = 0;while(true){
if((i__24340_24526 < count__24339_24525))
{var our_card_es_24527 = cljs.core._nth.call(null,chunk__24338_24524,i__24340_24526);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_24527),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__24528 = seq__24337_24523;
var G__24529 = chunk__24338_24524;
var G__24530 = count__24339_24525;
var G__24531 = (i__24340_24526 + 1);
seq__24337_24523 = G__24528;
chunk__24338_24524 = G__24529;
count__24339_24525 = G__24530;
i__24340_24526 = G__24531;
continue;
}
} else
{var temp__4092__auto___24532 = cljs.core.seq.call(null,seq__24337_24523);if(temp__4092__auto___24532)
{var seq__24337_24533__$1 = temp__4092__auto___24532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24337_24533__$1))
{var c__17462__auto___24534 = cljs.core.chunk_first.call(null,seq__24337_24533__$1);{
var G__24535 = cljs.core.chunk_rest.call(null,seq__24337_24533__$1);
var G__24536 = c__17462__auto___24534;
var G__24537 = cljs.core.count.call(null,c__17462__auto___24534);
var G__24538 = 0;
seq__24337_24523 = G__24535;
chunk__24338_24524 = G__24536;
count__24339_24525 = G__24537;
i__24340_24526 = G__24538;
continue;
}
} else
{var our_card_es_24539 = cljs.core.first.call(null,seq__24337_24533__$1);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_24539),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__24540 = cljs.core.next.call(null,seq__24337_24533__$1);
var G__24541 = null;
var G__24542 = 0;
var G__24543 = 0;
seq__24337_24523 = G__24540;
chunk__24338_24524 = G__24541;
count__24339_24525 = G__24542;
i__24340_24526 = G__24543;
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
var seq__24341_24544 = cljs.core.seq.call(null,our_cards_es);var chunk__24342_24545 = null;var count__24343_24546 = 0;var i__24344_24547 = 0;while(true){
if((i__24344_24547 < count__24343_24546))
{var our_card_es_24548 = cljs.core._nth.call(null,chunk__24342_24545,i__24344_24547);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_24548),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__24549 = seq__24341_24544;
var G__24550 = chunk__24342_24545;
var G__24551 = count__24343_24546;
var G__24552 = (i__24344_24547 + 1);
seq__24341_24544 = G__24549;
chunk__24342_24545 = G__24550;
count__24343_24546 = G__24551;
i__24344_24547 = G__24552;
continue;
}
} else
{var temp__4092__auto___24553 = cljs.core.seq.call(null,seq__24341_24544);if(temp__4092__auto___24553)
{var seq__24341_24554__$1 = temp__4092__auto___24553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24341_24554__$1))
{var c__17462__auto___24555 = cljs.core.chunk_first.call(null,seq__24341_24554__$1);{
var G__24556 = cljs.core.chunk_rest.call(null,seq__24341_24554__$1);
var G__24557 = c__17462__auto___24555;
var G__24558 = cljs.core.count.call(null,c__17462__auto___24555);
var G__24559 = 0;
seq__24341_24544 = G__24556;
chunk__24342_24545 = G__24557;
count__24343_24546 = G__24558;
i__24344_24547 = G__24559;
continue;
}
} else
{var our_card_es_24560 = cljs.core.first.call(null,seq__24341_24554__$1);gin.ui.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_24560),gin.ui.game_panel.home_region_handler.call(null,conn));
{
var G__24561 = cljs.core.next.call(null,seq__24341_24554__$1);
var G__24562 = null;
var G__24563 = 0;
var G__24564 = 0;
seq__24341_24544 = G__24561;
chunk__24342_24545 = G__24562;
count__24343_24546 = G__24563;
i__24344_24547 = G__24564;
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
{var result = temp__4092__auto__;gin.ui.game_panel.set_msg.call(null,(function (){var pred__24345 = cljs.core._EQ_;var expr__24346 = result;if(cljs.core.truth_(pred__24345.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__24346)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__24345.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__24346)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__24345.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__24346)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__24345.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__24346)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__24345.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__24346)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24346)].join('')));
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
gin.ui.game_panel.draw_game = (function draw_game(report,conn){var map__24568 = report;var map__24568__$1 = ((cljs.core.seq_QMARK_.call(null,map__24568))?cljs.core.apply.call(null,cljs.core.hash_map,map__24568):map__24568);var db_after = cljs.core.get.call(null,map__24568__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__24569 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__24569,0,null);var vec__24570 = cljs.core.nth.call(null,vec__24569,1,null);var game_id = cljs.core.nth.call(null,vec__24570,0,null);var args = cljs.core.nthnext.call(null,vec__24570,1);if(cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"error","error",1110689146)))
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
