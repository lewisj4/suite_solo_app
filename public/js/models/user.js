App.Models.User = Backbone.Model.extend({
	url: '/users/user-info',
	
	initialize: function() {
		console.log('New User Model Created');
	},
});	