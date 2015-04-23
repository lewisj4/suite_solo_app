App.Views.MainView = Backbone.View.extend({

	el: '#main-view',
	
	initialize: function() {
		console.log('Main View has been created');
		this.template = Handlebars.compile($('#login-template').html());
		App.homepage = new App.Views.HomepageView();
		App.userForm = new App.Forms.UserForm();
	},

	events: {
		'click #starter-signup-button' : 'showSignUp'
	},

	showSignUp: function() {
		App.userForm.commit();
	}
	
});