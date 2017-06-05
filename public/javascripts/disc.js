function Disc(coordinates) {
    this.xCoord = coordinates.xCoord;
    this.yCoord = coordinates.yCoord;

    var noDiscThere = (Disc.where({ xCoord: coordinates.xCoord, yCoord: coordinates.yCoord }) == null);
    if(noDiscThere && (this.xCoord && this.yCoord))
        Disc.discs.push(this);
}

Disc.clearDiscs = function() {
    Disc.discs = [];
}
Disc.clearDiscs();


Disc.where = function(coordinates) {
    var results = [];

    Disc.discs.forEach(function(disc) {
        var sameX = (disc.xCoord == coordinates.xCoord);
        var sameY = (disc.yCoord == coordinates.yCoord);
        
        if(sameX && sameY) {
            results.push(disc);
            return results;
        } else if (sameX && !coordinates.yCoord) {
            results.push(disc);
        } else if (sameY && !coordinates.xCoord) {
            results.push(disc);
        }
    });

    if(results.length == 0)
        return null;
    else
        return results;
}

module.exports = Disc;
