// Compiled by ClojureScript 0.0-2725 {}
goog.provide('akiee.fileoperations');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.test');
akiee.fileoperations.fs = require("fs");
akiee.fileoperations.path = cljs.nodejs.require.call(null,"path");
akiee.fileoperations.process = cljs.nodejs.require.call(null,"process");
akiee.fileoperations.org = cljs.nodejs.require.call(null,"./lib/markdown-org-mode-parser");
cljs.core.enable_console_print_BANG_.call(null);
akiee.fileoperations.dirname = ".akiee";
akiee.fileoperations.filename = "liveflow.md";
akiee.fileoperations.testfile = "/home/macco/Listings/rakiee/test-load-file.md";
/**
* nil -> String
* produce the home directory of the user according to plattform
*/
akiee.fileoperations.user_home = (function user_home(){
if(cljs.core._EQ_.call(null,akiee.fileoperations.process.platform,"win32")){
return (akiee.fileoperations.process.env["USERPROFILE"]);
} else {
return (akiee.fileoperations.process.env["HOME"]);
}
});
try{var values__6306__auto___6835 = cljs.core._conj.call(null,cljs.core.List.EMPTY,akiee.fileoperations.user_home.call(null));
var result__6307__auto___6836 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__6306__auto___6835);
if(cljs.core.truth_(result__6307__auto___6836)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__6306__auto___6835),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__6306__auto___6835)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6834){var t__6344__auto___6837 = e6834;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6837,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__6306__auto___6839 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/macco"),akiee.fileoperations.user_home.call(null));
var result__6307__auto___6840 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6839);
if(cljs.core.truth_(result__6307__auto___6840)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6839),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6839)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6838){var t__6344__auto___6841 = e6838;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6841,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
akiee.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
} else {
akiee.fileoperations.fs.mkdirSync(dir_path);

akiee.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
});
try{var values__6306__auto___6843 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,[cljs.core.str("/home/macco/"),cljs.core.str(akiee.fileoperations.dirname),cljs.core.str("/"),cljs.core.str(akiee.fileoperations.filename)].join('')),akiee.fileoperations.create_task_list_file.call(null,"/home/macco"));
var result__6307__auto___6844 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6843);
if(cljs.core.truth_(result__6307__auto___6844)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6843),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6843)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6842){var t__6344__auto___6845 = e6842;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6845,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* nil -> String
* produce the path of the task file
*/
akiee.fileoperations.task_file_path = (function task_file_path(){
return akiee.fileoperations.create_task_list_file.call(null,akiee.fileoperations.user_home.call(null));
});
try{var values__6306__auto___6847 = cljs.core._conj.call(null,cljs.core.List.EMPTY,akiee.fileoperations.task_file_path.call(null));
var result__6307__auto___6848 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__6306__auto___6847);
if(cljs.core.truth_(result__6307__auto___6848)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__6306__auto___6847),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__6306__auto___6847)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6846){var t__6344__auto___6849 = e6846;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6849,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
try{var values__6306__auto___6851 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file.call(null,""));
var result__6307__auto___6852 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6851);
if(cljs.core.truth_(result__6307__auto___6852)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6851),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6851)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6850){var t__6344__auto___6853 = e6850;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6853,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__6306__auto___6855 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file.call(null,"eurniate"));
var result__6307__auto___6856 = cljs.core.apply.call(null,cljs.core._EQ_,values__6306__auto___6855);
if(cljs.core.truth_(result__6307__auto___6856)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6306__auto___6855),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6306__auto___6855)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6854){var t__6344__auto___6857 = e6854;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__6344__auto___6857,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}akiee.fileoperations.save_task_file = (function save_task_file(c,p,changed_QMARK_,chfn_BANG_){

if(cljs.core.truth_(changed_QMARK_)){
akiee.fileoperations.fs.writeFileSync(p,c);

return chfn_BANG_.call(null,false);
} else {
return cljs.core.println.call(null,"not changed");
}
});

//# sourceMappingURL=fileoperations.js.map