function Disc(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    if(Disc.where({ xCoord: xCoord, yCoord: yCoord }) == null)
        Disc.discs.push(this);
}

Disc.discs = [];
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
