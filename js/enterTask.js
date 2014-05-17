/* This module deals with entering a task via a special entry field */

var util = require('./util');
var u = require('util');

/* Function(jquery) -> Task
 * Consumes jquery-object and opens up an entry field to insert a new task, produces the task
 */
function openTaskEntry($, ES, DOC) {
    var content = ES.getValue();
    var projects = util.getProjects(util.getNodes(content));
    var enterTask = $('#enterTask');
    var enterTaskForm = $('#enterTaskForm select');
    enterTaskForm.html("<option>Inbox</option>\n" + buildOptions(projects));
    
    
    enterTask.on('shown', function () {
        var enterHeadline = DOC.getElementById("enterHeadline");
        enterHeadline.focus();
        //$('#enterHeadline').focus();
    });
    //console.log(u.inspect($('#enterHeadline')));
    enterTask.modal();
    
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

exports.openTaskEntry = openTaskEntry;

/* Basic htlm for entry form
<form class="form-inline" role="form">
  <div class="form-group">
    <input type="text" class="form-control" id="enterHeadline" placeholder="Enter Headline">
  </div>
  <div class="form-group"><select class="form-control">
  <option>Inbox</option>
  <option>Akiee</option>
</select>
  </div>
  <button type="submit" class="btn btn-default">Create</button>
  <button type="button" class="btn btn-link">Cancel</button>
</form>
*/