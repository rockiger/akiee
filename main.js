var gui = require('nw.gui');
var appconfig = require("./package.json");

onload = function() {        

    var ace = window.ace;
    var detectedMode;
    var win = gui.Window.get(); 
    win.show();
    
    var util = require("./util");
    var fs = require("fs");
    var Path = require("path");    
    
    var editor = ace.edit("editor");

    document.getElementById('editor').style.fontSize='16px';
    var theme = window.localStorage.aceTheme || "twilight";
    editor.setTheme("ace/theme/"+theme);
    var editorSession = editor.getSession();
    // name: ["Menu caption", "extensions", "content-type", "hidden|other"]
    var SupportedModes = {
        markdown: ["Markdown", "md|markdown", "text/x-markdown", "other"]
    };
    var fileExtensions = {}, ModesCaption = {}, contentTypes = {}, hiddenMode = {}, otherMode = {};

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
        

    });
    
    var hasChanged = false;
    win.currentFile = util.getTaskFiles();
    openFile(win.currentFile);

    function OpenFileWindow(filename){
        var win = gui.Window.open('index.html', appconfig.window);
        win.currentFile = filename;
    }
    
    
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
        if (currentFile !== "Untitled") {
            if (hasChanged) {
                var data = editor.getSession().getValue(); //.replace(/\n/g,"\r\n");
                fs.writeFileSync(currentFile, data, "utf8");
                console.log("Saved " + currentFile);
                $("title").text(currentFile);
                hasChanged = false;
            }
        }else{
            saveasDialog('#saveasDialog');
        }
    }

    // Listener         
    editorSession.on("change", function() {
        if (currentFile) {
            hasChanged = true;
            $("title").text("*" + currentFile);
        }
    });

    win.on('close', function() {
        saveFileFN();
        win.close(true);
    });
    
    win.on('blur', function() {
        saveFileFN();
    });

    editor.on('blur', function() {
        saveFileFN();
    });

    editor.on('change', function() {
        hasChanged = true;
        console.log("Editor changed");
    });
    
    $("#windowClose").click(function() {
        win.close();
    });
};


