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
 * - "dono"
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
    //code
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

