const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models/users')
const { InvalidArgumentError } = require('./error');

const bcrypt = require('bcrypt');

function verifyUser(Users) {
  if(!Users) {
    throw new InvalidArgumentError('Não existe usuário cadastrado com esse email!');
  }
}

async function verifyPassword(password, passwordHash){
  const passwordIsValid = await bcrypt.compare(password, passwordHash);
  if (!passwordIsValid) {
    throw new InvalidArgumentError('E-mail ou senha inválidos!');
  }
}

passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: false
      }))
      async (email, password, done) => {
        try {
          const users = await Users.searchEmail(email);
          verifyUser(users);
          await verifyPassword(password, users.passwordHash);

          done(null, users);

        } catch (erro) {
          done(erro);
        }
      }

module.exports = authentication_strategies