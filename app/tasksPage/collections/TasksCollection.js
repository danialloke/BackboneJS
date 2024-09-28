define(['backbone', '../models/TaskModel'], function(Backbone, TaskModel) {
	
	var TasksCollection = Backbone.Collection.extend({
		model: TaskModel,
	});
	
	return TasksCollection;
	
});