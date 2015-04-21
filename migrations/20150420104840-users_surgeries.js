"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users_surgeries", {
    	user_id: {
    		type: DataTypes.INTEGER
    	},
    	surgery_id: {
    		type: DataTypes.INTEGER
    	}
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("users_surgeries").done(done);
  }
};
