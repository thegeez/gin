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
var n__17489__auto___18755 = 52;var card_idx_18756 = 0;while(true){
if((card_idx_18756 < n__17489__auto___18755))
{var i_18757 = (card_idx_18756 * gin.animator.FIELD_COUNT);if(cljs.core.truth_((gin.animator.a[(i_18757 + gin.animator.DRAW)])))
{(gin.animator.a[gin.animator.DO_DRAW] = 1);
var el_18758 = (gin.animator.a[(i_18757 + gin.animator.EL)]);var vec__18753_18759 = (gin.animator.a[(i_18757 + gin.animator.START)]);var start_x_18760 = cljs.core.nth.call(null,vec__18753_18759,0,null);var start_y_18761 = cljs.core.nth.call(null,vec__18753_18759,1,null);var vec__18754_18762 = (gin.animator.a[(i_18757 + gin.animator.TO)]);var x_18763 = cljs.core.nth.call(null,vec__18754_18762,0,null);var y_18764 = cljs.core.nth.call(null,vec__18754_18762,1,null);var to_18765 = vec__18754_18762;var step_18766 = ((gin.animator.a[(i_18757 + gin.animator.STEP)]) - 1);var dx_18767 = (gin.animator.a[(i_18757 + gin.animator.DX)]);var dy_18768 = (gin.animator.a[(i_18757 + gin.animator.DY)]);var steps_18769 = (gin.animator.a[(i_18757 + gin.animator.STEPS)]);var nx_18770 = cljs.core.long$.call(null,(start_x_18760 + ((steps_18769 - step_18766) * dx_18767)));var ny_18771 = cljs.core.long$.call(null,(start_y_18761 + ((steps_18769 - step_18766) * dy_18768)));gin.dom_helpers.set_position.call(null,el_18758,nx_18770,ny_18771);
(gin.animator.a[(i_18757 + gin.animator.STEP)] = step_18766);
if(((cljs.core._EQ_.call(null,x_18763,nx_18770)) && (cljs.core._EQ_.call(null,y_18764,ny_18771))) || ((step_18766 === 0)) || (((dx_18767 === 0)) && ((dy_18768 === 0))))
{(gin.animator.a[(i_18757 + gin.animator.STEP)] = 0);
(gin.animator.a[(i_18757 + gin.animator.DRAW)] = false);
var finish_18772 = (gin.animator.a[(i_18757 + gin.animator.FINISH)]);if(cljs.core.fn_QMARK_.call(null,finish_18772))
{gin.dom_helpers.set_timeout.call(null,finish_18772,0);
} else
{}
} else
{}
} else
{}
{
var G__18773 = (card_idx_18756 + 1);
card_idx_18756 = G__18773;
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
var slide__delegate = function (el,to,p__18774){var vec__18778 = p__18774;var finish = cljs.core.nth.call(null,vec__18778,0,null);var idx = el.anim_idx;var i = (idx * gin.animator.FIELD_COUNT);var vec__18779 = (function (){var p = gin.dom_helpers.get_position.call(null,el);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.x,p.y], null);
})();var from_x = cljs.core.nth.call(null,vec__18779,0,null);var from_y = cljs.core.nth.call(null,vec__18779,1,null);var from = vec__18779;var vec__18780 = to;var to_x = cljs.core.nth.call(null,vec__18780,0,null);var to_y = cljs.core.nth.call(null,vec__18780,1,null);var step = (gin.animator.a[(i + gin.animator.STEP)]);var steps = (((step > 0))?step:30);var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.animator.a[i] = el);
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
var p__18774 = null;if (arguments.length > 2) {
  p__18774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slide__delegate.call(this,el,to,p__18774);};
slide.cljs$lang$maxFixedArity = 2;
slide.cljs$lang$applyTo = (function (arglist__18781){
var el = cljs.core.first(arglist__18781);
arglist__18781 = cljs.core.next(arglist__18781);
var to = cljs.core.first(arglist__18781);
var p__18774 = cljs.core.rest(arglist__18781);
return slide__delegate(el,to,p__18774);
});
slide.cljs$core$IFn$_invoke$arity$variadic = slide__delegate;
return slide;
})()
;
