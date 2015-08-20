var org = require('../lib/markdown-org-mode-parser');

var process = require("process");
var fs = require("fs");
var path = require("path");
var assert = require("assert");

/*
 * ==========
 * Constants:
 */
var RANK = "RANK: ";
var DEFPRO = "Inbox"; // default project
var DEADLINE = "DEADLINE: ";

/*
 * ==========
 * Globals:
 */
var deepEqual = assert.deepEqual;


function getTaskFiles() {
    var userHome = getUserHome();
    //console.log(userHome);
    return getLiveflow(userHome);
}

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}

function getLiveflow(userHome) {
    var confFolder = path.join(userHome + "/.akiee/");
    var filename = "liveflow.md";
    var filepath = path.join(userHome + "/.akiee/" + filename);
    //console.log(confFolder);
    var liveFlowPath = path.join(confFolder, filename);
    if (fs.existsSync(confFolder)) {
        if (fs.existsSync(liveFlowPath)) {
            return liveFlowPath;
        } else {
            fs.writeFileSync(filepath, "");
        }
    } else {
        fs.mkdirSync(confFolder);
        fs.writeFileSync(filepath, "");
    }
    return liveFlowPath;
}


/* Editor String -> Bool
 * consumes an editor and a filepath and loads the file in editor,
 * produces the content of the file or false if file could not be loaded
 */

function openFile(editor, filePath) {
  if (fs.existsSync(filePath)) {
	hasChanged = false;
	var fileContent = fs.readFileSync(filePath, "utf8");
	editor.getSession().setValue(fileContent);
	currentFile = filePath;
	return fileContent;
  }
  else {
	return false;
  }
}

function print_r(obj) { 
	for (var e in obj) {
        console.log(e);
    }
}

    /**
     * String -> ListOfNodes
     * Produces a list of nodes with in a string with markdown content md
     */
    deepEqual("","", "getNodes");
    function getNodes(md) {
        var nodes = org.parseBigString(md);
        //console.log(nodes);
        return nodes;
    }
    
    /**
     * ListOfNodes -> ListOfNodes
     * Consumes a list of nodes and produces a ListOfNodes that are first order headlines
     * filters the "Inbox" project
     */
    function getProjects(lon) {
	if (lon.length === 0) {
            return [];  
        }
	else if (lon[0].headline === "Inbox") {
	    return getProjects(lon.slice(1));
	} else {
	    if (lon[0].todo === null && lon[0].level === 1) {
	        return [lon[0]].concat(getProjects(lon.slice(1)));
	    } else {
		return getProjects(lon.slice(1));
	    }
        }
    }
    
    /**
     * ListOfNodes -> ListOfNodes
     * Produces a ascending ordered list of nodes by RANK,
     * non ranked nodes, are put at the end of the list
     */
    var n1 = {"headline": "Test-Node 1", "rank": 0};
    var n2 = {"headline": "Test-Node 2", "rank": 5};
    var n3 = {"headline": "Test-Node 3", "rank": 11};
    var n4 = {"headline": "Test-Node 11", "rank": null};
    
    
    deepEqual(orderNodesByRank([n1, n2, n3]),
	      [n1, n2, n3], "orderNodesByRank: line 103");
    deepEqual(orderNodesByRank([n2, n1, n3]),
	      [n1, n2, n3], "orderNodesByRank: line 105");
    deepEqual(orderNodesByRank([n3, n2, n1]),
	      [n1, n2, n3], "orderNodesByRank: line 107");
    deepEqual(orderNodesByRank([n3, n2, n1, n3]),
	      [n1, n2, n3, n3], "orderNodesByRank: line 109");
    deepEqual(orderNodesByRank([n3, n2, n4, n1]),
	      [n1, n2, n3, n4], "orderNodesByRank: line 109");
    deepEqual(orderNodesByRank([]),
	      [], "orderNodesByRank: line 111");
    
    function orderNodesByRank(lon) {
	return lon.sort(hasHigherRank);
    }
    
    
    /**
     * Node Node -> Bool
     * Determens if n2 has a bigger Rank than n1
     */
    deepEqual(hasHigherRank(n1, n2), -1);
    deepEqual(hasHigherRank(n2, n1), 1);
    deepEqual(hasHigherRank(n1, n3), -1);
    deepEqual(hasHigherRank(n3, n1), 1);
    deepEqual(hasHigherRank(n1, n1), 1);
    deepEqual(hasHigherRank(n3, n3), 1);
    
function hasHigherRank(n1, n2) {
	if (n1.rank === null) {
	    return 1;
	} else if (n1.rank !== null && n2.rank === null) {
	    return -1;
	} else if (parseInt(n1.rank, 10) < parseInt(n2.rank, 10)) {
	    return -1;
	} else {
	    return 1;
	}
}

/**
 * ListOfNodes -> String
 * Consumes a list of numbers and produces a string with all task in markdown
 */
deepEqual(lonToMarkdown([{"level":1, "headline":"Headline 1"},
                         {"level":2, "headline":"Headline 2", "todo":"TODO",
                          "body": "Body for 2", "rank": 10}]),
                          "# Headline 1\n## TODO Headline 2\nBody for 2\n\nRANK: 10\n");
                          
function lonToMarkdown (lon) {
    var taskString = "";
    lon.forEach(function(e) {
       if (e.level === 1) {
           taskString += "# ";
       } else if (e.level === 2) {
           taskString += "## ";
       }
       
       if (e.todo) {
           taskString += e.todo + " ";
       }
       
       taskString += e.headline  + "\n";
       
       if (e.body) {
           taskString += e.body.trim() + "\n\n";
       }
       
       if (e.deadline) {
           taskString += DEADLINE + "<" + String(e.deadline.getFullYear()) + "-" + 
                   String(e.deadline.getMonth()) + "-" + String(e.deadline.getDate()) +
                   "> \n";
       }
       
       if (e.rank) {
           taskString += RANK + e.rank + "\n";
       }
    });
    return taskString;
}

/**
 * ListOfNodes String -> String
 * Consumes a ListOfNodes and a String with a headline and produces a string 
 * with the headline of the corresponding project
 */

var lon1 = [{"key":"orgNode_14.#","level":1,"headline":"Rockiger","body":"","tag":null,"tags":{},"todo":null,"priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":null,"drawer":{}},{"key":"orgNode_15.##","level":2,"headline":"Kuendigung ebuero","body":"\n","tag":null,"tags":{},"todo":"DOING","priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":"134","drawer":{}},{"key":"orgNode_16.##","level":2,"headline":"Recherche f\u00FCr FinanzProdukteTest.de (keywords, konkurrenz, provisionen)","body":"","tag":null,"tags":{},"todo":"DOING","priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":"14","drawer":{}},{"key":"orgNode_17.#","level":1,"headline":"FinanzProduktTest","body":"\n","tag":null,"tags":{},"todo":null,"priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":null,"drawer":{}},{"key":"orgNode_18.##","level":2,"headline":"Datenschutzerklaerung fuer FinanzProduktTest","body":"\n","tag":null,"tags":{},"todo":"DOING","priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":"174","drawer":{}},{"key":"orgNode_19.#","level":1,"headline":"Inbox","body":"","tag":null,"tags":{},"todo":null,"priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":null,"drawer":{}},{"key":"orgNode_20.##","level":2,"headline":"Bei Notar w/ Liquidierungstermin anrufen (0611) 30 69 59","body":"","tag":null,"tags":{},"todo":"DOING","priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":"102","drawer":{}},{"key":"orgNode_21.##","level":2,"headline":"Arero kaufen","body":"","tag":null,"tags":{},"todo":"DOING","priority":null,"scheduled":null,"deadline":null,"properties":{},"rank":"52","drawer":{}}];


deepEqual(projectOf([{"level":1, "headline":"Project"},
                    {"level":2, "headline":"Task", "todo":"TODO",
                     "body": "Body for 2", "rank": 10}], "Task"), "Project");
deepEqual(projectOf([{"level":1, "headline":"Project 1"},
                    {"level":2, "headline":"Task 1", "todo":"TODO",
                     "body": "Body for 2", "rank": 10},
                    {"level":1, "headline":"Project 2"},
                    {"level":2, "headline":"Task 2", "todo":"TODO",
                     "body": "Body for 2", "rank": 10}], "Task 2"), "Project 2");
deepEqual(projectOf([{"level":1, "headline":"Project 1"},
                    {"level":2, "headline":"Task 1", "todo":"TODO",
                     "body": "Body for 2", "rank": 10},
                    {"level":2, "headline":"Task 2", "todo":"TODO",
                     "body": "Body for 2", "rank": 10}], "Task 2"), "Project 1");
deepEqual(projectOf([{"level":2, "headline":"Task 1", "todo":"TODO",
                     "body": "Body for 2", "rank": 10},
                    {"level":2, "headline":"Task 2", "todo":"TODO",
                     "body": "Body for 2", "rank": 10}], "Task 2"), "Inbox");
deepEqual(projectOf(lon1, "Kuendigung ebuero"), "Rockiger");

function projectOf(lon, headline) {
    function projectOfHelper(lon, headline, project) {
        try {
            if (lon[0].headline === headline || lon.length === 0) {
                return project;
            } else if (parseInt(lon[0].level) === 1) {
                return projectOfHelper(lon.slice(1), headline, lon[0].headline);
            } else {
                return projectOfHelper(lon.slice(1), headline, project);
            }
        } catch (error) {
            console.log(String(error));
        }
    }
    return projectOfHelper(lon,headline, DEFPRO);
}

exports.getTaskFiles = getTaskFiles;
exports.getUserHome = getUserHome;
exports.getLiveflow = getLiveflow;
exports.print_r = print_r;
exports.getNodes = getNodes;
exports.getProjects = getProjects;
exports.orderNodesByRank = orderNodesByRank;
exports.hasHigherRank = hasHigherRank;
exports.openFile = openFile;
exports.lonToMarkdown = lonToMarkdown;
exports.projectOf = projectOf;
