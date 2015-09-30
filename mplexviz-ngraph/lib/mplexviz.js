var Backbone = require("backbone");
var mplexnet = require("mplexnet");
var Network = mplexnet.Network;
var createGraph = require('ngraph.graph');
var nthree = require('ngraph.three');
var _ = require('lodash');
var niceColors = [
    0x2ca02c, 0xf7b6d2,
    0xd62728, 0xff9896,
    0x1f77b4, 0xaec7e8,
    0xff7f0e, 0xffbb78,
    0x9467bd, 0xc5b0d5,
    0x8c564b, 0xc49c94,
    0xe377c2, 0x98df8a,
    0x7f7f7f, 0xc7c7c7,
    0xbcbd22, 0xdbdb8d,
    0x17becf, 0x9edae5
];

var Mplexviz = Backbone.View.extend({
    initialize: function(opts){
        /*
            On initialisation: Create network from input. Then create a ngraph representation for that.
         */
        this.network = new Network(opts.nodes, opts.edges, opts.aspects);
        var g = createGraph();
        var colors = [];

        /*
            For each node in network create node in ngraph
         */
        var layers_ = [];
        var layers = [];
        this.network.get('nodes').each(function (node) {
            layers_.push(node.get('layer').attributes);
            g.addNode(node.get('id'), node.toJSON());
        });


        /*
         Create color for each layer
         */

        // Get unique layers
        for (var l in layers_) {
            var found = _(layers).find(function (x) { return _.eq(layers_[l], x) });
            if (!found) {
                console.log("found!");
                layers.push(layers_[l]);
            }
        }

        for (i=0;i<layers.length;i++) {
            colors.push(niceColors[i]);
        }

        this.layers = layers;
        this.colors = colors;

        /*
            For each Edge in network, get the nodes and create a link in ngraph
         */

        var findNode = function (id) {
            temp = this.network.get('nodes');
            res = temp.find(function(node) { return node.get('id') === id; });
            return res;
        };

        this.network.get('edges').each(function(edge) {
            //console.log(edge);
            //console.log(network.nodelayers.get(edge.get('source')).toJSON());
            //var node = Mplexnet.Node()
            g.addLink(edge.get('source'), edge.get('target'), edge.toJSON());
        });

        g.forEachLink(function (link) {
            console.log(link);
        });


        this.graph = g;
    },
    render: function () {

        console.log(this.network);
        network = this.network;
        layers = this.layers;
        var findNode = function (id) {
            temp = network.get('nodes');
            res = temp.find(function(node) { return node.get('id') === id; });
            //console.log(id);
            return res;
        };

        var graphics = nthree(this.graph, { container: document.body} );
        var THREE = graphics.THREE;
        graphics.createLinkUI(function(link) {
            var linkGeometry = new THREE.Geometry();
            // We don't care about position here, renderLink() callback will update it
            linkGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
            linkGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
            //console.log(link.data.source);
            var layer1 = findNode(link.data.source).get('layer');
            var layer2 = findNode(link.data.target).get('layer');
            var color_ = 0xffffff;
            if (_(layer1.attributes).isEqual(layer2.attributes)) {
                color_ = 0x2f77d2;
            }
            var linkMaterial = new THREE.LineBasicMaterial({ color: color_ });
            // Again, no magic, regular three.js object is returned:
            return new THREE.Line(linkGeometry, linkMaterial);
        });
        graphics.createNodeUI(function (node) {
            var size = 7;
            var nodeGeometry = new THREE.SphereGeometry(size);
            var color_;
            //console.log(_.eq(layers[0],node.data.layer.attributes));
            for (var i=0;i<layers.length;i++) {
                if (_.eq(layers[i],node.data.layer.attributes)) {
                    color_ = niceColors[i];
                    console.log('In clause: ' + color_);
                }
            }
            console.log('Outside: ' + color_);
            var nodeMaterial = new THREE.MeshBasicMaterial({ color: color_ });
            return new THREE.Mesh(nodeGeometry, nodeMaterial);
        });
        graphics.run();
    }
});

module.exports = Mplexviz;