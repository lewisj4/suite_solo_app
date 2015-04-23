App.Views.HomepageView = Backbone.View.extend({
	
	el: '#homepage-view',
	
	initialize: function() {
		console.log('Homepage View has been created');
		startUpTemplate = Handlebars.compile($('#startup-template').html());
		loginTemplate = Handlebars.compile($('#login-template').html());
		loggedinTemplate = Handlebars.compile($('#loggedin-template').html());
		this.render();
	},

  events: {
  	'click #starter-login-button' : 'executeSignIn',
  	'click #login-button' : 'executeLogin',
  	'click #logout-button' : 'executeLogout'
  },

	render: function() {
		this.$el.append(startUpTemplate);
	},

	executeSignIn: function() {
		this.$el.append(loginTemplate);
	},



	executeLogin: function() {
		var username = $('#login-username').val();
		var password = $('#login-password').val();

		$.post('/users/sessions', {
			username: username,
			password: password
		}).done(function() {		
		$('#login-form').hide();
		this.$el.append(loggedinTemplate);
		});
	},

	executeLogout: function() {
		$('#loggedin-form').hide();
	}
});