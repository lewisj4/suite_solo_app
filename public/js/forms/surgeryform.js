App.Forms.SurgeryForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Surgery Form has been created');
		SurgeryFormTemplate = Handlebars.compile($('#surgery-form-template').html());
	},

	schema: {
		name: { type: 'Checkboxes', options: ['Rhinoplasty', 'Liposuction', 'Tummy Tuck', 'Face-lift',
																				 'ACL Resconstructive Surgery', 'Knee Replacement Surgery',
																				 'Coronary Bypass Surgery', 'Neurosurgery']}
	}
});