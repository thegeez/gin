// Compiled by ClojureScript 0.0-2173
goog.provide('gin.datascript_helpers');
goog.require('cljs.core');
goog.require('datascript');
goog.require('datascript');
gin.datascript_helpers.entity_lookup = (function entity_lookup(db,av_key){var temp__4092__auto__ = cljs.core.first.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"av","av",1013907367).cljs$core$IFn$_invoke$arity$1(db),av_key));if(cljs.core.truth_(temp__4092__auto__))
{var d = temp__4092__auto__;return datascript.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(d));
} else
{return null;
}
});
