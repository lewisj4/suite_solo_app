App.Forms.SurgeryForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Surgery Form has been created');
		SurgeryFormTemplate = Handlebars.compile($('#surgery-form-template').html());
	},

	schema: {
		name: { type: 'List', itemType: 'Text'}
	}
});