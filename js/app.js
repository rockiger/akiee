(function () {
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
    LW.DEBUG = true;
    
    /*
     * ==========
     * Globals:
     */
    var deepEqual = assert.deepEqual;
    var hasChanged = false;
    var currentFile;
    LW.onClickTableRow = onClickTableRow;
    
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
            if (ts === "TODO") {
                //code  
            } else if (ts === "DONE") {
                //code  
            } else if (ts === "DOING") {
                //code
            }
        }
     */
    
    /* ClassName is one of:
     * - "todo"
     * - "doing"
     * - "dono"
     * 
        function fnForClassName(cn) {
            if (cn === "todo") {
                //code  
            } else if (cn === "doing") {
                //code  
            } else if (ts === "done") {
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
        
        showDoing(); 
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
            } else if ((e.keyCode === 40 || e.keyCode === 74) ) { // DOWN / J
                selectNext();
            } else if ((e.keyCode === 38 || e.keyCode === 75) ) { // UP / K
                selectPrevious();
            } else if (e.keyCode === 68 ) { // D
                doneState(); 
            } else if (e.keyCode === 84 && e.shiftKey) { // SHIFT + T
                console.log("todoState()");
                todoState();
            }else if (e.keyCode === 84 ) { // T
                doingState();
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
        content = openFile(editor, currentFile);
        // Because 16px is easier on the eyes
        editor.setFontSize(16);
        return editor;
    }

    /**
     * String -> ListOfNodes
     * Produces a list of nodes with in a string with markdown content md
     */
    deepEqual("","", "getNodes");
    function getNodes(md) {
        var nodes = org.parseBigString(md);
        return nodes;
    }

    /* ListOfNodes -> String
     * produces the HTML from a ListOfNodes lon
     */
    deepEqual("","", "makeTodoList");
    var LON = [{"todo": 'TODO', "headline":"Bla bla bla"}, {"todo": 'DONE', "headline":"Blub blub blub"}, {"todo": 'TODO', "headline":"Bli bli bli"}, {"todo": 'DOING', "headline":"This is the string for what is now"}];
    deepEqual(makeTodoList(LON, ALL), "<tr onclick='LW.onClickTableRow(this);'><td>TODO</td><td>Bla bla bla</td></tr><tr onclick='LW.onClickTableRow(this);'><td>DONE</td><td>Blub blub blub</td></tr><tr onclick='LW.onClickTableRow(this);'><td>TODO</td><td>Bli bli bli</td></tr><tr onclick='LW.onClickTableRow(this);'><td>DOING</td><td>This is the string for what is now</td></tr>", "makeTodoList");
    deepEqual(makeTodoList(LON, TODO), "<tr onclick='LW.onClickTableRow(this);'><td>TODO</td><td>Bla bla bla</td></tr><tr onclick='LW.onClickTableRow(this);'><td>TODO</td><td>Bli bli bli</td></tr>", "makeTodoList");
    deepEqual(makeTodoList(LON, DONE), "<tr onclick='LW.onClickTableRow(this);'><td>DONE</td><td>Blub blub blub</td></tr>", "makeTodoList");
    deepEqual(makeTodoList(LON, DOING), "<tr onclick='LW.onClickTableRow(this);'><td>DOING</td><td>This is the string for what is now</td></tr>", "makeTodoList");
    
    function makeTodoList(lon, state) {
        if (lon.length === 0) {
            return "";
        }
        if (state === ALL) {
        return (("<tr onclick='LW.onClickTableRow(this);'><td>"+lon[0].todo +"</td><td>" + lon[0].headline + "</td></tr>") + makeTodoList(lon.slice(1), state));
        }
        else {
            if (lon[0].todo === state) {
                return (("<tr onclick='LW.onClickTableRow(this);'><td>"+lon[0].todo +"</td><td>" + lon[0].headline + "</td></tr>") + makeTodoList(lon.slice(1), state));    
            } else {
                return makeTodoList(lon.slice(1), state);
            }
            
        }
        
    }
    
    /* String -> undefined
     * insert the html in the elautomatic semicolon intellij
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
        ED.renderer.updateFull();
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
    
     /* Void -> Void
     * Selects the next Element in the "list" table
     */
    function selectNext() {
        var list = document.getElementById("list");
        if (list.style.display !== "none") {
            markNextTableRow(list);;
        }
    }

    /* DOMElement -> DOMElement
     * Moves the "selected" class to the next row in the table, 
     * if non present it add "selected" to the class fo the first table row
     */
    deepEqual(equalNode(
                        markNextTableRow(createElement('<table><tbody><tr class="selected"><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')),
                        createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class="selected"><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')
                        ), true);
    deepEqual(equalNode(
                        markNextTableRow(createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')),
                        createElement('<table><tbody><tr class="selected"><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')
                        ), true);
    deepEqual(equalNode(
                        markNextTableRow(createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class="selected"><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')),
                        createElement('<table><tbody><tr class="selected"><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')
                        ), true);
    function markNextTableRow(list) {
        var currentRows = list.getElementsByClassName("selected");
        var currentRow = currentRows[0];
        if (currentRows.length === 0) {
            currentRow = list.children[0].children[0];
        } else if (currentRow.nextElementSibling === null) {
            currentRow.className = "";
            currentRow = list.children[0].children[0];
        }
        else {
            currentRow.className = "";
            currentRow = currentRow.nextElementSibling;
        }
        currentRow.className = "selected";
        console.log(currentRow);
        return list;
    } 
    
    /* Void -> Void
     * Selects the previous Element in the table
     */
    function selectPrevious(e) {        
        var list = document.getElementById("list");
        if (list.style.display !== "none") {
            markPreviousTableRow(list);
        }
    }   
    
    /* DOMElement -> DOMElement
     * Moves the "selected" class to the next row in the table, 
     * if non present it add "selected" to the class fo the first table row
     */
    deepEqual(equalNode(
                        markPreviousTableRow(createElement('<table><tbody><tr class="selected"><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')),
                        createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class="selected"><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')
                        ), true);
    deepEqual(equalNode(
                        markPreviousTableRow(createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')),
                        createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class="selected"><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')
                        ), true);
    deepEqual(equalNode(
                        markPreviousTableRow(createElement('<table><tbody><tr class=""><td>DOING</td><td>Mails beantworten</td></tr><tr class="selected"><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')),
                        createElement('<table><tbody><tr class="selected"><td>DOING</td><td>Mails beantworten</td></tr><tr class=""><td>DOING</td><td>Nochmal nachlesen, wie man ich am besten meine Anlage aufteilen</td></tr></tbody></table>', 'body')
                        ), true);    
    function markPreviousTableRow(list) {
        var currentRows = list.getElementsByClassName("selected");
        var currentRow = currentRows[0];
        if (currentRows.length === 0) {
            currentRow = list.children[0].children[list.children[0].children.length - 1]; //get last item in the list
        } else if (currentRow.previousElementSibling === null) {
            currentRow.className = "";
            currentRow = list.children[0].children[list.children[0].children.length - 1];
        }
        else {
            currentRow.className = "";
            currentRow = currentRow.previousElementSibling;
        }
        currentRow.className = "selected";
        console.log(currentRow);
        return list;
    }
    
    /* Element -> Void
     * Reacts to single clicks on a row
     */
    function onClickTableRow(e) {
        if (LW.DEBUG === true) {LW.row = e ;}
        var state = e.children[0].innerHTML;
        var headline = e.children[1].innerHTML;
        changeStateInTable(e, state);
        advanceStateInFile(headline, state);
    }
    
    /* Void -> Void## TODO As a task planner I want to add TODO/DONE via keys/shortcut, to easily decide wich headings/list-items are tasks and in which state they are.

acceptance criteria:

- [X] `up`/`down`/`j`/`k` for selecting tasks, if no task already selected, first one will be selected
- ~~[ ] `right`/`left`/`space`/`shift`+`space` cycle through states~~
- [X] `d`->DONE, `t`->DOING, `shift`+`t`->TODO
- [X] Shortcuts are added to `shortcuts.md`


     * changes the state of the selected row to DONE
     */
    function doneState() {
        changeState('DOING', 'DONE'); // DOING because DONE is the state after DOING
    }
    
    /* Void -> Void
     * changes the state of the selected row to DOING
     */
    function doingState() {
        changeState('TODO','DOING'); // TODO because DOING is the state after TODO
    }
    
    /* Void -> Void
     * changes the state of the selected row to TODO
     */
    function todoState() {
        changeState('DONE', 'TODO'); // DONE because TODO is the state after DONE
    }
    
    /* State State-> Void
     * changes the state of the selected row to the newState after the given fakeState must be given because of changeStateInTable()
     */
    function changeState(fakeState, newState) {
        var rows = document.getElementsByClassName("selected");
        var row = rows[0];
        if (rows.length > 0) {
            var headline = row.children[1].innerHTML;
            var oldState = row.children[0].innerHTML;
            console.log(headline);
            changeStateInTable(row, fakeState);
            changeStateInFile(headline, oldState, newState);
        }
    }
    
    /* DOMElement(tr) TaskState -> DOMElement
     * 
     * Changes the Taskstate state of a DOMElement row and sets the right class 
     * and then returns that element
     * 
     * @param {DOMElement} row
     * @param {TaskState} state
     * @returns {DOMElement}
     */
    deepEqual(equalNode(changeStateInTable(
            createTrElement("<tr><td>TODO</td><td>Test Headline</td></tr>"), "TODO"), 
            createTrElement('<tr class="doing"><td>DOING</td><td>Test Headline</td></tr>')), true);
    deepEqual(equalNode(changeStateInTable(
            createTrElement('<tr class="todo"><td>TODO</td><td>Test Headline</td></tr>'), "TODO"), 
            createTrElement('<tr class="doing"><td>DOING</td><td>Test Headline</td></tr>')), true);   
    
    function changeStateInTable(row, state) {
        return changeStateClass(changeStateInTd(row,state),state);
    }
    
    /* DOMElement TaskState -> DOMElement
     * 
     * Changes the class of a row, to match it's new state
     * 
     * @param {Element} row - The table row to change
     * @param {TaskState} state - The current state of the task 
     * @returns {Row} - The class name of a row, that has been set
     */
    deepEqual(equalNode(changeStateInTd(
            createTrElement("<tr><td>TODO</td><td>Test Headline</td></tr>"), "TODO"), 
            createTrElement("<tr><td>DOING</td><td>Test Headline</td></tr>")), true);
    deepEqual(equalNode(changeStateInTd(
            createTrElement("<tr><td>DOING</td><td>Test Headline</td></tr>"), "DOING"), 
            createTrElement("<tr><td>DONE</td><td>Test Headline</td></tr>")), true);
    deepEqual(equalNode(changeStateInTd(
            createTrElement("<tr><td>DONE</td><td>Test Headline</td></tr>"), "DONE"), 
            createTrElement("<tr><td>TODO</td><td>Test Headline</td></tr>")), true);
    deepEqual(equalNode(changeStateInTd(
            createTrElement("<tr><td>DONE</td><td>Test Headline</td></tr>"), "TODO"), 
            createTrElement("<tr><td>DOING</td><td>Test Headline</td></tr>")), true);
            
    function changeStateInTd(row, state) {
        if (state === "TODO") {
            row.childNodes[0].innerHTML = "DOING";
        } else if (state === "DOING") {
            row.childNodes[0].innerHTML = "DONE";
        } else if (state === "DONE") {
            row.childNodes[0].innerHTML = "TODO";
        }
            return row;
    }    
    
    /* DOMElement Classname -> DOMElement
     * 
     * Changes the TaskState of a row, to match it's new state
     * 
     * @param {Element} row - The table row to change
     * @param {TaskState} state - The current state of the task 
     * @returns {ClassName} - The ClassName of a row, that has been set
     */
    deepEqual(equalNode(changeStateClass(
            createTrElement("<tr><td>TODO</td><td>Test Headline</td></tr>"), "TODO"), 
            createTrElement('<tr class="doing"><td>TODO</td><td>Test Headline</td></tr>')), true);
    deepEqual(equalNode(changeStateClass(
            createTrElement("<tr><td>DOING</td><td>Test Headline</td></tr>"), "DOING"), 
            createTrElement('<tr class="done"><td>DOING</td><td>Test Headline</td></tr>')), true);
    deepEqual(equalNode(changeStateClass(
            createTrElement("<tr><td>TODO</td><td>Test Headline</td></tr>"), "DONE"), 
            createTrElement('<tr class="todo"><td>TODO</td><td>Test Headline</td></tr>')), true);
    
    function changeStateClass(row, state) {
        if (state === "TODO") {
            row.className = "doing";
        } else if (state === "DOING") {
            row.className = "done";
        } else if (state === "DONE") {
            row.className = "todo";
        }
        return row;
    }
    
    /* String TaskState -> Void
     * 
     * Changes the state of a task in the current file.
     * 
     * @param {String} headline - The headline of the task
     * @param {TaskState} state - The current state of the task
     * @returns {Boolean} - true if state could be changed, else false
     */
    // TODO
    function advanceStateInFile(headline, oldState) {
        if (oldState === "TODO") {
                var newState = 'DOING';
            } else if (oldState === "DONE") {
                var newState = 'TODO';  
            } else if (oldState === "DOING") {
                var newState = 'DONE';
            }
        changeStateInFile(headline, oldState, newState);
    }
     /* String TaskState -> Void
     * 
     * Changes the state of a task in the current file.
     * 
     * @param {String} headline - The headline of the task
     * @param {TaskState} oldState - The current state of the task
     * @param {TaskState} newState - The new state of the task
     * @returns {Boolean} - true if state could be changed, else false
     */
    function changeStateInFile(headline, oldState, newState) {
        // find range
        var range = ED.find(headline, {wrap:true, range: null}, false);
        // create Range from start of line to start of headline in row
        var end = range.start.column;
        range.start.column = 0;
        range.end.column = end;
        // replace current state with new state
        
        var options = {needle: oldState, range: range, start: range, wrap: true};
        ED.replace(newState, options);
        saveFile(ED);
    }
    
    /* Editor String -> Bool
     * consumes an editor and a filepath and loads the file in editor,
     * produces the content of the file or false if file could not be loaded
     */
    
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
    
    function saveFile(editor, filePath) {
      filePath = typeof filePath !== 'undefined' ? filePath :  currentFile;
      if (filePath) {
        if (hasChanged) {
          var data = editor.getSession().getValue(); //.replace(/\n/g,"\r\n");
          try {
            fs.writeFileSync(filePath, data, "utf8");
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
    
    /* String -> DOMElement
     * Produces an TR-DOMElemen from a String with HTML html 
     */
    function createTrElement(html) {
        return createElement(html, 'tbody');
    }
    
    /* String String -> DOMElement
     * Produces an DOMElemen from a String with HTML html and the parent element
     */
    function createElement(html, parent) {
        var wrapper = document.createElement(parent);
        wrapper.innerHTML = html;
        return wrapper.firstChild;
    }
    
    /* DOMElement DOMElement -> Boolean
     * Checks if to DOMElements are equal
     */
    function equalNode(el1, el2) {
        return el1.isEqualNode(el2);
    } 
    main();
    
})();