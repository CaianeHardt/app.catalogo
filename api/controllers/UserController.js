const database = require('../models')

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
  
    static async pegaUmaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      try {
        const umaMatricula = await database.Matriculas.findOne( { 
          where: { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }
        })
        return res.status(200).json(umaMatricula)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaMatricula(req, res) {
      const { estudanteId } = req.params
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
      try {
        const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
        return res.status(200).json(novaMatriculaCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      const novasInfos = req.body
      try {
        await database.Matriculas.update(novasInfos, { 
          where: { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId) 
          }})
        const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
        return res.status(200).json(MatriculaAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async apagaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      try {
        await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
        return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  }
  
  module.exports = UserController