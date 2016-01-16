// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7597_7611 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7598_7612 = null;
var count__7599_7613 = (0);
var i__7600_7614 = (0);
while(true){
if((i__7600_7614 < count__7599_7613)){
var f_7615 = cljs.core._nth.call(null,chunk__7598_7612,i__7600_7614);
cljs.core.println.call(null,"  ",f_7615);

var G__7616 = seq__7597_7611;
var G__7617 = chunk__7598_7612;
var G__7618 = count__7599_7613;
var G__7619 = (i__7600_7614 + (1));
seq__7597_7611 = G__7616;
chunk__7598_7612 = G__7617;
count__7599_7613 = G__7618;
i__7600_7614 = G__7619;
continue;
} else {
var temp__4425__auto___7620 = cljs.core.seq.call(null,seq__7597_7611);
if(temp__4425__auto___7620){
var seq__7597_7621__$1 = temp__4425__auto___7620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7597_7621__$1)){
var c__5709__auto___7622 = cljs.core.chunk_first.call(null,seq__7597_7621__$1);
var G__7623 = cljs.core.chunk_rest.call(null,seq__7597_7621__$1);
var G__7624 = c__5709__auto___7622;
var G__7625 = cljs.core.count.call(null,c__5709__auto___7622);
var G__7626 = (0);
seq__7597_7611 = G__7623;
chunk__7598_7612 = G__7624;
count__7599_7613 = G__7625;
i__7600_7614 = G__7626;
continue;
} else {
var f_7627 = cljs.core.first.call(null,seq__7597_7621__$1);
cljs.core.println.call(null,"  ",f_7627);

var G__7628 = cljs.core.next.call(null,seq__7597_7621__$1);
var G__7629 = null;
var G__7630 = (0);
var G__7631 = (0);
seq__7597_7611 = G__7628;
chunk__7598_7612 = G__7629;
count__7599_7613 = G__7630;
i__7600_7614 = G__7631;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7632 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4906__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7632);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7632)))?cljs.core.second.call(null,arglists_7632):arglists_7632));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7602 = null;
var count__7603 = (0);
var i__7604 = (0);
while(true){
if((i__7604 < count__7603)){
var vec__7605 = cljs.core._nth.call(null,chunk__7602,i__7604);
var name = cljs.core.nth.call(null,vec__7605,(0),null);
var map__7606 = cljs.core.nth.call(null,vec__7605,(1),null);
var map__7606__$1 = ((((!((map__7606 == null)))?((((map__7606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7606):map__7606);
var doc = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7633 = seq__7601;
var G__7634 = chunk__7602;
var G__7635 = count__7603;
var G__7636 = (i__7604 + (1));
seq__7601 = G__7633;
chunk__7602 = G__7634;
count__7603 = G__7635;
i__7604 = G__7636;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7601);
if(temp__4425__auto__){
var seq__7601__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7601__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__7601__$1);
var G__7637 = cljs.core.chunk_rest.call(null,seq__7601__$1);
var G__7638 = c__5709__auto__;
var G__7639 = cljs.core.count.call(null,c__5709__auto__);
var G__7640 = (0);
seq__7601 = G__7637;
chunk__7602 = G__7638;
count__7603 = G__7639;
i__7604 = G__7640;
continue;
} else {
var vec__7608 = cljs.core.first.call(null,seq__7601__$1);
var name = cljs.core.nth.call(null,vec__7608,(0),null);
var map__7609 = cljs.core.nth.call(null,vec__7608,(1),null);
var map__7609__$1 = ((((!((map__7609 == null)))?((((map__7609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7609):map__7609);
var doc = cljs.core.get.call(null,map__7609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7641 = cljs.core.next.call(null,seq__7601__$1);
var G__7642 = null;
var G__7643 = (0);
var G__7644 = (0);
seq__7601 = G__7641;
chunk__7602 = G__7642;
count__7603 = G__7643;
i__7604 = G__7644;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map