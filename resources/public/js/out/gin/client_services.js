// Compiled by ClojureScript 0.0-2173
goog.provide('gin.client_services');
goog.require('cljs.core');
goog.require('datascript');
goog.require('datascript');
goog.require('gin.transact');
goog.require('gin.transact');
gin.client_services.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,db,conn,local_conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__19130,db,conn,local_conn){var vec__19131 = p__19130;var temp_id = cljs.core.nth.call(null,vec__19131,0,null);var text = cljs.core.nth.call(null,vec__19131,1,null);var tx = datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),false], null)], null));var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",3880764886).cljs$core$IFn$_invoke$arity$1(tx),-1);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.commit_item,temp_id,id], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__19132,db,conn,local_conn){var vec__19133 = p__19132;var id = cljs.core.nth.call(null,vec__19133,0,null);var text = cljs.core.nth.call(null,vec__19133,1,null);datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null)], null));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.commit_edit,id], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__19134,db,conn,local_conn){var vec__19135 = p__19134;var id = cljs.core.nth.call(null,vec__19135,0,null);var completed = cljs.core.nth.call(null,vec__19135,1,null);return datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__19136,db,conn,local_conn){var vec__19137 = p__19136;var id = cljs.core.nth.call(null,vec__19137,0,null);return datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__19138,db,conn,local_conn){var vec__19139 = p__19138;var ids = cljs.core.nth.call(null,vec__19139,0,null);return datascript.transact_BANG_.call(null,local_conn,(function (){var iter__10096__auto__ = (function iter__19140(s__19141){return (new cljs.core.LazySeq(null,(function (){var s__19141__$1 = s__19141;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19141__$1);if(temp__4092__auto__)
{var s__19141__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19141__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__19141__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__19143 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__19142 = 0;while(true){
if((i__19142 < size__10095__auto__))
{var id = cljs.core._nth.call(null,c__10094__auto__,i__19142);cljs.core.chunk_append.call(null,b__19143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null));
{
var G__19144 = (i__19142 + 1);
i__19142 = G__19144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19143),iter__19140.call(null,cljs.core.chunk_rest.call(null,s__19141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19143),null);
}
} else
{var id = cljs.core.first.call(null,s__19141__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null),iter__19140.call(null,cljs.core.rest.call(null,s__19141__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,ids);
})());
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn,local_conn){var seq__19145 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__19146 = null;var count__19147 = 0;var i__19148 = 0;while(true){
if((i__19148 < count__19147))
{var vec__19149 = cljs.core._nth.call(null,chunk__19146,i__19148);var id = cljs.core.nth.call(null,vec__19149,0,null);var completed = cljs.core.nth.call(null,vec__19149,1,null);gin.client_services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn,local_conn);
{
var G__19151 = seq__19145;
var G__19152 = chunk__19146;
var G__19153 = count__19147;
var G__19154 = (i__19148 + 1);
seq__19145 = G__19151;
chunk__19146 = G__19152;
count__19147 = G__19153;
i__19148 = G__19154;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19145);if(temp__4092__auto__)
{var seq__19145__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19145__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__19145__$1);{
var G__19155 = cljs.core.chunk_rest.call(null,seq__19145__$1);
var G__19156 = c__10127__auto__;
var G__19157 = cljs.core.count.call(null,c__10127__auto__);
var G__19158 = 0;
seq__19145 = G__19155;
chunk__19146 = G__19156;
count__19147 = G__19157;
i__19148 = G__19158;
continue;
}
} else
{var vec__19150 = cljs.core.first.call(null,seq__19145__$1);var id = cljs.core.nth.call(null,vec__19150,0,null);var completed = cljs.core.nth.call(null,vec__19150,1,null);gin.client_services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn,local_conn);
{
var G__19159 = cljs.core.next.call(null,seq__19145__$1);
var G__19160 = null;
var G__19161 = 0;
var G__19162 = 0;
seq__19145 = G__19159;
chunk__19146 = G__19160;
count__19147 = G__19161;
i__19148 = G__19162;
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
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.client_services.start_services = (function start_services(conn){var local_conn = datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);datascript.listen_BANG_.call(null,conn,(function (p__19170){var map__19171 = p__19170;var map__19171__$1 = ((cljs.core.seq_QMARK_.call(null,map__19171))?cljs.core.apply.call(null,cljs.core.hash_map,map__19171):map__19171);var report = map__19171__$1;var db_after = cljs.core.get.call(null,map__19171__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__19172 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__19172,0,null);var args = cljs.core.nth.call(null,vec__19172,1,null);return gin.client_services.handle.call(null,event,args,db_after,conn,local_conn);
}));
return window.setTimeout((function (){datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,"game-id-1","pone","ptwo",new cljs.core.Keyword(null,"player1","player1",520336610)], null)], null));
datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,"game-id-1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"rank","rank",1017397150),new cljs.core.Keyword(null,"A","A",1013904307)], null),(function (){var iter__10096__auto__ = (function iter__19173(s__19174){return (new cljs.core.LazySeq(null,(function (){var s__19174__$1 = s__19174;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19174__$1);if(temp__4092__auto__)
{var s__19174__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19174__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__19174__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__19176 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__19175 = 0;while(true){
if((i__19175 < size__10095__auto__))
{var r = cljs.core._nth.call(null,c__10094__auto__,i__19175);cljs.core.chunk_append.call(null,b__19176,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),new cljs.core.Keyword(null,"spade","spade",1123542167),new cljs.core.Keyword(null,"rank","rank",1017397150),r], null));
{
var G__19177 = (i__19175 + 1);
i__19175 = G__19177;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19176),iter__19173.call(null,cljs.core.chunk_rest.call(null,s__19174__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19176),null);
}
} else
{var r = cljs.core.first.call(null,s__19174__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),new cljs.core.Keyword(null,"spade","spade",1123542167),new cljs.core.Keyword(null,"rank","rank",1017397150),r], null),iter__19173.call(null,cljs.core.rest.call(null,s__19174__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",1013907826),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"J","J",1013904316)], null));
})()], null)], null));
return window.setTimeout((function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,"game-id-1",new cljs.core.Keyword(null,"player1","player1",520336610)], null)], null));
}),10000);
}),1000);
});
