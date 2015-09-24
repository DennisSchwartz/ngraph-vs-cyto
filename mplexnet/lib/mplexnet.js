var Backbone = require("backbone");
var Node = require("./node");
var NodeCol = require("./nodecol");
var Layer = require("./layer");
var Edge = require("./edge");
var EdgeCol = require("./edgecol");
var Nodelayer = require("./nodelayer");
var Nodelayers = require("./nodelayers");
var _ = require('lodash');


var Mplexnet = Backbone.Model.extend({

    // initialize with String from Parser Module
    initialize: function(nodes, edges, aspects) {


        // aspects
        this.aspects = [];
        var dims = aspects.length;
        for (var i=0;i<dims;i++) {
            this.aspects.push(aspects[i]);
        }

        // Do nodes first. (One per name)
        var names = [];
        for (i=0;i<nodes.length;i++) {
            names.push(_(nodes[i]).get("name"));
        }
        names = _.uniq(names);

        this.nodes = new NodeCol();
        for (i=0;i<names.length;i++) {
            this.nodes.add(new Node(names[i]));
        }


        // Then do nodelayers (one per ID)
        this.nodelayers = new Nodelayers();
        var layer = {};
        var node = {};
        for (i=0;i<nodes.length;i++) {
            layer = new Layer(this.aspects, nodes[i]);
            var curname = _(nodes[i]).get("name");
            var curid = _(nodes[i]).get("id");
            node = this.nodes.find(function(x) {
                return x.get("name") === curname;
            });
            var temp = new Nodelayer(curid, node, layer);
            this.nodelayers.add(temp);
        }


        this.edges = new EdgeCol(this.nodes);

        for (i=0;i<edges.length;i++) {
            var cur = edges[i];
            var source = this.nodelayers.find(function(x) {
                return _(x).get("id") === _(cur).get("source");
            });
            var target = this.nodelayers.find(function(x) {
                return _(x).get("id") === _(cur).get("target");
            });
            //console.log(this.nodelayers);
        }

        this.set("nodes", this.nodes);
        this.set("aspects", this.aspects);
        this.set("edges", this.edges);

    }
});

module.exports = Mplexnet;