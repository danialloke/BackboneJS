// Backbone router to route to relevant page
define(['backbone', 'underscore', 'jquery', '../../app/tasksPage/MainTasksView'], function(Backbone, _, $, MainTasksView) {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',               // Define routes
            'about': 'about'
        },
        
        home: function() {
            console.log('Home route');
            // Implement home route logic
			var mainTasksView = new MainTasksView();
        },
        
        about: function() {
            console.log('About route');
            // Implement about route logic
        }
    });

    return Router;
});