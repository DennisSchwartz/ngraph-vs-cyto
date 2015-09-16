var Backbone = require("backbone");
var Edge = require("./edge");
var Node = require("./node");

var NodeCol = Backbone.Collection.extend({
    model: Node
});


module.exports = NodeCol;