// Compiled by ClojureScript 1.7.122 {}
goog.provide('knotschixx.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.data');
knotschixx.app.cubesize = (6);
knotschixx.app.nums = cljs.core.range.call(null,(2),((1) + ((2) * knotschixx.app.cubesize)));
knotschixx.app.heart = "\u2764";
knotschixx.app.nums__GT_fields = (function knotschixx$app$nums__GT_fields(var_args){
var args7647 = [];
var len__5964__auto___7650 = arguments.length;
var i__5965__auto___7651 = (0);
while(true){
if((i__5965__auto___7651 < len__5964__auto___7650)){
args7647.push((arguments[i__5965__auto___7651]));

var G__7652 = (i__5965__auto___7651 + (1));
i__5965__auto___7651 = G__7652;
continue;
} else {
}
break;
}

var G__7649 = args7647.length;
switch (G__7649) {
case 1:
return knotschixx.app.nums__GT_fields.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return knotschixx.app.nums__GT_fields.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7647.length)].join('')));

}
});

knotschixx.app.nums__GT_fields.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return knotschixx.app.nums__GT_fields.call(null,nums,false);
});

knotschixx.app.nums__GT_fields.cljs$core$IFn$_invoke$arity$2 = (function (nums,reverse_QMARK_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,(cljs.core.truth_(reverse_QMARK_)?cljs.core.reverse.call(null,nums):nums)),knotschixx.app.heart);
});

knotschixx.app.nums__GT_fields.cljs$lang$maxFixedArity = 2;
knotschixx.app.fields = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),knotschixx.app.nums__GT_fields.call(null,knotschixx.app.nums),new cljs.core.Keyword(null,"yellow","yellow",-881035449),knotschixx.app.nums__GT_fields.call(null,knotschixx.app.nums),new cljs.core.Keyword(null,"green","green",-945526839),knotschixx.app.nums__GT_fields.call(null,knotschixx.app.nums,true),new cljs.core.Keyword(null,"blue","blue",-622100620),knotschixx.app.nums__GT_fields.call(null,knotschixx.app.nums,true)], null);
knotschixx.app.colors = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reversed","reversed",-286659968),false], null),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reversed","reversed",-286659968),false], null),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reversed","reversed",-286659968),true], null),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reversed","reversed",-286659968),true], null)], null);
knotschixx.app.init_checked = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"blue","blue",-622100620),cljs.core.PersistentHashSet.EMPTY], null);
if(typeof knotschixx.app.app_state !== 'undefined'){
} else {
knotschixx.app.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fields","fields",-1932066230),knotschixx.app.fields,new cljs.core.Keyword(null,"checked","checked",-50955819),knotschixx.app.init_checked,new cljs.core.Keyword(null,"failures","failures",-912916356),(0)], null));
}
knotschixx.app.undo_list = reagent.core.atom.call(null,null);
knotschixx.app.some_component = (function knotschixx$app$some_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)," and red"], null)," text."], null)], null);
});
knotschixx.app.checked_QMARK_ = (function knotschixx$app$checked_QMARK_(color,number){
return cljs.core.boolean$.call(null,cljs.core.contains_QMARK_.call(null,color.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state))),number));
});
knotschixx.app.checkable_QMARK_ = (function knotschixx$app$checkable_QMARK_(color,number){
var reversed_QMARK_ = new cljs.core.Keyword(null,"reversed","reversed",-286659968).cljs$core$IFn$_invoke$arity$1(color.call(null,knotschixx.app.colors));
var checked_set = color.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state)));
var max_checked = (function (){var or__4906__auto__ = cljs.core.apply.call(null,(cljs.core.truth_(reversed_QMARK_)?cljs.core.min:cljs.core.max),checked_set);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
if(cljs.core.truth_(reversed_QMARK_)){
return (999999);
} else {
return (0);
}
}
})();
var comperator_fn = (cljs.core.truth_(reversed_QMARK_)?cljs.core._LT_:cljs.core._GT_);
var count_checked = cljs.core.count.call(null,checked_set);
var is_last_QMARK_ = cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,color.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state)))))),number);
var and__4894__auto__ = comperator_fn.call(null,number,max_checked);
if(cljs.core.truth_(and__4894__auto__)){
return (!((is_last_QMARK_) && ((count_checked < (5))))) && (cljs.core.not_EQ_.call(null,number,knotschixx.app.heart));
} else {
return and__4894__auto__;
}
});
knotschixx.app.numcell = (function knotschixx$app$numcell(col,n){
var checkable_QMARK_ = knotschixx.app.checkable_QMARK_.call(null,col,n);
var checked_QMARK_ = knotschixx.app.checked_QMARK_.call(null,col,n);
var classes = new cljs.core.PersistentArrayMap(null, 3, ["num ",true,"crossed ",checked_QMARK_,"crossable ",checkable_QMARK_], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,classes))),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("numcell-"),cljs.core.str(col),cljs.core.str("-"),cljs.core.str(n)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (checkable_QMARK_,checked_QMARK_,classes){
return (function (){
if(cljs.core.truth_(checkable_QMARK_)){
return cljs.core.swap_BANG_.call(null,knotschixx.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819),col], null),cljs.core.conj,n);
} else {
return null;
}
});})(checkable_QMARK_,checked_QMARK_,classes))
], null),n], null);
});
knotschixx.app.row = (function knotschixx$app$row(color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.row."),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,color)))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("row-"),cljs.core.str(cljs.core.first.call(null,color))].join('')], null),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,knotschixx.app.numcell,cljs.core.first.call(null,color)),cljs.core.second.call(null,color)))], null);
});
knotschixx.app.undo = (function knotschixx$app$undo(){
var undos = cljs.core.deref.call(null,knotschixx.app.undo_list);
var temp__4425__auto__ = cljs.core.first.call(null,undos);
if(cljs.core.truth_(temp__4425__auto__)){
var old = temp__4425__auto__;
cljs.core.reset_BANG_.call(null,knotschixx.app.app_state,old);

return cljs.core.reset_BANG_.call(null,knotschixx.app.undo_list,cljs.core.rest.call(null,undos));
} else {
return null;
}
});
knotschixx.app.new_game = (function knotschixx$app$new_game(){
cljs.core.swap_BANG_.call(null,knotschixx.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"checked","checked",-50955819),knotschixx.app.init_checked);

return cljs.core.swap_BANG_.call(null,knotschixx.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"failures","failures",-912916356),(0));
});
knotschixx.app.sum = (function knotschixx$app$sum(c){
return cljs.core.reduce.call(null,cljs.core._PLUS_,c);
});
knotschixx.app.calc_color_score = (function knotschixx$app$calc_color_score(numbers){
return knotschixx.app.sum.call(null,cljs.core.range.call(null,(1),(cljs.core.count.call(null,numbers) + (1))));
});
knotschixx.app.calc_score = (function knotschixx$app$calc_score(checked_fields,failured){
return (knotschixx.app.sum.call(null,cljs.core.map.call(null,(function (p1__7654_SHARP_){
return knotschixx.app.calc_color_score.call(null,p1__7654_SHARP_);
}),cljs.core.vals.call(null,checked_fields))) - (failured * (5)));
});
knotschixx.app.show_score = (function knotschixx$app$show_score(checked_fields,failured){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),knotschixx.app.calc_score.call(null,checked_fields,failured)], null);
});
knotschixx.app.click_failure = (function knotschixx$app$click_failure(n){
console.log([cljs.core.str(n)].join(''));

return cljs.core.swap_BANG_.call(null,knotschixx.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"failures","failures",-912916356),n);
});
knotschixx.app.failures = (function knotschixx$app$failures(failured){
console.log([cljs.core.str(failured)].join(''));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.failures","div.failures",1656450655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("span.failure"),cljs.core.str((((failured > (0)))?".checked":null))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(((failured <= (0)))?cljs.core.partial.call(null,knotschixx.app.click_failure,(1)):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("span.failure"),cljs.core.str((((failured > (1)))?".checked":null))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(((failured <= (1)))?cljs.core.partial.call(null,knotschixx.app.click_failure,(2)):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("span.failure"),cljs.core.str((((failured > (2)))?".checked":null))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(((failured <= (2)))?cljs.core.partial.call(null,knotschixx.app.click_failure,(3)):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("span.failure"),cljs.core.str((((failured > (3)))?".checked":null))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(((failured <= (3)))?cljs.core.partial.call(null,knotschixx.app.click_failure,(4)):null)], null)], null)], null);
});
knotschixx.app.calling_component = (function knotschixx$app$calling_component(){
cljs.core.add_watch.call(null,knotschixx.app.app_state,new cljs.core.Keyword("knotschixx.app","undo-watcher","knotschixx.app/undo-watcher",1682553964),(function (_,___$1,old_state,___$2){
return cljs.core.swap_BANG_.call(null,knotschixx.app.undo_list,cljs.core.conj,old_state);
}));

cljs.core.add_watch.call(null,knotschixx.app.app_state,new cljs.core.Keyword("knotschixx.app","diff-watcher","knotschixx.app/diff-watcher",851769553),(function (_,___$1,old_state,new_state){
var temp__4423__auto__ = cljs.core.second.call(null,clojure.data.diff.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(new_state)));
if(cljs.core.truth_(temp__4423__auto__)){
var changed = temp__4423__auto__;
var color = cljs.core.first.call(null,cljs.core.keys.call(null,changed));
var number = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,changed)));
var is_last_QMARK_ = cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,color.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state)))))),number);
if(is_last_QMARK_){
return cljs.core.swap_BANG_.call(null,knotschixx.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819),color], null),cljs.core.conj,knotschixx.app.heart);
} else {
return null;
}
} else {
return null;
}
}));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div12","div12",757507472),cljs.core.doall.call(null,cljs.core.map.call(null,knotschixx.app.row,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),knotschixx.app.undo,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,knotschixx.app.undo_list)))], null),"r\u00FCckg\u00E4ngig"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),knotschixx.app.new_game], null),"neues spiel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knotschixx.app.failures,new cljs.core.Keyword(null,"failures","failures",-912916356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knotschixx.app.show_score,new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state)),new cljs.core.Keyword(null,"failures","failures",-912916356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state))], null)], null);
});
knotschixx.app.init = (function knotschixx$app$init(){
console.log([cljs.core.str(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knotschixx.app.app_state)))].join(''));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [knotschixx.app.calling_component], null),document.getElementById("container"));
});

//# sourceMappingURL=app.js.map