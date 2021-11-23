const database = require('../models');
const bcrypt = require('bcrypt');
const { InvalidArgumentError, InternalServerError } = require('../strategy/error');
const validation = require('../strategy/validations');
const jwt = require('jsonwebtoken');
const validations = require('../strategy/validations');
const campoStringNaoNulo = require('../strategy/validations')

const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local').Strategy;


function createTokenJWT(Users) {
  const payload = {
    id: Users
  };

  
  const token = jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`);
  return token;
};

class UserController {

  static async addPassword(password) {
    return UserController.generatePasswordHash(password);
  }

  static generatePasswordHash(password) {
    return Buffer.from(password).toString('base64');
  }


  static async userslogin(req, res) {
    console.log(req.body);
    const confirmPassword = (Buffer.from((req.body.password.toString()).toString('base64')).toString())
    // console.log(password)
    const aUser = await database.Users.findOne( { 
      where: { 
        email: req.body.email
      }
    })
    // console.log(body.email)
    
    if (aUser == undefined || aUser.password != confirmPassword) {
      return res.status(500).json('Email ou senha inválidos!');
    }
    
    const token = createTokenJWT(req.users);
    res.set('Authorization', token);
    return res.status(204).send();
  }

  static async getAllUsers(req, res){
    try {
      const allUsers = await database.Users.findAll()
      return res.status(200).json(allUsers)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAUser(req, res) {
    const { email } = req.params
    try {
      const aUser = await database.Users.findOne( { 
        where: { 
          email: String(email) 
        }
      })
      return res.status(200).json(aUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createUser(req, res) {
    const newUser = req.body
    try {
      newUser.password = (await UserController.addPassword(newUser.password)).toString()
      
      const newUserCreated = await database.Users.create(newUser)
      newUserCreated.password = null;
      return res.status(200).json(newUserCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Users.update(newInfo, { where: { id: Number(id) }})
      const updatedUser = await database.Users.findOne( { where: { id: Number(id) }})
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await database.Users.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController