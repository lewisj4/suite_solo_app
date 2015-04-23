var express           = require('express'),
		models            = require('../models'),
		UserInfo          = models.userinfos;

var userinfoRouter = express.Router();

userinfoRouter.get('/:id', function(req, res) {
	UserInfo
		.findOne(req.params.id)
		.then(function(userinfo) {
			res.send(userinfo);
		});
});

userinfoRouter.post('/', function(req, res) {
	UserInfo
		.create(req.body)
		.then(function(userinfos) {
			res.send(userinfos);
		}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message;
			 });
			 res
			 		.status(422)
			 		.send(errors);		
		});
});

userinfoRouter.put('/:id', function(req, res) {
	UserInfo
		.findOne(req.params.id)
		.then(function(userinfo) {
			userinfo
				.update(req.body)
				.then(function(updatedUserinfo) {
					res.send(updatedUserinfo);
				}, function(err) {
					var errors = err.errors.map(function(error) {
						return error.path + ' - ' + error.message;
					});
					res
						.status(422)
						.send(errors);
				});
		});
});

userinfoRouter.delete('/:id', function(req, res) {
	UserInfo
		.findOne(req.params.id)
		.then(function(userinfo) {
			userinfo
				.destroy()
					.then(function() {
						res.send(userinfo);
					});
		});
});

module.exports = userinfoRouter


// userinfoRouter.post('/:id/userinfo', function(req, res) {
// 	User
// 		.create({
// 			first_name: req.body.first_name,
// 			last_name: req.body.last_name,
// 			birthdate: req.body.birthdate,
// 			sex: req.body.sex,
// 			ethnicity: req.body.ethnicity,
// 			street: req.body.street,
// 			city: req.body.city,
// 			state: req.body.state,
// 			zipcode: req.body.zipcode,
// 			phone: req.body.phone
// 		})
// 		.then(function(userInfo) {
// 			res.send(userInfo)
// 		}, function(err) {
// 				var errors= err.errors.map(function(error) {
// 					return error.path + ' - ' + error.message
// 				});
// 				res
// 					.status(422)
// 					.send(errors);
// 		});
// });

