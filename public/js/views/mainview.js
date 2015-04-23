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
		'click #create-button' : 'showSignUp'
	},

	showSignUp: function() {
		var username = $('#create-username').val();
		var password = $('#create-password').val();
		var view = this;

		$.post('/users', {
			username: username,
			password: password
		}).done(function() {
			App.userForm.render();
			view.$el.append(App.userForm.el);
			$('#submit-button').show();
			$('#create-form').hide();
		});
	},

	showCreateUser: function() {
		$('#starter-login-button').hide();
		$('#starter-signup-button').hide();
		this.$el.append(createUserTemplate);
	},

});	