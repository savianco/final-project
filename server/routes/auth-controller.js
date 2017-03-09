const express        = require("express");
const authController = express.Router();
const passport = require("passport");

// Our user model
const User           = require("../models/user");

// Bcrypt let us encrypt passwords
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;


// The Signup route checks for a user with the same username and
// if it does not exist it creates a new one:
authController.post("/signup", (req, res, next) => {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    var salt     = bcrypt.genSaltSync(bcryptSalt);
    var hashPass = bcrypt.hashSync(password, salt);

    var newUser = User({
      username,
      password: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
      } else {
        req.login(newUser, function(err) {
          if (err) {
            return res.status(500).json({
              message: 'something went wrong :('
            });
          }
          res.status(200).json(req.user);
        });
      }
    });
  });
});


// The Login route uses the passport middleware to authenticate the user.
// If an error happens or the user is not found it returns an error:
authController.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, function(err) {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});


// The Logout route just logout the user and return a success message:
authController.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

// The Loggedin route is from the client...
authController.get("/loggedin", function(req, res) {
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

// The Private route looks a lot like the loggedin routes...
authController.get("/private", (req, res) => {
  if(req.isAuthenticated()) {
    return res.json({ message: 'This is a private message' });
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authController;
