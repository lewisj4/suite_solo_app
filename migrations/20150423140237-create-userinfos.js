"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("userinfos", {
    	id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
     	 },
    	first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      birthdate: {
        type: DataTypes.DATE
      },
      sex: {
        type: DataTypes.STRING
      },
      ethnicity: {
        type: DataTypes.STRING
      },
      street: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zipcode: {
        type: DataTypes.INTEGER
      },
      phone: {
        type: DataTypes.STRING
      },
      primary_contact_first_name: {
        type: DataTypes.STRING
      },
      primary_contact_last_name: {
        type: DataTypes.STRING
      },
      primary_contact_phone: {
        type: DataTypes.STRING
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
    migration.dropTable("userinfos").done(done);
  }
};
