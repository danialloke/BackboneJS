// RequireJS configurations
require.config({
    paths: {
        'jquery': 'libs/jquery-3.7.1.min',             // Path to jQuery
        'underscore': 'libs/underscore-umd',     // Path to Underscore
        'backbone': 'libs/backbone',         // Path to Backbone
        'bootstrap': '../bootstrap-5.3.3-dist/js/bootstrap.min',  // Path to Bootstrap JS
		'text': 'libs/text'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'], // Backbone depends on Underscore and jQuery
            exports: 'Backbone'              // Expose Backbone as a global variable
        },
        'underscore': {
            exports: '_'                    // Expose Underscore as a global variable
        },
        'bootstrap': {
            deps: ['jquery']                 // Bootstrap depends on jQuery
        }
    }
});
