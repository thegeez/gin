// Compiled by ClojureScript 0.0-2173
goog.provide('gin.event_source');
goog.require('cljs.core');
goog.require('goog.Timer');
goog.require('goog.Timer');
goog.require('cljs.reader');
goog.require('cljs.reader');
/**
* @param {...*} var_args
*/
gin.event_source.event_source = (function() { 
var event_source__delegate = function (url,p__20298){var map__20300 = p__20298;var map__20300__$1 = ((cljs.core.seq_QMARK_.call(null,map__20300))?cljs.core.apply.call(null,cljs.core.hash_map,map__20300):map__20300);var on_error = cljs.core.get.call(null,map__20300__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908),((function (map__20300,map__20300__$1){
return (function (){return null;
});})(map__20300,map__20300__$1))
);var on_message = cljs.core.get.call(null,map__20300__$1,new cljs.core.Keyword(null,"on-message","on-message",1496225163),((function (map__20300,map__20300__$1,on_error){
return (function (event){return null;
});})(map__20300,map__20300__$1,on_error))
);var on_open = cljs.core.get.call(null,map__20300__$1,new cljs.core.Keyword(null,"on-open","on-open",3936747754),((function (map__20300,map__20300__$1,on_error,on_message){
return (function (){return null;
});})(map__20300,map__20300__$1,on_error,on_message))
);var source = (new EventSource(url));var open = cljs.core.atom.call(null,false);source.onopen = (function (){cljs.core.reset_BANG_.call(null,open,true);
on_open.call(null);
return null;
});
source.onerror = (function (e){if(cljs.core.truth_(cljs.core.deref.call(null,open)))
{} else
{on_error.call(null);
}
cljs.core.reset_BANG_.call(null,open,false);
goog.Timer.callOnce((function (){console.log([cljs.core.str("Reconnect check"),cljs.core.str(source.readyState),cljs.core.str(EventSource.CLOSED),cljs.core.str(cljs.core._EQ_.call(null,source.readyState,EventSource.CLOSED))].join(''));
if(cljs.core._EQ_.call(null,source.readyState,EventSource.CLOSED))
{return event_source.call(null,url,new cljs.core.Keyword(null,"on-open","on-open",3936747754),on_open,new cljs.core.Keyword(null,"on-message","on-message",1496225163),on_message,new cljs.core.Keyword(null,"on-error","on-error",1418576908),on_error);
} else
{return null;
}
}),(9 * 1000));
return null;
});
source.onmessage = (function (e){var data_20301 = e.data;var event_20302 = cljs.reader.read_string.call(null,data_20301);on_message.call(null,event_20302);
return null;
});
return source;
};
var event_source = function (url,var_args){
var p__20298 = null;if (arguments.length > 1) {
  p__20298 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return event_source__delegate.call(this,url,p__20298);};
event_source.cljs$lang$maxFixedArity = 1;
event_source.cljs$lang$applyTo = (function (arglist__20303){
var url = cljs.core.first(arglist__20303);
var p__20298 = cljs.core.rest(arglist__20303);
return event_source__delegate(url,p__20298);
});
event_source.cljs$core$IFn$_invoke$arity$variadic = event_source__delegate;
return event_source;
})()
;
