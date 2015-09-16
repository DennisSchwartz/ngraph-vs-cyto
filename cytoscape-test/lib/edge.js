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

module.exports = Node;