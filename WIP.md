
var usernames                 = ['franktheTank12', 'BettytheKid3', 'JSmooth1', 'RJ13'];

var passwords                 = ['poodles', 'kittens', 'ballerlife' 'heresjohnny'];

var userFirstNames            = ['Frank', 'Betty', 'Joey', 'Rob'];

var userLastNames             = ['Wilson', 'Brown', 'Smith' 'Johnson'];

var userBirthdate             = [9/15/75, 3/30/88, 5/2/82, 8/24/91];

var userSex                   = ['male', 'female', 'male', 'male'];

var userEthnicity             = ['Latino', 'Caucasian', 'Asian', 'Caucasian'];

var userStreet                = ['322 5th Ave', '218 Parkridge Ave', '415 Spruce St', '516 Taylor Ave'];

var userCity                  = ['New York', 'Chapel Hill', 'Chicago', 'San Francisco'];

var userState                 = ['New York', 'North Carolina', 'Illinois', 'California'];

var userZipcode               = [10016, 27517, 60604, 94105];

var userPhone                 = ['212-351-7665', '919-244-7654', '630-643-7442', '415-212-8551'];

var userPrimaryFirstNames     = ['Jane', 'Tom', 'Nancy', 'Sue'];

var userPrimaryLastNames      = ['Wilson', 'Brown', 'Nolan', 'Johnson'];

var userPrimaryPhone          = ['212-351-7666', '919-244-8922', '630-782-9863', '415-212-8550'];

var surgeryNames              = ['Thyroid Surgery', 'Anthroscopic Surgery', 'Shoulder Surgery', 'Spinal Surgery', 'Open-Heart Surgery'];

var medicationNames           = ['Aclovate', 'Uroxatra', 'Purinethol', 'Hiprex', 'Oravig', 'Myalept'];

var medicationDosage          = [ '2 mg', '10 mg', '1 pill', '20 mg', '5 mg', '15 mg', '2 pills'];

var medicationFrequency       = ['Twice-A-Day', 'Once-A-Day', 'Once-A-Week', 'Every 6 hours'];

var medicalHistoriesDiagnosis = ['Asthma', 'Diabities', 'Ringworm', 'Vertigo', 'Bronchitis', 'Epilepsy' ];

var allergyName               = ['Pollen', 'Weeds', 'Cats', 'Dogs', 'Bees', 'Milk', 'Eggs', 'Nuts'];

var immunizationsVaccineName  = ['Hep A', 'Hep B', 'RV1; RV5', 'DTaP', 'Tdap', 'Hib', 'PCV13', 'PPSV23', 'IPV', 'Influenza', 'MMR', 'VAR', 'Meningococcal'];

var immunizationsVaccineDate  = [12/15/75, 3/13/76, 7/15/76, 12/10/76, 6/10/88, 9/13/88, 12/15/88, 3/10/89, 8/5/82, 11/8/82, 2/10/83, 5/10/83, 11/15/92, 2/13/93, 5/15/93, 8/10/93];

// ======================= Create Users ======================
var buildUsers = function() {
	
	var frank = User.create({
		name: usernames[0],
		password: passwords[0],
		firstName: userFirstNames[0],
		lastName: userLastNames[0],
		birthdate: userBirthdate[0],
		sex: userSex[0],
		ethnicity: userEthnicity[0],
		street: userStreet[0],
		city: userCity[0],
		state: userState[0],
		zipcode: userZipcode[0],
		phone: userPhone[0],
		primaryFirstName: userPrimaryFirstNames[0],
		primaryLastName: userPrimaryLastNames[0],
		primaryPhone: userPrimaryPhone[0],
		surgeries: surgeryNames[1][2],
		medicationsNames: [3][1],
		medicationsDosages: [1][3],
		medicationsfrequency: [1][3],
		medicalHistoriesDisagnosis: [1][3],
		allergies: [0][2][4],
		immunizationName: [0][1][2][3][4][5][6][7][8][9][10][11][12],
		immunizationDate: [0][1][2][3]
	});
	
	var betty = User.create({
		name: usernames[1],
		password: passwords[1],
		firstName: userFirstNames[1],
		lastName: userLastNames[1],
		birthdate: userBirthdate[1],
		sex: userSex[1],
		ethnicity: userEthnicity[1],
		street: userStreet[1],
		city: userCity[1],
		state: userState[1],
		zipcode: userZipcode[1],
		phone: userPhone[1],
		primaryFirstName: userPrimaryFirstNames[1],
		primaryLastName: userPrimaryLastNames[1],
		primaryPhone: userPrimaryPhone[1],
		surgeries: surgeryNames[4],
		medicationsNames: [2][5],
		medicationsDosages: [4][5],
		medicationsfrequency: [0][1],
		medicalHistoriesDisagnosis: [0][3][5],
		allergies: [1][2][5],
		immunizationName: [0][1][2][3][4][5][6][7][8][9][10][11][12],
		immunizationDate: [4][5][6][7]
	});

	var joey = User.create({
		name: usernames[2],
		password: passwords[2],
		firstName: userFirstNames[2],
		lastName: userLastNames[2],
		birthdate: userBirthdate[2],
		sex: userSex[2],
		ethnicity: userEthnicity[2],
		street: userStreet[2],
		city: userCity[2],
		state: userState[2],
		zipcode: userZipcode[2],
		phone: userPhone[2],
		primaryFirstName: userPrimaryFirstNames[2],
		primaryLastName: userPrimaryLastNames[2],
		primaryPhone: userPrimaryPhone[2],
		surgeries: surgeryNames[1][2],
		medicationsNames: [3][1],
		medicationsDosages: [1][3],
		medicationsfrequency: [1][3],
		medicalHistoriesDisagnosis: [1][3],
		allergies: [0][2][4],
		immunizationName: [0][1][2][3][4][5][6][7][8][9][10][11][12],
		immunizationDate: [0][1][2][3][4]
	});	

	var rob = User.create({
		name: usernames[3],
		password: passwords[3],
		firstName: userFirstNames[3],
		lastName: userLastNames[3],
		birthdate: userBirthdate[3],
		sex: userSex[3],
		ethnicity: userEthnicity[3],
		street: userStreet[3],
		city: userCity[3],
		state: userState[3],
		zipcode: userZipcode[3],
		phone: userPhone[3],
		primaryFirstName: userPrimaryFirstNames[2],
		primaryLastName: userPrimaryLastNames[2],
		primaryPhone: userPrimaryPhone[2],
		surgeries: surgeryNames[1][2],
		medicationsNames: [3][1],
		medicationsDosages: [1][3],
		medicationsfrequency: [1][3],
		medicalHistoriesDisagnosis: [1][3],
		allergies: [0][2][4],
		immunizationName: [0][1][2][3][4][5][6][7][8][9][10][11][12],
		immunizationDate: [0][1][2][3][4]
	});	
};

var buildUsers();

// ====================== Create Surgeries ====================

var thyroid = surgeryNames.create({
	name: surgeryNames[0]
})






id: {
 				allowNull: false,
 				autoIncrement: true,
 				primaryKey: true,
 				type: DataTypes.INTEGER
 			},
 			username: {
 				type: DataTypes.STRING
 			},
 			password: {
 				type: DataTypes.STRING
 			},
 			first_name: {
 				type: DataTypes.STRING
 			},
 			last_name: {
 				type: DataTypes.STRING
 			},
 			birthdate: {
 				type: DataTypes.DATE
 			},
 			sex: {
 				type: DataTypes.STRING
 			},
 			ethnicity: {
 				type: DataTypes.STRING
 			},
  		street: {
 				type: DataTypes.STRING
 			},
 			city: {
 				type: DataTypes.STRING
 			},
 			state: {
 				type: DataTypes.STRING
 			},
 			zipcode: {
 				type: DataTypes.INTERGER
 			},
 			phone: {
 				type: DataTypes.STRING
 			},
 			primary_contact_first_name: {
 				type: DataTypes.STRING
 			},
 			primary_contact_last_name: {
 				type: DataTypes.STRING
 			},
 			primary_contact_phone: {
 				type: DataTypes.STRING
 			},






	{
		username: 'BettytheKid3',
		password_digest: 'kittens',
		first_name: 'Betty',
		last_name: 'Brown',
		birthdate: 3/30/88,
		sex: 'female',
		ethinicity: 'Caucasian',
		street: '218 Parkridge Ave',
		city: 'Chapel Hill',
		state: 'North Carolina',
		zipcode: 27517,
		phone: '919-244-7654',
		primary_contact_first_name: 'Tom',
		primary_contact_last_name: 'Brown',
		primary_contact_phone: '919-244-8922',
		surgeries: [
			{
				name: 'Open-Heart Surgery',
				// user_id: 1,
			}
		],
		medications: [
			{
				medication: 'Purinethol',
				dosage: '5 mg',
				frequency: 'Twice-A-Day'
				// user_id: 1,
			},
			{
				medication: 'Oravig',
				dosage: '15 mg',
				frequency: 'Once-A-Day'
				// user_id: 1,
			}
		],
		diagnoses: [
			{
				name: 'Asthma',
				// user_id: 1,
			},
			{
				name: 'Vertigo',
				// user_id: 1,
			},
			{
				name: 'Epilepsy',
				// user_id: 1, 
			}
		],
		allergies: [
			{
				name: 'Weeds',
				// user_id: 1,
			},
			{
				name: 'Dogs',
				// user_id: 1,
			},
			{
				name: 'Milk',
				// user_id: 1,
			}
		],	
		immunizations: [
			{
				vaccine_name:'Hep A',
				vaccine_date: 6/10/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'Hep B',
				vaccine_date: 3/10/89,
				// user_id: 1,
			},
			{
				vaccine_name: 'RV1;RV5',
				vaccine_date: 6/10/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'DTaP',
				vaccine_date: 12/15/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'Tdap',
				vaccine_date: 6/10/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'Hib',
				vaccine_date: 12/15/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'PVC13',
				vaccine_date: 6/10/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'PPSV23',
				vaccine_date: 3/10/89,
				// user_id: 1,
			},
			{
				vaccine_name: 'IPV',
				vaccine_date: 9/13/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'Influenza',
				vaccine_date: 3/10/89,
				// user_id: 1,
			},
			{
				vaccine_name: 'MMR',
				vaccine_date: 3/10/89,
				// user_id: 1,
			},
			{
				vaccine_name: 'VAR',
				vaccine_date: 9/13/88,
				// user_id: 1,
			},
			{
				vaccine_name: 'Meningococcal',
				vaccine_date: 9/13/88,
				// user_id: 1,
			},
		]
	},

	{
		username: 'JSmooth1',
		password_digest: 'ballerlife',
		first_name: 'Joey',
		last_name: 'Smith',
		birthdate: 5/2/82,
		sex: 'male',
		ethinicity: 'Asian',
		street: '415 Spruce St',
		city: 'Chicago',
		state: 'Illinois',
		zipcode: 60604,
		phone: '630-643-7442',
		primary_contact_first_name: 'Nancy',
		primary_contact_last_name: 'Nolan',
		primary_contact_phone: '630-782-9863',
		surgeries: [
			{
				name: 'Spinal Surgery',
				// user_id: 2,
			}
		],
		medications: [
			{
				medication: 'Aclovate',
				dosage: '15 mg',
				frequency: 'Twice-A-Day'
				// user_id: 2,
			},
			{
				medication: 'Hiprex',
				dosage: '2 mg',
				frequency: 'Once-A-Day'
				// user_id: 2,
			}
		],
		diagnoses: [
			{
				name: 'Bronchitis',
				// user_id: 2,
			},
			{
				name: 'Ringworm',
				// user_id: 2,
			},
			{
				name: 'Epilepsy',
				// user_id: 2, 
			}
		],
		allergies: [
			{
				name: 'Eggs',
				// user_id: 2,
			},
			{
				name: 'Nuts',
				// user_id: 2,
			},
			{
				name: 'Milk',
				// user_id: 2,
			}
		],	
		immunizations: [
			{
				vaccine_name:'Hep A',
				vaccine_date: 8/5/82,
				// user_id: 2,
			},
			{
				vaccine_name: 'Hep B',
				vaccine_date: 3/10/89,
				// user_id: 2,
			},
			{
				vaccine_name: 'RV1;RV5',
				vaccine_date: 8/5/82,
				// user_id: 2,
			},
			{
				vaccine_name: 'DTaP',
				vaccine_date: 2/10/83,
				// user_id: 2,
			},
			{
				vaccine_name: 'Tdap',
				vaccine_date: 8/5/82,
				// user_id: 2,
			},
			{
				vaccine_name: 'Hib',
				vaccine_date: 2/10/83,
				// user_id: 2,
			},
			{
				vaccine_name: 'PVC13',
				vaccine_date: 8/5/82,
				// user_id: 2,
			},
			{
				vaccine_name: 'PPSV23',
				vaccine_date: 5/10/83,
				// user_id: 2,
			},
			{
				vaccine_name: 'IPV',
				vaccine_date: 11/8/82,
				// user_id: 2,
			},
			{
				vaccine_name: 'Influenza',
				vaccine_date: 5/10/83,
				// user_id: 2,
			},
			{
				vaccine_name: 'MMR',
				vaccine_date: 5/10/83,
				// user_id: 2,
			},
			{
				vaccine_name: 'VAR',
				vaccine_date: 11/8/82,
				// user_id: 2,
			},
			{
				vaccine_name: 'Meningococcal',
				vaccine_date: 11/8/82,
				// user_id: 2,
			},
		]
	},

	{
		username: 'RJ13',
		password_digest: 'heresjohnny',
		first_name: 'Rob',
		last_name: 'Johnson',
		birthdate: 8/24/91,
		sex: 'male',
		ethinicity: 'Caucasian',
		street: '516 Taylor Ave',
		city: 'San Francisco',
		state: 'California',
		zipcode: 94105,
		phone: '415-212-8551',
		primary_contact_first_name: 'Sue',
		primary_contact_last_name: 'Johnson',
		primary_contact_phone: '415-212-8550',
		surgeries: [
			{
				name: 'Anthroscopic Surgery',
				// user_id: 3,
			}
		],
		medications: [
			{
				medication: 'Uroxatra',
				dosage: '10 mg',
				frequency: 'Twice-A-Day'
				// user_id: 3,
			},
			{
				medication: 'Myalept',
				dosage: '15 mg',
				frequency: 'Once-A-Day'
				// user_id: 3,
			}
		],
		diagnoses: [
			{
				name: 'Vertigo',
				// user_id: 3,
			},
			{
				name: 'Ringworm',
				// user_id: 3,
			},
			{
				name: 'Asthma', 
				// user_id: 3,
			}
		],
		allergies: [
			{
				name: 'Cats',
				// user_id: 3,
			},
			{
				name: 'Dogs',
				// user_id: 3,
			},
			{
				name: 'Pollen',
				// user_id: 3,
			}
		],	
		immunizations: [
			{
				vaccine_name:'Hep A',
				vaccine_date: 11/15/92,
				// user_id: 3,
			},
			{
				vaccine_name: 'Hep B',
				vaccine_date: 5/15/93,
				// user_id: 3,
			},
			{
				vaccine_name: 'RV1;RV5',
				vaccine_date: 11/15/92,
				// user_id: 3,
			},
			{
				vaccine_name: 'DTaP',
				vaccine_date: 5/15/93,
				// user_id: 2,
			},
			{
				vaccine_name: 'Tdap',
				vaccine_date: 11/15/92,
				// user_id: 3,
			},
			{
				vaccine_name: 'Hib',
				vaccine_date: 5/15/93,
				// user_id: 3,
			},
			{
				vaccine_name: 'PVC13',
				vaccine_date: 11/15/92,
				// user_id: 3,
			},
			{
				vaccine_name: 'PPSV23',
				vaccine_date: 8/10/93,
				// user_id: 2,
			},
			{
				vaccine_name: 'IPV',
				vaccine_date: 2/13/93,
				// user_id: 3,
			},
			{
				vaccine_name: 'Influenza',
				vaccine_date: 8/10/93,
				// user_id: 3,
			},
			{
				vaccine_name: 'MMR',
				vaccine_date: 8/10/93,
				// user_id: 2,
			},
			{
				vaccine_name: 'VAR',
				vaccine_date: 2/13/93,
				// user_id: 3,
			},
			{
				vaccine_name: 'Meningococcal',
				vaccine_date: 2/13/93,
				// user_id: 3,
			},
		]
	},
]

// var seedDatabase = function() {
// 	users.forEach( function (userData) {
// 		User
// 			.create({
// 				username: userData.username,
// 				password_digest: userData.password_digest,
// 				first_name: userData.first_name,
// 				last_name: userData.last_name,
// 				birthdate: userData.birthdate,
// 				sex: userData.sex,
// 				ethnicity: userData.ethnicity,
// 				street: userData.street,
// 				city: userData.city,
// 				state: userData.state,
// 				zipcode: userData.zipcode,
// 				phone: userData.phone,
// 				primary_contact_first_name: userData.primary_contact_first_name,
// 				primary_contact_last_name: userData.primary_contact_last_name,
// 				primary_contact_phone: userData.primary_contact_phone
// 			})
// 			.then(function(user) {
// 				userData.surgeries.forEach( function(surgeryData) {
// 					Surgery
// 						.create({
// 							name: surgeryData.name,
// 							user_id: user.id,
// 			})
// 			.then(function(user) {
// 				userData.medications.forEach( function(medicationData) {
// 					Medication
// 						.create({
// 							medication: medicationData.medication,
// 							dosage: medicationData.dosage,
// 							frequency: medicationData.frequency,
// 							user_id: user.id,		
// 			})
// 			.then(function(user) {
// 				userData.diagnoses.forEach( function(diagnosisData) {
// 					Diagnosis
// 						.create({
// 							name: diagnosisData.name,
// 							user_id: user.id,
// 			})
// 			.then(function(user) {
// 				userData.allergies.forEach(function(allergyData) {
// 					Allergy
// 						.create({
// 							name: allergyData.name,
// 							user_id: user.id,
// 			})
// 			.then(function(user) {
// 				userData.immunizations.forEach(function(immunizationData) {
// 					Immunization
// 						.create({
// 							vaccine_name: immunizationData.vaccine_name,
// 							vaccine_date: immunizationData.vaccine_date,
// 							user_id: user.id,
// 						});
// 				});
// 			});
// 				});
// 			});	
// 				});
// 			});
// 				});
// 			});	
// 				});
// 			});		
// 	});
// }
