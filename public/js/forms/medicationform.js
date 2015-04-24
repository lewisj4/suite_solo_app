App.Forms.MedicationForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Medication Form has been created');
		MedicationFormTemplate = Handlebars.compile($('#medication-form-template').html());
	},

	schema: {
		medication: { type: 'List', itemType: 'Text'}

		ndc_code_id: 'Text',
	}
});