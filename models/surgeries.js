"use strict";

module.exports = function(sequelize, DataTypes) {
	var surgeries = sequelize.define("surgeries", {
		name: {
			type: DataTypes.STRING
		}
	}, {
		underscored: true,

		classMethods: {
			associate: function(models) {
				surgeries.belongsToMany(models.users, { 
					through: 'users_surgeries',
					foreignKey: 'surgery_id' 
				});
			} 
		}
	});
	return surgeries;
};