

requirejs.config({
	nodeRequire: require,

	paths: {
		jquery: "src/lib/jquery",
		underscore: "src/lib/underscore",
		events: "src/lib/backbone.events",
		responsiveDispatch: "src/responsiveDispatch"
	}

});

requirejs(['responsiveDispatch'], function (responsiveDispatch) {
	window.responsiveDispatch = responsiveDispatch;
});