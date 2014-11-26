'use strict';

var gui = require('nw.gui');
var util = require("./js/util");
var fs = require("fs");
var Path = require("path");
var editor = require("./js/editor");

function AppCtrl($scope, Nodes) {


  var hasChanged = false;
  var currentFile;

//  console.dir(nodelist);
 // console.info(nodelist);

  createMenu();

  $scope.aceShow = true;
  $scope.agendaShow = false;

  currentFile = util.getTaskFiles();
  openFile(currentFile);
  util.print_r($scope.uiAce);
  setupKeys();

  // The ui-ace option
  $scope.aceOption = {
    useWrapMode : true,
    showGutter: true,
    theme:'tomorrow_night_blue',
    mode: 'markdown',
    onLoad: function (_ace) {
      // HACK to have the ace instance in the scope...
      editor.setupAce(_ace);
    }
  };

  $scope.toggleEditor = function() {
    $scope.aceShow = !$scope.aceShow;
    $scope.agendaShow = !$scope.aceShow;
    if ($scope.agendaShow) {
      $scope.agenda = Nodes.getNodes();
    }
    else {
        window.LW.editor.focus(); // here function to set focus on editor
    }
  };
  window.LW.toggleEditor = $scope.toggleEditor;
//  console.log(window.LW.toggleEditor);

  function openFile(path) {
    if (path) {
      $scope.aceModel = fs.readFileSync(path, "utf-8");
    }
  }

  function createMenu() {
    var menubar = new gui.Menu({ type: 'menubar' });

    // Create a menuitem
    var sub1 = new gui.Menu();
    sub1.append(new gui.MenuItem({
      label: 'Test1',
      click: function () { console.log("test1");}
    }));

    // You can have submenu!
    menubar.append(new gui.MenuItem({ label: 'Sub1', submenu: sub1}));

    //assign the menubar to window menu
    win.menu = menubar;
  }
    function setupKeys() {
      var KEY = {};
      // create key map A - Z
      for (var i = 65; i <= 90; i++) {
        KEY[String.fromCharCode(i).toUpperCase()] = i;
      }

      function handleKeys(event) {

        // ESC
        if (event.keyCode === 27) {
          applyEvent('escape', event);
          return;
        }

        if (!event.metaKey && !event.ctrlKey) {
          return;
        }

        if (event.keyCode === KEY.T) {
          window.LW.toggleEditor();
          console.log(window.LW.toggleEditor);
          return;
        }
      }
      document.addEventListener('keydown', handleKeys );
    }
}

function EditorCtrl($scope, ace) {
  console.log("EditorCtrl called");
}