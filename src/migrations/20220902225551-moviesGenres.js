'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('movieGenre', {
     id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    MovieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Movie',
        key: 'id'
      }
    },
    GenreId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Genre',
        key: 'id',
        as: 'genreId'
      }
    }
  },{
    freezeTableName: true
  })},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('movieGenre');

  }
};
