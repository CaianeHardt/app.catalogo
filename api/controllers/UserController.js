const database = require('../models')
const bcrypt = require('bcrypt');


class UserController {

  static async getAllUsers(req, res){
  try {
    const allUsers = await database.Users.findAll()
    return res.status(200).json(allUsers)  
  } catch (error) {
    return res.status(500).json(error.message)
  }
  }

  static async getAUser(req, res) {
  const { id } = req.params
  try {
    const aUser = await database.Users.findOne( { 
      where: { 
        id: Number(id) 
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
    newUser.password = addPassword(newUser.password)
    const newUserCreated = await database.Users.create(newUser)
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

  async addPassword(password) {
    this.passwordHash = Users.generatePasswordHash(password);
  }

  static generatePasswordHash(password) {
    const custoHash = 12;
    return bcrypt.hash(password, custoHash);
    }
    }
  
  module.exports = UserController