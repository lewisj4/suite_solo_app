"use strict";

module.exports = function(sequelize, DataTypes) {
	var immunizations = sequelize.define("immunizations", {
		vaccine_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Vaccinations cannot be blank' }
			}
		}
	}, {

		underscored: true,

		classMethods: {
			associate: function(models) {
				immunizations.belongsToMany(models.users, { 
					through: 'users-immunizations',
					foreignKey: 'immunization_id' 
				});
			}
		}
	});
	return immunizations;
}