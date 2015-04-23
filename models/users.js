"use strict";

module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define("users", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: {msg: 'You must enter a username'}
			}
		},
		password_digest: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {msg: 'You must enter a password'}
			}
		},
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
		}
	}, {
		underscored: true,

		classMethods: {
			associate: function(models) {
				users.belongsToMany(models.allergies, { 
					through: 'users_allergies',
					foreignKey: 'user_id',
					onDelete: 'cascade',
					hooks: true 
				});
				users.belongsToMany(models.diagnoses, { 
					through: 'users_diagnoses',
					foreignKey: 'user_id',
					onDelete: 'cascade',
					hooks: true 
				});
				users.belongsToMany(models.surgeries, { 
					through: 'users_surgeries',
					foreignKey: 'user_id',
					onDelete: 'cascade',
					hooks: true 
				});
				users.belongsToMany(models.medications, {
					through: 'users_medications', 
					foreignKey: 'user_id',
					onDelete: 'cascade',
					hooks: true 
				});
				users.belongsToMany(models.immunizations, { 
					through: 'users_immunizations',
					foreignKey: 'user_id',
					onDelete: 'cascade',
					hooks: true 
				});
			}
		}
	});
	return users;
};










