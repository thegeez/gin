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
gin.game_panel.EL = 0;
gin.game_panel.START = 1;
gin.game_panel.DRAW = 2;
gin.game_panel.TO = 3;
gin.game_panel.STEP = 4;
gin.game_panel.DX = 5;
gin.game_panel.DY = 6;
gin.game_panel.a = (new Array(((52 * cljs.core.count.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.game_panel.EL,gin.game_panel.START,gin.game_panel.DRAW,gin.game_panel.TO,gin.game_panel.STEP,gin.game_panel.DX,gin.game_panel.DY], null))) + 1)));
gin.game_panel.DO_DRAW = (gin.game_panel.a.length - 1);
gin.game_panel.running = cljs.core.atom.call(null,false);
gin.game_panel.anim_loop = (function anim_loop(){(gin.game_panel.a[gin.game_panel.DO_DRAW] = 0);
var n__17489__auto___29792 = 52;var card_idx_29793 = 0;while(true){
if((card_idx_29793 < n__17489__auto___29792))
{var i_29794 = (card_idx_29793 * 8);if(cljs.core.truth_((gin.game_panel.a[(i_29794 + gin.game_panel.DRAW)])))
{(gin.game_panel.a[gin.game_panel.DO_DRAW] = 1);
var el_29795 = (gin.game_panel.a[(i_29794 + gin.game_panel.EL)]);var vec__29790_29796 = (gin.game_panel.a[(i_29794 + gin.game_panel.START)]);var start_x_29797 = cljs.core.nth.call(null,vec__29790_29796,0,null);var start_y_29798 = cljs.core.nth.call(null,vec__29790_29796,1,null);var vec__29791_29799 = (gin.game_panel.a[(i_29794 + gin.game_panel.TO)]);var x_29800 = cljs.core.nth.call(null,vec__29791_29799,0,null);var y_29801 = cljs.core.nth.call(null,vec__29791_29799,1,null);var to_29802 = vec__29791_29799;var step_29803 = ((gin.game_panel.a[(i_29794 + gin.game_panel.STEP)]) - 1);var dx_29804 = (gin.game_panel.a[(i_29794 + gin.game_panel.DX)]);var dy_29805 = (gin.game_panel.a[(i_29794 + gin.game_panel.DY)]);var nx_29806 = cljs.core.long$.call(null,(start_x_29797 + ((30 - step_29803) * dx_29804)));var ny_29807 = cljs.core.long$.call(null,(start_y_29798 + ((30 - step_29803) * dy_29805)));gin.dom_helpers.set_position.call(null,el_29795,nx_29806,ny_29807);
(gin.game_panel.a[(i_29794 + gin.game_panel.STEP)] = step_29803);
if(((cljs.core._EQ_.call(null,x_29800,nx_29806)) && (cljs.core._EQ_.call(null,y_29801,ny_29807))) || ((step_29803 === 0)) || (((dx_29804 === 0)) && ((dy_29805 === 0))))
{(gin.game_panel.a[(i_29794 + gin.game_panel.DRAW)] = false);
} else
{}
} else
{}
{
var G__29808 = (card_idx_29793 + 1);
card_idx_29793 = G__29808;
continue;
}
} else
{}
break;
}
if(cljs.core._EQ_.call(null,1,(gin.game_panel.a[gin.game_panel.DO_DRAW])))
{return gin.dom_helpers.set_timeout.call(null,anim_loop,10);
} else
{return cljs.core.reset_BANG_.call(null,gin.game_panel.running,false);
}
});
gin.game_panel.animate = (function animate(){if(cljs.core.compare_and_set_BANG_.call(null,gin.game_panel.running,false,true))
{return gin.game_panel.anim_loop.call(null);
} else
{return null;
}
});
gin.game_panel.slide = (function slide(idx,el,to){var i = (idx * 8);var vec__29811 = (function (){var p = gin.dom_helpers.get_position.call(null,el);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})();var from_x = cljs.core.nth.call(null,vec__29811,0,null);var from_y = cljs.core.nth.call(null,vec__29811,1,null);var from = vec__29811;var vec__29812 = to;var to_x = cljs.core.nth.call(null,vec__29812,0,null);var to_y = cljs.core.nth.call(null,vec__29812,1,null);var steps = 30;var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.game_panel.a[i] = el);
(gin.game_panel.a[(i + gin.game_panel.START)] = from);
(gin.game_panel.a[(i + gin.game_panel.DRAW)] = true);
(gin.game_panel.a[(i + gin.game_panel.TO)] = to);
(gin.game_panel.a[(i + gin.game_panel.STEP)] = steps);
(gin.game_panel.a[(i + gin.game_panel.DX)] = dx);
(gin.game_panel.a[(i + gin.game_panel.DY)] = dy);
(gin.game_panel.a[gin.game_panel.DO_DRAW] = 1);
return gin.game_panel.animate.call(null);
});
gin.game_panel.set_msg = (function set_msg(msg){console.log("set-msg",msg);
return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.in_rect = (function in_rect(rect,p__29813){var vec__29815 = p__29813;var x = cljs.core.nth.call(null,vec__29815,0,null);var y = cljs.core.nth.call(null,vec__29815,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
gin.game_panel.draw_table = (function draw_table(conn){var G__29840_29864 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__29840_29864,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__29840_29864,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__29840_29864,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__29841 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__29841,0,null);var pile_y = cljs.core.nth.call(null,vec__29841,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__29841,pile_x,pile_y){
return (function iter__29842(s__29843){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__29841,pile_x,pile_y){
return (function (){var s__29843__$1 = s__29843;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29843__$1);if(temp__4092__auto__)
{var s__29843__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29843__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__29843__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__29845 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__29844 = 0;while(true){
if((i__29844 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__29844);cljs.core.chunk_append.call(null,b__29845,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__29848 = (new goog.fx.Dragger(card_el));G__29848.setLimits(container_wrap);
return G__29848;
})();card_el.dispose = ((function (i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__29844,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__29845,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__29865 = (i__29844 + 1);
i__29844 = G__29865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29845),iter__29842.call(null,cljs.core.chunk_rest.call(null,s__29843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29845),null);
}
} else
{var i = cljs.core.first.call(null,s__29843__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__29849 = (new goog.fx.Dragger(card_el));G__29849.setLimits(container_wrap);
return G__29849;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__29843__$2,temp__4092__auto__,container_wrap,vec__29841,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__29842.call(null,cljs.core.rest.call(null,s__29843__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__29841,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__29841,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__29850_29866 = cljs.core.seq.call(null,cards);var chunk__29851_29867 = null;var count__29852_29868 = 0;var i__29853_29869 = 0;while(true){
if((i__29853_29869 < count__29852_29868))
{var map__29854_29870 = cljs.core._nth.call(null,chunk__29851_29867,i__29853_29869);var map__29854_29871__$1 = ((cljs.core.seq_QMARK_.call(null,map__29854_29870))?cljs.core.apply.call(null,cljs.core.hash_map,map__29854_29870):map__29854_29870);var idx_29872 = cljs.core.get.call(null,map__29854_29871__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_29873 = cljs.core.get.call(null,map__29854_29871__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_29873.anim_idx = idx_29872;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_29873);
{
var G__29874 = seq__29850_29866;
var G__29875 = chunk__29851_29867;
var G__29876 = count__29852_29868;
var G__29877 = (i__29853_29869 + 1);
seq__29850_29866 = G__29874;
chunk__29851_29867 = G__29875;
count__29852_29868 = G__29876;
i__29853_29869 = G__29877;
continue;
}
} else
{var temp__4092__auto___29878 = cljs.core.seq.call(null,seq__29850_29866);if(temp__4092__auto___29878)
{var seq__29850_29879__$1 = temp__4092__auto___29878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29850_29879__$1))
{var c__17389__auto___29880 = cljs.core.chunk_first.call(null,seq__29850_29879__$1);{
var G__29881 = cljs.core.chunk_rest.call(null,seq__29850_29879__$1);
var G__29882 = c__17389__auto___29880;
var G__29883 = cljs.core.count.call(null,c__17389__auto___29880);
var G__29884 = 0;
seq__29850_29866 = G__29881;
chunk__29851_29867 = G__29882;
count__29852_29868 = G__29883;
i__29853_29869 = G__29884;
continue;
}
} else
{var map__29855_29885 = cljs.core.first.call(null,seq__29850_29879__$1);var map__29855_29886__$1 = ((cljs.core.seq_QMARK_.call(null,map__29855_29885))?cljs.core.apply.call(null,cljs.core.hash_map,map__29855_29885):map__29855_29885);var idx_29887 = cljs.core.get.call(null,map__29855_29886__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_29888 = cljs.core.get.call(null,map__29855_29886__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_29888.anim_idx = idx_29887;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_29888);
{
var G__29889 = cljs.core.next.call(null,seq__29850_29879__$1);
var G__29890 = null;
var G__29891 = 0;
var G__29892 = 0;
seq__29850_29866 = G__29889;
chunk__29851_29867 = G__29890;
count__29852_29868 = G__29891;
i__29853_29869 = G__29892;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__29856(s__29857){return (new cljs.core.LazySeq(null,(function (){var s__29857__$1 = s__29857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29857__$1);if(temp__4092__auto__)
{var s__29857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29857__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__29857__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__29859 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__29858 = 0;while(true){
if((i__29858 < size__17357__auto__))
{var map__29862 = cljs.core._nth.call(null,c__17356__auto__,i__29858);var map__29862__$1 = ((cljs.core.seq_QMARK_.call(null,map__29862))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);var card_el = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__29859,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("anim","idx","anim/idx",1204830436),idx,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__29893 = (i__29858 + 1);
i__29858 = G__29893;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29859),iter__29856.call(null,cljs.core.chunk_rest.call(null,s__29857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29859),null);
}
} else
{var map__29863 = cljs.core.first.call(null,s__29857__$2);var map__29863__$1 = ((cljs.core.seq_QMARK_.call(null,map__29863))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);var card_el = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("anim","idx","anim/idx",1204830436),idx,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__29856.call(null,cljs.core.rest.call(null,s__29857__$2)));
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
return (function (p1__29894_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29894_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__29902 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29902,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29902,1,null);var vec__29903 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__29903,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__29903,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y){
return (function (p1__29896_SHARP_,p2__29895_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__29895_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__29895_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__29896_SHARP_ * 53)),(their_region_offset_y + (p1__29896_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__29905){var map__29906 = p__29905;var map__29906__$1 = ((cljs.core.seq_QMARK_.call(null,map__29906))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);var id = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__29906,map__29906__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__29906,map__29906__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__29906,map__29906__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__29906,map__29906__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__29902,their_region_offset_x,their_region_offset_y,vec__29903,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__29904 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__29904,0,null);var second_deal = cljs.core.nth.call(null,vec__29904,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
return (function (p1__29907_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29907_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__29908_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29908_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__29909_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29909_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__29910_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__29910_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__29953 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__29953,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__29953,1,null);var seq__29954_29994 = cljs.core.seq.call(null,pile_cards_es);var chunk__29956_29995 = null;var count__29957_29996 = 0;var i__29958_29997 = 0;while(true){
if((i__29958_29997 < count__29957_29996))
{var pile_card_es_29998 = cljs.core._nth.call(null,chunk__29956_29995,i__29958_29997);var pile_card_el_29999 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_29998));gin.dom_helpers.set_card_class.call(null,pile_card_el_29999,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_29999);
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(pile_card_es_29998),pile_card_el_29999,gin.game_panel.pile_position.call(null));
{
var G__30000 = seq__29954_29994;
var G__30001 = chunk__29956_29995;
var G__30002 = count__29957_29996;
var G__30003 = (i__29958_29997 + 1);
seq__29954_29994 = G__30000;
chunk__29956_29995 = G__30001;
count__29957_29996 = G__30002;
i__29958_29997 = G__30003;
continue;
}
} else
{var temp__4092__auto___30004 = cljs.core.seq.call(null,seq__29954_29994);if(temp__4092__auto___30004)
{var seq__29954_30005__$1 = temp__4092__auto___30004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29954_30005__$1))
{var c__17389__auto___30006 = cljs.core.chunk_first.call(null,seq__29954_30005__$1);{
var G__30007 = cljs.core.chunk_rest.call(null,seq__29954_30005__$1);
var G__30008 = c__17389__auto___30006;
var G__30009 = cljs.core.count.call(null,c__17389__auto___30006);
var G__30010 = 0;
seq__29954_29994 = G__30007;
chunk__29956_29995 = G__30008;
count__29957_29996 = G__30009;
i__29958_29997 = G__30010;
continue;
}
} else
{var pile_card_es_30011 = cljs.core.first.call(null,seq__29954_30005__$1);var pile_card_el_30012 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_30011));gin.dom_helpers.set_card_class.call(null,pile_card_el_30012,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_30012);
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(pile_card_es_30011),pile_card_el_30012,gin.game_panel.pile_position.call(null));
{
var G__30013 = cljs.core.next.call(null,seq__29954_30005__$1);
var G__30014 = null;
var G__30015 = 0;
var G__30016 = 0;
seq__29954_29994 = G__30013;
chunk__29956_29995 = G__30014;
count__29957_29996 = G__30015;
i__29958_29997 = G__30016;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___30017 = cljs.core.last.call(null,pile_cards_es);if(cljs.core.truth_(temp__4092__auto___30017))
{var pile_card_es_30018 = temp__4092__auto___30017;var pile_card_el_30019 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_30018));if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_30019,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_30019,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_30020 = cljs.core.map.call(null,(function (p1__29911_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__29911_SHARP_));
}),opp_cards_es);var vec__29960_30021 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_30020)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_30022 = cljs.core.nth.call(null,vec__29960_30021,0,null);var y_step_30023 = cljs.core.nth.call(null,vec__29960_30021,1,null);console.log("opp reg");
var seq__29961_30024 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__29962_30025 = null;var count__29963_30026 = 0;var i__29964_30027 = 0;while(true){
if((i__29964_30027 < count__29963_30026))
{var vec__29965_30028 = cljs.core._nth.call(null,chunk__29962_30025,i__29964_30027);var i_30029 = cljs.core.nth.call(null,vec__29965_30028,0,null);var e_30030 = cljs.core.nth.call(null,vec__29965_30028,1,null);var idx_30031 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_30030);var el_30032 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_30030));gin.game_panel.slide.call(null,idx_30031,el_30032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_30029 * x_step_30022))),cljs.core.long$.call(null,(their_region_offset_y + (i_30029 * y_step_30023)))], null));
{
var G__30033 = seq__29961_30024;
var G__30034 = chunk__29962_30025;
var G__30035 = count__29963_30026;
var G__30036 = (i__29964_30027 + 1);
seq__29961_30024 = G__30033;
chunk__29962_30025 = G__30034;
count__29963_30026 = G__30035;
i__29964_30027 = G__30036;
continue;
}
} else
{var temp__4092__auto___30037 = cljs.core.seq.call(null,seq__29961_30024);if(temp__4092__auto___30037)
{var seq__29961_30038__$1 = temp__4092__auto___30037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29961_30038__$1))
{var c__17389__auto___30039 = cljs.core.chunk_first.call(null,seq__29961_30038__$1);{
var G__30040 = cljs.core.chunk_rest.call(null,seq__29961_30038__$1);
var G__30041 = c__17389__auto___30039;
var G__30042 = cljs.core.count.call(null,c__17389__auto___30039);
var G__30043 = 0;
seq__29961_30024 = G__30040;
chunk__29962_30025 = G__30041;
count__29963_30026 = G__30042;
i__29964_30027 = G__30043;
continue;
}
} else
{var vec__29966_30044 = cljs.core.first.call(null,seq__29961_30038__$1);var i_30045 = cljs.core.nth.call(null,vec__29966_30044,0,null);var e_30046 = cljs.core.nth.call(null,vec__29966_30044,1,null);var idx_30047 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_30046);var el_30048 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_30046));gin.game_panel.slide.call(null,idx_30047,el_30048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_30045 * x_step_30022))),cljs.core.long$.call(null,(their_region_offset_y + (i_30045 * y_step_30023)))], null));
{
var G__30049 = cljs.core.next.call(null,seq__29961_30038__$1);
var G__30050 = null;
var G__30051 = 0;
var G__30052 = 0;
seq__29961_30024 = G__30049;
chunk__29962_30025 = G__30050;
count__29963_30026 = G__30051;
i__29964_30027 = G__30052;
continue;
}
}
} else
{}
}
break;
}
var seq__29967_30053 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_30020,opp_cards_es));var chunk__29968_30054 = null;var count__29969_30055 = 0;var i__29970_30056 = 0;while(true){
if((i__29970_30056 < count__29969_30055))
{var vec__29971_30057 = cljs.core._nth.call(null,chunk__29968_30054,i__29970_30056);var el_30058 = cljs.core.nth.call(null,vec__29971_30057,0,null);var es_30059 = cljs.core.nth.call(null,vec__29971_30057,1,null);var suit_30060 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_30059);var rank_30061 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_30059);gin.dom_helpers.show_on_top.call(null,el_30058);
gin.dom_helpers.set_card_class.call(null,el_30058,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_30060))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_30060)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30061))].join('')));
{
var G__30062 = seq__29967_30053;
var G__30063 = chunk__29968_30054;
var G__30064 = count__29969_30055;
var G__30065 = (i__29970_30056 + 1);
seq__29967_30053 = G__30062;
chunk__29968_30054 = G__30063;
count__29969_30055 = G__30064;
i__29970_30056 = G__30065;
continue;
}
} else
{var temp__4092__auto___30066 = cljs.core.seq.call(null,seq__29967_30053);if(temp__4092__auto___30066)
{var seq__29967_30067__$1 = temp__4092__auto___30066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29967_30067__$1))
{var c__17389__auto___30068 = cljs.core.chunk_first.call(null,seq__29967_30067__$1);{
var G__30069 = cljs.core.chunk_rest.call(null,seq__29967_30067__$1);
var G__30070 = c__17389__auto___30068;
var G__30071 = cljs.core.count.call(null,c__17389__auto___30068);
var G__30072 = 0;
seq__29967_30053 = G__30069;
chunk__29968_30054 = G__30070;
count__29969_30055 = G__30071;
i__29970_30056 = G__30072;
continue;
}
} else
{var vec__29972_30073 = cljs.core.first.call(null,seq__29967_30067__$1);var el_30074 = cljs.core.nth.call(null,vec__29972_30073,0,null);var es_30075 = cljs.core.nth.call(null,vec__29972_30073,1,null);var suit_30076 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_30075);var rank_30077 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_30075);gin.dom_helpers.show_on_top.call(null,el_30074);
gin.dom_helpers.set_card_class.call(null,el_30074,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_30076))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_30076)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30077))].join('')));
{
var G__30078 = cljs.core.next.call(null,seq__29967_30067__$1);
var G__30079 = null;
var G__30080 = 0;
var G__30081 = 0;
seq__29967_30053 = G__30078;
chunk__29968_30054 = G__30079;
count__29969_30055 = G__30080;
i__29970_30056 = G__30081;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__29973_30082 = cljs.core.seq.call(null,discard_cards_es);var chunk__29975_30083 = null;var count__29976_30084 = 0;var i__29977_30085 = 0;while(true){
if((i__29977_30085 < count__29976_30084))
{var discard_card_es_30086 = cljs.core._nth.call(null,chunk__29975_30083,i__29977_30085);var discard_card_el_30087 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_30086));var suit_30088 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_30086);var rank_30089 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_30086);gin.dom_helpers.set_card_class.call(null,discard_card_el_30087,[cljs.core.str(cljs.core.name.call(null,suit_30088)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30089))].join(''));
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(discard_card_es_30086),discard_card_el_30087,gin.game_panel.discard_position.call(null));
{
var G__30090 = seq__29973_30082;
var G__30091 = chunk__29975_30083;
var G__30092 = count__29976_30084;
var G__30093 = (i__29977_30085 + 1);
seq__29973_30082 = G__30090;
chunk__29975_30083 = G__30091;
count__29976_30084 = G__30092;
i__29977_30085 = G__30093;
continue;
}
} else
{var temp__4092__auto___30094 = cljs.core.seq.call(null,seq__29973_30082);if(temp__4092__auto___30094)
{var seq__29973_30095__$1 = temp__4092__auto___30094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29973_30095__$1))
{var c__17389__auto___30096 = cljs.core.chunk_first.call(null,seq__29973_30095__$1);{
var G__30097 = cljs.core.chunk_rest.call(null,seq__29973_30095__$1);
var G__30098 = c__17389__auto___30096;
var G__30099 = cljs.core.count.call(null,c__17389__auto___30096);
var G__30100 = 0;
seq__29973_30082 = G__30097;
chunk__29975_30083 = G__30098;
count__29976_30084 = G__30099;
i__29977_30085 = G__30100;
continue;
}
} else
{var discard_card_es_30101 = cljs.core.first.call(null,seq__29973_30095__$1);var discard_card_el_30102 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_30101));var suit_30103 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_30101);var rank_30104 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_30101);gin.dom_helpers.set_card_class.call(null,discard_card_el_30102,[cljs.core.str(cljs.core.name.call(null,suit_30103)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30104))].join(''));
gin.game_panel.slide.call(null,new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(discard_card_es_30101),discard_card_el_30102,gin.game_panel.discard_position.call(null));
{
var G__30105 = cljs.core.next.call(null,seq__29973_30095__$1);
var G__30106 = null;
var G__30107 = 0;
var G__30108 = 0;
seq__29973_30082 = G__30105;
chunk__29975_30083 = G__30106;
count__29976_30084 = G__30107;
i__29977_30085 = G__30108;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___30109 = cljs.core.last.call(null,discard_cards_es);if(cljs.core.truth_(temp__4092__auto___30109))
{var discard_card_es_30110 = temp__4092__auto___30109;var discard_card_el_30111 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_30110));gin.dom_helpers.show_on_top.call(null,discard_card_el_30111);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_30111,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_30111,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__29979 = cljs.core.seq.call(null,our_cards_es);var chunk__29980 = null;var count__29981 = 0;var i__29982 = 0;while(true){
if((i__29982 < count__29981))
{var our_card_es = cljs.core._nth.call(null,chunk__29980,i__29982);var our_card_el_30112 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_30113 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_30114 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_30112,((cljs.core._EQ_.call(null,suit_30113,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_30113)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30114))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_30112,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__30115 = seq__29979;
var G__30116 = chunk__29980;
var G__30117 = count__29981;
var G__30118 = (i__29982 + 1);
seq__29979 = G__30115;
chunk__29980 = G__30116;
count__29981 = G__30117;
i__29982 = G__30118;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29979);if(temp__4092__auto__)
{var seq__29979__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29979__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29979__$1);{
var G__30119 = cljs.core.chunk_rest.call(null,seq__29979__$1);
var G__30120 = c__17389__auto__;
var G__30121 = cljs.core.count.call(null,c__17389__auto__);
var G__30122 = 0;
seq__29979 = G__30119;
chunk__29980 = G__30120;
count__29981 = G__30121;
i__29982 = G__30122;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__29979__$1);var our_card_el_30123 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_30124 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_30125 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_30123,((cljs.core._EQ_.call(null,suit_30124,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_30124)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_30125))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_30123,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__30126 = cljs.core.next.call(null,seq__29979__$1);
var G__30127 = null;
var G__30128 = 0;
var G__30129 = 0;
seq__29979 = G__30126;
chunk__29980 = G__30127;
count__29981 = G__30128;
i__29982 = G__30129;
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
var seq__29983 = cljs.core.seq.call(null,our_cards_es);var chunk__29984 = null;var count__29985 = 0;var i__29986 = 0;while(true){
if((i__29986 < count__29985))
{var our_card_es = cljs.core._nth.call(null,chunk__29984,i__29986);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__30130 = seq__29983;
var G__30131 = chunk__29984;
var G__30132 = count__29985;
var G__30133 = (i__29986 + 1);
seq__29983 = G__30130;
chunk__29984 = G__30131;
count__29985 = G__30132;
i__29986 = G__30133;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29983);if(temp__4092__auto__)
{var seq__29983__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29983__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29983__$1);{
var G__30134 = cljs.core.chunk_rest.call(null,seq__29983__$1);
var G__30135 = c__17389__auto__;
var G__30136 = cljs.core.count.call(null,c__17389__auto__);
var G__30137 = 0;
seq__29983 = G__30134;
chunk__29984 = G__30135;
count__29985 = G__30136;
i__29986 = G__30137;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__29983__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__30138 = cljs.core.next.call(null,seq__29983__$1);
var G__30139 = null;
var G__30140 = 0;
var G__30141 = 0;
seq__29983 = G__30138;
chunk__29984 = G__30139;
count__29985 = G__30140;
i__29986 = G__30141;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__29987 = cljs.core._EQ_;var expr__29988 = result;if(cljs.core.truth_(pred__29987.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__29988)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__29987.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__29988)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__29987.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__29988)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__29987.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__29988)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__29987.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__29988)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29988)].join('')));
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
var seq__29990 = cljs.core.seq.call(null,our_cards_es);var chunk__29991 = null;var count__29992 = 0;var i__29993 = 0;while(true){
if((i__29993 < count__29992))
{var our_card_es = cljs.core._nth.call(null,chunk__29991,i__29993);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__30142 = seq__29990;
var G__30143 = chunk__29991;
var G__30144 = count__29992;
var G__30145 = (i__29993 + 1);
seq__29990 = G__30142;
chunk__29991 = G__30143;
count__29992 = G__30144;
i__29993 = G__30145;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29990);if(temp__4092__auto__)
{var seq__29990__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29990__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__29990__$1);{
var G__30146 = cljs.core.chunk_rest.call(null,seq__29990__$1);
var G__30147 = c__17389__auto__;
var G__30148 = cljs.core.count.call(null,c__17389__auto__);
var G__30149 = 0;
seq__29990 = G__30146;
chunk__29991 = G__30147;
count__29992 = G__30148;
i__29993 = G__30149;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__29990__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__30150 = cljs.core.next.call(null,seq__29990__$1);
var G__30151 = null;
var G__30152 = 0;
var G__30153 = 0;
seq__29990 = G__30150;
chunk__29991 = G__30151;
count__29992 = G__30152;
i__29993 = G__30153;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__30157 = report;var map__30157__$1 = ((cljs.core.seq_QMARK_.call(null,map__30157))?cljs.core.apply.call(null,cljs.core.hash_map,map__30157):map__30157);var db_after = cljs.core.get.call(null,map__30157__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__30158 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__30158,0,null);var vec__30159 = cljs.core.nth.call(null,vec__30158,1,null);var game_id = cljs.core.nth.call(null,vec__30159,0,null);var args = cljs.core.nthnext.call(null,vec__30159,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
