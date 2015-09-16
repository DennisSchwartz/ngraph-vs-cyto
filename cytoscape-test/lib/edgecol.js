var Backbone = require("backbone");
var Edge = require("./edge");
var Node = require("./node");

var EdgeCol = Backbone.Collection.extend({
    model: Edge,
    initialize: function(model, nodes) {
        this.nodes = nodes;
    },
    newEdge: function (src, dest) {
        var node1 = this.nodes.get(src); // This may work?!!
        var node2 = this.nodes.get(dest); // This may work?!!

        this.add(new Edge({
            id: node1.name + "-" + node2.name,
            src: node1,
            dest: node2
        }));
    }
});


module.exports = EdgeCol;