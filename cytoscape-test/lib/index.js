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
/*var Edge = require("./edge");
var Node = require("./node");
var EdgeCol = require("./edgecol");
var NodeCol = require("./nodecol");*/
var cytoscape = require("cytoscape");


var  cytoscapetest;
module.exports = cytoscapetest = function(opts){
    this.el = opts.el;
    var nodes = opts.nodes;
    var edges = opts.edges;
    console.log("Nodes: " + JSON.stringify(nodes));
    console.log("Edges: " + JSON.stringify(edges));
    var test = new Layer(nodes, edges);//'{"id":1}, {"id":2}', '{"src":1, "dest":2}');
    test.calculateLayer();
    console.log(JSON.stringify(test.toCytoscape()));


    this.el.style.left = 0;
    this.el.style.top = 0;
    this.el.style.width = "100%";
    this.el.style.height = "100%";
    this.el.style.position = "absolute";


    var cy = cytoscape({
        container: this.el,
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(id)'
            })
            .selector('edge')
            .css({
                'target-arrow-shape': 'triangle',
                'width': 4,
                'line-color': '#ddd',
                'target-arrow-color': '#ddd'
            })
            .selector('.highlighted')
            .css({
                'background-color': '#61bffc',
                'line-color': '#61bffc',
                'target-arrow-color': '#61bffc',
                'transition-property': 'background-color, line-color, target-arrow-color',
                'transition-duration': '0.5s'
            }),
        elements: test.toCytoscape(),
        layout: {
            name: 'breadthfirst',
            directed: true,
            roots: '#a',
            padding: 10
        }
    });

/*    var bfs = cy.elements().bfs('#a', function(){}, true);

    var i = 0;
    var highlightNextEle = function(){
        bfs.path[i].addClass('highlighted');

        if( i < bfs.path.length ){
            i++;
            setTimeout(highlightNextEle, 1000);
        }
    };

// kick off first highlight
    highlightNextEle();
    */
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

