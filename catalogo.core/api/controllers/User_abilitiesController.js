const database = require('../models')

class User_abilitiesController {
    static async getAllUser_abilities(req, res){
      try {
        const allUser_abilities = await database.User_abilities.findAll()
        return res.status(200).json(allUser_abilities)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async getAUser_abilities(req, res) {
      const { id } = req.params
      try {
        const aUser_abilities = await database.User_abilities.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(aUser_abilities)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async createUser_abilities(req, res) {
      const newUser_abilities = req.body
      try {
        const newUser_abilitiesCreated = await database.User_abilities.create(newUser_abilities)
        return res.status(200).json(newUser_abilitiesCreated)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async updateUser_abilities(req, res) {
      const { id } = req.params
      const newInfo = req.body
      try {
        await database.User_abilities.update(newInfo, { where: { id: Number(id) }})
        const updatedUser_abilities = await database.User_abilities.findOne( { where: { id: Number(id) }})
        return res.status(200).json(updatedUser_abilities)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async deleteUser_abilities(req, res) {
      const { id } = req.params
      try {
        await database.User_abilities.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = User_abilitiesController