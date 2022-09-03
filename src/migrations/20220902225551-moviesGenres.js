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
    movieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Movies',
        key: 'id'
      }
    },
    GenreId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Genres',
        key: 'id'
      }
    }
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
