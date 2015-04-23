App.Views.SignupView = Backbone.View.extend({

	el: '#signup-view',

	initialize: function() {
		console.log('Signup View has been created');
		userFormTemplate = Handlebars.compile($('#user-form-template').html());
		this.render();
	},

	render: function() {
		this.$el.append(userFormTemplate);
	}
});