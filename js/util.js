var org = require('../lib/markdown-org-mode-parser');

var process = require("process");
var fs = require("fs");
var path = require("path");
var assert = require("assert");

var deepEqual = assert.deepEqual;

function getTaskFiles() {
    var userHome = getUserHome();
    console.log(userHome);
    return getLiveflow(userHome);
}

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function getLiveflow(userHome) {
    var confFolder = path.join(userHome + "/.livewookiee/");
    var filename = "liveflow.md";
    console.log(confFolder);
    var liveFlowPath = path.join(confFolder, filename);
    if (fs.existsSync(confFolder)) {
        if (fs.existsSync(liveFlowPath)) {
            return liveFlowPath;
        } else {
            process.chdir(confFolder);
            fs.writeFileSync(filename, "");
        }
    } else {
        fs.mkdir(confFolder);
        process.chdir(confFolder);
        fs.writeFileSync(filename, "")
    }
    return liveFlowPath;
}

function print_r(obj) { 
	for (var e in obj) {
        console.log(e);
    }
}

    /*
     * ==========
     * Data definitions:
     */
    
    /* ListOfNodes is one of:
     * - []
     * - ListOfNodes.push(node)
     *
        function fnForTaskState(lon) {
            if (lon.length === 0) {
                //code  
            } else {
                //code
            }
        }
    */

    /**
     * String -> ListOfNodes
     * Produces a list of nodes with in a string with markdown content md
     */
    deepEqual("","", "getNodes");
    function getNodes(md) {
        var nodes = org.parseBigString(md);
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

exports.getTaskFiles = getTaskFiles;
exports.getUserHome = getUserHome;
exports.getLiveflow = getLiveflow;
exports.print_r = print_r;
exports.getNodes = getNodes;
exports.getProjects = getProjects;