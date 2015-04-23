var express             = require('express'),
		bcrypt							= require('bcrypt'),
		models              = require('../models'),
		User                = models.users;

var userRouter = express.Router();

//============== User Auth ==============

var restrictAccess = function(req, res, next) {
	var sessionID = parseInt(req.session.currentUser);
	var reqID     = parseInt(req.params.id);

	sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'Access Denied'})
};

var authenticate = function(req, res, next) {
	req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'User does not exist'})
};

userRouter.post('/sessions', function(req, res) {
	var loginUsername = req.body.username;
	var loginPassword = req.body.password;

	User
		.findOne({
			where: { username: loginUsername }
		})
		.then(function(user) {
			if (user) {
				var passwordDigest = user.password_digest;

				bcrypt.compare(loginPassword, passwordDigest, function(err, result) {
					if (result) {
						req.session.currentUser = user.id;
						res.send('Correct Credentials');
					} else {
						res.status(400);
						res.send({
							err: 400,
							msg: 'Sorry, bad password'
						});
					}
				});
			} else {
				res.status(400);
				res.send({
					err: 400,
					msg: 'Sorry, the username does not exist'
				});
			}
		});
});

userRouter.delete('/sessions', function(req, res) {
	delete req.session.currentUser;
	res.send('Successfully logged out.');
});

userRouter.get('/current_user', function(req, res) {
	var userID = req.session.currentUser;

	if (userID) {
		User
			.findOne(userID)
			.then(function(user) {
				res.send(user)
			});
	} else {
		res.send(null);
	}
});	

// =============== User Routes ==================	
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
	bcrypt.hash(req.body.password, 10, function(err, hash) {	
		User
			.create({
				username: req.body.username,
				password_digest: hash
			});
	});
});	

userRouter.post('/user-info', function(req, res) {
	User
		.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			birthdate: req.body.birthdate,
			sex: req.body.sex,
			ethnicity: req.body.ethnicity,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zipcode: req.body.zipcode,
			phone: req.body.phone
		})
		.then(function(userInfo) {
			res.send(userInfo)
		}, function(err) {
				var errors= err.errors.map(function(error) {
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