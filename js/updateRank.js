/* This module deals with html creation of certain tasks */
"use strict";
var assert = require("assert");

/*
 * ==========
 * Constants:
 */
var RANK = "RANK: ";

/*
 * ==========
 * Globals:
 */
var deepEqual = assert.deepEqual;

/* DomElement EditorSession -> Void
 * set the rank of el one higher
 */
function upRank(el, ES, ED, showTask) {
    moveRank(el, ES, ED, showTask, "up");    
}

/* DomElement EditorSession Editor Function -> Void
 * set the rank of el one lower
 */
function downRank(el, ES, ED, showTask) {
    moveRank(el, ES, ED, showTask, "down");
}

/* DomElement EditorSession Editor Function String -> Void
 * move the rank of el 
 */
function moveRank(el, ES, ED, showTask, upOrDown) {
    var currentRow = el.parentNode;
    var currentHeadline = currentRow.children[1].innerHTML;
    var currentStatus = currentRow.children[0].innerHTML;
    
    if (upOrDown === "up") {
        try {
            var borderRow = currentRow.previousElementSibling;
            var borderHeadline = borderRow.children[1].innerHTML;
        }
        catch (e) {
            console.log(e);
            return;
        }
    } else {
        try {
            var borderRow = currentRow.nextElementSibling;
            var borderHeadline = borderRow.children[1].innerHTML;
        }
        catch (e) {
            console.log(e);
            return;
        }
    }
    
    // get RANK
    var currentRank = getRank(currentHeadline, ES, ED);
    var borderRank = getRank(borderHeadline, ES, ED);
    
    // get ranges of ranks between current and border
    if (upOrDown === "up") {
        var lor = getListOfUpperRanges(borderRank, currentRank, ED, ES);
        decListOfRangesOfRank(lor, ED, ES);
    } else {
        var lor = getListOfLowerRanges(borderRank, currentRank, ED, ES);
        incListOfRangesOfRank(lor, ED, ES);
    }
    // give current tast the new upper rank
    updateTaskRank(currentHeadline, currentRank, borderRank, ED, ES);
    
    // update view 
    showTask(currentStatus);
    
}

/* String Number Number Editor Session -> Void
 * Updates the rank of a task with a certain headline
 */
function updateTaskRank(headline, oldRank, newRank, ED) {
    var headlineRange = ED.find(headline, {wrap:true, range: null}, false);
    var options = {wrap:true, needle: RANK + oldRank, range: null, start: headlineRange};
    ED.replace(RANK + newRank, options);
    // update tasks
}

/* String EditorSession Editor -> Rank
 * get the rank of a tass
 */
function getRank(headline, ES, ED) {
    // find range
    var headlineRange = ED.find(headline, {wrap:true, range: null}, false);
    
    var beginRank = ED.find(RANK, {wrap:true, range: null}, false);
    var endRank = ED.find("\s", {wrap:true, range: null}, false); 
    var rankRange = beginRank;
    rankRange.start.column = rankRange.end.column;
    rankRange.end.column = endRank.start.column;
    
    var doc = ES.getDocument();
    var rank = parseInt(doc.getTextRange(rankRange));
    
    return rank;
}

/* Rank Rank Editor EditorSession -> ListofRanges
 * produce a list of rank for each rank between the two borders
 */
function getListOfUpperRanges(upperRank, lowerRank, ED, ES) {
    var lor = [];
    for (var i = upperRank; i < lowerRank; i++) {
        lor.unshift(getRangesOfRank(i, ED, ES));
    }
    return lor;
}

/* Rank Rank Editor EditorSession -> ListofRanges
 * produce a list of rank for each rank between the two borders
 */
function getListOfLowerRanges(lowerRank, upperRank, ED, ES) {
    var lor = [];
    for (var i = lowerRank; i > upperRank; i--) {
        lor.unshift(getRangesOfRank(i, ED, ES));
    }
    return lor;
}

/* Rank Editor EditorSession -> Ranges
 * produce all ranges of rank
 */
function getRangesOfRank(rank, ED, ES) {
    ED.$search.set({wrap:true, needle: RANK + rank, range: null});
    var ranges = ED.$search.findAll(ES);
    return {"rank": rank, "ranges": ranges};
}

/* ListOfRanges -> void
 * decreases the ranks of ListOfRanges in the file
 */
function decListOfRangesOfRank(lor, ED, ES) {
    lor.forEach(function(el) {
                var oldRank = el.rank;
                var newRank = el.rank + 1;
                var ranges = el.ranges;
                
                ranges.forEach(function (el) {
                   ES.replace(el, RANK + newRank); 
                });
            });
}

/* ListOfRanges -> void
 * increases the ranks of ListOfRanges in the file
 */
function incListOfRangesOfRank(lor, ED, ES) {
    lor.forEach(function(el) {
                var oldRank = el.rank;
                var newRank = el.rank - 1;
                var ranges = el.ranges;
                
                ranges.forEach(function (el) {
                   ES.replace(el, RANK + newRank); 
                });
            });
}

exports.upRank = upRank;
exports.downRank = downRank;