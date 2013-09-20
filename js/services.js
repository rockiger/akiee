var org = require('/home/macco/Listings/org-mode-parser/lib/org-mode-parser');
//var org = require('./lib/markdown-org-mode-parser');
var fs = require("fs")

angular.module('myApp').factory('Nodelist',  function() {

  var nodes;
  var data = fs.readFileSync("/home/macco/.livewookiee/liveflow.md", "utf-8");
  nodes = org.parseBigString(data);
  console.log(nodes);
  return nodes;
});