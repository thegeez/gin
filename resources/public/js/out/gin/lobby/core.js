// Compiled by ClojureScript 0.0-2173
goog.provide('gin.lobby.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('quiescent');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('gin.event_source');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('gin.event_source');
goog.require('quiescent');
goog.require('gin.ui.dom_helpers');
goog.require('gin.ui.dom_helpers');
gin.lobby.core.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
gin.lobby.core.error_handler = (function error_handler(){console.log("Error, reload page");
return gin.ui.dom_helpers.show_element.call(null,gin.ui.dom_helpers.get_element.call(null,"network-header-error"),true);
});
gin.lobby.core.goto_url = (function goto_url(url){console.log("Set location to : ",url);
return window.location = url;
});
gin.lobby.core.POST_ACTION = (function POST_ACTION(url,options){return ajax.core.POST.call(null,url,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){return gin.lobby.core.error_handler.call(null);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",gin.lobby.core.csrf_token.call(null)], null)], null),options));
});
gin.lobby.core.invite = (function invite(slug){return gin.lobby.core.POST_ACTION.call(null,"/lobby/invite",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opp-slug","opp-slug",765077115),slug], null)], null));
});
gin.lobby.core.play = (function play(slug){return gin.lobby.core.POST_ACTION.call(null,"/lobby/play",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opp-slug","opp-slug",765077115),slug], null)], null));
});
gin.lobby.core.accept_play = (function accept_play(slug){return gin.lobby.core.POST_ACTION.call(null,"/lobby/start",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opp-slug","opp-slug",765077115),slug], null)], null));
});
/**
* 
*/
gin.lobby.core.Item = quiescent.component.call(null,(function (opp){return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"list-group-item"], null),(function (){var vec__20336 = (cljs.core.truth_(new cljs.core.Keyword(null,"available","available",4574969403).cljs$core$IFn$_invoke$arity$1(opp))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Play","btn-success",(function (_){return gin.lobby.core.play.call(null,new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(opp));
})], null):(cljs.core.truth_(new cljs.core.Keyword(null,"invited","invited",2973935085).cljs$core$IFn$_invoke$arity$1(opp))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Awaiting invite reply ...","btn-disabled",(function (_){return null;
})], null):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invite","btn-primary",(function (_){return gin.lobby.core.invite.call(null,new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(opp));
})], null):null)));var text = cljs.core.nth.call(null,vec__20336,0,null);var btn_class = cljs.core.nth.call(null,vec__20336,1,null);var f = cljs.core.nth.call(null,vec__20336,2,null);return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"opp-name"], null),new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(opp)),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str("btn btn-right btn-lobby-list "),cljs.core.str(btn_class)].join(''),new cljs.core.Keyword(null,"onClick","onClick",3956969051),f], null),text));
})());
}));
/**
* 
*/
gin.lobby.core.OppList = quiescent.component.call(null,(function (opps){return cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"opp-list",new cljs.core.Keyword(null,"className","className",1004015509),"list-group opp-list-frame"], null),((cljs.core.seq.call(null,opps))?cljs.core.map.call(null,(function (p1__20337_SHARP_){return gin.lobby.core.Item.call(null,cljs.core.val.call(null,p1__20337_SHARP_));
}),cljs.core.sort_by.call(null,cljs.core.key,opps)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"list-group-item"], null),"No human opponents available")], null)));
}));
gin.lobby.core.start_quiescent = (function start_quiescent(opps){cljs.core.add_watch.call(null,opps,new cljs.core.Keyword(null,"quiescent","quiescent",2379764173),(function (_,___$1,old,state){return quiescent.render.call(null,gin.lobby.core.OppList.call(null,state),gin.ui.dom_helpers.get_element.call(null,"opponent-list"));
}));
return cljs.core.swap_BANG_.call(null,opps,cljs.core.identity);
});
gin.lobby.core.main = (function main(){console.log("Hello world");
var opps = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);gin.lobby.core.start_quiescent.call(null,opps);
var source = gin.event_source.event_source.call(null,"/lobby/events",new cljs.core.Keyword(null,"on-message","on-message",1496225163),(function (event){console.log("ES event",cljs.core.pr_str.call(null,event));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"open","open",1017321916)))
{return cljs.core.reset_BANG_.call(null,opps,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"slug","slug",1017437725),new cljs.core.Keyword(null,"opps","opps",1017322262).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"opps","opps",1017322262).cljs$core$IFn$_invoke$arity$1(event)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"joined","joined",4154342075)))
{return cljs.core.swap_BANG_.call(null,opps,cljs.core.assoc,new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",1017437725),new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"username","username",748190792),new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(event)], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"invited","invited",2973935085)))
{return cljs.core.swap_BANG_.call(null,opps,cljs.core.assoc,new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",1017437725),new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"username","username",748190792),new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"invited","invited",2973935085),true], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"available","available",4574969403)))
{return cljs.core.swap_BANG_.call(null,opps,cljs.core.assoc,new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",1017437725),new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"username","username",748190792),new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"available","available",4574969403),true], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"play","play",1017347750)))
{gin.lobby.core.accept_play.call(null,new cljs.core.Keyword(null,"slug","slug",1017437725).cljs$core$IFn$_invoke$arity$1(event));
return opps;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"game-created","game-created",3250098047)))
{return gin.lobby.core.goto_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(event));
} else
{return null;
}
}
}
}
}
}
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (){return gin.lobby.core.error_handler.call(null);
}));return null;
});
goog.exportSymbol('gin.lobby.core.main', gin.lobby.core.main);
