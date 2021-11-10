'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_abilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_abilities.belongsTo(models.Users, {foreignKey: "user_id"})
    }
  };
  User_abilities.init({
    level: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    abiliity_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_abilities',
  });
  return User_abilities;}
