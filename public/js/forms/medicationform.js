App.Forms.MedicationForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Medication Form has been created');
		MedicationFormTemplate = Handlebars.compile($('#medication-form-template').html());
	},

	schema: {
		medication: { type: 'Checkboxes', options: ['Lipitor', 'Nexium', 'Advair', 'Singulair', 'Epogen',
																								'Adderall', 'Viagra','Nasonex', 'Prezista']},

		ndc_code_id: 'Text',
	}
});