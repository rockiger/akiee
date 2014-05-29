/* This module deals with entering a task via a special entry field */

var util = require('./util');
var u = require('util');
var $;
var ES;
var ED;

/* Function(jquery) Object Object -> Task
 * Consumes jquery-object, editor-session, the document and opens up an entry field to insert a new task, produces the task
 */
function openTaskEntry(jquery, editorSession, editor) {
    $ = jquery;
    ES = editorSession
    ED = editor;
    var content = ES.getValue();
    var projects = util.getProjects(util.getNodes(content));
    var enterTask = $('#enterTask');
    var enterTaskProject = $('#enterTaskProject');
    var enterHeadline = $('#enterHeadline');
    
    enterTaskProject.html("<option>Inbox</option>\n" + buildOptions(projects));
    enterTask.submit(submitTask);
    enterTask.show();
    enterHeadline.focus();
}

/* ListOfNodes -> String
 * Consumes a list of nodes and produces a option list
 */
function buildOptions(lon) {
    if (lon.length === 0) {
        return "";
    } else {
        return "<option>" + lon[0].headline + "</option>\n" + buildOptions(lon.slice(1));
    }
}

/* Function(jquery) Object -> Task
 * Consumes jquery and closes the entry form and deletes the input
 */
function cancelTaskEntry($) {
    var enterTask = $('#enterTask');
    var enterHeadline = $('#enterHeadline');
    
    enterHeadline.val("");
    enterTask.hide();
}

/* Form -> Void
 * consumes the form and is reponsible for the handling of a submited task
 */
function submitTask(e) {
    
    var taskProject = $(this).find('#enterTaskProject').val();
    var taskHeadline = $(this).find('#enterHeadline').val();
    var taskStatus = $(this).find('#enterTaskStatus').val();
    
    
    //findProject()
    console.log(taskProject);
    var project = findProject(taskProject);
    console.log(u.inspect(project, {showHidden: false, depth: null}));
    //findEndOfProject();
    //writeTask()
    //updateTaskList()
    
    
    cancelTaskEntry($);
    return false; //prevent form from redirect.
}

/* String -> Range
 * Consumes a projectname and produces the position of that project
 */
function findProject(project) {
    // find range
    var result = ED.find("# " + project, {wrap:true, range: null}, false);
    if (result === undefined && project === "Inbox") {
        return createInbox();
    } else {
        return result;
    }
}

/* Void -> Range
 * Creates a Inbox in taskfile and producese the range of that Inbox
 */
function createInbox() {
    console.log("createInbox()")
    ED.navigateFileEnd();
    var doc = ES.getDocument();
    var pos = ED.getCursorPosition();
    var newLine = doc.getNewLineCharacter();
    console.log(u.inspect(pos));
    ES.insert(pos, newLine + "# Inbox");
    return findProject("Inbox");
}

exports.openTaskEntry = openTaskEntry;
exports.cancelTaskEntry = cancelTaskEntry;

/* Basic htlm for entry form
<div id="enterTask" class="row">
      <div class="col-xs-6">
        <input type="text" class="form-control" id="enterHeadline" placeholder="Enter Headline" autofocus>
      </div>
      <div class="col-xs-2">
        <select class="form-control">
        </select>
      </div>
      <div class="col-xs-3">
        <button type="submit" class="btn btn-default">Create</button>
          <button type="button" class="btn btn-link">Cancel</button>
      </div>
    </div>
*/