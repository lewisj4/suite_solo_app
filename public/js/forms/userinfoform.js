App.Forms.UserInfoForm = Backbone.Form.extend({
	initalize: function() {
		console.log('User Info Form has been created');
		userFormTemplate = Handlebars.compile($('#userinfo-form-template').html());
	},

	schema: {
		first_name: { validators: ['required'] },

		last_name: { validators: ['required'] },

		birthdate: 'Text',

		sex: { type: 'Select', options: ['Male', 'Female'] },

		ethnicity: { type: 'Select', options: ['Asian', 'African-American', 'Caucasian', 'Hispanic'] },

		street: 'Text',

		city: 'Text',

		state: { type: 'Select', options: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
																			 'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
																			 'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
																			 'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
																			 'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'] },
		zipcode: 'Text',

		phone: 'Text',
	}
});
// Where does this go?? IN APP.JS!!
// var form = new UserForm({
//     model: new User()
// }).render();

// $('body').append(form.el);
