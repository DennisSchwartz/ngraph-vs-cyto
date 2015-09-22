var Backbone = require("backbone");

var Network = Backbone.Model.extend({

    // initialize with String from Parser Module
    initialize: function(nodes, nodelayers, edges, aspects) {
        // aspects
        this.aspects = [];
        var dims = aspects.length;
        for (var i=0;i<dims;i++) {
            this.aspects.push(aspects[i]);
        }

        // nodelayers
        this.nodelayers = [];

    }
});