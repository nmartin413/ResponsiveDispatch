/* Range */

var Range = function (opts) {
    this.name = opts.name;
    this.min = opts.min;
    this.max = opts.max;
    this.hasBeenInRange = false;
};

Range.prototype.isInCurrent = function () {
    return isSizeInRange(currWidth, this);
};

Range.prototype.fireEntr = function () {
    this.hasBeenInRange = true;
    dispatch.trigger(entrPrefix + this.name);
};

Range.prototype.fireExit = function () {
    this.hasBeenInRange = false;
    dispatch.trigger(exitPrefix + this.name);
};