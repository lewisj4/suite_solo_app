var express           = require('express'),
		models            = require('../models'),
		Surgery           = models.surgeries;

var surgeryRouter = express.Router();

surgeryRouter.get('/', function(req, res) {
	Surgery
		.findAll()
		.then(function(surgeries) {
			res.send(surgeries);
		});
});

surgeryRouter.get('/:id', function(req, res) {
	Surgery
		.findOne(req.params.id)
		.then(function(surgery) {
			res.send(surgery);
		});
});

surgeryRouter.post('/', function(req, res) {
	Surgery
		.create(req.body)
		.then(function(surgery) {
			res.send(surgery);
		}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message;
			 });
			 res
			 		.status(422)
			 		.send(errors);		
		});
});

module.exports = surgeryRouter