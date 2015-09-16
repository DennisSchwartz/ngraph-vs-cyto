/*
 * cytoscape-test
 * https://github.com/DennisSchwartz/cytoscape-test
 *
 * Copyright (c) 2015 Dennis Schwartz
 * Licensed under the Apache-2.0 license.
 */

/**
@class cytoscapetest
 */

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Layer = require("./layer");
var Edge = require("./edge");
var Node = require("./node");
var EdgeCol = require("./edgecol");
var NodeCol = require("./nodecol");


var  cytoscapetest;
module.exports = cytoscapetest = function(opts){
    this.el = opts.el;
    var nodes = opts.nodes;
    var edges = opts.edges;
    console.log("Nodes: " + JSON.stringify(nodes));
    console.log("Edges: " + JSON.stringify(edges));
    var test = new Layer(nodes, edges);//'{"id":1}, {"id":2}', '{"src":1, "dest":2}');
    test.calculateLayer();
    //this.el.textContent = test.toCytoscape();
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     cytoscapetest.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


cytoscapetest.hello = function (name) {

  return 'hello ' + name;
};

