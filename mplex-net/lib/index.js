/*
 * mplex-net
 * https://github.com/DennisSchwartz/mplex-net
 *
 * Copyright (c) 2015 Dennis Schwartz
 * Licensed under the MIT license.
 */

/**
@class mplexnet
 */

//var multiplexnet = {};
module.exports = mplexnet = function(opts) {

    this.parser = new Parser();
    this.aspects = this.parser.readAspects(aspects);
    this.nodes = this.parser.readNodes(nodes);
    this.edges = this.parser.readEdges(edges);
    this.network = new Network(this.nodes, this.edges, this.aspects);

    console.log("Hello there!");

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
 *     mplexnet.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


mplexnet.hello = function (name) {

  return 'hello ' + name;
};

