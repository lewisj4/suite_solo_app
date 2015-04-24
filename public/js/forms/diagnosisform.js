App.Forms.DiagnosisForm = Backbone.Form.extend({
	initalize: function() {
		console.log('Diagnosis Form has been created');
		userFormTemplate = Handlebars.compile($('#diagnosis-form-template').html());
	},

	schema: {
		name: { type: 'Checkboxes', options: ['Hypertension', 'Hyperlipidemia', 'Diabetes', 'Back pain',
																			'Anxiety','Obesity','Allergic rhinitis','Reflux esophagitis',
																			'Respiratory problems','Hypothyroidism','Visual refractive errors',
																			'Osteoarthritis','Fibromyalgia','Malaise and fatigue','Pain in joint',
																			'Acute laryngopharyngitis','Acute maxillary sinusitis','Major depressive disorder',
																			'Acute bronchitis','Asthma']},

	icd_code_id: 'Number',
  
  }
});	