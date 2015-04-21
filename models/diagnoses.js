"use strict";

module.exports = function(sequelize, DataTypes) {
	var diagnoses = sequelize.define("diagnoses", {
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Diagnosis cannot be blank' }
			}
		},
		diagnosis_code: {
			type: DataTypes.INTEGER,
		}	
	}, {

		underscored: true,

		classMethods: {
			associate: function(models) {
				diagnoses.belongsToMany(models.users, { 
					through: 'users_diagnoses',
					foreignKey: 'diagnosis_id' 
				});
			}
		}
	});
	return diagnoses;
};