var Backbone = require("backbone");
var Edge = require("./edge");
var Node = require("./node");
var EdgeCol = require("./edgecol");
var NodeCol = require("./nodecol");


var Layer = Backbone.Model.extend({
    // Create a model holding a collection of nodes and edges
    initialize: function(nodes, edges) {
        this.set("nodes", nodes);
        this.set("edges", edges);
        //this.on("change:renderswitch", this.calculateLayer);
    },
    calculateLayer: function() {
        var nodes = this.get("nodes");
        var edges = this.get("edges");
        var nodeCol = new NodeCol();
        for (var i=0; i<nodes.length; i++) {
            nodeCol.add(new Node({
                id: nodes[i].id
            }))
        };
        this.set("nodes", nodeCol);
        var edgeCol = new EdgeCol();
        edgeCol.initialize(nodeCol);
        console.log(edges[0]);
        for (var i=0; i<edges.length; i++) {
            edgeCol.newEdge(edges[i].src, edges[i].dest);
        }

        this.set("edges", edgeCol);
    },
    toCytoscape: function() {
        var elements = [];
        var el;

        var nodes = this.get("nodes");
        for (var i=0; i<nodes.length; i++) {
            el = nodes.at(i);
            elements.push({
                group: el.get("group"),
                data: {
                    id: el.get("id"),
                    label: el.get("id"),
                    type: "node"
                },
                selected: el.get("selected"),
                selectable: el.get("selectable"),
                locked: el.get("locked"),
                grabbable: el.get("grabbable")
            });
        }
        var links = this.get("edges");
        for (var i=0; i<edges.length; i++) {
            el = links.at(i);
            elements.push({
                group: el.get("group"),
                data: {
                    id: el.get("id"),
                    source: el.get("src"),
                    target: el.get("dest"),
                    label: el.get("id"),
                    weight: "1"
                }
            });
        }
        return elements;
    }
});


module.exports = Layer;