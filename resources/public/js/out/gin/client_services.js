// Compiled by ClojureScript 0.0-2173
goog.provide('gin.client_services');
goog.require('cljs.core');
goog.require('gin.datascript_helpers');
goog.require('gin.datascript_helpers');
goog.require('datascript');
goog.require('datascript');
goog.require('gin.transact');
goog.require('gin.transact');
gin.client_services.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (event,p__40934,report,conn){var vec__40935 = p__40934;var game_id = cljs.core.nth.call(null,vec__40935,0,null);var player = cljs.core.nth.call(null,vec__40935,1,null);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,"game-id-1",cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player2","player2",520336611)], null))], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__40936,p__40937,conn){var vec__40938 = p__40936;var game_id = cljs.core.nth.call(null,vec__40938,0,null);var card_id = cljs.core.nth.call(null,vec__40938,1,null);var map__40939 = p__40937;var map__40939__$1 = ((cljs.core.seq_QMARK_.call(null,map__40939))?cljs.core.apply.call(null,cljs.core.hash_map,map__40939):map__40939);var report = map__40939__$1;var db_after = cljs.core.get.call(null,map__40939__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_pile_pick_revealed,game_id,new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"A","A",1013904307)], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__40940,p__40941,conn){var vec__40942 = p__40940;var game_id = cljs.core.nth.call(null,vec__40942,0,null);var card_id = cljs.core.nth.call(null,vec__40942,1,null);var map__40943 = p__40941;var map__40943__$1 = ((cljs.core.seq_QMARK_.call(null,map__40943))?cljs.core.apply.call(null,cljs.core.hash_map,map__40943):map__40943);var report = map__40943__$1;var db_after = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return console.log("Our hand after picking discard: ",cljs.core.pr_str.call(null,gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__40944,p__40945,conn){var vec__40946 = p__40944;var game_id = cljs.core.nth.call(null,vec__40946,0,null);var card_id = cljs.core.nth.call(null,vec__40946,1,null);var map__40947 = p__40945;var map__40947__$1 = ((cljs.core.seq_QMARK_.call(null,map__40947))?cljs.core.apply.call(null,cljs.core.hash_map,map__40947):map__40947);var report = map__40947__$1;var db_after = cljs.core.get.call(null,map__40947__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__40948,p__40949,conn){var vec__40950 = p__40948;var game_id = cljs.core.nth.call(null,vec__40950,0,null);var turn = cljs.core.nth.call(null,vec__40950,1,null);var map__40951 = p__40949;var map__40951__$1 = ((cljs.core.seq_QMARK_.call(null,map__40951))?cljs.core.apply.call(null,cljs.core.hash_map,map__40951):map__40951);var report = map__40951__$1;var db_after = cljs.core.get.call(null,map__40951__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));if(cljs.core.not_EQ_.call(null,turn,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gin.transact.their_pile_picked,gin.transact.their_discard_picked], null)),game_id], null)], null));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"their-pile-pick-revealed","their-pile-pick-revealed",3002247874),(function (event,p__40952,p__40953,conn){var vec__40954 = p__40952;var game_id = cljs.core.nth.call(null,vec__40954,0,null);var map__40955 = p__40953;var map__40955__$1 = ((cljs.core.seq_QMARK_.call(null,map__40955))?cljs.core.apply.call(null,cljs.core.hash_map,map__40955):map__40955);var report = map__40955__$1;var db_after = cljs.core.get.call(null,map__40955__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_chosen,game_id,new cljs.core.Keyword(null,"diamond","diamond",2668958918),new cljs.core.Keyword(null,"J","J",1013904316)], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__40956,p__40957,conn){var vec__40958 = p__40956;var game_id = cljs.core.nth.call(null,vec__40958,0,null);var card_id = cljs.core.nth.call(null,vec__40958,1,null);var suit = cljs.core.nth.call(null,vec__40958,2,null);var rank = cljs.core.nth.call(null,vec__40958,3,null);var map__40959 = p__40957;var map__40959__$1 = ((cljs.core.seq_QMARK_.call(null,map__40959))?cljs.core.apply.call(null,cljs.core.hash_map,map__40959):map__40959);var report = map__40959__$1;var db_after = cljs.core.get.call(null,map__40959__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}));
cljs.core._add_method.call(null,gin.client_services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.client_services.start_services = (function start_services(conn){datascript.listen_BANG_.call(null,conn,(function (p__40967){var map__40968 = p__40967;var map__40968__$1 = ((cljs.core.seq_QMARK_.call(null,map__40968))?cljs.core.apply.call(null,cljs.core.hash_map,map__40968):map__40968);var report = map__40968__$1;var db_after = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__40969 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__40969,0,null);var args = cljs.core.nth.call(null,vec__40969,1,null);return gin.client_services.handle.call(null,event,args,report,conn);
}));
datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,"game-id-1","pone","ptwo",new cljs.core.Keyword(null,"player1","player1",520336610)], null)], null));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,"game-id-1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"rank","rank",1017397150),new cljs.core.Keyword(null,"A","A",1013904307)], null),(function (){var iter__10096__auto__ = (function iter__40970(s__40971){return (new cljs.core.LazySeq(null,(function (){var s__40971__$1 = s__40971;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40971__$1);if(temp__4092__auto__)
{var s__40971__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40971__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__40971__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__40973 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__40972 = 0;while(true){
if((i__40972 < size__10095__auto__))
{var r = cljs.core._nth.call(null,c__10094__auto__,i__40972);cljs.core.chunk_append.call(null,b__40973,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),new cljs.core.Keyword(null,"spade","spade",1123542167),new cljs.core.Keyword(null,"rank","rank",1017397150),r], null));
{
var G__40974 = (i__40972 + 1);
i__40972 = G__40974;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40973),iter__40970.call(null,cljs.core.chunk_rest.call(null,s__40971__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40973),null);
}
} else
{var r = cljs.core.first.call(null,s__40971__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),new cljs.core.Keyword(null,"spade","spade",1123542167),new cljs.core.Keyword(null,"rank","rank",1017397150),r], null),iter__40970.call(null,cljs.core.rest.call(null,s__40971__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",1013907826),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"J","J",1013904316)], null));
})()], null)], null));
});
