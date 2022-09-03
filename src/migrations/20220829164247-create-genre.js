'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // movieId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: 'Movies',
      //       // schema: 'schema'
      //     },
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL'
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Genres');
  }
};