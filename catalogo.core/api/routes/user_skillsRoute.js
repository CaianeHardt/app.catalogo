const { Router } = require('express')
const User_skillsController = require('../controllers/User_skillsController')

const router = Router()

router.get('/user_skills', User_skillsController.getAllUser_skills)
router.get('/user_skills/:id', User_skillsController.getAUser_skills)
router.post('/user_skills', User_skillsController.createUser_skills)
router.put('/user_skills/:id', User_skillsController.updateUser_skills)
router.delete('/user_skills/:id', User_skillsController.deleteUser_skills)


module.exports = router