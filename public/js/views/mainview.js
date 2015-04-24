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
		'click #create-button' : 'createUser',
		'click #starter-login-button' :  'executeLogin',
		'click #submit-button' : 'saveUserInfo',
		'click #allergy-button' : 'showAllergyForm',
		'click #diagnosis-button' : 'showDiagnosisForm',
		'click #immunization-button' : 'showImmunizationForm',
		'click #medication-button' : 'showMedicationForm',
		'click #surgery-button' : 'showSurgeryForm'
	},


	createUser: function(done) {
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

	// saveUserInfo: function() {
	// 	var firstname = input[name*='first_name'].val();
	// 	var lastname  = input[name*='last_name'].val();
	// 	var birthdate = input[name*='birthdate'].val();
	// 	var sex       = input[name*='sex'].val();
	// 	var ethnicity = input[name*='ethnicity'].val();
	// 	var street    = input[name*='street'].val();
	// 	var state     = input[name*='state'].val();
	// 	var zipcode   = input[name*='zipcode'].val();
	// 	var phone			= input[name*='phone'].val(); 
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
	// 		alert('Form Submitted')
	// 	});
	// },
	showCreateUser: function() {
		$('#starter-login-button').hide();
		$('#starter-signup-button').hide();
		this.$el.append(createUserTemplate);
	},

	// showUserRecord: function() {
	// 	$('#homepage-view').hide();

	// 	$.ajax({
	// 		url: '/userinfos/:id',
	// 		method: 'GET'
	// 	}).done(function() {
	// 		App.
	// 	})
	// },

	showAllergyForm: function() {
		App.allergyForm.render();
		this.$el.append(App.allergyForm.el);
		$('#submit-allergy-button').show();
	},

	showDiagnosisForm: function() {
		App.diagnosisForm.render();
		this.$el.append(App.diagnosisForm.el);
		$('#submit-diagnosis-button').show();
	},

	showImmunizationForm: function() {
		App.immunizationForm.render();
		this.$el.append(App.immunizationForm.el);
		$('#submit-immunization-button').show();
	},

	showMedicationForm: function() {
		App.medicationForm.render();
		this.$el.append(App.medicationForm.el);
		$('#submit-medication-button').show();
	},

	showSurgeryForm: function() {
		App.surgeryForm.render();
		this.$el.append(App.surgeryForm.el);
	}




});	