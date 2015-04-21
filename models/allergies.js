"use strict";

module.exports = function(sequelize, DataTypes) {
	var allergies = sequelize.define("allergies", {
		name: {
			type: DataTypes.STRING,
		}
	}, {
		
		underscored: true,

		classMethods: {
			associate: function(models) {
				allergies.belongsToMany(models.users, { 
					through: 'users_allergies', 
					foreignKey: 'allergy_id' 
				});
			}
		}
	});
	return allergies;
};