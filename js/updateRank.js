/* This module deals with html creation of certain tasks */
"use strict";
var assert = require("assert");
var enterTask = require("./enterTask");
var util = require("./util");


var deepEqual = assert.deepEqual;

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
    var content = ED.getSession().getValue();
    var lon = util.getNodes(content);
    
    var currentRow = el.parentNode;
    var currentHeadline = currentRow.children[1].innerHTML;
    var currentStatus = currentRow.children[0].innerHTML;
    var currentNode = nodeWithHeadline(lon, currentHeadline, currentStatus);
    var currentRank = parseInt(currentNode.rank);
    
    if (upOrDown === "up") {
        try {
            var borderRow = currentRow.previousElementSibling;
            var borderHeadline = borderRow.children[1].innerHTML;
        }
        catch (e) {
            console.log("Element ist allready first in Backlog.");
            return;
        }
    } else {
        try {
            var borderRow = currentRow.nextElementSibling;
            var borderHeadline = borderRow.children[1].innerHTML;
        }
        catch (e) {
            console.log("Element ist allready last in Backlog.");
            return;
        }
    }
    
    var borderNode = nodeWithHeadline(lon, borderHeadline, currentStatus);
    var borderRank = parseInt(borderNode.rank);
    
    if (borderRank === "" | borderRank === undefined) {
        console.log(borderHeadline + " has no Rank.");
        return;
    }
    
    if (currentRank === "" | currentRank === undefined) {
        // current Headline is not rated yet, create ranking
        // currentRank = enterTask.newRank();
        console.log(currentHeadline + " has no Rank.");
        return;
    }
    
    if (upOrDown === "up") {
        var lon = lon.map(function(key, val, array) {
            if (parseInt(key.rank) >= borderRank && parseInt(key.rank) < currentRank) {
                var rank = parseInt(key.rank) + 1;
                key.rank = rank.toString();
            }
            return key;
        });
    } else {
       var lon = lon.map(function(key, val, array) {
                if (parseInt(key.rank) <= borderRank && parseInt(key.rank) > currentRank) {
                    var rank = parseInt(key.rank) - 1;
                    key.rank = rank.toString();
                }
                return key;
            });     
    }
    currentNode.rank = borderRank;
    
    //console.log(currentRank);
    //console.log(borderRank);
    //console.log(lon);
    
    var editorContent = "";
    lon.forEach(function(e) {
       if (e.level === 1) {
           editorContent += "# ";
       } else if (e.level === 2) {
           editorContent += "## ";
       }
       
       if (e.todo) {
           editorContent += e.todo + " ";
       }
       
       editorContent += e.headline  + "\n";
       
       if (e.body) {
           editorContent += e.body + "\n";
       }
       
       if (e.rank) {
           editorContent += RANK + e.rank + "\n";
       }
    });
    
    //console.log(editorContent);
    
    ES.setValue(editorContent.trim());
    
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
    //console.log(headline);
    var headlineRange = ED.find(headline, {wrap:true, range: null}, false);
    
    var beginRank = ED.find(RANK, {wrap:false, range: null}, false);
    //var endRank = ED.find("\s", {wrap:true, range: null}, false);
    var endRank = ED.find("\n#", {wrap:true, range: null}, false); 
    //console.log(headline + ": " + endRank.end);
    var rankRange = beginRank;
    try {
        rankRange.start.column = rankRange.end.column;
    }
    catch (e) {
        console.log("Couldn't find Rank statement.");
        return undefined;
    }
    
    try {
        rankRange.end.column = endRank.start.column;
    }
    catch (e) {
        console.log("Couldn't find end of Rank statement.");
        // TODO: Add a Rank statement to task, to not puzzle the user
        return undefined;
    }
    //console.log(rankRange);
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

/* ListOfNodes String String ->  Node
 * consumes a ListOfNodes a headline and a status, returns the found node or undefined
 */
deepEqual(nodeWithHeadline([{"headline":"Head 1", "todo":"DOING"},{"headline":"Head 2", "todo":"DOING"}], "Head 1", "DOING"), {"headline":"Head 1", "todo":"DOING"});
deepEqual(nodeWithHeadline([{"headline":"Head 1", "todo":"DOING"},{"headline":"Head 2", "todo":"DOING"}], "Not Head", "DOING"), undefined);

function nodeWithHeadline(lon, headline, status) {
    return lon.filter(function (e) {
            return (e.headline === headline&& e.todo === status);
        })[0];
}

exports.upRank = upRank;
exports.downRank = downRank;