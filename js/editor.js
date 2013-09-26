//var gui = require('nw.gui');
var fs = require("fs");
var util = require("./util");

var hasChanged = false;
var currentFile;

function setupAce(ace) {

  var editor = ace;
  window.LW.editor = editor; // To have a global object for the editor
  var editorSession = editor.getSession();
  var win = window.gui.Window.get();

  currentFile = util.getTaskFiles();

  // Because people want to edit right away
  window.LW.editor.focus();

  // Because 16px is easier on the eyes
  editor.setFontSize(16);

  // Listener
  editorSession.on("change", function() {
    if (currentFile) {
      hasChanged = true;
      console.log("HasChanged: " + hasChanged);
    }
  });

  win.on('close', function() {
    saveFile(editor);
    win.close(true);
  });

  win.on('blur', function() {
    saveFile(editor);
  });

  editor.on('blur', function() {
    saveFile(editor);
  });
}

function openFile(editor, filePath) {
  if (fs.existsSync(filePath)) {
    hasChanged = false;
    editor.getSession().setValue(fs.readFileSync(filePath, "utf8"));
    currentFile = filePath;
  }
}

function saveFile(editor, filePath) {
  filePath = typeof filePath !== 'undefined' ? filePath :  currentFile;
  if (filePath) {
    if (hasChanged) {
      var data = editor.getSession().getValue(); //.replace(/\n/g,"\r\n");
      fs.writeFileSync(filePath, data, "utf8");
      console.log("Saved " + filePath);
      hasChanged = false;
    }
  }
}



exports.setupAce = setupAce;
exports.openFile = openFile;
