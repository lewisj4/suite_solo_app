App.Forms.ImmunizationForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Immunization Form has been created');
		ImmunizationFormTemplate = Handlebars.compile($('#immunization-form-template').html());
	},

	schema: {
		vaccine_name: { type: 'Checkboxes', options: ['Hep A','Hep B','RV1;RV5',
																				'DTaP','Tdap','Hib','PVC13','PPSV23','IPV','Influenza',
																				'MMR','VAR','Meningococcal']},
	}
});