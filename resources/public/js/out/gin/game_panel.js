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
gin.game_panel.in_rect = (function in_rect(rect,p__43470){var vec__43472 = p__43470;var x = cljs.core.nth.call(null,vec__43472,0,null);var y = cljs.core.nth.call(null,vec__43472,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
});
gin.game_panel.in_our_region = (function in_our_region(x,y){var our_region_bounds = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"our_region"));return gin.game_panel.in_rect.call(null,our_region_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.in_discard_pile = (function in_discard_pile(x,y){var discard_bounds = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));return gin.game_panel.in_rect.call(null,discard_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
gin.game_panel.pile_position = (function pile_position(){var vec__43474 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"pile"));var x = cljs.core.nth.call(null,vec__43474,0,null);var y = cljs.core.nth.call(null,vec__43474,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 4),(y + 4)], null);
});
gin.game_panel.discard_position = (function discard_position(){var vec__43476 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"discard_pile"));var x = cljs.core.nth.call(null,vec__43476,0,null);var y = cljs.core.nth.call(null,vec__43476,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12 + x),(12 + y)], null);
});
gin.game_panel.their_region_position = (function their_region_position(){var vec__43478 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"their_region"));var x = cljs.core.nth.call(null,vec__43478,0,null);var y = cljs.core.nth.call(null,vec__43478,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
});
gin.game_panel.our_region_position = (function our_region_position(){var vec__43480 = gin.dom_helpers.get_position.call(null,gin.dom_helpers.get_element.call(null,"our_region"));var x = cljs.core.nth.call(null,vec__43480,0,null);var y = cljs.core.nth.call(null,vec__43480,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10 + x),(10 + y)], null);
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__43482 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__43482,0,null);var y = cljs.core.nth.call(null,vec__43482,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__43484 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__43484,0,null);var y = cljs.core.nth.call(null,vec__43484,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__43486 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__43486,0,null);var y = cljs.core.nth.call(null,vec__43486,1,null);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.game_panel.discard_pick_handler = (function discard_pick_handler(conn){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),new cljs.core.Keyword(null,"hand","hand",1017099233),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),(function (card_id,event){return event.preventDefault();
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__43488 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__43488,0,null);var y = cljs.core.nth.call(null,vec__43488,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag","drag",1016996006),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__43490 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__43490,0,null);var y = cljs.core.nth.call(null,vec__43490,1,null);if(gin.game_panel.in_our_region.call(null,x,y))
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
}),new cljs.core.Keyword(null,"drag-end","drag-end",4466041908),(function (card_id,event){var card_el = gin.dom_helpers.get_element.call(null,card_id);var vec__43492 = gin.dom_helpers.get_position.call(null,card_el);var x = cljs.core.nth.call(null,vec__43492,0,null);var y = cljs.core.nth.call(null,vec__43492,1,null);gin.dom_helpers.add_remove_class.call(null,card_el,"cursor_hand","cursor_drag");
if(gin.game_panel.in_our_region.call(null,x,y))
{return null;
} else
{return gin.animator.slide.call(null,card_el,card_el.drag_origin);
}
})], null);
});
gin.game_panel.draw_table = (function draw_table(conn){var G__43517_43541 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__43517_43541,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__43517_43541,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__43517_43541,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = gin.dom_helpers.get_bounds.call(null,gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__43518 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__43518,0,null);var pile_y = cljs.core.nth.call(null,vec__43518,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__43518,pile_x,pile_y){
return (function iter__43519(s__43520){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__43518,pile_x,pile_y){
return (function (){var s__43520__$1 = s__43520;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43520__$1);if(temp__4092__auto__)
{var s__43520__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43520__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__43520__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__43522 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__43521 = 0;while(true){
if((i__43521 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__43521);cljs.core.chunk_append.call(null,b__43522,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__43525 = (new goog.fx.Dragger(card_el));G__43525.setLimits(container_wrap);
return G__43525;
})();card_el.dispose = ((function (i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__43521,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43522,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__43542 = (i__43521 + 1);
i__43521 = G__43542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43522),iter__43519.call(null,cljs.core.chunk_rest.call(null,s__43520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43522),null);
}
} else
{var i = cljs.core.first.call(null,s__43520__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__43526 = (new goog.fx.Dragger(card_el));G__43526.setLimits(container_wrap);
return G__43526;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__43520__$2,temp__4092__auto__,container_wrap,vec__43518,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__43519.call(null,cljs.core.rest.call(null,s__43520__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__43518,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__43518,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__43527_43543 = cljs.core.seq.call(null,cards);var chunk__43528_43544 = null;var count__43529_43545 = 0;var i__43530_43546 = 0;while(true){
if((i__43530_43546 < count__43529_43545))
{var map__43531_43547 = cljs.core._nth.call(null,chunk__43528_43544,i__43530_43546);var map__43531_43548__$1 = ((cljs.core.seq_QMARK_.call(null,map__43531_43547))?cljs.core.apply.call(null,cljs.core.hash_map,map__43531_43547):map__43531_43547);var idx_43549 = cljs.core.get.call(null,map__43531_43548__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_43550 = cljs.core.get.call(null,map__43531_43548__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_43550.anim_idx = idx_43549;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_43550);
{
var G__43551 = seq__43527_43543;
var G__43552 = chunk__43528_43544;
var G__43553 = count__43529_43545;
var G__43554 = (i__43530_43546 + 1);
seq__43527_43543 = G__43551;
chunk__43528_43544 = G__43552;
count__43529_43545 = G__43553;
i__43530_43546 = G__43554;
continue;
}
} else
{var temp__4092__auto___43555 = cljs.core.seq.call(null,seq__43527_43543);if(temp__4092__auto___43555)
{var seq__43527_43556__$1 = temp__4092__auto___43555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43527_43556__$1))
{var c__17389__auto___43557 = cljs.core.chunk_first.call(null,seq__43527_43556__$1);{
var G__43558 = cljs.core.chunk_rest.call(null,seq__43527_43556__$1);
var G__43559 = c__17389__auto___43557;
var G__43560 = cljs.core.count.call(null,c__17389__auto___43557);
var G__43561 = 0;
seq__43527_43543 = G__43558;
chunk__43528_43544 = G__43559;
count__43529_43545 = G__43560;
i__43530_43546 = G__43561;
continue;
}
} else
{var map__43532_43562 = cljs.core.first.call(null,seq__43527_43556__$1);var map__43532_43563__$1 = ((cljs.core.seq_QMARK_.call(null,map__43532_43562))?cljs.core.apply.call(null,cljs.core.hash_map,map__43532_43562):map__43532_43562);var idx_43564 = cljs.core.get.call(null,map__43532_43563__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_43565 = cljs.core.get.call(null,map__43532_43563__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_43565.anim_idx = idx_43564;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_43565);
{
var G__43566 = cljs.core.next.call(null,seq__43527_43556__$1);
var G__43567 = null;
var G__43568 = 0;
var G__43569 = 0;
seq__43527_43543 = G__43566;
chunk__43528_43544 = G__43567;
count__43529_43545 = G__43568;
i__43530_43546 = G__43569;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__43533(s__43534){return (new cljs.core.LazySeq(null,(function (){var s__43534__$1 = s__43534;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43534__$1);if(temp__4092__auto__)
{var s__43534__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43534__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__43534__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__43536 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__43535 = 0;while(true){
if((i__43535 < size__17357__auto__))
{var map__43539 = cljs.core._nth.call(null,c__17356__auto__,i__43535);var map__43539__$1 = ((cljs.core.seq_QMARK_.call(null,map__43539))?cljs.core.apply.call(null,cljs.core.hash_map,map__43539):map__43539);var card_el = cljs.core.get.call(null,map__43539__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__43539__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__43539__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__43536,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__43570 = (i__43535 + 1);
i__43535 = G__43570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43536),iter__43533.call(null,cljs.core.chunk_rest.call(null,s__43534__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43536),null);
}
} else
{var map__43540 = cljs.core.first.call(null,s__43534__$2);var map__43540__$1 = ((cljs.core.seq_QMARK_.call(null,map__43540))?cljs.core.apply.call(null,cljs.core.hash_map,map__43540):map__43540);var card_el = cljs.core.get.call(null,map__43540__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__43540__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__43540__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("dom","el","dom/el",1020278571),card_el,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__43533.call(null,cljs.core.rest.call(null,s__43534__$2)));
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
return (function (p1__43571_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43571_SHARP_], null));
});})(game,_))
),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var our_cards_es = cljs.core.map.call(null,((function (game,_,opp_cards_el){
return (function (p1__43572_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43572_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__43583 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__43583,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__43583,1,null);var vec__43584 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__43584,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__43584,1,null);var their_deal = cljs.core.map.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y){
return (function (idx,el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4))], null)], null);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.map.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__43586){var map__43587 = p__43586;var map__43587__$1 = ((cljs.core.seq_QMARK_.call(null,map__43587))?cljs.core.apply.call(null,cljs.core.hash_map,map__43587):map__43587);var id = cljs.core.get.call(null,map__43587__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var el = cljs.core.get.call(null,map__43587__$1,new cljs.core.Keyword("dom","el","dom/el",1020278571));var suit = cljs.core.get.call(null,map__43587__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__43587__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null),((function (map__43587,map__43587__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(map__43587,map__43587__$1,id,el,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal))
], null);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__43585 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__43585,0,null);var second_deal = cljs.core.nth.call(null,vec__43585,1,null);var discard_deal = (function (){var discard_el = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_el,gin.game_panel.discard_position.call(null),((function (discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,discard_el,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard))),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard)))].join(''));
return gin.dom_helpers.set_timeout.call(null,((function (discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal){
return (function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.player_ready,new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)], null)], null));
});})(discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal))
,300);
});})(discard_el,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal))
], null);
})();var actions = cljs.core.concat.call(null,first_deal,second_deal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard_deal], null));var step = ((function (game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal,discard_deal,actions){
return (function step(p__43588){var vec__43591 = p__43588;var action = cljs.core.nth.call(null,vec__43591,0,null);var actions__$1 = cljs.core.nthnext.call(null,vec__43591,1);if(cljs.core.truth_(action))
{var vec__43592 = action;var el = cljs.core.nth.call(null,vec__43592,0,null);var to = cljs.core.nth.call(null,vec__43592,1,null);var f = cljs.core.nth.call(null,vec__43592,2,null);gin.dom_helpers.show_on_top.call(null,el);
return gin.animator.slide.call(null,el,to,((function (vec__43592,el,to,f,vec__43591,action,actions__$1,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal,discard_deal,actions){
return (function (){if(cljs.core.truth_(f))
{f.call(null);
} else
{}
return step.call(null,actions__$1);
});})(vec__43592,el,to,f,vec__43591,action,actions__$1,game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal,discard_deal,actions))
);
} else
{return null;
}
});})(game,_,opp_cards_el,our_cards_es,discard,vec__43583,their_region_offset_x,their_region_offset_y,vec__43584,our_region_offset_x,our_region_offset_y,their_deal,our_deal,vec__43585,first_deal,second_deal,discard_deal,actions))
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
return (function (p1__43593_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43593_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__43594_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43594_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__43595_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43595_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__43596_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43596_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__43646 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__43646,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__43646,1,null);var vec__43647 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__43647,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__43647,1,null);var pile_position = gin.game_panel.pile_position.call(null);var discard_position = gin.game_panel.discard_position.call(null);var seq__43648_43695 = cljs.core.seq.call(null,pile_cards_es);var chunk__43650_43696 = null;var count__43651_43697 = 0;var i__43652_43698 = 0;while(true){
if((i__43652_43698 < count__43651_43697))
{var pile_card_es_43699 = cljs.core._nth.call(null,chunk__43650_43696,i__43652_43698);var pile_card_el_43700 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_43699);gin.dom_helpers.set_card_class.call(null,pile_card_el_43700,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_43700);
gin.animator.slide.call(null,pile_card_el_43700,pile_position);
{
var G__43701 = seq__43648_43695;
var G__43702 = chunk__43650_43696;
var G__43703 = count__43651_43697;
var G__43704 = (i__43652_43698 + 1);
seq__43648_43695 = G__43701;
chunk__43650_43696 = G__43702;
count__43651_43697 = G__43703;
i__43652_43698 = G__43704;
continue;
}
} else
{var temp__4092__auto___43705 = cljs.core.seq.call(null,seq__43648_43695);if(temp__4092__auto___43705)
{var seq__43648_43706__$1 = temp__4092__auto___43705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43648_43706__$1))
{var c__17389__auto___43707 = cljs.core.chunk_first.call(null,seq__43648_43706__$1);{
var G__43708 = cljs.core.chunk_rest.call(null,seq__43648_43706__$1);
var G__43709 = c__17389__auto___43707;
var G__43710 = cljs.core.count.call(null,c__17389__auto___43707);
var G__43711 = 0;
seq__43648_43695 = G__43708;
chunk__43650_43696 = G__43709;
count__43651_43697 = G__43710;
i__43652_43698 = G__43711;
continue;
}
} else
{var pile_card_es_43712 = cljs.core.first.call(null,seq__43648_43706__$1);var pile_card_el_43713 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(pile_card_es_43712);gin.dom_helpers.set_card_class.call(null,pile_card_el_43713,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_43713);
gin.animator.slide.call(null,pile_card_el_43713,pile_position);
{
var G__43714 = cljs.core.next.call(null,seq__43648_43706__$1);
var G__43715 = null;
var G__43716 = 0;
var G__43717 = 0;
seq__43648_43695 = G__43714;
chunk__43650_43696 = G__43715;
count__43651_43697 = G__43716;
i__43652_43698 = G__43717;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___43718 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pile_cards_es));if(cljs.core.truth_(temp__4092__auto___43718))
{var pile_card_el_43719 = temp__4092__auto___43718;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_43719,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_43719,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_43720 = cljs.core.map.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571),opp_cards_es);var vec__43654_43721 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_43720)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_43722 = cljs.core.nth.call(null,vec__43654_43721,0,null);var y_step_43723 = cljs.core.nth.call(null,vec__43654_43721,1,null);console.log("opp reg");
var seq__43655_43724 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__43656_43725 = null;var count__43657_43726 = 0;var i__43658_43727 = 0;while(true){
if((i__43658_43727 < count__43657_43726))
{var vec__43659_43728 = cljs.core._nth.call(null,chunk__43656_43725,i__43658_43727);var i_43729 = cljs.core.nth.call(null,vec__43659_43728,0,null);var e_43730 = cljs.core.nth.call(null,vec__43659_43728,1,null);var el_43731 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_43730);gin.animator.slide.call(null,el_43731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_43729 * x_step_43722))),cljs.core.long$.call(null,(their_region_offset_y + (i_43729 * y_step_43723)))], null));
{
var G__43732 = seq__43655_43724;
var G__43733 = chunk__43656_43725;
var G__43734 = count__43657_43726;
var G__43735 = (i__43658_43727 + 1);
seq__43655_43724 = G__43732;
chunk__43656_43725 = G__43733;
count__43657_43726 = G__43734;
i__43658_43727 = G__43735;
continue;
}
} else
{var temp__4092__auto___43736 = cljs.core.seq.call(null,seq__43655_43724);if(temp__4092__auto___43736)
{var seq__43655_43737__$1 = temp__4092__auto___43736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43655_43737__$1))
{var c__17389__auto___43738 = cljs.core.chunk_first.call(null,seq__43655_43737__$1);{
var G__43739 = cljs.core.chunk_rest.call(null,seq__43655_43737__$1);
var G__43740 = c__17389__auto___43738;
var G__43741 = cljs.core.count.call(null,c__17389__auto___43738);
var G__43742 = 0;
seq__43655_43724 = G__43739;
chunk__43656_43725 = G__43740;
count__43657_43726 = G__43741;
i__43658_43727 = G__43742;
continue;
}
} else
{var vec__43660_43743 = cljs.core.first.call(null,seq__43655_43737__$1);var i_43744 = cljs.core.nth.call(null,vec__43660_43743,0,null);var e_43745 = cljs.core.nth.call(null,vec__43660_43743,1,null);var el_43746 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_43745);gin.animator.slide.call(null,el_43746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_43744 * x_step_43722))),cljs.core.long$.call(null,(their_region_offset_y + (i_43744 * y_step_43723)))], null));
{
var G__43747 = cljs.core.next.call(null,seq__43655_43737__$1);
var G__43748 = null;
var G__43749 = 0;
var G__43750 = 0;
seq__43655_43724 = G__43747;
chunk__43656_43725 = G__43748;
count__43657_43726 = G__43749;
i__43658_43727 = G__43750;
continue;
}
}
} else
{}
}
break;
}
var seq__43661_43751 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_43720,opp_cards_es));var chunk__43662_43752 = null;var count__43663_43753 = 0;var i__43664_43754 = 0;while(true){
if((i__43664_43754 < count__43663_43753))
{var vec__43665_43755 = cljs.core._nth.call(null,chunk__43662_43752,i__43664_43754);var el_43756 = cljs.core.nth.call(null,vec__43665_43755,0,null);var es_43757 = cljs.core.nth.call(null,vec__43665_43755,1,null);var suit_43758 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_43757);var rank_43759 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_43757);gin.dom_helpers.show_on_top.call(null,el_43756);
gin.dom_helpers.set_card_class.call(null,el_43756,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_43758))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43758)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43759))].join('')));
{
var G__43760 = seq__43661_43751;
var G__43761 = chunk__43662_43752;
var G__43762 = count__43663_43753;
var G__43763 = (i__43664_43754 + 1);
seq__43661_43751 = G__43760;
chunk__43662_43752 = G__43761;
count__43663_43753 = G__43762;
i__43664_43754 = G__43763;
continue;
}
} else
{var temp__4092__auto___43764 = cljs.core.seq.call(null,seq__43661_43751);if(temp__4092__auto___43764)
{var seq__43661_43765__$1 = temp__4092__auto___43764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43661_43765__$1))
{var c__17389__auto___43766 = cljs.core.chunk_first.call(null,seq__43661_43765__$1);{
var G__43767 = cljs.core.chunk_rest.call(null,seq__43661_43765__$1);
var G__43768 = c__17389__auto___43766;
var G__43769 = cljs.core.count.call(null,c__17389__auto___43766);
var G__43770 = 0;
seq__43661_43751 = G__43767;
chunk__43662_43752 = G__43768;
count__43663_43753 = G__43769;
i__43664_43754 = G__43770;
continue;
}
} else
{var vec__43666_43771 = cljs.core.first.call(null,seq__43661_43765__$1);var el_43772 = cljs.core.nth.call(null,vec__43666_43771,0,null);var es_43773 = cljs.core.nth.call(null,vec__43666_43771,1,null);var suit_43774 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_43773);var rank_43775 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_43773);gin.dom_helpers.show_on_top.call(null,el_43772);
gin.dom_helpers.set_card_class.call(null,el_43772,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_43774))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43774)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43775))].join('')));
{
var G__43776 = cljs.core.next.call(null,seq__43661_43765__$1);
var G__43777 = null;
var G__43778 = 0;
var G__43779 = 0;
seq__43661_43751 = G__43776;
chunk__43662_43752 = G__43777;
count__43663_43753 = G__43778;
i__43664_43754 = G__43779;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__43667_43780 = cljs.core.seq.call(null,discard_cards_es);var chunk__43669_43781 = null;var count__43670_43782 = 0;var i__43671_43783 = 0;while(true){
if((i__43671_43783 < count__43670_43782))
{var discard_card_es_43784 = cljs.core._nth.call(null,chunk__43669_43781,i__43671_43783);var discard_card_el_43785 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_43784);var suit_43786 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_43784);var rank_43787 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_43784);gin.dom_helpers.set_card_class.call(null,discard_card_el_43785,[cljs.core.str(cljs.core.name.call(null,suit_43786)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43787))].join(''));
gin.animator.slide.call(null,discard_card_el_43785,discard_position);
{
var G__43788 = seq__43667_43780;
var G__43789 = chunk__43669_43781;
var G__43790 = count__43670_43782;
var G__43791 = (i__43671_43783 + 1);
seq__43667_43780 = G__43788;
chunk__43669_43781 = G__43789;
count__43670_43782 = G__43790;
i__43671_43783 = G__43791;
continue;
}
} else
{var temp__4092__auto___43792 = cljs.core.seq.call(null,seq__43667_43780);if(temp__4092__auto___43792)
{var seq__43667_43793__$1 = temp__4092__auto___43792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43667_43793__$1))
{var c__17389__auto___43794 = cljs.core.chunk_first.call(null,seq__43667_43793__$1);{
var G__43795 = cljs.core.chunk_rest.call(null,seq__43667_43793__$1);
var G__43796 = c__17389__auto___43794;
var G__43797 = cljs.core.count.call(null,c__17389__auto___43794);
var G__43798 = 0;
seq__43667_43780 = G__43795;
chunk__43669_43781 = G__43796;
count__43670_43782 = G__43797;
i__43671_43783 = G__43798;
continue;
}
} else
{var discard_card_es_43799 = cljs.core.first.call(null,seq__43667_43793__$1);var discard_card_el_43800 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(discard_card_es_43799);var suit_43801 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_43799);var rank_43802 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_43799);gin.dom_helpers.set_card_class.call(null,discard_card_el_43800,[cljs.core.str(cljs.core.name.call(null,suit_43801)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43802))].join(''));
gin.animator.slide.call(null,discard_card_el_43800,discard_position);
{
var G__43803 = cljs.core.next.call(null,seq__43667_43793__$1);
var G__43804 = null;
var G__43805 = 0;
var G__43806 = 0;
seq__43667_43780 = G__43803;
chunk__43669_43781 = G__43804;
count__43670_43782 = G__43805;
i__43671_43783 = G__43806;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___43807 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,discard_cards_es));if(cljs.core.truth_(temp__4092__auto___43807))
{var discard_card_el_43808 = temp__4092__auto___43807;gin.dom_helpers.show_on_top.call(null,discard_card_el_43808);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_43808,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_43808,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if(cljs.core._EQ_.call(null,pile_position,gin.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,our_cards_es))),gin.dom_helpers.get_position.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,our_cards_es)))))
{var vec__43673_43809 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,our_cards_es)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_43810 = cljs.core.nth.call(null,vec__43673_43809,0,null);var y_step_43811 = cljs.core.nth.call(null,vec__43673_43809,1,null);var seq__43674_43812 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),our_cards_es));var chunk__43675_43813 = null;var count__43676_43814 = 0;var i__43677_43815 = 0;while(true){
if((i__43677_43815 < count__43676_43814))
{var vec__43678_43816 = cljs.core._nth.call(null,chunk__43675_43813,i__43677_43815);var i_43817 = cljs.core.nth.call(null,vec__43678_43816,0,null);var e_43818 = cljs.core.nth.call(null,vec__43678_43816,1,null);var el_43819 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_43818);var suit_43820 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_43818);var rank_43821 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_43818);gin.dom_helpers.set_card_class.call(null,el_43819,[cljs.core.str(cljs.core.name.call(null,suit_43820)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43821))].join(''));
gin.animator.slide.call(null,el_43819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_43817 * x_step_43810))),cljs.core.long$.call(null,(our_region_offset_y + (i_43817 * y_step_43811)))], null));
{
var G__43822 = seq__43674_43812;
var G__43823 = chunk__43675_43813;
var G__43824 = count__43676_43814;
var G__43825 = (i__43677_43815 + 1);
seq__43674_43812 = G__43822;
chunk__43675_43813 = G__43823;
count__43676_43814 = G__43824;
i__43677_43815 = G__43825;
continue;
}
} else
{var temp__4092__auto___43826 = cljs.core.seq.call(null,seq__43674_43812);if(temp__4092__auto___43826)
{var seq__43674_43827__$1 = temp__4092__auto___43826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43674_43827__$1))
{var c__17389__auto___43828 = cljs.core.chunk_first.call(null,seq__43674_43827__$1);{
var G__43829 = cljs.core.chunk_rest.call(null,seq__43674_43827__$1);
var G__43830 = c__17389__auto___43828;
var G__43831 = cljs.core.count.call(null,c__17389__auto___43828);
var G__43832 = 0;
seq__43674_43812 = G__43829;
chunk__43675_43813 = G__43830;
count__43676_43814 = G__43831;
i__43677_43815 = G__43832;
continue;
}
} else
{var vec__43679_43833 = cljs.core.first.call(null,seq__43674_43827__$1);var i_43834 = cljs.core.nth.call(null,vec__43679_43833,0,null);var e_43835 = cljs.core.nth.call(null,vec__43679_43833,1,null);var el_43836 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(e_43835);var suit_43837 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(e_43835);var rank_43838 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(e_43835);gin.dom_helpers.set_card_class.call(null,el_43836,[cljs.core.str(cljs.core.name.call(null,suit_43837)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43838))].join(''));
gin.animator.slide.call(null,el_43836,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(our_region_offset_x + (i_43834 * x_step_43810))),cljs.core.long$.call(null,(our_region_offset_y + (i_43834 * y_step_43811)))], null));
{
var G__43839 = cljs.core.next.call(null,seq__43674_43827__$1);
var G__43840 = null;
var G__43841 = 0;
var G__43842 = 0;
seq__43674_43812 = G__43839;
chunk__43675_43813 = G__43840;
count__43676_43814 = G__43841;
i__43677_43815 = G__43842;
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
var seq__43680_43843 = cljs.core.seq.call(null,our_cards_es);var chunk__43681_43844 = null;var count__43682_43845 = 0;var i__43683_43846 = 0;while(true){
if((i__43683_43846 < count__43682_43845))
{var our_card_es_43847 = cljs.core._nth.call(null,chunk__43681_43844,i__43683_43846);var our_card_el_43848 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_43847);var suit_43849 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_43847);var rank_43850 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_43847);gin.dom_helpers.set_card_class.call(null,our_card_el_43848,((cljs.core._EQ_.call(null,suit_43849,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43849)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43850))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_43848,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__43851 = seq__43680_43843;
var G__43852 = chunk__43681_43844;
var G__43853 = count__43682_43845;
var G__43854 = (i__43683_43846 + 1);
seq__43680_43843 = G__43851;
chunk__43681_43844 = G__43852;
count__43682_43845 = G__43853;
i__43683_43846 = G__43854;
continue;
}
} else
{var temp__4092__auto___43855 = cljs.core.seq.call(null,seq__43680_43843);if(temp__4092__auto___43855)
{var seq__43680_43856__$1 = temp__4092__auto___43855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43680_43856__$1))
{var c__17389__auto___43857 = cljs.core.chunk_first.call(null,seq__43680_43856__$1);{
var G__43858 = cljs.core.chunk_rest.call(null,seq__43680_43856__$1);
var G__43859 = c__17389__auto___43857;
var G__43860 = cljs.core.count.call(null,c__17389__auto___43857);
var G__43861 = 0;
seq__43680_43843 = G__43858;
chunk__43681_43844 = G__43859;
count__43682_43845 = G__43860;
i__43683_43846 = G__43861;
continue;
}
} else
{var our_card_es_43862 = cljs.core.first.call(null,seq__43680_43856__$1);var our_card_el_43863 = new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_43862);var suit_43864 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es_43862);var rank_43865 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es_43862);gin.dom_helpers.set_card_class.call(null,our_card_el_43863,((cljs.core._EQ_.call(null,suit_43864,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43864)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43865))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_43863,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__43866 = cljs.core.next.call(null,seq__43680_43856__$1);
var G__43867 = null;
var G__43868 = 0;
var G__43869 = 0;
seq__43680_43843 = G__43866;
chunk__43681_43844 = G__43867;
count__43682_43845 = G__43868;
i__43683_43846 = G__43869;
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
var seq__43684_43870 = cljs.core.seq.call(null,our_cards_es);var chunk__43685_43871 = null;var count__43686_43872 = 0;var i__43687_43873 = 0;while(true){
if((i__43687_43873 < count__43686_43872))
{var our_card_es_43874 = cljs.core._nth.call(null,chunk__43685_43871,i__43687_43873);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_43874),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43875 = seq__43684_43870;
var G__43876 = chunk__43685_43871;
var G__43877 = count__43686_43872;
var G__43878 = (i__43687_43873 + 1);
seq__43684_43870 = G__43875;
chunk__43685_43871 = G__43876;
count__43686_43872 = G__43877;
i__43687_43873 = G__43878;
continue;
}
} else
{var temp__4092__auto___43879 = cljs.core.seq.call(null,seq__43684_43870);if(temp__4092__auto___43879)
{var seq__43684_43880__$1 = temp__4092__auto___43879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43684_43880__$1))
{var c__17389__auto___43881 = cljs.core.chunk_first.call(null,seq__43684_43880__$1);{
var G__43882 = cljs.core.chunk_rest.call(null,seq__43684_43880__$1);
var G__43883 = c__17389__auto___43881;
var G__43884 = cljs.core.count.call(null,c__17389__auto___43881);
var G__43885 = 0;
seq__43684_43870 = G__43882;
chunk__43685_43871 = G__43883;
count__43686_43872 = G__43884;
i__43687_43873 = G__43885;
continue;
}
} else
{var our_card_es_43886 = cljs.core.first.call(null,seq__43684_43880__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_43886),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43887 = cljs.core.next.call(null,seq__43684_43880__$1);
var G__43888 = null;
var G__43889 = 0;
var G__43890 = 0;
seq__43684_43870 = G__43887;
chunk__43685_43871 = G__43888;
count__43686_43872 = G__43889;
i__43687_43873 = G__43890;
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
var seq__43688_43891 = cljs.core.seq.call(null,our_cards_es);var chunk__43689_43892 = null;var count__43690_43893 = 0;var i__43691_43894 = 0;while(true){
if((i__43691_43894 < count__43690_43893))
{var our_card_es_43895 = cljs.core._nth.call(null,chunk__43689_43892,i__43691_43894);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_43895),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43896 = seq__43688_43891;
var G__43897 = chunk__43689_43892;
var G__43898 = count__43690_43893;
var G__43899 = (i__43691_43894 + 1);
seq__43688_43891 = G__43896;
chunk__43689_43892 = G__43897;
count__43690_43893 = G__43898;
i__43691_43894 = G__43899;
continue;
}
} else
{var temp__4092__auto___43900 = cljs.core.seq.call(null,seq__43688_43891);if(temp__4092__auto___43900)
{var seq__43688_43901__$1 = temp__4092__auto___43900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43688_43901__$1))
{var c__17389__auto___43902 = cljs.core.chunk_first.call(null,seq__43688_43901__$1);{
var G__43903 = cljs.core.chunk_rest.call(null,seq__43688_43901__$1);
var G__43904 = c__17389__auto___43902;
var G__43905 = cljs.core.count.call(null,c__17389__auto___43902);
var G__43906 = 0;
seq__43688_43891 = G__43903;
chunk__43689_43892 = G__43904;
count__43690_43893 = G__43905;
i__43691_43894 = G__43906;
continue;
}
} else
{var our_card_es_43907 = cljs.core.first.call(null,seq__43688_43901__$1);gin.game_panel.set_drag_handler.call(null,new cljs.core.Keyword("dom","el","dom/el",1020278571).cljs$core$IFn$_invoke$arity$1(our_card_es_43907),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43908 = cljs.core.next.call(null,seq__43688_43901__$1);
var G__43909 = null;
var G__43910 = 0;
var G__43911 = 0;
seq__43688_43891 = G__43908;
chunk__43689_43892 = G__43909;
count__43690_43893 = G__43910;
i__43691_43894 = G__43911;
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
{var result = temp__4092__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__43692 = cljs.core._EQ_;var expr__43693 = result;if(cljs.core.truth_(pred__43692.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__43693)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__43692.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__43693)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__43692.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__43693)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__43692.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__43693)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__43692.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__43693)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43693)].join('')));
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__43915 = report;var map__43915__$1 = ((cljs.core.seq_QMARK_.call(null,map__43915))?cljs.core.apply.call(null,cljs.core.hash_map,map__43915):map__43915);var db_after = cljs.core.get.call(null,map__43915__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__43916 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__43916,0,null);var vec__43917 = cljs.core.nth.call(null,vec__43916,1,null);var game_id = cljs.core.nth.call(null,vec__43917,0,null);var args = cljs.core.nthnext.call(null,vec__43917,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
