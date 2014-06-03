// Compiled by ClojureScript 0.0-2173
goog.provide('gin.ui.animator');
goog.require('cljs.core');
goog.require('gin.ui.dom_helpers');
goog.require('gin.ui.dom_helpers');
gin.ui.animator.EL = 0;
gin.ui.animator.START = 1;
gin.ui.animator.DRAW = 2;
gin.ui.animator.TO = 3;
gin.ui.animator.STEP = 4;
gin.ui.animator.STEPS = 5;
gin.ui.animator.DX = 6;
gin.ui.animator.DY = 7;
gin.ui.animator.FINISH = 8;
gin.ui.animator.FIELD_COUNT = cljs.core.count.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.ui.animator.EL,gin.ui.animator.START,gin.ui.animator.DRAW,gin.ui.animator.TO,gin.ui.animator.STEP,gin.ui.animator.STEPS,gin.ui.animator.DX,gin.ui.animator.DY,gin.ui.animator.FINISH], null));
gin.ui.animator.a = (new Array(((52 * gin.ui.animator.FIELD_COUNT) + 1)));
gin.ui.animator.DO_DRAW = (gin.ui.animator.a.length - 1);
gin.ui.animator.running = cljs.core.atom.call(null,false);
gin.ui.animator.anim_loop = (function anim_loop(){(gin.ui.animator.a[gin.ui.animator.DO_DRAW] = 0);
var n__17509__auto___19336 = 52;var card_idx_19337 = 0;while(true){
if((card_idx_19337 < n__17509__auto___19336))
{var i_19338 = (card_idx_19337 * gin.ui.animator.FIELD_COUNT);if(cljs.core.truth_((gin.ui.animator.a[(i_19338 + gin.ui.animator.DRAW)])))
{(gin.ui.animator.a[gin.ui.animator.DO_DRAW] = 1);
var el_19339 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.EL)]);var vec__19334_19340 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.START)]);var start_x_19341 = cljs.core.nth.call(null,vec__19334_19340,0,null);var start_y_19342 = cljs.core.nth.call(null,vec__19334_19340,1,null);var vec__19335_19343 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.TO)]);var x_19344 = cljs.core.nth.call(null,vec__19335_19343,0,null);var y_19345 = cljs.core.nth.call(null,vec__19335_19343,1,null);var to_19346 = vec__19335_19343;var step_19347 = ((gin.ui.animator.a[(i_19338 + gin.ui.animator.STEP)]) - 1);var dx_19348 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.DX)]);var dy_19349 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.DY)]);var steps_19350 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.STEPS)]);var nx_19351 = cljs.core.long$.call(null,(start_x_19341 + ((steps_19350 - step_19347) * dx_19348)));var ny_19352 = cljs.core.long$.call(null,(start_y_19342 + ((steps_19350 - step_19347) * dy_19349)));gin.ui.dom_helpers.set_position.call(null,el_19339,nx_19351,ny_19352);
(gin.ui.animator.a[(i_19338 + gin.ui.animator.STEP)] = step_19347);
if(((cljs.core._EQ_.call(null,x_19344,nx_19351)) && (cljs.core._EQ_.call(null,y_19345,ny_19352))) || ((step_19347 === 0)) || (((dx_19348 === 0)) && ((dy_19349 === 0))))
{(gin.ui.animator.a[(i_19338 + gin.ui.animator.STEP)] = 0);
(gin.ui.animator.a[(i_19338 + gin.ui.animator.DRAW)] = false);
var finish_19353 = (gin.ui.animator.a[(i_19338 + gin.ui.animator.FINISH)]);if(cljs.core.fn_QMARK_.call(null,finish_19353))
{gin.ui.dom_helpers.set_timeout.call(null,finish_19353,0);
} else
{}
} else
{}
} else
{}
{
var G__19354 = (card_idx_19337 + 1);
card_idx_19337 = G__19354;
continue;
}
} else
{}
break;
}
if(cljs.core._EQ_.call(null,1,(gin.ui.animator.a[gin.ui.animator.DO_DRAW])))
{return gin.ui.dom_helpers.set_timeout.call(null,anim_loop,10);
} else
{return cljs.core.reset_BANG_.call(null,gin.ui.animator.running,false);
}
});
gin.ui.animator.animate = (function animate(){if(cljs.core.compare_and_set_BANG_.call(null,gin.ui.animator.running,false,true))
{return gin.ui.animator.anim_loop.call(null);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
gin.ui.animator.slide = (function() { 
var slide__delegate = function (el,to,p__19355){var vec__19359 = p__19355;var finish = cljs.core.nth.call(null,vec__19359,0,null);var idx = el.anim_idx;var i = (idx * gin.ui.animator.FIELD_COUNT);var vec__19360 = gin.ui.dom_helpers.get_position.call(null,el);var from_x = cljs.core.nth.call(null,vec__19360,0,null);var from_y = cljs.core.nth.call(null,vec__19360,1,null);var from = vec__19360;var vec__19361 = to;var to_x = cljs.core.nth.call(null,vec__19361,0,null);var to_y = cljs.core.nth.call(null,vec__19361,1,null);var step = (gin.ui.animator.a[(i + gin.ui.animator.STEP)]);var steps = (((step > 0))?step:30);var dx = ((to_x - from_x) / steps);var dy = ((to_y - from_y) / steps);(gin.ui.animator.a[i] = el);
(gin.ui.animator.a[(i + gin.ui.animator.START)] = from);
(gin.ui.animator.a[(i + gin.ui.animator.DRAW)] = true);
(gin.ui.animator.a[(i + gin.ui.animator.TO)] = to);
(gin.ui.animator.a[(i + gin.ui.animator.STEP)] = steps);
(gin.ui.animator.a[(i + gin.ui.animator.STEPS)] = steps);
(gin.ui.animator.a[(i + gin.ui.animator.DX)] = dx);
(gin.ui.animator.a[(i + gin.ui.animator.DY)] = dy);
(gin.ui.animator.a[(i + gin.ui.animator.FINISH)] = finish);
(gin.ui.animator.a[gin.ui.animator.DO_DRAW] = 1);
return gin.ui.animator.animate.call(null);
};
var slide = function (el,to,var_args){
var p__19355 = null;if (arguments.length > 2) {
  p__19355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return slide__delegate.call(this,el,to,p__19355);};
slide.cljs$lang$maxFixedArity = 2;
slide.cljs$lang$applyTo = (function (arglist__19362){
var el = cljs.core.first(arglist__19362);
arglist__19362 = cljs.core.next(arglist__19362);
var to = cljs.core.first(arglist__19362);
var p__19355 = cljs.core.rest(arglist__19362);
return slide__delegate(el,to,p__19355);
});
slide.cljs$core$IFn$_invoke$arity$variadic = slide__delegate;
return slide;
})()
;
