var models = require('./models');
var seeds  = require('seed.js'); //doesn't work?
 
var Immunization   = models.immunizations;
var Allergy        = models.allergies;
var Diagnosis      = models.diagnoses;
var Medication     = models.medications;
var Surgery        = models.surgeries;
var User           = models.users;

//$.getScript('seed.js', function() { //not working?
var secondSeed = function() {	
	User
		.create(function(user) {
			user.seeds.users[1].allergies([1][2]).diagnoses([1][2]).surgeries([2]).medications([3]).immunizations([3][4]),
			user.seeds.users[2].allergies([4][6]).diagnoses([5][6]).surgeries([4]).medications([2][6]).immunizations([6][8]),
			user.seeds.users[3].allergies([3][5][7]).diagnoses([1][4]).surgeries([1]).medications([4]).immunizations([1][2]),
			user.seeds.users[4].allergies([2][4]).diagnoses([3]).surgeries([3]).medications([1][5]).immunizations([10][11])
		});
};

secondSeed();
});


//how to get seed.js data to create relationships for data in seedtwo.js