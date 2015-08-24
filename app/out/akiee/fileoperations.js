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
try{var values__4799__auto___16477 = cljs.core._conj.call(null,cljs.core.List.EMPTY,akiee.fileoperations.user_home.call(null));
var result__4800__auto___16478 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__4799__auto___16477);
if(cljs.core.truth_(result__4800__auto___16478)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__4799__auto___16477),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__4799__auto___16477)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16476){var t__4837__auto___16479 = e16476;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16479,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__4799__auto___16481 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/macco"),akiee.fileoperations.user_home.call(null));
var result__4800__auto___16482 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___16481);
if(cljs.core.truth_(result__4800__auto___16482)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___16481),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___16481)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16480){var t__4837__auto___16483 = e16480;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),"/home/macco"),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16483,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
try{var values__4799__auto___16485 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,[cljs.core.str("/home/macco/"),cljs.core.str(akiee.fileoperations.dirname),cljs.core.str("/"),cljs.core.str(akiee.fileoperations.filename)].join('')),akiee.fileoperations.create_task_list_file.call(null,"/home/macco"));
var result__4800__auto___16486 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___16485);
if(cljs.core.truth_(result__4800__auto___16486)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___16485),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___16485)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16484){var t__4837__auto___16487 = e16484;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null),"/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16487,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
* nil -> String
* produce the path of the task file
*/
akiee.fileoperations.task_file_path = (function task_file_path(){
return akiee.fileoperations.create_task_list_file.call(null,akiee.fileoperations.user_home.call(null));
});
try{var values__4799__auto___16489 = cljs.core._conj.call(null,cljs.core.List.EMPTY,akiee.fileoperations.task_file_path.call(null));
var result__4800__auto___16490 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__4799__auto___16489);
if(cljs.core.truth_(result__4800__auto___16490)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__4799__auto___16489),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__4799__auto___16489)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16488){var t__4837__auto___16491 = e16488;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"task-file-path","task-file-path",1975813634,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16491,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
try{var values__4799__auto___16493 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file.call(null,""));
var result__4800__auto___16494 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___16493);
if(cljs.core.truth_(result__4800__auto___16494)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___16493),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___16493)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16492){var t__4837__auto___16495 = e16492;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16495,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__4799__auto___16497 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),akiee.fileoperations.load_task_file.call(null,"eurniate"));
var result__4800__auto___16498 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___16497);
if(cljs.core.truth_(result__4800__auto___16498)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___16497),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___16497)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16496){var t__4837__auto___16499 = e16496;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16499,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__4799__auto___16501 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"# Inbox\n## TODO Test\nRANK: 9\n"),akiee.fileoperations.load_task_file.call(null,akiee.fileoperations.testfile));
var result__4800__auto___16502 = cljs.core.apply.call(null,cljs.core._EQ_,values__4799__auto___16501);
if(cljs.core.truth_(result__4800__auto___16502)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),new cljs.core.Symbol(null,"testfile","testfile",2072741227,null)),"# Inbox\n## TODO Test\nRANK: 9\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__4799__auto___16501),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),new cljs.core.Symbol(null,"testfile","testfile",2072741227,null)),"# Inbox\n## TODO Test\nRANK: 9\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__4799__auto___16501)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16500){var t__4837__auto___16503 = e16500;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),new cljs.core.Symbol(null,"testfile","testfile",2072741227,null)),"# Inbox\n## TODO Test\nRANK: 9\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__4837__auto___16503,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}akiee.fileoperations.save_task_file = (function save_task_file(c,p,changed_QMARK_,chfn_BANG_){

if(cljs.core.truth_(changed_QMARK_)){
akiee.fileoperations.fs.writeFileSync(p,c);

return chfn_BANG_.call(null,false);
} else {
return cljs.core.println.call(null,"not changed");
}
});

//# sourceMappingURL=fileoperations.js.map