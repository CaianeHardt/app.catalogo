const { Router } = require('express')
const SkillsController = require('../controllers/SkillsController')

const router = Router()

router.get('/skills', SkillsController.getAllSkills)
router.get('/skills/:id', SkillsController.getASkills)
router.post('/skills', SkillsController.createSkills)
router.put('/skills/:id', SkillsController.updateSkills)
router.delete('/skills/:id', SkillsController.deleteSkills)


module.exports = router