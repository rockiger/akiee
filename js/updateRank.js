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
    
    //console.log("Current Rank: " + currentRank);
    //console.log("Upper Rank: " + upperRank);
    
    
    // get ranges of ranks between current and upper
    var lor = getListOfRanges(upperRank, currentRank, ED, ES);
    //console.log(lor); // sieht gut aus
    decListOfRangesOfRank(lor, ED, ES);
    // give current tast the new upper rank
    updateTaskRank(currentHeadline, currentRank, upperRank, ED, ES);
    //replaceRankInCurrentTask(currentRank, upperRank, ED); //... 
    
}

/* String Number Number Editor Session -> Void
 * 
 * @param {type} e
 * @returns {undefined}
 */
function updateTaskRank(headline, oldRank, newRank, ED) {
    var headlineRange = ED.find(headline, {wrap:true, range: null}, false);
    var options = {wrap:true, needle: "RANK: " + oldRank, range: null, start: headlineRange};
    ED.replace("RANK: " + newRank, options);
    // update tasks
}
function downRank(e) {
    //code
    console.log("onClickDownRank");
    e.stopImmediatePropagation();
}

/* String EditorSession Editor -> Rank
 * get the rank of a tass
 */
function getRank(headline, ES, ED) {
    console.log(headline);
    // find range
    var headlineRange = ED.find(headline, {wrap:true, range: null}, false);
    console.log("headlineRange: " + headlineRange);    
//    console.log("Cursor-Position: " + ED.getCursorPosition().row + "," + ED.getCursorPosition().column);
//    var endOfRange = ED.find("\A", {wrap:true, range: null}, false);
//    console.log("endOfRange: " + endOfRange);
//    console.log("Cursor-Position-Row: " + ED.getCursorPosition().row);
//    var taskRange = headlineRange;
//    taskRange.end = endOfRange.start;// \A für eof
    
    var beginRank = ED.find("RANK: ", {wrap:true, range: null}, false);
    // TODO hier gibt noch Probleme "\n" ist nur eine form von Whitespace
    // falls Suche nicht erfolgreich ist, sollte range null sein
    //console.log("beginRank: " + beginRank);
    var endRank = ED.find("\s", {wrap:true, range: null}, false); 
    var rankRange = beginRank;
    //console.log(beginRank);
    rankRange.start.column = rankRange.end.column;
    rankRange.end.column = endRank.start.column;
    
    var doc = ES.getDocument();
    var rank = parseInt(doc.getTextRange(rankRange));
    
    return rank;
}

/* Rank Rank Editor EditorSession -> void
 * replaces all occurences of a rank, with a different
 */
function replaceRank(oldRank, newRank, ED, ES) {
    //ED.$search.set({wrap:true, needle: "RANK: " + oldRank, range: null})
    //var ranges = ED.$search.findAll(ES);
    //
    //if (ranges.length > 0) {
    //    console.log("Replacing 'RANK: " + oldRank + "' with 'RANK: " + newRank + "'!");
    //    console.log(ranges[0]);
    //    
    //}
    //
    //for (var i = 0; i < ranges.length; i++) {
    //        ES.replace(ranges[i], "RANK: " + newRank);
    //}
    
    ED.selectAll();
    var text = ED.getCopyText();
    //console.log("Looking for " + RANK + oldRank);
    var re = new RegExp(RANK + oldRank, "g");
    //console.log(re);
    var newText = text.replace(re, RANK + newRank);
    //console.log(newText);
    ED.insert(newText);
}

/* Rank Rank Editor EditorSession -> ListofRanges
 * produce a list of rank for each rank between the two borders
 */
function getListOfRanges(upperRank, lowerRank, ED, ES) {
    var lor = [];
    for (var i = upperRank; i < lowerRank; i++) {
        lor.unshift(getRangesOfRank(i, ED, ES));
    }
    return lor;
}

/* Rank Editor EditorSession -> Ranges
 * produce all ranges of rank
 */
function getRangesOfRank(rank, ED, ES) {
    ED.$search.set({wrap:true, needle: "RANK: " + rank, range: null});
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

exports.upRank = upRank;
exports.downRank = downRank;