// Create graph:
var createGraph = require('ngraph.graph');
var graph = createGraph();
graph.addLink(1, 2);

// And render it
var nthree = require('ngraph.three');
var graphics = nthree(graph);

graphics.run();