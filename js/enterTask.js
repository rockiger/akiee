/* This module deals with entering a task via a special entry field */

/* Function(jquery) -> Task
 * Consumes jquery-object and opens up an entry field to insert a new task, produces the task
 */
function openTaskEntry($) {
    //TODO Add project to form with jquery
    $('#enterTask').modal();
    console.log("openTaskEntry");
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