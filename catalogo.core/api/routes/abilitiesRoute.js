const { Router } = require('express')
const AbilitiesController = require('../controllers/AbilitiesController')

const router = Router()

router.get('/abilities', AbilitiesController.getAllAbilities)
router.get('/abilities/:id', AbilitiesController.getAAbilities)
router.post('/abilities', AbilitiesController.createAbilities)
router.put('/abilities/:id', AbilitiesController.updateAbilities)
router.delete('/abilities/:id', AbilitiesController.deleteAbilities)

module.exports = router