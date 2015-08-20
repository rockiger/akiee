// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.fileoperations');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.test');
akiee.fileoperations.fs = (function (){var G__10741 = "fs";
return require(G__10741);
})();
akiee.fileoperations.path = (function (){var G__10742 = "path";
return (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1(G__10742) : cljs.nodejs.require.call(null,G__10742));
})();
akiee.fileoperations.process = (function (){var G__10743 = "process";
return (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1(G__10743) : cljs.nodejs.require.call(null,G__10743));
})();
akiee.fileoperations.org = (function (){var G__10744 = "./lib/markdown-org-mode-parser";
return (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1(G__10744) : cljs.nodejs.require.call(null,G__10744));
})();
cljs.core.enable_console_print_BANG_();
akiee.fileoperations.dirname = ".akiee";
akiee.fileoperations.filename = "liveflow.md";
akiee.fileoperations.testfile = "/home/macco/Listings/rakiee/test-load-file.md";
/**
* nil -> String
* produce the home directory of the user according to plattform
*/
akiee.fileoperations.user_home = (function user_home(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(akiee.fileoperations.process.platform,"win32")){
return (akiee.fileoperations.process.env["USERPROFILE"]);
} else {
return (akiee.fileoperations.process.env["HOME"]);
}
});
try{var values__9971__auto___10746 = cljs.core._conj(cljs.core.List.EMPTY,akiee.fileoperations.user_home());
var result__9972__auto___10747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__9971__auto___10746);
if(cljs.core.truth_(result__9972__auto___10747)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core.string_QMARK_,values__9971__auto___10746),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__9971__auto___10746)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10745){var t__10009__auto___10748 = e10745;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),cljs.core.constant$keyword$60,t__10009__auto___10748,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10750 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"/home/macco"),akiee.fileoperations.user_home());
var result__9972__auto___10751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10750);
if(cljs.core.truth_(result__9972__auto___10751)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10750),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10750)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10749){var t__10009__auto___10752 = e10749;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),cljs.core.constant$keyword$60,t__10009__auto___10752,cljs.core.constant$keyword$58,null], null));
}/**
* String -> String
* consumes the home directory of the user and return the file path of task list,
* if file is not present, it get's created
*/
akiee.fileoperations.create_task_list_file = (function create_task_list_file(h){
var dir_path = akiee.fileoperations.path.join(h,akiee.fileoperations.dirname,"/");
var file_path = akiee.fileoperations.path.join(dir_path,akiee.fileoperations.filename);
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(dir_path))){
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(file_path))){
return file_path;
} else {
akiee.fileoperations.fs.writeFileSync(file_path,"");

return file_path;
}
} else {
akiee.fileoperations.fs.mkdirSync(dir_path);

akiee.fileoperations.fs.writeFileSync(file_path);

return file_path;
}
});
try{var values__9971__auto___10754 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str("/home/macco/"),cljs.core.str(akiee.fileoperations.dirname),cljs.core.str("/"),cljs.core.str(akiee.fileoperations.filename)].join('')),akiee.fileoperations.create_task_list_file("/home/macco"));
var result__9972__auto___10755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10754);
if(cljs.core.truth_(result__9972__auto___10755)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10754),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10754)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10753){var t__10009__auto___10756 = e10753;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),cljs.core.constant$keyword$60,t__10009__auto___10756,cljs.core.constant$keyword$58,null], null));
}/**
* nil -> String
* produce the path of the task file
*/
akiee.fileoperations.task_file_path = (function task_file_path(){
return akiee.fileoperations.create_task_list_file(akiee.fileoperations.user_home());
});
try{var values__9971__auto___10758 = cljs.core._conj(cljs.core.List.EMPTY,akiee.fileoperations.task_file_path());
var result__9972__auto___10759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__9971__auto___10758);
if(cljs.core.truth_(result__9972__auto___10759)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core.string_QMARK_,values__9971__auto___10758),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__9971__auto___10758)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10757){var t__10009__auto___10760 = e10757;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),cljs.core.constant$keyword$60,t__10009__auto___10760,cljs.core.constant$keyword$58,null], null));
}/**
* String -> String
* consumes the path p for a file and returns the content of the file
*/
akiee.fileoperations.load_task_file = (function load_task_file(p){
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(p))){
return [cljs.core.str(akiee.fileoperations.fs.readFileSync(p,"utf8"))].join('');
} else {
return "";
}
});
try{var values__9971__auto___10762 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file(""));
var result__9972__auto___10763 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10762);
if(cljs.core.truth_(result__9972__auto___10763)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10762),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10762)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10761){var t__10009__auto___10764 = e10761;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),cljs.core.constant$keyword$60,t__10009__auto___10764,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10766 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file("eurniate"));
var result__9972__auto___10767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10766);
if(cljs.core.truth_(result__9972__auto___10767)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10766),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10766)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10765){var t__10009__auto___10768 = e10765;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),cljs.core.constant$keyword$60,t__10009__auto___10768,cljs.core.constant$keyword$58,null], null));
}try{var values__9971__auto___10770 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"# Inbox\n## TODO Test\nRANK: 9\n"),akiee.fileoperations.load_task_file(akiee.fileoperations.testfile));
var result__9972__auto___10771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9971__auto___10770);
if(cljs.core.truth_(result__9972__auto___10771)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$52,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),new cljs.core.Symbol(null,"testfile","testfile",2072741227,null)),"# Inbox\n## TODO Test\nRANK: 9\n"),cljs.core.constant$keyword$60,cljs.core.cons(cljs.core._EQ_,values__9971__auto___10770),cljs.core.constant$keyword$58,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$53,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),new cljs.core.Symbol(null,"testfile","testfile",2072741227,null)),"# Inbox\n## TODO Test\nRANK: 9\n"),cljs.core.constant$keyword$60,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9971__auto___10770)),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.constant$keyword$58,null], null));
}

}catch (e10769){var t__10009__auto___10772 = e10769;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$54,cljs.core.constant$keyword$59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),new cljs.core.Symbol(null,"testfile","testfile",2072741227,null)),"# Inbox\n## TODO Test\nRANK: 9\n"),cljs.core.constant$keyword$60,t__10009__auto___10772,cljs.core.constant$keyword$58,null], null));
}akiee.fileoperations.save_task_file = (function save_task_file(c,p,changed_QMARK_,chfn_BANG_){

if(cljs.core.truth_(changed_QMARK_)){
akiee.fileoperations.fs.writeFileSync(p,c);

var G__10774 = false;
return (chfn_BANG_.cljs$core$IFn$_invoke$arity$1 ? chfn_BANG_.cljs$core$IFn$_invoke$arity$1(G__10774) : chfn_BANG_.call(null,G__10774));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["not changed"], 0));
}
});
