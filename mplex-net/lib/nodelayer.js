var Backbone = require("backbone");

var Nodelayer = Backbone.Model.extend({

    initialize: function(data) {
        this.set("node", data.node);
        var aspects = data.aspects;
        console.log("Aspects coming in: " + data.aspects);
        var layer = {};
        for (var i=0; i<aspects.length; i++) {
            layer[i] =  aspects[i]; // For each aspect, add the layer (-> value of the aspect)
        }
        this.set("layer", layer);

    }

});

module.exports = Nodelayer;

/*
var nodelayer = {
                    "node": "testNode",
                    "layer": {
                        "1": "1",
                        "2": "genes"
                     }
                };
 */