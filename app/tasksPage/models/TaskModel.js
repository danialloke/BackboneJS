define(['backbone'], function(Backbone) {
	
	var TaskModel = Backbone.Model.extend({
		defaults: {
			taskName: "",
			taskDescription: "",
		}
	});
	
	return TaskModel;
	
});