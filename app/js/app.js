var APP = (function () {
    "use strict";
    var fs = require("fs");
    var assert = require("assert");
    var util = require("./js/util");
    var enterTask = require("./js/enterTask");
    var org = require('./lib/markdown-org-mode-parser');
    var htmlUtil = require("./js/htmlUtil");
    var updateRank = require("./js/updateRank");
    var editor = require("./js/editor");
    var findTask = require("./js/findTask");

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
    var ALL = "ALL";
    var DOING = "DOING";
    LW.DEBUG = true;

    /*
     * ==========
     * Globals:
     */
    var deepEqual = assert.deepEqual;
    var hasChanged = false;
    var currentFile;
    LW.onClickState = onClickState;
    LW.onClickUpRank = onClickUpRank;
    LW.onClickDownRank = onClickDownRank;

    var shownTaskState = "DOING";

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
            //console.log("HasChanged: " + hasChanged);
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

        var taskButton = document.getElementById("show-all");
        taskButton.onclick = showAll;

        var todoButton = document.getElementById("show-todo");
        todoButton.onclick = showTodo;

        var doingButton = document.getElementById("show-doing");
        doingButton.onclick = showDoing;

        var doneButton = document.getElementById("show-done");
        doneButton.onclick = showDone;

        var editorButton = document.getElementById("show-editor");
        editorButton.onclick = toggleTasks;

        var enterTaskButton = document.getElementById("show-enterTask");
        enterTaskButton.onclick = function () {enterTask.toggleTaskEntry($, ES, ED, shownTaskState, showTask);};

        var cancelEnterTask = document.getElementById("cancel-enterTask");
        cancelEnterTask.onclick = function () {enterTask.cancelTaskEntry($);};

        var enterTaskForm = document.getElementById("enterTask");
        enterTaskForm.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                enterTask.cancelTaskEntry($);
                }
            e.stopPropagation();
        });

        var showSearchButton = document.getElementById("show-searchbox");
        showSearchButton.onclick = function () {findTask.toggleSearchBox($);};
        
        var searchForm = document.getElementById("search-input");
        searchForm.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                findTask.cancelSearchBox($);
                }
            e.stopPropagation();
        });

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
            } else if ((e.keyCode === 69 || e.keyCode === 101) && e.ctrlKey) { // CTRL + E
                toggleTasks();
            } else if ((e.keyCode === 40 || e.keyCode === 74) ) { // DOWN / J
                selectNext();
            } else if ((e.keyCode === 38 || e.keyCode === 75) ) { // UP / K
                selectPrevious();
            } else if (e.keyCode === 68 ) { // D
                doneState();
            } else if (e.keyCode === 84 && e.shiftKey) { // SHIFT + T
                todoState();
            } else if (e.keyCode === 84 ) { // T
                doingState();
            } else if (e.keyCode === 13 && e.ctrlKey) { // ENTER + CTRL
                enterTask.toggleTaskEntry($, ES, ED, shownTaskState, showTask, showEditor);
            } else if (e.keyCode === 70 && e.ctrlKey) { // CTRL + f
                findTask.toggleSearchBox($);
            }
            //console.log(e.keyCode);
        });
        
        $('#search-input').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('#list tr').hide();
            $('#list tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        });
    }

    /*
     * Id -> Ace
     * activates the ace Editor and ads thim to element
     */
    function setupAce(element) {

        var editor = ace.edit(element);
        var content;
        editor.setTheme("ace/theme/chrome");
        editor.getSession().setMode("ace/mode/markdown");
        editor.getSession().setUseWrapMode(true);
        // Because people want to edit right away
        editor.focus();
        currentFile = util.getTaskFiles();
        content = util.openFile(editor, currentFile);
        //fs.watch(currentFile, reloadFile);
        // Because 16px is easier on the eyes
        editor.setFontSize(16);
        return editor;
    }

    /* ListOfNodes State ListOfNumbers -> String
     * consumes a ordered ListOfNumbers, the unordered ListOfNumber and the state of the task list
     * produces a string with the corresponding HTML 
     */
    deepEqual("","", "makeTodoList");
    var LON = [{"todo": 'TODO', "headline":"Bla bla bla"}, {"todo": 'DONE', "headline":"Blub blub blub"}, {"todo": 'TODO', "headline":"Bli bli bli"}, {"todo": 'DOING', "headline":"This is the string for what is now"}];

    function makeTodoList(lon, state, lun) {
        if (lon.length === 0) {
            return "";
        }
        if (state === ALL && lon[0].todo !== null) {
            var project = util.projectOf(lun, lon[0].headline);
            return (htmlUtil.htmlForTodoListRow(lon[0].todo, lon[0].headline, project, lon[0].deadline) + makeTodoList(lon.slice(1), state, lun));
        }
        else {
            if (lon[0].todo === state) {
                var project = util.projectOf(lun, lon[0].headline);
                if (lon[0].deadline) {
                    LW.deadline = lon[0].deadline;
                }
                return (htmlUtil.htmlForTodoListRow(lon[0].todo, lon[0].headline, project, lon[0].deadline) + makeTodoList(lon.slice(1), state, lun));
            } else {
                return makeTodoList(lon.slice(1), state, lun);
            }

        }

    }

    /* String -> undefined
     * insert the html in the elautomatic semicolon intellij
     */
    var emptyBoardHtml = '<tr id="kanban-row"><td class="kanban-column"><table></table></td><td class="kanban-column"><table></table></td><td class="kanban-column"><table></table></td></tr>'
    function insertHtml(html, el) {
        if (html === "" || html === emptyBoardHtml) {
            html = getEmptyImage();
        }
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
        if ($("#show-enterTask").hasClass("active")) {
            enterTask.cancelTaskEntry($);
        } else if ($("#show-searchbox").hasClass("active")) {
            findTask.cancelSearchBox($);
        }
        var editor = document.getElementById("editor");
        var list   = document.getElementById("list");
        list.style.display = "none";
        editor.style.display = "block";
        ED.focus();
        ED.renderer.updateFull();
        toggleActiveClass("#show-editor");
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
     * consumes a task state s and shows a list of the done tasks and set's global state of shown tasks
     */
    function showTask(state) {
        toggleActiveClass("#show-" + state.toLowerCase());
        var editor = document.getElementById("editor");
        var list = document.getElementById("list");
        editor.style.display = "none";
        var content = ED.getSession().getValue();
        var nodes = util.getNodes(content);
        // Don't use nodes as attribut, cause orderNodesByRank will mutate nodes
        // Caused my fuckin' headache to find, fuck immutability
        var todos = util.orderNodesByRank(util.getNodes(content));
        
        if (state === ALL) {
            var todo = makeTodoList(todos, TODO, nodes);
            var doing = makeTodoList(todos, DOING, nodes);
            var done = makeTodoList(todos, DONE, nodes);

            var kanban = '<tr id="kanban-row"><td class="kanban-column"><table>' + todo + 
                    '</table></td>' + '<td class="kanban-column"><table>' + doing + 
                    '</table></td>' + '<td class="kanban-column"><table>' + done + 
                    '</table></td></tr>' ;
            insertHtml(kanban, "list");
        } else {
            insertHtml(makeTodoList(todos, state, nodes), "list");
        }
        
        list.style.display = "block";
        //  shownTaskState = state; -> What is this good for
    }

    /* String -> Void
     * consumes a jquery identifier and removes all active classes for .btn
     * and add active to provided provided identifier
     *
     * @returns {undefined}
     */
    function toggleActiveClass(elementId) {
        $('.btn-state').removeClass("active");
        $('#show-editor').removeClass("active");
        $(elementId).addClass("active");
    }

     /* Void -> Void
     * Selects the next Element in the "list" table
     */
    function selectNext() {
        var list = document.getElementById("list");
        if (list.style.display !== "none") {
            markNextTableRow(list);
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
        return list;
    }

    /* Element -> Void
     * Reacts to single clicks on a row
     */
    function onClickState(e) {
        console.log("State Clicked");
        var state = e.children[0].innerHTML;
        var headline = htmlUtil.headlineOfElement(e);
        var row = e.parentNode;
        changeStateInTable(row, state);
        advanceStateInFile(headline, state);
    }

    /* Event Element -> Void
     * Reacts to single clicks on a up
     */
    function onClickUpRank(e, el) {
        e.stopPropagation();
        updateRank.upRank(el, ES, ED, showTask, saveFile, $);
    }

    /* Event Element -> Void
     * Reacts to single clicks on down
     */
    function onClickDownRank(e, el) {
        e.stopPropagation();
        updateRank.downRank(el, ES, ED, showTask, saveFile, $);
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
    
// >>>> This is commentet out, cause the row get's destroyed at the end of the function, changeStateInRow, got to find another way to test this.    
//    deepEqual(equalNode(changeStateInTable(
//            createTrElement("<tr><td><span>TODO</span></td><td>Test Headline</td></tr>"), "TODO"),
//            createTrElement('<tr class="doing"><td><span>DOING</span></td><td>Test Headline</td></tr>')), true);
//    deepEqual(equalNode(changeStateInTable(
//            createTrElement('<tr class="todo"><td><span>TODO</span></td><td>Test Headline</td></tr>'), "TODO"),
//            createTrElement('<tr class="doing"><td><span>DOING</span></td><td>Test Headline</td></tr>')), true);

    function changeStateInTable(row, state) {
        return changeStateClass(changeStateInRow(row,state),state);
    }

    /* DOMElement TaskState -> DOMElement
     *
     * Changes the class of a row, to match it's new state
     *
     * @param {Element} row - The table row to change
     * @param {TaskState} state - The current state of the task
     * @returns {Row} - The class name of a row, that has been set
     */

// >>>> This is commentet out, cause the row get's destroyed at the end of the function, got to find another way to test this.
//    deepEqual(equalNode(changeStateInRow(
//            createTrElement("<tr><td><span>TODO</span></td><td>Test Headline</td></tr>"), "TODO"),
//            createTrElement("<tr><td><span>DOING</span></td><td>Test Headline</td></tr>")), true);
//    deepEqual(equalNode(changeStateInRow(
//            createTrElement("<tr><td><span>DOING</span></td><td>Test Headline</td></tr>"), "DOING"),
//            createTrElement("<tr><td><span>DONE</span></td><td>Test Headline</td></tr>")), true);
//    deepEqual(equalNode(changeStateInRow(
//            createTrElement("<tr><td><span>DONE</span></td><td>Test Headline</td></tr>"), "DONE"),
//            createTrElement("<tr><td><span>TODO</span></td><td>Test Headline</td></tr>")), true);
//    deepEqual(equalNode(changeStateInRow(
//            createTrElement("<tr><td><span>DONE</span></td><td>Test Headline</td></tr>"), "TODO"),
//            createTrElement("<tr><td><span>DOING</span></td><td>Test Headline</td></tr>")), true);

    function changeStateInRow(row, state) {
        if (state === "TODO") {
            row.childNodes[0].childNodes[0].innerHTML = "DOING";
            var show = showTodo;
        } else if (state === "DOING") {
            row.childNodes[0].childNodes[0].innerHTML = "DONE";
            var show = showDoing;
        } else if (state === "DONE") {
            row.childNodes[0].childNodes[0].innerHTML = "TODO";
            var show = showDone;
        }
        
        if ($("#show-all.active").text().toUpperCase() === ALL) {
            var show = showAll;
        }
        
        $(row).fadeOut(3000, function() {
            $(this).slideUp( function() {
                $(this).remove();
                show(); 
            });            
        });
        
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
        
        var content = ED.getSession().getValue();
        var lon = util.getNodes(content);
        
        // replace node in lon
        
        var lon = lon.map(function(key, val, array) {
            if (key.headline === headline && key.todo === oldState) {
                key.todo = newState;
            }
            return key;
        });
        
        editor.setEditorContent(ED, ES, lon);
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
          //console.log("Saved " + filePath);
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

    /* Void -> String
     * produces the right emty image based on the availble task
     *
     * @returns {the html for the empty image}
     */
    function getEmptyImage() {
        var content = ED.getSession().getValue();
        var tasks = util.orderNodesByRank(util.getNodes(content));
        var todos = makeTodoList(tasks, "TODO");
        var doings = makeTodoList(tasks, "DOING");
        var dones = makeTodoList(tasks, "DONE");
        var state = $("#taskbuttons .active").text().toUpperCase();
        var html = makeEmptyHtml(todos, doings, dones, state);
        return html;
    }

    /* String String String -> String
     * produces the html for the placeholder image, if no task list item is present
     * @param {String} todos
     * @param {String} doings
     * @param {String} dones
     * @param {TaskState} state
     * @returns {the html string for the placeholder image that should be shown}
     */
    var emptyTodo = '<div class="empty-list"><h1>No TODOs here</h1><p>Add a new task by clicking on <span class="glyphicon glyphicon-plus"></span> or press <code>Ctrl+Enter</code>.</p></div>';
    var emptyDoing = '<div class="empty-list"><h1>All DOINGs are done!</h1><p>Get some new tasks by clicking on TODO or press <code>Ctrl+1</code>.</p><p>Add a new task by clicking on <span class="glyphicon glyphicon-plus"></span> or press <code>Ctrl+Enter</code>.</p></div>'; 
    var emptyDone = '<div class="empty-list"><h1>Nothing DONE yet</h1><p>Start working by clicking on DOING or pressing <code>Ctrl+2</code>.</p></div>';
    var emptyNew = '<div class="empty-list"><h1>Welcome!</h1><p>Start with adding a new task by clicking on <span class="glyphicon glyphicon-plus"></span> or press <code>Ctrl+Enter</code>.</p><p>Work through your tasks by clicking on <i>Todo</i>, <i>Doing</i>, <i>Done</i> or pressing <code>Ctrl+1</code>,<code>Ctrl+2</code>,<code>Ctrl+3</code>.</p><p>Get a complete overview of all your task by clicking on <i>Board</i> or pressing <code>Ctrl+4</code>.</p><p>Search for tasks by clicking on <span class="glyphicon glyphicon-search"></span> or press <code>Ctrl+F</code>.</p><p>Edit your tasks directly in markdown by clicking on <span class="glyphicon glyphicon-list-alt"></span> or press <code>Ctrl+E</code>.</p></div>';
    deepEqual(makeEmptyHtml("","",""), emptyNew);
    deepEqual(makeEmptyHtml("","XXX","XXX", TODO), emptyTodo);
    deepEqual(makeEmptyHtml("XXX","","XXX", DOING), emptyDoing);
    deepEqual(makeEmptyHtml("XXX","XXX","", DONE), emptyDone);
    function makeEmptyHtml(todos, doings, dones, state) {
		if ((todos === "") & (doings === "") & (dones === "")) {
			return emptyNew;
		} else if ((todos === "") & (doings !== "" | dones !== "") & state === TODO) {
			return emptyTodo;
		} else if ((doings === "") & (todos !== "" | dones !== "") & state === DOING) {
			return emptyDoing;
		} else if ((dones === "") & (doings !== "" | todos !== "") & state === DONE) {
			return emptyDone;
		}
    }

	function reloadFile(event) {
		console.log("Datei geaendert");
		// TODO: Needs to check if file was changed by differnt software
		if (!DOC.hasFocus()) {
		  var content = util.openFile(ED, currentFile);
		  showDoing();
		}

	}

    /* DOMElement DOMElement -> Boolean
     * Checks if to DOMElements are equal
     */
    function equalNode(el1, el2) {
        return el1.isEqualNode(el2);
    }
    
    main();

})();
