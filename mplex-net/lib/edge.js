/*
 * mplex-net
 * https://github.com/DennisSchwartz/mplex-net
 *
 * Copyright (c) 2015 Dennis Schwartz
 * Licensed under the MIT license.
 */

/**
 @class Edge
 This is the model for an edge
 */


var Backbone = require("backbone");

var Edge = Backbone.Model.extend({
    defaults: {
        group: "edges"
    },
    initialize: function(data) {
        this.set("id", data.id);
        this.set("src", data.src);
        this.set("dest", data.dest);
    }

});

module.exports = Edge;