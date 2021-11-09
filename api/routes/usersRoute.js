const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getAUser)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)


module.exports = router