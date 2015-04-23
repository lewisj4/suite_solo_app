"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("ndccodes", {
    	id: {
    		allowNull: false,
    		autoIncrement: true,
    		primaryKey: true,
    		type: DataTypes.INTEGER
    	},
    	ndc_code: {
    		type: DataTypes.STRING
    	},
    	medication_id: {
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
   migration.dropTable("ndccodes").done(done);
  }
};
