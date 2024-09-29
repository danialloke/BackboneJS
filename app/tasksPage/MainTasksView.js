define(['backbone', 'underscore', 'jquery', 'text!./mainTasksTemplate.html', './views/TasksCollectionView', './models/TaskModel', './collections/TasksCollection'], function(Backbone, _, $, mainTasksTemplate, TasksCollectionView, TaskModel, TasksCollection) {
	
	var MainTasksView = Backbone.View.extend({
		el: "#mainContentBody",
		
		template: _.template(mainTasksTemplate),
		
		collection: new TasksCollection(),
		
		initialize: function() {
			
			this.tasksCollectionView = new TasksCollectionView({
				collection: this.collection,
			});
			
			this.render();
		},
		
		render: function() {
			
			var self = this;
			
			this.$el.html(this.template());
			
			this.$el.find('thead').after(self.tasksCollectionView.render().el);
			
			return this;
		},
		
		events: {
			"click #submitTask" : "submitTask",
		},
		
		submitTask: function() {
			var taskName = $("#taskName").val();
			var taskDescription = $("#taskDescription").val();
			
			
			if (taskName && taskDescription) {
				var taskModel = new TaskModel({
					taskName: taskName,
					taskDescription: taskDescription,
				});
				
				this.collection.push(taskModel);
			}
			
			$("#taskName").val("");
			$("#taskDescription").val("");
			
		},
		
	});
	
	return MainTasksView;
})
	