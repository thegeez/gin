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
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (event,p__25241,report,conn){var vec__25242 = p__25241;var game_id = cljs.core.nth.call(null,vec__25242,0,null);var player = cljs.core.nth.call(null,vec__25242,1,null);var game = gin.datascript_helpers.entity_lookup.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var starting = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",2330710962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gin.local.table.table)),new cljs.core.Keyword(null,"us","us",1013907984)))?new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game):cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)));var map__25243 = gin.local.table.table_state.call(null);var map__25243__$1 = ((cljs.core.seq_QMARK_.call(null,map__25243))?cljs.core.apply.call(null,cljs.core.hash_map,map__25243):map__25243);var opp_cards = cljs.core.get.call(null,map__25243__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__25243__$1,new cljs.core.Keyword(null,"result","result",4374444943));return datascript.transact_BANG_.call(null,conn,(function (){var temp__4090__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tie","tie",1014019074),new cljs.core.Keyword(null,"pat-tie","pat-tie",4515680216),new cljs.core.Keyword(null,"our-win","our-win",4198915405),new cljs.core.Keyword(null,"pat-our-win","pat-our-win",532651555),new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),new cljs.core.Keyword(null,"pat-opp-win","pat-opp-win",4682626054)], null),result);if(cljs.core.truth_(temp__4090__auto__))
{var result__$1 = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result__$1,opp_cards], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,starting], null)], null);
}
})());
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,p__25244,p__25245,conn){var vec__25246 = p__25244;var game_id = cljs.core.nth.call(null,vec__25246,0,null);var card_id = cljs.core.nth.call(null,vec__25246,1,null);var map__25247 = p__25245;var map__25247__$1 = ((cljs.core.seq_QMARK_.call(null,map__25247))?cljs.core.apply.call(null,cljs.core.hash_map,map__25247):map__25247);var report = map__25247__$1;var db_after = cljs.core.get.call(null,map__25247__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__25248 = gin.local.table.get_pile_card.call(null);var map__25248__$1 = ((cljs.core.seq_QMARK_.call(null,map__25248))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);var card = map__25248__$1;var rank = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_pile_pick_revealed,game_id,suit,rank], null)], null));
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,p__25249,p__25250,conn){var vec__25251 = p__25249;var game_id = cljs.core.nth.call(null,vec__25251,0,null);var card_id = cljs.core.nth.call(null,vec__25251,1,null);var map__25252 = p__25250;var map__25252__$1 = ((cljs.core.seq_QMARK_.call(null,map__25252))?cljs.core.apply.call(null,cljs.core.hash_map,map__25252):map__25252);var report = map__25252__$1;var db_after = cljs.core.get.call(null,map__25252__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));return gin.local.table.get_discard.call(null);
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,p__25253,p__25254,conn){var vec__25255 = p__25253;var game_id = cljs.core.nth.call(null,vec__25255,0,null);var card_id = cljs.core.nth.call(null,vec__25255,1,null);var suit = cljs.core.nth.call(null,vec__25255,2,null);var rank = cljs.core.nth.call(null,vec__25255,3,null);var map__25256 = p__25254;var map__25256__$1 = ((cljs.core.seq_QMARK_.call(null,map__25256))?cljs.core.apply.call(null,cljs.core.hash_map,map__25256):map__25256);var report = map__25256__$1;var db_after = cljs.core.get.call(null,map__25256__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));gin.local.table.set_our_discard.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),suit,new cljs.core.Keyword(null,"rank","rank",1017397150),rank], null));
var map__25257 = gin.local.table.table_state.call(null);var map__25257__$1 = ((cljs.core.seq_QMARK_.call(null,map__25257))?cljs.core.apply.call(null,cljs.core.hash_map,map__25257):map__25257);var opp_cards = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"result","result",4374444943));if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tie","tie",1014019074),null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),null], null), null),result))
{return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
} else
{var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,p__25258,p__25259,conn){var vec__25260 = p__25258;var game_id = cljs.core.nth.call(null,vec__25260,0,null);var turn = cljs.core.nth.call(null,vec__25260,1,null);var map__25261 = p__25259;var map__25261__$1 = ((cljs.core.seq_QMARK_.call(null,map__25261))?cljs.core.apply.call(null,cljs.core.hash_map,map__25261):map__25261);var report = map__25261__$1;var db_after = cljs.core.get.call(null,map__25261__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var game = gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));if(cljs.core.not_EQ_.call(null,turn,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{var from = gin.local.table.get_opponent_move.call(null);var move = ((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"pile","pile",1017345188)))?gin.transact.their_pile_picked:gin.transact.their_discard_picked);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),move,game_id], null)], null));
} else
{return null;
}
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"their-pile-pick-revealed","their-pile-pick-revealed",3002247874),(function (event,p__25262,p__25263,conn){var vec__25264 = p__25262;var game_id = cljs.core.nth.call(null,vec__25264,0,null);var pile_reshuffle = cljs.core.nth.call(null,vec__25264,1,null);var map__25265 = p__25263;var map__25265__$1 = ((cljs.core.seq_QMARK_.call(null,map__25265))?cljs.core.apply.call(null,cljs.core.hash_map,map__25265):map__25265);var report = map__25265__$1;var db_after = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__25266 = new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gin.local.table.table));var map__25267 = cljs.core.nth.call(null,vec__25266,0,null);var map__25267__$1 = ((cljs.core.seq_QMARK_.call(null,map__25267))?cljs.core.apply.call(null,cljs.core.hash_map,map__25267):map__25267);var rank = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));var from = cljs.core.nth.call(null,vec__25266,1,null);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_chosen,game_id,suit,rank], null)], null));
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,p__25268,p__25269,conn){var vec__25270 = p__25268;var game_id = cljs.core.nth.call(null,vec__25270,0,null);var card_id = cljs.core.nth.call(null,vec__25270,1,null);var suit = cljs.core.nth.call(null,vec__25270,2,null);var rank = cljs.core.nth.call(null,vec__25270,3,null);var map__25271 = p__25269;var map__25271__$1 = ((cljs.core.seq_QMARK_.call(null,map__25271))?cljs.core.apply.call(null,cljs.core.hash_map,map__25271):map__25271);var report = map__25271__$1;var db_after = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var map__25272 = gin.local.table.table_state.call(null);var map__25272__$1 = ((cljs.core.seq_QMARK_.call(null,map__25272))?cljs.core.apply.call(null,cljs.core.hash_map,map__25272):map__25272);var opp_cards = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"result","result",4374444943));if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tie","tie",1014019074),null,new cljs.core.Keyword(null,"our-win","our-win",4198915405),null,new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),null], null), null),result))
{return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
} else
{var turn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",520336610),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player2","player2",520336611),new cljs.core.Keyword(null,"player1","player1",520336610)], null),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db_after,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null))));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}
}));
cljs.core._add_method.call(null,gin.local.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.local.services.start_services = (function start_services(conn){datascript.listen_BANG_.call(null,conn,(function (p__25276){var map__25277 = p__25276;var map__25277__$1 = ((cljs.core.seq_QMARK_.call(null,map__25277))?cljs.core.apply.call(null,cljs.core.hash_map,map__25277):map__25277);var report = map__25277__$1;var db_after = cljs.core.get.call(null,map__25277__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__25278 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__25278,0,null);var args = cljs.core.nth.call(null,vec__25278,1,null);return gin.local.services.handle.call(null,event,args,report,conn);
}));
var game_id = [cljs.core.str("game-local")].join('');datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,"pone","ptwo",new cljs.core.Keyword(null,"player1","player1",520336610)], null)], null));
var table = gin.local.table.get_init_shuffle.call(null);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,game_id,cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(table)),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(table)], null)], null));
});
