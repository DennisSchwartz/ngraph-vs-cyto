var Backbone = require("backbone");
var _ = require("lodash");
var Edge = require("./edge");

var EdgeCol = Backbone.Collection.extend({
    model: Edge,
    initialize: function(nodes) {
        this.nodes = nodes;
    },
    newEdge: function (src, dest) {
        console.log("Src: " + src);
        console.log("Dest: " + dest);
        var node1 = this.nodes.filter(function (x) { return x.id === src })[0]; // This may work?!!
        var node2 = this.nodes.filter(function (x) { return x.id === dest })[0]; // This may work?!!
        console.log("Trying to create edge!");
        var data = {
            "id": node1.id + "-" + node2.id,
            "src": node1.id,
            "dest": node2.id
        };
        var newEdge = new Edge(data);
        console.log("Edge created!");;
        console.log("Data: " + data);
        //newEdge.initialize(data);
        this.add(newEdge);
    }
});


module.exports = EdgeCol;