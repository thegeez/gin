// Compiled by ClojureScript 0.0-2173
goog.provide('datascript');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9960__auto__){var self__ = this;
var this__9960__auto____$1 = this;var h__9790__auto__ = self__.__hash;if(!((h__9790__auto__ == null)))
{return h__9790__auto__;
} else
{var h__9790__auto____$1 = cljs.core.hash_imap.call(null,this__9960__auto____$1);self__.__hash = h__9790__auto____$1;
return h__9790__auto____$1;
}
});
datascript.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9965__auto__,k__9966__auto__){var self__ = this;
var this__9965__auto____$1 = this;return cljs.core._lookup.call(null,this__9965__auto____$1,k__9966__auto__,null);
});
datascript.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9967__auto__,k11811,else__9968__auto__){var self__ = this;
var this__9967__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11811,new cljs.core.Keyword(null,"e","e",1013904343)))
{return self__.e;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11811,new cljs.core.Keyword(null,"a","a",1013904339)))
{return self__.a;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11811,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11811,new cljs.core.Keyword(null,"tx","tx",1013907958)))
{return self__.tx;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11811,new cljs.core.Keyword(null,"added","added",1106564210)))
{return self__.added;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11811,else__9968__auto__);
} else
{return null;
}
}
}
}
}
}
});
datascript.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9972__auto__,k__9973__auto__,G__11810){var self__ = this;
var this__9972__auto____$1 = this;var pred__11813 = cljs.core.keyword_identical_QMARK_;var expr__11814 = k__9973__auto__;if(cljs.core.truth_(pred__11813.call(null,new cljs.core.Keyword(null,"e","e",1013904343),expr__11814)))
{return (new datascript.Datom(G__11810,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11813.call(null,new cljs.core.Keyword(null,"a","a",1013904339),expr__11814)))
{return (new datascript.Datom(self__.e,G__11810,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11813.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__11814)))
{return (new datascript.Datom(self__.e,self__.a,G__11810,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11813.call(null,new cljs.core.Keyword(null,"tx","tx",1013907958),expr__11814)))
{return (new datascript.Datom(self__.e,self__.a,self__.v,G__11810,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11813.call(null,new cljs.core.Keyword(null,"added","added",1106564210),expr__11814)))
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,G__11810,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9973__auto__,G__11810),null));
}
}
}
}
}
});
datascript.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9979__auto__,writer__9980__auto__,opts__9981__auto__){var self__ = this;
var this__9979__auto____$1 = this;var pr_pair__9982__auto__ = (function (keyval__9983__auto__){return cljs.core.pr_sequential_writer.call(null,writer__9980__auto__,cljs.core.pr_writer,""," ","",opts__9981__auto__,keyval__9983__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__9980__auto__,pr_pair__9982__auto__,"#datascript.Datom{",", ","}",opts__9981__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1013904343),self__.e],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",1013904339),self__.a],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",1013907958),self__.tx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",1106564210),self__.added],null))], null),self__.__extmap));
});
datascript.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9970__auto__,entry__9971__auto__){var self__ = this;
var this__9970__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__9971__auto__))
{return cljs.core._assoc.call(null,this__9970__auto____$1,cljs.core._nth.call(null,entry__9971__auto__,0),cljs.core._nth.call(null,entry__9971__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9970__auto____$1,entry__9971__auto__);
}
});
datascript.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
datascript.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9977__auto__){var self__ = this;
var this__9977__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1013904343),self__.e],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",1013904339),self__.a],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",1013907958),self__.tx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",1106564210),self__.added],null))], null),self__.__extmap));
});
datascript.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9969__auto__){var self__ = this;
var this__9969__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9961__auto__,other__9962__auto__){var self__ = this;
var this__9961__auto____$1 = this;if(cljs.core.truth_((function (){var and__9367__auto__ = other__9962__auto__;if(cljs.core.truth_(and__9367__auto__))
{return ((this__9961__auto____$1.constructor === other__9962__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9961__auto____$1,other__9962__auto__));
} else
{return and__9367__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9964__auto__,G__11810){var self__ = this;
var this__9964__auto____$1 = this;return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__11810,self__.__extmap,self__.__hash));
});
datascript.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9959__auto__){var self__ = this;
var this__9959__auto____$1 = this;return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9963__auto__){var self__ = this;
var this__9963__auto____$1 = this;return self__.__meta;
});
datascript.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9974__auto__,k__9975__auto__){var self__ = this;
var this__9974__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"a","a",1013904339),null,new cljs.core.Keyword(null,"e","e",1013904343),null,new cljs.core.Keyword(null,"added","added",1106564210),null,new cljs.core.Keyword(null,"tx","tx",1013907958),null,new cljs.core.Keyword(null,"v","v",1013904360),null], null), null),k__9975__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9974__auto____$1),self__.__meta),k__9975__auto__);
} else
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9975__auto__)),null));
}
});
datascript.Datom.cljs$lang$type = true;
datascript.Datom.cljs$lang$ctorPrSeq = (function (this__9999__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/Datom");
});
datascript.Datom.cljs$lang$ctorPrWriter = (function (this__9999__auto__,writer__10000__auto__){return cljs.core._write.call(null,writer__10000__auto__,"datascript/Datom");
});
datascript.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.Datom(e,a,v,tx,added));
});
datascript.map__GT_Datom = (function map__GT_Datom(G__11812){return (new datascript.Datom(new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(G__11812),new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(G__11812),new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__11812),new cljs.core.Keyword(null,"tx","tx",1013907958).cljs$core$IFn$_invoke$arity$1(G__11812),new cljs.core.Keyword(null,"added","added",1106564210).cljs$core$IFn$_invoke$arity$1(G__11812),null,cljs.core.dissoc.call(null,G__11812,new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"tx","tx",1013907958),new cljs.core.Keyword(null,"added","added",1106564210))));
});
datascript.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});
datascript.Datom.prototype.cljs$core$IHash$ = true;
datascript.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__9379__auto__ = d__$1.__hash;if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return d__$1.__hash = cljs.core.hash_coll.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v], null));
}
});
datascript.ISearch = (function (){var obj11817 = {};return obj11817;
})();
datascript._search = (function _search(data,pattern){if((function (){var and__9367__auto__ = data;if(and__9367__auto__)
{return data.datascript$ISearch$_search$arity$2;
} else
{return and__9367__auto__;
}
})())
{return data.datascript$ISearch$_search$arity$2(data,pattern);
} else
{var x__10006__auto__ = (((data == null))?null:data);return (function (){var or__9379__auto__ = (datascript._search[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (datascript._search["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});

/**
* @constructor
* @param {*} schema
* @param {*} ea
* @param {*} av
* @param {*} max_eid
* @param {*} max_tx
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.DB = (function (schema,ea,av,max_eid,max_tx,__meta,__extmap){
this.schema = schema;
this.ea = ea;
this.av = av;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9960__auto__){var self__ = this;
var this__9960__auto____$1 = this;var h__9790__auto__ = self__.__hash;if(!((h__9790__auto__ == null)))
{return h__9790__auto__;
} else
{var h__9790__auto____$1 = cljs.core.hash_imap.call(null,this__9960__auto____$1);self__.__hash = h__9790__auto____$1;
return h__9790__auto____$1;
}
});
datascript.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9965__auto__,k__9966__auto__){var self__ = this;
var this__9965__auto____$1 = this;return cljs.core._lookup.call(null,this__9965__auto____$1,k__9966__auto__,null);
});
datascript.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9967__auto__,k11822,else__9968__auto__){var self__ = this;
var this__9967__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11822,new cljs.core.Keyword(null,"schema","schema",4400883987)))
{return self__.schema;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11822,new cljs.core.Keyword(null,"ea","ea",1013907470)))
{return self__.ea;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11822,new cljs.core.Keyword(null,"av","av",1013907367)))
{return self__.av;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11822,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841)))
{return self__.max_eid;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11822,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119)))
{return self__.max_tx;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11822,else__9968__auto__);
} else
{return null;
}
}
}
}
}
}
});
datascript.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9972__auto__,k__9973__auto__,G__11821){var self__ = this;
var this__9972__auto____$1 = this;var pred__11824 = cljs.core.keyword_identical_QMARK_;var expr__11825 = k__9973__auto__;if(cljs.core.truth_(pred__11824.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__11825)))
{return (new datascript.DB(G__11821,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11824.call(null,new cljs.core.Keyword(null,"ea","ea",1013907470),expr__11825)))
{return (new datascript.DB(self__.schema,G__11821,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11824.call(null,new cljs.core.Keyword(null,"av","av",1013907367),expr__11825)))
{return (new datascript.DB(self__.schema,self__.ea,G__11821,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11824.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),expr__11825)))
{return (new datascript.DB(self__.schema,self__.ea,self__.av,G__11821,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11824.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),expr__11825)))
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,G__11821,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9973__auto__,G__11821),null));
}
}
}
}
}
});
datascript.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9979__auto__,writer__9980__auto__,opts__9981__auto__){var self__ = this;
var this__9979__auto____$1 = this;var pr_pair__9982__auto__ = (function (keyval__9983__auto__){return cljs.core.pr_sequential_writer.call(null,writer__9980__auto__,cljs.core.pr_writer,""," ","",opts__9981__auto__,keyval__9983__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__9980__auto__,pr_pair__9982__auto__,"#datascript.DB{",", ","}",opts__9981__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ea","ea",1013907470),self__.ea],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"av","av",1013907367),self__.av],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),self__.max_tx],null))], null),self__.__extmap));
});
datascript.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9970__auto__,entry__9971__auto__){var self__ = this;
var this__9970__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__9971__auto__))
{return cljs.core._assoc.call(null,this__9970__auto____$1,cljs.core._nth.call(null,entry__9971__auto__,0),cljs.core._nth.call(null,entry__9971__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9970__auto____$1,entry__9971__auto__);
}
});
datascript.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9977__auto__){var self__ = this;
var this__9977__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ea","ea",1013907470),self__.ea],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"av","av",1013907367),self__.av],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),self__.max_tx],null))], null),self__.__extmap));
});
datascript.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9969__auto__){var self__ = this;
var this__9969__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9961__auto__,other__9962__auto__){var self__ = this;
var this__9961__auto____$1 = this;if(cljs.core.truth_((function (){var and__9367__auto__ = other__9962__auto__;if(cljs.core.truth_(and__9367__auto__))
{return ((this__9961__auto____$1.constructor === other__9962__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9961__auto____$1,other__9962__auto__));
} else
{return and__9367__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9964__auto__,G__11821){var self__ = this;
var this__9964__auto____$1 = this;return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,G__11821,self__.__extmap,self__.__hash));
});
datascript.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9959__auto__){var self__ = this;
var this__9959__auto____$1 = this;return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9963__auto__){var self__ = this;
var this__9963__auto____$1 = this;return self__.__meta;
});
datascript.DB.prototype.datascript$ISearch$ = true;
datascript.DB.prototype.datascript$ISearch$_search$arity$2 = (function (db,p__11827){var self__ = this;
var vec__11828 = p__11827;var e = cljs.core.nth.call(null,vec__11828,0,null);var a = cljs.core.nth.call(null,vec__11828,1,null);var v = cljs.core.nth.call(null,vec__11828,2,null);var tx = cljs.core.nth.call(null,vec__11828,3,null);var added = cljs.core.nth.call(null,vec__11828,4,null);var pattern = vec__11828;var db__$1 = this;var G__11829 = (function (){var G__11830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(a)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(v)?new cljs.core.Keyword(null,"+","+",1013904285):null)], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285)], null),G__11830))
{return cljs.core.filter.call(null,((function (G__11830){
return (function (p1__11818_SHARP_){return cljs.core._EQ_.call(null,v,p1__11818_SHARP_.v);
});})(G__11830))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e,a], null)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285)], null),G__11830))
{return cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),a,v], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285),null], null),G__11830))
{return cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e,a], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"+","+",1013904285),null], null),G__11830))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),a], null))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),null,null], null),G__11830))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e], null))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(a)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(v)?new cljs.core.Keyword(null,"+","+",1013904285):null)], null))].join('')));
} else
{return null;
}
}
}
}
}
}
})();var G__11829__$1 = (cljs.core.truth_(tx)?cljs.core.filter.call(null,((function (G__11829){
return (function (p1__11819_SHARP_){return cljs.core._EQ_.call(null,tx,p1__11819_SHARP_.tx);
});})(G__11829))
,G__11829):G__11829);var G__11829__$2 = (cljs.core.truth_(added)?cljs.core.filter.call(null,((function (G__11829,G__11829__$1){
return (function (p1__11820_SHARP_){return cljs.core._EQ_.call(null,added,p1__11820_SHARP_.added);
});})(G__11829,G__11829__$1))
,G__11829__$1):G__11829__$1);return G__11829__$2;
});
datascript.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9974__auto__,k__9975__auto__){var self__ = this;
var this__9974__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),null,new cljs.core.Keyword(null,"av","av",1013907367),null,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),null,new cljs.core.Keyword(null,"ea","ea",1013907470),null,new cljs.core.Keyword(null,"schema","schema",4400883987),null], null), null),k__9975__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9974__auto____$1),self__.__meta),k__9975__auto__);
} else
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9975__auto__)),null));
}
});
datascript.DB.cljs$lang$type = true;
datascript.DB.cljs$lang$ctorPrSeq = (function (this__9999__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/DB");
});
datascript.DB.cljs$lang$ctorPrWriter = (function (this__9999__auto__,writer__10000__auto__){return cljs.core._write.call(null,writer__10000__auto__,"datascript/DB");
});
datascript.__GT_DB = (function __GT_DB(schema,ea,av,max_eid,max_tx){return (new datascript.DB(schema,ea,av,max_eid,max_tx));
});
datascript.map__GT_DB = (function map__GT_DB(G__11823){return (new datascript.DB(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__11823),new cljs.core.Keyword(null,"ea","ea",1013907470).cljs$core$IFn$_invoke$arity$1(G__11823),new cljs.core.Keyword(null,"av","av",1013907367).cljs$core$IFn$_invoke$arity$1(G__11823),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841).cljs$core$IFn$_invoke$arity$1(G__11823),new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(G__11823),null,cljs.core.dissoc.call(null,G__11823,new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"ea","ea",1013907470),new cljs.core.Keyword(null,"av","av",1013907367),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),new cljs.core.Keyword(null,"max-tx","max-tx",4227685119))));
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9960__auto__){var self__ = this;
var this__9960__auto____$1 = this;var h__9790__auto__ = self__.__hash;if(!((h__9790__auto__ == null)))
{return h__9790__auto__;
} else
{var h__9790__auto____$1 = cljs.core.hash_imap.call(null,this__9960__auto____$1);self__.__hash = h__9790__auto____$1;
return h__9790__auto____$1;
}
});
datascript.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9965__auto__,k__9966__auto__){var self__ = this;
var this__9965__auto____$1 = this;return cljs.core._lookup.call(null,this__9965__auto____$1,k__9966__auto__,null);
});
datascript.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9967__auto__,k11832,else__9968__auto__){var self__ = this;
var this__9967__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11832,new cljs.core.Keyword(null,"db-before","db-before",3838846752)))
{return self__.db_before;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11832,new cljs.core.Keyword(null,"db-after","db-after",1658340159)))
{return self__.db_after;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11832,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709)))
{return self__.tx_data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11832,new cljs.core.Keyword(null,"tempids","tempids",3880764886)))
{return self__.tempids;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11832,else__9968__auto__);
} else
{return null;
}
}
}
}
}
});
datascript.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9972__auto__,k__9973__auto__,G__11831){var self__ = this;
var this__9972__auto____$1 = this;var pred__11834 = cljs.core.keyword_identical_QMARK_;var expr__11835 = k__9973__auto__;if(cljs.core.truth_(pred__11834.call(null,new cljs.core.Keyword(null,"db-before","db-before",3838846752),expr__11835)))
{return (new datascript.TxReport(G__11831,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11834.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159),expr__11835)))
{return (new datascript.TxReport(self__.db_before,G__11831,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11834.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),expr__11835)))
{return (new datascript.TxReport(self__.db_before,self__.db_after,G__11831,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11834.call(null,new cljs.core.Keyword(null,"tempids","tempids",3880764886),expr__11835)))
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__11831,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9973__auto__,G__11831),null));
}
}
}
}
});
datascript.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9979__auto__,writer__9980__auto__,opts__9981__auto__){var self__ = this;
var this__9979__auto____$1 = this;var pr_pair__9982__auto__ = (function (keyval__9983__auto__){return cljs.core.pr_sequential_writer.call(null,writer__9980__auto__,cljs.core.pr_writer,""," ","",opts__9981__auto__,keyval__9983__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__9980__auto__,pr_pair__9982__auto__,"#datascript.TxReport{",", ","}",opts__9981__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",3838846752),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",1658340159),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",3880764886),self__.tempids],null))], null),self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9970__auto__,entry__9971__auto__){var self__ = this;
var this__9970__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__9971__auto__))
{return cljs.core._assoc.call(null,this__9970__auto____$1,cljs.core._nth.call(null,entry__9971__auto__,0),cljs.core._nth.call(null,entry__9971__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9970__auto____$1,entry__9971__auto__);
}
});
datascript.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9977__auto__){var self__ = this;
var this__9977__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",3838846752),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",1658340159),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",3880764886),self__.tempids],null))], null),self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9969__auto__){var self__ = this;
var this__9969__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9961__auto__,other__9962__auto__){var self__ = this;
var this__9961__auto____$1 = this;if(cljs.core.truth_((function (){var and__9367__auto__ = other__9962__auto__;if(cljs.core.truth_(and__9367__auto__))
{return ((this__9961__auto____$1.constructor === other__9962__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9961__auto____$1,other__9962__auto__));
} else
{return and__9367__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9964__auto__,G__11831){var self__ = this;
var this__9964__auto____$1 = this;return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__11831,self__.__extmap,self__.__hash));
});
datascript.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9959__auto__){var self__ = this;
var this__9959__auto____$1 = this;return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9963__auto__){var self__ = this;
var this__9963__auto____$1 = this;return self__.__meta;
});
datascript.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9974__auto__,k__9975__auto__){var self__ = this;
var this__9974__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",3838846752),null,new cljs.core.Keyword(null,"tempids","tempids",3880764886),null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),null,new cljs.core.Keyword(null,"db-after","db-after",1658340159),null], null), null),k__9975__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9974__auto____$1),self__.__meta),k__9975__auto__);
} else
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9975__auto__)),null));
}
});
datascript.TxReport.cljs$lang$type = true;
datascript.TxReport.cljs$lang$ctorPrSeq = (function (this__9999__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/TxReport");
});
datascript.TxReport.cljs$lang$ctorPrWriter = (function (this__9999__auto__,writer__10000__auto__){return cljs.core._write.call(null,writer__10000__auto__,"datascript/TxReport");
});
datascript.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.map__GT_TxReport = (function map__GT_TxReport(G__11833){return (new datascript.TxReport(new cljs.core.Keyword(null,"db-before","db-before",3838846752).cljs$core$IFn$_invoke$arity$1(G__11833),new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(G__11833),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709).cljs$core$IFn$_invoke$arity$1(G__11833),new cljs.core.Keyword(null,"tempids","tempids",3880764886).cljs$core$IFn$_invoke$arity$1(G__11833),null,cljs.core.dissoc.call(null,G__11833,new cljs.core.Keyword(null,"db-before","db-before",3838846752),new cljs.core.Keyword(null,"db-after","db-after",1658340159),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),new cljs.core.Keyword(null,"tempids","tempids",3880764886))));
});
datascript.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",4400883987),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",1859321681)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",2499141178));
});
datascript.match_tuple = (function match_tuple(tuple,pattern){return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__11838_SHARP_,p2__11837_SHARP_){return ((p2__11837_SHARP_ == null)) || (cljs.core._EQ_.call(null,p1__11838_SHARP_,p2__11837_SHARP_));
}),tuple,pattern));
});
datascript.search = (function search(data,pattern){if((function (){var G__11843 = data;if(G__11843)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9379__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return G__11843.datascript$ISearch$;
}
})()))
{return true;
} else
{if((!G__11843.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,datascript.ISearch,G__11843);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,datascript.ISearch,G__11843);
}
})())
{return datascript._search.call(null,data,pattern);
} else
{if((function (){var or__9379__auto__ = (function (){var G__11845 = data;if(G__11845)
{var bit__10029__auto__ = (G__11845.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__10029__auto__) || (G__11845.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11845.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11845);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11845);
}
})();if(or__9379__auto__)
{return or__9379__auto__;
} else
{return data instanceof Array;
}
})())
{return cljs.core.filter.call(null,(function (p1__11839_SHARP_){return datascript.match_tuple.call(null,p1__11839_SHARP_,pattern);
}),data);
} else
{return null;
}
}
});
datascript.transact_datom = (function transact_datom(db,datom){if(cljs.core.truth_(datom.added))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),datom.e,datom.a], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),datom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),datom.a,datom.v], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),datom);
} else
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),datom.e,datom.a], null),cljs.core.disj,datom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),datom.a,datom.v], null),cljs.core.disj,datom);
}
});
datascript._resolve_eid = (function _resolve_eid(eid,db){return (db.max_eid - eid);
});
datascript.resolve_eid = (function resolve_eid(db,d){if((d.e < 0))
{return cljs.core.update_in.call(null,d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343)], null),datascript._resolve_eid,db);
} else
{return d;
}
});
datascript.entity__GT_ops = (function entity__GT_ops(db,entity){if(cljs.core.map_QMARK_.call(null,entity))
{var eid = new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(entity);var iter__10096__auto__ = (function iter__11856(s__11857){return (new cljs.core.LazySeq(null,(function (){var s__11857__$1 = s__11857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11857__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__11863 = cljs.core.first.call(null,xs__4579__auto__);var a = cljs.core.nth.call(null,vec__11863,0,null);var vs = cljs.core.nth.call(null,vec__11863,1,null);var iterys__10092__auto__ = ((function (s__11857__$1,vec__11863,a,vs,xs__4579__auto__,temp__4092__auto__){
return (function iter__11858(s__11859){return (new cljs.core.LazySeq(null,((function (s__11857__$1,vec__11863,a,vs,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11859__$1 = s__11859;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11859__$1);if(temp__4092__auto____$1)
{var s__11859__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11859__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11859__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11861 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11860 = 0;while(true){
if((i__11860 < size__10095__auto__))
{var v = cljs.core._nth.call(null,c__10094__auto__,i__11860);cljs.core.chunk_append.call(null,b__11861,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),eid,a,v], null));
{
var G__11865 = (i__11860 + 1);
i__11860 = G__11865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11861),iter__11858.call(null,cljs.core.chunk_rest.call(null,s__11859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11861),null);
}
} else
{var v = cljs.core.first.call(null,s__11859__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),eid,a,v], null),iter__11858.call(null,cljs.core.rest.call(null,s__11859__$2)));
}
} else
{return null;
}
break;
}
});})(s__11857__$1,vec__11863,a,vs,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11857__$1,vec__11863,a,vs,xs__4579__auto__,temp__4092__auto__))
;var fs__10093__auto__ = cljs.core.seq.call(null,iterys__10092__auto__.call(null,(((cljs.core.sequential_QMARK_.call(null,vs)) && (datascript.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__10093__auto__)
{return cljs.core.concat.call(null,fs__10093__auto__,iter__11856.call(null,cljs.core.rest.call(null,s__11857__$1)));
} else
{{
var G__11866 = cljs.core.rest.call(null,s__11857__$1);
s__11857__$1 = G__11866;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",1014111942)));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,entity),new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894)))
{var vec__11864 = entity;var _ = cljs.core.nth.call(null,vec__11864,0,null);var f = cljs.core.nth.call(null,vec__11864,1,null);var args = cljs.core.nthnext.call(null,vec__11864,2);return cljs.core.mapcat.call(null,(function (p1__11846_SHARP_){return entity__GT_ops.call(null,db,p1__11846_SHARP_);
}),cljs.core.apply.call(null,f,db,args));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
} else
{return null;
}
}
}
});
datascript.op__GT_tx_data = (function op__GT_tx_data(db,p__11869){var vec__11872 = p__11869;var op = cljs.core.nth.call(null,vec__11872,0,null);var e = cljs.core.nth.call(null,vec__11872,1,null);var a = cljs.core.nth.call(null,vec__11872,2,null);var v = cljs.core.nth.call(null,vec__11872,3,null);var tx = (db.max_tx + 1);var G__11873 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),G__11873))
{var datoms = datascript._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));return cljs.core.map.call(null,(function (p1__11868_SHARP_){return cljs.core.assoc.call(null,p1__11868_SHARP_,new cljs.core.Keyword(null,"tx","tx",1013907958),tx,new cljs.core.Keyword(null,"added","added",1106564210),false);
}),datoms);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",3416849171),G__11873))
{var datoms = datascript._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));return cljs.core.map.call(null,(function (p1__11867_SHARP_){return cljs.core.assoc.call(null,p1__11867_SHARP_,new cljs.core.Keyword(null,"tx","tx",1013907958),tx,new cljs.core.Keyword(null,"added","added",1106564210),false);
}),datoms);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","retract","db/retract",2112480480),G__11873))
{var temp__4092__auto__ = cljs.core.first.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4092__auto__))
{var old_datom = temp__4092__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,false)], null);
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","add","db/add",1014207040),G__11873))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",2499141178),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",4400883987),a,new cljs.core.Keyword("db","cardinality","db/cardinality",1859321681)], null))))
{if(cljs.core.empty_QMARK_.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
} else
{return null;
}
} else
{var temp__4090__auto__ = cljs.core.first.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4090__auto__))
{var old_datom = temp__4090__auto__;if(cljs.core.not_EQ_.call(null,old_datom.v,v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,old_datom.v,tx,false),datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
} else
{return null;
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{return null;
}
}
}
}
}
});
datascript.entity__GT_tx_data = (function entity__GT_tx_data(db,entity){return cljs.core.mapcat.call(null,(function (p1__11874_SHARP_){return datascript.op__GT_tx_data.call(null,db,p1__11874_SHARP_);
}),datascript.entity__GT_ops.call(null,db,entity));
});
datascript._with = (function _with(db,tx_data){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.reduce.call(null,datascript.transact_datom,db,tx_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-tx","max-tx",4227685119)], null),cljs.core.inc),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),cljs.core.reduce.call(null,cljs.core.max,db.max_eid,cljs.core.map.call(null,new cljs.core.Keyword(null,"e","e",1013904343),tx_data)));
});
datascript.parse_where = (function parse_where(where){var source = cljs.core.first.call(null,where);if(((source instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,source)))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.next.call(null,where)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),where], null);
}
});
datascript.bind_symbol = (function bind_symbol(sym,scope){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),sym))
{return null;
} else
{if((sym instanceof cljs.core.Symbol))
{return cljs.core.get.call(null,scope,sym,null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return sym;
} else
{return null;
}
}
}
});
datascript.bind_symbols = (function bind_symbols(form,scope){return cljs.core.map.call(null,(function (p1__11875_SHARP_){return datascript.bind_symbol.call(null,p1__11875_SHARP_,scope);
}),form);
});
datascript.search_datoms = (function search_datoms(source,where,scope){return datascript.search.call(null,datascript.bind_symbol.call(null,source,scope),datascript.bind_symbols.call(null,where,scope));
});
datascript.populate_scope = (function populate_scope(scope,where,datom){return cljs.core.into.call(null,scope,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__11876_SHARP_,p2__11877_SHARP_){if(((p1__11876_SHARP_ instanceof cljs.core.Symbol)) && (!(cljs.core.contains_QMARK_.call(null,scope,p1__11876_SHARP_))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11876_SHARP_,p2__11877_SHARP_], null);
} else
{return null;
}
}),where,datom)));
});
/**
* @param {...*} var_args
*/
datascript._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count.call(null,xs);return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / 2),xs),cljs.core.drop.call(null,(l / 2),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__11878){
var xs = cljs.core.seq(arglist__11878);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"false?","false?",1372554549,null),new cljs.core.Symbol(null,"true?","true?",-1529891286,null),new cljs.core.Symbol(null,"rem","rem",-1640418733,null),new cljs.core.Symbol(null,"odd?","odd?",-1637125463,null),new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null),new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null),new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"quot","quot",-1637049150,null),new cljs.core.Symbol(null,"!=","!=",-1640530443,null),new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"max","max",-1640423651,null),new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"even?","even?",-1543640034,null),new cljs.core.Symbol(null,">=",">=",-1640529544,null),new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"<=","<=",-1640529606,null),new cljs.core.Symbol(null,"dec","dec",-1640432197,null),new cljs.core.Symbol(null,"mod","mod",-1640423237,null),new cljs.core.Symbol(null,"min","min",-1640423413,null),new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"==","==",-1640529575,null),new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null)],[cljs.core.false_QMARK_,cljs.core.true_QMARK_,cljs.core.rem,cljs.core.odd_QMARK_,cljs.core._PLUS_,cljs.core.zero_QMARK_,cljs.core._STAR_,datascript._differ_QMARK_,cljs.core._,cljs.core.neg_QMARK_,cljs.core._SLASH_,cljs.core.inc,cljs.core.quot,cljs.core.not_EQ_,cljs.core._LT_,cljs.core._EQ_,cljs.core.max,cljs.core._GT_,cljs.core.even_QMARK_,cljs.core._GT__EQ_,cljs.core.pos_QMARK_,cljs.core._LT__EQ_,cljs.core.dec,cljs.core.mod,cljs.core.min,cljs.core.not_EQ_,cljs.core._EQ__EQ_,cljs.core.nil_QMARK_]);
datascript.call = (function call(p__11879,scope){var vec__11881 = p__11879;var f = cljs.core.nth.call(null,vec__11881,0,null);var args = cljs.core.nthnext.call(null,vec__11881,1);var bound_args = datascript.bind_symbols.call(null,args,scope);var f__$1 = (function (){var or__9379__auto__ = datascript.built_ins.call(null,f);if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return scope.call(null,f);
}
})();return cljs.core.apply.call(null,f__$1,bound_args);
});
datascript.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),pattern))
{return cljs.core.sequential_QMARK_.call(null,form);
} else
{if(cljs.core.sequential_QMARK_.call(null,pattern))
{return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__11888){var vec__11889 = p__11888;var pattern_el = cljs.core.nth.call(null,vec__11889,0,null);var form_el = cljs.core.nth.call(null,vec__11889,1,null);return looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.call(null,form,pattern);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return pattern.call(null,form);
} else
{return null;
}
}
}
}
}
});
datascript.collect = (function collect(f,coll){return cljs.core.reduce.call(null,(function (p1__11890_SHARP_,p2__11891_SHARP_){return clojure.set.union.call(null,p1__11890_SHARP_,f.call(null,p2__11891_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,coll);
});
datascript.bind_rule_branch = (function bind_rule_branch(branch,call_args,context){var vec__11899 = branch;var vec__11900 = cljs.core.nth.call(null,vec__11899,0,null);var rule = cljs.core.nth.call(null,vec__11900,0,null);var local_args = cljs.core.nthnext.call(null,vec__11900,1);var body = cljs.core.nthnext.call(null,vec__11899,1);var replacements = cljs.core.zipmap.call(null,local_args,call_args);var seqid = new cljs.core.Keyword(null,"__depth","__depth",2242649685).cljs$core$IFn$_invoke$arity$2(context,0);var bound_body = clojure.walk.postwalk.call(null,((function (vec__11899,vec__11900,rule,local_args,body,replacements,seqid){
return (function (p1__11892_SHARP_){if(((p1__11892_SHARP_ instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,p1__11892_SHARP_)))))
{var or__9379__auto__ = replacements.call(null,p1__11892_SHARP_);if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__11892_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else
{return p1__11892_SHARP_;
}
});})(vec__11899,vec__11900,rule,local_args,body,replacements,seqid))
,body);return cljs.core.concat.call(null,(function (){var iter__10096__auto__ = (function iter__11901(s__11902){return (new cljs.core.LazySeq(null,(function (){var s__11902__$1 = s__11902;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11902__$1);if(temp__4092__auto__)
{var s__11902__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11902__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11902__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11904 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11903 = 0;while(true){
if((i__11903 < size__10095__auto__))
{var prev_call_args = cljs.core._nth.call(null,c__10094__auto__,i__11903);cljs.core.chunk_append.call(null,b__11904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null)], null),call_args,prev_call_args)], null));
{
var G__11905 = (i__11903 + 1);
i__11903 = G__11905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11904),iter__11901.call(null,cljs.core.chunk_rest.call(null,s__11902__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11904),null);
}
} else
{var prev_call_args = cljs.core.first.call(null,s__11902__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null)], null),call_args,prev_call_args)], null),iter__11901.call(null,cljs.core.rest.call(null,s__11902__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,cljs.core.get.call(null,context,rule));
})(),bound_body);
});
datascript._q = (function _q(in_PLUS_sources,wheres,scope){while(true){
if(cljs.core.truth_(cljs.core.not_empty.call(null,in_PLUS_sources)))
{var vec__11919 = cljs.core.first.call(null,in_PLUS_sources);var in$ = cljs.core.nth.call(null,vec__11919,0,null);var source = cljs.core.nth.call(null,vec__11919,1,null);var pred__11920 = datascript.looks_like_QMARK_;var expr__11921 = in$;if(cljs.core.truth_(pred__11920.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1640531432,null),new cljs.core.Symbol(null,"...","...",-1640485849,null)], null),expr__11921)))
{return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope){
return (function (p1__11906_SHARP_){return _q.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,in$),p1__11906_SHARP_], null)], null),cljs.core.next.call(null,in_PLUS_sources)),wheres,scope);
});})(in_PLUS_sources,wheres,scope))
,source);
} else
{if(cljs.core.truth_(pred__11920.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null)], null),expr__11921)))
{return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope){
return (function (p1__11907_SHARP_){return _q.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,in$),p1__11907_SHARP_], null)], null),cljs.core.next.call(null,in_PLUS_sources)),wheres,scope);
});})(in_PLUS_sources,wheres,scope))
,source);
} else
{if(cljs.core.truth_(pred__11920.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),expr__11921)))
{{
var G__11928 = cljs.core.concat.call(null,cljs.core.zipmap.call(null,in$,source),cljs.core.next.call(null,in_PLUS_sources));
var G__11929 = wheres;
var G__11930 = scope;
in_PLUS_sources = G__11928;
wheres = G__11929;
scope = G__11930;
continue;
}
} else
{if(cljs.core.truth_(pred__11920.call(null,new cljs.core.Symbol(null,"%","%",-1640531490,null),expr__11921)))
{var rules = ((typeof source === 'string')?cljs.reader.read_string.call(null,source):source);{
var G__11931 = cljs.core.next.call(null,in_PLUS_sources);
var G__11932 = wheres;
var G__11933 = cljs.core.assoc.call(null,scope,new cljs.core.Keyword(null,"__rules","__rules",2256051337),cljs.core.group_by.call(null,cljs.core.ffirst,rules));
in_PLUS_sources = G__11931;
wheres = G__11932;
scope = G__11933;
continue;
}
} else
{if(cljs.core.truth_(pred__11920.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),expr__11921)))
{{
var G__11934 = cljs.core.next.call(null,in_PLUS_sources);
var G__11935 = wheres;
var G__11936 = cljs.core.assoc.call(null,scope,in$,source);
in_PLUS_sources = G__11934;
wheres = G__11935;
scope = G__11936;
continue;
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11921)].join('')));
}
}
}
}
}
} else
{if(cljs.core.truth_(cljs.core.not_empty.call(null,wheres)))
{var where = cljs.core.first.call(null,wheres);var temp__4090__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"__rules","__rules",2256051337).cljs$core$IFn$_invoke$arity$1(scope),cljs.core.first.call(null,where));if(cljs.core.truth_(temp__4090__auto__))
{var rule_branches = temp__4090__auto__;var vec__11923 = where;var rule = cljs.core.nth.call(null,vec__11923,0,null);var call_args = cljs.core.nthnext.call(null,vec__11923,1);var next_scope = cljs.core.update_in.call(null,cljs.core.update_in.call(null,scope,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801),rule], null),cljs.core.conj,call_args),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801),new cljs.core.Keyword(null,"__depth","__depth",2242649685)], null),cljs.core.inc);var next_wheres = cljs.core.next.call(null,wheres);return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope){
return (function (p1__11908_SHARP_){return _q.call(null,null,cljs.core.concat.call(null,datascript.bind_rule_branch.call(null,p1__11908_SHARP_,call_args,new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801).cljs$core$IFn$_invoke$arity$1(scope)),next_wheres),next_scope);
});})(in_PLUS_sources,wheres,scope))
,rule_branches);
} else
{var pred__11924 = datascript.looks_like_QMARK_;var expr__11925 = where;if(cljs.core.truth_(pred__11924.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null)], null),expr__11925)))
{if(cljs.core.truth_(datascript.call.call(null,cljs.core.first.call(null,where),scope)))
{{
var G__11937 = null;
var G__11938 = cljs.core.next.call(null,wheres);
var G__11939 = scope;
in_PLUS_sources = G__11937;
wheres = G__11938;
scope = G__11939;
continue;
}
} else
{return null;
}
} else
{if(cljs.core.truth_(pred__11924.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),new cljs.core.Symbol(null,"_","_",-1640531432,null)], null),expr__11925)))
{var res = datascript.call.call(null,cljs.core.first.call(null,where),scope);{
var G__11940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,where),res], null)], null);
var G__11941 = cljs.core.next.call(null,wheres);
var G__11942 = scope;
in_PLUS_sources = G__11940;
wheres = G__11941;
scope = G__11942;
continue;
}
} else
{if(cljs.core.truth_(pred__11924.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),expr__11925)))
{var vec__11927 = datascript.parse_where.call(null,where);var source = cljs.core.nth.call(null,vec__11927,0,null);var where__$1 = cljs.core.nth.call(null,vec__11927,1,null);var found = datascript.search_datoms.call(null,source,where__$1,scope);return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope){
return (function (p1__11909_SHARP_){return _q.call(null,null,cljs.core.next.call(null,wheres),datascript.populate_scope.call(null,scope,where__$1,p1__11909_SHARP_));
});})(in_PLUS_sources,wheres,scope))
,found);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11925)].join('')));
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([cljs.core.mapv.call(null,scope,new cljs.core.Keyword(null,"__find","__find",3824551179).cljs$core$IFn$_invoke$arity$1(scope))], true);
} else
{return null;
}
}
}
break;
}
});
datascript.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-1351833419,null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",-1640423413,null),(function() {
var G__11944 = null;
var G__11944__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.min,coll);
});
var G__11944__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x < cljs.core.last.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return acc;
} else
{return null;
}
}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__11944 = function(n,coll){
switch(arguments.length){
case 1:
return G__11944__1.call(this,n);
case 2:
return G__11944__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11944;
})()
,new cljs.core.Symbol(null,"max","max",-1640423651,null),(function() {
var G__11945 = null;
var G__11945__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.max,coll);
});
var G__11945__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x > cljs.core.first.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return acc;
} else
{return null;
}
}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__11945 = function(n,coll){
switch(arguments.length){
case 1:
return G__11945__1.call(this,n);
case 2:
return G__11945__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11945;
})()
,new cljs.core.Symbol(null,"sum","sum",-1640417276,null),(function (p1__11943_SHARP_){return cljs.core.reduce.call(null,cljs.core._PLUS_,0,p1__11943_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1637038626,null),(function() {
var G__11946 = null;
var G__11946__1 = (function (coll){return cljs.core.rand_nth.call(null,coll);
});
var G__11946__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_nth.call(null,coll);
})));
});
G__11946 = function(n,coll){
switch(arguments.length){
case 1:
return G__11946__1.call(this,n);
case 2:
return G__11946__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11946;
})()
,new cljs.core.Symbol(null,"sample","sample",1744760675,null),(function (n,coll){return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
}),new cljs.core.Symbol(null,"count","count",-1545680184,null),cljs.core.count], null);
datascript.aggr_group_key = (function aggr_group_key(find,result){return cljs.core.mapv.call(null,(function (val,sym){if(cljs.core.sequential_QMARK_.call(null,sym))
{return null;
} else
{return val;
}
}),result,find);
});
datascript._aggregate = (function _aggregate(find,scope,results){return cljs.core.mapv.call(null,(function (sym,val,i){if(cljs.core.sequential_QMARK_.call(null,sym))
{var vec__11949 = sym;var f = cljs.core.nth.call(null,vec__11949,0,null);var args = cljs.core.nthnext.call(null,vec__11949,1);var vals = cljs.core.map.call(null,((function (vec__11949,f,args){
return (function (p1__11947_SHARP_){return cljs.core.get.call(null,p1__11947_SHARP_,i);
});})(vec__11949,f,args))
,results);var args__$1 = cljs.core.concat.call(null,datascript.bind_symbols.call(null,cljs.core.butlast.call(null,args),scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null));var f__$1 = (function (){var or__9379__auto__ = datascript.built_in_aggregates.call(null,f);if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return scope.call(null,f);
}
})();return cljs.core.apply.call(null,f__$1,args__$1);
} else
{return val;
}
}),find,cljs.core.first.call(null,results),cljs.core.range.call(null));
});
datascript.aggregate = (function aggregate(query,scope,results){var find = cljs.core.concat.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query));return cljs.core.mapv.call(null,(function (p__11953){var vec__11954 = p__11953;var _ = cljs.core.nth.call(null,vec__11954,0,null);var results__$1 = cljs.core.nth.call(null,vec__11954,1,null);return datascript._aggregate.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query),scope,results__$1);
}),cljs.core.group_by.call(null,(function (p1__11950_SHARP_){return datascript.aggr_group_key.call(null,find,p1__11950_SHARP_);
}),results));
});
datascript.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4090__auto__ = cljs.core.first.call(null,qs);if(cljs.core.truth_(temp__4090__auto__))
{var q = temp__4090__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__11955 = parsed;
var G__11956 = q;
var G__11957 = cljs.core.next.call(null,qs);
parsed = G__11955;
key = G__11956;
qs = G__11957;
continue;
}
} else
{{
var G__11958 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__11959 = key;
var G__11960 = cljs.core.next.call(null,qs);
parsed = G__11958;
key = G__11959;
qs = G__11960;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.q = (function() { 
var q__delegate = function (query,sources){var query__$1 = ((cljs.core.sequential_QMARK_.call(null,query))?datascript.parse_query.call(null,query):query);var ins__GT_sources = cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$2(query__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null)], null)),sources);var find = cljs.core.concat.call(null,cljs.core.map.call(null,((function (query__$1,ins__GT_sources){
return (function (p1__11961_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__11961_SHARP_))
{return cljs.core.last.call(null,p1__11961_SHARP_);
} else
{return p1__11961_SHARP_;
}
});})(query__$1,ins__GT_sources))
,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1)),new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query__$1));var results = datascript._q.call(null,ins__GT_sources,new cljs.core.Keyword(null,"where","where",1127002201).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__find","__find",3824551179),find], null));var G__11964 = results;var G__11964__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query__$1))?cljs.core.mapv.call(null,((function (G__11964){
return (function (p1__11962_SHARP_){return cljs.core.subvec.call(null,p1__11962_SHARP_,0,cljs.core.count.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1)));
});})(G__11964))
,G__11964):G__11964);var G__11964__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1))))?datascript.aggregate.call(null,query__$1,ins__GT_sources,G__11964__$1):G__11964__$1);return G__11964__$2;
};
var q = function (query,var_args){
var sources = null;if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,query,sources);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__11965){
var query = cljs.core.first(arglist__11965);
var sources = cljs.core.rest(arglist__11965);
return q__delegate(query,sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
datascript.entity = (function entity(db,eid){var temp__4092__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),eid], null)));if(cljs.core.truth_(temp__4092__auto__))
{var attrs = temp__4092__auto__;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",1014111942),eid], null),(function (){var iter__10096__auto__ = (function iter__11974(s__11975){return (new cljs.core.LazySeq(null,(function (){var s__11975__$1 = s__11975;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11975__$1);if(temp__4092__auto____$1)
{var s__11975__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11975__$2))
{var c__10094__auto__ = cljs.core.chunk_first.call(null,s__11975__$2);var size__10095__auto__ = cljs.core.count.call(null,c__10094__auto__);var b__11977 = cljs.core.chunk_buffer.call(null,size__10095__auto__);if((function (){var i__11976 = 0;while(true){
if((i__11976 < size__10095__auto__))
{var vec__11980 = cljs.core._nth.call(null,c__10094__auto__,i__11976);var attr = cljs.core.nth.call(null,vec__11980,0,null);var datoms = cljs.core.nth.call(null,vec__11980,1,null);cljs.core.chunk_append.call(null,b__11977,((datascript.multival_QMARK_.call(null,db,attr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),datoms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.first.call(null,datoms).v], null)));
{
var G__11982 = (i__11976 + 1);
i__11976 = G__11982;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11977),iter__11974.call(null,cljs.core.chunk_rest.call(null,s__11975__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11977),null);
}
} else
{var vec__11981 = cljs.core.first.call(null,s__11975__$2);var attr = cljs.core.nth.call(null,vec__11981,0,null);var datoms = cljs.core.nth.call(null,vec__11981,1,null);return cljs.core.cons.call(null,((datascript.multival_QMARK_.call(null,db,attr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),datoms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.first.call(null,datoms).v], null)),iter__11974.call(null,cljs.core.rest.call(null,s__11975__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__10096__auto__.call(null,attrs);
})());
} else
{return null;
}
});
datascript.tx0 = 536870912;
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__11983){var vec__11985 = p__11983;var schema = cljs.core.nth.call(null,vec__11985,0,null);return (new datascript.DB(schema,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,datascript.tx0));
};
var empty_db = function (var_args){
var p__11983 = null;if (arguments.length > 0) {
  p__11983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__11983);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__11986){
var p__11983 = cljs.core.seq(arglist__11986);
return empty_db__delegate(p__11983);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__11987){var vec__11989 = p__11987;var schema = cljs.core.nth.call(null,vec__11989,0,null);return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",4090152369),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__11987 = null;if (arguments.length > 0) {
  p__11987 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__11987);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__11990){
var p__11987 = cljs.core.seq(arglist__11990);
return create_conn__delegate(p__11987);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.transact = (function transact(db,entities){var raw_datoms = cljs.core.mapcat.call(null,(function (p1__11991_SHARP_){return datascript.entity__GT_tx_data.call(null,db,p1__11991_SHARP_);
}),entities);var datoms = cljs.core.map.call(null,((function (raw_datoms){
return (function (p1__11992_SHARP_){return datascript.resolve_eid.call(null,db,p1__11992_SHARP_);
});})(raw_datoms))
,raw_datoms);var tempids = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (raw_datoms,datoms){
return (function (p1__11994_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__11994_SHARP_.e,datascript._resolve_eid.call(null,p1__11994_SHARP_.e,db)],null));
});})(raw_datoms,datoms))
,cljs.core.filter.call(null,((function (raw_datoms,datoms){
return (function (p1__11993_SHARP_){return (p1__11993_SHARP_.e < 0);
});})(raw_datoms,datoms))
,raw_datoms)));return (new datascript.TxReport(db,datascript._with.call(null,db,datoms),datoms,tempids));
});
datascript.with$ = (function with$(db,entities){return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(datascript.transact.call(null,db,entities));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,entities){var report = cljs.core.atom.call(null,null);cljs.core.swap_BANG_.call(null,conn,(function (db){var r = datascript.transact.call(null,db,entities);cljs.core.reset_BANG_.call(null,report,r);
return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(r);
}));
return cljs.core.deref.call(null,report);
});
datascript.transact_BANG_ = (function transact_BANG_(conn,entities){var report = datascript._transact_BANG_.call(null,conn,entities);var seq__12001_12007 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));var chunk__12002_12008 = null;var count__12003_12009 = 0;var i__12004_12010 = 0;while(true){
if((i__12004_12010 < count__12003_12009))
{var vec__12005_12011 = cljs.core._nth.call(null,chunk__12002_12008,i__12004_12010);var __12012 = cljs.core.nth.call(null,vec__12005_12011,0,null);var callback_12013 = cljs.core.nth.call(null,vec__12005_12011,1,null);callback_12013.call(null,report);
{
var G__12014 = seq__12001_12007;
var G__12015 = chunk__12002_12008;
var G__12016 = count__12003_12009;
var G__12017 = (i__12004_12010 + 1);
seq__12001_12007 = G__12014;
chunk__12002_12008 = G__12015;
count__12003_12009 = G__12016;
i__12004_12010 = G__12017;
continue;
}
} else
{var temp__4092__auto___12018 = cljs.core.seq.call(null,seq__12001_12007);if(temp__4092__auto___12018)
{var seq__12001_12019__$1 = temp__4092__auto___12018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12001_12019__$1))
{var c__10127__auto___12020 = cljs.core.chunk_first.call(null,seq__12001_12019__$1);{
var G__12021 = cljs.core.chunk_rest.call(null,seq__12001_12019__$1);
var G__12022 = c__10127__auto___12020;
var G__12023 = cljs.core.count.call(null,c__10127__auto___12020);
var G__12024 = 0;
seq__12001_12007 = G__12021;
chunk__12002_12008 = G__12022;
count__12003_12009 = G__12023;
i__12004_12010 = G__12024;
continue;
}
} else
{var vec__12006_12025 = cljs.core.first.call(null,seq__12001_12019__$1);var __12026 = cljs.core.nth.call(null,vec__12006_12025,0,null);var callback_12027 = cljs.core.nth.call(null,vec__12006_12025,1,null);callback_12027.call(null,report);
{
var G__12028 = cljs.core.next.call(null,seq__12001_12019__$1);
var G__12029 = null;
var G__12030 = 0;
var G__12031 = 0;
seq__12001_12007 = G__12028;
chunk__12002_12008 = G__12029;
count__12003_12009 = G__12030;
i__12004_12010 = G__12031;
continue;
}
}
} else
{}
}
break;
}
return report;
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
