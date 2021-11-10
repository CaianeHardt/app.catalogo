
'use strict';
const {
  Model
} = require('sequelize');
// const { addPassword } = require('../controllers/UserController');
// const validations = require('../strategy/validations');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      Users.hasMany(models.User_abilities, {foreignKey: "user_id"})
    }};

    Users.init({
      name: DataTypes.STRING,
      phone_number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.STRING,
      occupation: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Users',
    });

    
    

  return Users;}

  