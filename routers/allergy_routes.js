var express     = require('express'),
		models      = require('../models'),
		Allergy     = models.allergies;

var allergyRouter = express.Router();

allergyRouter.get('/', function(req, res) {
	Allergy
		.findAll()
		.then(function(allergies) {
			res.send(allergies);
		});
});

allergyRouter.get('/:id', function(req, res) {
	Allergy
		.findOne(req.params.id) 
		.then(function(allergy) {
			res.send(allergy);
		});
});

allergyRouter.get('/users/:id/allergies', function(req, res) {
	Allergy
		.findAll()
		.then(function(allergy) {
			res.send(allergy);
		});
});

allergyRouter.post('/users/:id/allergies', function(req, res) {
	Allergy
		.create(req.body)
		.then(function(allergy) {
				res.send(allergy);
		}, function(err) {
						var errors = err.errors.map(function(error) {
							return error.path + ' - ' + error.message;
			});
			res
				.status(422)
				.send(errors);
		});
});

allergyRouter.delete('/:id', function(req, res) {
	Allergy
		.findOne(req.params.id)
		.then(function(allergy) {
			allergy
				.destroy()
				.then(function() {
					res.send(allergy);
				});
		});
});

module.exports = allergyRouter
