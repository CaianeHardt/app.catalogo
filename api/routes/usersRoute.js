const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getAUser)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)
router.get('/users/:estudanteId/matricula/:matriculaId',  UserController.pegaUmaMatricula)
router.post('/users/:estudanteId/matricula', UserController.criaMatricula)
router.put('/users/:estudanteId/matricula/:matriculaId',  UserController.atualizaMatricula)
router.delete('/users/:estudanteId/matricula/:matriculaId',  UserController.apagaMatricula)

module.exports = router