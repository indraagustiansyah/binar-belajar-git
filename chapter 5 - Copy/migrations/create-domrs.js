'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('user_game_historynpmnpm', { 
       id:{ 
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        address:{
          type: Sequelize.TEXT,
          allowNull: false
        },
        owner:{
          type: Sequelize.STRING,
          allowNull: false
        },
        facilities:{
          type: Sequelize.JSONB,
          allowNull: false
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dorms');
  }
};
