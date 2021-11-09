const { Router } = require('express')
const UserController = require('../controllers/UserController')
const router = Router()
const passport = require('passport')
// const authenticate = require('../strategy/authentication_strategies')


router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getAUser)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)
router.post('/users/login', UserController.Userslogin)


module.exports = app => {
    app
    .route('/users/login')
    .post(passport.authenticate('local', {session : false }), UserController.login);

    // app
    // .route('/users/login')
    // .post(passport.authenticate('bearer', { session : false}), UserController.Userslogin);

    // app
    // .route('/users/;id')
    // .delete(passport.authenticate('bearer', { session : false}), UserController.deleteUser);
}


module.exports = router
