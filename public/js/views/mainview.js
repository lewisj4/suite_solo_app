App.Views.MainView = Backbone.View.extend({

	el: '#main-view',
	
	initialize: function() {
		console.log('Main View has been created');
		loginTemplate = Handlebars.compile($('#login-template').html());
		createUserTemplate = Handlebars.compile($('#create-user-template').html());
		$('#submit-button').hide();
		$('#submit-allergy-button').hide();
		$('#submit-diagnosis-button').hide();
		App.homepage = new App.Views.HomepageView();
	},

	events: {
		'click #starter-signup-button' : 'showCreateUser',
		'click #create-button' : 'showSignUp',
		'click #starter-login-button' :  'executeLogin',
		'click #submit-button' : 'generateForms',
		'click #allergy-button' : 'showUserRecord'
	},


	showSignUp: function() {
		var username = $('#create-username').val();
		var password = $('#create-password').val();
		var view = this;

		$.post('/users', {
			username: username,
			password: password
		}).done(function() {
			App.userInfoForm.render();
			view.$el.append(App.userInfoForm.el);
			$('#submit-button').show();
			$('#create-form').hide();
		});
	},

	showCreateUser: function() {
		$('#starter-login-button').hide();
		$('#starter-signup-button').hide();
		this.$el.append(createUserTemplate);
	},

	showUserRecord: function() {
		$('#homepage-view').hide();
		$('#user-record-view').show();
	},

	showAllergyForm: function() {
		App.allergyForm.render();
		this.$el.append(App.allergyForm.el);
		$('#submit-allergy-button').show();
	}

	// generateForms: function() {

	// 	App.userInfoForm.commit();
	// 	var firstname = $('#c1_first_name').val();
	// 	var lastname  = $('#c1_last_name').val();
	// 	var birthdate = $('#c1_birthdate').val();
	// 	var sex       = $('#c1_sex').val();
	// 	var ethnicity = $('#c1_ethnicity').val();
	// 	var street    = $('#c1_street').val();
	// 	var state     = $('#c1_state').val();
	// 	var zipcode   = $('#c1_zipcode').val();
	// 	var phone			= $('#c1_phone').val(); 
	// 	$.post('/userinfos', function() {
	// 		firstname: firstname,
	// 		lastname: lastname, 
 //      birthdate: birthdate,
 //      sex: sex,      
 //      ethnicity: ethnicity,
 //      street: street,   
 //      state: state,    
 //      zipcode: zipcode,  
 //      phone: phone		
	// 	}).done(function() {
	// 	});
	// },



});	