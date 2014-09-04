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

function onClickUpRank(e) {
    //code
    console.log("onClickUpRank");
    e.stopPropagation();
}

function onClickDownRank(e) {
    //code
    console.log("onClickDownRank");
    e.stopImmediatePropagation();
}

exports.onClickUpRank = onClickUpRank;
exports.onClickDownRank = onClickDownRank;