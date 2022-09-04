'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          max: 5,
          min: 1
        }
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // characterId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Character',
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL'
      // },
      // GenreId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Genre',
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL'
      // },
    },{
      freezeTableName: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movie');
  }
};