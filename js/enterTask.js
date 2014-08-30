/* This module deals with entering a task via a special entry field */
"use strict";
var util = require("./util");
var assert = require("assert");

/*
* ==========
* Globals:
*/
var util = require('./util');
var u = require('util');
var $;
var ES;
var ED;
var NLC;
var shownTaskState;
var deepEqual = assert.deepEqual;

/* Function(jquery) Object Object -> Task
 * Consumes jquery-object, editor-session, the document and opens up an entry field to insert a new task, produces the task
 */
function openTaskEntry(jquery, editorSession, editor, currentTaskState) {
    $ = jquery;
    ES = editorSession
    ED = editor;
    NLC = ES.getDocument().getNewLineCharacter();
    shownTaskState = currentTaskState;
    
    var content = ES.getValue();
    var projects = util.getProjects(util.getNodes(content));
    var enterTask = $('#enterTask');
    var enterTaskProject = $('#enterTaskProject');
    var enterHeadline = $('#enterHeadline');
    
    enterTaskProject.html("<option>Inbox</option>\n" + buildOptions(projects));
    enterTask.submit(submitTask);
    enterTask.show();
    enterHeadline.focus();
}

/* ListOfNodes -> String
 * Consumes a list of nodes and produces a option list
 */
function buildOptions(lon) {
    if (lon.length === 0) {
        return "";
    } else {
        return "<option>" + lon[0].headline + "</option>\n" + buildOptions(lon.slice(1));
    }
}

/* Function(jquery) Object -> Task
 * Consumes jquery and closes the entry form and deletes the input
 */
function cancelTaskEntry($) {
    var enterTask = $('#enterTask');
    var enterHeadline = $('#enterHeadline');
    
    enterHeadline.val("");
    enterTask.hide();
}

/* Form -> Void
 * consumes the form and is reponsible for the handling of a submited task
 */
function submitTask(e) {
    
    var taskProject = $(this).find('#enterTaskProject').val();
    var taskHeadline = $(this).find('#enterHeadline').val();
    var taskStatus = $(this).find('#enterTaskStatus').val();
    
    if (taskHeadline !== '') {
        var project = findProject(taskProject);
        var endOfProject = findEndOfProject(project);
        var taskRank = rankOfNewTask(ED.getSession().getValue());
        writeTask(endOfProject, taskStatus, taskHeadline, taskRank);
        addTaskToList(taskStatus, taskHeadline);
    }
    
    cancelTaskEntry($);
    return false; //prevent form from redirect.
}

/* String -> Range
 * Consumes a projectname and produces the position of that project
 */
function findProject(project) {
    // find range
    var result = ED.find("# " + project, {wrap:true, range: null}, false);
    if (result === undefined && project === "Inbox") {
        return createInbox();
    } else {
        return result;
    }
}

/* Void -> Range
 * Creates a Inbox in taskfile and producese the range of that Inbox
 */
function createInbox() {
    var pos = getFileEndPosition();
    ES.insert(pos, NLC + "# Inbox");
    return findProject("Inbox");
}

/* Range -> Position
 * consumes the range of the project headline and produces the position of end of the project
 */
function findEndOfProject(startRange) {
    var position;
    var doc = ES.getDocument();
    var result = ED.find(NLC + "# ", {wrap:false, range: null, start: startRange, skipCurrent: false}, false);
    if (result === undefined) {
        position = getFileEndPosition();
        ES.insert(position, NLC);
        return getFileEndPosition();
    }
    position = result.end;
    position.column = 0
    return position;
}

/* Void -> Position
 * Produces the position of the end of the file
 */
function getFileEndPosition() {
    ED.navigateFileEnd();
    return ED.getCursorPosition();
}

/* Position, String String -> Void
 * Consumes position, status and headline of a new task and produces an entry in the editor
 */
 function writeTask(pos, status, headline, rank) {
    ES.insert(pos, "## " + status + " " + headline + "\nRANK: " + rank);
    var currentPos = ED.getCursorPosition();
    var endOfFile = getFileEndPosition();
    if (JSON.stringify(currentPos) === JSON.stringify(endOfFile)) {
        return;
    } else {
        currentPos.column = currentPos.column - 2;
        ES.insert(currentPos, NLC);
    }
 }
 
 /* TaskState String -> Void
  * Consumes Taskstate and adds the task to the current task list if the state matches the curren shown task state
  */
 function addTaskToList(taskState, headline) {
    if (taskState === shownTaskState) {
        $("#list").append("<tr onclick='LW.onClickTableRow(this);'><td>"+ taskState +"</td><td>" + headline + "</td></tr>")
    }
 }
 
 /* String -> Rank
  * Returns the rank for a new task, which is +1 of the highest rank in the content
  */
 deepEqual(rankOfNewTask(""), 1);
 deepEqual(rankOfNewTask("## Task 1\nRANK: 1\n## Task 2\nRANK: 2"), 3);
 deepEqual(rankOfNewTask("## Task 1\nRANK: 1\n## Task 2\nRANK: 10"), 11);
 function rankOfNewTask(content) {
    var todos = util.orderNodesByRank(util.getNodes(content));
    var ranks = todos.map(function(e) {
        if (e.rank !== null) {
            return e.rank
        } else {
            return e.rank;
            }});
    return Math.max.apply(Math,ranks) + 1;
 }

exports.openTaskEntry = openTaskEntry;
exports.cancelTaskEntry = cancelTaskEntry;