"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users_surgeries", {
    	user_id: {
    		type: DataTypes.INTEGER
    	},
    	surgery_id: {
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
    migration.dropTable("users_surgeries").done(done);
  }
};
