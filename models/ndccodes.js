"use strict";

module.exports = function(sequelize, DataTypes) {
	var ndccodes = sequelize.define("ndccodes", {
		ndc_code: {
			type: DataTypes.STRING,
		},

		medication_id: {
			type: DataTypes.INTEGER,
		}
	}, {
		
		underscored: true,

		classMethods: {
			associate: function(models) {
				ndccodes.belongsTo(models.medications, { 
					foreignKey: 'medication_id' 
				});
			}
		}
	});
	return ndccodes;
};