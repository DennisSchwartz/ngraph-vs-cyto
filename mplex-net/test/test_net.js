/*
 * mplex-net
 * https://github.com/DennisSchwartz/mplex-net
 *
 * Copyright (c) 2015 Dennis Schwartz
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

var _ = require('lodash');

// register alternative styles
// @see http://chaijs.com/api/bdd/
var expect = require('chai').expect;
var should = chai.should();

// requires your main app (specified in index.js)
var net = require('../');

var Node = require('../lib/node');
var Edge = require('../lib/edge');
var NodeLayer = require('../lib/nodelayer');

// mock data for tests:

var aspects = {
    "Time": [
        "now",
        "then"
    ]
};

var nodes = [
    {
        "id": "1",
        "aspects": {
            "1": "now"
        }
    },
    {
        "id": "2",
        "aspects": {
            "1": "now"
        }
    },
    {
        "id": "3",
        "aspects": {
            "1": "now"
        }
    },
    {
        "id": "4",
        "aspects": {
            "1": "now"
        }
    },
    {
        "id": "1",
        "aspects": {
            "1": "then"
        }
    },
    {
        "id": "2",
        "aspects": {
            "1": "then"
        }
    },
    {
        "id": "3",
        "aspects": {
            "1": "then"
        }
    },
    {
        "id": "4",
        "aspects": {
            "1": "then"
        }
    }
];

var edges = [
        {
            "src": {
                "aspect1": "now",
                "id": "1"
            },
            "dest": {
                "aspect1": "now",
                "id": "4"
            }
        },
        {
            "src": {
                "aspect1": "now",
                "id": "2"
            },
            "dest": {
                "aspect1": "now",
                "id": "3"
            }
        },
        {
            "src": {
                "aspect1": "now",
                "id": "2"
            },
            "dest": {
                "aspect1": "now",
                "id": "4"
            }
        },
        {
            "src": {
                "aspect1": "now",
                "id": "1"
            },
            "dest": {
                "aspect1": "then",
                "id": "1"
            }
        },
        {
            "src": {
                "aspect1": "now",
                "id": "2"
            },
            "dest": {
                "aspect1": "then",
                "id": "2"
            }
        },
        {
            "src": {
                "aspect1": "now",
                "id": "3"
            },
            "dest": {
                "aspect1": "then",
                "id": "3"
            }
        },
        {
            "src": {
                "aspect1": "now",
                "id": "4"
            },
            "dest": {
                "aspect1": "then",
                "id": "4"
            }
        },
        {
            "src": {
                "aspect1": "then",
                "id": "1"
            },
            "dest": {
                "aspect1": "then",
                "id": "2"
            }
        },
        {
            "src": {
                "aspect1": "then",
                "id": "1"
            },
            "dest": {
                "aspect1": "then",
                "id": "3"
            }
        },
        {
            "src": {
                "aspect1": "then",
                "id": "2"
            },
            "dest": {
                "aspect1": "then",
                "id": "3"
            }
        }
    ];


/*
    Node Model
  */

describe('Node Model', function() {
    describe('Node', function() {
        beforeEach(function() {
            this.id = 1;
            this.node = new Node(this.id);
        });

        it('should be created', function() {
            should.exist(this.node);
        });

        it('should contain an id', function() {
            should.exist(this.node.get('id'));
        });

        it('should have an id as has been set', function() {
           expect(this.node.id).to.equal(this.id);
        });

        it('should be an instance of the Node model', function() {
            expect(this.node).to.be.an.instanceOf(Node);
        })
    });
});

describe('Nodelayer module', function (){
    describe('Nodelayer', function() {
        beforeEach(function() {
            this.nodelayer = new NodeLayer(new Node(nodes[0].id), nodes[0].aspects);
        });

        it('should not be undefined', function() {
            should.exist(this.nodelayer);
        });

        it('should contain a node', function() {
            var node = this.nodelayer.get("node");
            should.exist(node);
            expect(node).to.be.an.instanceOf(Node);
        });

        it('should contain a layer object', function() {
            expect(this.nodelayer.get("layer")).not.to.be.undefined;
        });

        it('should contain the right layer object', function() {
            var layer = {"1": "now"};
            expect(this.nodelayer.get("layer")).to.eql(layer);
        });
    });
});


describe('Edge Module:', function() {
    describe('Edge', function() {
        beforeEach(function() {
            this.node1 = new Node(nodes[0].id);
            this.nodelayer1 = new NodeLayer(this.node1, nodes[0].aspects);
            this.node2 = new Node(nodes[1].id);
            this.nodelayer2 = new NodeLayer(this.node2, nodes[1].aspects);
            this.edge = new Edge(this.nodelayer1, this.nodelayer2);
        });

        it('should contain a src node of type NodeLayer', function() {
            should.exist(this.edge.get('src'));
            expect(this.edge.get('src')).to.be.instanceOf(NodeLayer);
        });

        it('should contain a target node of type NodeLayer', function() {
            should.exist(this.edge.get('target'));
            expect(this.edge.get('target')).to.be.instanceOf(NodeLayer);
        });

        it('should have a defined id', function() {
            expect(this.edge.get('id')).to.be.defined;
        });

        it('should assign an id automatically based on the node ids', function() {
            (this.edge.get('id')).should.eql('1-2');
        });
    })
});