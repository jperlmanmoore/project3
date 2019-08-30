const passport = require('passport');
const users = require('../models/Users');
const bc = require("bcryptjs");
const keys = require("../config/jwtConfig");
const jwt = require('jsonwebtoken')
// fixed
// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    console.log("jwt route");
    passport.authenticate('jwt', { session: false }, (user) => {
      res.status(200).send({ user })
    })
  },

  findOne: (req, res, next) => {
    console.log("login route");
    passport.authenticate('local-login', { session: false }, (err, username, info) => {
      console.log("passport local-login")
      if (err) { console.log(err) }
      else if (info) {
        console.log(info.message);
        // return res.send(info.message);
        // based off of freecodecamp example
        const payload = {
          username: username,
        };
        console.log(123)

        req.logIn(payload, { session: false }, (error => {
          if (error) {
            res.status(400).send({ error });
          }

          const stuffInsideToken = ({ id: users.username });
          const token = jwt.sign(stuffInsideToken, keys.secret)
          res.cookie('jwt', token, { httpOnly: true, secure: true });
          return res.status(200).send({
            auth: true,
            token: token,
            message: "user exists and is logged in",
          });

          // res.send(token);
        })
        )
      }
    }
    )(req, res, next)
  },

  create: (req, res, password) => {
    console.log("say nothing!");

    const generateHash = password => {
      return bc.hashSync(password, bc.genSaltSync(8), null);
    };

    // store the user password as a hash
    const userPassword = generateHash(req.body.password);
    console.log(userPassword, "password");

    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: userPassword
    };

    users.create(
      data
    )
      .then(() => {
        console.log("then", data);
        //must return response
        return res.status(200).json({ success: "true" });
      })
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.users
      .updateOne({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.deleteOne())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
