"use strict";

module.exports = function(sequelize, DataTypes) {
	var medications = sequelize.define("medications", {
		medication: {
			type: DataTypes.TEXT,
		},

		ndc_code_id: {
			type: DataTypes.INTEGER,
		}
	}, {

		underscored: true,

		classMethods: {
			associate: function(models) {
				medications.belongsToMany(models.users, { 
					through: 'users_medications',
					foreignKey: 'medication_id' 
				});
				medications.belongsTo(models.ndccodes, {
					foreignKey: 'ndc_code_id'
				});
			}
		}
	});
	return medications;
};