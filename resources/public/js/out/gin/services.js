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
gin.services.POST_ACTION = (function POST_ACTION(url,options){console.log("Post-action",url);
return ajax.core.POST.call(null,url,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,gin.services.conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null),options));
});
gin.services.handle_client = (function (){var method_table__17491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-client",(function (event,args,db,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17495__auto__,method_table__17491__auto__,prefer_table__17492__auto__,method_cache__17493__auto__,cached_hierarchy__17494__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,p__19991,db,conn){var vec__19992 = p__19991;var game_id = cljs.core.nth.call(null,vec__19992,0,null);var player = cljs.core.nth.call(null,vec__19992,1,null);console.log("Player is ready, tell this to the server!");
return ajax.core.POST.call(null,[cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/player-ready")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"player","player",4323118675),player], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (_,p__19993,db,conn){var vec__19994 = p__19993;var game_id = cljs.core.nth.call(null,vec__19994,0,null);var card_id = cljs.core.nth.call(null,vec__19994,1,null);console.log(":our-discard-picked");
return ajax.core.POST.call(null,[cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/discard-picked")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (_,p__19995,db,conn){var vec__19996 = p__19995;var game_id = cljs.core.nth.call(null,vec__19996,0,null);var card_id = cljs.core.nth.call(null,vec__19996,1,null);var suit = cljs.core.nth.call(null,vec__19996,2,null);var rank = cljs.core.nth.call(null,vec__19996,3,null);console.log("OUR_DISCARD_CHOSEN POST",cljs.core.pr_str.call(null,suit),cljs.core.pr_str.call(null,rank));
return gin.services.POST_ACTION.call(null,[cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/discard-chosen")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"suit","suit",1017446015),suit,new cljs.core.Keyword(null,"rank","rank",1017397150),rank], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__19997,db,conn){var vec__19998 = p__19997;var id = cljs.core.nth.call(null,vec__19998,0,null);var text = cljs.core.nth.call(null,vec__19998,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__19999,db,conn){var vec__20000 = p__19999;var id = cljs.core.nth.call(null,vec__20000,0,null);var completed = cljs.core.nth.call(null,vec__20000,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__20001,db,conn){var vec__20002 = p__20001;var id = cljs.core.nth.call(null,vec__20002,0,null);return gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__20003,db,conn){var vec__20004 = p__20003;var ids = cljs.core.nth.call(null,vec__20004,0,null);var seq__20005 = cljs.core.seq.call(null,ids);var chunk__20006 = null;var count__20007 = 0;var i__20008 = 0;while(true){
if((i__20008 < count__20007))
{var id = cljs.core._nth.call(null,chunk__20006,i__20008);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__20005,chunk__20006,count__20007,i__20008,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__20005,chunk__20006,count__20007,i__20008,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__20005,chunk__20006,count__20007,i__20008,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__20005,chunk__20006,count__20007,i__20008,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__20005,chunk__20006,count__20007,i__20008,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__20005,chunk__20006,count__20007,i__20008,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__20009 = seq__20005;
var G__20010 = chunk__20006;
var G__20011 = count__20007;
var G__20012 = (i__20008 + 1);
seq__20005 = G__20009;
chunk__20006 = G__20010;
count__20007 = G__20011;
i__20008 = G__20012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20005);if(temp__4092__auto__)
{var seq__20005__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20005__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__20005__$1);{
var G__20013 = cljs.core.chunk_rest.call(null,seq__20005__$1);
var G__20014 = c__17381__auto__;
var G__20015 = cljs.core.count.call(null,c__17381__auto__);
var G__20016 = 0;
seq__20005 = G__20013;
chunk__20006 = G__20014;
count__20007 = G__20015;
i__20008 = G__20016;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__20005__$1);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__20005,chunk__20006,count__20007,i__20008,id,seq__20005__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__20005,chunk__20006,count__20007,i__20008,id,seq__20005__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__20005,chunk__20006,count__20007,i__20008,id,seq__20005__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__20005,chunk__20006,count__20007,i__20008,id,seq__20005__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__20005,chunk__20006,count__20007,i__20008,id,seq__20005__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__20005,chunk__20006,count__20007,i__20008,id,seq__20005__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__20017 = cljs.core.next.call(null,seq__20005__$1);
var G__20018 = null;
var G__20019 = 0;
var G__20020 = 0;
seq__20005 = G__20017;
chunk__20006 = G__20018;
count__20007 = G__20019;
i__20008 = G__20020;
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
cljs.core._add_method.call(null,gin.services.handle_client,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__20021 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__20022 = null;var count__20023 = 0;var i__20024 = 0;while(true){
if((i__20024 < count__20023))
{var vec__20025 = cljs.core._nth.call(null,chunk__20022,i__20024);var id = cljs.core.nth.call(null,vec__20025,0,null);var completed = cljs.core.nth.call(null,vec__20025,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__20027 = seq__20021;
var G__20028 = chunk__20022;
var G__20029 = count__20023;
var G__20030 = (i__20024 + 1);
seq__20021 = G__20027;
chunk__20022 = G__20028;
count__20023 = G__20029;
i__20024 = G__20030;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20021);if(temp__4092__auto__)
{var seq__20021__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20021__$1))
{var c__17381__auto__ = cljs.core.chunk_first.call(null,seq__20021__$1);{
var G__20031 = cljs.core.chunk_rest.call(null,seq__20021__$1);
var G__20032 = c__17381__auto__;
var G__20033 = cljs.core.count.call(null,c__17381__auto__);
var G__20034 = 0;
seq__20021 = G__20031;
chunk__20022 = G__20032;
count__20023 = G__20033;
i__20024 = G__20034;
continue;
}
} else
{var vec__20026 = cljs.core.first.call(null,seq__20021__$1);var id = cljs.core.nth.call(null,vec__20026,0,null);var completed = cljs.core.nth.call(null,vec__20026,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__20035 = cljs.core.next.call(null,seq__20021__$1);
var G__20036 = null;
var G__20037 = 0;
var G__20038 = 0;
seq__20021 = G__20035;
chunk__20022 = G__20036;
count__20023 = G__20037;
i__20024 = G__20038;
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
gin.services.handle_server = (function (){var method_table__17491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17495__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-server",(function (event,conn){var res = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(event);console.log("dispatching on: ",res);
return res;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17495__auto__,method_table__17491__auto__,prefer_table__17492__auto__,method_cache__17493__auto__,cached_hierarchy__17494__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (event,conn){var map__20039 = event;var map__20039__$1 = ((cljs.core.seq_QMARK_.call(null,map__20039))?cljs.core.apply.call(null,cljs.core.hash_map,map__20039):map__20039);var us = cljs.core.get.call(null,map__20039__$1,new cljs.core.Keyword(null,"us","us",1013907984));var player2 = cljs.core.get.call(null,map__20039__$1,new cljs.core.Keyword(null,"player2","player2",520336611));var player1 = cljs.core.get.call(null,map__20039__$1,new cljs.core.Keyword(null,"player1","player1",520336610));var game_id = cljs.core.get.call(null,map__20039__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,player1,player2,us], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,conn){var map__20040 = event;var map__20040__$1 = ((cljs.core.seq_QMARK_.call(null,map__20040))?cljs.core.apply.call(null,cljs.core.hash_map,map__20040):map__20040);var to_start = cljs.core.get.call(null,map__20040__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var our_cards = cljs.core.get.call(null,map__20040__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var discard = cljs.core.get.call(null,map__20040__$1,new cljs.core.Keyword(null,"discard","discard",2685271056));var game_id = cljs.core.get.call(null,map__20040__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,game_id,discard,our_cards,to_start], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,conn){var map__20041 = event;var map__20041__$1 = ((cljs.core.seq_QMARK_.call(null,map__20041))?cljs.core.apply.call(null,cljs.core.hash_map,map__20041):map__20041);var turn = cljs.core.get.call(null,map__20041__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var game_id = cljs.core.get.call(null,map__20041__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,conn){return null;
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,conn){return console.log("Server thinks we chose as discard: ",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(event)));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,conn){var map__20042 = event;var map__20042__$1 = ((cljs.core.seq_QMARK_.call(null,map__20042))?cljs.core.apply.call(null,cljs.core.hash_map,map__20042):map__20042);var game_id = cljs.core.get.call(null,map__20042__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_picked,game_id], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,conn){var map__20043 = event;var map__20043__$1 = ((cljs.core.seq_QMARK_.call(null,map__20043))?cljs.core.apply.call(null,cljs.core.hash_map,map__20043):map__20043);var game_id = cljs.core.get.call(null,map__20043__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_chosen,game_id,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(event)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,conn){var map__20044 = event;var map__20044__$1 = ((cljs.core.seq_QMARK_.call(null,map__20044))?cljs.core.apply.call(null,cljs.core.hash_map,map__20044):map__20044);var opp_cards = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"result","result",4374444943));var game_id = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle_server,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,conn){return console.log([cljs.core.str("no handler for msg: "),cljs.core.str(cljs.core.pr_str.call(null,gin.services.msg))].join(''));
}));
gin.services.start_services = (function start_services(conn){console.log("HELLO REMOTE SERVICES!");
datascript.listen_BANG_.call(null,conn,(function (p__20048){var map__20049 = p__20048;var map__20049__$1 = ((cljs.core.seq_QMARK_.call(null,map__20049))?cljs.core.apply.call(null,cljs.core.hash_map,map__20049):map__20049);var report = map__20049__$1;var db_after = cljs.core.get.call(null,map__20049__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__20050 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__20050,0,null);var args = cljs.core.nth.call(null,vec__20050,1,null);return gin.services.handle_client.call(null,event,args,report,conn);
}));
var source = (new EventSource([cljs.core.str(gin.services.game_url.call(null)),cljs.core.str("/events")].join('')));return source.onmessage = (function (e){console.log("from services:",e);
var data = e.data;var event = cljs.reader.read_string.call(null,data);return gin.services.handle_server.call(null,event,conn);
});
});
