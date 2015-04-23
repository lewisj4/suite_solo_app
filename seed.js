var models = require('./models');
 
var Immunization   = models.immunizations;
var Allergy        = models.allergies;
var Diagnosis      = models.diagnoses;
var Medication     = models.medications;
var Surgery        = models.surgeries;
var User           = models.users;

var users = [
	{
		username: 'franktheTank12',
		password_digest: 'poodles',
		first_name: 'Frank',
		last_name: 'Wilson',
		birthdate: 9-15-75,
		sex: 'male',
		ethnicity: 'Latino',
		street: '322 5th Ave',
		city: 'New York',
		state: 'New York',
		zipcode: 10016,
		phone: '212-351-7665',
		primary_contact_first_name: 'Jane',
		primary_contact_last_name: 'Wilson',
		primary_contact_phone: '212-351-7666',
	},
  {
		username: 'BettytheKid3',
		password_digest: 'kittens',
		first_name: 'Betty',
		last_name: 'Brown',
		birthdate: 3-30-88,
		sex: 'female',
		ethnicity: 'Caucasian',
		street: '218 Parkridge Ave',
		city: 'Chapel Hill',
		state: 'North Carolina',
		zipcode: 27517,
		phone: '919-244-7654',
		primary_contact_first_name: 'Tom',
		primary_contact_last_name: 'Brown',
		primary_contact_phone: '919-244-8922',
	},
	{
		username: 'JSmooth1',
		password_digest: 'ballerlife',
		first_name: 'Joey',
		last_name: 'Smith',
		birthdate: 5-2-82,
		sex: 'male',
		ethnicity: 'Asian',
		street: '415 Spruce St',
		city: 'Chicago',
		state: 'Illinois',
		zipcode: 60604,
		phone: '630-643-7442',
		primary_contact_first_name: 'Nancy',
		primary_contact_last_name: 'Nolan',
		primary_contact_phone: '630-782-9863',
	},
	{
		username: 'RJ13',
		password_digest: 'heresjohnny',
		first_name: 'Rob',
		last_name: 'Johnson',
		birthdate: 8-24-91,
		sex: 'male',
		ethnicity: 'Caucasian',
		street: '516 Taylor Ave',
		city: 'San Francisco',
		state: 'California',
		zipcode: 94105,
		phone: '415-212-8551',
		primary_contact_first_name: 'Sue',
		primary_contact_last_name: 'Johnson',
		primary_contact_phone: '415-212-8550',
	},
]	
		
var	surgeries = [
	{
		name: 'Anthroscopic Surgery',
	},
	{
		name: 'Shoulder Surgery',
	},
	{
		name: 'Open-Heart Surgery',
	},
	{
		name: 'Spinal Surgery',
	},
]

var medications = [
	{
		medication: 'Uroxatra',
	},
	{
		medication: 'Myalept',
	},
	{
		medication: 'Purinethol',
	},
	{
		medication: 'Oravig',
	},
	{
		medication: 'Aclovate',
  },
  {
		medication: 'Hiprex',
  },
]
var diagnoses = [
	{
		name: 'Diabities',
	},
	{
		name: 'Vertigo',
	},
	{
		name: 'Bronchitis',
	},
	{
		name: 'Ringworm',
	},
	{
		name: 'Epilepsy',
	},
	{
		name: 'Asthma',
	},
]
var allergies = [
	{
		name: 'Pollen',
	},
	{
		name: 'Cats',
	},
	{
		name: 'Bees',
	},
	{
		name: 'Weeds',
	},
	{
		name: 'Dogs',
	},
	{
		name: 'Milk',
	},
	{
		name: 'Eggs',
	},
	{
		name: 'Nuts',
	},
]
var immunizations = [
	{
		vaccine_name:'Hep A',
	},
	{
		vaccine_name: 'Hep B',
	},
	{
		vaccine_name: 'RV1;RV5',
	},
	{
		vaccine_name: 'DTaP',
	},
	{
		vaccine_name: 'Tdap',
	},
	{
		vaccine_name: 'Hib',
	},
	{
		vaccine_name: 'PVC13',
	},
	{
		vaccine_name: 'PPSV23',
	},
	{
		vaccine_name: 'IPV',
	},
	{
		vaccine_name: 'Influenza',
	},
	{
		vaccine_name: 'MMR',
	},
	{
		vaccine_name: 'VAR',
	},
	{
		vaccine_name: 'Meningococcal',
	},
]

var seedDatabase = function() {
	User.destroy({ truncate: true}).then(function() {
		User.bulkCreate(users).then(function() {
			Surgery.destroy({ truncate: true}).then(function() {
				Surgery.bulkCreate(surgeries).then(function() {
					Medication.destroy({ truncate: true}).then(function() {
						Medication.bulkCreate(medications).then(function() {
							Diagnosis.destroy({ truncate: true}).then(function() {
								Diagnosis.bulkCreate(diagnoses).then(function() {
									Allergy.destroy({ truncate: true}).then(function() {
										Allergy.bulkCreate(allergies).then(function() {
											Immunization.destroy({truncate: true}).then(function() {
												Immunization.bulkCreate(immunizations);
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
};

seedDatabase();



