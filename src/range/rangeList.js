/* RangeList */

var RangeList = function () { };

RangeList.prototype = [];

RangeList.prototype.inCurrentRange = function () {
    return _(this).filter(function (range) {
        return range.isInCurrent();
    });
};