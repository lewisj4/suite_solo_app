"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users_diagnoses", {
    	user_id: {
    		type: DataTypes.INTEGER
    	},
    	diagnosis_id: {
    		type: DataTypes.INTEGER
    	}
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
   	migration.dropTable("users_diagnoses").done(done);
  }
};
