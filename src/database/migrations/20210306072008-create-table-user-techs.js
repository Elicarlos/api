'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:*/
     await queryInterface.createTable('user_techs', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: 'true',
         autoincrement: 'true',
         allowNull: 'false',
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: 'False',
          references: { model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',

        },
        tech_id:{
          type: Sequelize.INTEGER,
          allowNull: 'false',
          references: { model: 'techs', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: 'false'

        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: 'false',

        }
         });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:*/
     await queryInterface.dropTable('user_techs');
     
  }
};
