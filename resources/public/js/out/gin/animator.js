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
var n__17489__auto___38935 = 52;var card_idx_38936 = 0;while(true){
if((card_idx_38936 < n__17489__auto___38935))
{var i_38937 = (card_idx_38936 * gin.animator.FIELD_COUNT);if(cljs.core.truth_((gin.animator.a[(i_38937 + gin.animator.DRAW)])))
{(gin.animator.a[gin.animator.DO_DRAW] = 1);
var el_38938 = (gin.animator.a[(i_38937 + gin.animator.EL)]);var vec__38933_38939 = (gin.animator.a[(i_38937 + gin.animator.START)]);var start_x_38940 = cljs.core.nth.call(null,vec__38933_38939,0,null);var start_y_38941 = cljs.core.nth.call(null,vec__38933_38939,1,null);var vec__38934_38942 = (gin.animator.a[(i_38937 + gin.animator.TO)]);var x_38943 = cljs.core.nth.call(null,vec__38934_38942,0,null);var y_38944 = cljs.core.nth.call(null,vec__38934_38942,1,null);var to_38945 = vec__38934_38942;var step_38946 = ((gin.animator.a[(i_38937 + gin.animator.STEP)]) - 1);var dx_38947 = (gin.animator.a[(i_38937 + gin.animator.DX)]);var dy_38948 = (gin.animator.a[(i_38937 + gin.animator.DY)]);var steps_38949 = (gin.animator.a[(i_38937 + gin.animator.STEPS)]);var nx_38950 = cljs.core.long$.call(null,(start_x_38940 + ((steps_38949 - step_38946) * dx_38947)));var ny_38951 = cljs.core.long$.call(null,(start_y_38941 + ((steps_38949 - step_38946) * dy_38948)));gin.dom_helpers.set_position.call(null,el_38938,nx_38950,ny_38951);
(gin.animator.a[(i_38937 + gin.animator.STEP)] = step_38946);
if(((cljs.core._EQ_.call(null,x_38943,nx_38950)) && (cljs.core._EQ_.call(null,y_38944,ny_38951))) || ((step_38946 === 0)) || (((dx_38947 === 0)) && ((dy_38948 === 0))))
{(gin.animator.a[(i_38937 + gin.animator.STEP)] = 0);
(gin.animator.a[(i_38937 + gin.animator.DRAW)] = false);
var finish_38952 = (gin.animator.a[(i_38937 + gin.animator.FINISH)]);if(cljs.core.fn_QMARK_.call(null,finish_38952))
{gin.dom_helpers.set_timeout.call(null,finish_38952,0);
} else
{}
} else
{}
} else
{}
{
var G__38953 = (card_idx_38936 + 1);
card_idx_38936 = G__38953;
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
var slide__delegate = function (el,to,p__38954){var vec__38958 = p__38954;var finish = cljs.core.nth.call(null,vec__38958,0,null);var idx = el.anim_idx;var i = (idx * gin.animator.FIELD_COUNT);var vec__38959 = gin.dom_helpers.get_position.call(null,el);var from_x = cljs.core.nth.call(null,vec__38959,0,null);var from_y = cljs.core.nth.call(null,vec__38959,1,null);var from = vec__38959;var vec__38960 = to;var to_x = cljs.core.nth.call(null,vec__38960,0,null);var to_y = cljs.core.nth.call(null,vec__38960,1,null);var step = (gin.animator.a[(i + gin.animator.STEP)]);var steps = (((step > 0))?step:30);var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.animator.a[i] = el);
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
var p__38954 = null;if (arguments.length > 2) {
  p__38954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slide__delegate.call(this,el,to,p__38954);};
slide.cljs$lang$maxFixedArity = 2;
slide.cljs$lang$applyTo = (function (arglist__38961){
var el = cljs.core.first(arglist__38961);
arglist__38961 = cljs.core.next(arglist__38961);
var to = cljs.core.first(arglist__38961);
var p__38954 = cljs.core.rest(arglist__38961);
return slide__delegate(el,to,p__38954);
});
slide.cljs$core$IFn$_invoke$arity$variadic = slide__delegate;
return slide;
})()
;
