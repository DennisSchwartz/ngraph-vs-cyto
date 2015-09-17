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

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var net = require('../');

describe('mplex-net module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(net.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      net.hello('biojs').should.equal("hello biojs");
    });
  });
});
