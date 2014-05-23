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
gin.services.handle_client = (function (){var method_table__17099__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17100__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17101__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17103__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-client",(function (event,args,db,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17103__auto__,method_table__17099__auto__,prefer_table__17100__auto__,method_cache__17101__auto__,cached_hierarchy__17102__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__19296,db,conn){var vec__19297 = p__19296;var temp_id = cljs.core.nth.call(null,vec__19297,0,null);var text = cljs.core.nth.call(null,vec__19297,1,null);return ajax.core.POST.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__19298,db,conn){var vec__19299 = p__19298;var id = cljs.core.nth.call(null,vec__19299,0,null);var text = cljs.core.nth.call(null,vec__19299,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__19300,db,conn){var vec__19301 = p__19300;var id = cljs.core.nth.call(null,vec__19301,0,null);var completed = cljs.core.nth.call(null,vec__19301,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__19302,db,conn){var vec__19303 = p__19302;var id = cljs.core.nth.call(null,vec__19303,0,null);return gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__19304,db,conn){var vec__19305 = p__19304;var ids = cljs.core.nth.call(null,vec__19305,0,null);var seq__19306 = cljs.core.seq.call(null,ids);var chunk__19307 = null;var count__19308 = 0;var i__19309 = 0;while(true){
if((i__19309 < count__19308))
{var id = cljs.core._nth.call(null,chunk__19307,i__19309);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__19306,chunk__19307,count__19308,i__19309,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__19306,chunk__19307,count__19308,i__19309,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__19306,chunk__19307,count__19308,i__19309,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__19306,chunk__19307,count__19308,i__19309,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__19306,chunk__19307,count__19308,i__19309,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__19306,chunk__19307,count__19308,i__19309,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__19310 = seq__19306;
var G__19311 = chunk__19307;
var G__19312 = count__19308;
var G__19313 = (i__19309 + 1);
seq__19306 = G__19310;
chunk__19307 = G__19311;
count__19308 = G__19312;
i__19309 = G__19313;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19306);if(temp__4092__auto__)
{var seq__19306__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19306__$1))
{var c__16989__auto__ = cljs.core.chunk_first.call(null,seq__19306__$1);{
var G__19314 = cljs.core.chunk_rest.call(null,seq__19306__$1);
var G__19315 = c__16989__auto__;
var G__19316 = cljs.core.count.call(null,c__16989__auto__);
var G__19317 = 0;
seq__19306 = G__19314;
chunk__19307 = G__19315;
count__19308 = G__19316;
i__19309 = G__19317;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__19306__$1);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__19306,chunk__19307,count__19308,i__19309,id,seq__19306__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__19306,chunk__19307,count__19308,i__19309,id,seq__19306__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__19306,chunk__19307,count__19308,i__19309,id,seq__19306__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__19306,chunk__19307,count__19308,i__19309,id,seq__19306__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__19306,chunk__19307,count__19308,i__19309,id,seq__19306__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__19306,chunk__19307,count__19308,i__19309,id,seq__19306__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__19318 = cljs.core.next.call(null,seq__19306__$1);
var G__19319 = null;
var G__19320 = 0;
var G__19321 = 0;
seq__19306 = G__19318;
chunk__19307 = G__19319;
count__19308 = G__19320;
i__19309 = G__19321;
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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__19322 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__19323 = null;var count__19324 = 0;var i__19325 = 0;while(true){
if((i__19325 < count__19324))
{var vec__19326 = cljs.core._nth.call(null,chunk__19323,i__19325);var id = cljs.core.nth.call(null,vec__19326,0,null);var completed = cljs.core.nth.call(null,vec__19326,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__19328 = seq__19322;
var G__19329 = chunk__19323;
var G__19330 = count__19324;
var G__19331 = (i__19325 + 1);
seq__19322 = G__19328;
chunk__19323 = G__19329;
count__19324 = G__19330;
i__19325 = G__19331;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19322);if(temp__4092__auto__)
{var seq__19322__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19322__$1))
{var c__16989__auto__ = cljs.core.chunk_first.call(null,seq__19322__$1);{
var G__19332 = cljs.core.chunk_rest.call(null,seq__19322__$1);
var G__19333 = c__16989__auto__;
var G__19334 = cljs.core.count.call(null,c__16989__auto__);
var G__19335 = 0;
seq__19322 = G__19332;
chunk__19323 = G__19333;
count__19324 = G__19334;
i__19325 = G__19335;
continue;
}
} else
{var vec__19327 = cljs.core.first.call(null,seq__19322__$1);var id = cljs.core.nth.call(null,vec__19327,0,null);var completed = cljs.core.nth.call(null,vec__19327,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__19336 = cljs.core.next.call(null,seq__19322__$1);
var G__19337 = null;
var G__19338 = 0;
var G__19339 = 0;
seq__19322 = G__19336;
chunk__19323 = G__19337;
count__19324 = G__19338;
i__19325 = G__19339;
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
gin.services.handle_server = (function (){var method_table__17099__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17100__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17101__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17102__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17103__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-server",(function (event,conn){var res = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(event);console.log("dispatching on: ",res);
return res;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17103__auto__,method_table__17099__auto__,prefer_table__17100__auto__,method_cache__17101__auto__,cached_hierarchy__17102__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (event,conn){var map__19340 = event;var map__19340__$1 = ((cljs.core.seq_QMARK_.call(null,map__19340))?cljs.core.apply.call(null,cljs.core.hash_map,map__19340):map__19340);var to_start = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var player2 = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"player2","player2",520336611));var player1 = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"player1","player1",520336610));var game_id = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,player1,player2,to_start], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,conn){var map__19341 = event;var map__19341__$1 = ((cljs.core.seq_QMARK_.call(null,map__19341))?cljs.core.apply.call(null,cljs.core.hash_map,map__19341):map__19341);var to_start = cljs.core.get.call(null,map__19341__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var our_cards = cljs.core.get.call(null,map__19341__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var discard = cljs.core.get.call(null,map__19341__$1,new cljs.core.Keyword(null,"discard","discard",2685271056));var game_id = cljs.core.get.call(null,map__19341__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,game_id,discard,our_cards,to_start], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,conn){return console.log([cljs.core.str("no handler for msg: "),cljs.core.str(cljs.core.pr_str.call(null,gin.services.msg))].join(''));
}));
gin.services.start_services = (function start_services(conn){console.log("HELLO REMOTE SERVICES!");
datascript.listen_BANG_.call(null,conn,(function (p__19345){var map__19346 = p__19345;var map__19346__$1 = ((cljs.core.seq_QMARK_.call(null,map__19346))?cljs.core.apply.call(null,cljs.core.hash_map,map__19346):map__19346);var report = map__19346__$1;var db_after = cljs.core.get.call(null,map__19346__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__19347 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__19347,0,null);var args = cljs.core.nth.call(null,vec__19347,1,null);return gin.services.handle_client.call(null,event,args,report,conn);
}));
var source = (new EventSource([cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/events")].join('')));return source.onmessage = (function (e){console.log("from services:",e);
var data = e.data;var event = cljs.reader.read_string.call(null,data);return gin.services.handle_server.call(null,event,conn);
});
});
