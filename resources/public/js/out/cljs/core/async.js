// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14932 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14932 = (function (f,fn_handler,meta14933){
this.f = f;
this.fn_handler = fn_handler;
this.meta14933 = meta14933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14932.cljs$lang$type = true;
cljs.core.async.t14932.cljs$lang$ctorStr = "cljs.core.async/t14932";
cljs.core.async.t14932.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14932");
});
cljs.core.async.t14932.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14934){var self__ = this;
var _14934__$1 = this;return self__.meta14933;
});
cljs.core.async.t14932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14934,meta14933__$1){var self__ = this;
var _14934__$1 = this;return (new cljs.core.async.t14932(self__.f,self__.fn_handler,meta14933__$1));
});
cljs.core.async.__GT_t14932 = (function __GT_t14932(f__$1,fn_handler__$1,meta14933){return (new cljs.core.async.t14932(f__$1,fn_handler__$1,meta14933));
});
}
return (new cljs.core.async.t14932(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14936 = buff;if(G__14936)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9379__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return G__14936.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14936.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14936);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14936);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14937 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14937);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14937);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__10227__auto___14938 = n;var x_14939 = 0;while(true){
if((x_14939 < n__10227__auto___14938))
{(a[x_14939] = 0);
{
var G__14940 = (x_14939 + 1);
x_14939 = G__14940;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14941 = (i + 1);
i = G__14941;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14945 = (function (flag,alt_flag,meta14946){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14946 = meta14946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14945.cljs$lang$type = true;
cljs.core.async.t14945.cljs$lang$ctorStr = "cljs.core.async/t14945";
cljs.core.async.t14945.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14945");
});
cljs.core.async.t14945.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14947){var self__ = this;
var _14947__$1 = this;return self__.meta14946;
});
cljs.core.async.t14945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14947,meta14946__$1){var self__ = this;
var _14947__$1 = this;return (new cljs.core.async.t14945(self__.flag,self__.alt_flag,meta14946__$1));
});
cljs.core.async.__GT_t14945 = (function __GT_t14945(flag__$1,alt_flag__$1,meta14946){return (new cljs.core.async.t14945(flag__$1,alt_flag__$1,meta14946));
});
}
return (new cljs.core.async.t14945(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14951 = (function (cb,flag,alt_handler,meta14952){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14952 = meta14952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14951.cljs$lang$type = true;
cljs.core.async.t14951.cljs$lang$ctorStr = "cljs.core.async/t14951";
cljs.core.async.t14951.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14951");
});
cljs.core.async.t14951.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14953){var self__ = this;
var _14953__$1 = this;return self__.meta14952;
});
cljs.core.async.t14951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14953,meta14952__$1){var self__ = this;
var _14953__$1 = this;return (new cljs.core.async.t14951(self__.cb,self__.flag,self__.alt_handler,meta14952__$1));
});
cljs.core.async.__GT_t14951 = (function __GT_t14951(cb__$1,flag__$1,alt_handler__$1,meta14952){return (new cljs.core.async.t14951(cb__$1,flag__$1,alt_handler__$1,meta14952));
});
}
return (new cljs.core.async.t14951(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14954_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14954_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14955_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14955_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9379__auto__ = wport;if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14956 = (i + 1);
i = G__14956;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9379__auto__ = ret;if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__9367__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9367__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9367__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14957){var map__14959 = p__14957;var map__14959__$1 = ((cljs.core.seq_QMARK_.call(null,map__14959))?cljs.core.apply.call(null,cljs.core.hash_map,map__14959):map__14959);var opts = map__14959__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14957 = null;if (arguments.length > 1) {
  p__14957 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14957);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14960){
var ports = cljs.core.first(arglist__14960);
var p__14957 = cljs.core.rest(arglist__14960);
return alts_BANG___delegate(ports,p__14957);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14968 = (function (ch,f,map_LT_,meta14969){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14969 = meta14969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14968.cljs$lang$type = true;
cljs.core.async.t14968.cljs$lang$ctorStr = "cljs.core.async/t14968";
cljs.core.async.t14968.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14968");
});
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14971 = (function (fn1,_,meta14969,ch,f,map_LT_,meta14972){
this.fn1 = fn1;
this._ = _;
this.meta14969 = meta14969;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14972 = meta14972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14971.cljs$lang$type = true;
cljs.core.async.t14971.cljs$lang$ctorStr = "cljs.core.async/t14971";
cljs.core.async.t14971.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14971");
});
cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14961_SHARP_){return f1.call(null,(((p1__14961_SHARP_ == null))?null:self__.f.call(null,p1__14961_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14973){var self__ = this;
var _14973__$1 = this;return self__.meta14972;
});
cljs.core.async.t14971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14973,meta14972__$1){var self__ = this;
var _14973__$1 = this;return (new cljs.core.async.t14971(self__.fn1,self__._,self__.meta14969,self__.ch,self__.f,self__.map_LT_,meta14972__$1));
});
cljs.core.async.__GT_t14971 = (function __GT_t14971(fn1__$1,___$2,meta14969__$1,ch__$2,f__$2,map_LT___$2,meta14972){return (new cljs.core.async.t14971(fn1__$1,___$2,meta14969__$1,ch__$2,f__$2,map_LT___$2,meta14972));
});
}
return (new cljs.core.async.t14971(fn1,___$1,self__.meta14969,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9367__auto__ = ret;if(cljs.core.truth_(and__9367__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9367__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14970){var self__ = this;
var _14970__$1 = this;return self__.meta14969;
});
cljs.core.async.t14968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14970,meta14969__$1){var self__ = this;
var _14970__$1 = this;return (new cljs.core.async.t14968(self__.ch,self__.f,self__.map_LT_,meta14969__$1));
});
cljs.core.async.__GT_t14968 = (function __GT_t14968(ch__$1,f__$1,map_LT___$1,meta14969){return (new cljs.core.async.t14968(ch__$1,f__$1,map_LT___$1,meta14969));
});
}
return (new cljs.core.async.t14968(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14977 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14977 = (function (ch,f,map_GT_,meta14978){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14978 = meta14978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14977.cljs$lang$type = true;
cljs.core.async.t14977.cljs$lang$ctorStr = "cljs.core.async/t14977";
cljs.core.async.t14977.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14977");
});
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14979){var self__ = this;
var _14979__$1 = this;return self__.meta14978;
});
cljs.core.async.t14977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14979,meta14978__$1){var self__ = this;
var _14979__$1 = this;return (new cljs.core.async.t14977(self__.ch,self__.f,self__.map_GT_,meta14978__$1));
});
cljs.core.async.__GT_t14977 = (function __GT_t14977(ch__$1,f__$1,map_GT___$1,meta14978){return (new cljs.core.async.t14977(ch__$1,f__$1,map_GT___$1,meta14978));
});
}
return (new cljs.core.async.t14977(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14983 = (function (ch,p,filter_GT_,meta14984){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14984 = meta14984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14983.cljs$lang$type = true;
cljs.core.async.t14983.cljs$lang$ctorStr = "cljs.core.async/t14983";
cljs.core.async.t14983.cljs$lang$ctorPrWriter = (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t14983");
});
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14985){var self__ = this;
var _14985__$1 = this;return self__.meta14984;
});
cljs.core.async.t14983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14985,meta14984__$1){var self__ = this;
var _14985__$1 = this;return (new cljs.core.async.t14983(self__.ch,self__.p,self__.filter_GT_,meta14984__$1));
});
cljs.core.async.__GT_t14983 = (function __GT_t14983(ch__$1,p__$1,filter_GT___$1,meta14984){return (new cljs.core.async.t14983(ch__$1,p__$1,filter_GT___$1,meta14984));
});
}
return (new cljs.core.async.t14983(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11515__auto___15068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_15047){var state_val_15048 = (state_15047[1]);if((state_val_15048 === 1))
{var state_15047__$1 = state_15047;var statearr_15049_15069 = state_15047__$1;(statearr_15049_15069[2] = null);
(statearr_15049_15069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 2))
{var state_15047__$1 = state_15047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15047__$1,4,ch);
} else
{if((state_val_15048 === 3))
{var inst_15045 = (state_15047[2]);var state_15047__$1 = state_15047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15047__$1,inst_15045);
} else
{if((state_val_15048 === 4))
{var inst_15029 = (state_15047[7]);var inst_15029__$1 = (state_15047[2]);var inst_15030 = (inst_15029__$1 == null);var state_15047__$1 = (function (){var statearr_15050 = state_15047;(statearr_15050[7] = inst_15029__$1);
return statearr_15050;
})();if(cljs.core.truth_(inst_15030))
{var statearr_15051_15070 = state_15047__$1;(statearr_15051_15070[1] = 5);
} else
{var statearr_15052_15071 = state_15047__$1;(statearr_15052_15071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 5))
{var inst_15032 = cljs.core.async.close_BANG_.call(null,out);var state_15047__$1 = state_15047;var statearr_15053_15072 = state_15047__$1;(statearr_15053_15072[2] = inst_15032);
(statearr_15053_15072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 6))
{var inst_15029 = (state_15047[7]);var inst_15034 = p.call(null,inst_15029);var state_15047__$1 = state_15047;if(cljs.core.truth_(inst_15034))
{var statearr_15054_15073 = state_15047__$1;(statearr_15054_15073[1] = 8);
} else
{var statearr_15055_15074 = state_15047__$1;(statearr_15055_15074[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 7))
{var inst_15043 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15056_15075 = state_15047__$1;(statearr_15056_15075[2] = inst_15043);
(statearr_15056_15075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 8))
{var inst_15029 = (state_15047[7]);var state_15047__$1 = state_15047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15047__$1,11,out,inst_15029);
} else
{if((state_val_15048 === 9))
{var state_15047__$1 = state_15047;var statearr_15057_15076 = state_15047__$1;(statearr_15057_15076[2] = null);
(statearr_15057_15076[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 10))
{var inst_15040 = (state_15047[2]);var state_15047__$1 = (function (){var statearr_15058 = state_15047;(statearr_15058[8] = inst_15040);
return statearr_15058;
})();var statearr_15059_15077 = state_15047__$1;(statearr_15059_15077[2] = null);
(statearr_15059_15077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 11))
{var inst_15037 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15060_15078 = state_15047__$1;(statearr_15060_15078[2] = inst_15037);
(statearr_15060_15078[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_15064 = [null,null,null,null,null,null,null,null,null];(statearr_15064[0] = state_machine__11501__auto__);
(statearr_15064[1] = 1);
return statearr_15064;
});
var state_machine__11501__auto____1 = (function (state_15047){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_15047);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e15065){if((e15065 instanceof Object))
{var ex__11504__auto__ = e15065;var statearr_15066_15079 = state_15047;(statearr_15066_15079[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15080 = state_15047;
state_15047 = G__15080;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_15047){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_15047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_15067 = f__11516__auto__.call(null);(statearr_15067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___15068);
return statearr_15067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11515__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_15246){var state_val_15247 = (state_15246[1]);if((state_val_15247 === 1))
{var state_15246__$1 = state_15246;var statearr_15248_15289 = state_15246__$1;(statearr_15248_15289[2] = null);
(statearr_15248_15289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 2))
{var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15246__$1,4,in$);
} else
{if((state_val_15247 === 3))
{var inst_15244 = (state_15246[2]);var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15246__$1,inst_15244);
} else
{if((state_val_15247 === 4))
{var inst_15187 = (state_15246[7]);var inst_15187__$1 = (state_15246[2]);var inst_15188 = (inst_15187__$1 == null);var state_15246__$1 = (function (){var statearr_15249 = state_15246;(statearr_15249[7] = inst_15187__$1);
return statearr_15249;
})();if(cljs.core.truth_(inst_15188))
{var statearr_15250_15290 = state_15246__$1;(statearr_15250_15290[1] = 5);
} else
{var statearr_15251_15291 = state_15246__$1;(statearr_15251_15291[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 5))
{var inst_15190 = cljs.core.async.close_BANG_.call(null,out);var state_15246__$1 = state_15246;var statearr_15252_15292 = state_15246__$1;(statearr_15252_15292[2] = inst_15190);
(statearr_15252_15292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 6))
{var inst_15187 = (state_15246[7]);var inst_15196 = f.call(null,inst_15187);var inst_15197 = cljs.core.seq.call(null,inst_15196);var inst_15198 = inst_15197;var inst_15199 = null;var inst_15200 = 0;var inst_15201 = 0;var state_15246__$1 = (function (){var statearr_15253 = state_15246;(statearr_15253[8] = inst_15199);
(statearr_15253[9] = inst_15198);
(statearr_15253[10] = inst_15201);
(statearr_15253[11] = inst_15200);
return statearr_15253;
})();var statearr_15254_15293 = state_15246__$1;(statearr_15254_15293[2] = null);
(statearr_15254_15293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 7))
{var inst_15242 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15255_15294 = state_15246__$1;(statearr_15255_15294[2] = inst_15242);
(statearr_15255_15294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 8))
{var inst_15201 = (state_15246[10]);var inst_15200 = (state_15246[11]);var inst_15203 = (inst_15201 < inst_15200);var inst_15204 = inst_15203;var state_15246__$1 = state_15246;if(cljs.core.truth_(inst_15204))
{var statearr_15256_15295 = state_15246__$1;(statearr_15256_15295[1] = 10);
} else
{var statearr_15257_15296 = state_15246__$1;(statearr_15257_15296[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 9))
{var inst_15234 = (state_15246[2]);var inst_15235 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15246__$1 = (function (){var statearr_15258 = state_15246;(statearr_15258[12] = inst_15234);
return statearr_15258;
})();if(cljs.core.truth_(inst_15235))
{var statearr_15259_15297 = state_15246__$1;(statearr_15259_15297[1] = 21);
} else
{var statearr_15260_15298 = state_15246__$1;(statearr_15260_15298[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 10))
{var inst_15199 = (state_15246[8]);var inst_15201 = (state_15246[10]);var inst_15206 = cljs.core._nth.call(null,inst_15199,inst_15201);var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15246__$1,13,out,inst_15206);
} else
{if((state_val_15247 === 11))
{var inst_15212 = (state_15246[13]);var inst_15198 = (state_15246[9]);var inst_15212__$1 = cljs.core.seq.call(null,inst_15198);var state_15246__$1 = (function (){var statearr_15264 = state_15246;(statearr_15264[13] = inst_15212__$1);
return statearr_15264;
})();if(inst_15212__$1)
{var statearr_15265_15299 = state_15246__$1;(statearr_15265_15299[1] = 14);
} else
{var statearr_15266_15300 = state_15246__$1;(statearr_15266_15300[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 12))
{var inst_15232 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15267_15301 = state_15246__$1;(statearr_15267_15301[2] = inst_15232);
(statearr_15267_15301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 13))
{var inst_15199 = (state_15246[8]);var inst_15198 = (state_15246[9]);var inst_15201 = (state_15246[10]);var inst_15200 = (state_15246[11]);var inst_15208 = (state_15246[2]);var inst_15209 = (inst_15201 + 1);var tmp15261 = inst_15199;var tmp15262 = inst_15198;var tmp15263 = inst_15200;var inst_15198__$1 = tmp15262;var inst_15199__$1 = tmp15261;var inst_15200__$1 = tmp15263;var inst_15201__$1 = inst_15209;var state_15246__$1 = (function (){var statearr_15268 = state_15246;(statearr_15268[14] = inst_15208);
(statearr_15268[8] = inst_15199__$1);
(statearr_15268[9] = inst_15198__$1);
(statearr_15268[10] = inst_15201__$1);
(statearr_15268[11] = inst_15200__$1);
return statearr_15268;
})();var statearr_15269_15302 = state_15246__$1;(statearr_15269_15302[2] = null);
(statearr_15269_15302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 14))
{var inst_15212 = (state_15246[13]);var inst_15214 = cljs.core.chunked_seq_QMARK_.call(null,inst_15212);var state_15246__$1 = state_15246;if(inst_15214)
{var statearr_15270_15303 = state_15246__$1;(statearr_15270_15303[1] = 17);
} else
{var statearr_15271_15304 = state_15246__$1;(statearr_15271_15304[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 15))
{var state_15246__$1 = state_15246;var statearr_15272_15305 = state_15246__$1;(statearr_15272_15305[2] = null);
(statearr_15272_15305[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 16))
{var inst_15230 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15273_15306 = state_15246__$1;(statearr_15273_15306[2] = inst_15230);
(statearr_15273_15306[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 17))
{var inst_15212 = (state_15246[13]);var inst_15216 = cljs.core.chunk_first.call(null,inst_15212);var inst_15217 = cljs.core.chunk_rest.call(null,inst_15212);var inst_15218 = cljs.core.count.call(null,inst_15216);var inst_15198 = inst_15217;var inst_15199 = inst_15216;var inst_15200 = inst_15218;var inst_15201 = 0;var state_15246__$1 = (function (){var statearr_15274 = state_15246;(statearr_15274[8] = inst_15199);
(statearr_15274[9] = inst_15198);
(statearr_15274[10] = inst_15201);
(statearr_15274[11] = inst_15200);
return statearr_15274;
})();var statearr_15275_15307 = state_15246__$1;(statearr_15275_15307[2] = null);
(statearr_15275_15307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 18))
{var inst_15212 = (state_15246[13]);var inst_15221 = cljs.core.first.call(null,inst_15212);var state_15246__$1 = state_15246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15246__$1,20,out,inst_15221);
} else
{if((state_val_15247 === 19))
{var inst_15227 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15276_15308 = state_15246__$1;(statearr_15276_15308[2] = inst_15227);
(statearr_15276_15308[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 20))
{var inst_15212 = (state_15246[13]);var inst_15223 = (state_15246[2]);var inst_15224 = cljs.core.next.call(null,inst_15212);var inst_15198 = inst_15224;var inst_15199 = null;var inst_15200 = 0;var inst_15201 = 0;var state_15246__$1 = (function (){var statearr_15277 = state_15246;(statearr_15277[15] = inst_15223);
(statearr_15277[8] = inst_15199);
(statearr_15277[9] = inst_15198);
(statearr_15277[10] = inst_15201);
(statearr_15277[11] = inst_15200);
return statearr_15277;
})();var statearr_15278_15309 = state_15246__$1;(statearr_15278_15309[2] = null);
(statearr_15278_15309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 21))
{var state_15246__$1 = state_15246;var statearr_15279_15310 = state_15246__$1;(statearr_15279_15310[2] = null);
(statearr_15279_15310[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 22))
{var state_15246__$1 = state_15246;var statearr_15280_15311 = state_15246__$1;(statearr_15280_15311[2] = null);
(statearr_15280_15311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15247 === 23))
{var inst_15240 = (state_15246[2]);var state_15246__$1 = state_15246;var statearr_15281_15312 = state_15246__$1;(statearr_15281_15312[2] = inst_15240);
(statearr_15281_15312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_15285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15285[0] = state_machine__11501__auto__);
(statearr_15285[1] = 1);
return statearr_15285;
});
var state_machine__11501__auto____1 = (function (state_15246){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_15246);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e15286){if((e15286 instanceof Object))
{var ex__11504__auto__ = e15286;var statearr_15287_15313 = state_15246;(statearr_15287_15313[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15314 = state_15246;
state_15246 = G__15314;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_15246){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_15246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_15288 = f__11516__auto__.call(null);(statearr_15288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto__);
return statearr_15288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return c__11515__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11515__auto___15409 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_15385){var state_val_15386 = (state_15385[1]);if((state_val_15386 === 1))
{var state_15385__$1 = state_15385;var statearr_15387_15410 = state_15385__$1;(statearr_15387_15410[2] = null);
(statearr_15387_15410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 2))
{var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15385__$1,4,from);
} else
{if((state_val_15386 === 3))
{var inst_15383 = (state_15385[2]);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15385__$1,inst_15383);
} else
{if((state_val_15386 === 4))
{var inst_15364 = (state_15385[7]);var inst_15364__$1 = (state_15385[2]);var inst_15365 = (inst_15364__$1 == null);var state_15385__$1 = (function (){var statearr_15388 = state_15385;(statearr_15388[7] = inst_15364__$1);
return statearr_15388;
})();if(cljs.core.truth_(inst_15365))
{var statearr_15389_15411 = state_15385__$1;(statearr_15389_15411[1] = 5);
} else
{var statearr_15390_15412 = state_15385__$1;(statearr_15390_15412[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 5))
{var state_15385__$1 = state_15385;if(cljs.core.truth_(close_QMARK_))
{var statearr_15391_15413 = state_15385__$1;(statearr_15391_15413[1] = 8);
} else
{var statearr_15392_15414 = state_15385__$1;(statearr_15392_15414[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 6))
{var inst_15364 = (state_15385[7]);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15385__$1,11,to,inst_15364);
} else
{if((state_val_15386 === 7))
{var inst_15381 = (state_15385[2]);var state_15385__$1 = state_15385;var statearr_15393_15415 = state_15385__$1;(statearr_15393_15415[2] = inst_15381);
(statearr_15393_15415[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 8))
{var inst_15368 = cljs.core.async.close_BANG_.call(null,to);var state_15385__$1 = state_15385;var statearr_15394_15416 = state_15385__$1;(statearr_15394_15416[2] = inst_15368);
(statearr_15394_15416[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 9))
{var state_15385__$1 = state_15385;var statearr_15395_15417 = state_15385__$1;(statearr_15395_15417[2] = null);
(statearr_15395_15417[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 10))
{var inst_15371 = (state_15385[2]);var state_15385__$1 = state_15385;var statearr_15396_15418 = state_15385__$1;(statearr_15396_15418[2] = inst_15371);
(statearr_15396_15418[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 11))
{var inst_15374 = (state_15385[2]);var state_15385__$1 = state_15385;if(cljs.core.truth_(inst_15374))
{var statearr_15397_15419 = state_15385__$1;(statearr_15397_15419[1] = 12);
} else
{var statearr_15398_15420 = state_15385__$1;(statearr_15398_15420[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 12))
{var state_15385__$1 = state_15385;var statearr_15399_15421 = state_15385__$1;(statearr_15399_15421[2] = null);
(statearr_15399_15421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 13))
{var state_15385__$1 = state_15385;var statearr_15400_15422 = state_15385__$1;(statearr_15400_15422[2] = null);
(statearr_15400_15422[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 14))
{var inst_15379 = (state_15385[2]);var state_15385__$1 = state_15385;var statearr_15401_15423 = state_15385__$1;(statearr_15401_15423[2] = inst_15379);
(statearr_15401_15423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_15405 = [null,null,null,null,null,null,null,null];(statearr_15405[0] = state_machine__11501__auto__);
(statearr_15405[1] = 1);
return statearr_15405;
});
var state_machine__11501__auto____1 = (function (state_15385){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_15385);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e15406){if((e15406 instanceof Object))
{var ex__11504__auto__ = e15406;var statearr_15407_15424 = state_15385;(statearr_15407_15424[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15385);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15425 = state_15385;
state_15385 = G__15425;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_15385){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_15385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_15408 = f__11516__auto__.call(null);(statearr_15408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___15409);
return statearr_15408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11515__auto___15526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_15501){var state_val_15502 = (state_15501[1]);if((state_val_15502 === 1))
{var state_15501__$1 = state_15501;var statearr_15503_15527 = state_15501__$1;(statearr_15503_15527[2] = null);
(statearr_15503_15527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 2))
{var state_15501__$1 = state_15501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15501__$1,4,ch);
} else
{if((state_val_15502 === 3))
{var inst_15499 = (state_15501[2]);var state_15501__$1 = state_15501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15501__$1,inst_15499);
} else
{if((state_val_15502 === 4))
{var inst_15478 = (state_15501[7]);var inst_15478__$1 = (state_15501[2]);var inst_15479 = (inst_15478__$1 == null);var state_15501__$1 = (function (){var statearr_15504 = state_15501;(statearr_15504[7] = inst_15478__$1);
return statearr_15504;
})();if(cljs.core.truth_(inst_15479))
{var statearr_15505_15528 = state_15501__$1;(statearr_15505_15528[1] = 5);
} else
{var statearr_15506_15529 = state_15501__$1;(statearr_15506_15529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 5))
{var inst_15481 = cljs.core.async.close_BANG_.call(null,tc);var inst_15482 = cljs.core.async.close_BANG_.call(null,fc);var state_15501__$1 = (function (){var statearr_15507 = state_15501;(statearr_15507[8] = inst_15481);
return statearr_15507;
})();var statearr_15508_15530 = state_15501__$1;(statearr_15508_15530[2] = inst_15482);
(statearr_15508_15530[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 6))
{var inst_15478 = (state_15501[7]);var inst_15484 = p.call(null,inst_15478);var state_15501__$1 = state_15501;if(cljs.core.truth_(inst_15484))
{var statearr_15509_15531 = state_15501__$1;(statearr_15509_15531[1] = 9);
} else
{var statearr_15510_15532 = state_15501__$1;(statearr_15510_15532[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 7))
{var inst_15497 = (state_15501[2]);var state_15501__$1 = state_15501;var statearr_15511_15533 = state_15501__$1;(statearr_15511_15533[2] = inst_15497);
(statearr_15511_15533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 8))
{var inst_15490 = (state_15501[2]);var state_15501__$1 = state_15501;if(cljs.core.truth_(inst_15490))
{var statearr_15512_15534 = state_15501__$1;(statearr_15512_15534[1] = 12);
} else
{var statearr_15513_15535 = state_15501__$1;(statearr_15513_15535[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 9))
{var state_15501__$1 = state_15501;var statearr_15514_15536 = state_15501__$1;(statearr_15514_15536[2] = tc);
(statearr_15514_15536[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 10))
{var state_15501__$1 = state_15501;var statearr_15515_15537 = state_15501__$1;(statearr_15515_15537[2] = fc);
(statearr_15515_15537[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 11))
{var inst_15478 = (state_15501[7]);var inst_15488 = (state_15501[2]);var state_15501__$1 = state_15501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15501__$1,8,inst_15488,inst_15478);
} else
{if((state_val_15502 === 12))
{var state_15501__$1 = state_15501;var statearr_15516_15538 = state_15501__$1;(statearr_15516_15538[2] = null);
(statearr_15516_15538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 13))
{var state_15501__$1 = state_15501;var statearr_15517_15539 = state_15501__$1;(statearr_15517_15539[2] = null);
(statearr_15517_15539[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15502 === 14))
{var inst_15495 = (state_15501[2]);var state_15501__$1 = state_15501;var statearr_15518_15540 = state_15501__$1;(statearr_15518_15540[2] = inst_15495);
(statearr_15518_15540[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_15522 = [null,null,null,null,null,null,null,null,null];(statearr_15522[0] = state_machine__11501__auto__);
(statearr_15522[1] = 1);
return statearr_15522;
});
var state_machine__11501__auto____1 = (function (state_15501){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_15501);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e15523){if((e15523 instanceof Object))
{var ex__11504__auto__ = e15523;var statearr_15524_15541 = state_15501;(statearr_15524_15541[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15542 = state_15501;
state_15501 = G__15542;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_15501){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_15501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_15525 = f__11516__auto__.call(null);(statearr_15525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___15526);
return statearr_15525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11515__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_15589){var state_val_15590 = (state_15589[1]);if((state_val_15590 === 7))
{var inst_15585 = (state_15589[2]);var state_15589__$1 = state_15589;var statearr_15591_15607 = state_15589__$1;(statearr_15591_15607[2] = inst_15585);
(statearr_15591_15607[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15590 === 6))
{var inst_15575 = (state_15589[7]);var inst_15578 = (state_15589[8]);var inst_15582 = f.call(null,inst_15575,inst_15578);var inst_15575__$1 = inst_15582;var state_15589__$1 = (function (){var statearr_15592 = state_15589;(statearr_15592[7] = inst_15575__$1);
return statearr_15592;
})();var statearr_15593_15608 = state_15589__$1;(statearr_15593_15608[2] = null);
(statearr_15593_15608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15590 === 5))
{var inst_15575 = (state_15589[7]);var state_15589__$1 = state_15589;var statearr_15594_15609 = state_15589__$1;(statearr_15594_15609[2] = inst_15575);
(statearr_15594_15609[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15590 === 4))
{var inst_15578 = (state_15589[8]);var inst_15578__$1 = (state_15589[2]);var inst_15579 = (inst_15578__$1 == null);var state_15589__$1 = (function (){var statearr_15595 = state_15589;(statearr_15595[8] = inst_15578__$1);
return statearr_15595;
})();if(cljs.core.truth_(inst_15579))
{var statearr_15596_15610 = state_15589__$1;(statearr_15596_15610[1] = 5);
} else
{var statearr_15597_15611 = state_15589__$1;(statearr_15597_15611[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15590 === 3))
{var inst_15587 = (state_15589[2]);var state_15589__$1 = state_15589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15589__$1,inst_15587);
} else
{if((state_val_15590 === 2))
{var state_15589__$1 = state_15589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15589__$1,4,ch);
} else
{if((state_val_15590 === 1))
{var inst_15575 = init;var state_15589__$1 = (function (){var statearr_15598 = state_15589;(statearr_15598[7] = inst_15575);
return statearr_15598;
})();var statearr_15599_15612 = state_15589__$1;(statearr_15599_15612[2] = null);
(statearr_15599_15612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_15603 = [null,null,null,null,null,null,null,null,null];(statearr_15603[0] = state_machine__11501__auto__);
(statearr_15603[1] = 1);
return statearr_15603;
});
var state_machine__11501__auto____1 = (function (state_15589){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_15589);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e15604){if((e15604 instanceof Object))
{var ex__11504__auto__ = e15604;var statearr_15605_15613 = state_15589;(statearr_15605_15613[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15614 = state_15589;
state_15589 = G__15614;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_15589){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_15589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_15606 = f__11516__auto__.call(null);(statearr_15606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto__);
return statearr_15606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return c__11515__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11515__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_15688){var state_val_15689 = (state_15688[1]);if((state_val_15689 === 1))
{var inst_15664 = cljs.core.seq.call(null,coll);var inst_15665 = inst_15664;var state_15688__$1 = (function (){var statearr_15690 = state_15688;(statearr_15690[7] = inst_15665);
return statearr_15690;
})();var statearr_15691_15713 = state_15688__$1;(statearr_15691_15713[2] = null);
(statearr_15691_15713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 2))
{var inst_15665 = (state_15688[7]);var state_15688__$1 = state_15688;if(cljs.core.truth_(inst_15665))
{var statearr_15692_15714 = state_15688__$1;(statearr_15692_15714[1] = 4);
} else
{var statearr_15693_15715 = state_15688__$1;(statearr_15693_15715[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 3))
{var inst_15686 = (state_15688[2]);var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15688__$1,inst_15686);
} else
{if((state_val_15689 === 4))
{var inst_15665 = (state_15688[7]);var inst_15668 = cljs.core.first.call(null,inst_15665);var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15688__$1,7,ch,inst_15668);
} else
{if((state_val_15689 === 5))
{var inst_15665 = (state_15688[7]);var state_15688__$1 = state_15688;var statearr_15694_15716 = state_15688__$1;(statearr_15694_15716[2] = inst_15665);
(statearr_15694_15716[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 6))
{var inst_15673 = (state_15688[2]);var state_15688__$1 = state_15688;if(cljs.core.truth_(inst_15673))
{var statearr_15695_15717 = state_15688__$1;(statearr_15695_15717[1] = 8);
} else
{var statearr_15696_15718 = state_15688__$1;(statearr_15696_15718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 7))
{var inst_15670 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15697_15719 = state_15688__$1;(statearr_15697_15719[2] = inst_15670);
(statearr_15697_15719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 8))
{var inst_15665 = (state_15688[7]);var inst_15675 = cljs.core.next.call(null,inst_15665);var inst_15665__$1 = inst_15675;var state_15688__$1 = (function (){var statearr_15698 = state_15688;(statearr_15698[7] = inst_15665__$1);
return statearr_15698;
})();var statearr_15699_15720 = state_15688__$1;(statearr_15699_15720[2] = null);
(statearr_15699_15720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 9))
{var state_15688__$1 = state_15688;if(cljs.core.truth_(close_QMARK_))
{var statearr_15700_15721 = state_15688__$1;(statearr_15700_15721[1] = 11);
} else
{var statearr_15701_15722 = state_15688__$1;(statearr_15701_15722[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 10))
{var inst_15684 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15702_15723 = state_15688__$1;(statearr_15702_15723[2] = inst_15684);
(statearr_15702_15723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 11))
{var inst_15679 = cljs.core.async.close_BANG_.call(null,ch);var state_15688__$1 = state_15688;var statearr_15703_15724 = state_15688__$1;(statearr_15703_15724[2] = inst_15679);
(statearr_15703_15724[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 12))
{var state_15688__$1 = state_15688;var statearr_15704_15725 = state_15688__$1;(statearr_15704_15725[2] = null);
(statearr_15704_15725[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 13))
{var inst_15682 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15705_15726 = state_15688__$1;(statearr_15705_15726[2] = inst_15682);
(statearr_15705_15726[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_15709 = [null,null,null,null,null,null,null,null];(statearr_15709[0] = state_machine__11501__auto__);
(statearr_15709[1] = 1);
return statearr_15709;
});
var state_machine__11501__auto____1 = (function (state_15688){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_15688);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e15710){if((e15710 instanceof Object))
{var ex__11504__auto__ = e15710;var statearr_15711_15727 = state_15688;(statearr_15711_15727[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15728 = state_15688;
state_15688 = G__15728;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_15688){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_15688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_15712 = f__11516__auto__.call(null);(statearr_15712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto__);
return statearr_15712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return c__11515__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15730 = {};return obj15730;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9367__auto__ = _;if(and__9367__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9367__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10006__auto__ = (((_ == null))?null:_);return (function (){var or__9379__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15732 = {};return obj15732;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15954 = (function (cs,ch,mult,meta15955){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15955 = meta15955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15954.cljs$lang$type = true;
cljs.core.async.t15954.cljs$lang$ctorStr = "cljs.core.async/t15954";
cljs.core.async.t15954.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t15954");
});})(cs))
;
cljs.core.async.t15954.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15954.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15954.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15954.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15954.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15956){var self__ = this;
var _15956__$1 = this;return self__.meta15955;
});})(cs))
;
cljs.core.async.t15954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15956,meta15955__$1){var self__ = this;
var _15956__$1 = this;return (new cljs.core.async.t15954(self__.cs,self__.ch,self__.mult,meta15955__$1));
});})(cs))
;
cljs.core.async.__GT_t15954 = ((function (cs){
return (function __GT_t15954(cs__$1,ch__$1,mult__$1,meta15955){return (new cljs.core.async.t15954(cs__$1,ch__$1,mult__$1,meta15955));
});})(cs))
;
}
return (new cljs.core.async.t15954(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11515__auto___16175 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_16087){var state_val_16088 = (state_16087[1]);if((state_val_16088 === 32))
{var inst_16027 = (state_16087[7]);var inst_16029 = (state_16087[8]);var inst_16028 = (state_16087[9]);var inst_16030 = (state_16087[10]);var inst_16042 = (state_16087[2]);var inst_16043 = (inst_16030 + 1);var tmp16089 = inst_16027;var tmp16090 = inst_16029;var tmp16091 = inst_16028;var inst_16027__$1 = tmp16089;var inst_16028__$1 = tmp16091;var inst_16029__$1 = tmp16090;var inst_16030__$1 = inst_16043;var state_16087__$1 = (function (){var statearr_16092 = state_16087;(statearr_16092[7] = inst_16027__$1);
(statearr_16092[8] = inst_16029__$1);
(statearr_16092[9] = inst_16028__$1);
(statearr_16092[10] = inst_16030__$1);
(statearr_16092[11] = inst_16042);
return statearr_16092;
})();var statearr_16093_16176 = state_16087__$1;(statearr_16093_16176[2] = null);
(statearr_16093_16176[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 1))
{var state_16087__$1 = state_16087;var statearr_16094_16177 = state_16087__$1;(statearr_16094_16177[2] = null);
(statearr_16094_16177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 33))
{var inst_16046 = (state_16087[12]);var inst_16048 = cljs.core.chunked_seq_QMARK_.call(null,inst_16046);var state_16087__$1 = state_16087;if(inst_16048)
{var statearr_16095_16178 = state_16087__$1;(statearr_16095_16178[1] = 36);
} else
{var statearr_16096_16179 = state_16087__$1;(statearr_16096_16179[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 2))
{var state_16087__$1 = state_16087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16087__$1,4,ch);
} else
{if((state_val_16088 === 34))
{var state_16087__$1 = state_16087;var statearr_16097_16180 = state_16087__$1;(statearr_16097_16180[2] = null);
(statearr_16097_16180[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 3))
{var inst_16085 = (state_16087[2]);var state_16087__$1 = state_16087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16087__$1,inst_16085);
} else
{if((state_val_16088 === 35))
{var inst_16069 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16098_16181 = state_16087__$1;(statearr_16098_16181[2] = inst_16069);
(statearr_16098_16181[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 4))
{var inst_15959 = (state_16087[13]);var inst_15959__$1 = (state_16087[2]);var inst_15960 = (inst_15959__$1 == null);var state_16087__$1 = (function (){var statearr_16099 = state_16087;(statearr_16099[13] = inst_15959__$1);
return statearr_16099;
})();if(cljs.core.truth_(inst_15960))
{var statearr_16100_16182 = state_16087__$1;(statearr_16100_16182[1] = 5);
} else
{var statearr_16101_16183 = state_16087__$1;(statearr_16101_16183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 36))
{var inst_16046 = (state_16087[12]);var inst_16050 = cljs.core.chunk_first.call(null,inst_16046);var inst_16051 = cljs.core.chunk_rest.call(null,inst_16046);var inst_16052 = cljs.core.count.call(null,inst_16050);var inst_16027 = inst_16051;var inst_16028 = inst_16050;var inst_16029 = inst_16052;var inst_16030 = 0;var state_16087__$1 = (function (){var statearr_16102 = state_16087;(statearr_16102[7] = inst_16027);
(statearr_16102[8] = inst_16029);
(statearr_16102[9] = inst_16028);
(statearr_16102[10] = inst_16030);
return statearr_16102;
})();var statearr_16103_16184 = state_16087__$1;(statearr_16103_16184[2] = null);
(statearr_16103_16184[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 5))
{var inst_15966 = cljs.core.deref.call(null,cs);var inst_15967 = cljs.core.seq.call(null,inst_15966);var inst_15968 = inst_15967;var inst_15969 = null;var inst_15970 = 0;var inst_15971 = 0;var state_16087__$1 = (function (){var statearr_16104 = state_16087;(statearr_16104[14] = inst_15971);
(statearr_16104[15] = inst_15970);
(statearr_16104[16] = inst_15968);
(statearr_16104[17] = inst_15969);
return statearr_16104;
})();var statearr_16105_16185 = state_16087__$1;(statearr_16105_16185[2] = null);
(statearr_16105_16185[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 37))
{var inst_15959 = (state_16087[13]);var inst_16046 = (state_16087[12]);var inst_16055 = (state_16087[18]);var inst_16055__$1 = cljs.core.first.call(null,inst_16046);var inst_16056 = cljs.core.async.put_BANG_.call(null,inst_16055__$1,inst_15959,done);var state_16087__$1 = (function (){var statearr_16106 = state_16087;(statearr_16106[18] = inst_16055__$1);
return statearr_16106;
})();if(cljs.core.truth_(inst_16056))
{var statearr_16107_16186 = state_16087__$1;(statearr_16107_16186[1] = 39);
} else
{var statearr_16108_16187 = state_16087__$1;(statearr_16108_16187[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 6))
{var inst_16019 = (state_16087[19]);var inst_16018 = cljs.core.deref.call(null,cs);var inst_16019__$1 = cljs.core.keys.call(null,inst_16018);var inst_16020 = cljs.core.count.call(null,inst_16019__$1);var inst_16021 = cljs.core.reset_BANG_.call(null,dctr,inst_16020);var inst_16026 = cljs.core.seq.call(null,inst_16019__$1);var inst_16027 = inst_16026;var inst_16028 = null;var inst_16029 = 0;var inst_16030 = 0;var state_16087__$1 = (function (){var statearr_16109 = state_16087;(statearr_16109[7] = inst_16027);
(statearr_16109[20] = inst_16021);
(statearr_16109[8] = inst_16029);
(statearr_16109[9] = inst_16028);
(statearr_16109[10] = inst_16030);
(statearr_16109[19] = inst_16019__$1);
return statearr_16109;
})();var statearr_16110_16188 = state_16087__$1;(statearr_16110_16188[2] = null);
(statearr_16110_16188[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 38))
{var inst_16066 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16111_16189 = state_16087__$1;(statearr_16111_16189[2] = inst_16066);
(statearr_16111_16189[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 7))
{var inst_16083 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16112_16190 = state_16087__$1;(statearr_16112_16190[2] = inst_16083);
(statearr_16112_16190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 39))
{var state_16087__$1 = state_16087;var statearr_16113_16191 = state_16087__$1;(statearr_16113_16191[2] = null);
(statearr_16113_16191[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 8))
{var inst_15971 = (state_16087[14]);var inst_15970 = (state_16087[15]);var inst_15973 = (inst_15971 < inst_15970);var inst_15974 = inst_15973;var state_16087__$1 = state_16087;if(cljs.core.truth_(inst_15974))
{var statearr_16114_16192 = state_16087__$1;(statearr_16114_16192[1] = 10);
} else
{var statearr_16115_16193 = state_16087__$1;(statearr_16115_16193[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 40))
{var inst_16055 = (state_16087[18]);var inst_16059 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16060 = cljs.core.async.untap_STAR_.call(null,m,inst_16055);var state_16087__$1 = (function (){var statearr_16116 = state_16087;(statearr_16116[21] = inst_16059);
return statearr_16116;
})();var statearr_16117_16194 = state_16087__$1;(statearr_16117_16194[2] = inst_16060);
(statearr_16117_16194[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 9))
{var inst_16016 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16118_16195 = state_16087__$1;(statearr_16118_16195[2] = inst_16016);
(statearr_16118_16195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 41))
{var inst_16046 = (state_16087[12]);var inst_16062 = (state_16087[2]);var inst_16063 = cljs.core.next.call(null,inst_16046);var inst_16027 = inst_16063;var inst_16028 = null;var inst_16029 = 0;var inst_16030 = 0;var state_16087__$1 = (function (){var statearr_16119 = state_16087;(statearr_16119[7] = inst_16027);
(statearr_16119[8] = inst_16029);
(statearr_16119[9] = inst_16028);
(statearr_16119[10] = inst_16030);
(statearr_16119[22] = inst_16062);
return statearr_16119;
})();var statearr_16120_16196 = state_16087__$1;(statearr_16120_16196[2] = null);
(statearr_16120_16196[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 10))
{var inst_15971 = (state_16087[14]);var inst_15969 = (state_16087[17]);var inst_15977 = cljs.core._nth.call(null,inst_15969,inst_15971);var inst_15978 = cljs.core.nth.call(null,inst_15977,0,null);var inst_15979 = cljs.core.nth.call(null,inst_15977,1,null);var state_16087__$1 = (function (){var statearr_16121 = state_16087;(statearr_16121[23] = inst_15978);
return statearr_16121;
})();if(cljs.core.truth_(inst_15979))
{var statearr_16122_16197 = state_16087__$1;(statearr_16122_16197[1] = 13);
} else
{var statearr_16123_16198 = state_16087__$1;(statearr_16123_16198[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 42))
{var state_16087__$1 = state_16087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16087__$1,45,dchan);
} else
{if((state_val_16088 === 11))
{var inst_15968 = (state_16087[16]);var inst_15988 = (state_16087[24]);var inst_15988__$1 = cljs.core.seq.call(null,inst_15968);var state_16087__$1 = (function (){var statearr_16124 = state_16087;(statearr_16124[24] = inst_15988__$1);
return statearr_16124;
})();if(inst_15988__$1)
{var statearr_16125_16199 = state_16087__$1;(statearr_16125_16199[1] = 16);
} else
{var statearr_16126_16200 = state_16087__$1;(statearr_16126_16200[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 43))
{var state_16087__$1 = state_16087;var statearr_16127_16201 = state_16087__$1;(statearr_16127_16201[2] = null);
(statearr_16127_16201[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 12))
{var inst_16014 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16128_16202 = state_16087__$1;(statearr_16128_16202[2] = inst_16014);
(statearr_16128_16202[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 44))
{var inst_16080 = (state_16087[2]);var state_16087__$1 = (function (){var statearr_16129 = state_16087;(statearr_16129[25] = inst_16080);
return statearr_16129;
})();var statearr_16130_16203 = state_16087__$1;(statearr_16130_16203[2] = null);
(statearr_16130_16203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 13))
{var inst_15978 = (state_16087[23]);var inst_15981 = cljs.core.async.close_BANG_.call(null,inst_15978);var state_16087__$1 = state_16087;var statearr_16131_16204 = state_16087__$1;(statearr_16131_16204[2] = inst_15981);
(statearr_16131_16204[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 45))
{var inst_16077 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16135_16205 = state_16087__$1;(statearr_16135_16205[2] = inst_16077);
(statearr_16135_16205[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 14))
{var state_16087__$1 = state_16087;var statearr_16136_16206 = state_16087__$1;(statearr_16136_16206[2] = null);
(statearr_16136_16206[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 15))
{var inst_15971 = (state_16087[14]);var inst_15970 = (state_16087[15]);var inst_15968 = (state_16087[16]);var inst_15969 = (state_16087[17]);var inst_15984 = (state_16087[2]);var inst_15985 = (inst_15971 + 1);var tmp16132 = inst_15970;var tmp16133 = inst_15968;var tmp16134 = inst_15969;var inst_15968__$1 = tmp16133;var inst_15969__$1 = tmp16134;var inst_15970__$1 = tmp16132;var inst_15971__$1 = inst_15985;var state_16087__$1 = (function (){var statearr_16137 = state_16087;(statearr_16137[14] = inst_15971__$1);
(statearr_16137[15] = inst_15970__$1);
(statearr_16137[26] = inst_15984);
(statearr_16137[16] = inst_15968__$1);
(statearr_16137[17] = inst_15969__$1);
return statearr_16137;
})();var statearr_16138_16207 = state_16087__$1;(statearr_16138_16207[2] = null);
(statearr_16138_16207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 16))
{var inst_15988 = (state_16087[24]);var inst_15990 = cljs.core.chunked_seq_QMARK_.call(null,inst_15988);var state_16087__$1 = state_16087;if(inst_15990)
{var statearr_16139_16208 = state_16087__$1;(statearr_16139_16208[1] = 19);
} else
{var statearr_16140_16209 = state_16087__$1;(statearr_16140_16209[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 17))
{var state_16087__$1 = state_16087;var statearr_16141_16210 = state_16087__$1;(statearr_16141_16210[2] = null);
(statearr_16141_16210[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 18))
{var inst_16012 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16142_16211 = state_16087__$1;(statearr_16142_16211[2] = inst_16012);
(statearr_16142_16211[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 19))
{var inst_15988 = (state_16087[24]);var inst_15992 = cljs.core.chunk_first.call(null,inst_15988);var inst_15993 = cljs.core.chunk_rest.call(null,inst_15988);var inst_15994 = cljs.core.count.call(null,inst_15992);var inst_15968 = inst_15993;var inst_15969 = inst_15992;var inst_15970 = inst_15994;var inst_15971 = 0;var state_16087__$1 = (function (){var statearr_16143 = state_16087;(statearr_16143[14] = inst_15971);
(statearr_16143[15] = inst_15970);
(statearr_16143[16] = inst_15968);
(statearr_16143[17] = inst_15969);
return statearr_16143;
})();var statearr_16144_16212 = state_16087__$1;(statearr_16144_16212[2] = null);
(statearr_16144_16212[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 20))
{var inst_15988 = (state_16087[24]);var inst_15998 = cljs.core.first.call(null,inst_15988);var inst_15999 = cljs.core.nth.call(null,inst_15998,0,null);var inst_16000 = cljs.core.nth.call(null,inst_15998,1,null);var state_16087__$1 = (function (){var statearr_16145 = state_16087;(statearr_16145[27] = inst_15999);
return statearr_16145;
})();if(cljs.core.truth_(inst_16000))
{var statearr_16146_16213 = state_16087__$1;(statearr_16146_16213[1] = 22);
} else
{var statearr_16147_16214 = state_16087__$1;(statearr_16147_16214[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 21))
{var inst_16009 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16148_16215 = state_16087__$1;(statearr_16148_16215[2] = inst_16009);
(statearr_16148_16215[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 22))
{var inst_15999 = (state_16087[27]);var inst_16002 = cljs.core.async.close_BANG_.call(null,inst_15999);var state_16087__$1 = state_16087;var statearr_16149_16216 = state_16087__$1;(statearr_16149_16216[2] = inst_16002);
(statearr_16149_16216[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 23))
{var state_16087__$1 = state_16087;var statearr_16150_16217 = state_16087__$1;(statearr_16150_16217[2] = null);
(statearr_16150_16217[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 24))
{var inst_15988 = (state_16087[24]);var inst_16005 = (state_16087[2]);var inst_16006 = cljs.core.next.call(null,inst_15988);var inst_15968 = inst_16006;var inst_15969 = null;var inst_15970 = 0;var inst_15971 = 0;var state_16087__$1 = (function (){var statearr_16151 = state_16087;(statearr_16151[14] = inst_15971);
(statearr_16151[15] = inst_15970);
(statearr_16151[16] = inst_15968);
(statearr_16151[17] = inst_15969);
(statearr_16151[28] = inst_16005);
return statearr_16151;
})();var statearr_16152_16218 = state_16087__$1;(statearr_16152_16218[2] = null);
(statearr_16152_16218[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 25))
{var inst_16029 = (state_16087[8]);var inst_16030 = (state_16087[10]);var inst_16032 = (inst_16030 < inst_16029);var inst_16033 = inst_16032;var state_16087__$1 = state_16087;if(cljs.core.truth_(inst_16033))
{var statearr_16153_16219 = state_16087__$1;(statearr_16153_16219[1] = 27);
} else
{var statearr_16154_16220 = state_16087__$1;(statearr_16154_16220[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 26))
{var inst_16019 = (state_16087[19]);var inst_16073 = (state_16087[2]);var inst_16074 = cljs.core.seq.call(null,inst_16019);var state_16087__$1 = (function (){var statearr_16155 = state_16087;(statearr_16155[29] = inst_16073);
return statearr_16155;
})();if(inst_16074)
{var statearr_16156_16221 = state_16087__$1;(statearr_16156_16221[1] = 42);
} else
{var statearr_16157_16222 = state_16087__$1;(statearr_16157_16222[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 27))
{var inst_15959 = (state_16087[13]);var inst_16035 = (state_16087[30]);var inst_16028 = (state_16087[9]);var inst_16030 = (state_16087[10]);var inst_16035__$1 = cljs.core._nth.call(null,inst_16028,inst_16030);var inst_16036 = cljs.core.async.put_BANG_.call(null,inst_16035__$1,inst_15959,done);var state_16087__$1 = (function (){var statearr_16158 = state_16087;(statearr_16158[30] = inst_16035__$1);
return statearr_16158;
})();if(cljs.core.truth_(inst_16036))
{var statearr_16159_16223 = state_16087__$1;(statearr_16159_16223[1] = 30);
} else
{var statearr_16160_16224 = state_16087__$1;(statearr_16160_16224[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 28))
{var inst_16027 = (state_16087[7]);var inst_16046 = (state_16087[12]);var inst_16046__$1 = cljs.core.seq.call(null,inst_16027);var state_16087__$1 = (function (){var statearr_16161 = state_16087;(statearr_16161[12] = inst_16046__$1);
return statearr_16161;
})();if(inst_16046__$1)
{var statearr_16162_16225 = state_16087__$1;(statearr_16162_16225[1] = 33);
} else
{var statearr_16163_16226 = state_16087__$1;(statearr_16163_16226[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 29))
{var inst_16071 = (state_16087[2]);var state_16087__$1 = state_16087;var statearr_16164_16227 = state_16087__$1;(statearr_16164_16227[2] = inst_16071);
(statearr_16164_16227[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 30))
{var state_16087__$1 = state_16087;var statearr_16165_16228 = state_16087__$1;(statearr_16165_16228[2] = null);
(statearr_16165_16228[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16088 === 31))
{var inst_16035 = (state_16087[30]);var inst_16039 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16040 = cljs.core.async.untap_STAR_.call(null,m,inst_16035);var state_16087__$1 = (function (){var statearr_16166 = state_16087;(statearr_16166[31] = inst_16039);
return statearr_16166;
})();var statearr_16167_16229 = state_16087__$1;(statearr_16167_16229[2] = inst_16040);
(statearr_16167_16229[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_16171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16171[0] = state_machine__11501__auto__);
(statearr_16171[1] = 1);
return statearr_16171;
});
var state_machine__11501__auto____1 = (function (state_16087){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_16087);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e16172){if((e16172 instanceof Object))
{var ex__11504__auto__ = e16172;var statearr_16173_16230 = state_16087;(statearr_16173_16230[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16231 = state_16087;
state_16087 = G__16231;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_16087){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_16087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_16174 = f__11516__auto__.call(null);(statearr_16174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___16175);
return statearr_16174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16233 = {};return obj16233;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9367__auto__ = m;if(and__9367__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9367__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9379__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16353 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16354){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16354 = meta16354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16353.cljs$lang$type = true;
cljs.core.async.t16353.cljs$lang$ctorStr = "cljs.core.async/t16353";
cljs.core.async.t16353.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t16353");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16355){var self__ = this;
var _16355__$1 = this;return self__.meta16354;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16355,meta16354__$1){var self__ = this;
var _16355__$1 = this;return (new cljs.core.async.t16353(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16354__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16353 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16353(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16354){return (new cljs.core.async.t16353(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16354));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16353(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11515__auto___16472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_16425){var state_val_16426 = (state_16425[1]);if((state_val_16426 === 1))
{var inst_16359 = (state_16425[7]);var inst_16359__$1 = calc_state.call(null);var inst_16360 = cljs.core.seq_QMARK_.call(null,inst_16359__$1);var state_16425__$1 = (function (){var statearr_16427 = state_16425;(statearr_16427[7] = inst_16359__$1);
return statearr_16427;
})();if(inst_16360)
{var statearr_16428_16473 = state_16425__$1;(statearr_16428_16473[1] = 2);
} else
{var statearr_16429_16474 = state_16425__$1;(statearr_16429_16474[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 2))
{var inst_16359 = (state_16425[7]);var inst_16362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16359);var state_16425__$1 = state_16425;var statearr_16430_16475 = state_16425__$1;(statearr_16430_16475[2] = inst_16362);
(statearr_16430_16475[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 3))
{var inst_16359 = (state_16425[7]);var state_16425__$1 = state_16425;var statearr_16431_16476 = state_16425__$1;(statearr_16431_16476[2] = inst_16359);
(statearr_16431_16476[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 4))
{var inst_16359 = (state_16425[7]);var inst_16365 = (state_16425[2]);var inst_16366 = cljs.core.get.call(null,inst_16365,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16367 = cljs.core.get.call(null,inst_16365,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16368 = cljs.core.get.call(null,inst_16365,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16369 = inst_16359;var state_16425__$1 = (function (){var statearr_16432 = state_16425;(statearr_16432[8] = inst_16367);
(statearr_16432[9] = inst_16368);
(statearr_16432[10] = inst_16366);
(statearr_16432[11] = inst_16369);
return statearr_16432;
})();var statearr_16433_16477 = state_16425__$1;(statearr_16433_16477[2] = null);
(statearr_16433_16477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 5))
{var inst_16369 = (state_16425[11]);var inst_16372 = cljs.core.seq_QMARK_.call(null,inst_16369);var state_16425__$1 = state_16425;if(inst_16372)
{var statearr_16434_16478 = state_16425__$1;(statearr_16434_16478[1] = 7);
} else
{var statearr_16435_16479 = state_16425__$1;(statearr_16435_16479[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 6))
{var inst_16423 = (state_16425[2]);var state_16425__$1 = state_16425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16425__$1,inst_16423);
} else
{if((state_val_16426 === 7))
{var inst_16369 = (state_16425[11]);var inst_16374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16369);var state_16425__$1 = state_16425;var statearr_16436_16480 = state_16425__$1;(statearr_16436_16480[2] = inst_16374);
(statearr_16436_16480[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 8))
{var inst_16369 = (state_16425[11]);var state_16425__$1 = state_16425;var statearr_16437_16481 = state_16425__$1;(statearr_16437_16481[2] = inst_16369);
(statearr_16437_16481[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 9))
{var inst_16377 = (state_16425[12]);var inst_16377__$1 = (state_16425[2]);var inst_16378 = cljs.core.get.call(null,inst_16377__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16379 = cljs.core.get.call(null,inst_16377__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16380 = cljs.core.get.call(null,inst_16377__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16425__$1 = (function (){var statearr_16438 = state_16425;(statearr_16438[13] = inst_16379);
(statearr_16438[14] = inst_16380);
(statearr_16438[12] = inst_16377__$1);
return statearr_16438;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16425__$1,10,inst_16378);
} else
{if((state_val_16426 === 10))
{var inst_16384 = (state_16425[15]);var inst_16385 = (state_16425[16]);var inst_16383 = (state_16425[2]);var inst_16384__$1 = cljs.core.nth.call(null,inst_16383,0,null);var inst_16385__$1 = cljs.core.nth.call(null,inst_16383,1,null);var inst_16386 = (inst_16384__$1 == null);var inst_16387 = cljs.core._EQ_.call(null,inst_16385__$1,change);var inst_16388 = (inst_16386) || (inst_16387);var state_16425__$1 = (function (){var statearr_16439 = state_16425;(statearr_16439[15] = inst_16384__$1);
(statearr_16439[16] = inst_16385__$1);
return statearr_16439;
})();if(cljs.core.truth_(inst_16388))
{var statearr_16440_16482 = state_16425__$1;(statearr_16440_16482[1] = 11);
} else
{var statearr_16441_16483 = state_16425__$1;(statearr_16441_16483[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 11))
{var inst_16384 = (state_16425[15]);var inst_16390 = (inst_16384 == null);var state_16425__$1 = state_16425;if(cljs.core.truth_(inst_16390))
{var statearr_16442_16484 = state_16425__$1;(statearr_16442_16484[1] = 14);
} else
{var statearr_16443_16485 = state_16425__$1;(statearr_16443_16485[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 12))
{var inst_16385 = (state_16425[16]);var inst_16399 = (state_16425[17]);var inst_16380 = (state_16425[14]);var inst_16399__$1 = inst_16380.call(null,inst_16385);var state_16425__$1 = (function (){var statearr_16444 = state_16425;(statearr_16444[17] = inst_16399__$1);
return statearr_16444;
})();if(cljs.core.truth_(inst_16399__$1))
{var statearr_16445_16486 = state_16425__$1;(statearr_16445_16486[1] = 17);
} else
{var statearr_16446_16487 = state_16425__$1;(statearr_16446_16487[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 13))
{var inst_16421 = (state_16425[2]);var state_16425__$1 = state_16425;var statearr_16447_16488 = state_16425__$1;(statearr_16447_16488[2] = inst_16421);
(statearr_16447_16488[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 14))
{var inst_16385 = (state_16425[16]);var inst_16392 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16385);var state_16425__$1 = state_16425;var statearr_16448_16489 = state_16425__$1;(statearr_16448_16489[2] = inst_16392);
(statearr_16448_16489[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 15))
{var state_16425__$1 = state_16425;var statearr_16449_16490 = state_16425__$1;(statearr_16449_16490[2] = null);
(statearr_16449_16490[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 16))
{var inst_16395 = (state_16425[2]);var inst_16396 = calc_state.call(null);var inst_16369 = inst_16396;var state_16425__$1 = (function (){var statearr_16450 = state_16425;(statearr_16450[18] = inst_16395);
(statearr_16450[11] = inst_16369);
return statearr_16450;
})();var statearr_16451_16491 = state_16425__$1;(statearr_16451_16491[2] = null);
(statearr_16451_16491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 17))
{var inst_16399 = (state_16425[17]);var state_16425__$1 = state_16425;var statearr_16452_16492 = state_16425__$1;(statearr_16452_16492[2] = inst_16399);
(statearr_16452_16492[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 18))
{var inst_16385 = (state_16425[16]);var inst_16379 = (state_16425[13]);var inst_16380 = (state_16425[14]);var inst_16402 = cljs.core.empty_QMARK_.call(null,inst_16380);var inst_16403 = inst_16379.call(null,inst_16385);var inst_16404 = cljs.core.not.call(null,inst_16403);var inst_16405 = (inst_16402) && (inst_16404);var state_16425__$1 = state_16425;var statearr_16453_16493 = state_16425__$1;(statearr_16453_16493[2] = inst_16405);
(statearr_16453_16493[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 19))
{var inst_16407 = (state_16425[2]);var state_16425__$1 = state_16425;if(cljs.core.truth_(inst_16407))
{var statearr_16454_16494 = state_16425__$1;(statearr_16454_16494[1] = 20);
} else
{var statearr_16455_16495 = state_16425__$1;(statearr_16455_16495[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 20))
{var inst_16384 = (state_16425[15]);var state_16425__$1 = state_16425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16425__$1,23,out,inst_16384);
} else
{if((state_val_16426 === 21))
{var inst_16377 = (state_16425[12]);var inst_16369 = inst_16377;var state_16425__$1 = (function (){var statearr_16456 = state_16425;(statearr_16456[11] = inst_16369);
return statearr_16456;
})();var statearr_16457_16496 = state_16425__$1;(statearr_16457_16496[2] = null);
(statearr_16457_16496[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 22))
{var inst_16419 = (state_16425[2]);var state_16425__$1 = state_16425;var statearr_16458_16497 = state_16425__$1;(statearr_16458_16497[2] = inst_16419);
(statearr_16458_16497[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 23))
{var inst_16410 = (state_16425[2]);var state_16425__$1 = state_16425;if(cljs.core.truth_(inst_16410))
{var statearr_16459_16498 = state_16425__$1;(statearr_16459_16498[1] = 24);
} else
{var statearr_16460_16499 = state_16425__$1;(statearr_16460_16499[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 24))
{var inst_16377 = (state_16425[12]);var inst_16369 = inst_16377;var state_16425__$1 = (function (){var statearr_16461 = state_16425;(statearr_16461[11] = inst_16369);
return statearr_16461;
})();var statearr_16462_16500 = state_16425__$1;(statearr_16462_16500[2] = null);
(statearr_16462_16500[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 25))
{var state_16425__$1 = state_16425;var statearr_16463_16501 = state_16425__$1;(statearr_16463_16501[2] = null);
(statearr_16463_16501[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16426 === 26))
{var inst_16415 = (state_16425[2]);var state_16425__$1 = state_16425;var statearr_16464_16502 = state_16425__$1;(statearr_16464_16502[2] = inst_16415);
(statearr_16464_16502[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_16468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16468[0] = state_machine__11501__auto__);
(statearr_16468[1] = 1);
return statearr_16468;
});
var state_machine__11501__auto____1 = (function (state_16425){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_16425);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e16469){if((e16469 instanceof Object))
{var ex__11504__auto__ = e16469;var statearr_16470_16503 = state_16425;(statearr_16470_16503[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16504 = state_16425;
state_16425 = G__16504;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_16425){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_16425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_16471 = f__11516__auto__.call(null);(statearr_16471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___16472);
return statearr_16471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16506 = {};return obj16506;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9367__auto__ = p;if(and__9367__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9367__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9379__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9367__auto__ = p;if(and__9367__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9367__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9379__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9367__auto__ = p;if(and__9367__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9367__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9379__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9367__auto__ = p;if(and__9367__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9367__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9379__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9379__auto__)
{return or__9379__auto__;
} else
{var or__9379__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9379__auto____$1)
{return or__9379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9379__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9379__auto__))
{return or__9379__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9379__auto__,mults){
return (function (p1__16507_SHARP_){if(cljs.core.truth_(p1__16507_SHARP_.call(null,topic)))
{return p1__16507_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16507_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9379__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16630 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16631){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16631 = meta16631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16630.cljs$lang$type = true;
cljs.core.async.t16630.cljs$lang$ctorStr = "cljs.core.async/t16630";
cljs.core.async.t16630.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9946__auto__,writer__9947__auto__,opt__9948__auto__){return cljs.core._write.call(null,writer__9947__auto__,"cljs.core.async/t16630");
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16630.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16632){var self__ = this;
var _16632__$1 = this;return self__.meta16631;
});})(mults,ensure_mult))
;
cljs.core.async.t16630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16632,meta16631__$1){var self__ = this;
var _16632__$1 = this;return (new cljs.core.async.t16630(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16631__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16630 = ((function (mults,ensure_mult){
return (function __GT_t16630(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16631){return (new cljs.core.async.t16630(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16631));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16630(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11515__auto___16752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_16704){var state_val_16705 = (state_16704[1]);if((state_val_16705 === 1))
{var state_16704__$1 = state_16704;var statearr_16706_16753 = state_16704__$1;(statearr_16706_16753[2] = null);
(statearr_16706_16753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 2))
{var state_16704__$1 = state_16704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16704__$1,4,ch);
} else
{if((state_val_16705 === 3))
{var inst_16702 = (state_16704[2]);var state_16704__$1 = state_16704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16704__$1,inst_16702);
} else
{if((state_val_16705 === 4))
{var inst_16635 = (state_16704[7]);var inst_16635__$1 = (state_16704[2]);var inst_16636 = (inst_16635__$1 == null);var state_16704__$1 = (function (){var statearr_16707 = state_16704;(statearr_16707[7] = inst_16635__$1);
return statearr_16707;
})();if(cljs.core.truth_(inst_16636))
{var statearr_16708_16754 = state_16704__$1;(statearr_16708_16754[1] = 5);
} else
{var statearr_16709_16755 = state_16704__$1;(statearr_16709_16755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 5))
{var inst_16642 = cljs.core.deref.call(null,mults);var inst_16643 = cljs.core.vals.call(null,inst_16642);var inst_16644 = cljs.core.seq.call(null,inst_16643);var inst_16645 = inst_16644;var inst_16646 = null;var inst_16647 = 0;var inst_16648 = 0;var state_16704__$1 = (function (){var statearr_16710 = state_16704;(statearr_16710[8] = inst_16648);
(statearr_16710[9] = inst_16647);
(statearr_16710[10] = inst_16646);
(statearr_16710[11] = inst_16645);
return statearr_16710;
})();var statearr_16711_16756 = state_16704__$1;(statearr_16711_16756[2] = null);
(statearr_16711_16756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 6))
{var inst_16635 = (state_16704[7]);var inst_16685 = (state_16704[12]);var inst_16683 = (state_16704[13]);var inst_16683__$1 = topic_fn.call(null,inst_16635);var inst_16684 = cljs.core.deref.call(null,mults);var inst_16685__$1 = cljs.core.get.call(null,inst_16684,inst_16683__$1);var state_16704__$1 = (function (){var statearr_16712 = state_16704;(statearr_16712[12] = inst_16685__$1);
(statearr_16712[13] = inst_16683__$1);
return statearr_16712;
})();if(cljs.core.truth_(inst_16685__$1))
{var statearr_16713_16757 = state_16704__$1;(statearr_16713_16757[1] = 19);
} else
{var statearr_16714_16758 = state_16704__$1;(statearr_16714_16758[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 7))
{var inst_16700 = (state_16704[2]);var state_16704__$1 = state_16704;var statearr_16715_16759 = state_16704__$1;(statearr_16715_16759[2] = inst_16700);
(statearr_16715_16759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 8))
{var inst_16648 = (state_16704[8]);var inst_16647 = (state_16704[9]);var inst_16650 = (inst_16648 < inst_16647);var inst_16651 = inst_16650;var state_16704__$1 = state_16704;if(cljs.core.truth_(inst_16651))
{var statearr_16719_16760 = state_16704__$1;(statearr_16719_16760[1] = 10);
} else
{var statearr_16720_16761 = state_16704__$1;(statearr_16720_16761[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 9))
{var inst_16681 = (state_16704[2]);var state_16704__$1 = state_16704;var statearr_16721_16762 = state_16704__$1;(statearr_16721_16762[2] = inst_16681);
(statearr_16721_16762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 10))
{var inst_16648 = (state_16704[8]);var inst_16647 = (state_16704[9]);var inst_16646 = (state_16704[10]);var inst_16645 = (state_16704[11]);var inst_16653 = cljs.core._nth.call(null,inst_16646,inst_16648);var inst_16654 = cljs.core.async.muxch_STAR_.call(null,inst_16653);var inst_16655 = cljs.core.async.close_BANG_.call(null,inst_16654);var inst_16656 = (inst_16648 + 1);var tmp16716 = inst_16647;var tmp16717 = inst_16646;var tmp16718 = inst_16645;var inst_16645__$1 = tmp16718;var inst_16646__$1 = tmp16717;var inst_16647__$1 = tmp16716;var inst_16648__$1 = inst_16656;var state_16704__$1 = (function (){var statearr_16722 = state_16704;(statearr_16722[8] = inst_16648__$1);
(statearr_16722[14] = inst_16655);
(statearr_16722[9] = inst_16647__$1);
(statearr_16722[10] = inst_16646__$1);
(statearr_16722[11] = inst_16645__$1);
return statearr_16722;
})();var statearr_16723_16763 = state_16704__$1;(statearr_16723_16763[2] = null);
(statearr_16723_16763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 11))
{var inst_16659 = (state_16704[15]);var inst_16645 = (state_16704[11]);var inst_16659__$1 = cljs.core.seq.call(null,inst_16645);var state_16704__$1 = (function (){var statearr_16724 = state_16704;(statearr_16724[15] = inst_16659__$1);
return statearr_16724;
})();if(inst_16659__$1)
{var statearr_16725_16764 = state_16704__$1;(statearr_16725_16764[1] = 13);
} else
{var statearr_16726_16765 = state_16704__$1;(statearr_16726_16765[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 12))
{var inst_16679 = (state_16704[2]);var state_16704__$1 = state_16704;var statearr_16727_16766 = state_16704__$1;(statearr_16727_16766[2] = inst_16679);
(statearr_16727_16766[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 13))
{var inst_16659 = (state_16704[15]);var inst_16661 = cljs.core.chunked_seq_QMARK_.call(null,inst_16659);var state_16704__$1 = state_16704;if(inst_16661)
{var statearr_16728_16767 = state_16704__$1;(statearr_16728_16767[1] = 16);
} else
{var statearr_16729_16768 = state_16704__$1;(statearr_16729_16768[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 14))
{var state_16704__$1 = state_16704;var statearr_16730_16769 = state_16704__$1;(statearr_16730_16769[2] = null);
(statearr_16730_16769[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 15))
{var inst_16677 = (state_16704[2]);var state_16704__$1 = state_16704;var statearr_16731_16770 = state_16704__$1;(statearr_16731_16770[2] = inst_16677);
(statearr_16731_16770[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 16))
{var inst_16659 = (state_16704[15]);var inst_16663 = cljs.core.chunk_first.call(null,inst_16659);var inst_16664 = cljs.core.chunk_rest.call(null,inst_16659);var inst_16665 = cljs.core.count.call(null,inst_16663);var inst_16645 = inst_16664;var inst_16646 = inst_16663;var inst_16647 = inst_16665;var inst_16648 = 0;var state_16704__$1 = (function (){var statearr_16732 = state_16704;(statearr_16732[8] = inst_16648);
(statearr_16732[9] = inst_16647);
(statearr_16732[10] = inst_16646);
(statearr_16732[11] = inst_16645);
return statearr_16732;
})();var statearr_16733_16771 = state_16704__$1;(statearr_16733_16771[2] = null);
(statearr_16733_16771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 17))
{var inst_16659 = (state_16704[15]);var inst_16668 = cljs.core.first.call(null,inst_16659);var inst_16669 = cljs.core.async.muxch_STAR_.call(null,inst_16668);var inst_16670 = cljs.core.async.close_BANG_.call(null,inst_16669);var inst_16671 = cljs.core.next.call(null,inst_16659);var inst_16645 = inst_16671;var inst_16646 = null;var inst_16647 = 0;var inst_16648 = 0;var state_16704__$1 = (function (){var statearr_16734 = state_16704;(statearr_16734[16] = inst_16670);
(statearr_16734[8] = inst_16648);
(statearr_16734[9] = inst_16647);
(statearr_16734[10] = inst_16646);
(statearr_16734[11] = inst_16645);
return statearr_16734;
})();var statearr_16735_16772 = state_16704__$1;(statearr_16735_16772[2] = null);
(statearr_16735_16772[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 18))
{var inst_16674 = (state_16704[2]);var state_16704__$1 = state_16704;var statearr_16736_16773 = state_16704__$1;(statearr_16736_16773[2] = inst_16674);
(statearr_16736_16773[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 19))
{var inst_16635 = (state_16704[7]);var inst_16685 = (state_16704[12]);var inst_16687 = cljs.core.async.muxch_STAR_.call(null,inst_16685);var state_16704__$1 = state_16704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16704__$1,22,inst_16687,inst_16635);
} else
{if((state_val_16705 === 20))
{var state_16704__$1 = state_16704;var statearr_16737_16774 = state_16704__$1;(statearr_16737_16774[2] = null);
(statearr_16737_16774[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 21))
{var inst_16697 = (state_16704[2]);var state_16704__$1 = (function (){var statearr_16738 = state_16704;(statearr_16738[17] = inst_16697);
return statearr_16738;
})();var statearr_16739_16775 = state_16704__$1;(statearr_16739_16775[2] = null);
(statearr_16739_16775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 22))
{var inst_16689 = (state_16704[2]);var state_16704__$1 = state_16704;if(cljs.core.truth_(inst_16689))
{var statearr_16740_16776 = state_16704__$1;(statearr_16740_16776[1] = 23);
} else
{var statearr_16741_16777 = state_16704__$1;(statearr_16741_16777[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 23))
{var state_16704__$1 = state_16704;var statearr_16742_16778 = state_16704__$1;(statearr_16742_16778[2] = null);
(statearr_16742_16778[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 24))
{var inst_16683 = (state_16704[13]);var inst_16692 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16683);var state_16704__$1 = state_16704;var statearr_16743_16779 = state_16704__$1;(statearr_16743_16779[2] = inst_16692);
(statearr_16743_16779[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16705 === 25))
{var inst_16694 = (state_16704[2]);var state_16704__$1 = state_16704;var statearr_16744_16780 = state_16704__$1;(statearr_16744_16780[2] = inst_16694);
(statearr_16744_16780[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_16748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16748[0] = state_machine__11501__auto__);
(statearr_16748[1] = 1);
return statearr_16748;
});
var state_machine__11501__auto____1 = (function (state_16704){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_16704);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e16749){if((e16749 instanceof Object))
{var ex__11504__auto__ = e16749;var statearr_16750_16781 = state_16704;(statearr_16750_16781[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16782 = state_16704;
state_16704 = G__16782;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_16704){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_16704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_16751 = f__11516__auto__.call(null);(statearr_16751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___16752);
return statearr_16751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11515__auto___16919 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_16889){var state_val_16890 = (state_16889[1]);if((state_val_16890 === 1))
{var state_16889__$1 = state_16889;var statearr_16891_16920 = state_16889__$1;(statearr_16891_16920[2] = null);
(statearr_16891_16920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 2))
{var inst_16852 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16853 = 0;var state_16889__$1 = (function (){var statearr_16892 = state_16889;(statearr_16892[7] = inst_16853);
(statearr_16892[8] = inst_16852);
return statearr_16892;
})();var statearr_16893_16921 = state_16889__$1;(statearr_16893_16921[2] = null);
(statearr_16893_16921[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 3))
{var inst_16887 = (state_16889[2]);var state_16889__$1 = state_16889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16889__$1,inst_16887);
} else
{if((state_val_16890 === 4))
{var inst_16853 = (state_16889[7]);var inst_16855 = (inst_16853 < cnt);var state_16889__$1 = state_16889;if(cljs.core.truth_(inst_16855))
{var statearr_16894_16922 = state_16889__$1;(statearr_16894_16922[1] = 6);
} else
{var statearr_16895_16923 = state_16889__$1;(statearr_16895_16923[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 5))
{var inst_16873 = (state_16889[2]);var state_16889__$1 = (function (){var statearr_16896 = state_16889;(statearr_16896[9] = inst_16873);
return statearr_16896;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16889__$1,12,dchan);
} else
{if((state_val_16890 === 6))
{var state_16889__$1 = state_16889;var statearr_16897_16924 = state_16889__$1;(statearr_16897_16924[2] = null);
(statearr_16897_16924[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 7))
{var state_16889__$1 = state_16889;var statearr_16898_16925 = state_16889__$1;(statearr_16898_16925[2] = null);
(statearr_16898_16925[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 8))
{var inst_16871 = (state_16889[2]);var state_16889__$1 = state_16889;var statearr_16899_16926 = state_16889__$1;(statearr_16899_16926[2] = inst_16871);
(statearr_16899_16926[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 9))
{var inst_16853 = (state_16889[7]);var inst_16866 = (state_16889[2]);var inst_16867 = (inst_16853 + 1);var inst_16853__$1 = inst_16867;var state_16889__$1 = (function (){var statearr_16900 = state_16889;(statearr_16900[10] = inst_16866);
(statearr_16900[7] = inst_16853__$1);
return statearr_16900;
})();var statearr_16901_16927 = state_16889__$1;(statearr_16901_16927[2] = null);
(statearr_16901_16927[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 10))
{var inst_16857 = (state_16889[2]);var inst_16858 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16889__$1 = (function (){var statearr_16902 = state_16889;(statearr_16902[11] = inst_16857);
return statearr_16902;
})();var statearr_16903_16928 = state_16889__$1;(statearr_16903_16928[2] = inst_16858);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16889__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 11))
{var inst_16853 = (state_16889[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16889,10,Object,null,9);var inst_16862 = chs__$1.call(null,inst_16853);var inst_16863 = done.call(null,inst_16853);var inst_16864 = cljs.core.async.take_BANG_.call(null,inst_16862,inst_16863);var state_16889__$1 = state_16889;var statearr_16904_16929 = state_16889__$1;(statearr_16904_16929[2] = inst_16864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16889__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 12))
{var inst_16875 = (state_16889[12]);var inst_16875__$1 = (state_16889[2]);var inst_16876 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16875__$1);var state_16889__$1 = (function (){var statearr_16905 = state_16889;(statearr_16905[12] = inst_16875__$1);
return statearr_16905;
})();if(cljs.core.truth_(inst_16876))
{var statearr_16906_16930 = state_16889__$1;(statearr_16906_16930[1] = 13);
} else
{var statearr_16907_16931 = state_16889__$1;(statearr_16907_16931[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 13))
{var inst_16878 = cljs.core.async.close_BANG_.call(null,out);var state_16889__$1 = state_16889;var statearr_16908_16932 = state_16889__$1;(statearr_16908_16932[2] = inst_16878);
(statearr_16908_16932[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 14))
{var inst_16875 = (state_16889[12]);var inst_16880 = cljs.core.apply.call(null,f,inst_16875);var state_16889__$1 = state_16889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16889__$1,16,out,inst_16880);
} else
{if((state_val_16890 === 15))
{var inst_16885 = (state_16889[2]);var state_16889__$1 = state_16889;var statearr_16909_16933 = state_16889__$1;(statearr_16909_16933[2] = inst_16885);
(statearr_16909_16933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 16))
{var inst_16882 = (state_16889[2]);var state_16889__$1 = (function (){var statearr_16910 = state_16889;(statearr_16910[13] = inst_16882);
return statearr_16910;
})();var statearr_16911_16934 = state_16889__$1;(statearr_16911_16934[2] = null);
(statearr_16911_16934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_16915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16915[0] = state_machine__11501__auto__);
(statearr_16915[1] = 1);
return statearr_16915;
});
var state_machine__11501__auto____1 = (function (state_16889){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_16889);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e16916){if((e16916 instanceof Object))
{var ex__11504__auto__ = e16916;var statearr_16917_16935 = state_16889;(statearr_16917_16935[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16936 = state_16889;
state_16889 = G__16936;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_16889){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_16889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_16918 = f__11516__auto__.call(null);(statearr_16918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___16919);
return statearr_16918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11515__auto___17044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_17020){var state_val_17021 = (state_17020[1]);if((state_val_17021 === 1))
{var inst_16991 = cljs.core.vec.call(null,chs);var inst_16992 = inst_16991;var state_17020__$1 = (function (){var statearr_17022 = state_17020;(statearr_17022[7] = inst_16992);
return statearr_17022;
})();var statearr_17023_17045 = state_17020__$1;(statearr_17023_17045[2] = null);
(statearr_17023_17045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 2))
{var inst_16992 = (state_17020[7]);var inst_16994 = cljs.core.count.call(null,inst_16992);var inst_16995 = (inst_16994 > 0);var state_17020__$1 = state_17020;if(cljs.core.truth_(inst_16995))
{var statearr_17024_17046 = state_17020__$1;(statearr_17024_17046[1] = 4);
} else
{var statearr_17025_17047 = state_17020__$1;(statearr_17025_17047[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 3))
{var inst_17018 = (state_17020[2]);var state_17020__$1 = state_17020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17020__$1,inst_17018);
} else
{if((state_val_17021 === 4))
{var inst_16992 = (state_17020[7]);var state_17020__$1 = state_17020;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17020__$1,7,inst_16992);
} else
{if((state_val_17021 === 5))
{var inst_17014 = cljs.core.async.close_BANG_.call(null,out);var state_17020__$1 = state_17020;var statearr_17026_17048 = state_17020__$1;(statearr_17026_17048[2] = inst_17014);
(statearr_17026_17048[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 6))
{var inst_17016 = (state_17020[2]);var state_17020__$1 = state_17020;var statearr_17027_17049 = state_17020__$1;(statearr_17027_17049[2] = inst_17016);
(statearr_17027_17049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 7))
{var inst_16999 = (state_17020[8]);var inst_17000 = (state_17020[9]);var inst_16999__$1 = (state_17020[2]);var inst_17000__$1 = cljs.core.nth.call(null,inst_16999__$1,0,null);var inst_17001 = cljs.core.nth.call(null,inst_16999__$1,1,null);var inst_17002 = (inst_17000__$1 == null);var state_17020__$1 = (function (){var statearr_17028 = state_17020;(statearr_17028[8] = inst_16999__$1);
(statearr_17028[9] = inst_17000__$1);
(statearr_17028[10] = inst_17001);
return statearr_17028;
})();if(cljs.core.truth_(inst_17002))
{var statearr_17029_17050 = state_17020__$1;(statearr_17029_17050[1] = 8);
} else
{var statearr_17030_17051 = state_17020__$1;(statearr_17030_17051[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 8))
{var inst_16999 = (state_17020[8]);var inst_16992 = (state_17020[7]);var inst_17000 = (state_17020[9]);var inst_17001 = (state_17020[10]);var inst_17004 = (function (){var c = inst_17001;var v = inst_17000;var vec__16997 = inst_16999;var cs = inst_16992;return ((function (c,v,vec__16997,cs,inst_16999,inst_16992,inst_17000,inst_17001,state_val_17021){
return (function (p1__16937_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16937_SHARP_);
});
;})(c,v,vec__16997,cs,inst_16999,inst_16992,inst_17000,inst_17001,state_val_17021))
})();var inst_17005 = cljs.core.filterv.call(null,inst_17004,inst_16992);var inst_16992__$1 = inst_17005;var state_17020__$1 = (function (){var statearr_17031 = state_17020;(statearr_17031[7] = inst_16992__$1);
return statearr_17031;
})();var statearr_17032_17052 = state_17020__$1;(statearr_17032_17052[2] = null);
(statearr_17032_17052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 9))
{var inst_17000 = (state_17020[9]);var state_17020__$1 = state_17020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17020__$1,11,out,inst_17000);
} else
{if((state_val_17021 === 10))
{var inst_17012 = (state_17020[2]);var state_17020__$1 = state_17020;var statearr_17034_17053 = state_17020__$1;(statearr_17034_17053[2] = inst_17012);
(statearr_17034_17053[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17021 === 11))
{var inst_16992 = (state_17020[7]);var inst_17009 = (state_17020[2]);var tmp17033 = inst_16992;var inst_16992__$1 = tmp17033;var state_17020__$1 = (function (){var statearr_17035 = state_17020;(statearr_17035[11] = inst_17009);
(statearr_17035[7] = inst_16992__$1);
return statearr_17035;
})();var statearr_17036_17054 = state_17020__$1;(statearr_17036_17054[2] = null);
(statearr_17036_17054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_17040 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17040[0] = state_machine__11501__auto__);
(statearr_17040[1] = 1);
return statearr_17040;
});
var state_machine__11501__auto____1 = (function (state_17020){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_17020);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e17041){if((e17041 instanceof Object))
{var ex__11504__auto__ = e17041;var statearr_17042_17055 = state_17020;(statearr_17042_17055[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17056 = state_17020;
state_17020 = G__17056;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_17020){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_17020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_17043 = f__11516__auto__.call(null);(statearr_17043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___17044);
return statearr_17043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11515__auto___17149 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_17126){var state_val_17127 = (state_17126[1]);if((state_val_17127 === 1))
{var inst_17103 = 0;var state_17126__$1 = (function (){var statearr_17128 = state_17126;(statearr_17128[7] = inst_17103);
return statearr_17128;
})();var statearr_17129_17150 = state_17126__$1;(statearr_17129_17150[2] = null);
(statearr_17129_17150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 2))
{var inst_17103 = (state_17126[7]);var inst_17105 = (inst_17103 < n);var state_17126__$1 = state_17126;if(cljs.core.truth_(inst_17105))
{var statearr_17130_17151 = state_17126__$1;(statearr_17130_17151[1] = 4);
} else
{var statearr_17131_17152 = state_17126__$1;(statearr_17131_17152[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 3))
{var inst_17123 = (state_17126[2]);var inst_17124 = cljs.core.async.close_BANG_.call(null,out);var state_17126__$1 = (function (){var statearr_17132 = state_17126;(statearr_17132[8] = inst_17123);
return statearr_17132;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17126__$1,inst_17124);
} else
{if((state_val_17127 === 4))
{var state_17126__$1 = state_17126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17126__$1,7,ch);
} else
{if((state_val_17127 === 5))
{var state_17126__$1 = state_17126;var statearr_17133_17153 = state_17126__$1;(statearr_17133_17153[2] = null);
(statearr_17133_17153[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 6))
{var inst_17121 = (state_17126[2]);var state_17126__$1 = state_17126;var statearr_17134_17154 = state_17126__$1;(statearr_17134_17154[2] = inst_17121);
(statearr_17134_17154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 7))
{var inst_17108 = (state_17126[9]);var inst_17108__$1 = (state_17126[2]);var inst_17109 = (inst_17108__$1 == null);var inst_17110 = cljs.core.not.call(null,inst_17109);var state_17126__$1 = (function (){var statearr_17135 = state_17126;(statearr_17135[9] = inst_17108__$1);
return statearr_17135;
})();if(inst_17110)
{var statearr_17136_17155 = state_17126__$1;(statearr_17136_17155[1] = 8);
} else
{var statearr_17137_17156 = state_17126__$1;(statearr_17137_17156[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 8))
{var inst_17108 = (state_17126[9]);var state_17126__$1 = state_17126;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17126__$1,11,out,inst_17108);
} else
{if((state_val_17127 === 9))
{var state_17126__$1 = state_17126;var statearr_17138_17157 = state_17126__$1;(statearr_17138_17157[2] = null);
(statearr_17138_17157[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 10))
{var inst_17118 = (state_17126[2]);var state_17126__$1 = state_17126;var statearr_17139_17158 = state_17126__$1;(statearr_17139_17158[2] = inst_17118);
(statearr_17139_17158[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17127 === 11))
{var inst_17103 = (state_17126[7]);var inst_17113 = (state_17126[2]);var inst_17114 = (inst_17103 + 1);var inst_17103__$1 = inst_17114;var state_17126__$1 = (function (){var statearr_17140 = state_17126;(statearr_17140[10] = inst_17113);
(statearr_17140[7] = inst_17103__$1);
return statearr_17140;
})();var statearr_17141_17159 = state_17126__$1;(statearr_17141_17159[2] = null);
(statearr_17141_17159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_17145 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17145[0] = state_machine__11501__auto__);
(statearr_17145[1] = 1);
return statearr_17145;
});
var state_machine__11501__auto____1 = (function (state_17126){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_17126);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e17146){if((e17146 instanceof Object))
{var ex__11504__auto__ = e17146;var statearr_17147_17160 = state_17126;(statearr_17147_17160[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17161 = state_17126;
state_17126 = G__17161;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_17126){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_17126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_17148 = f__11516__auto__.call(null);(statearr_17148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___17149);
return statearr_17148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11515__auto___17258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_17233){var state_val_17234 = (state_17233[1]);if((state_val_17234 === 1))
{var inst_17210 = null;var state_17233__$1 = (function (){var statearr_17235 = state_17233;(statearr_17235[7] = inst_17210);
return statearr_17235;
})();var statearr_17236_17259 = state_17233__$1;(statearr_17236_17259[2] = null);
(statearr_17236_17259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 2))
{var state_17233__$1 = state_17233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17233__$1,4,ch);
} else
{if((state_val_17234 === 3))
{var inst_17230 = (state_17233[2]);var inst_17231 = cljs.core.async.close_BANG_.call(null,out);var state_17233__$1 = (function (){var statearr_17237 = state_17233;(statearr_17237[8] = inst_17230);
return statearr_17237;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17233__$1,inst_17231);
} else
{if((state_val_17234 === 4))
{var inst_17213 = (state_17233[9]);var inst_17213__$1 = (state_17233[2]);var inst_17214 = (inst_17213__$1 == null);var inst_17215 = cljs.core.not.call(null,inst_17214);var state_17233__$1 = (function (){var statearr_17238 = state_17233;(statearr_17238[9] = inst_17213__$1);
return statearr_17238;
})();if(inst_17215)
{var statearr_17239_17260 = state_17233__$1;(statearr_17239_17260[1] = 5);
} else
{var statearr_17240_17261 = state_17233__$1;(statearr_17240_17261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 5))
{var inst_17213 = (state_17233[9]);var inst_17210 = (state_17233[7]);var inst_17217 = cljs.core._EQ_.call(null,inst_17213,inst_17210);var state_17233__$1 = state_17233;if(inst_17217)
{var statearr_17241_17262 = state_17233__$1;(statearr_17241_17262[1] = 8);
} else
{var statearr_17242_17263 = state_17233__$1;(statearr_17242_17263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 6))
{var state_17233__$1 = state_17233;var statearr_17244_17264 = state_17233__$1;(statearr_17244_17264[2] = null);
(statearr_17244_17264[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 7))
{var inst_17228 = (state_17233[2]);var state_17233__$1 = state_17233;var statearr_17245_17265 = state_17233__$1;(statearr_17245_17265[2] = inst_17228);
(statearr_17245_17265[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 8))
{var inst_17210 = (state_17233[7]);var tmp17243 = inst_17210;var inst_17210__$1 = tmp17243;var state_17233__$1 = (function (){var statearr_17246 = state_17233;(statearr_17246[7] = inst_17210__$1);
return statearr_17246;
})();var statearr_17247_17266 = state_17233__$1;(statearr_17247_17266[2] = null);
(statearr_17247_17266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 9))
{var inst_17213 = (state_17233[9]);var state_17233__$1 = state_17233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17233__$1,11,out,inst_17213);
} else
{if((state_val_17234 === 10))
{var inst_17225 = (state_17233[2]);var state_17233__$1 = state_17233;var statearr_17248_17267 = state_17233__$1;(statearr_17248_17267[2] = inst_17225);
(statearr_17248_17267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17234 === 11))
{var inst_17213 = (state_17233[9]);var inst_17222 = (state_17233[2]);var inst_17210 = inst_17213;var state_17233__$1 = (function (){var statearr_17249 = state_17233;(statearr_17249[7] = inst_17210);
(statearr_17249[10] = inst_17222);
return statearr_17249;
})();var statearr_17250_17268 = state_17233__$1;(statearr_17250_17268[2] = null);
(statearr_17250_17268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_17254 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17254[0] = state_machine__11501__auto__);
(statearr_17254[1] = 1);
return statearr_17254;
});
var state_machine__11501__auto____1 = (function (state_17233){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_17233);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e17255){if((e17255 instanceof Object))
{var ex__11504__auto__ = e17255;var statearr_17256_17269 = state_17233;(statearr_17256_17269[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17270 = state_17233;
state_17233 = G__17270;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_17233){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_17233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_17257 = f__11516__auto__.call(null);(statearr_17257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___17258);
return statearr_17257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11515__auto___17405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_17375){var state_val_17376 = (state_17375[1]);if((state_val_17376 === 1))
{var inst_17338 = (new Array(n));var inst_17339 = inst_17338;var inst_17340 = 0;var state_17375__$1 = (function (){var statearr_17377 = state_17375;(statearr_17377[7] = inst_17340);
(statearr_17377[8] = inst_17339);
return statearr_17377;
})();var statearr_17378_17406 = state_17375__$1;(statearr_17378_17406[2] = null);
(statearr_17378_17406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 2))
{var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17375__$1,4,ch);
} else
{if((state_val_17376 === 3))
{var inst_17373 = (state_17375[2]);var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17375__$1,inst_17373);
} else
{if((state_val_17376 === 4))
{var inst_17343 = (state_17375[9]);var inst_17343__$1 = (state_17375[2]);var inst_17344 = (inst_17343__$1 == null);var inst_17345 = cljs.core.not.call(null,inst_17344);var state_17375__$1 = (function (){var statearr_17379 = state_17375;(statearr_17379[9] = inst_17343__$1);
return statearr_17379;
})();if(inst_17345)
{var statearr_17380_17407 = state_17375__$1;(statearr_17380_17407[1] = 5);
} else
{var statearr_17381_17408 = state_17375__$1;(statearr_17381_17408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 5))
{var inst_17348 = (state_17375[10]);var inst_17340 = (state_17375[7]);var inst_17339 = (state_17375[8]);var inst_17343 = (state_17375[9]);var inst_17347 = (inst_17339[inst_17340] = inst_17343);var inst_17348__$1 = (inst_17340 + 1);var inst_17349 = (inst_17348__$1 < n);var state_17375__$1 = (function (){var statearr_17382 = state_17375;(statearr_17382[10] = inst_17348__$1);
(statearr_17382[11] = inst_17347);
return statearr_17382;
})();if(cljs.core.truth_(inst_17349))
{var statearr_17383_17409 = state_17375__$1;(statearr_17383_17409[1] = 8);
} else
{var statearr_17384_17410 = state_17375__$1;(statearr_17384_17410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 6))
{var inst_17340 = (state_17375[7]);var inst_17361 = (inst_17340 > 0);var state_17375__$1 = state_17375;if(cljs.core.truth_(inst_17361))
{var statearr_17386_17411 = state_17375__$1;(statearr_17386_17411[1] = 12);
} else
{var statearr_17387_17412 = state_17375__$1;(statearr_17387_17412[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 7))
{var inst_17371 = (state_17375[2]);var state_17375__$1 = state_17375;var statearr_17388_17413 = state_17375__$1;(statearr_17388_17413[2] = inst_17371);
(statearr_17388_17413[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 8))
{var inst_17348 = (state_17375[10]);var inst_17339 = (state_17375[8]);var tmp17385 = inst_17339;var inst_17339__$1 = tmp17385;var inst_17340 = inst_17348;var state_17375__$1 = (function (){var statearr_17389 = state_17375;(statearr_17389[7] = inst_17340);
(statearr_17389[8] = inst_17339__$1);
return statearr_17389;
})();var statearr_17390_17414 = state_17375__$1;(statearr_17390_17414[2] = null);
(statearr_17390_17414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 9))
{var inst_17339 = (state_17375[8]);var inst_17353 = cljs.core.vec.call(null,inst_17339);var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17375__$1,11,out,inst_17353);
} else
{if((state_val_17376 === 10))
{var inst_17359 = (state_17375[2]);var state_17375__$1 = state_17375;var statearr_17391_17415 = state_17375__$1;(statearr_17391_17415[2] = inst_17359);
(statearr_17391_17415[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 11))
{var inst_17355 = (state_17375[2]);var inst_17356 = (new Array(n));var inst_17339 = inst_17356;var inst_17340 = 0;var state_17375__$1 = (function (){var statearr_17392 = state_17375;(statearr_17392[12] = inst_17355);
(statearr_17392[7] = inst_17340);
(statearr_17392[8] = inst_17339);
return statearr_17392;
})();var statearr_17393_17416 = state_17375__$1;(statearr_17393_17416[2] = null);
(statearr_17393_17416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 12))
{var inst_17339 = (state_17375[8]);var inst_17363 = cljs.core.vec.call(null,inst_17339);var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17375__$1,15,out,inst_17363);
} else
{if((state_val_17376 === 13))
{var state_17375__$1 = state_17375;var statearr_17394_17417 = state_17375__$1;(statearr_17394_17417[2] = null);
(statearr_17394_17417[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 14))
{var inst_17368 = (state_17375[2]);var inst_17369 = cljs.core.async.close_BANG_.call(null,out);var state_17375__$1 = (function (){var statearr_17395 = state_17375;(statearr_17395[13] = inst_17368);
return statearr_17395;
})();var statearr_17396_17418 = state_17375__$1;(statearr_17396_17418[2] = inst_17369);
(statearr_17396_17418[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 15))
{var inst_17365 = (state_17375[2]);var state_17375__$1 = state_17375;var statearr_17397_17419 = state_17375__$1;(statearr_17397_17419[2] = inst_17365);
(statearr_17397_17419[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_17401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17401[0] = state_machine__11501__auto__);
(statearr_17401[1] = 1);
return statearr_17401;
});
var state_machine__11501__auto____1 = (function (state_17375){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_17375);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e17402){if((e17402 instanceof Object))
{var ex__11504__auto__ = e17402;var statearr_17403_17420 = state_17375;(statearr_17403_17420[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17421 = state_17375;
state_17375 = G__17421;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_17375){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_17375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_17404 = f__11516__auto__.call(null);(statearr_17404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___17405);
return statearr_17404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11515__auto___17564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11516__auto__ = (function (){var switch__11500__auto__ = (function (state_17534){var state_val_17535 = (state_17534[1]);if((state_val_17535 === 1))
{var inst_17493 = [];var inst_17494 = inst_17493;var inst_17495 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17534__$1 = (function (){var statearr_17536 = state_17534;(statearr_17536[7] = inst_17495);
(statearr_17536[8] = inst_17494);
return statearr_17536;
})();var statearr_17537_17565 = state_17534__$1;(statearr_17537_17565[2] = null);
(statearr_17537_17565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 2))
{var state_17534__$1 = state_17534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17534__$1,4,ch);
} else
{if((state_val_17535 === 3))
{var inst_17532 = (state_17534[2]);var state_17534__$1 = state_17534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17534__$1,inst_17532);
} else
{if((state_val_17535 === 4))
{var inst_17498 = (state_17534[9]);var inst_17498__$1 = (state_17534[2]);var inst_17499 = (inst_17498__$1 == null);var inst_17500 = cljs.core.not.call(null,inst_17499);var state_17534__$1 = (function (){var statearr_17538 = state_17534;(statearr_17538[9] = inst_17498__$1);
return statearr_17538;
})();if(inst_17500)
{var statearr_17539_17566 = state_17534__$1;(statearr_17539_17566[1] = 5);
} else
{var statearr_17540_17567 = state_17534__$1;(statearr_17540_17567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 5))
{var inst_17498 = (state_17534[9]);var inst_17495 = (state_17534[7]);var inst_17502 = (state_17534[10]);var inst_17502__$1 = f.call(null,inst_17498);var inst_17503 = cljs.core._EQ_.call(null,inst_17502__$1,inst_17495);var inst_17504 = cljs.core.keyword_identical_QMARK_.call(null,inst_17495,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17505 = (inst_17503) || (inst_17504);var state_17534__$1 = (function (){var statearr_17541 = state_17534;(statearr_17541[10] = inst_17502__$1);
return statearr_17541;
})();if(cljs.core.truth_(inst_17505))
{var statearr_17542_17568 = state_17534__$1;(statearr_17542_17568[1] = 8);
} else
{var statearr_17543_17569 = state_17534__$1;(statearr_17543_17569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 6))
{var inst_17494 = (state_17534[8]);var inst_17519 = inst_17494.length;var inst_17520 = (inst_17519 > 0);var state_17534__$1 = state_17534;if(cljs.core.truth_(inst_17520))
{var statearr_17545_17570 = state_17534__$1;(statearr_17545_17570[1] = 12);
} else
{var statearr_17546_17571 = state_17534__$1;(statearr_17546_17571[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 7))
{var inst_17530 = (state_17534[2]);var state_17534__$1 = state_17534;var statearr_17547_17572 = state_17534__$1;(statearr_17547_17572[2] = inst_17530);
(statearr_17547_17572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 8))
{var inst_17498 = (state_17534[9]);var inst_17494 = (state_17534[8]);var inst_17502 = (state_17534[10]);var inst_17507 = inst_17494.push(inst_17498);var tmp17544 = inst_17494;var inst_17494__$1 = tmp17544;var inst_17495 = inst_17502;var state_17534__$1 = (function (){var statearr_17548 = state_17534;(statearr_17548[11] = inst_17507);
(statearr_17548[7] = inst_17495);
(statearr_17548[8] = inst_17494__$1);
return statearr_17548;
})();var statearr_17549_17573 = state_17534__$1;(statearr_17549_17573[2] = null);
(statearr_17549_17573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 9))
{var inst_17494 = (state_17534[8]);var inst_17510 = cljs.core.vec.call(null,inst_17494);var state_17534__$1 = state_17534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17534__$1,11,out,inst_17510);
} else
{if((state_val_17535 === 10))
{var inst_17517 = (state_17534[2]);var state_17534__$1 = state_17534;var statearr_17550_17574 = state_17534__$1;(statearr_17550_17574[2] = inst_17517);
(statearr_17550_17574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 11))
{var inst_17498 = (state_17534[9]);var inst_17502 = (state_17534[10]);var inst_17512 = (state_17534[2]);var inst_17513 = [];var inst_17514 = inst_17513.push(inst_17498);var inst_17494 = inst_17513;var inst_17495 = inst_17502;var state_17534__$1 = (function (){var statearr_17551 = state_17534;(statearr_17551[12] = inst_17512);
(statearr_17551[13] = inst_17514);
(statearr_17551[7] = inst_17495);
(statearr_17551[8] = inst_17494);
return statearr_17551;
})();var statearr_17552_17575 = state_17534__$1;(statearr_17552_17575[2] = null);
(statearr_17552_17575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 12))
{var inst_17494 = (state_17534[8]);var inst_17522 = cljs.core.vec.call(null,inst_17494);var state_17534__$1 = state_17534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17534__$1,15,out,inst_17522);
} else
{if((state_val_17535 === 13))
{var state_17534__$1 = state_17534;var statearr_17553_17576 = state_17534__$1;(statearr_17553_17576[2] = null);
(statearr_17553_17576[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 14))
{var inst_17527 = (state_17534[2]);var inst_17528 = cljs.core.async.close_BANG_.call(null,out);var state_17534__$1 = (function (){var statearr_17554 = state_17534;(statearr_17554[14] = inst_17527);
return statearr_17554;
})();var statearr_17555_17577 = state_17534__$1;(statearr_17555_17577[2] = inst_17528);
(statearr_17555_17577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17535 === 15))
{var inst_17524 = (state_17534[2]);var state_17534__$1 = state_17534;var statearr_17556_17578 = state_17534__$1;(statearr_17556_17578[2] = inst_17524);
(statearr_17556_17578[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11500__auto__){
return (function() {
var state_machine__11501__auto__ = null;
var state_machine__11501__auto____0 = (function (){var statearr_17560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17560[0] = state_machine__11501__auto__);
(statearr_17560[1] = 1);
return statearr_17560;
});
var state_machine__11501__auto____1 = (function (state_17534){while(true){
var ret_value__11502__auto__ = (function (){try{while(true){
var result__11503__auto__ = switch__11500__auto__.call(null,state_17534);if(cljs.core.keyword_identical_QMARK_.call(null,result__11503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11503__auto__;
}
break;
}
}catch (e17561){if((e17561 instanceof Object))
{var ex__11504__auto__ = e17561;var statearr_17562_17579 = state_17534;(statearr_17562_17579[5] = ex__11504__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17534);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11502__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17580 = state_17534;
state_17534 = G__17580;
continue;
}
} else
{return ret_value__11502__auto__;
}
break;
}
});
state_machine__11501__auto__ = function(state_17534){
switch(arguments.length){
case 0:
return state_machine__11501__auto____0.call(this);
case 1:
return state_machine__11501__auto____1.call(this,state_17534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11501__auto____0;
state_machine__11501__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11501__auto____1;
return state_machine__11501__auto__;
})()
;})(switch__11500__auto__))
})();var state__11517__auto__ = (function (){var statearr_17563 = f__11516__auto__.call(null);(statearr_17563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11515__auto___17564);
return statearr_17563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11517__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
