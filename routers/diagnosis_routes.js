var express        = require('express'),
		models         = require('../models'),
		Diagnosis      = models.diagnoses;

var diagnosisRouter = express.Router();

diagnosisRouter.get('/', function(req, res) {
	Diagnosis
		.findAll()
		.then(function(diagnoses) {
			res.send(diagnoses);
		});
});

diagnosisRouter.get('/:id', function(req, res) {
	Diagnosis
		.findOne(req.params.id)
		.then(function(Diagnosis) {
			res.send(Diagnosis);
		});
});

diagnosisRouter.post('/users/:id/diagnoses', function(req, res) {
	Diagnosis
		.create(req.body)
		.then(function(Diagnosis) {
			res.send(Diagnosis);
		}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message;
			 });
			 res
			 		.status(422)
			 		.send(errors);		
		});
});

diagnosisRouter.delete('/:id', function(req, res) {
	Diagnosis
		.findOne(req.params.id)
		.then(function(Diagnosis) {
			Diagnosis
				.destroy()
				.then(function() {
					res.send(Diagnosis);
				});
		});
});

module.exports = diagnosisRouter