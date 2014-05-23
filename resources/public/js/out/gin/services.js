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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__19037,db,conn){var vec__19038 = p__19037;var temp_id = cljs.core.nth.call(null,vec__19038,0,null);var text = cljs.core.nth.call(null,vec__19038,1,null);return ajax.core.POST.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__19039,db,conn){var vec__19040 = p__19039;var id = cljs.core.nth.call(null,vec__19040,0,null);var text = cljs.core.nth.call(null,vec__19040,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__19041,db,conn){var vec__19042 = p__19041;var id = cljs.core.nth.call(null,vec__19042,0,null);var completed = cljs.core.nth.call(null,vec__19042,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__19043,db,conn){var vec__19044 = p__19043;var id = cljs.core.nth.call(null,vec__19044,0,null);return gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__19045,db,conn){var vec__19046 = p__19045;var ids = cljs.core.nth.call(null,vec__19046,0,null);var seq__19047 = cljs.core.seq.call(null,ids);var chunk__19048 = null;var count__19049 = 0;var i__19050 = 0;while(true){
if((i__19050 < count__19049))
{var id = cljs.core._nth.call(null,chunk__19048,i__19050);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__19047,chunk__19048,count__19049,i__19050,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__19047,chunk__19048,count__19049,i__19050,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__19047,chunk__19048,count__19049,i__19050,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__19047,chunk__19048,count__19049,i__19050,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__19047,chunk__19048,count__19049,i__19050,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__19047,chunk__19048,count__19049,i__19050,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__19051 = seq__19047;
var G__19052 = chunk__19048;
var G__19053 = count__19049;
var G__19054 = (i__19050 + 1);
seq__19047 = G__19051;
chunk__19048 = G__19052;
count__19049 = G__19053;
i__19050 = G__19054;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19047);if(temp__4092__auto__)
{var seq__19047__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19047__$1))
{var c__16989__auto__ = cljs.core.chunk_first.call(null,seq__19047__$1);{
var G__19055 = cljs.core.chunk_rest.call(null,seq__19047__$1);
var G__19056 = c__16989__auto__;
var G__19057 = cljs.core.count.call(null,c__16989__auto__);
var G__19058 = 0;
seq__19047 = G__19055;
chunk__19048 = G__19056;
count__19049 = G__19057;
i__19050 = G__19058;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__19047__$1);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__19047,chunk__19048,count__19049,i__19050,id,seq__19047__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__19047,chunk__19048,count__19049,i__19050,id,seq__19047__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__19047,chunk__19048,count__19049,i__19050,id,seq__19047__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__19047,chunk__19048,count__19049,i__19050,id,seq__19047__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__19047,chunk__19048,count__19049,i__19050,id,seq__19047__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__19047,chunk__19048,count__19049,i__19050,id,seq__19047__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__19059 = cljs.core.next.call(null,seq__19047__$1);
var G__19060 = null;
var G__19061 = 0;
var G__19062 = 0;
seq__19047 = G__19059;
chunk__19048 = G__19060;
count__19049 = G__19061;
i__19050 = G__19062;
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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__19063 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__19064 = null;var count__19065 = 0;var i__19066 = 0;while(true){
if((i__19066 < count__19065))
{var vec__19067 = cljs.core._nth.call(null,chunk__19064,i__19066);var id = cljs.core.nth.call(null,vec__19067,0,null);var completed = cljs.core.nth.call(null,vec__19067,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__19069 = seq__19063;
var G__19070 = chunk__19064;
var G__19071 = count__19065;
var G__19072 = (i__19066 + 1);
seq__19063 = G__19069;
chunk__19064 = G__19070;
count__19065 = G__19071;
i__19066 = G__19072;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19063);if(temp__4092__auto__)
{var seq__19063__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19063__$1))
{var c__16989__auto__ = cljs.core.chunk_first.call(null,seq__19063__$1);{
var G__19073 = cljs.core.chunk_rest.call(null,seq__19063__$1);
var G__19074 = c__16989__auto__;
var G__19075 = cljs.core.count.call(null,c__16989__auto__);
var G__19076 = 0;
seq__19063 = G__19073;
chunk__19064 = G__19074;
count__19065 = G__19075;
i__19066 = G__19076;
continue;
}
} else
{var vec__19068 = cljs.core.first.call(null,seq__19063__$1);var id = cljs.core.nth.call(null,vec__19068,0,null);var completed = cljs.core.nth.call(null,vec__19068,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__19077 = cljs.core.next.call(null,seq__19063__$1);
var G__19078 = null;
var G__19079 = 0;
var G__19080 = 0;
seq__19063 = G__19077;
chunk__19064 = G__19078;
count__19065 = G__19079;
i__19066 = G__19080;
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
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (event,conn){var map__19081 = event;var map__19081__$1 = ((cljs.core.seq_QMARK_.call(null,map__19081))?cljs.core.apply.call(null,cljs.core.hash_map,map__19081):map__19081);var to_start = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var player2 = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"player2","player2",520336611));var player1 = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"player1","player1",520336610));var game_id = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,player1,player2,to_start], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,conn){return console.log([cljs.core.str("no handler for msg: "),cljs.core.str(cljs.core.pr_str.call(null,gin.services.msg))].join(''));
}));
gin.services.start_services = (function start_services(conn){console.log("HELLO REMOTE SERVICES!");
datascript.listen_BANG_.call(null,conn,(function (p__19085){var map__19086 = p__19085;var map__19086__$1 = ((cljs.core.seq_QMARK_.call(null,map__19086))?cljs.core.apply.call(null,cljs.core.hash_map,map__19086):map__19086);var report = map__19086__$1;var db_after = cljs.core.get.call(null,map__19086__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__19087 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__19087,0,null);var args = cljs.core.nth.call(null,vec__19087,1,null);return gin.services.handle_client.call(null,event,args,report,conn);
}));
var source = (new EventSource([cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/events")].join('')));return source.onmessage = (function (e){console.log("from services:",e);
var data = e.data;var event = cljs.reader.read_string.call(null,data);return gin.services.handle_server.call(null,event,conn);
});
});
