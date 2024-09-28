define(['jquery', 'underscore', 'backbone', 'text!../templates/taskTemplate.html'], function($, _, Backbone, taskTemplate) {
	
	
	var TaskModelView = Backbone.View.extend({
		
		template: _.template(taskTemplate),
		
		tagName: 'tr',
		
		render: function() {
			
			var self = this;
			
			this.$el.html(self.template({
				taskName: self.model.get('taskName'),
				taskDescription: self.model.get('taskDescription'),
			}));
			
			return this;
			
		},
		
	});
	
	return TaskModelView;
	
});