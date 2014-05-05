// Compiled by ClojureScript 0.0-2173
goog.provide('gin.services');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('datascript');
goog.require('datascript');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('gin.transact');
goog.require('gin.transact');
/**
* Not yet in cljs-ajax 0.2.3
* @param {...*} var_args
*/
gin.services.DELETE = (function() { 
var DELETE__delegate = function (uri,p__13046){var vec__13048 = p__13046;var opts = cljs.core.nth.call(null,vec__13048,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__13046 = null;if (arguments.length > 1) {
  p__13046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__13046);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__13049){
var uri = cljs.core.first(arglist__13049);
var p__13046 = cljs.core.rest(arglist__13049);
return DELETE__delegate(uri,p__13046);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
gin.services.todos_url = (function todos_url(){return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
gin.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
gin.services.error_handler = (function error_handler(conn){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.error,"fail"], null)], null));
});
gin.services.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,db,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__13050,db,conn){var vec__13051 = p__13050;var temp_id = cljs.core.nth.call(null,vec__13051,0,null);var text = cljs.core.nth.call(null,vec__13051,1,null);return ajax.core.POST.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__13052,db,conn){var vec__13053 = p__13052;var id = cljs.core.nth.call(null,vec__13053,0,null);var text = cljs.core.nth.call(null,vec__13053,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__13054,db,conn){var vec__13055 = p__13054;var id = cljs.core.nth.call(null,vec__13055,0,null);var completed = cljs.core.nth.call(null,vec__13055,1,null);return ajax.core.PUT.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__13056,db,conn){var vec__13057 = p__13056;var id = cljs.core.nth.call(null,vec__13057,0,null);return gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__13058,db,conn){var vec__13059 = p__13058;var ids = cljs.core.nth.call(null,vec__13059,0,null);var seq__13060 = cljs.core.seq.call(null,ids);var chunk__13061 = null;var count__13062 = 0;var i__13063 = 0;while(true){
if((i__13063 < count__13062))
{var id = cljs.core._nth.call(null,chunk__13061,i__13063);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__13060,chunk__13061,count__13062,i__13063,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__13060,chunk__13061,count__13062,i__13063,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__13060,chunk__13061,count__13062,i__13063,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__13060,chunk__13061,count__13062,i__13063,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__13060,chunk__13061,count__13062,i__13063,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__13060,chunk__13061,count__13062,i__13063,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__13064 = seq__13060;
var G__13065 = chunk__13061;
var G__13066 = count__13062;
var G__13067 = (i__13063 + 1);
seq__13060 = G__13064;
chunk__13061 = G__13065;
count__13062 = G__13066;
i__13063 = G__13067;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13060);if(temp__4092__auto__)
{var seq__13060__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13060__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__13060__$1);{
var G__13068 = cljs.core.chunk_rest.call(null,seq__13060__$1);
var G__13069 = c__10127__auto__;
var G__13070 = cljs.core.count.call(null,c__10127__auto__);
var G__13071 = 0;
seq__13060 = G__13068;
chunk__13061 = G__13069;
count__13062 = G__13070;
i__13063 = G__13071;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__13060__$1);gin.services.DELETE.call(null,gin.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__13060,chunk__13061,count__13062,i__13063,id,seq__13060__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__13060,chunk__13061,count__13062,i__13063,id,seq__13060__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__13060,chunk__13061,count__13062,i__13063,id,seq__13060__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return gin.services.error_handler.call(null,conn);
});})(seq__13060,chunk__13061,count__13062,i__13063,id,seq__13060__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__13060,chunk__13061,count__13062,i__13063,id,seq__13060__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__13060,chunk__13061,count__13062,i__13063,id,seq__13060__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.services.csrf_token.call(null)], null)], null));
{
var G__13072 = cljs.core.next.call(null,seq__13060__$1);
var G__13073 = null;
var G__13074 = 0;
var G__13075 = 0;
seq__13060 = G__13072;
chunk__13061 = G__13073;
count__13062 = G__13074;
i__13063 = G__13075;
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
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__13076 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__13077 = null;var count__13078 = 0;var i__13079 = 0;while(true){
if((i__13079 < count__13078))
{var vec__13080 = cljs.core._nth.call(null,chunk__13077,i__13079);var id = cljs.core.nth.call(null,vec__13080,0,null);var completed = cljs.core.nth.call(null,vec__13080,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__13082 = seq__13076;
var G__13083 = chunk__13077;
var G__13084 = count__13078;
var G__13085 = (i__13079 + 1);
seq__13076 = G__13082;
chunk__13077 = G__13083;
count__13078 = G__13084;
i__13079 = G__13085;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13076);if(temp__4092__auto__)
{var seq__13076__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13076__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__13076__$1);{
var G__13086 = cljs.core.chunk_rest.call(null,seq__13076__$1);
var G__13087 = c__10127__auto__;
var G__13088 = cljs.core.count.call(null,c__10127__auto__);
var G__13089 = 0;
seq__13076 = G__13086;
chunk__13077 = G__13087;
count__13078 = G__13088;
i__13079 = G__13089;
continue;
}
} else
{var vec__13081 = cljs.core.first.call(null,seq__13076__$1);var id = cljs.core.nth.call(null,vec__13081,0,null);var completed = cljs.core.nth.call(null,vec__13081,1,null);gin.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__13090 = cljs.core.next.call(null,seq__13076__$1);
var G__13091 = null;
var G__13092 = 0;
var G__13093 = 0;
seq__13076 = G__13090;
chunk__13077 = G__13091;
count__13078 = G__13092;
i__13079 = G__13093;
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
cljs.core._add_method.call(null,gin.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.services.start_services = (function start_services(conn){return datascript.listen_BANG_.call(null,conn,(function (p__13097){var map__13098 = p__13097;var map__13098__$1 = ((cljs.core.seq_QMARK_.call(null,map__13098))?cljs.core.apply.call(null,cljs.core.hash_map,map__13098):map__13098);var report = map__13098__$1;var db_after = cljs.core.get.call(null,map__13098__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__13099 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__13099,0,null);var args = cljs.core.nth.call(null,vec__13099,1,null);return gin.services.handle.call(null,event,args,db_after,conn);
}));
});
