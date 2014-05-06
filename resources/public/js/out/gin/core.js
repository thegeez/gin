// Compiled by ClojureScript 0.0-2173
goog.provide('gin.core');
goog.require('cljs.core');
goog.require('gin.game_panel');
goog.require('gin.transact');
goog.require('gin.client_services');
goog.require('datascript');
goog.require('gin.client_services');
goog.require('gin.services');
goog.require('gin.services');
goog.require('datascript');
goog.require('gin.transact');
goog.require('gin.game_panel');
/**
* Return a map containing the initial application
*/
gin.core.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,gin.transact.schema),new cljs.core.Keyword(null,"render","render",4374279432),gin.game_panel.start_game_panel,new cljs.core.Keyword(null,"service","service",2998057511),gin.services.start_services], null);
});
gin.core.start_app = (function start_app(app_config){var map__18342 = app_config;var map__18342__$1 = ((cljs.core.seq_QMARK_.call(null,map__18342))?cljs.core.apply.call(null,cljs.core.hash_map,map__18342):map__18342);var app = map__18342__$1;var service = cljs.core.get.call(null,map__18342__$1,new cljs.core.Keyword(null,"service","service",2998057511));var render = cljs.core.get.call(null,map__18342__$1,new cljs.core.Keyword(null,"render","render",4374279432));var conn = cljs.core.get.call(null,map__18342__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.listen_BANG_.call(null,conn,(function (report){console.log("db-after",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report)));
console.log("tx-data",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709).cljs$core$IFn$_invoke$arity$1(report)));
if(cljs.core.truth_(cljs.core.some.call(null,(function (d){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(d),null);
}),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709).cljs$core$IFn$_invoke$arity$1(report))))
{return alert([cljs.core.str("Something broken with: "),cljs.core.str(cljs.core.pr_str.call(null,report))].join(''));
} else
{return null;
}
}));
console.log("service",service);
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
gin.core.load_local_app = (function load_local_app(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,gin.transact.schema),new cljs.core.Keyword(null,"render","render",4374279432),gin.game_panel.start_game_panel,new cljs.core.Keyword(null,"service","service",2998057511),gin.client_services.start_services], null);
});
gin.core.client_local = (function client_local(){return gin.core.start_app.call(null,gin.core.load_local_app.call(null));
});
goog.exportSymbol('gin.core.client_local', gin.core.client_local);
