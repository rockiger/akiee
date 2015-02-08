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
var deepEqual = function () {}; //assert.deepEqual;

/*
 * State String String -> String
 * Consumes the state, the headline and the project of a task and 
 * produces the HTML-String for a table row that shows the task
 * IMPORTANT: changes here usually affect headlineOfElement
 */
/*deepEqual(htmlForTodoListRow("TODO", "Test 1", "Inbox"), 
"<tr><td onclick='LW.onClickState(this);'><span class='hover-button'>TODO</span></td><td><span class='project-tag label'>Inbox</span><span class='headline'>Test 1</span></td><td onclick='LW.onClickUpRank(event, this);'><span class='glyphicon glyphicon-chevron-up hover-button'></span></td><td onclick='LW.onClickDownRank(event, this);'><span class='glyphicon glyphicon-chevron-down hover-button'></span></td></tr>");*/


function htmlForTodoListRow(todo, headline, project, deadline) {
    return "<tr><td onclick='LW.onClickState(this);'><span class='hover-button'>" + todo +"</span></td><td><span class='project-tag label'>" + project + "</span><span class='headline'>" + headline + "</span><span class='deadline label'>" + date2html(deadline) + "</span></td><td onclick='LW.onClickUpRank(event, this);'><span class='glyphicon glyphicon-chevron-up hover-button'></span></td><td onclick='LW.onClickDownRank(event, this);'><span class='glyphicon glyphicon-chevron-down hover-button'></span></td></tr>";
}

/*
 * DOM-Element -> String
 * consumes the <td>-DOM-element of a state and produces the corresponding headline
 */

function headlineOfElement (el) {
    return el.parentNode.children[1].children[1].innerHTML;
}

var testDate = new Date(2015,2,3);
deepEqual(date2html(testDate), "03.02.15");
deepEqual(date2html(null), "");

/*
 * Date -> String
 * consumes a date and returns it human readable form
 */
function date2html(date) {
    if (date === null) {
        return ""
    } else {
        var day = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate() ;
        var month = (date.getMonth() < 10) ? "0" + date.getMonth() : date.getMonth();
        
        return day + "." + month + "." + String(date.getFullYear()).slice(2);
    }
}
exports.headlineOfElement = headlineOfElement;
exports.htmlForTodoListRow = htmlForTodoListRow;
