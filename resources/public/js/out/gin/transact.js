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
log_event.cljs$lang$applyTo = (function (arglist__19178){
var db = cljs.core.first(arglist__19178);
arglist__19178 = cljs.core.next(arglist__19178);
var event = cljs.core.first(arglist__19178);
var args = cljs.core.rest(arglist__19178);
return log_event__delegate(db,event,args);
});
log_event.cljs$core$IFn$_invoke$arity$variadic = log_event__delegate;
return log_event;
})()
;
gin.transact.game_created = (function game_created(db,game_id,player1_id,player2_id,us){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"game-created","game-created",3250098047),game_id,player1_id,player2_id,us], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id,new cljs.core.Keyword(null,"player1","player1",520336610),player1_id,new cljs.core.Keyword(null,"player2","player2",520336611),player2_id,new cljs.core.Keyword(null,"us","us",1013907984),us], null)], null);
});
gin.transact.deal = (function deal(db,game_id,discard_card,our_cards){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"deal","deal",1016983518),game_id,discard_card,our_cards], null)], null),(function (){var map__19201 = gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",818249800),game_id], null));var map__19201__$1 = ((cljs.core.seq_QMARK_.call(null,map__19201))?cljs.core.apply.call(null,cljs.core.hash_map,map__19201):map__19201);var game = map__19201__$1;var game_e = cljs.core.get.call(null,map__19201__$1,new cljs.core.Keyword("db","id","db/id",1014111942));var cards = (function (){var iter__10096__auto__ = ((function (map__19201,map__19201__$1,game,game_e){
return (function iter__19205(s__19206){return (new cljs.core.LazySeq(null,((function (map__19201,map__19201__$1,game,game_e){
return (function (){var s__19206__$1 = s__19206;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19206__$1);if(temp__4092__auto__)
{var s__19206__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19206__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__19206__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__19208 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__19207 = 0;while(true){
if((i__19207 < size__10095__auto__))
{var cid = cljs.core._nth.call(null,c__10094__auto__,i__19207);cljs.core.chunk_append.call(null,b__19208,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)));
{
var G__19223 = (i__19207 + 1);
i__19207 = G__19223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19208),iter__19205.call(null,cljs.core.chunk_rest.call(null,s__19206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19208),null);
}
} else
{var cid = cljs.core.first.call(null,s__19206__$2);return cljs.core.cons.call(null,gin.datascript_helpers.entity_lookup.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687),cid], null)),iter__19205.call(null,cljs.core.rest.call(null,s__19206__$2)));
}
} else
{return null;
}
break;
}
});})(map__19201,map__19201__$1,game,game_e))
,null,null));
});})(map__19201,map__19201__$1,game,game_e))
;return iter__10096__auto__.call(null,new cljs.core.Keyword(null,"deck","deck",1016983579).cljs$core$IFn$_invoke$arity$1(game));
})();var vec__19202 = cljs.core.split_at.call(null,31,cards);var deck = cljs.core.nth.call(null,vec__19202,0,null);var vec__19203 = cljs.core.nth.call(null,vec__19202,1,null);var discard = cljs.core.nth.call(null,vec__19203,0,null);var other = cljs.core.nthnext.call(null,vec__19203,1);var vec__19204 = cljs.core.split_at.call(null,10,other);var ours = cljs.core.nth.call(null,vec__19204,0,null);var theirs = cljs.core.nth.call(null,vec__19204,1,null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),game_e,new cljs.core.Keyword(null,"deck","deck",1016983579),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),deck)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),game_e,new cljs.core.Keyword(null,"discards","discards",1286668039),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(discard)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(discard),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","discard","location/discard",2710913514),new cljs.core.Keyword("card","suit","card/suit",1215370835),new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(discard_card),new cljs.core.Keyword("card","rank","card/rank",1215352178),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(discard_card)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),game_e,new cljs.core.Keyword(null,"their-cards","their-cards",3979507874),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),theirs)], null)], null),(function (){var iter__10096__auto__ = (function iter__19209(s__19210){return (new cljs.core.LazySeq(null,(function (){var s__19210__$1 = s__19210;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19210__$1);if(temp__4092__auto__)
{var s__19210__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19210__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__19210__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__19212 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__19211 = 0;while(true){
if((i__19211 < size__10095__auto__))
{var e = cljs.core._nth.call(null,c__10094__auto__,i__19211);cljs.core.chunk_append.call(null,b__19212,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","theirs","location/theirs",1228444739)], null));
{
var G__19224 = (i__19211 + 1);
i__19211 = G__19224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19212),iter__19209.call(null,cljs.core.chunk_rest.call(null,s__19210__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19212),null);
}
} else
{var e = cljs.core.first.call(null,s__19210__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","theirs","location/theirs",1228444739)], null),iter__19209.call(null,cljs.core.rest.call(null,s__19210__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,theirs);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),game_e,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.mapv.call(null,new cljs.core.Keyword("dom","id","dom/id",1020278687),ours)], null)], null),(function (){var iter__10096__auto__ = (function iter__19213(s__19214){return (new cljs.core.LazySeq(null,(function (){var s__19214__$1 = s__19214;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19214__$1);if(temp__4092__auto__)
{var s__19214__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19214__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__19214__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__19216 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__19215 = 0;while(true){
if((i__19215 < size__10095__auto__))
{var vec__19219 = cljs.core._nth.call(null,c__10094__auto__,i__19215);var e = cljs.core.nth.call(null,vec__19219,0,null);var did = cljs.core.nth.call(null,vec__19219,1,null);var suit = cljs.core.nth.call(null,vec__19219,2,null);var rank = cljs.core.nth.call(null,vec__19219,3,null);cljs.core.chunk_append.call(null,b__19216,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","ours","location/ours",4800352241),new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null));
{
var G__19225 = (i__19215 + 1);
i__19215 = G__19225;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19216),iter__19213.call(null,cljs.core.chunk_rest.call(null,s__19214__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19216),null);
}
} else
{var vec__19220 = cljs.core.first.call(null,s__19214__$2);var e = cljs.core.nth.call(null,vec__19220,0,null);var did = cljs.core.nth.call(null,vec__19220,1,null);var suit = cljs.core.nth.call(null,vec__19220,2,null);var rank = cljs.core.nth.call(null,vec__19220,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword("card","location","card/location",3109454043),new cljs.core.Keyword("location","ours","location/ours",4800352241),new cljs.core.Keyword("card","suit","card/suit",1215370835),suit,new cljs.core.Keyword("card","rank","card/rank",1215352178),rank], null),iter__19213.call(null,cljs.core.rest.call(null,s__19214__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,cljs.core.map.call(null,(function (e,p__19221){var map__19222 = p__19221;var map__19222__$1 = ((cljs.core.seq_QMARK_.call(null,map__19222))?cljs.core.apply.call(null,cljs.core.hash_map,map__19222):map__19222);var rank = cljs.core.get.call(null,map__19222__$1,new cljs.core.Keyword(null,"rank","rank",1017397150));var suit = cljs.core.get.call(null,map__19222__$1,new cljs.core.Keyword(null,"suit","suit",1017446015));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("dom","id","dom/id",1020278687).cljs$core$IFn$_invoke$arity$1(e),suit,rank], null);
}),ours,our_cards));
})());
})());
});
gin.transact.turn_assigned = (function turn_assigned(db,game_id,turn){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),gin.transact.log_event,new cljs.core.Keyword(null,"turn-assigned","turn-assigned",4620042384),game_id,turn], null),(function (){var game_eid = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"game-id","game-id",818249800),new cljs.core.Symbol(null,"?game-id","?game-id",586682736,null)], null)], null)], null),db,game_id));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),game_eid,new cljs.core.Keyword(null,"turn","turn",1017476079),turn], null);
})()], null);
});
