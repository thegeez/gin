// Compiled by ClojureScript 0.0-2173
goog.provide('gin.animator');
goog.require('cljs.core');
goog.require('gin.dom_helpers');
goog.require('gin.dom_helpers');
gin.animator.EL = 0;
gin.animator.START = 1;
gin.animator.DRAW = 2;
gin.animator.TO = 3;
gin.animator.STEP = 4;
gin.animator.STEPS = 5;
gin.animator.DX = 6;
gin.animator.DY = 7;
gin.animator.FINISH = 8;
gin.animator.FIELD_COUNT = cljs.core.count.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.animator.EL,gin.animator.START,gin.animator.DRAW,gin.animator.TO,gin.animator.STEP,gin.animator.STEPS,gin.animator.DX,gin.animator.DY,gin.animator.FINISH], null));
gin.animator.a = (new Array(((52 * gin.animator.FIELD_COUNT) + 1)));
gin.animator.DO_DRAW = (gin.animator.a.length - 1);
gin.animator.running = cljs.core.atom.call(null,false);
gin.animator.anim_loop = (function anim_loop(){(gin.animator.a[gin.animator.DO_DRAW] = 0);
var n__17489__auto___44709 = 52;var card_idx_44710 = 0;while(true){
if((card_idx_44710 < n__17489__auto___44709))
{var i_44711 = (card_idx_44710 * gin.animator.FIELD_COUNT);if(cljs.core.truth_((gin.animator.a[(i_44711 + gin.animator.DRAW)])))
{(gin.animator.a[gin.animator.DO_DRAW] = 1);
var el_44712 = (gin.animator.a[(i_44711 + gin.animator.EL)]);var vec__44707_44713 = (gin.animator.a[(i_44711 + gin.animator.START)]);var start_x_44714 = cljs.core.nth.call(null,vec__44707_44713,0,null);var start_y_44715 = cljs.core.nth.call(null,vec__44707_44713,1,null);var vec__44708_44716 = (gin.animator.a[(i_44711 + gin.animator.TO)]);var x_44717 = cljs.core.nth.call(null,vec__44708_44716,0,null);var y_44718 = cljs.core.nth.call(null,vec__44708_44716,1,null);var to_44719 = vec__44708_44716;var step_44720 = ((gin.animator.a[(i_44711 + gin.animator.STEP)]) - 1);var dx_44721 = (gin.animator.a[(i_44711 + gin.animator.DX)]);var dy_44722 = (gin.animator.a[(i_44711 + gin.animator.DY)]);var steps_44723 = (gin.animator.a[(i_44711 + gin.animator.STEPS)]);var nx_44724 = cljs.core.long$.call(null,(start_x_44714 + ((steps_44723 - step_44720) * dx_44721)));var ny_44725 = cljs.core.long$.call(null,(start_y_44715 + ((steps_44723 - step_44720) * dy_44722)));gin.dom_helpers.set_position.call(null,el_44712,nx_44724,ny_44725);
(gin.animator.a[(i_44711 + gin.animator.STEP)] = step_44720);
if(((cljs.core._EQ_.call(null,x_44717,nx_44724)) && (cljs.core._EQ_.call(null,y_44718,ny_44725))) || ((step_44720 === 0)) || (((dx_44721 === 0)) && ((dy_44722 === 0))))
{(gin.animator.a[(i_44711 + gin.animator.STEP)] = 0);
(gin.animator.a[(i_44711 + gin.animator.DRAW)] = false);
var finish_44726 = (gin.animator.a[(i_44711 + gin.animator.FINISH)]);if(cljs.core.fn_QMARK_.call(null,finish_44726))
{gin.dom_helpers.set_timeout.call(null,finish_44726,0);
} else
{}
} else
{}
} else
{}
{
var G__44727 = (card_idx_44710 + 1);
card_idx_44710 = G__44727;
continue;
}
} else
{}
break;
}
if(cljs.core._EQ_.call(null,1,(gin.animator.a[gin.animator.DO_DRAW])))
{return gin.dom_helpers.set_timeout.call(null,anim_loop,10);
} else
{return cljs.core.reset_BANG_.call(null,gin.animator.running,false);
}
});
gin.animator.animate = (function animate(){if(cljs.core.compare_and_set_BANG_.call(null,gin.animator.running,false,true))
{return gin.animator.anim_loop.call(null);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
gin.animator.slide = (function() { 
var slide__delegate = function (el,to,p__44728){var vec__44732 = p__44728;var finish = cljs.core.nth.call(null,vec__44732,0,null);var idx = el.anim_idx;var i = (idx * gin.animator.FIELD_COUNT);var vec__44733 = (function (){var p = gin.dom_helpers.get_position.call(null,el);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})();var from_x = cljs.core.nth.call(null,vec__44733,0,null);var from_y = cljs.core.nth.call(null,vec__44733,1,null);var from = vec__44733;var vec__44734 = to;var to_x = cljs.core.nth.call(null,vec__44734,0,null);var to_y = cljs.core.nth.call(null,vec__44734,1,null);var step = (gin.animator.a[(i + gin.animator.STEP)]);var steps = (((step > 0))?step:30);var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.animator.a[i] = el);
(gin.animator.a[(i + gin.animator.START)] = from);
(gin.animator.a[(i + gin.animator.DRAW)] = true);
(gin.animator.a[(i + gin.animator.TO)] = to);
(gin.animator.a[(i + gin.animator.STEP)] = steps);
(gin.animator.a[(i + gin.animator.STEPS)] = steps);
(gin.animator.a[(i + gin.animator.DX)] = dx);
(gin.animator.a[(i + gin.animator.DY)] = dy);
(gin.animator.a[(i + gin.animator.FINISH)] = finish);
(gin.animator.a[gin.animator.DO_DRAW] = 1);
return gin.animator.animate.call(null);
};
var slide = function (el,to,var_args){
var p__44728 = null;if (arguments.length > 2) {
  p__44728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slide__delegate.call(this,el,to,p__44728);};
slide.cljs$lang$maxFixedArity = 2;
slide.cljs$lang$applyTo = (function (arglist__44735){
var el = cljs.core.first(arglist__44735);
arglist__44735 = cljs.core.next(arglist__44735);
var to = cljs.core.first(arglist__44735);
var p__44728 = cljs.core.rest(arglist__44735);
return slide__delegate(el,to,p__44728);
});
slide.cljs$core$IFn$_invoke$arity$variadic = slide__delegate;
return slide;
})()
;
