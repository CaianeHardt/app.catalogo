const database = require('../models')

class User_skillsController {
    static async getAllUser_skills(req, res){
      try {
        const allUser_skills = await database.User_skills.findAll()
        return res.status(200).json(allUser_skills)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async getAUser_skills(req, res) {
      const { id } = req.params
      try {
        const aUser_skills = await database.User_skills.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(aUser_skills)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async createUser_skills(req, res) {
      const newUser_skills = req.body
      try {
        const newUser_skillsCreated = await database.User_skills.create(newUser_skills)
        return res.status(200).json(newUser_skillsCreated)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async updateUser_skills(req, res) {
      const { id } = req.params
      const newInfo = req.body
      try {
        await database.User_skills.update(newInfo, { where: { id: Number(id) }})
        const updatedUser_skills = await database.User_skills.findOne( { where: { id: Number(id) }})
        return res.status(200).json(updatedUser_skills)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async deleteUser_skills(req, res) {
      const { id } = req.params
      try {
        await database.User_skills.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = User_skillsController