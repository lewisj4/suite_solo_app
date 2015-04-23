var models = require('./models');
 
var Immunization   = models.immunizations;
var Allergy        = models.allergies;
var Diagnosis      = models.diagnoses;
var Medication     = models.medications;
var Surgery        = models.surgeries;
var User           = models.users;


for( i = 1; i < 5; i++) {
	User
		.findOne(i).then(function(user) {
				var random = Math.floor((Math.random() * 8) + 1);
				Allergy.findOne(random)
					.then(function(allergy) {
						user.addAllergy(allergy)
					});
		});
	User
		.findOne(i).then(function(user) {
			var random = Math.floor((Math.random() * 6) + 1);
			Diagnosis.findOne(random)
				.then(function(diagnosis) {
					user.addDiagnosis(diagnosis)
				});
		});
	User
		.findOne(i).then(function(user) {
			var random = Math.floor((Math.random() * 4) + 1);
			Surgery.findOne(random)
				.then(function(surgery) {
					user.addSurgery(surgery)
				});
		});
	User
		.findOne(i).then(function(user) {
			var random = Math.floor((Math.random() * 13) + 1);
			Immunization.findOne(random)
				.then(function(immunization) {
					user.addImmunization(immunization)
				});
		});
	User
		.findOne(i).then(function(user) {
			var random = Math.floor((Math.random() * 6) + 1);
			Medication.findOne(random)
				.then(function(medication) {
					user.addMedication(medication)
				});
		});
}
