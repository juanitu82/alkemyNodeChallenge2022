
'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Character', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      story: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      // movieId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Movies',
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL'
      // }
    },{
      freezeTableName: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Character');
  }
};