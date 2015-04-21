"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users_allergies", {
    	user_id: {
    		type: DataTypes.INTEGER
    	},
    	allergy_id: {
    		type: DataTypes.INTEGER
    	}
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("users_allergies").done(done);
  }
};
