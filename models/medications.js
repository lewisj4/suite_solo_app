"use strict";

module.exports = function(sequelize, DataTypes) {
	var medications = sequelize.define("medications", {
		medication: {
			type: DataTypes.STRING,
		},
		
		dosage: {
			type: DataTypes.STRING,
		},

		frequency: {
			type: DataTypes.STRING,
		},

		medication_code: {
			type: DataTypes.INTEGER,
		},

		user_id: {
			type: DataTypes.INTEGER,
		}
	}, {

		underscored: true,

		classMethods: {
			associate: function(models) {
				medications.belongsTo(models.users, { foreignKey: 'user_id' });
			}
		}
	});
	return medications;
};