// Compiled by ClojureScript 0.0-2173
goog.provide('gin.transact');
goog.require('cljs.core');
goog.require('gin.datascript_helpers');
goog.require('gin.datascript_helpers');
goog.require('datascript');
goog.require('datascript');
/**
* @param {...*} var_args
*/
gin.transact.log_event = (function() { 
var log_event__delegate = function (db,event,args){var evente = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),-100,new cljs.core.Keyword(null,"event","event",1110795788),event,new cljs.core.Keyword(null,"args","args",1016906831),args], null);var temp__4090__auto__ = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"last-event","last-event",1851999253)], null)], null)], null),db));if(cljs.core.truth_(temp__4090__auto__))
{var prev_event_eid = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,evente,new cljs.core.Keyword(null,"prev-event","prev-event",3549456882),prev_event_eid),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",3416849171),prev_event_eid,new cljs.core.Keyword(null,"last-event","last-event",1851999253)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [evente], null);
}
};
var log_event = function (db,event,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return log_event__delegate.call(this,db,event,args);};
log_event.cljs$lang$maxFixedArity = 2;
log_event.cljs$lang$applyTo = (function (arglist__30361){
var db = cljs.core.first(arglist__30361);
arglist__30361 = cljs.core.next(arglist__30361);
var event = cljs.core.first(arglist__30361);
var args = cljs.core.rest(arglist__30361);
return log_event__delegate(db,event,args);
});
log_event.cljs$core$IFn$_invoke$arity$variadic = log_event__delegate;
return log_event;
})()
;
gin.transact.maybe_pile_reshuffle = (function maybe_pile_reshuffle(db,game_id){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var pile = new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game);if(cljs.core.empty_QMARK_.call(null,pile))
{var new_pile = new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"pile","pile",1017345188),new_pile,new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.PersistentVector.EMPTY], null)], null),(function (){var iter__17358__auto__ = (function iter__30366(s__30367){return (new cljs.core.LazySeq(null,(function (){var s__30367__$1 = s__30367;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30367__$1);if(temp__4092__auto__)
{var s__30367__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30367__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30367__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30369 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30368 = 0;while(true){
if((i__30368 < size__17357__auto__))
{var card_id = cljs.core._nth.call(null,c__17356__auto__,i__30368);cljs.core.chunk_append.call(null,b__30369,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null))),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__30370 = (i__30368 + 1);
i__30368 = G__30370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30369),iter__30366.call(null,cljs.core.chunk_rest.call(null,s__30367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30369),null);
}
} else
{var card_id = cljs.core.first.call(null,s__30367__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null))),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__30366.call(null,cljs.core.rest.call(null,s__30367__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,new_pile);
})());
} else
{return null;
}
});
gin.transact.game_created = (function game_created(db,game_id,player1_id,player2_id,us){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"game-created","game-created",3250098047),game_id,player1_id,player2_id,us], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"player1","player1",520336610),player1_id,new cljs.core.Keyword(null,"player2","player2",520336611),player2_id,new cljs.core.Keyword(null,"us","us",1013907984),us,new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.map.call(null,cljs.core.second,cljs.core.sort_by.call(null,cljs.core.first,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","id","dom/id",1020278687),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null)], null)], null),db)))], null)], null);
});
gin.transact.deal = (function deal(db,game_id,discard_card,our_cards,to_start){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"deal","deal",1016983518),game_id,discard_card,our_cards,to_start], null)], null),(function (){var map__30390 = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__30390__$1 = ((cljs.core.seq_QMARK_.call(null,map__30390))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);var game = map__30390__$1;var game_e = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword("db","id","db/id",1014111942));var cards = (function (){var iter__17358__auto__ = ((function (map__30390,map__30390__$1,game,game_e){
return (function iter__30394(s__30395){return (new cljs.core.LazySeq(null,((function (map__30390,map__30390__$1,game,game_e){
return (function (){var s__30395__$1 = s__30395;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30395__$1);if(temp__4092__auto__)
{var s__30395__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30395__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30395__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30397 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30396 = 0;while(true){
if((i__30396 < size__17357__auto__))
{var cid = cljs.core._nth.call(null,c__17356__auto__,i__30396);cljs.core.chunk_append.call(null,b__30397,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)));
{
var G__30409 = (i__30396 + 1);
i__30396 = G__30409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30397),iter__30394.call(null,cljs.core.chunk_rest.call(null,s__30395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30397),null);
}
} else
{var cid = cljs.core.first.call(null,s__30395__$2);return cljs.core.cons.call(null,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)),iter__30394.call(null,cljs.core.rest.call(null,s__30395__$2)));
}
} else
{return null;
}
break;
}
});})(map__30390,map__30390__$1,game,game_e))
,null,null));
});})(map__30390,map__30390__$1,game,game_e))
;return iter__17358__auto__.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));
})();var vec__30391 = cljs.core.split_at.call(null,31,cards);var pile = cljs.core.nth.call(null,vec__30391,0,null);var vec__30392 = cljs.core.nth.call(null,vec__30391,1,null);var discard = cljs.core.nth.call(null,vec__30392,0,null);var other = cljs.core.nthnext.call(null,vec__30392,1);var vec__30393 = (function (){var vec__30398 = cljs.core.split_at.call(null,10,other);var f = cljs.core.nth.call(null,vec__30398,0,null);var s = cljs.core.nth.call(null,vec__30398,1,null);if(cljs.core._EQ_.call(null,to_start,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,s], null);
}
})();var ours = cljs.core.nth.call(null,vec__30393,0,null);var theirs = cljs.core.nth.call(null,vec__30393,1,null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),game_e,new cljs.core.Keyword(null,"starting","starting",2330710962),to_start,new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),pile),new cljs.core.Keyword(null,"discards","discards",1286668039),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard)], null),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),theirs),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),ours)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(discard),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(discard_card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(discard_card)], null)], null),(function (){var iter__17358__auto__ = (function iter__30399(s__30400){return (new cljs.core.LazySeq(null,(function (){var s__30400__$1 = s__30400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30400__$1);if(temp__4092__auto__)
{var s__30400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30400__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30400__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30402 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30401 = 0;while(true){
if((i__30401 < size__17357__auto__))
{var vec__30405 = cljs.core._nth.call(null,c__17356__auto__,i__30401);var e = cljs.core.nth.call(null,vec__30405,0,null);var did = cljs.core.nth.call(null,vec__30405,1,null);var suit = cljs.core.nth.call(null,vec__30405,2,null);var rank = cljs.core.nth.call(null,vec__30405,3,null);cljs.core.chunk_append.call(null,b__30402,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__30410 = (i__30401 + 1);
i__30401 = G__30410;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30402),iter__30399.call(null,cljs.core.chunk_rest.call(null,s__30400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30402),null);
}
} else
{var vec__30406 = cljs.core.first.call(null,s__30400__$2);var e = cljs.core.nth.call(null,vec__30406,0,null);var did = cljs.core.nth.call(null,vec__30406,1,null);var suit = cljs.core.nth.call(null,vec__30406,2,null);var rank = cljs.core.nth.call(null,vec__30406,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__30399.call(null,cljs.core.rest.call(null,s__30400__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,cljs.core.map.call(null,(function (e,p__30407){var map__30408 = p__30407;var map__30408__$1 = ((cljs.core.seq_QMARK_.call(null,map__30408))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408):map__30408);var rank = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),ours,our_cards));
})());
})());
});
gin.transact.join_game = (function join_game(db,game_id,discard_cards,our_cards,their_cards_count,to_start,turn){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"join-game","join-game",4768214567),game_id,discard_cards,our_cards,their_cards_count,to_start,turn], null)], null),(function (){var map__30439 = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__30439__$1 = ((cljs.core.seq_QMARK_.call(null,map__30439))?cljs.core.apply.call(null,cljs.core.hash_map,map__30439):map__30439);var game = map__30439__$1;var game_e = cljs.core.get.call(null,map__30439__$1,new cljs.core.Keyword("db","id","db/id",1014111942));var cards = (function (){var iter__17358__auto__ = ((function (map__30439,map__30439__$1,game,game_e){
return (function iter__30443(s__30444){return (new cljs.core.LazySeq(null,((function (map__30439,map__30439__$1,game,game_e){
return (function (){var s__30444__$1 = s__30444;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30444__$1);if(temp__4092__auto__)
{var s__30444__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30444__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30444__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30446 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30445 = 0;while(true){
if((i__30445 < size__17357__auto__))
{var cid = cljs.core._nth.call(null,c__17356__auto__,i__30445);cljs.core.chunk_append.call(null,b__30446,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)));
{
var G__30467 = (i__30445 + 1);
i__30445 = G__30467;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30446),iter__30443.call(null,cljs.core.chunk_rest.call(null,s__30444__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30446),null);
}
} else
{var cid = cljs.core.first.call(null,s__30444__$2);return cljs.core.cons.call(null,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)),iter__30443.call(null,cljs.core.rest.call(null,s__30444__$2)));
}
} else
{return null;
}
break;
}
});})(map__30439,map__30439__$1,game,game_e))
,null,null));
});})(map__30439,map__30439__$1,game,game_e))
;return iter__17358__auto__.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));
})();var vec__30440 = cljs.core.split_at.call(null,cljs.core.count.call(null,discard_cards),cards);var discards = cljs.core.nth.call(null,vec__30440,0,null);var other = cljs.core.nth.call(null,vec__30440,1,null);var vec__30441 = cljs.core.split_at.call(null,cljs.core.count.call(null,our_cards),other);var ours = cljs.core.nth.call(null,vec__30441,0,null);var other__$1 = cljs.core.nth.call(null,vec__30441,1,null);var vec__30442 = cljs.core.split_at.call(null,their_cards_count,other__$1);var theirs = cljs.core.nth.call(null,vec__30442,0,null);var pile = cljs.core.nth.call(null,vec__30442,1,null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",1014111942),game_e,new cljs.core.Keyword(null,"starting","starting",2330710962),to_start,new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),pile),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),discards),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),theirs),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),ours),new cljs.core.Keyword(null,"turn","turn",1017476079),turn], null)], null),(function (){var iter__17358__auto__ = (function iter__30447(s__30448){return (new cljs.core.LazySeq(null,(function (){var s__30448__$1 = s__30448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30448__$1);if(temp__4092__auto__)
{var s__30448__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30448__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30448__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30450 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30449 = 0;while(true){
if((i__30449 < size__17357__auto__))
{var vec__30453 = cljs.core._nth.call(null,c__17356__auto__,i__30449);var e = cljs.core.nth.call(null,vec__30453,0,null);var did = cljs.core.nth.call(null,vec__30453,1,null);var suit = cljs.core.nth.call(null,vec__30453,2,null);var rank = cljs.core.nth.call(null,vec__30453,3,null);cljs.core.chunk_append.call(null,b__30450,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__30468 = (i__30449 + 1);
i__30449 = G__30468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30450),iter__30447.call(null,cljs.core.chunk_rest.call(null,s__30448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30450),null);
}
} else
{var vec__30454 = cljs.core.first.call(null,s__30448__$2);var e = cljs.core.nth.call(null,vec__30454,0,null);var did = cljs.core.nth.call(null,vec__30454,1,null);var suit = cljs.core.nth.call(null,vec__30454,2,null);var rank = cljs.core.nth.call(null,vec__30454,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__30447.call(null,cljs.core.rest.call(null,s__30448__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,cljs.core.map.call(null,(function (e,p__30455){var map__30456 = p__30455;var map__30456__$1 = ((cljs.core.seq_QMARK_.call(null,map__30456))?cljs.core.apply.call(null,cljs.core.hash_map,map__30456):map__30456);var rank = cljs.core.get.call(null,map__30456__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__30456__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),discards,discard_cards));
})(),(function (){var iter__17358__auto__ = (function iter__30457(s__30458){return (new cljs.core.LazySeq(null,(function (){var s__30458__$1 = s__30458;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30458__$1);if(temp__4092__auto__)
{var s__30458__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30458__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30458__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30460 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30459 = 0;while(true){
if((i__30459 < size__17357__auto__))
{var vec__30463 = cljs.core._nth.call(null,c__17356__auto__,i__30459);var e = cljs.core.nth.call(null,vec__30463,0,null);var did = cljs.core.nth.call(null,vec__30463,1,null);var suit = cljs.core.nth.call(null,vec__30463,2,null);var rank = cljs.core.nth.call(null,vec__30463,3,null);cljs.core.chunk_append.call(null,b__30460,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__30469 = (i__30459 + 1);
i__30459 = G__30469;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30460),iter__30457.call(null,cljs.core.chunk_rest.call(null,s__30458__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30460),null);
}
} else
{var vec__30464 = cljs.core.first.call(null,s__30458__$2);var e = cljs.core.nth.call(null,vec__30464,0,null);var did = cljs.core.nth.call(null,vec__30464,1,null);var suit = cljs.core.nth.call(null,vec__30464,2,null);var rank = cljs.core.nth.call(null,vec__30464,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__30457.call(null,cljs.core.rest.call(null,s__30458__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,cljs.core.map.call(null,(function (e,p__30465){var map__30466 = p__30465;var map__30466__$1 = ((cljs.core.seq_QMARK_.call(null,map__30466))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466):map__30466);var rank = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),ours,our_cards));
})());
})());
});
gin.transact.player_ready = (function player_ready(db,game_id,player){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"player-ready","player-ready",3966504745),game_id,player], null),(function (){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ready","ready",1122290965),player], null);
})()], null);
});
gin.transact.turn_assigned = (function turn_assigned(db,game_id,turn){var game_eid = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null)], null)], null),db,game_id));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),game_id,turn], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),game_eid,new cljs.core.Keyword(null,"turn","turn",1017476079),turn,new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"assigned","assigned",644022592)], null)], null);
});
gin.transact.our_pile_picked = (function our_pile_picked(db,card_id){var game_id = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?card-id","?card-id",1336223122,null),new cljs.core.Symbol(null,"?last","?last",-1579035378,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"pile","pile",1017345188),new cljs.core.Symbol(null,"?ps","?ps",-1640467397,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?last","?last",-1579035378,null),new cljs.core.Symbol(null,"?ps","?ps",-1640467397,null)),new cljs.core.Symbol(null,"?p","?p",-1640529462,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?p","?p",-1640529462,null),new cljs.core.Symbol(null,"?card-id","?card-id",1336223122,null))], null)], null)], null),db,card_id,cljs.core.last));var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"our-pile-picked","our-pile-picked",3992106988),game_id,card_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.pop.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.conj.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game),card_id)], null)], null);
});
gin.transact.our_pile_pick_revealed = (function our_pile_pick_revealed(db,game_id,suit,rank){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_taken = cljs.core.some.call(null,((function (game){
return (function (did){var card_e = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),did], null));if((cljs.core._EQ_.call(null,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(card_e),new cljs.core.Keyword(null,"hidden","hidden",4091384092))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(card_e),new cljs.core.Keyword(null,"hidden","hidden",4091384092))))
{return card_e;
} else
{return null;
}
});})(game))
,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game));var card_id = new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(card_taken);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"our-pile-pick-revealed","our-pile-pick-revealed",914126736),game_id,card_id,suit,rank], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(card_taken),new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.maybe_pile_reshuffle,game_id], null)], null);
});
gin.transact.our_discard_picked = (function our_discard_picked(db,card_id){var game = datascript.entity.call(null,db,cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?card-id","?card-id",1336223122,null),new cljs.core.Symbol(null,"?last","?last",-1579035378,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"discards","discards",1286668039),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?last","?last",-1579035378,null),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)),new cljs.core.Symbol(null,"?d","?d",-1640529474,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?d","?d",-1640529474,null),new cljs.core.Symbol(null,"?card-id","?card-id",1336223122,null))], null)], null)], null),db,card_id,cljs.core.last)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"our-discard-picked","our-discard-picked",3880258722),new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),card_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.pop.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.conj.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game),card_id)], null)], null);
});
gin.transact.our_discard_chosen = (function our_discard_chosen(db,card_id){var card = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var game = datascript.entity.call(null,db,cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?card-id","?card-id",1336223122,null),new cljs.core.Symbol(null,"?each","?each",-1579244423,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?each","?each",-1579244423,null),new cljs.core.Symbol(null,"?ds","?ds",-1640467769,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?d","?d",-1640529474,null),new cljs.core.Symbol(null,"...","...",-1640485849,null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"?d","?d",-1640529474,null),new cljs.core.Symbol(null,"?card-id","?card-id",1336223122,null))], null)], null)], null),db,card_id,cljs.core.partial.call(null,cljs.core.map,cljs.core.identity))));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"our-discard-chosen","our-discard-chosen",3507521428),new cljs.core.Keyword(null,"game-id","game-id",818249800).cljs$core$IFn$_invoke$arity$1(game),card_id,new cljs.core.Keyword("card","suit","card/suit",1215370835).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","rank","card/rank",1215352178).cljs$core$IFn$_invoke$arity$1(card)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.conj.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game),card_id),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.filterv.call(null,(function (c){return cljs.core.not_EQ_.call(null,c,card_id);
}),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(game))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"done","done",1016993524)], null)], null);
});
gin.transact.their_pile_picked = (function their_pile_picked(db,game_id){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_id = cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var insert_idx = cljs.core.rand_nth.call(null,cljs.core.range.call(null,10));var vec__30471 = cljs.core.split_at.call(null,insert_idx,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var before = cljs.core.nth.call(null,vec__30471,0,null);var after = cljs.core.nth.call(null,vec__30471,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),game_id,card_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,before),card_id),after),new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.pop.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game))], null)], null);
});
gin.transact.their_pile_pick_revealed = (function their_pile_pick_revealed(db,game_id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-pile-pick-revealed","their-pile-pick-revealed",3002247874),game_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.maybe_pile_reshuffle,game_id], null)], null);
});
gin.transact.their_discard_picked = (function their_discard_picked(db,game_id){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_id = cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var card = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var insert_idx = cljs.core.rand_nth.call(null,cljs.core.range.call(null,10));var vec__30473 = cljs.core.split_at.call(null,insert_idx,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var before = cljs.core.nth.call(null,vec__30473,0,null);var after = cljs.core.nth.call(null,vec__30473,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),game_id,card_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.pop.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,before),card_id),after)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null)], null);
});
gin.transact.their_discard_chosen = (function their_discard_chosen(db,game_id,suit,rank){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_id = cljs.core.rand_nth.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core._GT_,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",-1640529458,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game","?game",-1579184534,null),new cljs.core.Symbol(null,"?each","?each",-1579244423,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?g","?g",-1640529471,null),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),new cljs.core.Symbol(null,"?tc","?tc",-1640467289,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?each","?each",-1579244423,null),new cljs.core.Symbol(null,"?tc","?tc",-1640467289,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",-1640529458,null),new cljs.core.Symbol(null,"...","...",-1640485849,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","id","dom/id",1020278687),new cljs.core.Symbol(null,"?t","?t",-1640529458,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Symbol(null,"_","_",-1640531432,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),cljs.core.partial.call(null,cljs.core.map,cljs.core.identity))))));var card = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),game_id,card_id,suit,rank], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.conj.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game),card_id),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.PersistentHashSet.fromArray([card_id], true)),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"done","done",1016993524)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null)], null);
});
gin.transact.game_finished = (function game_finished(db,game_id,result,opp_cards){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var their_cards = cljs.core.map.call(null,((function (game){
return (function (p1__30474_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__30474_SHARP_], null));
});})(game))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),game_id,result], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"result","result",4374444943),result], null)], null),(function (){var iter__17358__auto__ = (function iter__30483(s__30484){return (new cljs.core.LazySeq(null,(function (){var s__30484__$1 = s__30484;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30484__$1);if(temp__4092__auto__)
{var s__30484__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30484__$2))
{var c__17356__auto__ = cljs.core.chunk_first.call(null,s__30484__$2);var size__17357__auto__ = cljs.core.count.call(null,c__17356__auto__);var b__30486 = cljs.core.chunk_buffer.call(null,size__17357__auto__);if((function (){var i__30485 = 0;while(true){
if((i__30485 < size__17357__auto__))
{var vec__30489 = cljs.core._nth.call(null,c__17356__auto__,i__30485);var e = cljs.core.nth.call(null,vec__30489,0,null);var card = cljs.core.nth.call(null,vec__30489,1,null);cljs.core.chunk_append.call(null,b__30486,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(card)], null));
{
var G__30491 = (i__30485 + 1);
i__30485 = G__30491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30486),iter__30483.call(null,cljs.core.chunk_rest.call(null,s__30484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30486),null);
}
} else
{var vec__30490 = cljs.core.first.call(null,s__30484__$2);var e = cljs.core.nth.call(null,vec__30490,0,null);var card = cljs.core.nth.call(null,vec__30490,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(card)], null),iter__30483.call(null,cljs.core.rest.call(null,s__30484__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17358__auto__.call(null,cljs.core.map.call(null,cljs.core.list,their_cards,opp_cards));
})());
});
gin.transact.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready","ready",1122290965),new cljs.core.Keyword("cardinality","many","cardinality/many",4556483886)], null);
