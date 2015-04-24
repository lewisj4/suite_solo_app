var App = {
	Models: {},
	Collections: {},
	Views: {},
	Forms: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, Bro.');

	//============== Models ======================

	//============== Collections ===================
	App.allergies = new App.Collections.Allergies();
	App.diagnoses = new App.Collections.Diagnoses();
	App.immunizations = new App.Collections.Immunizations();
	App.medications = new App.Collections.Medications();
	App.surgeries = new App.Collections.Surgeries();

	//================= Forms ==================
	App.userInfoForm = new App.Forms.UserInfoForm({ model: new App.Models.UserInfo()});
	App.allergyForm = new App.Forms.AllergyForm({ model: new App.Models.Allergy()});
	App.diagnosisForm = new App.Forms.DiagnosisForm({ model: new App.Models.Diagnosis()});
	App.immunizationForm = new App.Forms.ImmunizationForm({ model: new App.Models.Immunization()});
	App.medicationForm = new App.Forms.MedicationForm({ model: new App.Models.Medication()});
	App.surgeryForm = new App.Forms.SurgeryForm({model: new App.Models.Surgery()});
	//=================== Views ================
	App.mainView = new App.Views.MainView();
});
