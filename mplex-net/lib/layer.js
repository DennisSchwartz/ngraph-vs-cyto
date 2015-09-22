var Backbone = require("backbone");
var Edge = require("./edge");
var Node = require("./node");
var EdgeCol = require("./edgecol");
var NodeCol = require("./nodecol");


var Layer = Backbone.Model.extend({
    // Create a model holding a collection of nodes and edges
    initialize: function(nodes, nodelayers, edges) {
        this.set("nodes", nodes);
        this.set("edges", edges);
    },
    calculateLayer: function() {
        var nodes = this.get("nodes");
        var edges = this.get("edges");
        var nodeCol = new NodeCol();
        for (var i=0; i<nodes.length; i++) {
            nodeCol.add(new Node({
                id: nodes[i].id
            }))
        }

        this.set("nodes", nodeCol);
        var edgeCol = new EdgeCol(nodeCol);
        //edgeCol.initialize();
        for (i=0; i<edges.length; i++) {
            edgeCol.newEdge(edges[i].src, edges[i].dest);
        }

        this.set("edges", edgeCol);
    }
});


module.exports = Layer;