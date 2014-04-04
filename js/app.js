(function()
{
    "use strict";
    var fs = require("fs");
    var assert = require("assert");
    var util = require("./js/util");
    var org = require('./lib/markdown-org-mode-parser');

    /*
     * Akiee - a  Markdown alternative to Emacs Org-mode
     */
    
    /*
     * ==========
     * Constants:
     */
    
    var WIN = window.gui.Window.get();
    var ED = setupAce("editor");
    var ES = ED.getSession();
    LW.ES = ES;
    LW.ED = ED;
    var DOC = document;
    var TODO = "TODO";
    var DONE = "DONE";
    var ALL = "ALL";;
    var DOING = "DOING";
    
    /*
     * ==========
     * Globals:
     */
    
    var hasChanged = false;
    var currentFile;
    
    /*
     * ==========
     * Data definitions:
     */
    
    /* TaskState is one of:
     * - "TODO"
     * - "DONE"
     * - "DOING"
     *        
        function fnForTaskState(ts) {
            if (ts === "DONE") {
                //code  
            } else if (ts === "DONE") {
                //code  
            } else if (ts === "DOING") {
                //code
            }
        }
     */
    
    /*
     * ==========
     * Functions:
     */
    
    /*
     * String -> ListOfString  ???
     * consumes the name of the html element the editor should get atttached to 'main ("editor");'
     */
    function main (element) {
        // Workaround otherwise the editor doesn't load fully, with right size and markdown mode
        window.setTimeout(showDoing,50); 
        // Listener
        ES.on("change", function() {
          if (currentFile) {
            hasChanged = true;
            console.log("HasChanged: " + hasChanged);
          }
        });
      
        WIN.on('close', function() {
          saveFile(ED);
          win.close(true);
        });
      
        WIN.on('blur', function() {
          saveFile(ED);
        });
      
        ED.on('blur', function() {
          saveFile(ED);
        });
        
        var taskButton = document.getElementById("show-tasks");
        taskButton.onclick = showAll;
        
        var todoButton = document.getElementById("show-todo");
        todoButton.onclick = showTodo;
        
        var doneButton = document.getElementById("show-doing");
        doneButton.onclick = showDoing;
        
        var doneButton = document.getElementById("show-done");
        doneButton.onclick = showDone;
        
        var editorButton = document.getElementById("show-editor");
        editorButton.onclick = showEditor;
        
        document.addEventListener('keyup', function (e) {
            if (e.keyCode === 32 && e.ctrlKey) { // CTRL + Space
                toggleTasks();
            } else if ((e.keyCode === 49 || e.keyCode === 97 ) && e.ctrlKey) {  // CTRL + 1
                showTodo();
            } else if ((e.keyCode === 50 || e.keyCode === 98 ) && e.ctrlKey) {  // CTRL + 2
                showDoing();
            } else if ((e.keyCode === 51 || e.keyCode === 99 ) && e.ctrlKey) {  // CTRL + 3
                showDone();
            } else if ((e.keyCode === 52 || e.keyCode === 100) && e.ctrlKey) { // CTRL + 4
                showAll();
            } else if ((e.keyCode === 53 || e.keyCode === 101) && e.ctrlKey) { // CTRL + 5
                showEditor();
            }
            console.log(e.keyCode);
        });    
    
    }
    
    /*
     * Id -> Ace
     * activates the ace Editor and ads thim to element
     */
    function setupAce(element) {
    
        var editor = ace.edit(element);
        var content;
        editor.setTheme("ace/theme/tomorrow_night_blue");
        editor.getSession().setMode("ace/mode/markdown");
        editor.getSession().setUseWrapMode(true);
        // Because people want to edit right away
        editor.focus();
        currentFile = util.getTaskFiles();
        content = openFile(editor, currentFile)
        // Because 16px is easier on the eyes
        editor.setFontSize(16);
        return editor;
    }

    /**
     * String -> ListOfNodes
     * Produces a list of nodes with in a string with markdown content md
     */
    assert.deepEqual("","", "getNodes");
    function getNodes(md) {
        var nodes = org.parseBigString(md);
        return nodes;
    }

    /* ListOfNodes -> String
     * produces the HTML from a ListOfNodes lon
     */
    assert.deepEqual("","", "makeTodoList");
    var LON = [{"todo": 'TODO', "headline":"Bla bla bla"}, {"todo": 'DONE', "headline":"Blub blub blub"}, {"todo": 'TODO', "headline":"Bli bli bli"}, {"todo": 'DOING', "headline":"This is the string for what is now"}];
    assert.deepEqual(makeTodoList(LON, ALL), "<tr><td>TODO</td><td>Bla bla bla</td></tr><tr><td>DONE</td><td>Blub blub blub</td></tr><tr><td>TODO</td><td>Bli bli bli</td></tr><tr><td>DOING</td><td>This is the string for what is now</td></tr>", "makeTodoList");
    assert.deepEqual(makeTodoList(LON, TODO), "<tr><td>TODO</td><td>Bla bla bla</td></tr><tr><td>TODO</td><td>Bli bli bli</td></tr>", "makeTodoList");
    assert.deepEqual(makeTodoList(LON, DONE), "<tr><td>DONE</td><td>Blub blub blub</td></tr>", "makeTodoList");
    assert.deepEqual(makeTodoList(LON, DOING), "<tr><td>DOING</td><td>This is the string for what is now</td></tr>", "makeTodoList");
    
    function makeTodoList(lon, state) {
        if (lon.length === 0) {
            return "";
        }
        if (state === ALL) {
        return (("<tr><td>"+lon[0].todo +"</td><td>" + lon[0].headline + "</td></tr>") + makeTodoList(lon.slice(1), state));
        }
        else {
            if (lon[0].todo === state) {
                return (("<tr><td>"+lon[0].todo +"</td><td>" + lon[0].headline + "</td></tr>") + makeTodoList(lon.slice(1), state));    
            } else {
                return makeTodoList(lon.slice(1), state);
            }
            
        }
        
    }
    
    /* String -> undefined
     * insert the html in the el
     */
    function insertHtml(html, el) {
        var tag = document.getElementById(el);
        tag.innerHTML = html;
    }
    
    /*  ->
     *  Toggles between the editor and the todo list
     *  !!!
     */
    function toggleTasks() {
        var editor = document.getElementById("editor");
        var list   = document.getElementById("list");
        if (editor.style.display !== "none") {
            showDoing();
        } else {
            showEditor();
        }
    }
    
    /*  ->
     *  shows the editor
     */
    function showEditor() {
        var editor = document.getElementById("editor");
        var list   = document.getElementById("list");
        list.style.display = "none";
        editor.style.display = "block";
        ED.focus();
    }
    
    /* ->
     * shows a list of the todos
     */
    function showTodo() {
        showTask(TODO);
    }
    
    /* ->
     * shows a list of the done tasks
     */
    function showDoing() {
        showTask(DOING);
    }
    
    /* ->
     * shows a list of the done tasks
     */
    function showDone() {
        showTask(DONE);
    }
    
    /* ->
     * shows a list of all tasks
     */
    function showAll() {
        showTask(ALL);
    }
    
    /* ->
     * consumes a task state s and shows a list of the done tasks
     */
    function showTask(state) {
        var editor = document.getElementById("editor");
        var list = document.getElementById("list");
        editor.style.display = "none";
        var content = ED.getSession().getValue();
        insertHtml(makeTodoList(getNodes(content), state), "list");
        list.style.display = "block";
    }
    
    
    /* String TaskState -> Bool
     * Changes the TaskState of a certain task headline th to TaskState ts. Produces true if succesfull
     */
    // TODO
    function changeTaskState(th, ts) {} //stub
    
    //    LW.ED.find("DOING As a user I want to change the state of a task with a simple action, that I can easyly check my task without switching to the editor and breaking my flow.");
    //Range {start: Object, end: Object, isEqual: function, toString: function, contains: function…}
    //var r = LW.ED.find("DOING As a user I want to change the state of a task with a simple action, that I can easyly check my task without switching to the editor and breaking my flow.");
    //undefined
    //LW.ES.replace(r, "TODO As a user I want to change the state of a task with a simple action, that I can easyly check my task without switching to the editor and breaking my flow.");
    //HasChanged: true app.js:73
    //HasChanged: true app.js:73
    //Object {row: 1, column: 162}


    // change as time goes by (nearly all do)	on-tick
    // display something (nearly all do)	to-draw
    // change in response to key presses	on-key
    // change in response to mouse activity	on-mouse
    // stop automatically	                stop-when
    
    /* Editor String -> Bool
     * consumes an editor and a filepath and loads the file in editor,
     * produces the content of the file or false if file could not be loaded
     */
    // checkExpect(openFile("", ""), false, "openFile", openFile);
    // checkExpect(openFile(ED, "./test.txt"), "This is a test for livewookie.\n", "openFile", openFile); 
    
    function openFile(editor, filePath) {
      if (fs.existsSync(filePath)) {
        hasChanged = false;
        var fileContent = fs.readFileSync(filePath, "utf8");
        editor.getSession().setValue(fileContent);
        currentFile = filePath;
        return fileContent;
      }
      else {
        return false;
      }
    }

    
    
    /* Editor String -> String
     * saves the content of Editor editor to the String filepath and
     * produces the filepath or false if saving failed
     * assumes that the file exists
     */
    
    // needs way to test
    // checkExpect(saveFile(testEditor, "/root/writeTest.txt"), false, "saveFile", saveFile);
    // checkExpect(saveFile(testEditor, "./writeTest.txt"), "./writeTest.txt", "saveFile", saveFile);
    // checkExpect(saveFile(testEditor, "./notHere.txt"), false, "saveFile", saveFile);
    
    function saveFile(editor, filePath) {
      filePath = typeof filePath !== 'undefined' ? filePath :  currentFile;
      if (filePath) {
        if (hasChanged) {
          var data = editor.getSession().getValue(); //.replace(/\n/g,"\r\n");
          try {
            fs.writeFileSync(filePath, data, "utf8")
          } catch(e) {
            alert("Couldn't write to path: " + filePath);
            return false;
          }
          fs.writeFileSync(filePath, data, "utf8");
          console.log("Saved " + filePath);
          hasChanged = false;
          return filePath;
        } else {
            return false;
        }
      } else {
        return false;
      }
    }
    
    main();
    
})();