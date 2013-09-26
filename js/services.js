var org = require('./lib/markdown-org-mode-parser');
var util = require("./js/util");
var fs = require("fs");


angular.module('myApp').factory('Nodes',  function() {
  
  var nodeService = {};
  
  nodeService.getNodes = function() {
    var nodes;
    var currentFile = util.getTaskFiles();
    var data = fs.readFileSync(currentFile, "utf-8");
    nodes = org.parseBigString(data);
    return nodes;
  };
  return nodeService
});