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
		icd_code_id: {
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
				diagnoses.belongsTo(models.icdcodes, {
					foreignKey: 'icd_code_id'
				});
			}
		}
	});
	return diagnoses;
};