"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users_immunizations", {
    	user_id: {
    		type: DataTypes.INTEGER
    	},
    	immunization_id: {
    		type:DataTypes.INTEGER
    	}

    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("users_immunizations").done(done);
  }
};
