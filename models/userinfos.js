"use strict";

module.exports = function(sequelize, DataTypes) {
	var userinfos = sequelize.define("userinfos", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: 'First Name cannot be blank'}
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: 'Last Name cannot be blank'}
			}
		},
		birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: {msg: 'Must enter a valid Date'},
				notEmpty: {msg: 'Birthdate cannot be blank'}
			}
		},
		sex: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: 'Must enter a gender'}
			}
		},
		ethnicity: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: 'Must enter ethnicity'}
			}
		},
		street: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.STRING,
		},
		zipcode: {
			type: DataTypes.INTEGER,
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
		user_id: {
			type: DataTypes.INTEGER
		}

	}, {
		underscored: true,

		classMethods: {
			associate: function(models) {
				userinfos.belongsTo(models.users, {
					foreignKey: 'user_id'
				});
			}
		}
	});
	return userinfos;
};	