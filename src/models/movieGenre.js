'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movieGenre.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Movie',
        key: 'id'
      }
    },
    GenreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Genre',
        key: 'id',
        as: 'genreId'
      }
    }
  }, {
    sequelize,
    modelName: 'movieGenre',
    freezeTableName: true,
    timestamps: false
  });
  return movieGenre;
};