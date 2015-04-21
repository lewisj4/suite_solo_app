var express        = require('express'),
		models         = require('../models'),
		Immunization   = models.immunizations;

var immunizationRouter = express.Router();

immunizationRouter.get('/', function(req, res) {
	Immunization
		.findAll()
		.then(function(immunizations) {
			res.send(immunizations)
		});
});

immunizationRouter.get('/:id', function(req, res) {
	Immunization
		.findOne(req.params.id)
		.then(function(immunization) {
			res.send(immunization);
		});
});

immunizationRouter.post('/', function(req, res) {
	Immunization
		.create(req.body)
		.then(function(immunization) {
			res.send(immunization);
		}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message;
			 });
			 res
			 		.status(422)
			 		.send(errors);	
		});
});

module.exports = immunizationRouter