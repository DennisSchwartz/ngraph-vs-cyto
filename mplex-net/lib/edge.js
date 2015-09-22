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
    initialize: function(src, target, id) {
        this.set("src", src);
        this.set("target", target);
        if (typeof id != 'undefined') {
            this.set("id", id);
        } else {
            id = src.get('node').get('id') + '-' + target.get('node').get('id');
            this.set("id", id);
        }
    }

});

module.exports = Edge;