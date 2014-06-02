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
gin.game_panel.STEPS = 5;
gin.game_panel.DX = 6;
gin.game_panel.DY = 7;
gin.game_panel.FINISH = 8;
gin.game_panel.FIELD_COUNT = cljs.core.count.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.game_panel.EL,gin.game_panel.START,gin.game_panel.DRAW,gin.game_panel.TO,gin.game_panel.STEP,gin.game_panel.STEPS,gin.game_panel.DX,gin.game_panel.DY,gin.game_panel.FINISH], null));
gin.game_panel.a = (new Array(((52 * gin.game_panel.FIELD_COUNT) + 1)));
gin.game_panel.DO_DRAW = (gin.game_panel.a.length - 1);
gin.game_panel.running = cljs.core.atom.call(null,false);
gin.game_panel.anim_loop = (function anim_loop(){(gin.game_panel.a[gin.game_panel.DO_DRAW] = 0);
var n__17489__auto___43197 = 52;var card_idx_43198 = 0;while(true){
if((card_idx_43198 < n__17489__auto___43197))
{var i_43199 = (card_idx_43198 * gin.game_panel.FIELD_COUNT);if(cljs.core.truth_((gin.game_panel.a[(i_43199 + gin.game_panel.DRAW)])))
{(gin.game_panel.a[gin.game_panel.DO_DRAW] = 1);
var el_43200 = (gin.game_panel.a[(i_43199 + gin.game_panel.EL)]);var vec__43195_43201 = (gin.game_panel.a[(i_43199 + gin.game_panel.START)]);var start_x_43202 = cljs.core.nth.call(null,vec__43195_43201,0,null);var start_y_43203 = cljs.core.nth.call(null,vec__43195_43201,1,null);var vec__43196_43204 = (gin.game_panel.a[(i_43199 + gin.game_panel.TO)]);var x_43205 = cljs.core.nth.call(null,vec__43196_43204,0,null);var y_43206 = cljs.core.nth.call(null,vec__43196_43204,1,null);var to_43207 = vec__43196_43204;var step_43208 = ((gin.game_panel.a[(i_43199 + gin.game_panel.STEP)]) - 1);var dx_43209 = (gin.game_panel.a[(i_43199 + gin.game_panel.DX)]);var dy_43210 = (gin.game_panel.a[(i_43199 + gin.game_panel.DY)]);var steps_43211 = (gin.game_panel.a[(i_43199 + gin.game_panel.STEPS)]);var nx_43212 = cljs.core.long$.call(null,(start_x_43202 + ((steps_43211 - step_43208) * dx_43209)));var ny_43213 = cljs.core.long$.call(null,(start_y_43203 + ((steps_43211 - step_43208) * dy_43210)));gin.dom_helpers.set_position.call(null,el_43200,nx_43212,ny_43213);
(gin.game_panel.a[(i_43199 + gin.game_panel.STEP)] = step_43208);
if(((cljs.core._EQ_.call(null,x_43205,nx_43212)) && (cljs.core._EQ_.call(null,y_43206,ny_43213))) || ((step_43208 === 0)) || (((dx_43209 === 0)) && ((dy_43210 === 0))))
{(gin.game_panel.a[(i_43199 + gin.game_panel.STEP)] = 0);
(gin.game_panel.a[(i_43199 + gin.game_panel.DRAW)] = false);
var finish_43214 = (gin.game_panel.a[(i_43199 + gin.game_panel.FINISH)]);if(cljs.core.fn_QMARK_.call(null,finish_43214))
{gin.dom_helpers.set_timeout.call(null,finish_43214,0);
} else
{}
} else
{}
} else
{}
{
var G__43215 = (card_idx_43198 + 1);
card_idx_43198 = G__43215;
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
/**
* @param {...*} var_args
*/
gin.game_panel.slide = (function() { 
var slide__delegate = function (el,to,p__43216){var vec__43220 = p__43216;var finish = cljs.core.nth.call(null,vec__43220,0,null);var idx = el.anim_idx;var i = (idx * gin.game_panel.FIELD_COUNT);var vec__43221 = (function (){var p = gin.dom_helpers.get_position.call(null,el);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})();var from_x = cljs.core.nth.call(null,vec__43221,0,null);var from_y = cljs.core.nth.call(null,vec__43221,1,null);var from = vec__43221;var vec__43222 = to;var to_x = cljs.core.nth.call(null,vec__43222,0,null);var to_y = cljs.core.nth.call(null,vec__43222,1,null);var step = (gin.game_panel.a[(i + gin.game_panel.STEP)]);var steps = (((step > 0))?step:30);var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.game_panel.a[i] = el);
(gin.game_panel.a[(i + gin.game_panel.START)] = from);
(gin.game_panel.a[(i + gin.game_panel.DRAW)] = true);
(gin.game_panel.a[(i + gin.game_panel.TO)] = to);
(gin.game_panel.a[(i + gin.game_panel.STEP)] = steps);
(gin.game_panel.a[(i + gin.game_panel.STEPS)] = steps);
(gin.game_panel.a[(i + gin.game_panel.DX)] = dx);
(gin.game_panel.a[(i + gin.game_panel.DY)] = dy);
(gin.game_panel.a[(i + gin.game_panel.FINISH)] = finish);
(gin.game_panel.a[gin.game_panel.DO_DRAW] = 1);
return gin.game_panel.animate.call(null);
};
var slide = function (el,to,var_args){
var p__43216 = null;if (arguments.length > 2) {
  p__43216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slide__delegate.call(this,el,to,p__43216);};
slide.cljs$lang$maxFixedArity = 2;
slide.cljs$lang$applyTo = (function (arglist__43223){
var el = cljs.core.first(arglist__43223);
arglist__43223 = cljs.core.next(arglist__43223);
var to = cljs.core.first(arglist__43223);
var p__43216 = cljs.core.rest(arglist__43223);
return slide__delegate(el,to,p__43216);
});
slide.cljs$core$IFn$_invoke$arity$variadic = slide__delegate;
return slide;
})()
;
gin.game_panel.set_msg = (function set_msg(msg){console.log("set-msg",msg);
return gin.dom_helpers.set_text.call(null,gin.dom_helpers.get_element.call(null,"msg"),msg);
});
gin.game_panel.in_rect = (function in_rect(rect,p__43224){var vec__43226 = p__43224;var x = cljs.core.nth.call(null,vec__43226,0,null);var y = cljs.core.nth.call(null,vec__43226,1,null);return ((x >= rect.left)) && ((x <= (rect.left + rect.width))) && ((y >= rect.top)) && ((y <= (rect.top + rect.height)));
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
return gin.game_panel.slide.call(null,card_el,gin.game_panel.discard_position.call(null));
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
return gin.game_panel.slide.call(null,card_el,gin.game_panel.discard_position.call(null),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_discard_chosen,card_id], null)], null));
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
{return gin.game_panel.slide.call(null,card_el,(function (){var p = card_el.drag_origin;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})());
}
})], null);
});
gin.game_panel.draw_table = (function draw_table(conn){var G__43251_43275 = gin.dom_helpers.get_element.call(null,"game-panel");gin.dom_helpers.append.call(null,G__43251_43275,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"their_region",new cljs.core.Keyword(null,"class","class",1108647146),"region their_region"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile_row","div.pile_row",1891661180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pile","div.pile",1324047329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"pile"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.discard_pile","div.discard_pile",3988861410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"discard_pile"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"our_region",new cljs.core.Keyword(null,"class","class",1108647146),"region our_region"], null)], null)], null)));
gin.dom_helpers.append.call(null,G__43251_43275,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.msg","div.msg",2686474262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"msg"], null)], null)));
gin.dom_helpers.append.call(null,G__43251_43275,gin.dom_helpers.build.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("offscreen_loading card card_back")].join('')], null)], null)));
var container_wrap = (function (){var r = goog.style.getBounds(gin.dom_helpers.get_element.call(null,"game-panel"));return (new goog.math.Rect(r.left,r.top,(r.width - 81),((r.height - 96) - 37)));
})();var vec__43252 = gin.game_panel.pile_position.call(null);var pile_x = cljs.core.nth.call(null,vec__43252,0,null);var pile_y = cljs.core.nth.call(null,vec__43252,1,null);var cards = (function (){var iter__17358__auto__ = ((function (container_wrap,vec__43252,pile_x,pile_y){
return (function iter__43253(s__43254){return (new cljs.core.LazySeq(null,((function (container_wrap,vec__43252,pile_x,pile_y){
return (function (){var s__43254__$1 = s__43254;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43254__$1);if(temp__4092__auto__)
{var s__43254__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43254__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__43254__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__43256 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__43255 = 0;while(true){
if((i__43255 < size__17357__auto__))
{var i = cljs.core._nth.call(null,c__17356__auto__,i__43255);cljs.core.chunk_append.call(null,b__43256,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__43259 = (new goog.fx.Dragger(card_el));G__43259.setLimits(container_wrap);
return G__43259;
})();card_el.dispose = ((function (i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(i__43255,card_id,card_el,dragger,i,c__17356__auto__,size__17357__auto__,b__43256,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})());
{
var G__43276 = (i__43255 + 1);
i__43255 = G__43276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43256),iter__43253.call(null,cljs.core.chunk_rest.call(null,s__43254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43256),null);
}
} else
{var i = cljs.core.first.call(null,s__43254__$2);return cljs.core.cons.call(null,(function (){var card_id = [cljs.core.str("card-"),cljs.core.str(i)].join('');var card_el = gin.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"class","class",1108647146),"card card_back"], null));var dragger = (function (){var G__43260 = (new goog.fx.Dragger(card_el));G__43260.setLimits(container_wrap);
return G__43260;
})();card_el.dispose = ((function (card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (){return dragger.dispose;
});})(card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
;
gin.game_panel.set_drag_handler.call(null,card_el,gin.game_panel.undraggable_handler.call(null,conn));
goog.events.listen(dragger,goog.fx.Dragger.EventType.START,((function (card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-start","drag-start",2816557563).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.DRAG,((function (card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
);
goog.events.listen(dragger,goog.fx.Dragger.EventType.END,((function (card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y){
return (function (event){return new cljs.core.Keyword(null,"drag-end","drag-end",4466041908).cljs$core$IFn$_invoke$arity$1(card_el.drag_handler).call(null,card_id,event);
});})(card_id,card_el,dragger,i,s__43254__$2,temp__4092__auto__,container_wrap,vec__43252,pile_x,pile_y))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),card_id,new cljs.core.Keyword(null,"idx","idx",1014008367),i,new cljs.core.Keyword(null,"card-el","card-el",1567790070),card_el], null);
})(),iter__43253.call(null,cljs.core.rest.call(null,s__43254__$2)));
}
} else
{return null;
}
break;
}
});})(container_wrap,vec__43252,pile_x,pile_y))
,null,null));
});})(container_wrap,vec__43252,pile_x,pile_y))
;return iter__17358__auto__.call(null,cljs.core.range.call(null,52));
})();var seq__43261_43277 = cljs.core.seq.call(null,cards);var chunk__43262_43278 = null;var count__43263_43279 = 0;var i__43264_43280 = 0;while(true){
if((i__43264_43280 < count__43263_43279))
{var map__43265_43281 = cljs.core._nth.call(null,chunk__43262_43278,i__43264_43280);var map__43265_43282__$1 = ((cljs.core.seq_QMARK_.call(null,map__43265_43281))?cljs.core.apply.call(null,cljs.core.hash_map,map__43265_43281):map__43265_43281);var idx_43283 = cljs.core.get.call(null,map__43265_43282__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_43284 = cljs.core.get.call(null,map__43265_43282__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_43284.anim_idx = idx_43283;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_43284);
{
var G__43285 = seq__43261_43277;
var G__43286 = chunk__43262_43278;
var G__43287 = count__43263_43279;
var G__43288 = (i__43264_43280 + 1);
seq__43261_43277 = G__43285;
chunk__43262_43278 = G__43286;
count__43263_43279 = G__43287;
i__43264_43280 = G__43288;
continue;
}
} else
{var temp__4092__auto___43289 = cljs.core.seq.call(null,seq__43261_43277);if(temp__4092__auto___43289)
{var seq__43261_43290__$1 = temp__4092__auto___43289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43261_43290__$1))
{var c__17389__auto___43291 = cljs.core.chunk_first.call(null,seq__43261_43290__$1);{
var G__43292 = cljs.core.chunk_rest.call(null,seq__43261_43290__$1);
var G__43293 = c__17389__auto___43291;
var G__43294 = cljs.core.count.call(null,c__17389__auto___43291);
var G__43295 = 0;
seq__43261_43277 = G__43292;
chunk__43262_43278 = G__43293;
count__43263_43279 = G__43294;
i__43264_43280 = G__43295;
continue;
}
} else
{var map__43266_43296 = cljs.core.first.call(null,seq__43261_43290__$1);var map__43266_43297__$1 = ((cljs.core.seq_QMARK_.call(null,map__43266_43296))?cljs.core.apply.call(null,cljs.core.hash_map,map__43266_43296):map__43266_43296);var idx_43298 = cljs.core.get.call(null,map__43266_43297__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var card_el_43299 = cljs.core.get.call(null,map__43266_43297__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));card_el_43299.anim_idx = idx_43298;
gin.dom_helpers.append.call(null,gin.dom_helpers.get_element.call(null,"pile"),card_el_43299);
{
var G__43300 = cljs.core.next.call(null,seq__43261_43290__$1);
var G__43301 = null;
var G__43302 = 0;
var G__43303 = 0;
seq__43261_43277 = G__43300;
chunk__43262_43278 = G__43301;
count__43263_43279 = G__43302;
i__43264_43280 = G__43303;
continue;
}
}
} else
{}
}
break;
}
return datascript.transact_BANG_.call(null,conn,(function (){var iter__17358__auto__ = (function iter__43267(s__43268){return (new cljs.core.LazySeq(null,(function (){var s__43268__$1 = s__43268;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43268__$1);if(temp__4092__auto__)
{var s__43268__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43268__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__43268__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__43270 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__43269 = 0;while(true){
if((i__43269 < size__17357__auto__))
{var map__43273 = cljs.core._nth.call(null,c__17356__auto__,i__43269);var map__43273__$1 = ((cljs.core.seq_QMARK_.call(null,map__43273))?cljs.core.apply.call(null,cljs.core.hash_map,map__43273):map__43273);var card_el = cljs.core.get.call(null,map__43273__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__43273__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__43273__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__43270,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__43304 = (i__43269 + 1);
i__43269 = G__43304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43270),iter__43267.call(null,cljs.core.chunk_rest.call(null,s__43268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43270),null);
}
} else
{var map__43274 = cljs.core.first.call(null,s__43268__$2);var map__43274__$1 = ((cljs.core.seq_QMARK_.call(null,map__43274))?cljs.core.apply.call(null,cljs.core.hash_map,map__43274):map__43274);var card_el = cljs.core.get.call(null,map__43274__$1,new cljs.core.Keyword(null,"card-el","card-el",1567790070));var idx = cljs.core.get.call(null,map__43274__$1,new cljs.core.Keyword(null,"idx","idx",1014008367));var id = cljs.core.get.call(null,map__43274__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),(-1 * idx),new cljs.core.Keyword("dom","id","dom/id",1020278687),id,new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__43267.call(null,cljs.core.rest.call(null,s__43268__$2)));
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
return (function (p1__43305_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43305_SHARP_], null));
});})(game,_,opp_cards_el))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var discard = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cljs.core.first.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game))], null));var vec__43313 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__43313,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__43313,1,null);var vec__43314 = gin.game_panel.our_region_position.call(null);var our_region_offset_x = cljs.core.nth.call(null,vec__43314,0,null);var our_region_offset_y = cljs.core.nth.call(null,vec__43314,1,null);var their_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y){
return (function (p1__43307_SHARP_,p2__43306_SHARP_){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y){
return (function (){return gin.dom_helpers.show_on_top.call(null,p2__43306_SHARP_);
});})(game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y))
], null),gin.dom_helpers.slide_from.call(null,p2__43306_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(their_region_offset_x + (p1__43307_SHARP_ * 53)),(their_region_offset_y + (p1__43307_SHARP_ * 4))], null)));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y))
,cljs.core.range.call(null),opp_cards_el);var our_deal = cljs.core.mapcat.call(null,((function (game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y,their_deal){
return (function (idx,p__43316){var map__43317 = p__43316;var map__43317__$1 = ((cljs.core.seq_QMARK_.call(null,map__43317))?cljs.core.apply.call(null,cljs.core.hash_map,map__43317):map__43317);var id = cljs.core.get.call(null,map__43317__$1,new cljs.core.Keyword("dom","id","dom/id",1020278687));var suit = cljs.core.get.call(null,map__43317__$1,new cljs.core.Keyword("card","suit","card/suit",1215370835));var rank = cljs.core.get.call(null,map__43317__$1,new cljs.core.Keyword("card","rank","card/rank",1215352178));var el = gin.dom_helpers.get_element.call(null,id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__43317,map__43317__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){return gin.dom_helpers.show_on_top.call(null,el);
});})(el,map__43317,map__43317__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y,their_deal))
], null),gin.dom_helpers.slide_from.call(null,el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(our_region_offset_x + (idx * 53)),(our_region_offset_y + (idx * 4))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (el,map__43317,map__43317__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y,their_deal){
return (function (){gin.dom_helpers.set_card_class.call(null,el,[cljs.core.str(cljs.core.name.call(null,suit)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank))].join(''));
return gin.game_panel.set_drag_handler.call(null,el,gin.game_panel.home_region_handler.call(null,conn));
});})(el,map__43317,map__43317__$1,id,suit,rank,game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y,their_deal))
], null));
});})(game,_,opp_cards_el,our_cards_es,discard,vec__43313,their_region_offset_x,their_region_offset_y,vec__43314,our_region_offset_x,our_region_offset_y,their_deal))
,cljs.core.range.call(null),our_cards_es);var vec__43315 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_deal,their_deal], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [their_deal,our_deal], null));var first_deal = cljs.core.nth.call(null,vec__43315,0,null);var second_deal = cljs.core.nth.call(null,vec__43315,1,null);return gin.dom_helpers.schedule.call(null,cljs.core.concat.call(null,first_deal,second_deal,(function (){var discard_el = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return gin.dom_helpers.show_on_top.call(null,discard_el);
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
return (function (p1__43318_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43318_SHARP_], null));
});})(_,us_pick_card))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var opp_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es){
return (function (p1__43319_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43319_SHARP_], null));
});})(_,us_pick_card,our_cards_es))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var pile_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es){
return (function (p1__43320_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43320_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es))
,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var discard_cards_es = cljs.core.map.call(null,((function (_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es){
return (function (p1__43321_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__43321_SHARP_], null));
});})(_,us_pick_card,our_cards_es,opp_cards_es,pile_cards_es))
,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var vec__43364 = gin.game_panel.their_region_position.call(null);var their_region_offset_x = cljs.core.nth.call(null,vec__43364,0,null);var their_region_offset_y = cljs.core.nth.call(null,vec__43364,1,null);var seq__43365_43405 = cljs.core.seq.call(null,pile_cards_es);var chunk__43367_43406 = null;var count__43368_43407 = 0;var i__43369_43408 = 0;while(true){
if((i__43369_43408 < count__43368_43407))
{var pile_card_es_43409 = cljs.core._nth.call(null,chunk__43367_43406,i__43369_43408);var pile_card_el_43410 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_43409));gin.dom_helpers.set_card_class.call(null,pile_card_el_43410,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_43410);
gin.game_panel.slide.call(null,pile_card_el_43410,gin.game_panel.pile_position.call(null));
{
var G__43411 = seq__43365_43405;
var G__43412 = chunk__43367_43406;
var G__43413 = count__43368_43407;
var G__43414 = (i__43369_43408 + 1);
seq__43365_43405 = G__43411;
chunk__43367_43406 = G__43412;
count__43368_43407 = G__43413;
i__43369_43408 = G__43414;
continue;
}
} else
{var temp__4092__auto___43415 = cljs.core.seq.call(null,seq__43365_43405);if(temp__4092__auto___43415)
{var seq__43365_43416__$1 = temp__4092__auto___43415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43365_43416__$1))
{var c__17389__auto___43417 = cljs.core.chunk_first.call(null,seq__43365_43416__$1);{
var G__43418 = cljs.core.chunk_rest.call(null,seq__43365_43416__$1);
var G__43419 = c__17389__auto___43417;
var G__43420 = cljs.core.count.call(null,c__17389__auto___43417);
var G__43421 = 0;
seq__43365_43405 = G__43418;
chunk__43367_43406 = G__43419;
count__43368_43407 = G__43420;
i__43369_43408 = G__43421;
continue;
}
} else
{var pile_card_es_43422 = cljs.core.first.call(null,seq__43365_43416__$1);var pile_card_el_43423 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_43422));gin.dom_helpers.set_card_class.call(null,pile_card_el_43423,"card_back");
gin.dom_helpers.show_on_top.call(null,pile_card_el_43423);
gin.game_panel.slide.call(null,pile_card_el_43423,gin.game_panel.pile_position.call(null));
{
var G__43424 = cljs.core.next.call(null,seq__43365_43416__$1);
var G__43425 = null;
var G__43426 = 0;
var G__43427 = 0;
seq__43365_43405 = G__43424;
chunk__43367_43406 = G__43425;
count__43368_43407 = G__43426;
i__43369_43408 = G__43427;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___43428 = cljs.core.last.call(null,pile_cards_es);if(cljs.core.truth_(temp__4092__auto___43428))
{var pile_card_es_43429 = temp__4092__auto___43428;var pile_card_el_43430 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(pile_card_es_43429));if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,pile_card_el_43430,gin.game_panel.pile_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,pile_card_el_43430,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
var opp_cards_el_43431 = cljs.core.map.call(null,(function (p1__43322_SHARP_){return gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(p1__43322_SHARP_));
}),opp_cards_es);var vec__43371_43432 = ((cljs.core._EQ_.call(null,10,cljs.core.count.call(null,opp_cards_el_43431)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [53,4], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.18,3.63], null));var x_step_43433 = cljs.core.nth.call(null,vec__43371_43432,0,null);var y_step_43434 = cljs.core.nth.call(null,vec__43371_43432,1,null);console.log("opp reg");
var seq__43372_43435 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),opp_cards_es));var chunk__43373_43436 = null;var count__43374_43437 = 0;var i__43375_43438 = 0;while(true){
if((i__43375_43438 < count__43374_43437))
{var vec__43376_43439 = cljs.core._nth.call(null,chunk__43373_43436,i__43375_43438);var i_43440 = cljs.core.nth.call(null,vec__43376_43439,0,null);var e_43441 = cljs.core.nth.call(null,vec__43376_43439,1,null);var idx_43442 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_43441);var el_43443 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_43441));gin.game_panel.slide.call(null,el_43443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_43440 * x_step_43433))),cljs.core.long$.call(null,(their_region_offset_y + (i_43440 * y_step_43434)))], null));
{
var G__43444 = seq__43372_43435;
var G__43445 = chunk__43373_43436;
var G__43446 = count__43374_43437;
var G__43447 = (i__43375_43438 + 1);
seq__43372_43435 = G__43444;
chunk__43373_43436 = G__43445;
count__43374_43437 = G__43446;
i__43375_43438 = G__43447;
continue;
}
} else
{var temp__4092__auto___43448 = cljs.core.seq.call(null,seq__43372_43435);if(temp__4092__auto___43448)
{var seq__43372_43449__$1 = temp__4092__auto___43448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43372_43449__$1))
{var c__17389__auto___43450 = cljs.core.chunk_first.call(null,seq__43372_43449__$1);{
var G__43451 = cljs.core.chunk_rest.call(null,seq__43372_43449__$1);
var G__43452 = c__17389__auto___43450;
var G__43453 = cljs.core.count.call(null,c__17389__auto___43450);
var G__43454 = 0;
seq__43372_43435 = G__43451;
chunk__43373_43436 = G__43452;
count__43374_43437 = G__43453;
i__43375_43438 = G__43454;
continue;
}
} else
{var vec__43377_43455 = cljs.core.first.call(null,seq__43372_43449__$1);var i_43456 = cljs.core.nth.call(null,vec__43377_43455,0,null);var e_43457 = cljs.core.nth.call(null,vec__43377_43455,1,null);var idx_43458 = new cljs.core.Keyword("anim","idx","anim/idx",1204830436).cljs$core$IFn$_invoke$arity$1(e_43457);var el_43459 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e_43457));gin.game_panel.slide.call(null,el_43459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(their_region_offset_x + (i_43456 * x_step_43433))),cljs.core.long$.call(null,(their_region_offset_y + (i_43456 * y_step_43434)))], null));
{
var G__43460 = cljs.core.next.call(null,seq__43372_43449__$1);
var G__43461 = null;
var G__43462 = 0;
var G__43463 = 0;
seq__43372_43435 = G__43460;
chunk__43373_43436 = G__43461;
count__43374_43437 = G__43462;
i__43375_43438 = G__43463;
continue;
}
}
} else
{}
}
break;
}
var seq__43378_43464 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,opp_cards_el_43431,opp_cards_es));var chunk__43379_43465 = null;var count__43380_43466 = 0;var i__43381_43467 = 0;while(true){
if((i__43381_43467 < count__43380_43466))
{var vec__43382_43468 = cljs.core._nth.call(null,chunk__43379_43465,i__43381_43467);var el_43469 = cljs.core.nth.call(null,vec__43382_43468,0,null);var es_43470 = cljs.core.nth.call(null,vec__43382_43468,1,null);var suit_43471 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_43470);var rank_43472 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_43470);gin.dom_helpers.show_on_top.call(null,el_43469);
gin.dom_helpers.set_card_class.call(null,el_43469,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_43471))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43471)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43472))].join('')));
{
var G__43473 = seq__43378_43464;
var G__43474 = chunk__43379_43465;
var G__43475 = count__43380_43466;
var G__43476 = (i__43381_43467 + 1);
seq__43378_43464 = G__43473;
chunk__43379_43465 = G__43474;
count__43380_43466 = G__43475;
i__43381_43467 = G__43476;
continue;
}
} else
{var temp__4092__auto___43477 = cljs.core.seq.call(null,seq__43378_43464);if(temp__4092__auto___43477)
{var seq__43378_43478__$1 = temp__4092__auto___43477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43378_43478__$1))
{var c__17389__auto___43479 = cljs.core.chunk_first.call(null,seq__43378_43478__$1);{
var G__43480 = cljs.core.chunk_rest.call(null,seq__43378_43478__$1);
var G__43481 = c__17389__auto___43479;
var G__43482 = cljs.core.count.call(null,c__17389__auto___43479);
var G__43483 = 0;
seq__43378_43464 = G__43480;
chunk__43379_43465 = G__43481;
count__43380_43466 = G__43482;
i__43381_43467 = G__43483;
continue;
}
} else
{var vec__43383_43484 = cljs.core.first.call(null,seq__43378_43478__$1);var el_43485 = cljs.core.nth.call(null,vec__43383_43484,0,null);var es_43486 = cljs.core.nth.call(null,vec__43383_43484,1,null);var suit_43487 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(es_43486);var rank_43488 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(es_43486);gin.dom_helpers.show_on_top.call(null,el_43485);
gin.dom_helpers.set_card_class.call(null,el_43485,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),suit_43487))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43487)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43488))].join('')));
{
var G__43489 = cljs.core.next.call(null,seq__43378_43478__$1);
var G__43490 = null;
var G__43491 = 0;
var G__43492 = 0;
seq__43378_43464 = G__43489;
chunk__43379_43465 = G__43490;
count__43380_43466 = G__43491;
i__43381_43467 = G__43492;
continue;
}
}
} else
{}
}
break;
}
console.log("discards");
var seq__43384_43493 = cljs.core.seq.call(null,discard_cards_es);var chunk__43386_43494 = null;var count__43387_43495 = 0;var i__43388_43496 = 0;while(true){
if((i__43388_43496 < count__43387_43495))
{var discard_card_es_43497 = cljs.core._nth.call(null,chunk__43386_43494,i__43388_43496);var discard_card_el_43498 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_43497));var suit_43499 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_43497);var rank_43500 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_43497);gin.dom_helpers.set_card_class.call(null,discard_card_el_43498,[cljs.core.str(cljs.core.name.call(null,suit_43499)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43500))].join(''));
gin.game_panel.slide.call(null,discard_card_el_43498,gin.game_panel.discard_position.call(null));
{
var G__43501 = seq__43384_43493;
var G__43502 = chunk__43386_43494;
var G__43503 = count__43387_43495;
var G__43504 = (i__43388_43496 + 1);
seq__43384_43493 = G__43501;
chunk__43386_43494 = G__43502;
count__43387_43495 = G__43503;
i__43388_43496 = G__43504;
continue;
}
} else
{var temp__4092__auto___43505 = cljs.core.seq.call(null,seq__43384_43493);if(temp__4092__auto___43505)
{var seq__43384_43506__$1 = temp__4092__auto___43505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43384_43506__$1))
{var c__17389__auto___43507 = cljs.core.chunk_first.call(null,seq__43384_43506__$1);{
var G__43508 = cljs.core.chunk_rest.call(null,seq__43384_43506__$1);
var G__43509 = c__17389__auto___43507;
var G__43510 = cljs.core.count.call(null,c__17389__auto___43507);
var G__43511 = 0;
seq__43384_43493 = G__43508;
chunk__43386_43494 = G__43509;
count__43387_43495 = G__43510;
i__43388_43496 = G__43511;
continue;
}
} else
{var discard_card_es_43512 = cljs.core.first.call(null,seq__43384_43506__$1);var discard_card_el_43513 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_43512));var suit_43514 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(discard_card_es_43512);var rank_43515 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(discard_card_es_43512);gin.dom_helpers.set_card_class.call(null,discard_card_el_43513,[cljs.core.str(cljs.core.name.call(null,suit_43514)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43515))].join(''));
gin.game_panel.slide.call(null,discard_card_el_43513,gin.game_panel.discard_position.call(null));
{
var G__43516 = cljs.core.next.call(null,seq__43384_43506__$1);
var G__43517 = null;
var G__43518 = 0;
var G__43519 = 0;
seq__43384_43493 = G__43516;
chunk__43386_43494 = G__43517;
count__43387_43495 = G__43518;
i__43388_43496 = G__43519;
continue;
}
}
} else
{}
}
break;
}
console.log("drag discards");
var temp__4092__auto___43520 = cljs.core.last.call(null,discard_cards_es);if(cljs.core.truth_(temp__4092__auto___43520))
{var discard_card_es_43521 = temp__4092__auto___43520;var discard_card_el_43522 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard_card_es_43521));gin.dom_helpers.show_on_top.call(null,discard_card_el_43522);
if(us_pick_card)
{gin.game_panel.set_drag_handler.call(null,discard_card_el_43522,gin.game_panel.discard_drag_handler.call(null,conn));
} else
{gin.game_panel.set_drag_handler.call(null,discard_card_el_43522,gin.game_panel.undraggable_handler.call(null,conn));
}
} else
{}
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"assigned","assigned",644022592))))
{if(cljs.core._EQ_.call(null,11,cljs.core.count.call(null,our_cards_es)))
{gin.game_panel.set_msg.call(null,"Your turn. Drag a card from your hand to discard.");
var seq__43390 = cljs.core.seq.call(null,our_cards_es);var chunk__43391 = null;var count__43392 = 0;var i__43393 = 0;while(true){
if((i__43393 < count__43392))
{var our_card_es = cljs.core._nth.call(null,chunk__43391,i__43393);var our_card_el_43523 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_43524 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_43525 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_43523,((cljs.core._EQ_.call(null,suit_43524,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43524)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43525))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_43523,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__43526 = seq__43390;
var G__43527 = chunk__43391;
var G__43528 = count__43392;
var G__43529 = (i__43393 + 1);
seq__43390 = G__43526;
chunk__43391 = G__43527;
count__43392 = G__43528;
i__43393 = G__43529;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__43390);if(temp__4092__auto__)
{var seq__43390__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43390__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__43390__$1);{
var G__43530 = cljs.core.chunk_rest.call(null,seq__43390__$1);
var G__43531 = c__17389__auto__;
var G__43532 = cljs.core.count.call(null,c__17389__auto__);
var G__43533 = 0;
seq__43390 = G__43530;
chunk__43391 = G__43531;
count__43392 = G__43532;
i__43393 = G__43533;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__43390__$1);var our_card_el_43534 = gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es));var suit_43535 = new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(our_card_es);var rank_43536 = new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(our_card_es);gin.dom_helpers.set_card_class.call(null,our_card_el_43534,((cljs.core._EQ_.call(null,suit_43535,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))?"card_back":[cljs.core.str(cljs.core.name.call(null,suit_43535)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,rank_43536))].join('')));
gin.game_panel.set_drag_handler.call(null,our_card_el_43534,gin.game_panel.home_discard_handler.call(null,conn));
{
var G__43537 = cljs.core.next.call(null,seq__43390__$1);
var G__43538 = null;
var G__43539 = 0;
var G__43540 = 0;
seq__43390 = G__43537;
chunk__43391 = G__43538;
count__43392 = G__43539;
i__43393 = G__43540;
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
var seq__43394 = cljs.core.seq.call(null,our_cards_es);var chunk__43395 = null;var count__43396 = 0;var i__43397 = 0;while(true){
if((i__43397 < count__43396))
{var our_card_es = cljs.core._nth.call(null,chunk__43395,i__43397);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43541 = seq__43394;
var G__43542 = chunk__43395;
var G__43543 = count__43396;
var G__43544 = (i__43397 + 1);
seq__43394 = G__43541;
chunk__43395 = G__43542;
count__43396 = G__43543;
i__43397 = G__43544;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__43394);if(temp__4092__auto__)
{var seq__43394__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43394__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__43394__$1);{
var G__43545 = cljs.core.chunk_rest.call(null,seq__43394__$1);
var G__43546 = c__17389__auto__;
var G__43547 = cljs.core.count.call(null,c__17389__auto__);
var G__43548 = 0;
seq__43394 = G__43545;
chunk__43395 = G__43546;
count__43396 = G__43547;
i__43397 = G__43548;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__43394__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43549 = cljs.core.next.call(null,seq__43394__$1);
var G__43550 = null;
var G__43551 = 0;
var G__43552 = 0;
seq__43394 = G__43549;
chunk__43395 = G__43550;
count__43396 = G__43551;
i__43397 = G__43552;
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
{var result = temp__4090__auto__;return gin.game_panel.set_msg.call(null,(function (){var pred__43398 = cljs.core._EQ_;var expr__43399 = result;if(cljs.core.truth_(pred__43398.call(null,new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),expr__43399)))
{return "Game over: Both dealt gin for a tie.";
} else
{if(cljs.core.truth_(pred__43398.call(null,new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),expr__43399)))
{return "Game over: You win, dealt gin.";
} else
{if(cljs.core.truth_(pred__43398.call(null,new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054),expr__43399)))
{return "Game over: Opponent wins, dealt gin.";
} else
{if(cljs.core.truth_(pred__43398.call(null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),expr__43399)))
{return "Game over: You win!";
} else
{if(cljs.core.truth_(pred__43398.call(null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),expr__43399)))
{return "Game over: Opponent wins.";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43399)].join('')));
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
var seq__43401 = cljs.core.seq.call(null,our_cards_es);var chunk__43402 = null;var count__43403 = 0;var i__43404 = 0;while(true){
if((i__43404 < count__43403))
{var our_card_es = cljs.core._nth.call(null,chunk__43402,i__43404);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43553 = seq__43401;
var G__43554 = chunk__43402;
var G__43555 = count__43403;
var G__43556 = (i__43404 + 1);
seq__43401 = G__43553;
chunk__43402 = G__43554;
count__43403 = G__43555;
i__43404 = G__43556;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__43401);if(temp__4092__auto__)
{var seq__43401__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43401__$1))
{var c__17389__auto__ = cljs.core.chunk_first.call(null,seq__43401__$1);{
var G__43557 = cljs.core.chunk_rest.call(null,seq__43401__$1);
var G__43558 = c__17389__auto__;
var G__43559 = cljs.core.count.call(null,c__17389__auto__);
var G__43560 = 0;
seq__43401 = G__43557;
chunk__43402 = G__43558;
count__43403 = G__43559;
i__43404 = G__43560;
continue;
}
} else
{var our_card_es = cljs.core.first.call(null,seq__43401__$1);gin.game_panel.set_drag_handler.call(null,gin.dom_helpers.get_element.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(our_card_es)),gin.game_panel.home_region_handler.call(null,conn));
{
var G__43561 = cljs.core.next.call(null,seq__43401__$1);
var G__43562 = null;
var G__43563 = 0;
var G__43564 = 0;
seq__43401 = G__43561;
chunk__43402 = G__43562;
count__43403 = G__43563;
i__43404 = G__43564;
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
gin.game_panel.draw_game = (function draw_game(report,conn){var map__43568 = report;var map__43568__$1 = ((cljs.core.seq_QMARK_.call(null,map__43568))?cljs.core.apply.call(null,cljs.core.hash_map,map__43568):map__43568);var db_after = cljs.core.get.call(null,map__43568__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var temp__4092__auto__ = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__43569 = temp__4092__auto__;var event = cljs.core.nth.call(null,vec__43569,0,null);var vec__43570 = cljs.core.nth.call(null,vec__43569,1,null);var game_id = cljs.core.nth.call(null,vec__43570,0,null);var args = cljs.core.nthnext.call(null,vec__43570,1);console.log("event: ",cljs.core.pr_str.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,game_id], null),args)));
return gin.game_panel.draw.call(null,db_after,game_id,conn);
} else
{return null;
}
});
gin.game_panel.start_game_panel = (function start_game_panel(conn){datascript.listen_BANG_.call(null,conn,(function (report){return gin.game_panel.draw_game.call(null,report,conn);
}));
return gin.game_panel.draw_table.call(null,conn);
});
