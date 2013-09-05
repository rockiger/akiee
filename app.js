"use strict";
var app = angular.module('x', ['ui.ace']);
var gui = require('nw.gui');
var util = require("./js/util");
var fs = require("fs");
var Path = require("path");
var editor = require("./js/editor");

function AceCtrl($scope) {

    var hasChanged = false;
    var currentFile;

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

    currentFile = util.getTaskFiles();
    openFile(currentFile);
    util.print_r($scope.uiAce);
    function openFile(path) {
        if (path) {
            $scope.aceModel = fs.readFileSync(path, "utf-8");
        }
    }

    function saveFile(path) {
        if (hasChanged) {
            var data = editor.getSession().getValue(); //.replace(/\n/g,"\r\n");
            fs.writeFileSync(path, data, "utf8");
            console.log("Saved " + currentFile);
            hasChanged = false;
        }
    }
}


