var LocalStrategy  = require('passport-local').Strategy;
var User           = require('../models/user');
const bcrypt       = require("bcryptjs");

module.exports = function (passport) {

  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return next(null, false, { message: "Usuario incorrecto" });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Contraseña incorrecta" });
      }

      return next(null, user);
    });
  }));

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });
}
