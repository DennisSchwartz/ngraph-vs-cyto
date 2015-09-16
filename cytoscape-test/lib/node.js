var Backbone = require("backbone");

var Node = Backbone.Model.extend({
    defaults: {
        group: "nodes",
        selectable: true,
        locked: false,
        grabbable: true
    },
    initialize: function(data) {
        this.set("id", data.id);
        //this.set("name", data.name);
    }

});

module.exports = Node;