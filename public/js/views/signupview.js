App.Views.SignupView = Backbone.View.extend({
	el: "signup-view",

	initialize: function() {
		console.log('Signup View has been created');
	},

// 	events: {
// 		'click #submit-button' : 'executeUserInfo'
// 	},

// // Show users current medical record
// 	executeUserInfo: function(done) {
// 		var firstName = $('#c1_first_name').val();
// 		var lastName  = $('#c1_last_name').val();
// 		var birthdate = $('#c1_birthdate').val();
// 		var sex       = $('#c1_sex').val();
// 		var ethnicity = $('#c1_ethnicity').val();
// 		var street 		= $('#c1_street').val();
// 		var city      = $('#c1_city').val();
// 		var state     = $('#c1_state').val();
// 		var zipcode   = $('#c1_zipcode').val();
// 		var phone     = $('#c1_phone').val();
// 		var view      = this;

// 		$.post('/userinfos', {
// 			firstname: firstName,
// 			lastname: lastName,
// 			birthdate: birthdate,
// 			sex: sex,
// 			ethnicity: ethnicity,
// 			street: street,
// 			state: state,
// 			zipcode: zipcode,
// 			phone: phone
// 		}).done(done)
// 	},
	
});

