'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('game_point', { 
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        game_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        game_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        game_point: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      
      });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('game_point');
  }
};
