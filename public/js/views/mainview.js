App.Views.MainView = Backbone.View.extend({

	el: '#main-view',
	
	initialize: function() {
		console.log('Main View has been created');
		loginTemplate = Handlebars.compile($('#login-template').html());
		createUserTemplate = Handlebars.compile($('#create-user-template').html());
		$('#submit-button').hide();
		App.homepage = new App.Views.HomepageView();
	},

	events: {
		'click #starter-signup-button' : 'showCreateUser',
		'click #create-button' : 'showSignUp',
		'click #submit-button' : 'executeSignUp'
	},

	showSignUp: function() {
		$('#create-form').hide();
		App.userForm.render();
		this.$el.append(App.userForm.el);
		$('#submit-button').show()
	},

	showCreateUser: function() {
		$('#starter-login-button').hide();
		$('#starter-signup-button').hide();
		this.$el.append(createUserTemplate);
	}	
});