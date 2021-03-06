"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
  	migration.createTable("diagnoses", {
  		id: {
  			allowNull: false,
  			autoIncrement: true,
  			primaryKey: true,
  			type: DataTypes.INTEGER
  		},
  		name: {
  			type: DataTypes.TEXT
  		},
      icd_code_id: {
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
    migration.dropTable("diagnoses").done(done);
  }
};
