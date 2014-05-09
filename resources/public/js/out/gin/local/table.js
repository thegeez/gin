// Compiled by ClojureScript 0.0-2173
goog.provide('gin.local.table');
goog.require('cljs.core');
goog.require('gin.local.game');
goog.require('gin.local.game');
gin.local.table.table = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
gin.local.table.table_state = (function table_state(){var opp_gin_size = new cljs.core.Keyword(null,"opp-gin-size","opp-gin-size",3810086450).cljs$core$IFn$_invoke$arity$1(gin.local.table.table);var our_gin_size = new cljs.core.Keyword(null,"our-gin-size","our-gin-size",3022237237).cljs$core$IFn$_invoke$arity$1(gin.local.table.table);if((cljs.core._EQ_.call(null,opp_gin_size,10)) && (cljs.core._EQ_.call(null,our_gin_size,10)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"tie","tie",1014019074),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999).cljs$core$IFn$_invoke$arity$1(gin.local.table.table)], null);
} else
{if(cljs.core._EQ_.call(null,opp_gin_size,10))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"opp-win","opp-win",4053922608),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999).cljs$core$IFn$_invoke$arity$1(gin.local.table.table)], null);
} else
{if(cljs.core._EQ_.call(null,our_gin_size,10))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"our-win","our-win",4198915405),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999).cljs$core$IFn$_invoke$arity$1(gin.local.table.table)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"continue","continue",4741668889)], null);
} else
{return null;
}
}
}
}
});
gin.local.table.shuffle_set = (function shuffle_set(s,n){var ss = cljs.core.seq.call(null,s);if((ss) && ((0 < n)))
{var pick = cljs.core.rand_nth.call(null,ss);return cljs.core.cons.call(null,pick,shuffle_set.call(null,cljs.core.disj.call(null,s,pick),(n - 1)));
} else
{return s;
}
});
gin.local.table.get_init_shuffle = (function get_init_shuffle(){var deck = gin.local.table.shuffle_set.call(null,cljs.core.set.call(null,(function (){var iter__10096__auto__ = (function iter__14259(s__14260){return (new cljs.core.LazySeq(null,(function (){var s__14260__$1 = s__14260;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14260__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var suit = cljs.core.first.call(null,xs__4579__auto__);var iterys__10092__auto__ = ((function (s__14260__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function iter__14261(s__14262){return (new cljs.core.LazySeq(null,((function (s__14260__$1,suit,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14262__$1 = s__14262;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14262__$1);if(temp__4092__auto____$1)
{var s__14262__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14262__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__14262__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__14264 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__14263 = 0;while(true){
if((i__14263 < size__10095__auto__))
{var rank = cljs.core._nth.call(null,c__10094__auto__,i__14263);cljs.core.chunk_append.call(null,b__14264,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),suit,new cljs.core.Keyword(null,"rank","rank",1017397150),rank], null));
{
var G__14265 = (i__14263 + 1);
i__14263 = G__14265;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14264),iter__14261.call(null,cljs.core.chunk_rest.call(null,s__14262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14264),null);
}
} else
{var rank = cljs.core.first.call(null,s__14262__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",1017446015),suit,new cljs.core.Keyword(null,"rank","rank",1017397150),rank], null),iter__14261.call(null,cljs.core.rest.call(null,s__14262__$2)));
}
} else
{return null;
}
break;
}
});})(s__14260__$1,suit,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14260__$1,suit,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826)], null)));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__14259.call(null,cljs.core.rest.call(null,s__14260__$1)));
} else
{{
var G__14266 = cljs.core.rest.call(null,s__14260__$1);
s__14260__$1 = G__14266;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heart","heart",1113056184),new cljs.core.Keyword(null,"club","club",1016961064),new cljs.core.Keyword(null,"spade","spade",1123542167),new cljs.core.Keyword(null,"diamond","diamond",2668958918)], null));
})()),21);var vec__14256 = cljs.core.split_at.call(null,10,deck);var opp_cards = cljs.core.nth.call(null,vec__14256,0,null);var others = cljs.core.nth.call(null,vec__14256,1,null);var vec__14257 = cljs.core.split_at.call(null,10,others);var our_cards = cljs.core.nth.call(null,vec__14257,0,null);var vec__14258 = cljs.core.nth.call(null,vec__14257,1,null);var discard = cljs.core.nth.call(null,vec__14258,0,null);var pile = cljs.core.nthnext.call(null,vec__14258,1);var starting = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",1013907984),new cljs.core.Keyword(null,"opp","opp",1014014497)], null));return cljs.core.select_keys.call(null,cljs.core.swap_BANG_.call(null,gin.local.table.table,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),cljs.core.set.call(null,our_cards),new cljs.core.Keyword(null,"our-gin-size","our-gin-size",3022237237),gin.local.game.gin_size.call(null,our_cards),new cljs.core.Keyword(null,"discards","discards",1286668039),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discard], null),new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458),cljs.core.set.call(null,pile),new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999),cljs.core.set.call(null,opp_cards),new cljs.core.Keyword(null,"opp-gin-size","opp-gin-size",3810086450),gin.local.game.gin_size.call(null,opp_cards),new cljs.core.Keyword(null,"starting","starting",2330710962),starting], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"our-cards","our-cards",3774215444),new cljs.core.Keyword(null,"discards","discards",1286668039)], null));
});
gin.local.table.restock_pile = (function restock_pile(){return cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (t){if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458).cljs$core$IFn$_invoke$arity$1(t)))
{var discards = new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(t);return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"discards","discards",1286668039),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,discards)], null)),new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458),cljs.core.set.call(null,cljs.core.pop.call(null,discards)));
} else
{return t;
}
}));
});
gin.local.table.get_pile_card = (function get_pile_card(){var new_card = new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (old_table){var card = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458).cljs$core$IFn$_invoke$arity$1(old_table)));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,old_table,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458)], null),cljs.core.disj,card),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"our-cards","our-cards",3774215444)], null),cljs.core.conj,card),new cljs.core.Keyword(null,"last","last",1017218568),card);
})));gin.local.table.restock_pile.call(null);
return new_card;
});
gin.local.table.get_discard = (function get_discard(){return new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (old_table){var card = cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(old_table));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,old_table,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discards","discards",1286668039)], null),cljs.core.pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"our-cards","our-cards",3774215444)], null),cljs.core.conj,card),new cljs.core.Keyword(null,"last","last",1017218568),card);
})));
});
gin.local.table.set_our_discard = (function set_our_discard(discard){cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (p1__14267_SHARP_){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__14267_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"our-cards","our-cards",3774215444)], null),cljs.core.disj,discard),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discards","discards",1286668039)], null),cljs.core.conj,discard);
}));
return cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (t){return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"our-gin-size","our-gin-size",3022237237),gin.local.game.gin_size.call(null,new cljs.core.Keyword(null,"our-cards","our-cards",3774215444).cljs$core$IFn$_invoke$arity$1(t)));
}));
});
gin.local.table.get_opponent_move = (function get_opponent_move(){var vec__14269 = new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (t){var from = gin.local.game.decide_move.call(null,t);var take_card = ((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"pile","pile",1017345188)))?cljs.core.rand_nth.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458).cljs$core$IFn$_invoke$arity$1(t))):((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"discard","discard",2685271056)))?cljs.core.peek.call(null,new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(t)):null));var t__$1 = cljs.core.update_in.call(null,((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"pile","pile",1017345188)))?cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pile-cards","pile-cards",4041294458)], null),cljs.core.disj,take_card):((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"discard","discard",2685271056)))?cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discards","discards",1286668039)], null),cljs.core.pop):null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999)], null),cljs.core.conj,take_card);var trade_card = gin.local.game.choosediscard.call(null,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999).cljs$core$IFn$_invoke$arity$1(t__$1),new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(t__$1));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,t__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999)], null),cljs.core.disj,trade_card),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discards","discards",1286668039)], null),cljs.core.conj,trade_card),new cljs.core.Keyword(null,"last","last",1017218568),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_card,from], null));
})));var new_card = cljs.core.nth.call(null,vec__14269,0,null);var from = cljs.core.nth.call(null,vec__14269,1,null);if(cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"pile","pile",1017345188)))
{gin.local.table.restock_pile.call(null);
} else
{}
cljs.core.swap_BANG_.call(null,gin.local.table.table,(function (t){return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"opp-gin-size","opp-gin-size",3810086450),gin.local.game.gin_size.call(null,new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999).cljs$core$IFn$_invoke$arity$1(t)));
}));
return from;
});
