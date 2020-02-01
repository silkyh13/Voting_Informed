const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/index').User;//the user schema
const validatePassword = require('../models/user').validatePassword;//cmpares passwordtext to hash

passport.use(new LocalStrategy(
  {usernameField: "email"},//essentially my usrname input
  function(email, password, done) {
    User.findOne({
      where: {email}
    })
    .then(user => {
      if(!user) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      validatePassword(password, user.dataValues.password, (err, res) => {
        //user.dataValues.password = password of user I retrieve from database
        if (err) { return done(null, err); }
        if (res) { return done(null, user); }
        return done(null, false, { message: 'Incorrect password.' });
      })
    })
  }
));
//put userid into session
//If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({
    where: {id}
  })
  .then(user => {
    done(null, user);
  })
  .catch(err => {
    done(err);
  })
});

module.exports = passport;