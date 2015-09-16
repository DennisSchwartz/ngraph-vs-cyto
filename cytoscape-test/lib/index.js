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

var Layer = require("./layer")

var  cytoscapetest;
module.exports = cytoscapetest = function(opts){
  this.el = opts.el;
  var test = new Layer("{{\"id\":1}, {\"id\":2}}", "{{\"src\":1, \"dest\":2}}");
  test.calculateLayer();
  this.el.textContent = test.toCytoscape();
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

