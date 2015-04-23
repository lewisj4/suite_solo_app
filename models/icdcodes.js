"use strict";

module.exports = function(sequelize, DataTypes) {
	var icdcodes = sequelize.define("icdcodes", {
		icd_code: {
			type: DataTypes.STRING,
		},

		diagnosis_id: {
			type: DataTypes.INTEGER,
		}
	}, {
		
		underscored: true,

		classMethods: {
			associate: function(models) {
				icdcodes.belongsTo(models.diagnoses, { 
					foreignKey: 'diagnosis_id' 
				});
			}
		}
	});
	return icdcodes;
};