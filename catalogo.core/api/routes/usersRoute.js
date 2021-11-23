const { Router } = require('express')
const UserController = require('../controllers/UserController')
const router = Router()
const passport = require('passport')
// const authentication_strategies = require('../strategy/authentication_strategies')


router.get('/users', UserController.getAllUsers)
router.get('/users/:email', UserController.getAUser)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)
router.post('/users/login', UserController.userslogin)


module.exports = app => {
    app
    .route('/users/login')
    .post(passport.authenticate('local', {session : false }), UserController.login);
}


module.exports = router
