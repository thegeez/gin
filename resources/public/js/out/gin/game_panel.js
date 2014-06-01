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
gin.game_panel.a = (new Array((52 * cljs.core.count.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",1013907481),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"at","at",1013907365),new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"step","step",1017444926),new cljs.core.Keyword(null,"dx","dx",1013907462),new cljs.core.Keyword(null,"dy","dy",1013907463)], null)))));
gin.game_panel.slide = (function slide(idx,el,to){var i = (idx * 8);var vec__86946 = (function (){var p = gin.dom_helpers.get_position.call(null,el);var from = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);(gin.game_panel.a[(i + 2)] = from);
return from;
})();var from_x = cljs.core.nth.call(null,vec__86946,0,null);var from_y = cljs.core.nth.call(null,vec__86946,1,null);var from = vec__86946;var vec__86947 = to;var to_x = cljs.core.nth.call(null,vec__86947,0,null);var to_y = cljs.core.nth.call(null,vec__86947,1,null);var steps = 30;var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.game_panel.a[i] = el);
(gin.game_panel.a[(i + 1)] = from);
(gin.game_panel.a[(i + 3)] = true);
(gin.game_panel.a[(i + 4)] = to);
(gin.game_panel.a[(i + 5)] = steps);
(gin.game_panel.a[(i + 6)] = dx);
return (gin.game_panel.a[(i + 7)] = dy);
});
gin.game_panel.anim_loop = (function anim_loop(){var n__17489__auto___86952 = 52;var card_idx_86953 = 0;while(true){
if((card_idx_86953 < n__17489__auto___86952))
{var i_86954 = (card_idx_86953 * 8);if(cljs.core.truth_((gin.game_panel.a[(i_86954 + 3)])))
{var el_86955 = (gin.game_panel.a[i_86954]);var vec__86950_86956 = (gin.game_panel.a[(i_86954 + 1)]);var start_x_86957 = cljs.core.nth.call(null,vec__86950_86956,0,null);var start_y_86958 = cljs.core.nth.call(null,vec__86950_86956,1,null);var at_86959 = (gin.game_panel.a[(i_86954 + 2)]);var vec__86951_86960 = (gin.game_panel.a[(i_86954 + 4)]);var x_86961 = cljs.core.nth.call(null,vec__86951_86960,0,null);var y_86962 = cljs.core.nth.call(null,vec__86951_86960,1,null);var to_86963 = vec__86951_86960;var step_86964 = ((gin.game_panel.a[(i_86954 + 5)]) - 1);var dx_86965 = (gin.game_panel.a[(i_86954 + 6)]);var dy_86966 = (gin.game_panel.a[(i_86954 + 7)]);var nx_86967 = cljs.core.long$.call(null,(start_x_86957 + ((30 - step_86964) * dx_86965)));var ny_86968 = cljs.core.long$.call(null,(start_y_86958 + ((30 - step_86964) * dy_86966)));(gin.game_panel.a[(i_86954 + 2)] = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx_86967,ny_86968], null));
gin.dom_helpers.set_position.call(null,el_86955,nx_86967,ny_86968);
(gin.game_panel.a[(i_86954 + 5)] = step_86964);
if(((cljs.core._EQ_.call(null,x_86961,nx_86967)) && (cljs.core._EQ_.call(null,y_86962,ny_86968))) || ((step_86964 === 0)) || (((dx_86965 === 0)) && ((dy_86966 === 0))))
{(gin.game_panel.a[(i_86954 + 3)] = false);
} else
{}
} else
{}
{
var G__86969 = (card_idx_86953 + 1);
card_idx_86953 = G__86969;
continue;
}
} else
{}
break;
}
return gin.dom_helpers.set_timeout.call(null,anim_loop,10);
});
gin.game_panel.anim_loop.call(null);
gin.game_panel.set_msg = (function set_msg(msg){console.log("set-msg",msg);
return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.in_rect = (function in_rect(rect,p__86970){var vec__86972 = p__86970;var x = cljs.core.nth.call(null,vec__86972,0,null);var y = cljs.core.nth.call(null,vec__86972,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
return gin.dom_helpers.schedule.call(null,gin.game_panel.slide.call(null,card_el.anim_idx,card_el,gin.game_panel.pile_position.call(null)));
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
return gin.dom_helpers.schedule.call(null,gin.game_panel.slide.call(null,card_el.anim_idx,card_el,gin.game_panel.discard_position.call(null)));
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
gin.game_panel.slide.call(null,card_el.anim_idx,card_el,gin.game_panel.discard_position.call(null));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_chosen,card_id], null)], null));
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
gin.game_panel.draw_table = (function draw_table(conn){var G__86997_87021 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__86997_87021,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__86997_87021,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__86997_87021,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__86998 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__86998,0,null);var pile_y = cljs.core.nth.call(null,vec__86998,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__86998,pile_x,pile_y){
return (function iter__86999(s__87000){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__86998,pile_x,pile_y){
return (function (){var s__87000__$1 = s__87000;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__87000__$1);if(temp__4092__auto__)
{var s__87000__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__87000__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__87000__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__87002 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__87001 = 0;while(true){
if((i__87001 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__87001);cljs.core.chunk_append.call(null,b__87002,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__87005 = (new goog.fx.Dragger(card_el));G__87005.setLimits(container_wrap);
return G__87005;
})();card_el.dispose = ((function (i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__87001,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__87002,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__87022 = (i__87001 + 1);
i__87001 = G__87022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87002),iter__86999.call(null,cljs.core.chunk_rest.call(null,s__87000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87002),null);
}
} else
{var i = cljs.core.first.call(null,s__87000__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__87006 = (new goog.fx.Dragger(card_el));G__87006.setLimits(container_wrap);
return G__87006;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__87000__$2,temp__4092__auto__,container_wrap,vec__86998,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__86999.call(null,cljs.core.rest.call(null,s__87000__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__86998,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__86998,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__87007_87023 = cljs.core.seq.call(null,cards);var chunk__87008_87024 = null;var count__87009_87025 = 0;var i__87010_87026 = 0;while(true){
if((i__87010_87026 < count__87009_87025))
{var map__87011_87027 = cljs.core._nth.call(null,chunk__87008_87024,i__87010_87026);var map__87011_87028__$1 = ((cljs.core.seq_QMARK_.call(null,map__87011_87027))?cljs.core.apply.call(null,cljs.core.hash_map,map__87011_87027):map__87011_87027);var idx_87029 = cljs.core.get.call(null,map__87011_87028__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_87030 = cljs.core.get.call(null,map__87011_87028__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_87030.anim_idx = idx_87029;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_87030);
{
var G__87031 = seq__87007_87023;
var G__87032 = chunk__87008_87024;
var G__87033 = count__87009_87025;
var G__87034 = (i__87010_87026 + 1);
seq__87007_87023 = G__87031;
chunk__87008_87024 = G__87032;
count__87009_87025 = G__87033;
i__87010_87026 = G__87034;
continue;
}
} else
{var temp__4092__auto___87035 = cljs.core.seq.call(null,seq__87007_87023);if(temp__4092__auto___87035)
{var seq__87007_87036__$1 = temp__4092__auto___87035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87007_87036__$1))
{var c__17389__auto___87037 = cljs.core.chunk_first.call(null,seq__87007_87036__$1);{
var G__87038 = cljs.core.chunk_rest.call(null,seq__87007_87036__$1);
var G__87039 = c__17389__auto___87037;
var G__87040 = cljs.core.count.call(null,c__17389__auto___87037);
var G__87041 = 0;
seq__87007_87023 = G__87038;
chunk__87008_87024 = G__87039;
count__87009_87025 = G__87040;
i__87010_87026 = G__87041;
continue;
}
} else
{var map__87012_87042 = cljs.core.first.call(null,seq__87007_87036__$1);var map__87012_87043__$1 = ((cljs.core.seq_QMARK_.call(null,map__87012_87042))?cljs.core.apply.call(null,cljs.core.hash_map,map__87012_87042):map__87012_87042);var idx_87044 = cljs.core.get.call(null,map__87012_87043__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_87045 = cljs.core.get.call(null,map__87012_87043__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_87045.anim_idx = idx_87044;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_87045);
{
var G__87046 = cljs.core.next.call(null,seq__87007_87036__$1);
var G__87047 = null;
var G__87048 = 0;
var G__87049 = 0;
seq__87007_87023 = G__87046;
chunk__87008_87024 = G__87047;
count__87009_87025 = G__87048;
i__87010_87026 = G__87049;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__87013(s__87014){return (new cljs.core.LazySeq(null,(function (){var s__87014__$1 = s__87014;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__87014__$1);if(temp__4092__auto__)
{var s__87014__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__87014__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__87014__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__87016 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__87015 = 0;while(true){
if((i__87015 < size__17357__auto__))
{var map__87019 = cljs.core._nth.call(null,c__17356__auto__,i__87015);var map__87019__$1 = ((cljs.core.seq_QMARK_.call(null,map__87019))?cljs.core.apply.call(null,cljs.core.hash_map,map__87019):map__87019);var card_el = cljs.core.get.call(null,map__87019__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__87019__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__87019__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__87016,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("anim","idx","anim/idx",1204830436),idx,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__87050 = (i__87015 + 1);
i__87015 = G__87050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87016),iter__87013.call(null,cljs.core.chunk_rest.call(null,s__87014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87016),null);
}
} else
{var map__87020 = cljs.core.first.call(null,s__87014__$2);var map__87020__$1 = ((cljs.core.seq_QMARK_.call(null,map__87020))?cljs.core.apply.call(null,cljs.core.hash_map,map__87020):map__87020);var card_el = cljs.core.get.call(null,map__87020__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__87020__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__87020__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("anim","idx","anim/idx",1204830436),idx,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__87013.call(null,cljs.core.rest.call(null,s__87014__$2)));
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
return (function (p1__87051_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__87051_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__87059 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__87059,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__87059,1,null);var vec__87060 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__87060,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__87060,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y){
return (function (p1__87053_SHARP_,p2__87052_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__87052_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__87052_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__87053_SHARP_ * 53)),(their_region_offset_y + (p1__87053_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__87062){var map__87063 = p__87062;var map__87063__$1 = ((cljs.core.seq_QMARK_.call(null,map__87063))?cljs.core.apply.call(null,cljs.core.hash_map,map__87063):map__87063);var id = cljs.core.get.call(null,map__87063__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__87063__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__87063__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__87063,map__87063__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__87063,map__87063__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__87063,map__87063__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__87063,map__87063__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__87059,their_region_offset_x,their_region_offset_y,vec__87060,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__87061 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__87061,0,null);var second_deal = cljs.core.nth.call(null,vec__87061,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
return (function (p1__87064_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__87064_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__87065_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__87065_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__87066_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__87066_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__87067_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__87067_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__87110 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__87110,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__87110,1,null);var seq__87111_87151 = cljs.core.seq.call(null,pile_cards_es);var chunk__87113_87152 = null;var count__87114_87153 = 0;var i__87115_87154 = 0;while(true){
if((i__87115_87154 < count__87114_87153))
{var pile_card_es_87155 = cljs.core._nth.call(null,chunk__87113_87152,i__87115_87154);var pile_card_el_87156 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_87155));gin.dom_helpers.set_card_class.call(null,pile_card_el_87156,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_87156);
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(pile_card_es_87155),pile_card_el_87156,gin.game_panel.pile_position.call(null));
{
var G__87157 = seq__87111_87151;
var G__87158 = chunk__87113_87152;
var G__87159 = count__87114_87153;
var G__87160 = (i__87115_87154 + 1);
seq__87111_87151 = G__87157;
chunk__87113_87152 = G__87158;
count__87114_87153 = G__87159;
i__87115_87154 = G__87160;
continue;
}
} else
{var temp__4092__auto___87161 = cljs.core.seq.call(null,seq__87111_87151);if(temp__4092__auto___87161)
{var seq__87111_87162__$1 = temp__4092__auto___87161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87111_87162__$1))
{var c__17389__auto___87163 = cljs.core.chunk_first.call(null,seq__87111_87162__$1);{
var G__87164 = cljs.core.chunk_rest.call(null,seq__87111_87162__$1);
var G__87165 = c__17389__auto___87163;
var G__87166 = cljs.core.count.call(null,c__17389__auto___87163);
var G__87167 = 0;
seq__87111_87151 = G__87164;
chunk__87113_87152 = G__87165;
count__87114_87153 = G__87166;
i__87115_87154 = G__87167;
continue;
}
} else
{var pile_card_es_87168 = cljs.core.first.call(null,seq__87111_87162__$1);var pile_card_el_87169 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_87168));gin.dom_helpers.set_card_class.call(null,pile_card_el_87169,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_87169);
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(pile_card_es_87168),pile_card_el_87169,gin.game_panel.pile_position.call(null));
{
var G__87170 = cljs.core.next.call(null,seq__87111_87162__$1);
var G__87171 = null;
var G__87172 = 0;
var G__87173 = 0;
seq__87111_87151 = G__87170;
chunk__87113_87152 = G__87171;
count__87114_87153 = G__87172;
i__87115_87154 = G__87173;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___87174 = cljs.core.last.call(null,pile_cards_es);if(cljs.core.truth_(temp__4092__auto___87174))
{var pile_card_es_87175 = temp__4092__auto___87174;var pile_card_el_87176 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_87175));if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_87176,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_87176,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_87177 = cljs.core.map.call(null,(function (p1__87068_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__87068_SHARP_));
}),opp_cards_es);var vec__87117_87178 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_87177)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_87179 = cljs.core.nth.call(null,vec__87117_87178,0,null);var y_step_87180 = cljs.core.nth.call(null,vec__87117_87178,1,null);console.log("opp reg");
var seq__87118_87181 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__87119_87182 = null;var count__87120_87183 = 0;var i__87121_87184 = 0;while(true){
if((i__87121_87184 < count__87120_87183))
{var vec__87122_87185 = cljs.core._nth.call(null,chunk__87119_87182,i__87121_87184);var i_87186 = cljs.core.nth.call(null,vec__87122_87185,0,null);var e_87187 = cljs.core.nth.call(null,vec__87122_87185,1,null);var idx_87188 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_87187);var el_87189 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_87187));gin.game_panel.slide.call(null,idx_87188,el_87189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_87186 * x_step_87179))),cljs.core.long$.call(null,(their_region_offset_y + (i_87186 * y_step_87180)))], null));
{
var G__87190 = seq__87118_87181;
var G__87191 = chunk__87119_87182;
var G__87192 = count__87120_87183;
var G__87193 = (i__87121_87184 + 1);
seq__87118_87181 = G__87190;
chunk__87119_87182 = G__87191;
count__87120_87183 = G__87192;
i__87121_87184 = G__87193;
continue;
}
} else
{var temp__4092__auto___87194 = cljs.core.seq.call(null,seq__87118_87181);if(temp__4092__auto___87194)
{var seq__87118_87195__$1 = temp__4092__auto___87194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87118_87195__$1))
{var c__17389__auto___87196 = cljs.core.chunk_first.call(null,seq__87118_87195__$1);{
var G__87197 = cljs.core.chunk_rest.call(null,seq__87118_87195__$1);
var G__87198 = c__17389__auto___87196;
var G__87199 = cljs.core.count.call(null,c__17389__auto___87196);
var G__87200 = 0;
seq__87118_87181 = G__87197;
chunk__87119_87182 = G__87198;
count__87120_87183 = G__87199;
i__87121_87184 = G__87200;
continue;
}
} else
{var vec__87123_87201 = cljs.core.first.call(null,seq__87118_87195__$1);var i_87202 = cljs.core.nth.call(null,vec__87123_87201,0,null);var e_87203 = cljs.core.nth.call(null,vec__87123_87201,1,null);var idx_87204 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_87203);var el_87205 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_87203));gin.game_panel.slide.call(null,idx_87204,el_87205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_87202 * x_step_87179))),cljs.core.long$.call(null,(their_region_offset_y + (i_87202 * y_step_87180)))], null));
{
var G__87206 = cljs.core.next.call(null,seq__87118_87195__$1);
var G__87207 = null;
var G__87208 = 0;
var G__87209 = 0;
seq__87118_87181 = G__87206;
chunk__87119_87182 = G__87207;
count__87120_87183 = G__87208;
i__87121_87184 = G__87209;
continue;
}
}
} else
{}
}
break;
}
var seq__87124_87210 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_87177,opp_cards_es));var chunk__87125_87211 = null;var count__87126_87212 = 0;var i__87127_87213 = 0;while(true){
if((i__87127_87213 < count__87126_87212))
{var vec__87128_87214 = cljs.core._nth.call(null,chunk__87125_87211,i__87127_87213);var el_87215 = cljs.core.nth.call(null,vec__87128_87214,0,null);var es_87216 = cljs.core.nth.call(null,vec__87128_87214,1,null);var suit_87217 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_87216);var rank_87218 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_87216);gin.dom_helpers.show_on_top.call(null,el_87215);
gin.dom_helpers.set_card_class.call(null,el_87215,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_87217))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_87217)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_87218))].join('')));
{
var G__87219 = seq__87124_87210;
var G__87220 = chunk__87125_87211;
var G__87221 = count__87126_87212;
var G__87222 = (i__87127_87213 + 1);
seq__87124_87210 = G__87219;
chunk__87125_87211 = G__87220;
count__87126_87212 = G__87221;
i__87127_87213 = G__87222;
continue;
}
} else
{var temp__4092__auto___87223 = cljs.core.seq.call(null,seq__87124_87210);if(temp__4092__auto___87223)
{var seq__87124_87224__$1 = temp__4092__auto___87223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87124_87224__$1))
{var c__17389__auto___87225 = cljs.core.chunk_first.call(null,seq__87124_87224__$1);{
var G__87226 = cljs.core.chunk_rest.call(null,seq__87124_87224__$1);
var G__87227 = c__17389__auto___87225;
var G__87228 = cljs.core.count.call(null,c__17389__auto___87225);
var G__87229 = 0;
seq__87124_87210 = G__87226;
chunk__87125_87211 = G__87227;
count__87126_87212 = G__87228;
i__87127_87213 = G__87229;
continue;
}
} else
{var vec__87129_87230 = cljs.core.first.call(null,seq__87124_87224__$1);var el_87231 = cljs.core.nth.call(null,vec__87129_87230,0,null);var es_87232 = cljs.core.nth.call(null,vec__87129_87230,1,null);var suit_87233 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_87232);var rank_87234 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_87232);gin.dom_helpers.show_on_top.call(null,el_87231);
gin.dom_helpers.set_card_class.call(null,el_87231,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_87233))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_87233)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_87234))].join('')));
{
var G__87235 = cljs.core.next.call(null,seq__87124_87224__$1);
var G__87236 = null;
var G__87237 = 0;
var G__87238 = 0;
seq__87124_87210 = G__87235;
chunk__87125_87211 = G__87236;
count__87126_87212 = G__87237;
i__87127_87213 = G__87238;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__87130_87239 = cljs.core.seq.call(null,discard_cards_es);var chunk__87132_87240 = null;var count__87133_87241 = 0;var i__87134_87242 = 0;while(true){
if((i__87134_87242 < count__87133_87241))
{var discard_card_es_87243 = cljs.core._nth.call(null,chunk__87132_87240,i__87134_87242);var discard_card_el_87244 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_87243));var suit_87245 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_87243);var rank_87246 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_87243);gin.dom_helpers.set_card_class.call(null,discard_card_el_87244,[cljs.core.str(cljs.core.name.call(null,suit_87245)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_87246))].join(''));
gin.dom_helpers.show_on_top.call(null,discard_card_el_87244);
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(discard_card_es_87243),discard_card_el_87244,gin.game_panel.discard_position.call(null));
{
var G__87247 = seq__87130_87239;
var G__87248 = chunk__87132_87240;
var G__87249 = count__87133_87241;
var G__87250 = (i__87134_87242 + 1);
seq__87130_87239 = G__87247;
chunk__87132_87240 = G__87248;
count__87133_87241 = G__87249;
i__87134_87242 = G__87250;
continue;
}
} else
{var temp__4092__auto___87251 = cljs.core.seq.call(null,seq__87130_87239);if(temp__4092__auto___87251)
{var seq__87130_87252__$1 = temp__4092__auto___87251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87130_87252__$1))
{var c__17389__auto___87253 = cljs.core.chunk_first.call(null,seq__87130_87252__$1);{
var G__87254 = cljs.core.chunk_rest.call(null,seq__87130_87252__$1);
var G__87255 = c__17389__auto___87253;
var G__87256 = cljs.core.count.call(null,c__17389__auto___87253);
var G__87257 = 0;
seq__87130_87239 = G__87254;
chunk__87132_87240 = G__87255;
count__87133_87241 = G__87256;
i__87134_87242 = G__87257;
continue;
}
} else
{var discard_card_es_87258 = cljs.core.first.call(null,seq__87130_87252__$1);var discard_card_el_87259 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_87258));var suit_87260 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_87258);var rank_87261 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_87258);gin.dom_helpers.set_card_class.call(null,discard_card_el_87259,[cljs.core.str(cljs.core.name.call(null,suit_87260)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_87261))].join(''));
gin.dom_helpers.show_on_top.call(null,discard_card_el_87259);
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(discard_card_es_87258),discard_card_el_87259,gin.game_panel.discard_position.call(null));
{
var G__87262 = cljs.core.next.call(null,seq__87130_87252__$1);
var G__87263 = null;
var G__87264 = 0;
var G__87265 = 0;
seq__87130_87239 = G__87262;
chunk__87132_87240 = G__87263;
count__87133_87241 = G__87264;
i__87134_87242 = G__87265;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___87266 = cljs.core.last.call(null,discard_cards_es);if(cljs.core.truth_(temp__4092__auto___87266))
{var discard_card_es_87267 = temp__4092__auto___87266;var discard_card_el_87268 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_87267));if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_87268,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_87268,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__87136 = cljs.core.seq.call(null,our_cards_es);var chunk__87137 = null;var count__87138 = 0;var i__87139 = 0;while(true){
if((i__87139 < count__87138))
{var our_card_es = cljs.core._nth.call(null,chunk__87137,i__87139);var our_card_el_87269 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_87270 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_87271 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_87269,((cljs.core._EQ_.call(null,suit_87270,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_87270)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_87271))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_87269,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__87272 = seq__87136;
var G__87273 = chunk__87137;
var G__87274 = count__87138;
var G__87275 = (i__87139 + 1);
seq__87136 = G__87272;
chunk__87137 = G__87273;
count__87138 = G__87274;
i__87139 = G__87275;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87136);if(temp__4092__auto__)
{var seq__87136__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87136__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__87136__$1);{
var G__87276 = cljs.core.chunk_rest.call(null,seq__87136__$1);
var G__87277 = c__17389__auto__;
var G__87278 = cljs.core.count.call(null,c__17389__auto__);
var G__87279 = 0;
seq__87136 = G__87276;
chunk__87137 = G__87277;
count__87138 = G__87278;
i__87139 = G__87279;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__87136__$1);var our_card_el_87280 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_87281 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_87282 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_87280,((cljs.core._EQ_.call(null,suit_87281,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_87281)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_87282))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_87280,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__87283 = cljs.core.next.call(null,seq__87136__$1);
var G__87284 = null;
var G__87285 = 0;
var G__87286 = 0;
seq__87136 = G__87283;
chunk__87137 = G__87284;
count__87138 = G__87285;
i__87139 = G__87286;
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
var seq__87140 = cljs.core.seq.call(null,our_cards_es);var chunk__87141 = null;var count__87142 = 0;var i__87143 = 0;while(true){
if((i__87143 < count__87142))
{var our_card_es = cljs.core._nth.call(null,chunk__87141,i__87143);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__87287 = seq__87140;
var G__87288 = chunk__87141;
var G__87289 = count__87142;
var G__87290 = (i__87143 + 1);
seq__87140 = G__87287;
chunk__87141 = G__87288;
count__87142 = G__87289;
i__87143 = G__87290;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87140);if(temp__4092__auto__)
{var seq__87140__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87140__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__87140__$1);{
var G__87291 = cljs.core.chunk_rest.call(null,seq__87140__$1);
var G__87292 = c__17389__auto__;
var G__87293 = cljs.core.count.call(null,c__17389__auto__);
var G__87294 = 0;
seq__87140 = G__87291;
chunk__87141 = G__87292;
count__87142 = G__87293;
i__87143 = G__87294;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__87140__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__87295 = cljs.core.next.call(null,seq__87140__$1);
var G__87296 = null;
var G__87297 = 0;
var G__87298 = 0;
seq__87140 = G__87295;
chunk__87141 = G__87296;
count__87142 = G__87297;
i__87143 = G__87298;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__87144 = cljs.core._EQ_;var expr__87145 = result;if(cljs.core.truth_(pred__87144.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__87145)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__87144.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__87145)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__87144.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__87145)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__87144.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__87145)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__87144.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__87145)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__87145)].join('')));
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
var seq__87147 = cljs.core.seq.call(null,our_cards_es);var chunk__87148 = null;var count__87149 = 0;var i__87150 = 0;while(true){
if((i__87150 < count__87149))
{var our_card_es = cljs.core._nth.call(null,chunk__87148,i__87150);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__87299 = seq__87147;
var G__87300 = chunk__87148;
var G__87301 = count__87149;
var G__87302 = (i__87150 + 1);
seq__87147 = G__87299;
chunk__87148 = G__87300;
count__87149 = G__87301;
i__87150 = G__87302;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87147);if(temp__4092__auto__)
{var seq__87147__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87147__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__87147__$1);{
var G__87303 = cljs.core.chunk_rest.call(null,seq__87147__$1);
var G__87304 = c__17389__auto__;
var G__87305 = cljs.core.count.call(null,c__17389__auto__);
var G__87306 = 0;
seq__87147 = G__87303;
chunk__87148 = G__87304;
count__87149 = G__87305;
i__87150 = G__87306;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__87147__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__87307 = cljs.core.next.call(null,seq__87147__$1);
var G__87308 = null;
var G__87309 = 0;
var G__87310 = 0;
seq__87147 = G__87307;
chunk__87148 = G__87308;
count__87149 = G__87309;
i__87150 = G__87310;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__87314 = report;var map__87314__$1 = ((cljs.core.seq_QMARK_.call(null,map__87314))?cljs.core.apply.call(null,cljs.core.hash_map,map__87314):map__87314);var db_after = cljs.core.get.call(null,map__87314__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__87315 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__87315,0,null);var vec__87316 = cljs.core.nth.call(null,vec__87315,1,null);var game_id = cljs.core.nth.call(null,vec__87316,0,null);var args = cljs.core.nthnext.call(null,vec__87316,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
