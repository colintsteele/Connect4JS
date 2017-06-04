var chai = require('chai');
var mocha = require('mocha');
var expect = require('chai').expect;
var Disc = require('../public/javascripts/disc')

new Disc(1, 2);
new Disc(1, 3);
new Disc(3, 2);
new Disc(2, 2);

describe('Creating', function() {
    it('should not create a disc where one already exists', function(){
        var oldLength = Disc.discs.length;
        new Disc(1, 2);
        var newLength = Disc.discs.length;

        expect(oldLength).to.equal(newLength);
    });
});

describe('Querying', function() {
    it('should return a disc if there is one at the given coordinates', function() {
        var x = 1;
        var y = 2;
        var coordinates = {xCoord: x, yCoord: y}
        var disc = Disc.where(coordinates)[0];

        expect(disc.xCoord).to.equal(x);
        expect(disc.yCoord).to.equal(y);
    });

    it('should return multiple discs if there is more than one on that column', function(){
       var x = 1;
       var coordinates = {xCoord: x};
       var discs = Disc.where(coordinates);

       expect(discs.length).to.be.greaterThan(1);
    });

    it('should return multiple discs if there is more than one on that row', function(){
        var y = 2;
        var coordinates = {yCoord: y};
        var discs = Disc.where(coordinates);

        expect(discs.length).to.be.greaterThan(1);
    });

    it('should return null if there are no matches', function(){
        var x = 5;
        var y = 5;
        var coordinates = {xCoord: x, yCoord: y}
        var discs = Disc.where(coordinates);

        expect(discs).to.be.null;
    })
});
