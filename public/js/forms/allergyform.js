
App.Forms.AllergyForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Allergy Form has been created');
		allergyFormTemplate = Handlebars.compile($('#allergy-form-template').html());
	},

	schema: {
		name: { type: 'Checkboxes', options: ['Milk', 'Peanut', 'Fish', 'Soy', 'Wheat', 'Egg',
																			'Penicillin', 'Pollen', 'Cat', 'Dog', 'Mold',
																			'Perfume', 'Latex', 'Dust Mites']}
	}
});