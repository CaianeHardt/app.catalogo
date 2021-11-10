const database = require('../models')

class SkillsController {
    static async getAllSkills(req, res){
      try {
        const allSkills = await database.Skills.findAll()
        return res.status(200).json(allSkills)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async getASkills(req, res) {
      const { id } = req.params
      try {
        const aSkills = await database.Skills.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(aSkills)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async createSkills(req, res) {
      const newSkills = req.body
      try {
        const newSkillsCreated = await database.Skills.create(newSkills)
        return res.status(200).json(newSkillsCreated)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async updateSkills(req, res) {
      const { id } = req.params
      const newInfo = req.body
      try {
        await database.Skills.update(newInfo, { where: { id: Number(id) }})
        const updatedSkills = await database.Skills.findOne( { where: { id: Number(id) }})
        return res.status(200).json(updatedSkills)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async deleteSkills(req, res) {
      const { id } = req.params
      try {
        await database.Skills.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = SkillsController