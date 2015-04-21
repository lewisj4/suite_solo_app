"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
 		migration.createTable("medications", {
 			id: {
 				allowNull: false,
 				autoIncrement: true,
 				primaryKey: true,
 				type: DataTypes.INTEGER
 			},
 			medication: {
 				type: DataTypes.STRING
 			},
 			dosage: {
 				type: DataTypes.STRING
 			},
 			frequency: {
 				type: DataTypes.STRING
 			},
      medication_code: {
        type: DataTypes.INTEGER
      },
 			user_id: {
 				type: DataTypes.INTEGER
 			},
 			created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
 		}).done(done);
  },

  down: function(migration, DataTypes, done) {
  	migration.dropTable("medications").done(done);
  }
};
