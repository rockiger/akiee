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

/*deepEqual(htmlForTodoListRow("TODO", "Test 1"), "<tr onclick='LW.onClickTableRow(this);'><td>TODO</td><td>Test 1</td><td onclick='LW.onClickUpRank(event, this);'>Up</td><td  onclick='LW.onClickDownRank(event, this);'>Down</td></tr>");
deepEqual(htmlForTodoListRow("DOING", "Test 2"), "<tr onclick='LW.onClickTableRow(this);'><td>DOING</td><td>Test 2</td><td onclick='LW.onClickUpRank(event, this);'>Up</td><td  onclick='LW.onClickDownRank(event, this);'>Down</td></tr>");
deepEqual(htmlForTodoListRow("DONE", "Test 3"), "<tr onclick='LW.onClickTableRow(this);'><td>DONE</td><td>Test 3</td><td onclick='LW.onClickUpRank(event, this);'>Up</td><td  onclick='LW.onClickDownRank(event, this);'>Down</td></tr>");*/
function htmlForTodoListRow(todo, headline) {
    return "<tr onclick='LW.onClickTableRow(this);'><td>" + todo +"</td><td>" + headline + "</td><td onclick='LW.onClickUpRank(event, this);'><span class='glyphicon glyphicon-chevron-up'></span></td><td  onclick='LW.onClickDownRank(event, this);'><span class='glyphicon glyphicon-chevron-down'></span></td></tr>";
}

exports.htmlForTodoListRow = htmlForTodoListRow;
