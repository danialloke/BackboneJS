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
		
		events: {
			"click .deleteTask" : "deleteTask",	
		},
		
		deleteTask: function() {
			event.preventDefault();
			
			this.collection.remove(this.model);
			this.remove();
			console.log("delete button for model: " + this.model.get('taskName'));
						
		},
		
	});
	
	return TaskModelView;
	
});