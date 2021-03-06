
/* Dispatch */

var dispatch = _(Backbone.Events).clone();

dispatch.initRanges = function () {
    dispatch.ranges = new RangeList();
    _(ranges).each(function (opts) {
        dispatch.ranges.push(new Range(opts));
    });
};

function didChangeWidth() {
    updateWidth();
    _(dispatch.ranges).each(function (range) {
        var isInCurrent = range.isInCurrent();
        var hasBeenInRange = range.hasBeenInRange;
        if (isInCurrent && !hasBeenInRange) range.fireEntr();
        if (!isInCurrent && hasBeenInRange) range.fireExit();
    });
};

function forceEmit() {
    _(dispatch.ranges).each(function (range) {
        range.hasBeenInRange = false;
    });
    didChangeWidth();
};

function windowLoad() {
    updateWidth();
    _(dispatch.ranges).each(function (range) {
        if (range.isInCurrent()) range.fireEntr();
    });
};

function updateWidth() {
    lastWidth = dispatch.currWidth;
    currWidth = $(window).width();
};

function isSizeInRange(size, range) {
    var aboveMin = (size > range.min);
    var belowMax = (size < range.max);
    if (aboveMin && belowMax) return true;
    else return false;
};

function init(opts) {
    ranges = opts.ranges;
    logging = opts.logging || false;

    dispatch.initRanges();
};

dispatch.on('all', function (evtName) {
    if (logging) console.log("responsiveDispatch triggered : " + evtName);
});

(function (responsiveDispatch) {

    responsiveDispatch.forceEmit = forceEmit;
    responsiveDispatch.init = init;

    $(window).resize(didChangeWidth);
    window.responsiveDispatch = responsiveDispatch;

    $(window).load(windowLoad);

})(dispatch);
