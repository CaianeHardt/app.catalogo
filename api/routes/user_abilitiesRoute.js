const { Router } = require('express')
const User_abilitiesController = require('../controllers/User_abilitiesController')

const router = Router()

router.get('/user_abilities', User_abilitiesController.getAllUser_abilities)
router.get('/user_abilities/:id', User_abilitiesController.getAUser_abilities)
router.post('/user_abilities', User_abilitiesController.createUser_abilities)
router.put('/user_abilities/:id', User_abilitiesController.updateUser_abilities)
router.delete('/user_abilities/:id', User_abilitiesController.deleteUser_abilities)

module.exports = router