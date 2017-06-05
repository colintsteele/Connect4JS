var chai = require('chai');
var mocha = require('mocha');
var expect = require('chai').expect;
var nodemock = require('nodemock');
var Board = require('../public/javascripts/board');

describe('Creating the board', function() {
    it('should be sized according to the settings file', function() {
        var settings = nodemock.mock('height').returns(7);
        settings.mock('width').returns(7);

        var board = new Board(settings);
        expect(board.width).to.equal(7);
        expect(board.height).to.equal(7);
    });

    it('')

});
