var chai = require('chai');
var mocha = require('mocha');
var expect = require('chai').expect;
var Disc = require('../public/javascripts/disc')


describe('Discs', function(){

    afterEach(function(){
        Disc.clearDiscs();
    });

    describe('Creating', function() {
        it('should add a disc to disc collection when adding a new disc', function() {

        });

        it('should create a disc from an x, y coordinates object', function() {
            var oldLength = Disc.discs.length;
            var x = 1;
            var y = 2;
            var coordinates = {xCoord: x, yCoord: y}

            var disc = new Disc(coordinates);
            var newLength = Disc.discs.length;

            expect(newLength).to.be.greaterThan(oldLength);
        });

        it('should not create a disc where one already exists', function() {
            new Disc(1, 2);
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
            new Disc(coordinates);
            var disc = Disc.where(coordinates)[0];

            expect(disc.xCoord).to.equal(x);
            expect(disc.yCoord).to.equal(y);
        });

        it('should return multiple discs if there is more than one on that column', function(){
            var x = 1;
            new Disc({xCoord: x, yCoord: 1});
            new Disc({xCoord: x, yCoord: 2});

            var discs = Disc.where({xCoord: x});

            expect(discs.length).to.be.greaterThan(1);
        });

        it('should return multiple discs if there is more than one on that row', function(){
            var y = 2;
            new Disc({xCoord: 1, yCoord: y});
            new Disc({xCoord: 2, yCoord: y});
            var discs = Disc.where({yCoord: y});

            expect(discs.length).to.be.greaterThan(1);
        });

        it('should return an array including discs with matching x coordinate if there is one in the given column', function(){
            var x = 1;
            new Disc({xCoord: x, yCoord: 1});
            new Disc({xCoord: x, yCoord: 2});
            var coordinates = { xCoord: x };
            var discs = Disc.where(coordinates);

            discs.forEach(function(disc){
                expect(disc.xCoord).to.be.equal(x);
            });
        });

        it('should return an array including discs with matching y coordinate if there is one in the given column', function(){
            var y = 1;
            new Disc({xCoord: 1, yCoord: y});
            new Disc({xCoord: 2, yCoord: y});
            var coordinates = { yCoord: y };
            var discs = Disc.where(coordinates);

            discs.forEach(function(disc){
                expect(disc.yCoord).to.be.equal(y);
            });
        });

        it('should return null if there are no matches', function(){
            var x = 1;
            var y = 1;
            var coordinates = {xCoord: x, yCoord: y}
            var discs = Disc.where(coordinates);
            console.dir(Disc.discs);

            expect(discs).to.be.null;
        })
    });
});
