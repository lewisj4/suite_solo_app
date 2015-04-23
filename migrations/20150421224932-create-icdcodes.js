"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("icdcodes", {
    	id: {
    		allowNull: false,
    		autoIncrement: true,
    		primaryKey: true,
    		type: DataTypes.INTEGER
    	},
    	icd_code: {
    		type: DataTypes.STRING
    	},
    	diagnosis_id: {
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
   migrate.dropTable("icdcodes").done(done);
  }
};
