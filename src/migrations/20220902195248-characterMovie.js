'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.createTable('characterMovie', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       CharacterId: {
         type: Sequelize.INTEGER,
         references: {
           model: 'Character',
           key: 'id'
         },
         allowNull: false
       },
       MovieId: {
         type: Sequelize.INTEGER,
         references: {
           model: 'Movie',
           key: 'id'
         },
         allowNull: false
       }},{
        freezeTableName: true
      })
      },
    
  
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.dropTable('characterMovie')
  }
};
