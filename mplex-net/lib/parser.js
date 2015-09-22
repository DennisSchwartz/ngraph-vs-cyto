var Backbone = require("backbone");
var csv = require("csv");
var Baby = require("babyparse");

var Parser = Backbone.Model.extend({

    //readCSV: function(path, numAspects, callback) {
    //    csv.parse(path, function(err, data) {
    //        for (var i= 0; data.length; i++) {
    //            var line = data[i];
    //
    //        }
    //    });
    //}

    readAspects: function (aspects) {
        return Baby.parse(aspects).data[0];
    },

    readNodes: function (nodes) {
        nodes = nodes.replace(/ /g, ''); //remove whitespace
        return Baby.parse(nodes, {header: true}).data;
    },

    readEdges: function (edges) {
        return Baby.parse(edges).data;
    }

});

module.exports = Parser;