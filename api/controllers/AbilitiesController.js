const database = require('../models')

class AbilitiesController {
    static async getAllAbilities(req, res){
      try {
        const allAbilities = await database.Abilities.findAll()
        return res.status(200).json(allAbilities)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async getAAbilities(req, res) {
      const { id } = req.params
      try {
        const aAbilities = await database.Abilities.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(aAbilities)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async createAbilities(req, res) {
      const newAbilities = req.body
      try {
        const newAbilitiesCreated = await database.Abilities.create(newAbilities)
        return res.status(200).json(newAbilitiesCreated)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async updateAbilities(req, res) {
      const { id } = req.params
      const newInfo = req.body
      try {
        await database.Abilities.update(newInfo, { where: { id: Number(id) }})
        const updatedAbilities = await database.Abilities.findOne( { where: { id: Number(id) }})
        return res.status(200).json(updatedAbilities)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async deleteAbilities(req, res) {
      const { id } = req.params
      try {
        await database.Abilities.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

  }
  
  module.exports = AbilitiesController