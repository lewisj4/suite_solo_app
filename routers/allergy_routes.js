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

allergyRouter.get('/:id/users', function(req, res) {
	Allergy
})

allergyRouter.get('/users/:id/allergies', function(req, res) {
	Allergy
		.findAll()
		.then(function(allergies) {
			res.send(allergies);
		});
});

allergyRouter.post('/users/:id/allergies', function(req, res) {
	var userId = req.params.id;
	var allergyParams = req.body;

	User
		.findOne(userId)
		.then(function(user) {
			Allergy
				.create(allergyParams)
				.then(function(newAllergy) {
					user.addAllergy(newAllergy)
					res.send(newAllergy);
				});
		});
});;

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
