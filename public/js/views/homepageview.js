App.Views.HomepageView = Backbone.View.extend({
	
	el: '#homepage-view',
	
	initialize: function() {
		console.log('Homepage View has been created');
		startUpTemplate = Handlebars.compile($('#startup-template').html());
		this.render();
	},

	render: function() {
		this.$el.append(startUpTemplate);
	}
});