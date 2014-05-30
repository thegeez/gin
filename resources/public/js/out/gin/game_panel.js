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
gin.game_panel.in_rect = (function in_rect(rect,p__26690){var vec__26692 = p__26690;var x = cljs.core.nth.call(null,vec__26692,0,null);var y = cljs.core.nth.call(null,vec__26692,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.draw_table = (function draw_table(conn){var G__26723_26753 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__26723_26753,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__26723_26753,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__26723_26753,gin.dom_helpers.build.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),(function (){var iter__17358__auto__ = (function iter__26724(s__26725){return (new cljs.core.LazySeq(null,(function (){var s__26725__$1 = s__26725;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26725__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__17354__auto__ = ((function (s__26725__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__26726(s__26727){return (new cljs.core.LazySeq(null,((function (s__26725__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__26727__$1 = s__26727;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__26727__$1);if(temp__4092__auto____$1)
{var s__26727__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26727__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__26727__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__26729 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__26728 = 0;while(true){
if((i__26728 < size__17357__auto__))
{var rank = cljs.core._nth.call(null,c__17356__auto__,i__26728);cljs.core.chunk_append.call(null,b__26729,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null));
{
var G__26754 = (i__26728 + 1);
i__26728 = G__26754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26729),iter__26726.call(null,cljs.core.chunk_rest.call(null,s__26727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26729),null);
}
} else
{var rank = cljs.core.first.call(null,s__26727__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card "),cljs.core.str([cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''))].join('')], null)], null),iter__26726.call(null,cljs.core.rest.call(null,s__26727__$2)));
}
} else
{return null;
}
break;
}
});})(s__26725__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__26725__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__17355__auto__ = cljs.core.seq.call(null,iterys__17354__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__17355__auto__)
{return cljs.core.concat.call(null,fs__17355__auto__,iter__26724.call(null,cljs.core.rest.call(null,s__26725__$1)));
} else
{{
var G__26755 = cljs.core.rest.call(null,s__26725__$1);
s__26725__$1 = G__26755;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"spade","spade",1123542167)], null));
})())));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__26730 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__26730,0,null);var pile_y = cljs.core.nth.call(null,vec__26730,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__26730,pile_x,pile_y){
return (function iter__26731(s__26732){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__26730,pile_x,pile_y){
return (function (){var s__26732__$1 = s__26732;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26732__$1);if(temp__4092__auto__)
{var s__26732__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26732__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__26732__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__26734 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__26733 = 0;while(true){
if((i__26733 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__26733);cljs.core.chunk_append.call(null,b__26734,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__26737 = (new goog.fx.Dragger(card_el));G__26737.setLimits(container_wrap);
return G__26737;
})();card_el.dispose = ((function (i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__26733,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__26734,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__26756 = (i__26733 + 1);
i__26733 = G__26756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26734),iter__26731.call(null,cljs.core.chunk_rest.call(null,s__26732__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26734),null);
}
} else
{var i = cljs.core.first.call(null,s__26732__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__26738 = (new goog.fx.Dragger(card_el));G__26738.setLimits(container_wrap);
return G__26738;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__26732__$2,temp__4092__auto__,container_wrap,vec__26730,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__26731.call(null,cljs.core.rest.call(null,s__26732__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__26730,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__26730,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__26739_26757 = cljs.core.seq.call(null,cards);var chunk__26740_26758 = null;var count__26741_26759 = 0;var i__26742_26760 = 0;while(true){
if((i__26742_26760 < count__26741_26759))
{var map__26743_26761 = cljs.core._nth.call(null,chunk__26740_26758,i__26742_26760);var map__26743_26762__$1 = ((cljs.core.seq_QMARK_.call(null,map__26743_26761))?cljs.core.apply.call(null,cljs.core.hash_map,map__26743_26761):map__26743_26761);var card_el_26763 = cljs.core.get.call(null,map__26743_26762__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_26763);
{
var G__26764 = seq__26739_26757;
var G__26765 = chunk__26740_26758;
var G__26766 = count__26741_26759;
var G__26767 = (i__26742_26760 + 1);
seq__26739_26757 = G__26764;
chunk__26740_26758 = G__26765;
count__26741_26759 = G__26766;
i__26742_26760 = G__26767;
continue;
}
} else
{var temp__4092__auto___26768 = cljs.core.seq.call(null,seq__26739_26757);if(temp__4092__auto___26768)
{var seq__26739_26769__$1 = temp__4092__auto___26768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26739_26769__$1))
{var c__17389__auto___26770 = cljs.core.chunk_first.call(null,seq__26739_26769__$1);{
var G__26771 = cljs.core.chunk_rest.call(null,seq__26739_26769__$1);
var G__26772 = c__17389__auto___26770;
var G__26773 = cljs.core.count.call(null,c__17389__auto___26770);
var G__26774 = 0;
seq__26739_26757 = G__26771;
chunk__26740_26758 = G__26772;
count__26741_26759 = G__26773;
i__26742_26760 = G__26774;
continue;
}
} else
{var map__26744_26775 = cljs.core.first.call(null,seq__26739_26769__$1);var map__26744_26776__$1 = ((cljs.core.seq_QMARK_.call(null,map__26744_26775))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744_26775):map__26744_26775);var card_el_26777 = cljs.core.get.call(null,map__26744_26776__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_26777);
{
var G__26778 = cljs.core.next.call(null,seq__26739_26769__$1);
var G__26779 = null;
var G__26780 = 0;
var G__26781 = 0;
seq__26739_26757 = G__26778;
chunk__26740_26758 = G__26779;
count__26741_26759 = G__26780;
i__26742_26760 = G__26781;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__26745(s__26746){return (new cljs.core.LazySeq(null,(function (){var s__26746__$1 = s__26746;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26746__$1);if(temp__4092__auto__)
{var s__26746__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26746__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__26746__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__26748 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__26747 = 0;while(true){
if((i__26747 < size__17357__auto__))
{var map__26751 = cljs.core._nth.call(null,c__17356__auto__,i__26747);var map__26751__$1 = ((cljs.core.seq_QMARK_.call(null,map__26751))?cljs.core.apply.call(null,cljs.core.hash_map,map__26751):map__26751);var card_el = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__26748,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__26782 = (i__26747 + 1);
i__26747 = G__26782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26748),iter__26745.call(null,cljs.core.chunk_rest.call(null,s__26746__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26748),null);
}
} else
{var map__26752 = cljs.core.first.call(null,s__26746__$2);var map__26752__$1 = ((cljs.core.seq_QMARK_.call(null,map__26752))?cljs.core.apply.call(null,cljs.core.hash_map,map__26752):map__26752);var card_el = cljs.core.get.call(null,map__26752__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__26752__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__26752__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__26745.call(null,cljs.core.rest.call(null,s__26746__$2)));
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
return (function (p1__26783_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__26783_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__26791 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__26791,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__26791,1,null);var vec__26792 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__26792,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__26792,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y){
return (function (p1__26785_SHARP_,p2__26784_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__26784_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__26784_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__26785_SHARP_ * 53)),(their_region_offset_y + (p1__26785_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__26794){var map__26795 = p__26794;var map__26795__$1 = ((cljs.core.seq_QMARK_.call(null,map__26795))?cljs.core.apply.call(null,cljs.core.hash_map,map__26795):map__26795);var id = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__26795,map__26795__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__26795,map__26795__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__26795,map__26795__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__26795,map__26795__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__26791,their_region_offset_x,their_region_offset_y,vec__26792,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__26793 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__26793,0,null);var second_deal = cljs.core.nth.call(null,vec__26793,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
{var _ = console.log("Regular draw case");var us_pick_card = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,10,cljs.core.count.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game))));var our_cards_es = cljs.core.map.call(null,((function (_,us_pick_card){
return (function (p1__26796_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__26796_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__26797_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__26797_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_el = cljs.core.mapv.call(null,gin.dom_helpers.get_element,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__26843 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__26843,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__26843,1,null);var seq__26844_26880 = cljs.core.seq.call(null,pile_cards_el);var chunk__26846_26881 = null;var count__26847_26882 = 0;var i__26848_26883 = 0;while(true){
if((i__26848_26883 < count__26847_26882))
{var pile_card_el_26884 = cljs.core._nth.call(null,chunk__26846_26881,i__26848_26883);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,pile_card_el_26884)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26884){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_26884,"card_back");
});})(seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26884))
,((function (seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26884){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_26884);
});})(seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26884))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_26884,gin.game_panel.pile_position.call(null))));
{
var G__26885 = seq__26844_26880;
var G__26886 = chunk__26846_26881;
var G__26887 = count__26847_26882;
var G__26888 = (i__26848_26883 + 1);
seq__26844_26880 = G__26885;
chunk__26846_26881 = G__26886;
count__26847_26882 = G__26887;
i__26848_26883 = G__26888;
continue;
}
} else
{{
var G__26889 = seq__26844_26880;
var G__26890 = chunk__26846_26881;
var G__26891 = count__26847_26882;
var G__26892 = (i__26848_26883 + 1);
seq__26844_26880 = G__26889;
chunk__26846_26881 = G__26890;
count__26847_26882 = G__26891;
i__26848_26883 = G__26892;
continue;
}
}
} else
{var temp__4092__auto___26893 = cljs.core.seq.call(null,seq__26844_26880);if(temp__4092__auto___26893)
{var seq__26844_26894__$1 = temp__4092__auto___26893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26844_26894__$1))
{var c__17389__auto___26895 = cljs.core.chunk_first.call(null,seq__26844_26894__$1);{
var G__26896 = cljs.core.chunk_rest.call(null,seq__26844_26894__$1);
var G__26897 = c__17389__auto___26895;
var G__26898 = cljs.core.count.call(null,c__17389__auto___26895);
var G__26899 = 0;
seq__26844_26880 = G__26896;
chunk__26846_26881 = G__26897;
count__26847_26882 = G__26898;
i__26848_26883 = G__26899;
continue;
}
} else
{var pile_card_el_26900 = cljs.core.first.call(null,seq__26844_26894__$1);if(cljs.core.not_EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,pile_card_el_26900)))
{gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26900,seq__26844_26894__$1,temp__4092__auto___26893){
return (function (){return gin.dom_helpers.set_card_class.call(null,pile_card_el_26900,"card_back");
});})(seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26900,seq__26844_26894__$1,temp__4092__auto___26893))
,((function (seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26900,seq__26844_26894__$1,temp__4092__auto___26893){
return (function (){return gin.dom_helpers.show_on_top.call(null,pile_card_el_26900);
});})(seq__26844_26880,chunk__26846_26881,count__26847_26882,i__26848_26883,pile_card_el_26900,seq__26844_26894__$1,temp__4092__auto___26893))
], null),gin.dom_helpers.slide_from.call(null,pile_card_el_26900,gin.game_panel.pile_position.call(null))));
{
var G__26901 = cljs.core.next.call(null,seq__26844_26894__$1);
var G__26902 = null;
var G__26903 = 0;
var G__26904 = 0;
seq__26844_26880 = G__26901;
chunk__26846_26881 = G__26902;
count__26847_26882 = G__26903;
i__26848_26883 = G__26904;
continue;
}
} else
{{
var G__26905 = cljs.core.next.call(null,seq__26844_26894__$1);
var G__26906 = null;
var G__26907 = 0;
var G__26908 = 0;
seq__26844_26880 = G__26905;
chunk__26846_26881 = G__26906;
count__26847_26882 = G__26907;
i__26848_26883 = G__26908;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___26909 = cljs.core.peek.call(null,pile_cards_el);if(cljs.core.truth_(temp__4092__auto___26909))
{var pile_card_el_26910 = temp__4092__auto___26909;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_26910,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_26910,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var seq__26850_26911 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__26798_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__26798_SHARP_], null));
}),new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)));var chunk__26853_26912 = null;var count__26854_26913 = 0;var i__26855_26914 = 0;while(true){
if((i__26855_26914 < count__26854_26913))
{var discard_card_es_26915 = cljs.core._nth.call(null,chunk__26853_26912,i__26855_26914);var discard_card_el_26916 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_26915));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,discard_card_el_26916)))
{var suit_26917 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_26915);var rank_26918 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_26915);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26917,rank_26918,discard_card_el_26916,discard_card_es_26915){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_26916,[cljs.core.str(cljs.core.name.call(null,suit_26917)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_26918))].join(''));
});})(seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26917,rank_26918,discard_card_el_26916,discard_card_es_26915))
,((function (seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26917,rank_26918,discard_card_el_26916,discard_card_es_26915){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_26916);
});})(seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26917,rank_26918,discard_card_el_26916,discard_card_es_26915))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_26916,gin.game_panel.discard_position.call(null))));
{
var G__26919 = seq__26850_26911;
var G__26920 = chunk__26853_26912;
var G__26921 = count__26854_26913;
var G__26922 = (i__26855_26914 + 1);
seq__26850_26911 = G__26919;
chunk__26853_26912 = G__26920;
count__26854_26913 = G__26921;
i__26855_26914 = G__26922;
continue;
}
} else
{{
var G__26923 = seq__26850_26911;
var G__26924 = chunk__26853_26912;
var G__26925 = count__26854_26913;
var G__26926 = (i__26855_26914 + 1);
seq__26850_26911 = G__26923;
chunk__26853_26912 = G__26924;
count__26854_26913 = G__26925;
i__26855_26914 = G__26926;
continue;
}
}
} else
{var temp__4092__auto___26927 = cljs.core.seq.call(null,seq__26850_26911);if(temp__4092__auto___26927)
{var seq__26850_26928__$1 = temp__4092__auto___26927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26850_26928__$1))
{var c__17389__auto___26929 = cljs.core.chunk_first.call(null,seq__26850_26928__$1);{
var G__26930 = cljs.core.chunk_rest.call(null,seq__26850_26928__$1);
var G__26931 = c__17389__auto___26929;
var G__26932 = cljs.core.count.call(null,c__17389__auto___26929);
var G__26933 = 0;
seq__26850_26911 = G__26930;
chunk__26853_26912 = G__26931;
count__26854_26913 = G__26932;
i__26855_26914 = G__26933;
continue;
}
} else
{var discard_card_es_26934 = cljs.core.first.call(null,seq__26850_26928__$1);var discard_card_el_26935 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_26934));if(cljs.core.not_EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,discard_card_el_26935)))
{var suit_26936 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_26934);var rank_26937 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_26934);gin.dom_helpers.schedule.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26936,rank_26937,discard_card_el_26935,discard_card_es_26934,seq__26850_26928__$1,temp__4092__auto___26927){
return (function (){return gin.dom_helpers.set_card_class.call(null,discard_card_el_26935,[cljs.core.str(cljs.core.name.call(null,suit_26936)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_26937))].join(''));
});})(seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26936,rank_26937,discard_card_el_26935,discard_card_es_26934,seq__26850_26928__$1,temp__4092__auto___26927))
,((function (seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26936,rank_26937,discard_card_el_26935,discard_card_es_26934,seq__26850_26928__$1,temp__4092__auto___26927){
return (function (){return gin.dom_helpers.show_on_top.call(null,discard_card_el_26935);
});})(seq__26850_26911,chunk__26853_26912,count__26854_26913,i__26855_26914,suit_26936,rank_26937,discard_card_el_26935,discard_card_es_26934,seq__26850_26928__$1,temp__4092__auto___26927))
], null),gin.dom_helpers.slide_from.call(null,discard_card_el_26935,gin.game_panel.discard_position.call(null))));
{
var G__26938 = cljs.core.next.call(null,seq__26850_26928__$1);
var G__26939 = null;
var G__26940 = 0;
var G__26941 = 0;
seq__26850_26911 = G__26938;
chunk__26853_26912 = G__26939;
count__26854_26913 = G__26940;
i__26855_26914 = G__26941;
continue;
}
} else
{{
var G__26942 = cljs.core.next.call(null,seq__26850_26928__$1);
var G__26943 = null;
var G__26944 = 0;
var G__26945 = 0;
seq__26850_26911 = G__26942;
chunk__26853_26912 = G__26943;
count__26854_26913 = G__26944;
i__26855_26914 = G__26945;
continue;
}
}
}
} else
{}
}
break;
}
var temp__4092__auto___26946 = cljs.core.peek.call(null,discard_cards_el);if(cljs.core.truth_(temp__4092__auto___26946))
{var discard_card_el_26947 = temp__4092__auto___26946;if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_26947,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_26947,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_26948 = cljs.core.map.call(null,(function (p1__26799_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__26799_SHARP_));
}),opp_cards_es);if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,cljs.core.first.call(null,opp_cards_el_26948)),gin.dom_helpers.get_pos.call(null,cljs.core.second.call(null,opp_cards_el_26948))))
{gin.dom_helpers.schedule.call(null,cljs.core.map.call(null,(function (idx,el){return (function (){gin.dom_helpers.show_on_top.call(null,el);
return gin.dom_helpers.set_position.call(null,el,(their_region_offset_x + (idx * 53)),(their_region_offset_y + (idx * 4)));
});
}),cljs.core.range.call(null),opp_cards_el_26948));
} else
{var temp__4090__auto___26949 = cljs.core.some.call(null,(function (el){if(cljs.core._EQ_.call(null,gin.game_panel.pile_position.call(null),gin.dom_helpers.get_pos.call(null,el)))
{return el;
} else
{return null;
}
}),opp_cards_el_26948);if(cljs.core.truth_(temp__4090__auto___26949))
{var from_pile_26950 = temp__4090__auto___26949;gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__26801_SHARP_,p2__26800_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__26800_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__26801_SHARP_ * 48.18)),(their_region_offset_y + (p1__26801_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__26800_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el_26948))));
} else
{var temp__4090__auto___26951__$1 = cljs.core.some.call(null,(function (el){if(cljs.core._EQ_.call(null,gin.game_panel.discard_position.call(null),gin.dom_helpers.get_pos.call(null,el)))
{return el;
} else
{return null;
}
}),opp_cards_el_26948);if(cljs.core.truth_(temp__4090__auto___26951__$1))
{var from_discard_26952 = temp__4090__auto___26951__$1;gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.set_card_class.call(null,from_discard_26952,"card_back");
})], null),gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__26803_SHARP_,p2__26802_SHARP_){return cljs.core.conj.call(null,gin.dom_helpers.slide_from.call(null,p2__26802_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__26803_SHARP_ * 48.18)),(their_region_offset_y + (p1__26803_SHARP_ * 3.63))], null)),(function (){return gin.dom_helpers.show_on_top.call(null,p2__26802_SHARP_);
}));
}),cljs.core.range.call(null),opp_cards_el_26948))));
} else
{var vec__26858_26953 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_26948)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_26954 = cljs.core.nth.call(null,vec__26858_26953,0,null);var y_step_26955 = cljs.core.nth.call(null,vec__26858_26953,1,null);gin.dom_helpers.schedule.call(null,gin.dom_helpers.simultanious.call(null,cljs.core.map.call(null,(function (p1__26805_SHARP_,p2__26804_SHARP_){return gin.dom_helpers.slide_from.call(null,p2__26804_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__26805_SHARP_ * x_step_26954)),(their_region_offset_y + (p1__26805_SHARP_ * y_step_26955))], null));
}),cljs.core.range.call(null),opp_cards_el_26948)));
}
}
}
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,opp_cards_es))))
{var seq__26859_26956 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_26948,opp_cards_es));var chunk__26860_26957 = null;var count__26861_26958 = 0;var i__26862_26959 = 0;while(true){
if((i__26862_26959 < count__26861_26958))
{var vec__26863_26960 = cljs.core._nth.call(null,chunk__26860_26957,i__26862_26959);var el_26961 = cljs.core.nth.call(null,vec__26863_26960,0,null);var es_26962 = cljs.core.nth.call(null,vec__26863_26960,1,null);var suit_26963 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_26962);var rank_26964 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_26962);gin.dom_helpers.set_card_class.call(null,el_26961,[cljs.core.str(cljs.core.name.call(null,suit_26963)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_26964))].join(''));
{
var G__26965 = seq__26859_26956;
var G__26966 = chunk__26860_26957;
var G__26967 = count__26861_26958;
var G__26968 = (i__26862_26959 + 1);
seq__26859_26956 = G__26965;
chunk__26860_26957 = G__26966;
count__26861_26958 = G__26967;
i__26862_26959 = G__26968;
continue;
}
} else
{var temp__4092__auto___26969 = cljs.core.seq.call(null,seq__26859_26956);if(temp__4092__auto___26969)
{var seq__26859_26970__$1 = temp__4092__auto___26969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26859_26970__$1))
{var c__17389__auto___26971 = cljs.core.chunk_first.call(null,seq__26859_26970__$1);{
var G__26972 = cljs.core.chunk_rest.call(null,seq__26859_26970__$1);
var G__26973 = c__17389__auto___26971;
var G__26974 = cljs.core.count.call(null,c__17389__auto___26971);
var G__26975 = 0;
seq__26859_26956 = G__26972;
chunk__26860_26957 = G__26973;
count__26861_26958 = G__26974;
i__26862_26959 = G__26975;
continue;
}
} else
{var vec__26864_26976 = cljs.core.first.call(null,seq__26859_26970__$1);var el_26977 = cljs.core.nth.call(null,vec__26864_26976,0,null);var es_26978 = cljs.core.nth.call(null,vec__26864_26976,1,null);var suit_26979 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_26978);var rank_26980 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_26978);gin.dom_helpers.set_card_class.call(null,el_26977,[cljs.core.str(cljs.core.name.call(null,suit_26979)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_26980))].join(''));
{
var G__26981 = cljs.core.next.call(null,seq__26859_26970__$1);
var G__26982 = null;
var G__26983 = 0;
var G__26984 = 0;
seq__26859_26956 = G__26981;
chunk__26860_26957 = G__26982;
count__26861_26958 = G__26983;
i__26862_26959 = G__26984;
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__26865 = cljs.core.seq.call(null,our_cards_es);var chunk__26866 = null;var count__26867 = 0;var i__26868 = 0;while(true){
if((i__26868 < count__26867))
{var our_card_es = cljs.core._nth.call(null,chunk__26866,i__26868);var our_card_el_26985 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_26986 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_26987 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_26985,((cljs.core._EQ_.call(null,suit_26986,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_26986)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_26987))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_26985,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__26988 = seq__26865;
var G__26989 = chunk__26866;
var G__26990 = count__26867;
var G__26991 = (i__26868 + 1);
seq__26865 = G__26988;
chunk__26866 = G__26989;
count__26867 = G__26990;
i__26868 = G__26991;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26865);if(temp__4092__auto__)
{var seq__26865__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26865__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__26865__$1);{
var G__26992 = cljs.core.chunk_rest.call(null,seq__26865__$1);
var G__26993 = c__17389__auto__;
var G__26994 = cljs.core.count.call(null,c__17389__auto__);
var G__26995 = 0;
seq__26865 = G__26992;
chunk__26866 = G__26993;
count__26867 = G__26994;
i__26868 = G__26995;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__26865__$1);var our_card_el_26996 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_26997 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_26998 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_26996,((cljs.core._EQ_.call(null,suit_26997,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_26997)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_26998))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_26996,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__26999 = cljs.core.next.call(null,seq__26865__$1);
var G__27000 = null;
var G__27001 = 0;
var G__27002 = 0;
seq__26865 = G__26999;
chunk__26866 = G__27000;
count__26867 = G__27001;
i__26868 = G__27002;
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
var seq__26869 = cljs.core.seq.call(null,our_cards_es);var chunk__26870 = null;var count__26871 = 0;var i__26872 = 0;while(true){
if((i__26872 < count__26871))
{var our_card_es = cljs.core._nth.call(null,chunk__26870,i__26872);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__27003 = seq__26869;
var G__27004 = chunk__26870;
var G__27005 = count__26871;
var G__27006 = (i__26872 + 1);
seq__26869 = G__27003;
chunk__26870 = G__27004;
count__26871 = G__27005;
i__26872 = G__27006;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26869);if(temp__4092__auto__)
{var seq__26869__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26869__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__26869__$1);{
var G__27007 = cljs.core.chunk_rest.call(null,seq__26869__$1);
var G__27008 = c__17389__auto__;
var G__27009 = cljs.core.count.call(null,c__17389__auto__);
var G__27010 = 0;
seq__26869 = G__27007;
chunk__26870 = G__27008;
count__26871 = G__27009;
i__26872 = G__27010;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__26869__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__27011 = cljs.core.next.call(null,seq__26869__$1);
var G__27012 = null;
var G__27013 = 0;
var G__27014 = 0;
seq__26869 = G__27011;
chunk__26870 = G__27012;
count__26871 = G__27013;
i__26872 = G__27014;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__26873 = cljs.core._EQ_;var expr__26874 = result;if(cljs.core.truth_(pred__26873.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__26874)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__26873.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__26874)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__26873.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__26874)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__26873.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__26874)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__26873.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__26874)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26874)].join('')));
}
}
}
}
}
})());
} else
{gin.game_panel.set_msg.call(null,"Opponent's turn.");
var seq__26876 = cljs.core.seq.call(null,our_cards_es);var chunk__26877 = null;var count__26878 = 0;var i__26879 = 0;while(true){
if((i__26879 < count__26878))
{var our_card_es = cljs.core._nth.call(null,chunk__26877,i__26879);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__27015 = seq__26876;
var G__27016 = chunk__26877;
var G__27017 = count__26878;
var G__27018 = (i__26879 + 1);
seq__26876 = G__27015;
chunk__26877 = G__27016;
count__26878 = G__27017;
i__26879 = G__27018;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26876);if(temp__4092__auto__)
{var seq__26876__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26876__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__26876__$1);{
var G__27019 = cljs.core.chunk_rest.call(null,seq__26876__$1);
var G__27020 = c__17389__auto__;
var G__27021 = cljs.core.count.call(null,c__17389__auto__);
var G__27022 = 0;
seq__26876 = G__27019;
chunk__26877 = G__27020;
count__26878 = G__27021;
i__26879 = G__27022;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__26876__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__27023 = cljs.core.next.call(null,seq__26876__$1);
var G__27024 = null;
var G__27025 = 0;
var G__27026 = 0;
seq__26876 = G__27023;
chunk__26877 = G__27024;
count__26878 = G__27025;
i__26879 = G__27026;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__27030 = report;var map__27030__$1 = ((cljs.core.seq_QMARK_.call(null,map__27030))?cljs.core.apply.call(null,cljs.core.hash_map,map__27030):map__27030);var db_after = cljs.core.get.call(null,map__27030__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__27031 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__27031,0,null);var vec__27032 = cljs.core.nth.call(null,vec__27031,1,null);var game_id = cljs.core.nth.call(null,vec__27032,0,null);var args = cljs.core.nthnext.call(null,vec__27032,1);return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
