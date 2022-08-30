'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Character, { through: 'movieChars'})
      Movie.belongsToMany(models.Genre, {through: 'movieGenres'})
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    rate: DataTypes.NUMBER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Movie',
    timestamps: false
  });
  return Movie;
};