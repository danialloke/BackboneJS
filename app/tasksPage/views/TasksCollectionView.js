define(['jquery', 'underscore', 'backbone', './TaskModelView'], function($, _, Backbone, TaskModelView) {
	
	var TasksCollectionView = Backbone.View.extend({
		
		tagName: 'tbody',
		
		initialize: function() {
			
			this.collection.on('add', this.render, this);
			
		},
		
		render: function() {
			
			var self = this;
			
			// clear the current view
			this.$el.empty();
			
			_.each(self.collection.models, function(model) {
				var taskModelView = new TaskModelView({
					model: model,
					collection: self.collection,
				});
				this.$el.append(taskModelView.render().el);
			}, this);
			
			return this;
			
		},
		
	});
	
	return TasksCollectionView;
	
});