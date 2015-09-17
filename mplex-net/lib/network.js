var Backbone = require("backbone");

var Network = Backbone.Model.extend({

    initialize: function(data) {
        this.nodes = data.nodes;
        this.nodelayers = data.nodelayers;
        this.edges = data.edges;
        this.aspects = data.aspects;

    }
});