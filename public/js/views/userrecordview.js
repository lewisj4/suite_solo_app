App.Views.UserRecordView = Backbone.View.extend({
	
	el: '#medical-record-view',

	//template: '#userinfo-template',

	initialize: function() {
		console.log('User Record View has been created');
		//this.model = new App.Models.User();
	},


	// events: {
	// 	//'click #allergy-button' : 'showAllergyForm',
	// 	'click #create-button' : 'showSignUp'

	// },

	// // render: function() {
	// // 	App.userInfoForm.render();
	// // 	this.$el.append(App.userInfoForm.el);
	// // 	//			$('#submit-button').show();
	// // 	//	$('#create-form').hide();
	// // },

	// // showSignUp: function() {
	// // 	console.log('hey');
	// // 		App.userInfoForm.render();
	// // 		this.$el.append(App.userInfoForm.el);
	// 		// $('#submit-button').show();
	// 		// $('#create-form').hide();
	// },

	// showAllergyForm: function() {
	// 	$.get('')
	// 	App.allergyForm.render();
	// 	this.$el.append(App.allergyForm.el);
	// 	$('#submit-allergy-button').show();	
	// }
});