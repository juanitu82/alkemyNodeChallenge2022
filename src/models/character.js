'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsToMany(models.Movie, { through: 'characterMovie'})
    }
  }
  Character.init({
    name: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    weight: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    story: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Character',
    timestamps: false,
    freezeTableName: true
  });
  return Character;
};