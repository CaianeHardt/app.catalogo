const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('./users')
passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: false
      }))
      async (email, password, done) => {
        try {
          const user = await Users.searchEmail(email);
          verifyUser(user);
          await verifyPassword(password, user.passwordHash);
  
          done(null, user);
        } catch (erro) {
          done(erro);
        }
      }