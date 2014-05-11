// Compiled by ClojureScript 0.0-2173
goog.provide('gin.local.services');
goog.require('cljs.core');
goog.require('gin.transact');
goog.require('gin.local.game');
goog.require('gin.transact');
goog.require('gin.local.table');
goog.require('datascript');
goog.require('gin.local.game');
goog.require('gin.datascript_helpers');
goog.require('datascript');
goog.require('gin.local.table');
goog.require('gin.datascript_helpers');
gin.local.services.handle = (function (){var method_table__10237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__10238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__10239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__10240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__10241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,report,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__10241__auto__,method_table__10237__auto__,prefer_table__10238__auto__,method_cache__10239__auto__,cached_hierarchy__10240__auto__));
})();
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (event,p__11844,report,conn){var vec__11845 = p__11844;var game_id = cljs.core.nth.call(null,vec__11845,0,null);var player = cljs.core.nth.call(null,vec__11845,1,null);var game = gin.datascript_helpers.entity_lookup.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var starting = new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(game);var map__11846 = gin.local.table.table_state.call(null);var map__11846__$1 = ((cljs.core.seq_QMARK_.call(null,map__11846))?cljs.core.apply.call(null,cljs.core.hash_map,map__11846):map__11846);var opp_cards = cljs.core.get.call(null,map__11846__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__11846__$1,new cljs.core.Keyword(null,"result","result",4374444943));return datascript.transact_BANG_.call(null,conn,(function (){var temp__4090__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tie","tie",1014019074),new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),new cljs.core.Keyword(null,"our-win","our-win",4198915405),new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054)], null),result);if(cljs.core.truth_(temp__4090__auto__))
{var result__$1 = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result__$1,opp_cards], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,starting], null)], null);
}
})());
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__11847,p__11848,conn){var vec__11849 = p__11847;var game_id = cljs.core.nth.call(null,vec__11849,0,null);var card_id = cljs.core.nth.call(null,vec__11849,1,null);var map__11850 = p__11848;var map__11850__$1 = ((cljs.core.seq_QMARK_.call(null,map__11850))?cljs.core.apply.call(null,cljs.core.hash_map,map__11850):map__11850);var report = map__11850__$1;var db_after = cljs.core.get.call(null,map__11850__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__11851 = gin.local.table.get_pile_card.call(null);var map__11851__$1 = ((cljs.core.seq_QMARK_.call(null,map__11851))?cljs.core.apply.call(null,cljs.core.hash_map,map__11851):map__11851);var card = map__11851__$1;var rank = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_pile_pick_revealed,game_id,suit,rank], null)], null));
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__11852,p__11853,conn){var vec__11854 = p__11852;var game_id = cljs.core.nth.call(null,vec__11854,0,null);var card_id = cljs.core.nth.call(null,vec__11854,1,null);var map__11855 = p__11853;var map__11855__$1 = ((cljs.core.seq_QMARK_.call(null,map__11855))?cljs.core.apply.call(null,cljs.core.hash_map,map__11855):map__11855);var report = map__11855__$1;var db_after = cljs.core.get.call(null,map__11855__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.local.table.get_discard.call(null);
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__11856,p__11857,conn){var vec__11858 = p__11856;var game_id = cljs.core.nth.call(null,vec__11858,0,null);var card_id = cljs.core.nth.call(null,vec__11858,1,null);var suit = cljs.core.nth.call(null,vec__11858,2,null);var rank = cljs.core.nth.call(null,vec__11858,3,null);var map__11859 = p__11857;var map__11859__$1 = ((cljs.core.seq_QMARK_.call(null,map__11859))?cljs.core.apply.call(null,cljs.core.hash_map,map__11859):map__11859);var report = map__11859__$1;var db_after = cljs.core.get.call(null,map__11859__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.local.table.set_our_discard.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),suit,new cljs.core.Keyword(null,"rank","rank",1017397150),rank], null));
var map__11860 = gin.local.table.table_state.call(null);var map__11860__$1 = ((cljs.core.seq_QMARK_.call(null,map__11860))?cljs.core.apply.call(null,cljs.core.hash_map,map__11860):map__11860);var opp_cards = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"result","result",4374444943));if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tie","tie",1014019074),null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),null], null), null),result))
{return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
} else
{var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__11861,p__11862,conn){var vec__11863 = p__11861;var game_id = cljs.core.nth.call(null,vec__11863,0,null);var turn = cljs.core.nth.call(null,vec__11863,1,null);var map__11864 = p__11862;var map__11864__$1 = ((cljs.core.seq_QMARK_.call(null,map__11864))?cljs.core.apply.call(null,cljs.core.hash_map,map__11864):map__11864);var report = map__11864__$1;var db_after = cljs.core.get.call(null,map__11864__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));if(cljs.core.not_EQ_.call(null,turn,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{var from = gin.local.table.get_opponent_move.call(null);var move = ((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"pile","pile",1017345188)))?gin.transact.their_pile_picked:gin.transact.their_discard_picked);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),move,game_id], null)], null));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"their-pile-pick-revealed","their-pile-pick-revealed",3002247874),(function (event,p__11865,p__11866,conn){var vec__11867 = p__11865;var game_id = cljs.core.nth.call(null,vec__11867,0,null);var pile_reshuffle = cljs.core.nth.call(null,vec__11867,1,null);var map__11868 = p__11866;var map__11868__$1 = ((cljs.core.seq_QMARK_.call(null,map__11868))?cljs.core.apply.call(null,cljs.core.hash_map,map__11868):map__11868);var report = map__11868__$1;var db_after = cljs.core.get.call(null,map__11868__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__11869 = new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gin.local.table.table));var map__11870 = cljs.core.nth.call(null,vec__11869,0,null);var map__11870__$1 = ((cljs.core.seq_QMARK_.call(null,map__11870))?cljs.core.apply.call(null,cljs.core.hash_map,map__11870):map__11870);var rank = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));var from = cljs.core.nth.call(null,vec__11869,1,null);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_chosen,game_id,suit,rank], null)], null));
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__11871,p__11872,conn){var vec__11873 = p__11871;var game_id = cljs.core.nth.call(null,vec__11873,0,null);var card_id = cljs.core.nth.call(null,vec__11873,1,null);var suit = cljs.core.nth.call(null,vec__11873,2,null);var rank = cljs.core.nth.call(null,vec__11873,3,null);var map__11874 = p__11872;var map__11874__$1 = ((cljs.core.seq_QMARK_.call(null,map__11874))?cljs.core.apply.call(null,cljs.core.hash_map,map__11874):map__11874);var report = map__11874__$1;var db_after = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__11875 = gin.local.table.table_state.call(null);var map__11875__$1 = ((cljs.core.seq_QMARK_.call(null,map__11875))?cljs.core.apply.call(null,cljs.core.hash_map,map__11875):map__11875);var opp_cards = cljs.core.get.call(null,map__11875__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__11875__$1,new cljs.core.Keyword(null,"result","result",4374444943));if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tie","tie",1014019074),null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),null], null), null),result))
{return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
} else
{var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.local.services.start_services = (function start_services(conn){datascript.listen_BANG_.call(null,conn,(function (p__11879){var map__11880 = p__11879;var map__11880__$1 = ((cljs.core.seq_QMARK_.call(null,map__11880))?cljs.core.apply.call(null,cljs.core.hash_map,map__11880):map__11880);var report = map__11880__$1;var db_after = cljs.core.get.call(null,map__11880__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__11881 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__11881,0,null);var args = cljs.core.nth.call(null,vec__11881,1,null);return gin.local.services.handle.call(null,event,args,report,conn);
}));
var game_id = [cljs.core.str("game-local")].join('');datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,"pone","ptwo",new cljs.core.Keyword(null,"player1","player1",520336610)], null)], null));
var table = gin.local.table.get_init_shuffle.call(null);var to_start = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(table),new cljs.core.Keyword(null,"us","us",1013907984)))?new cljs.core.Keyword(null,"player1","player1",520336610):new cljs.core.Keyword(null,"player2","player2",520336611));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,game_id,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(table)),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(table),to_start], null)], null));
});
