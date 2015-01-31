/* This module deals with html creation of certain tasks */
"use strict";
var assert = require("assert");

/*
 * ==========
 * Constants:
 */

/*
 * ==========
 * Globals:
 */
var deepEqual = assert.deepEqual;

/*
 * State String String -> String
 * Consumes the state, the headline and the project of a task and 
 * produces the HTML-String for a table row that shows the task
 * IMPORTANT: changes here usually affect headlineOfElement
 */
deepEqual(htmlForTodoListRow("TODO", "Test 1", "Inbox"), 
"<tr><td onclick='LW.onClickState(this);'><span class='hover-button'>TODO</span></td><td><span class='project-tag label'>Inbox</span><span class='headline'>Test 1</span></td><td onclick='LW.onClickUpRank(event, this);'><span class='glyphicon glyphicon-chevron-up hover-button'></span></td><td onclick='LW.onClickDownRank(event, this);'><span class='glyphicon glyphicon-chevron-down hover-button'></span></td></tr>");


function htmlForTodoListRow(todo, headline, project) {
    return "<tr><td onclick='LW.onClickState(this);'><span class='hover-button'>" + todo +"</span></td><td><span class='project-tag label'>" + project + "</span><span class='headline'>" + headline + "</span></td><td onclick='LW.onClickUpRank(event, this);'><span class='glyphicon glyphicon-chevron-up hover-button'></span></td><td onclick='LW.onClickDownRank(event, this);'><span class='glyphicon glyphicon-chevron-down hover-button'></span></td></tr>";
}

/*
 * DOM-Element -> String
 * consumes the <td>-DOM-element of a state and produces the corresponding headline
 */

function headlineOfElement (el) {
    return el.parentNode.children[1].children[1].innerHTML;
}

exports.headlineOfElement = headlineOfElement;
exports.htmlForTodoListRow = htmlForTodoListRow;
