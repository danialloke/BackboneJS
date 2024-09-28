// Require the config 
// Require routers to get router.js to create an instance of router to start the entire app
require(['config'], function() {
	require(['backbone', 'routers/router'], function(Backbone, Router) {
	    // Initialize the router
	    var router = new Router();
	    // Start Backbone history to enable routing
	    Backbone.history.start();
	});
});
