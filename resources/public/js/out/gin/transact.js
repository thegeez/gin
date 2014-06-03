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
log_event.cljs$lang$applyTo = (function (arglist__19005){
var db = cljs.core.first(arglist__19005);
arglist__19005 = cljs.core.next(arglist__19005);
var event = cljs.core.first(arglist__19005);
var args = cljs.core.rest(arglist__19005);
return log_event__delegate(db,event,args);
});
log_event.cljs$core$IFn$_invoke$arity$variadic = log_event__delegate;
return log_event;
})()
;
gin.transact.maybe_pile_reshuffle = (function maybe_pile_reshuffle(db,game_id){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var pile = new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game);if(cljs.core.empty_QMARK_.call(null,pile))
{var new_pile = new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"pile","pile",1017345188),new_pile,new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.PersistentVector.EMPTY], null)], null),(function (){var iter__17402__auto__ = (function iter__19010(s__19011){return (new cljs.core.LazySeq(null,(function (){var s__19011__$1 = s__19011;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19011__$1);if(temp__4092__auto__)
{var s__19011__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19011__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19011__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19013 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19012 = 0;while(true){
if((i__19012 < size__17401__auto__))
{var card_id = cljs.core._nth.call(null,c__17400__auto__,i__19012);cljs.core.chunk_append.call(null,b__19013,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null))),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null));
{
var G__19014 = (i__19012 + 1);
i__19012 = G__19014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19013),iter__19010.call(null,cljs.core.chunk_rest.call(null,s__19011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19013),null);
}
} else
{var card_id = cljs.core.first.call(null,s__19011__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null))),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),iter__19010.call(null,cljs.core.rest.call(null,s__19011__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,new_pile);
})());
} else
{return null;
}
});
gin.transact.game_created = (function game_created(db,game_id,player1_id,player2_id,us){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"game-created","game-created",3250098047),game_id,player1_id,player2_id,us], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"player1","player1",520336610),player1_id,new cljs.core.Keyword(null,"player2","player2",520336611),player2_id,new cljs.core.Keyword(null,"us","us",1013907984),us,new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.map.call(null,cljs.core.second,cljs.core.sort_by.call(null,cljs.core.first,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("dom","id","dom/id",1020278687),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null)], null)], null),db)))], null)], null);
});
gin.transact.deal = (function deal(db,game_id,discard_card,our_cards,to_start){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"deal","deal",1016983518),game_id,discard_card,our_cards,to_start], null)], null),(function (){var map__19034 = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__19034__$1 = ((cljs.core.seq_QMARK_.call(null,map__19034))?cljs.core.apply.call(null,cljs.core.hash_map,map__19034):map__19034);var game = map__19034__$1;var game_e = cljs.core.get.call(null,map__19034__$1,new cljs.core.Keyword("db","id","db/id",1014111942));var cards = (function (){var iter__17402__auto__ = ((function (map__19034,map__19034__$1,game,game_e){
return (function iter__19038(s__19039){return (new cljs.core.LazySeq(null,((function (map__19034,map__19034__$1,game,game_e){
return (function (){var s__19039__$1 = s__19039;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19039__$1);if(temp__4092__auto__)
{var s__19039__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19039__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19039__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19041 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19040 = 0;while(true){
if((i__19040 < size__17401__auto__))
{var cid = cljs.core._nth.call(null,c__17400__auto__,i__19040);cljs.core.chunk_append.call(null,b__19041,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)));
{
var G__19053 = (i__19040 + 1);
i__19040 = G__19053;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19041),iter__19038.call(null,cljs.core.chunk_rest.call(null,s__19039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19041),null);
}
} else
{var cid = cljs.core.first.call(null,s__19039__$2);return cljs.core.cons.call(null,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)),iter__19038.call(null,cljs.core.rest.call(null,s__19039__$2)));
}
} else
{return null;
}
break;
}
});})(map__19034,map__19034__$1,game,game_e))
,null,null));
});})(map__19034,map__19034__$1,game,game_e))
;return iter__17402__auto__.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));
})();var vec__19035 = cljs.core.split_at.call(null,31,cards);var pile = cljs.core.nth.call(null,vec__19035,0,null);var vec__19036 = cljs.core.nth.call(null,vec__19035,1,null);var discard = cljs.core.nth.call(null,vec__19036,0,null);var other = cljs.core.nthnext.call(null,vec__19036,1);var vec__19037 = (function (){var vec__19042 = cljs.core.split_at.call(null,10,other);var f = cljs.core.nth.call(null,vec__19042,0,null);var s = cljs.core.nth.call(null,vec__19042,1,null);if(cljs.core._EQ_.call(null,to_start,new cljs.core.Keyword(null,"us","us",1013907984).cljs$core$IFn$_invoke$arity$1(game)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,s], null);
}
})();var ours = cljs.core.nth.call(null,vec__19037,0,null);var theirs = cljs.core.nth.call(null,vec__19037,1,null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",1014111942),game_e,new cljs.core.Keyword(null,"starting","starting",2330710962),to_start,new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),pile),new cljs.core.Keyword(null,"discards","discards",1286668039),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard)], null),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),theirs),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),ours)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(discard),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(discard_card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(discard_card)], null)], null),(function (){var iter__17402__auto__ = (function iter__19043(s__19044){return (new cljs.core.LazySeq(null,(function (){var s__19044__$1 = s__19044;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19044__$1);if(temp__4092__auto__)
{var s__19044__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19044__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19044__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19046 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19045 = 0;while(true){
if((i__19045 < size__17401__auto__))
{var vec__19049 = cljs.core._nth.call(null,c__17400__auto__,i__19045);var e = cljs.core.nth.call(null,vec__19049,0,null);var did = cljs.core.nth.call(null,vec__19049,1,null);var suit = cljs.core.nth.call(null,vec__19049,2,null);var rank = cljs.core.nth.call(null,vec__19049,3,null);cljs.core.chunk_append.call(null,b__19046,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__19054 = (i__19045 + 1);
i__19045 = G__19054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19046),iter__19043.call(null,cljs.core.chunk_rest.call(null,s__19044__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19046),null);
}
} else
{var vec__19050 = cljs.core.first.call(null,s__19044__$2);var e = cljs.core.nth.call(null,vec__19050,0,null);var did = cljs.core.nth.call(null,vec__19050,1,null);var suit = cljs.core.nth.call(null,vec__19050,2,null);var rank = cljs.core.nth.call(null,vec__19050,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__19043.call(null,cljs.core.rest.call(null,s__19044__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,cljs.core.map.call(null,(function (e,p__19051){var map__19052 = p__19051;var map__19052__$1 = ((cljs.core.seq_QMARK_.call(null,map__19052))?cljs.core.apply.call(null,cljs.core.hash_map,map__19052):map__19052);var rank = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),ours,our_cards));
})());
})());
});
gin.transact.join_game = (function join_game(db,game_id,discard_cards,our_cards,their_cards,to_start,turn,result){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"join-game","join-game",4768214567),game_id,discard_cards,our_cards,their_cards,to_start,turn,result], null)], null),(function (){var map__19093 = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__19093__$1 = ((cljs.core.seq_QMARK_.call(null,map__19093))?cljs.core.apply.call(null,cljs.core.hash_map,map__19093):map__19093);var game = map__19093__$1;var game_e = cljs.core.get.call(null,map__19093__$1,new cljs.core.Keyword("db","id","db/id",1014111942));var cards = (function (){var iter__17402__auto__ = ((function (map__19093,map__19093__$1,game,game_e){
return (function iter__19097(s__19098){return (new cljs.core.LazySeq(null,((function (map__19093,map__19093__$1,game,game_e){
return (function (){var s__19098__$1 = s__19098;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19098__$1);if(temp__4092__auto__)
{var s__19098__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19098__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19098__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19100 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19099 = 0;while(true){
if((i__19099 < size__17401__auto__))
{var cid = cljs.core._nth.call(null,c__17400__auto__,i__19099);cljs.core.chunk_append.call(null,b__19100,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)));
{
var G__19131 = (i__19099 + 1);
i__19099 = G__19131;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19100),iter__19097.call(null,cljs.core.chunk_rest.call(null,s__19098__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19100),null);
}
} else
{var cid = cljs.core.first.call(null,s__19098__$2);return cljs.core.cons.call(null,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)),iter__19097.call(null,cljs.core.rest.call(null,s__19098__$2)));
}
} else
{return null;
}
break;
}
});})(map__19093,map__19093__$1,game,game_e))
,null,null));
});})(map__19093,map__19093__$1,game,game_e))
;return iter__17402__auto__.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));
})();var vec__19094 = cljs.core.split_at.call(null,cljs.core.count.call(null,discard_cards),cards);var discards = cljs.core.nth.call(null,vec__19094,0,null);var other = cljs.core.nth.call(null,vec__19094,1,null);var vec__19095 = cljs.core.split_at.call(null,cljs.core.count.call(null,our_cards),other);var ours = cljs.core.nth.call(null,vec__19095,0,null);var other__$1 = cljs.core.nth.call(null,vec__19095,1,null);var vec__19096 = cljs.core.split_at.call(null,cljs.core.count.call(null,their_cards),other__$1);var theirs = cljs.core.nth.call(null,vec__19096,0,null);var pile = cljs.core.nth.call(null,vec__19096,1,null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",1014111942),game_e,new cljs.core.Keyword(null,"starting","starting",2330710962),to_start,new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),pile),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),discards),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),theirs),new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),ours),new cljs.core.Keyword(null,"turn","turn",1017476079),turn,new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"assigned","assigned",644022592)], null)], null),(cljs.core.truth_(result)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),game_e,new cljs.core.Keyword(null,"result","result",4374444943),result], null)], null):null),(function (){var iter__17402__auto__ = (function iter__19101(s__19102){return (new cljs.core.LazySeq(null,(function (){var s__19102__$1 = s__19102;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19102__$1);if(temp__4092__auto__)
{var s__19102__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19102__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19102__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19104 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19103 = 0;while(true){
if((i__19103 < size__17401__auto__))
{var vec__19107 = cljs.core._nth.call(null,c__17400__auto__,i__19103);var e = cljs.core.nth.call(null,vec__19107,0,null);var did = cljs.core.nth.call(null,vec__19107,1,null);var suit = cljs.core.nth.call(null,vec__19107,2,null);var rank = cljs.core.nth.call(null,vec__19107,3,null);cljs.core.chunk_append.call(null,b__19104,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__19132 = (i__19103 + 1);
i__19103 = G__19132;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19104),iter__19101.call(null,cljs.core.chunk_rest.call(null,s__19102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19104),null);
}
} else
{var vec__19108 = cljs.core.first.call(null,s__19102__$2);var e = cljs.core.nth.call(null,vec__19108,0,null);var did = cljs.core.nth.call(null,vec__19108,1,null);var suit = cljs.core.nth.call(null,vec__19108,2,null);var rank = cljs.core.nth.call(null,vec__19108,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__19101.call(null,cljs.core.rest.call(null,s__19102__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,cljs.core.map.call(null,(function (e,p__19109){var map__19110 = p__19109;var map__19110__$1 = ((cljs.core.seq_QMARK_.call(null,map__19110))?cljs.core.apply.call(null,cljs.core.hash_map,map__19110):map__19110);var rank = cljs.core.get.call(null,map__19110__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__19110__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),theirs,their_cards));
})(),(function (){var iter__17402__auto__ = (function iter__19111(s__19112){return (new cljs.core.LazySeq(null,(function (){var s__19112__$1 = s__19112;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19112__$1);if(temp__4092__auto__)
{var s__19112__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19112__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19112__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19114 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19113 = 0;while(true){
if((i__19113 < size__17401__auto__))
{var vec__19117 = cljs.core._nth.call(null,c__17400__auto__,i__19113);var e = cljs.core.nth.call(null,vec__19117,0,null);var did = cljs.core.nth.call(null,vec__19117,1,null);var suit = cljs.core.nth.call(null,vec__19117,2,null);var rank = cljs.core.nth.call(null,vec__19117,3,null);cljs.core.chunk_append.call(null,b__19114,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__19133 = (i__19113 + 1);
i__19113 = G__19133;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19114),iter__19111.call(null,cljs.core.chunk_rest.call(null,s__19112__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19114),null);
}
} else
{var vec__19118 = cljs.core.first.call(null,s__19112__$2);var e = cljs.core.nth.call(null,vec__19118,0,null);var did = cljs.core.nth.call(null,vec__19118,1,null);var suit = cljs.core.nth.call(null,vec__19118,2,null);var rank = cljs.core.nth.call(null,vec__19118,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__19111.call(null,cljs.core.rest.call(null,s__19112__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,cljs.core.map.call(null,(function (e,p__19119){var map__19120 = p__19119;var map__19120__$1 = ((cljs.core.seq_QMARK_.call(null,map__19120))?cljs.core.apply.call(null,cljs.core.hash_map,map__19120):map__19120);var rank = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),discards,discard_cards));
})(),(function (){var iter__17402__auto__ = (function iter__19121(s__19122){return (new cljs.core.LazySeq(null,(function (){var s__19122__$1 = s__19122;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19122__$1);if(temp__4092__auto__)
{var s__19122__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19122__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19122__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19124 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19123 = 0;while(true){
if((i__19123 < size__17401__auto__))
{var vec__19127 = cljs.core._nth.call(null,c__17400__auto__,i__19123);var e = cljs.core.nth.call(null,vec__19127,0,null);var did = cljs.core.nth.call(null,vec__19127,1,null);var suit = cljs.core.nth.call(null,vec__19127,2,null);var rank = cljs.core.nth.call(null,vec__19127,3,null);cljs.core.chunk_append.call(null,b__19124,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__19134 = (i__19123 + 1);
i__19123 = G__19134;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19124),iter__19121.call(null,cljs.core.chunk_rest.call(null,s__19122__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19124),null);
}
} else
{var vec__19128 = cljs.core.first.call(null,s__19122__$2);var e = cljs.core.nth.call(null,vec__19128,0,null);var did = cljs.core.nth.call(null,vec__19128,1,null);var suit = cljs.core.nth.call(null,vec__19128,2,null);var rank = cljs.core.nth.call(null,vec__19128,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__19121.call(null,cljs.core.rest.call(null,s__19122__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,cljs.core.map.call(null,(function (e,p__19129){var map__19130 = p__19129;var map__19130__$1 = ((cljs.core.seq_QMARK_.call(null,map__19130))?cljs.core.apply.call(null,cljs.core.hash_map,map__19130):map__19130);var rank = cljs.core.get.call(null,map__19130__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__19130__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
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
gin.transact.their_pile_picked = (function their_pile_picked(db,game_id){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_id = cljs.core.peek.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game));var card = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var insert_idx = cljs.core.rand_nth.call(null,cljs.core.range.call(null,10));var vec__19136 = cljs.core.split_at.call(null,insert_idx,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var before = cljs.core.nth.call(null,vec__19136,0,null);var after = cljs.core.nth.call(null,vec__19136,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-pile-picked","their-pile-picked",4382382330),game_id,card_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,before),card_id),after),new cljs.core.Keyword(null,"pile","pile",1017345188),cljs.core.pop.call(null,new cljs.core.Keyword(null,"pile","pile",1017345188).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"their-taken","their-taken",3995201030),card_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null)], null);
});
gin.transact.their_pile_pick_revealed = (function their_pile_pick_revealed(db,game_id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-pile-pick-revealed","their-pile-pick-revealed",3002247874),game_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.maybe_pile_reshuffle,game_id], null)], null);
});
gin.transact.their_discard_picked = (function their_discard_picked(db,game_id){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_id = cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game));var card = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));var insert_idx = cljs.core.rand_nth.call(null,cljs.core.range.call(null,10));var vec__19138 = cljs.core.split_at.call(null,insert_idx,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));var before = cljs.core.nth.call(null,vec__19138,0,null);var after = cljs.core.nth.call(null,vec__19138,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-discard-picked","their-discard-picked",4096501972),game_id,card_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.pop.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,before),card_id),after),new cljs.core.Keyword(null,"their-taken","their-taken",3995201030),card_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"hidden","hidden",4091384092)], null)], null);
});
gin.transact.their_discard_chosen = (function their_discard_chosen(db,game_id,suit,rank){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var card_id = cljs.core.rand_nth.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"their-taken","their-taken",3995201030).cljs$core$IFn$_invoke$arity$1(game)], true),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game)));var card = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),card_id], null));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"their-discard-chosen","their-discard-chosen",3723764678),game_id,card_id,suit,rank], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"discards","discards",1286668039),cljs.core.conj.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(game),card_id),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.PersistentHashSet.fromArray([card_id], true)),new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"done","done",1016993524)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null)], null);
});
gin.transact.game_finished = (function game_finished(db,game_id,result,opp_cards){var game = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var their_cards = cljs.core.map.call(null,((function (game){
return (function (p1__19139_SHARP_){return gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),p1__19139_SHARP_], null));
});})(game))
,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874).cljs$core$IFn$_invoke$arity$1(game));return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"game-finished","game-finished",3417324383),game_id,result], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"result","result",4374444943),result], null)], null),(function (){var iter__17402__auto__ = (function iter__19148(s__19149){return (new cljs.core.LazySeq(null,(function (){var s__19149__$1 = s__19149;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19149__$1);if(temp__4092__auto__)
{var s__19149__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19149__$2))
{var c__17400__auto__ = cljs.core.chunk_first.call(null,s__19149__$2);var size__17401__auto__ = cljs.core.count.call(null,c__17400__auto__);var b__19151 = cljs.core.chunk_buffer.call(null,size__17401__auto__);if((function (){var i__19150 = 0;while(true){
if((i__19150 < size__17401__auto__))
{var vec__19154 = cljs.core._nth.call(null,c__17400__auto__,i__19150);var e = cljs.core.nth.call(null,vec__19154,0,null);var card = cljs.core.nth.call(null,vec__19154,1,null);cljs.core.chunk_append.call(null,b__19151,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(card)], null));
{
var G__19156 = (i__19150 + 1);
i__19150 = G__19156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19151),iter__19148.call(null,cljs.core.chunk_rest.call(null,s__19149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19151),null);
}
} else
{var vec__19155 = cljs.core.first.call(null,s__19149__$2);var e = cljs.core.nth.call(null,vec__19155,0,null);var card = cljs.core.nth.call(null,vec__19155,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(card)], null),iter__19148.call(null,cljs.core.rest.call(null,s__19149__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__17402__auto__.call(null,cljs.core.map.call(null,cljs.core.list,their_cards,opp_cards));
})());
});
gin.transact.error = (function error(db,msg){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"error","error",1110689146),msg], null)], null);
});
gin.transact.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready","ready",1122290965),new cljs.core.Keyword("cardinality","many","cardinality/many",4556483886)], null);
