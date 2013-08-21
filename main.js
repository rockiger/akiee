if(!window.appLoad){
    var appconfig = require("./package.json");
    window.appLoad = function(gui) {
        
        var ace = window.ace;
        
        var detectedMode;
        
        var Range = ace.require("ace/range").Range;
        var jsbeautify = require("./jsbeautify/jsbeautify.js");
        
        var win = gui.Window.get(); 
        win.show();
        var fs = require("fs");
        var Path = require("path");
    
        if(!window.global.OpenerLoaded){
            window.global.OpenerLoaded = true;
            gui.App.on("open",function(filename){
                OpenFileWindow(filename);
            });
        }
        
        function OpenFileWindow(filename){
            var win = gui.Window.open('index.html', appconfig.window);
            win.currentFile = filename;
        }
        
        var editor = ace.edit("editor");
        
        editor.commands.addCommand({
            name: 'beautify',
            bindKey: {mac: "Command-Shift-B", win: "Shift-Ctrl-B"},
            exec: function(editor) {
                
                var sel = editor.selection;
                var session = editor.session;
                var range = sel.getRange();
                var options = {};
                    options.space_before_conditional = true;
                    options.keep_array_indentation =  false;
                    options.preserve_newlines =  true;
                    options.unescape_strings =  true;
                    options.jslint_happy =  false;
                    options.brace_style =  "end-expand";
            
                    if (session.getUseSoftTabs()) {
                        options.indent_char = " ";
                        options.indent_size = session.getTabSize();
                    } else {
                        options.indent_char = "\t";
                        options.indent_size = 1;
                    }
                
                var line = session.getLine(range.start.row);
                var indent = line.match(/^\s*/)[0];
                var trim = false;
        
                if (range.start.column < indent.length)
                    range.start.column = 0;
                else
                    trim = true;
        
        
                var value = session.getTextRange(range);
                $("[data-mode]").parent().removeClass("active");
                //var syntax = session.syntax;
                var type = null;
        
                if (detectedMode == "javascript") {
                    type = "js";
                } else if (detectedMode == "css") {
                    type = "css";
                } if (/^\s*<!?\w/.test(value)) {
                    type = "html";
                } else if (detectedMode == "xml") {
                    type = "html";
                } else if (detectedMode == "html") {
                    if (/[^<]+?\{[\s\-\w]+:[^}]+;/.test(value))
                        type = "css";
                    else if (/<\w+[ \/>]/.test(value))
                        type = "html";
                    else
                        type = "js";
                }
        
                try {
                    value = jsbeautify[type + "_beautify"](value, options);
                    if (trim)
                        value = value.replace(/^/gm, indent).trim();
                    if (range.end.column === 0)
                        value += "\n" + indent;
                }
                catch (e) {
                    window.alert("Error: This code could not be beautified " + syntax + " is not supported yet");
                    return;
                }
        
                var end = session.replace(range, value);
                sel.setSelectionRange(Range.fromPoints(range.start, end));
                
            },
            readOnly: false // false if this command should not apply in readOnly mode
        });
        
        
        var theme = window.localStorage.aceTheme || "twilight";
        editor.setTheme("ace/theme/"+theme);
        var editorSession = editor.getSession();
        // name: ["Menu caption", "extensions", "content-type", "hidden|other"]
        var SupportedModes = {
            abap: ["ABAP", "abap", "text/x-abap", "other"],
            asciidoc: ["AsciiDoc", "asciidoc", "text/x-asciidoc", "other"],
            c9search: ["C9Search", "c9search", "text/x-c9search", "hidden"],
            c_cpp: ["C, C++", "c|cc|cpp|cxx|h|hh|hpp", "text/x-c"],
            clojure: ["Clojure", "clj", "text/x-script.clojure"],
            coffee: ["CoffeeScript", "*Cakefile|coffee|cf", "text/x-script.coffeescript"],
            coldfusion: ["ColdFusion", "cfm", "text/x-coldfusion", "other"],
            csharp: ["C#", "cs", "text/x-csharp"],
            css: ["CSS", "css", "text/css"],
            dart: ["Dart", "dart", "text/x-dart"],
            diff: ["Diff", "diff|patch", "text/x-diff", "other"],
            glsl: ["Glsl", "glsl|frag|vert", "text/x-glsl", "other"],
            golang: ["Go", "go", "text/x-go"],
            groovy: ["Groovy", "groovy", "text/x-groovy", "other"],
            haml: ["Haml", "haml", "text/haml", "other"],
            haxe: ["haXe", "hx", "text/haxe", "other"],
            html: ["HTML", "htm|html|xhtml", "text/html"],
            jade: ["Jade", "jade", "text/x-jade"],
            java: ["Java", "java", "text/x-java-source"],
            jsp: ["JSP", "jsp", "text/x-jsp", "other"],
            javascript: ["JavaScript", "js", "application/javascript"],
            json: ["JSON", "json", "application/json"],
            jsx: ["JSX", "jsx", "text/x-jsx", "other"],
            latex: ["LaTeX", "latex|tex|ltx|bib", "application/x-latex", "other"],
            less: ["LESS", "less", "text/x-less"],
            lisp: ["Lisp", "lisp|scm|rkt", "text/x-lisp", "other"],
            liquid: ["Liquid", "liquid", "text/x-liquid", "other"],
            lua: ["Lua", "lua", "text/x-lua"],
            luapage: ["LuaPage", "lp", "text/x-luapage", "other"],
            makefile: ["Makefile", "*GNUmakefile|*makefile|*Makefile|*OCamlMakefile|make", "text/x-makefile", "other"],
            markdown: ["Markdown", "md|markdown", "text/x-markdown", "other"],
            objectivec: ["Objective-C", "m", "text/objective-c", "other"],
            ocaml: ["OCaml", "ml|mli", "text/x-script.ocaml", "other"],
            perl: ["Perl", "pl|pm", "text/x-script.perl"],
            pgsql: ["pgSQL", "pgsql", "text/x-pgsql", "other"],
            php: ["PHP", "php|phtml", "application/x-httpd-php"],
            powershell: ["Powershell", "ps1", "text/x-script.powershell", "other"],
            python: ["Python", "py", "text/x-script.python"],
            r: ["R", "r", "text/x-r", "other"],
            rdoc: ["RDoc", "Rd", "text/x-rdoc", "other"],
            rhtml: ["RHTML", "Rhtml", "text/x-rhtml", "other"],
            ruby: ["Ruby", "ru|gemspec|rake|rb", "text/x-script.ruby"],
            scad: ["OpenSCAD", "scad", "text/x-scad", "other"],
            scala: ["Scala", "scala", "text/x-scala"],
            scss: ["SCSS", "scss|sass", "text/x-scss"],
            sh: ["SH", "sh|bash|bat", "application/x-sh"],
            stylus: ["Stylus", "styl|stylus", "text/x-stylus"],
            sql: ["SQL", "sql", "text/x-sql"],
            svg: ["SVG", "svg", "image/svg+xml", "other"],
            tcl: ["Tcl", "tcl", "text/x-tcl", "other"],
            text: ["Text", "txt", "text/plain", "hidden"],
            textile: ["Textile", "textile", "text/x-web-textile", "other"],
            typescript: ["Typescript", "ts|str", "text/x-typescript"],
            xml: ["XML", "xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl", "application/xml"],
            xquery: ["XQuery", "xq", "text/x-xquery"],
            yaml: ["YAML", "yaml", "text/x-yaml"]
        };
        var fileExtensions = {}, ModesCaption = {}, contentTypes = {}, hiddenMode = {}, otherMode = {};
        var syntaxMenuHtml = "";
        Object.keys(SupportedModes).forEach(function(name) {
            var mode = SupportedModes[name];
            mode.caption = mode[0];
            mode.mime = mode[2];
            mode.hidden = mode[3] == "hidden" ? true : false;
            mode.other = mode[3] == "other" ? true : false;
            mode.ext = mode[1];
            mode.ext.split("|").forEach(function(ext) {
                fileExtensions[ext] = name;
            });
            ModesCaption[mode.caption] = name;
            hiddenMode[mode.caption] = mode.hidden;
            otherMode[mode.caption] = mode.other;
            contentTypes[mode.mime] = name;
            
            syntaxMenuHtml += '<li><a href="#" data-mode="'+name+'">'+mode.caption+'</a></li>';
        });
        
        $("#syntaxMenu").html(syntaxMenuHtml);
        
    
        var hasChanged = false;
        var currentFile = 
                win.currentFile ? 
                win.currentFile :
                process && 
                process._nw_app && 
                fs.existsSync(process._nw_app.argv[0]) ?
                process._nw_app.argv[0] : 
                null ;
        
        if(win.currentFile){
            openFile(currentFile);
        }else if (process && process._nw_app && fs.existsSync(process._nw_app.argv[0])) {
            try{
                openFile(process._nw_app.argv[0]);
            }catch(e){
                console.log(e);
            }
        }else{
            openFile();
        }
    
    
        editorSession.on("change", function() {
            if (currentFile) {
                hasChanged = true;
                $("title").text("*" + currentFile);
            }
        });
    
        $(window).keypress(function(event) {
            if (!(event.which == 115 && event.ctrlKey) && event.which !== 19) return true;
            event.preventDefault();
            if (!currentFile) return false;
            saveFileFN();
            return false;
        });
        
        function openFile(path) {
            if (hasChanged && !saveFileFN(true)) return false;
            currentFile = null;
            if (path) {
                var fileMode = fileExtensions[Path.basename(path).split(".")[1]];
                if (fileMode) {
                    detectedMode = fileMode;
                    editor.getSession().setMode("ace/mode/" + fileMode);
                }
                hasChanged = false;
                editor.getSession().setValue(fs.readFileSync(path, "utf8"));
                hasChanged = false;
            }
            else {
                path = "Untitled";
                editor.getSession().setValue("");
            }
    
            currentFile = path;
            $("title").text(currentFile);
        }
        function saveasDialog(name) {
            var chooser = $(name);
            chooser.trigger('click');
            chooser.change(function(evt) {
                var saveFilename = $(this).val();
                currentFile = saveFilename;
                hasChanged = true;
                saveFileFN();
            });
        }
        function saveFileFN() {
            if (/*hasChanged &&*/ currentFile !== "Untitled") {
                var data = editor.getSession().getValue(); //.replace(/\n/g,"\r\n");
                if(currentFile == "Untitled"){
                    saveasDialog('#saveasDialog');
                }else{
                    fs.writeFileSync(currentFile, data, "utf8");
                    $("title").text(currentFile);
                    hasChanged = false;
                }
            }else{
                saveasDialog('#saveasDialog');
            }
        }
    
        $("#newFile").click(function() {
            if (confirm("All Changes will be lost?")) {
                openFile();
            }
        });
        $("#openFile").click(function() {
            function chooseFile(name) {
                var chooser = $(name);
                chooser.trigger('click');
                chooser.change(function(evt) {
                    var openFilename = $(this).val();
                    //openFile(openFilename);
                    OpenFileWindow(openFilename);
                });
            }
            chooseFile('#openfileDialog');
        });
        $("#saveFile").click(function() {
            saveFileFN();
        });
        $("#saveasFile").click(function() {
            saveasDialog('#saveasDialog');
        });
        
        //Theme
        
        $("[data-theme]").click(function(e) {
            theme = e.target.attributes["data-theme"].value;
            window.localStorage.aceTheme = theme;
            editor.setTheme("ace/theme/"+theme);
            
            $("[data-theme]").parent().removeClass("active");
            $("[data-theme='"+theme+"']").parent().addClass("active");
        });
        
        var darkThemes = [
            'ambiance',
            'chaos',
            'clouds_midnight',
            'cobalt',
            'idle_fingers',
            'kr_theme',
            'merbivore',
            'merbivore_soft',
            'mono_industrial',
            'monokai',
            'pastel_on_dark',
            'solarized_dark',
            'tomorrow_night',
            'tomorrow_night_blue',
            'tomorrow_night_bright',
            'tomorrow_night_eighties',
            'twilight',
            'vibrant_ink'
        ];
        
        function isDarkTheme(theme){
            for(var i in darkThemes){
                if(darkThemes[i] == theme) return true;
            }
            return false;
        }
        
        $("[data-theme]").hover(function(e){
            var ttheme = e.target.attributes["data-theme"].value;
            editor.setTheme("ace/theme/"+ttheme);
            if(isDarkTheme(ttheme)){
                $(".navbar-static-top").addClass("navbar-inverse");
            }else{
                $(".navbar-static-top").removeClass("navbar-inverse");
            }
        },function(){
            var ttheme = window.localStorage.aceTheme;
            editor.setTheme("ace/theme/"+ttheme);
            if(isDarkTheme(ttheme)){
                $(".navbar-static-top").addClass("navbar-inverse");
            }else{
                $(".navbar-static-top").removeClass("navbar-inverse");
            }
        });
        
        $("[data-theme]").parent().removeClass("active");
        $("[data-theme='"+theme+"']").parent().addClass("active");
        if(isDarkTheme(theme)){
            $(".navbar-static-top").addClass("navbar-inverse");
        }else{
            $(".navbar-static-top").removeClass("navbar-inverse");
        }
        
        //Syntax
        
        $("[data-mode]").click(function(e) {
            var mode = e.target.attributes["data-mode"].value;
            editor.getSession().setMode("ace/mode/" + mode);
            detectedMode = mode;
            $("[data-mode]").parent().removeClass("active");
            $("[data-mode='"+mode+"']").parent().addClass("active");
        });
        
        
        $("[data-mode]").hover(function(e){
            var mode = e.target.attributes["data-mode"].value;
            editor.getSession().setMode("ace/mode/" + mode);
        },function(){
            editor.getSession().setMode("ace/mode/" + detectedMode);
        });
        
        $("[data-mode]").parent().removeClass("active");
        $("[data-mode='"+detectedMode+"']").parent().addClass("active");
            
        win.on('close', function() {
            function disp_confirm() {
                var r = confirm("Press a button!");
                if (r === true) {
                    alert("You pressed OK!");
                }
                else {
                    this.close(true);
                }
            }
            win.close(true);
        });
    
        $("#windowClose").click(function() {
            win.close();
        });
    };
}
