var express         = require('express'),
		models          = require('../models'),
		Medication      = models.medications;

var medicationRouter = express.Router();

medicationRouter.get('/', function(req, res) {
	Medication
		.findAll()
		.then(function(medications) {
			res.send(medications);
		});
});

medicationRouter.get('/:id', function(req, res) {
	Medication
		.findOne(req.params.id)
		.then(function(medication) {
			res.send(medication);
		});
});

medicationRouter.post('/', function(req, res) {
	Medication
		.create(req.body)
		.then(function(medication) {
			res.send(medication);
		}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message;
			 });
			 res
			 		.status(422)
			 		.send(errors);		
		});
});

medicationRouter.delete('/:id', function(req, res) {
	Medication
		.findOne(req.params.id)
		.then(function(medication) {
			medication
				.destroy()
				.then(function() {
					res.send(medication);
				});
		});
});

module.exports = medicationRouter