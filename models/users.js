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

		user_info_id: {
			type: DataTypes.INTEGER
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
				users.belongsTo(models.userinfos, {
					foreignKey: 'user_info_id'
				});
			}
		}
	});
	return users;
};










