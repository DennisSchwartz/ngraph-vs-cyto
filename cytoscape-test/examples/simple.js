// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var app = require("cytoscape-test");
var nodes = [{"id":1}, {"id":2}];
var edges = [{"src":1, "dest":2}];
var test = {};
var instance = new app({el: rootDiv, nodes: nodes, edges: edges});

