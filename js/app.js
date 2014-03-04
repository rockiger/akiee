(function()
{
    "use strict";
    var fs = require("fs");
    var util = require("./js/util");
    var org = require('./lib/markdown-org-mode-parser');

    /*
     * Wookie - a  Markdown alternative to Emacs Org-mode
     */
    
    /*
     * ==========
     * Constants:
     */
    
    var WIN = window.gui.Window.get();
    var ED = setupAce("editor");
    var ES = ED.getSession();
    var DOC = document;
    
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
    
    /*
     * ==========
     * Functions:
     */
    
    /*
     * String -> ListOfString  ???
     * consumes the name of the html element the editor should get atttached to 'main ("editor");'
     */
    function main (element) {    
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
        taskButton.onclick = toggleTasks
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
    checkExpect("","", getNodes, "getNodes");
    function getNodes(md) {
        var node = org.parseBigString(md);
        return node;
    }

    /* ListOfNodes -> String
     * produces the HTML from a ListOfNodes lon
     */
    checkExpect("","", makeTodoList, "makeTodoList");
    var LON = [{"todo": 'TODO', "headline":"Bla bla bla"}, {"todo": 'DONE', "headline":"Blub blub blub"}];
    checkExpect(makeTodoList(LON), "<h2>TODO Bla bla bla</h2><h2>DONE Blub blub blub</h2>", makeTodoList, "makeTodoList");
    function makeTodoList(lon) {
        if (lon.length === 0) {
            return "";
        } else {
        return (("<h2>"+lon[0].todo +" " + lon[0].headline + "</h2>") + makeTodoList(lon.slice(1)));
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
            editor.style.display = "none";
            var content = ED.getSession().getValue();
            insertHtml(makeTodoList(getNodes(content)), "list");
            list.style.display = "block";
        } else {
            editor.style.display = "block";
            list.style.display = "none";
        }
    }
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
    
    // Test for checkExpect
    checkExpect(test(10), 10, "test", test);
    function test(i) {
        return 10;
    }
    
    // Object Object -> Boolean
    // compares two objects a, b and returns true if the have the same value
    function checkExpect(a, b, functionName, fn) {
        if (a === b) {
            console.log('Test for ' + functionName + ' passed');
        } else {
            throw 'Test for ' + functionName + ' failed. Expected "' + b + '", got "' + a + '"\n\n' + fn;
        }
    }
    
    main();
})();