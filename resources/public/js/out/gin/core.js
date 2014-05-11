// Compiled by ClojureScript 0.0-2173
goog.provide('gin.core');
goog.require('cljs.core');
goog.require('gin.game_panel');
goog.require('gin.transact');
goog.require('datascript');
goog.require('gin.services');
goog.require('gin.services');
goog.require('gin.local.services');
goog.require('datascript');
goog.require('gin.local.services');
goog.require('gin.transact');
goog.require('gin.game_panel');
/**
* Return a map containing the initial application
*/
gin.core.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,gin.transact.schema),new cljs.core.Keyword(null,"render","render",4374279432),gin.game_panel.start_game_panel,new cljs.core.Keyword(null,"service","service",2998057511),gin.services.start_services], null);
});
gin.core.start_app = (function start_app(app_config){var map__11883 = app_config;var map__11883__$1 = ((cljs.core.seq_QMARK_.call(null,map__11883))?cljs.core.apply.call(null,cljs.core.hash_map,map__11883):map__11883);var app = map__11883__$1;var service = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"service","service",2998057511));var render = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"render","render",4374279432));var conn = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));console.log("service",service);
render.call(null,conn);
service.call(null,conn);
gin.core.app = app;
});
/**
* Application entry point
*/
gin.core.main = (function main(){return gin.core.start_app.call(null,gin.core.load_app.call(null));
});
goog.exportSymbol('gin.core.main', gin.core.main);
gin.core.load_local_app = (function load_local_app(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,gin.transact.schema),new cljs.core.Keyword(null,"render","render",4374279432),gin.game_panel.start_game_panel,new cljs.core.Keyword(null,"service","service",2998057511),gin.local.services.start_services], null);
});
gin.core.client_local = (function client_local(){return gin.core.start_app.call(null,gin.core.load_local_app.call(null));
});
goog.exportSymbol('gin.core.client_local', gin.core.client_local);
