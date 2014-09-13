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

/* DomElement EditorSession -> Void
 * set the rank of el one higher
 */
function upRank(el, ES, ED) {
    var currentRow = el.parentNode;
    var currentHeadline = currentRow.children[1].innerHTML;
    
    var upperRow = currentRow.previousElementSibling;
    var upperHeadline = upperRow.children[1].innerHTML;
    
    //console.log("Upper row: "+ upperRow.outerHTML);
    //console.log("Upper Headline: " + upperHeadline);
    //console.log("Current row: "+ currentRow.outerHTML);
    //console.log("Current Headline: " + currentHeadline);
    
    // get RANK
    var currentRank = getRank(currentHeadline, ES, ED);
    var upperRank = getRank(upperHeadline, ES, ED);
    
}

function downRank(e) {
    //code
    console.log("onClickDownRank");
    e.stopImmediatePropagation();
}

/* String EditorSession -> Rank
 * get the rank of a tass
 */
function getRank(headline, ES, ED) {
    // find range
    var headlineRange = ED.find(headline, {wrap:true, range: null}, false);
    var endOfRange = ED.find("\n#", {wrap:true, range: null}, false);
    var taskRange = headlineRange;
    taskRange.end = endOfRange.start;
    
    var beginRank = ED.find("RANK: ", {wrap:true, range: taskRange}, false);
    var endRank = ED.find("\n", {wrap:true, range: taskRange}, false);
    var rankRange = beginRank;
    rankRange.start.column = rankRange.end.column;
    rankRange.end.column = endRank.start.column;
    
    var doc = ES.getDocument();
    var rank = parseInt(doc.getTextRange(rankRange));
    
    return rank
}
exports.upRank = upRank;
exports.downRank = downRank;