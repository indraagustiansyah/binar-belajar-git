'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        mobilephone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        alamat: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
