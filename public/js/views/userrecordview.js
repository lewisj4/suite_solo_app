App.Views.UserRecordView = Backbone.View.extend({
	
	el: '#medical-record-view',

	initialize: function() {
		console.log('User Record View has been created');
	},

	events: {
		'click #allergy-button' : 'showAllergyForm'
	},

	// showAllergyForm: function() {
	// 	App.allergyForm.render();
	// 	this.$el.append(App.allergyForm.el);
	// 	$('#submit-allergy-button').show();	
	// }
});