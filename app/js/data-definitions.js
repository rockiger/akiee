/*
 * ==========
 * Data definitions:
 */
 
/* TaskState is one of:
 * - "TODO"
 * - "DONE"
 * - "DOING"
 *        
    function fnForTaskState(ts) {
        if (ts === "TODO") {
            //code  
        } else if (ts === "DONE") {
            //code  
        } else if (ts === "DOING") {
            //code
        }
    }
 */
 
/* ClassName is one of:
 * - "todo"
 * - "doing"
 * - "done"
 * 
    function fnForClassName(cn) {
        if (cn === "todo") {
            //code  
        } else if (cn === "doing") {
            //code  
        } else if (ts === "done") {
            //code
        }
    }
 */

/* Node is Object
 * interp. as a Task with properties:
 * - key: unique key in markdown file
 * - level: level in markdown structure
 * - headline
 * - body
 * - tag: default null
 * - tags default {}
 * - todo: task state, default null
 * - priority, default null
 * - scheduled, default null
 * - deadline, default null
 * - drawer, default {}
 * - rank: unique Ranking in File, default null
 * 
 Example:
    {
        "key":"orgNode_33.##",
        "level":2,
        "headline":"As a user I want to change the state of a task with a simple action.",
        "body":"",
        "tag":null,
        "tags":{},
        "todo":"DOING",
        "priority":null,
        "scheduled":null,
        "deadline":null,
        "properties":{},
        "drawer":{},
        "rank":null
    }
    
    function fnForNode(n) {
        //code
        n.key,          // String
        n.level,        // Number (Int)
        n.headline,     // String
        n.body,         // String
        n.tag,          // String
        n.tags,         // Object
        n.todo,         // String
        n.priority,     // String
        n.scheduled,    // Date
        n.deadline,     // Date
        n.drawer,       // Object
        n.rank,         // Number (Int)
    }
    
    Template rules used:
     - compound: 9 fields
  */

/* ListOf(Nodes)  is one of:
 * - []
 * - ListOf(Nodes).unshift(Node)
 *
 Examples:
   var lon1 = [];
   var lon2 = lon1.unshift(n);
   
   function fnForLon(lon) {
    if (lon.length === 0) {     //BASE CASE
        return //CODE;
    } else {
        return //code           //COMBINATION
        lon[0]                  //NODE
        fnForLon(lon.slice(1))  //NATURAL RECURSION          
    }
   }
   
   Template rules used:
    - one of: 2 cases
    - atomic distinct: empty
    - compound: (cons String ListOfString)
    - self-reference: (rest los) is ListOfString
*/

/* Rank is one of:
 * - Integer [1, ...]
 * - null
 * - interp. as the ranking of a task
 * - should be an int > 0
 * - null equals infinity
 * - should be atomar
 *
 Examples:
 var node1 = {};
 var node2 = {};
 node1.rank = 10;
 node2.rank = null;
 
 function fnForRank(rank) {
    if (rank === null) {
        return //CODE;
    } else if (parseInt(rank, 10) > 0) {
        return //CODE;
    }
 }
*/

/* RangesOfRank consist of
 * - Int
 * - Array
 * interpr. as all ranges that hold the rank in a document
 *
 Examples:
 {"rank": 1, "ranges": [range1, range2]}
 
 function fnForRangePerRank(rpr) {
    //code
    rpr.rank,
    rpr.ranges
 }
 */

/* ListOfRpr is one of:
 * - []
 * - ListOfRpr.unshif(rpr)
 * interp. as a List of rpr between two borders
 *
 Examples:
 [{"rank": 1, "ranges": [range1, range2]}
 {"rank": 2, "ranges": [range3, range4]}]
 
 function fnForLor(lor) {
    if (lor.length === 0) {     //BASE CASE
        return //CODE;
    } else {
        return //code           //COMBINATION
        lor[0]                  //NODE
        fnForLon(lor.slice(1))  //NATURAL RECURSION          
    }
 }
 */