"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("surgeries", {
      id: {
    	 allowNull: false,
    	 autoIncrement: true,
    	 primaryKey: true,
    	 type: DataTypes.INTEGER
      },  	
      name: {
    	 type: DataTypes.STRING
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
    migration.dropTable("surgeries").done(done);
  }
};
