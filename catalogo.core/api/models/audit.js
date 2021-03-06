'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Audit.init({
    user_id: DataTypes.INTEGER,
    altered_entity: DataTypes.STRING,
    change_type: DataTypes.STRING,
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Audit',
  });
  return Audit;
};