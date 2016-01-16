// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7396_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7396_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7401 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7402 = null;
var count__7403 = (0);
var i__7404 = (0);
while(true){
if((i__7404 < count__7403)){
var s = cljs.core._nth.call(null,chunk__7402,i__7404);
var temp__4425__auto___7405 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7405)){
var sheet_7406 = temp__4425__auto___7405;
var temp__4425__auto___7407__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7406.href,changed);
if(cljs.core.truth_(temp__4425__auto___7407__$1)){
var href_uri_7408 = temp__4425__auto___7407__$1;
sheet_7406.ownerNode.href = href_uri_7408.makeUnique().toString();
} else {
}
} else {
}

var G__7409 = seq__7401;
var G__7410 = chunk__7402;
var G__7411 = count__7403;
var G__7412 = (i__7404 + (1));
seq__7401 = G__7409;
chunk__7402 = G__7410;
count__7403 = G__7411;
i__7404 = G__7412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7401);
if(temp__4425__auto__){
var seq__7401__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7401__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__7401__$1);
var G__7413 = cljs.core.chunk_rest.call(null,seq__7401__$1);
var G__7414 = c__5709__auto__;
var G__7415 = cljs.core.count.call(null,c__5709__auto__);
var G__7416 = (0);
seq__7401 = G__7413;
chunk__7402 = G__7414;
count__7403 = G__7415;
i__7404 = G__7416;
continue;
} else {
var s = cljs.core.first.call(null,seq__7401__$1);
var temp__4425__auto___7417__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7417__$1)){
var sheet_7418 = temp__4425__auto___7417__$1;
var temp__4425__auto___7419__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7418.href,changed);
if(cljs.core.truth_(temp__4425__auto___7419__$2)){
var href_uri_7420 = temp__4425__auto___7419__$2;
sheet_7418.ownerNode.href = href_uri_7420.makeUnique().toString();
} else {
}
} else {
}

var G__7421 = cljs.core.next.call(null,seq__7401__$1);
var G__7422 = null;
var G__7423 = (0);
var G__7424 = (0);
seq__7401 = G__7421;
chunk__7402 = G__7422;
count__7403 = G__7423;
i__7404 = G__7424;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7429 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7430 = null;
var count__7431 = (0);
var i__7432 = (0);
while(true){
if((i__7432 < count__7431)){
var s = cljs.core._nth.call(null,chunk__7430,i__7432);
var temp__4425__auto___7433 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7433)){
var image_7434 = temp__4425__auto___7433;
var temp__4425__auto___7435__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7434.src,changed);
if(cljs.core.truth_(temp__4425__auto___7435__$1)){
var href_uri_7436 = temp__4425__auto___7435__$1;
image_7434.src = href_uri_7436.makeUnique().toString();
} else {
}
} else {
}

var G__7437 = seq__7429;
var G__7438 = chunk__7430;
var G__7439 = count__7431;
var G__7440 = (i__7432 + (1));
seq__7429 = G__7437;
chunk__7430 = G__7438;
count__7431 = G__7439;
i__7432 = G__7440;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7429);
if(temp__4425__auto__){
var seq__7429__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7429__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__7429__$1);
var G__7441 = cljs.core.chunk_rest.call(null,seq__7429__$1);
var G__7442 = c__5709__auto__;
var G__7443 = cljs.core.count.call(null,c__5709__auto__);
var G__7444 = (0);
seq__7429 = G__7441;
chunk__7430 = G__7442;
count__7431 = G__7443;
i__7432 = G__7444;
continue;
} else {
var s = cljs.core.first.call(null,seq__7429__$1);
var temp__4425__auto___7445__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7445__$1)){
var image_7446 = temp__4425__auto___7445__$1;
var temp__4425__auto___7447__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7446.src,changed);
if(cljs.core.truth_(temp__4425__auto___7447__$2)){
var href_uri_7448 = temp__4425__auto___7447__$2;
image_7446.src = href_uri_7448.makeUnique().toString();
} else {
}
} else {
}

var G__7449 = cljs.core.next.call(null,seq__7429__$1);
var G__7450 = null;
var G__7451 = (0);
var G__7452 = (0);
seq__7429 = G__7449;
chunk__7430 = G__7450;
count__7431 = G__7451;
i__7432 = G__7452;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7455){
var map__7458 = p__7455;
var map__7458__$1 = ((((!((map__7458 == null)))?((((map__7458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7458):map__7458);
var on_jsload = cljs.core.get.call(null,map__7458__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7458,map__7458__$1,on_jsload){
return (function (p1__7453_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7453_SHARP_,".js");
});})(map__7458,map__7458__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7458,map__7458__$1,on_jsload){
return (function (p1__7454_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7454_SHARP_).makeUnique());
});})(js_files,map__7458,map__7458__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7458,map__7458__$1,on_jsload){
return (function() { 
var G__7460__delegate = function (_){
return on_jsload.call(null);
};
var G__7460 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7461__i = 0, G__7461__a = new Array(arguments.length -  0);
while (G__7461__i < G__7461__a.length) {G__7461__a[G__7461__i] = arguments[G__7461__i + 0]; ++G__7461__i;}
  _ = new cljs.core.IndexedSeq(G__7461__a,0);
} 
return G__7460__delegate.call(this,_);};
G__7460.cljs$lang$maxFixedArity = 0;
G__7460.cljs$lang$applyTo = (function (arglist__7462){
var _ = cljs.core.seq(arglist__7462);
return G__7460__delegate(_);
});
G__7460.cljs$core$IFn$_invoke$arity$variadic = G__7460__delegate;
return G__7460;
})()
;})(js_files,map__7458,map__7458__$1,on_jsload))
,((function (js_files,map__7458,map__7458__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7458,map__7458__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7467_7471 = cljs.core.seq.call(null,things_to_log);
var chunk__7468_7472 = null;
var count__7469_7473 = (0);
var i__7470_7474 = (0);
while(true){
if((i__7470_7474 < count__7469_7473)){
var t_7475 = cljs.core._nth.call(null,chunk__7468_7472,i__7470_7474);
console.log(t_7475);

var G__7476 = seq__7467_7471;
var G__7477 = chunk__7468_7472;
var G__7478 = count__7469_7473;
var G__7479 = (i__7470_7474 + (1));
seq__7467_7471 = G__7476;
chunk__7468_7472 = G__7477;
count__7469_7473 = G__7478;
i__7470_7474 = G__7479;
continue;
} else {
var temp__4425__auto___7480 = cljs.core.seq.call(null,seq__7467_7471);
if(temp__4425__auto___7480){
var seq__7467_7481__$1 = temp__4425__auto___7480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7467_7481__$1)){
var c__5709__auto___7482 = cljs.core.chunk_first.call(null,seq__7467_7481__$1);
var G__7483 = cljs.core.chunk_rest.call(null,seq__7467_7481__$1);
var G__7484 = c__5709__auto___7482;
var G__7485 = cljs.core.count.call(null,c__5709__auto___7482);
var G__7486 = (0);
seq__7467_7471 = G__7483;
chunk__7468_7472 = G__7484;
count__7469_7473 = G__7485;
i__7470_7474 = G__7486;
continue;
} else {
var t_7487 = cljs.core.first.call(null,seq__7467_7481__$1);
console.log(t_7487);

var G__7488 = cljs.core.next.call(null,seq__7467_7481__$1);
var G__7489 = null;
var G__7490 = (0);
var G__7491 = (0);
seq__7467_7471 = G__7488;
chunk__7468_7472 = G__7489;
count__7469_7473 = G__7490;
i__7470_7474 = G__7491;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7493 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7493,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7493);

adzerk.boot_reload.reload.reload_css.call(null,G__7493);

adzerk.boot_reload.reload.reload_img.call(null,G__7493);

return G__7493;
});

//# sourceMappingURL=reload.js.map