// Compiled by ClojureScript 0.0-2173
goog.provide('gin.remote.services');
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
gin.remote.services.game_url = (function game_url(){return [cljs.core.str(window.location.pathname)].join('');
});
gin.remote.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
gin.remote.services.error_handler = (function error_handler(conn){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.error,"fail"], null)], null));
});
gin.remote.services.POST_ACTION = (function POST_ACTION(url,conn,options){return ajax.core.POST.call(null,url,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){return gin.remote.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.remote.services.csrf_token.call(null)], null)], null),options));
});
gin.remote.services.handle_client = (function (){var method_table__17572__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17573__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17574__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17575__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17576__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-client",(function (event,args,db,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17576__auto__,method_table__17572__auto__,prefer_table__17573__auto__,method_cache__17574__auto__,cached_hierarchy__17575__auto__));
})();
cljs.core._add_method.call(null,gin.remote.services.handle_client,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),(function (_,p__19906,db,conn){var vec__19907 = p__19906;var game_id = cljs.core.nth.call(null,vec__19907,0,null);var player = cljs.core.nth.call(null,vec__19907,1,null);return gin.remote.services.POST_ACTION.call(null,[cljs.core.str(gin.remote.services.game_url.call(null)),cljs.core.str("/player-ready")].join(''),conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"player","player",4323118675),player], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_client,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (_,p__19908,db,conn){var vec__19909 = p__19908;var game_id = cljs.core.nth.call(null,vec__19909,0,null);var card_id = cljs.core.nth.call(null,vec__19909,1,null);return gin.remote.services.POST_ACTION.call(null,[cljs.core.str(gin.remote.services.game_url.call(null)),cljs.core.str("/discard-picked")].join(''),conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_client,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (_,p__19910,db,conn){var vec__19911 = p__19910;var game_id = cljs.core.nth.call(null,vec__19911,0,null);var card_id = cljs.core.nth.call(null,vec__19911,1,null);var suit = cljs.core.nth.call(null,vec__19911,2,null);var rank = cljs.core.nth.call(null,vec__19911,3,null);return gin.remote.services.POST_ACTION.call(null,[cljs.core.str(gin.remote.services.game_url.call(null)),cljs.core.str("/discard-chosen")].join(''),conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"suit","suit",1017446015),suit,new cljs.core.Keyword(null,"rank","rank",1017397150),rank], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_client,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (_,p__19912,db,conn){var vec__19913 = p__19912;var game_id = cljs.core.nth.call(null,vec__19913,0,null);var card_id = cljs.core.nth.call(null,vec__19913,1,null);return gin.remote.services.POST_ACTION.call(null,[cljs.core.str(gin.remote.services.game_url.call(null)),cljs.core.str("/pile-picked")].join(''),conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_client,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
gin.remote.services.handle_server = (function (){var method_table__17572__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__17573__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__17574__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__17575__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__17576__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-server",(function (event,conn){return new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(event);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__17576__auto__,method_table__17572__auto__,prefer_table__17573__auto__,method_cache__17574__auto__,cached_hierarchy__17575__auto__));
})();
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"game-created","game-created",3250098047),(function (event,conn){var map__19914 = event;var map__19914__$1 = ((cljs.core.seq_QMARK_.call(null,map__19914))?cljs.core.apply.call(null,cljs.core.hash_map,map__19914):map__19914);var us = cljs.core.get.call(null,map__19914__$1,new cljs.core.Keyword(null,"us","us",1013907984));var player2 = cljs.core.get.call(null,map__19914__$1,new cljs.core.Keyword(null,"player2","player2",520336611));var player1 = cljs.core.get.call(null,map__19914__$1,new cljs.core.Keyword(null,"player1","player1",520336610));var game_id = cljs.core.get.call(null,map__19914__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id,player1,player2,us], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"deal","deal",1016983518),(function (event,conn){var map__19915 = event;var map__19915__$1 = ((cljs.core.seq_QMARK_.call(null,map__19915))?cljs.core.apply.call(null,cljs.core.hash_map,map__19915):map__19915);var to_start = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var our_cards = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var discard = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"discard","discard",2685271056));var game_id = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.deal,game_id,discard,our_cards,to_start], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"join-game","join-game",4768214567),(function (event,conn){var map__19916_19918 = event;var map__19916_19919__$1 = ((cljs.core.seq_QMARK_.call(null,map__19916_19918))?cljs.core.apply.call(null,cljs.core.hash_map,map__19916_19918):map__19916_19918);var us_19920 = cljs.core.get.call(null,map__19916_19919__$1,new cljs.core.Keyword(null,"us","us",1013907984));var player2_19921 = cljs.core.get.call(null,map__19916_19919__$1,new cljs.core.Keyword(null,"player2","player2",520336611));var player1_19922 = cljs.core.get.call(null,map__19916_19919__$1,new cljs.core.Keyword(null,"player1","player1",520336610));var game_id_19923 = cljs.core.get.call(null,map__19916_19919__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_created,game_id_19923,player1_19922,player2_19921,us_19920], null)], null));
var map__19917 = event;var map__19917__$1 = ((cljs.core.seq_QMARK_.call(null,map__19917))?cljs.core.apply.call(null,cljs.core.hash_map,map__19917):map__19917);var result = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"result","result",4374444943));var turn = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var to_start = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"to-start","to-start",2443170306));var their_cards = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874));var our_cards = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444));var discards = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"discards","discards",1286668039));var game_id = cljs.core.get.call(null,map__19917__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.join_game,game_id,discards,our_cards,their_cards,to_start,turn,result], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),(function (event,conn){var map__19924 = event;var map__19924__$1 = ((cljs.core.seq_QMARK_.call(null,map__19924))?cljs.core.apply.call(null,cljs.core.hash_map,map__19924):map__19924);var turn = cljs.core.get.call(null,map__19924__$1,new cljs.core.Keyword(null,"turn","turn",1017476079));var game_id = cljs.core.get.call(null,map__19924__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.turn_assigned,game_id,turn], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),(function (event,conn){return null;
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),(function (event,conn){return null;
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),(function (event,conn){var map__19925 = event;var map__19925__$1 = ((cljs.core.seq_QMARK_.call(null,map__19925))?cljs.core.apply.call(null,cljs.core.hash_map,map__19925):map__19925);var rank = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));var game_id = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.our_pile_pick_revealed,game_id,suit,rank], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),(function (event,conn){return null;
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),(function (event,conn){var map__19926 = event;var map__19926__$1 = ((cljs.core.seq_QMARK_.call(null,map__19926))?cljs.core.apply.call(null,cljs.core.hash_map,map__19926):map__19926);var game_id = cljs.core.get.call(null,map__19926__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_picked,game_id], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),(function (event,conn){var map__19927 = event;var map__19927__$1 = ((cljs.core.seq_QMARK_.call(null,map__19927))?cljs.core.apply.call(null,cljs.core.hash_map,map__19927):map__19927);var game_id = cljs.core.get.call(null,map__19927__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_picked,game_id], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"their-pile-pick-revealed","their-pile-pick-revealed",3002247874),(function (event,conn){var map__19928 = event;var map__19928__$1 = ((cljs.core.seq_QMARK_.call(null,map__19928))?cljs.core.apply.call(null,cljs.core.hash_map,map__19928):map__19928);var game_id = cljs.core.get.call(null,map__19928__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_pile_pick_revealed,game_id], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),(function (event,conn){var map__19929 = event;var map__19929__$1 = ((cljs.core.seq_QMARK_.call(null,map__19929))?cljs.core.apply.call(null,cljs.core.hash_map,map__19929):map__19929);var game_id = cljs.core.get.call(null,map__19929__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.their_discard_chosen,game_id,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(event)], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),(function (event,conn){var map__19930 = event;var map__19930__$1 = ((cljs.core.seq_QMARK_.call(null,map__19930))?cljs.core.apply.call(null,cljs.core.hash_map,map__19930):map__19930);var opp_cards = cljs.core.get.call(null,map__19930__$1,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999));var result = cljs.core.get.call(null,map__19930__$1,new cljs.core.Keyword(null,"result","result",4374444943));var game_id = cljs.core.get.call(null,map__19930__$1,new cljs.core.Keyword(null,"game-id","game-id",818249800));return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.game_finished,game_id,result,opp_cards], null)], null));
}));
cljs.core._add_method.call(null,gin.remote.services.handle_server,new cljs.core.Keyword(null,"default","default",2558708147),(function (event,conn){return null;
}));
gin.remote.services.start_services = (function start_services(conn){datascript.listen_BANG_.call(null,conn,(function (p__19934){var map__19935 = p__19934;var map__19935__$1 = ((cljs.core.seq_QMARK_.call(null,map__19935))?cljs.core.apply.call(null,cljs.core.hash_map,map__19935):map__19935);var report = map__19935__$1;var db_after = cljs.core.get.call(null,map__19935__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__19936 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__19936,0,null);var args = cljs.core.nth.call(null,vec__19936,1,null);return gin.remote.services.handle_client.call(null,event,args,report,conn);
}));
var source = (new EventSource([cljs.core.str(gin.remote.services.game_url.call(null)),cljs.core.str("/events")].join('')));var open = cljs.core.atom.call(null,false);source.onopen = cljs.core.reset_BANG_.call(null,open,true);
source.onerror = (function (e){if(cljs.core.truth_(cljs.core.deref.call(null,open)))
{} else
{gin.remote.services.error_handler.call(null,conn);
}
return cljs.core.reset_BANG_.call(null,open,false);
});
return source.onmessage = (function (e){var data = e.data;var event = cljs.reader.read_string.call(null,data);return gin.remote.services.handle_server.call(null,event,conn);
});
});
