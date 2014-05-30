// Compiled by ClojureScript 0.0-2173
goog.provide('gin.local.game');
goog.require('cljs.core');
gin.local.game.rank__GT_value = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"J","J",1013904316)],[1,3,2,10,5,4,12,8,9,6,7,13,11]);
gin.local.game.value__GT_rank = cljs.core.zipmap.call(null,cljs.core.vals.call(null,gin.local.game.rank__GT_value),cljs.core.keys.call(null,gin.local.game.rank__GT_value));
gin.local.game.suit__GT_value = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heart","heart",1113056184),0,new cljs.core.Keyword(null,"club","club",1016961064),1,new cljs.core.Keyword(null,"spade","spade",1123542167),2,new cljs.core.Keyword(null,"diamond","diamond",2668958918),3], null);
gin.local.game.value__GT_suit = cljs.core.zipmap.call(null,cljs.core.vals.call(null,gin.local.game.suit__GT_value),cljs.core.keys.call(null,gin.local.game.suit__GT_value));
gin.local.game.add_rank = (function add_rank(rank,n){var v = (gin.local.game.rank__GT_value.call(null,rank) + n);if(cljs.core._EQ_.call(null,v,14))
{return new cljs.core.Keyword(null,"A","A",1013904307);
} else
{return gin.local.game.value__GT_rank.call(null,v);
}
});
gin.local.game.value_sorted = (function value_sorted(cards){return cljs.core.sort_by.call(null,cljs.core.comp.call(null,gin.local.game.rank__GT_value,new cljs.core.Keyword(null,"rank","rank",1017397150)),cards);
});
gin.local.game.dec_rank = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"r2","r2",1013907826),new cljs.core.Keyword(null,"T","T",1013904326),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"J","J",1013904316)],[new cljs.core.Keyword(null,"K","K",1013904317),new cljs.core.Keyword(null,"r2","r2",1013907826),new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"r9","r9",1013907833),new cljs.core.Keyword(null,"r4","r4",1013907828),new cljs.core.Keyword(null,"r3","r3",1013907827),new cljs.core.Keyword(null,"J","J",1013904316),new cljs.core.Keyword(null,"r7","r7",1013907831),new cljs.core.Keyword(null,"r8","r8",1013907832),new cljs.core.Keyword(null,"r5","r5",1013907829),new cljs.core.Keyword(null,"r6","r6",1013907830),new cljs.core.Keyword(null,"Q","Q",1013904323),new cljs.core.Keyword(null,"T","T",1013904326)]);
gin.local.game.remove_when_card = (function remove_when_card(cards,suit,rank){var vec__18894 = cljs.core.split_with.call(null,(function (p1__18892_SHARP_){return !((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(p1__18892_SHARP_),suit)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(p1__18892_SHARP_),rank)));
}),cards);var before = cljs.core.nth.call(null,vec__18894,0,null);var after = cljs.core.nth.call(null,vec__18894,1,null);if(cljs.core.truth_(cljs.core.first.call(null,after)))
{return cljs.core.concat.call(null,before,cljs.core.rest.call(null,after));
} else
{return null;
}
});
gin.local.game.remove_when_straight = (function remove_when_straight(cards,end_suit,end_rank){var temp__4092__auto__ = gin.local.game.remove_when_card.call(null,cards,end_suit,gin.local.game.dec_rank.call(null,end_rank));if(cljs.core.truth_(temp__4092__auto__))
{var found_middle = temp__4092__auto__;return gin.local.game.remove_when_card.call(null,found_middle,end_suit,end_rank);
} else
{return null;
}
});
gin.local.game.gin_hand_size = (function gin_hand_size(ginhand){if((cljs.core.count.call(null,ginhand) < 3))
{return 0;
} else
{var pivot = cljs.core.first.call(null,ginhand);var postpivot = cljs.core.rest.call(null,ginhand);var skipscore = (0 + gin_hand_size.call(null,postpivot));var c1 = cljs.core.nth.call(null,ginhand,1);var c2 = cljs.core.nth.call(null,ginhand,2);var c3 = cljs.core.nth.call(null,ginhand,3,null);var samescore = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(pivot),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(c1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(c1),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(c2))))?(function (){var x__16948__auto__ = (3 + gin_hand_size.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,postpivot))));var y__16949__auto__ = (cljs.core.truth_((function (){var and__16629__auto__ = c3;if(cljs.core.truth_(and__16629__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(pivot),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(c3));
} else
{return and__16629__auto__;
}
})())?(function (){var notsame = cljs.core.rest.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,postpivot)));var x__16948__auto____$1 = (function (){var x__16948__auto____$1 = (3 + gin_hand_size.call(null,cljs.core.conj.call(null,notsame,c1)));var y__16949__auto__ = (3 + gin_hand_size.call(null,cljs.core.conj.call(null,notsame,c2)));return ((x__16948__auto____$1 > y__16949__auto__) ? x__16948__auto____$1 : y__16949__auto__);
})();var y__16949__auto__ = (4 + gin_hand_size.call(null,notsame));return ((x__16948__auto____$1 > y__16949__auto__) ? x__16948__auto____$1 : y__16949__auto__);
})():0);return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
})():0);var wostraight = gin.local.game.remove_when_straight.call(null,postpivot,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(pivot),gin.local.game.add_rank.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(pivot),2));var straightscore = (cljs.core.truth_(wostraight)?(function (){var x__16948__auto__ = (3 + gin_hand_size.call(null,wostraight));var y__16949__auto__ = (function (){var temp__4090__auto__ = gin.local.game.remove_when_card.call(null,wostraight,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(pivot),gin.local.game.add_rank.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(pivot),3));if(cljs.core.truth_(temp__4090__auto__))
{var wo4straight = temp__4090__auto__;return (4 + gin_hand_size.call(null,wo4straight));
} else
{return 0;
}
})();return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
})():0);var acescore = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"A","A",1013904307),new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(pivot))))?0:(function (){var temp__4090__auto__ = gin.local.game.remove_when_straight.call(null,postpivot,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(pivot),new cljs.core.Keyword(null,"K","K",1013904317));if(cljs.core.truth_(temp__4090__auto__))
{var wostraight__$1 = temp__4090__auto__;var x__16948__auto__ = (3 + gin_hand_size.call(null,wostraight__$1));var y__16949__auto__ = (function (){var temp__4090__auto____$1 = gin.local.game.remove_when_card.call(null,wostraight__$1,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(pivot),new cljs.core.Keyword(null,"J","J",1013904316));if(cljs.core.truth_(temp__4090__auto____$1))
{var woj = temp__4090__auto____$1;return (4 + gin_hand_size.call(null,woj));
} else
{return 0;
}
})();return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
} else
{return 0;
}
})());var x__16948__auto__ = (function (){var x__16948__auto__ = (function (){var x__16948__auto__ = skipscore;var y__16949__auto__ = samescore;return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
})();var y__16949__auto__ = straightscore;return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
})();var y__16949__auto__ = acescore;return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
}
});
gin.local.game.gin_size = (function gin_size(cards){return gin.local.game.gin_hand_size.call(null,gin.local.game.value_sorted.call(null,cards));
});
gin.local.game.count_gone = (function count_gone(rank,gone_cards){return ((((cljs.core.truth_(gone_cards.call(null,(rank + 0)))?1:0) + (cljs.core.truth_(gone_cards.call(null,(rank + 20)))?1:0)) + (cljs.core.truth_(gone_cards.call(null,(rank + 40)))?1:0)) + (cljs.core.truth_(gone_cards.call(null,(rank + 60)))?1:0));
});
gin.local.game.count_avail = (function count_avail(rank,suit,gone_cards){var wanted = ((suit * 20) + rank);if(cljs.core.truth_(gone_cards.call(null,((suit * 20) + rank))))
{return 0;
} else
{return 1;
}
});
gin.local.game.cards_to_gone_cards = (function cards_to_gone_cards(cards){return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__18895_SHARP_){return ((gin.local.game.suit__GT_value.call(null,new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(p1__18895_SHARP_)) * 20) + gin.local.game.rank__GT_value.call(null,new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(p1__18895_SHARP_)));
}),cards));
});
gin.local.game.rate_straight = (function rate_straight(suit,value,value2,gone_cards){var v1 = ((cljs.core._EQ_.call(null,value,1))?(((value2 > 6))?14:1):value);var v2 = ((cljs.core._EQ_.call(null,value2,1))?(((value > 6))?14:1):value2);var delta = ((function (){var x__16948__auto__ = v1;var y__16949__auto__ = v2;return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
})() - (function (){var x__16955__auto__ = v1;var y__16956__auto__ = v2;return ((x__16955__auto__ < y__16956__auto__) ? x__16955__auto__ : y__16956__auto__);
})());if(cljs.core._EQ_.call(null,delta,1))
{if((cljs.core._EQ_.call(null,v1,1)) || (cljs.core._EQ_.call(null,v2,1)))
{return gin.local.game.count_avail.call(null,3,suit,gone_cards);
} else
{if((cljs.core._EQ_.call(null,v1,14)) || (cljs.core._EQ_.call(null,v2,14)))
{return gin.local.game.count_avail.call(null,12,suit,gone_cards);
} else
{if((cljs.core._EQ_.call(null,v1,13)) || (cljs.core._EQ_.call(null,v2,13)))
{return (gin.local.game.count_avail.call(null,11,suit,gone_cards) + gin.local.game.count_avail.call(null,1,suit,gone_cards));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (gin.local.game.count_avail.call(null,((function (){var x__16955__auto__ = v1;var y__16956__auto__ = v2;return ((x__16955__auto__ < y__16956__auto__) ? x__16955__auto__ : y__16956__auto__);
})() - 1),suit,gone_cards) + gin.local.game.count_avail.call(null,((function (){var x__16948__auto__ = v1;var y__16949__auto__ = v2;return ((x__16948__auto__ > y__16949__auto__) ? x__16948__auto__ : y__16949__auto__);
})() + 1),suit,gone_cards));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,delta,2))
{var middle = cljs.core.quot.call(null,(v1 + v2),2);return gin.local.game.count_avail.call(null,middle,suit,gone_cards);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return 0;
} else
{return null;
}
}
}
});
gin.local.game.pair_rating = (function pair_rating(cards,goneset){var rating = 0;var cards__$1 = cards;while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cards__$1),1))
{return (20 + (2 * rating));
} else
{var card = cljs.core.first.call(null,cards__$1);var others = cljs.core.rest.call(null,cards__$1);var suit = new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(card);var rank = new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(card);var card_score = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (rating,cards__$1,card,others,suit,rank){
return (function (card2){var suit2 = new cljs.core.Keyword(null,"suit","suit",1017446015).cljs$core$IFn$_invoke$arity$1(card2);var rank2 = new cljs.core.Keyword(null,"rank","rank",1017397150).cljs$core$IFn$_invoke$arity$1(card2);if(cljs.core._EQ_.call(null,rank,rank2))
{return (2 - gin.local.game.count_gone.call(null,rank,goneset));
} else
{if(cljs.core._EQ_.call(null,suit,suit2))
{return gin.local.game.rate_straight.call(null,suit,gin.local.game.rank__GT_value.call(null,rank),gin.local.game.rank__GT_value.call(null,rank2),goneset);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return 0;
} else
{return null;
}
}
}
});})(rating,cards__$1,card,others,suit,rank))
,others));{
var G__18896 = (rating + card_score);
var G__18897 = others;
rating = G__18896;
cards__$1 = G__18897;
continue;
}
}
break;
}
});
gin.local.game.choosediscard = (function choosediscard(hand,gone_cards){var sorted_hand = gin.local.game.value_sorted.call(null,hand);var best = cljs.core.PersistentVector.EMPTY;var best_gin_size = 0;var hands = cljs.core.map.call(null,((function (best,best_gin_size){
return (function (p1__18898_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p1__18898_SHARP_], true),sorted_hand),p1__18898_SHARP_],null));
});})(best,best_gin_size))
,sorted_hand);while(true){
var temp__4090__auto__ = cljs.core.first.call(null,hands);if(cljs.core.truth_(temp__4090__auto__))
{var h = temp__4090__auto__;var gs = gin.local.game.gin_size.call(null,cljs.core.first.call(null,h));if((gs > best_gin_size))
{{
var G__18900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
var G__18901 = gs;
var G__18902 = cljs.core.rest.call(null,hands);
best = G__18900;
best_gin_size = G__18901;
hands = G__18902;
continue;
}
} else
{if(cljs.core._EQ_.call(null,gs,best_gin_size))
{{
var G__18903 = cljs.core.conj.call(null,best,h);
var G__18904 = best_gin_size;
var G__18905 = cljs.core.rest.call(null,hands);
best = G__18903;
best_gin_size = G__18904;
hands = G__18905;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__18906 = best;
var G__18907 = best_gin_size;
var G__18908 = cljs.core.rest.call(null,hands);
best = G__18906;
best_gin_size = G__18907;
hands = G__18908;
continue;
}
} else
{return null;
}
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,best),1))
{return cljs.core.second.call(null,cljs.core.first.call(null,best));
} else
{var gone_set = gin.local.game.cards_to_gone_cards.call(null,gone_cards);return cljs.core.second.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.comp.call(null,((function (best,best_gin_size,hands,gone_set,temp__4090__auto__){
return (function (p1__18899_SHARP_){return gin.local.game.pair_rating.call(null,p1__18899_SHARP_,gone_set);
});})(best,best_gin_size,hands,gone_set,temp__4090__auto__))
,cljs.core.first),best));
}
}
break;
}
});
gin.local.game.takediscardordeck = (function takediscardordeck(in_hand_cards,discard,gone_discards){var orig_size = gin.local.game.gin_size.call(null,in_hand_cards);var hand_with_discard = cljs.core.conj.call(null,in_hand_cards,discard);var trade_card = gin.local.game.choosediscard.call(null,hand_with_discard,gone_discards);var new_gin_cards = cljs.core.remove.call(null,((function (orig_size,hand_with_discard,trade_card){
return (function (p1__18909_SHARP_){return cljs.core._EQ_.call(null,trade_card,p1__18909_SHARP_);
});})(orig_size,hand_with_discard,trade_card))
,hand_with_discard);var new_size = gin.local.game.gin_size.call(null,new_gin_cards);if((function (){var or__16641__auto__ = (new_size > orig_size);if(or__16641__auto__)
{return or__16641__auto__;
} else
{var and__16629__auto__ = cljs.core._EQ_.call(null,new_size,orig_size);if(and__16629__auto__)
{var gone_set = gin.local.game.cards_to_gone_cards.call(null,gone_discards);return (gin.local.game.pair_rating.call(null,new_gin_cards,gone_set) > gin.local.game.pair_rating.call(null,in_hand_cards,gone_set));
} else
{return and__16629__auto__;
}
}
})())
{return new cljs.core.Keyword(null,"discard","discard",2685271056);
} else
{return new cljs.core.Keyword(null,"pile","pile",1017345188);
}
});
gin.local.game.decide_move = (function decide_move(table){var opp_hand = new cljs.core.Keyword(null,"opp-cards","opp-cards",1875090999).cljs$core$IFn$_invoke$arity$1(table);var discards = new cljs.core.Keyword(null,"discards","discards",1286668039).cljs$core$IFn$_invoke$arity$1(table);var discard = cljs.core.peek.call(null,discards);var gone_discards = cljs.core.pop.call(null,discards);return gin.local.game.takediscardordeck.call(null,opp_hand,discard,gone_discards);
});
