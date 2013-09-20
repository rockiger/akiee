var org = require('./lib/markdown-org-mode-parser');
var fs = require("fs")

angular.module('myApp').factory('Nodelist',  function() {

  var nodes;
  var data = fs.readFileSync("/home/macco/.livewookiee/liveflow.md", "utf-8");
  nodes = org.parseBigString(data);
  return nodes;
});