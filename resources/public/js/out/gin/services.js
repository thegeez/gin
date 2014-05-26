// Compiled by ClojureScript 0.0-2173
goog.provide('gin.services');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('gin.transact');
goog.require('gin.transact');
goog.require('datascript');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('datascript');
goog.require('cljs.reader');
gin.services.game_url = (function game_url(){return [cljs.core.str(window.location.pathname)].join('');
});
gin.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
gin.services.error_handler = (function error_handler(conn){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.error,"fail"], null)], null));
});
gin.services.handle_client = (function (){var method_table__17354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17358__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-client",(function (event,args,db,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17358__auto__,method_table__17354__auto__,prefer_table__17355__auto__,method_cache__17356__auto__,cached_hierarchy__17357__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,p__19293,db,conn){var vec__19294 = p__19293;var game_id = cljs.core.nth.call(null,vec__19294,0,null);var player = cljs.core.nth.call(null,vec__19294,1,null);console.log("Player is ready, tell this to the server!");
return ajax.core.POST.call(null,[cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/action")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"player","player",4323118675),player], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__19295,db,conn){var vec__19296 = p__19295;var id = cljs.core.nth.call(null,vec__19296,0,null);var text = cljs.core.nth.call(null,vec__19296,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.commit_edit,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__19297,db,conn){var vec__19298 = p__19297;var id = cljs.core.nth.call(null,vec__19298,0,null);var completed = cljs.core.nth.call(null,vec__19298,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__19299,db,conn){var vec__19300 = p__19299;var id = cljs.core.nth.call(null,vec__19300,0,null);return gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__19301,db,conn){var vec__19302 = p__19301;var ids = cljs.core.nth.call(null,vec__19302,0,null);var seq__19303 = cljs.core.seq.call(null,ids);var chunk__19304 = null;var count__19305 = 0;var i__19306 = 0;while(true){
if((i__19306 < count__19305))
{var id = cljs.core._nth.call(null,chunk__19304,i__19306);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__19303,chunk__19304,count__19305,i__19306,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__19303,chunk__19304,count__19305,i__19306,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__19303,chunk__19304,count__19305,i__19306,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__19303,chunk__19304,count__19305,i__19306,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__19303,chunk__19304,count__19305,i__19306,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__19303,chunk__19304,count__19305,i__19306,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__19307 = seq__19303;
var G__19308 = chunk__19304;
var G__19309 = count__19305;
var G__19310 = (i__19306 + 1);
seq__19303 = G__19307;
chunk__19304 = G__19308;
count__19305 = G__19309;
i__19306 = G__19310;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19303);if(temp__4092__auto__)
{var seq__19303__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19303__$1))
{var c__17244__auto__ = cljs.core.chunk_first.call(null,seq__19303__$1);{
var G__19311 = cljs.core.chunk_rest.call(null,seq__19303__$1);
var G__19312 = c__17244__auto__;
var G__19313 = cljs.core.count.call(null,c__17244__auto__);
var G__19314 = 0;
seq__19303 = G__19311;
chunk__19304 = G__19312;
count__19305 = G__19313;
i__19306 = G__19314;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__19303__$1);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__19303,chunk__19304,count__19305,i__19306,id,seq__19303__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__19303,chunk__19304,count__19305,i__19306,id,seq__19303__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__19303,chunk__19304,count__19305,i__19306,id,seq__19303__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__19303,chunk__19304,count__19305,i__19306,id,seq__19303__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__19303,chunk__19304,count__19305,i__19306,id,seq__19303__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__19303,chunk__19304,count__19305,i__19306,id,seq__19303__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__19315 = cljs.core.next.call(null,seq__19303__$1);
var G__19316 = null;
var G__19317 = 0;
var G__19318 = 0;
seq__19303 = G__19315;
chunk__19304 = G__19316;
count__19305 = G__19317;
i__19306 = G__19318;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__19319 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__19320 = null;var count__19321 = 0;var i__19322 = 0;while(true){
if((i__19322 < count__19321))
{var vec__19323 = cljs.core._nth.call(null,chunk__19320,i__19322);var id = cljs.core.nth.call(null,vec__19323,0,null);var completed = cljs.core.nth.call(null,vec__19323,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__19325 = seq__19319;
var G__19326 = chunk__19320;
var G__19327 = count__19321;
var G__19328 = (i__19322 + 1);
seq__19319 = G__19325;
chunk__19320 = G__19326;
count__19321 = G__19327;
i__19322 = G__19328;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19319);if(temp__4092__auto__)
{var seq__19319__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19319__$1))
{var c__17244__auto__ = cljs.core.chunk_first.call(null,seq__19319__$1);{
var G__19329 = cljs.core.chunk_rest.call(null,seq__19319__$1);
var G__19330 = c__17244__auto__;
var G__19331 = cljs.core.count.call(null,c__17244__auto__);
var G__19332 = 0;
seq__19319 = G__19329;
chunk__19320 = G__19330;
count__19321 = G__19331;
i__19322 = G__19332;
continue;
}
} else
{var vec__19324 = cljs.core.first.call(null,seq__19319__$1);var id = cljs.core.nth.call(null,vec__19324,0,null);var completed = cljs.core.nth.call(null,vec__19324,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__19333 = cljs.core.next.call(null,seq__19319__$1);
var G__19334 = null;
var G__19335 = 0;
var G__19336 = 0;
seq__19319 = G__19333;
chunk__19320 = G__19334;
count__19321 = G__19335;
i__19322 = G__19336;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.services.handle_server = (function (){var method_table__17354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17358__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-server",(function (event,conn){var res = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(event);console.log("dispatching on: ",res);
return res;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17358__auto__,method_table__17354__auto__,prefer_table__17355__auto__,method_cache__17356__auto__,cached_hierarchy__17357__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (event,conn){var map__19337 = event;var map__19337__$1 = ((cljs.core.seq_QMARK_.call(null,map__19337))?cljs.core.apply.call(null,cljs.core.hash_map,map__19337):map__19337);var us = cljs.core.get.call(null,map__19337__$1,new cljs.core.Keyword(null,"us","us",1013907984));var player2 = cljs.core.get.call(null,map__19337__$1,new cljs.core.Keyword(null,"player2","player2",520336611));var player1 = cljs.core.get.call(null,map__19337__$1,new cljs.core.Keyword(null,"player1","player1",520336610));var game_id = cljs.core.get.call(null,map__19337__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,player1,player2,us], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,conn){var map__19338 = event;var map__19338__$1 = ((cljs.core.seq_QMARK_.call(null,map__19338))?cljs.core.apply.call(null,cljs.core.hash_map,map__19338):map__19338);var to_start = cljs.core.get.call(null,map__19338__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var our_cards = cljs.core.get.call(null,map__19338__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var discard = cljs.core.get.call(null,map__19338__$1,new cljs.core.Keyword(null,"discard","discard",2685271056));var game_id = cljs.core.get.call(null,map__19338__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,game_id,discard,our_cards,to_start], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,conn){var map__19339 = event;var map__19339__$1 = ((cljs.core.seq_QMARK_.call(null,map__19339))?cljs.core.apply.call(null,cljs.core.hash_map,map__19339):map__19339);var turn = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var game_id = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,conn){var map__19340 = event;var map__19340__$1 = ((cljs.core.seq_QMARK_.call(null,map__19340))?cljs.core.apply.call(null,cljs.core.hash_map,map__19340):map__19340);var opp_cards = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"result","result",4374444943));var game_id = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,conn){return console.log([cljs.core.str("no handler for msg: "),cljs.core.str(cljs.core.pr_str.call(null,gin.services.msg))].join(''));
}));
gin.services.start_services = (function start_services(conn){console.log("HELLO REMOTE SERVICES!");
datascript.listen_BANG_.call(null,conn,(function (p__19344){var map__19345 = p__19344;var map__19345__$1 = ((cljs.core.seq_QMARK_.call(null,map__19345))?cljs.core.apply.call(null,cljs.core.hash_map,map__19345):map__19345);var report = map__19345__$1;var db_after = cljs.core.get.call(null,map__19345__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__19346 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__19346,0,null);var args = cljs.core.nth.call(null,vec__19346,1,null);return gin.services.handle_client.call(null,event,args,report,conn);
}));
var source = (new EventSource([cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/events")].join('')));return source.onmessage = (function (e){console.log("from services:",e);
var data = e.data;var event = cljs.reader.read_string.call(null,data);return gin.services.handle_server.call(null,event,conn);
});
});
