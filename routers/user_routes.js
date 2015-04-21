var express             = require('express'),
		models              = require('../models'),
		User                = models.users;

var userRouter = express.Router();

userRouter.get('/', function(req, res) {
	User
		.findAll()
		.then(function(users) {
			res.send(users);
		});
});

userRouter.get('/:id', function(req, res) {
	User
		.findOne(req.params.id)
		.then(function(user) {
			res.send(user);
		});
});

userRouter.post('/', function(req, res) {
	User
		.create(req.body)
		.then(function(user) {
			res.send(user);
		}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message
			 });
			 res
			 		.status(422)
			 		.send(errors);		
		});
});

userRouter.delete('/:id', function(req, res) {
	User
		.findOne(req.params.id)
		.then(function(user) {
			user
				.destroy()
				.then(function(user) {
					res.send(user);
				});
		});
});

module.exports = userRouter