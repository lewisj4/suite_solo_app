App.Views.MainView = Backbone.View.extend({

	el: '#main-view',
	
	initialize: function() {
		console.log('Main View has been created');

		App.homepage = new App.Views.HomepageView();
		//debugger;
		App.userForm = new App.Forms.UserForm();
		//debugger;
	},

	events: {
		'click #starter-signup-button' : 'showSignUp'
	},

	showSignUp: function() {
		App.userForm.show();
	},

	executeLogin: function() {

	}
	
});