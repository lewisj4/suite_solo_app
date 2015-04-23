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
	App.userForm = new App.Forms.UserForm({ model: new App.Models.User()});

	//=================== Views ================
	App.mainView = new App.Views.MainView();
});
