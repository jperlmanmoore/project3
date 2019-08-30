// const passport = require("passport");
const bc = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../models/Users");
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const keys = require("../config/jwtConfig");

module.exports = passport => {

    // serialize the user
    passport.serializeUser((user, cb) => {
        console.log(user);
        var userObj = {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email
        };
        console.log(userObj, "userObj");
        cb(null, userObj);
    });
    // deserialize the user
    passport.deserializeUser((userObj, cb) => {
        cb(null, userObj);
    });

    //local login - check to see if is a user. If user, log in, and if not send to signup page.
    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

            (req, username, password, done) => {

                // compares the password the user enters at login to the stored hashed password 
                const isValidPassword = (userpass, password) => {
                    console.log(password, userpass, "userpass")
                    return bc.compareSync(password, userpass);
                };
                
                // const generateHash = password => {
                //     return bc.compare(password, bc.genSaltSync(8), null);
                // };
                // const userPassword = generateHash(password);
                console.log(password, "password");
                console.log(username, "username");
                // looks to the db collection to find a username
                Users.findOne({ username: req.body.username }, (err, user) => {
                    if (err) { return done(err); } 

                    if (user) {
                        return done(null, true, {
                            message: "user"
                        });
                    }

                    if (!user) {
                        return done(null, false, {
                                message: "some message #1"
                            });
                        }
                    
                    if (!isValidPassword(user.password, password)) {
                        
                        return done(null, false, {
                                message: "Oops, wrong password!"
                            });
                        }
                });
            }
        ));

    const opts = {}
    opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken("JWT");
    opts.secretOrKey = keys.secret
    opts.issuer = 'jennifer@sdfrfvokjnefol.com',
    opts.audience = "gobananas.site"

    passport.use(
        'jwt',
        new JWTstrategy(opts, (jwt_payload, done) => {
            console.log(jwt_payload)
            Users.findAll({
                id: jwt_payload.sub
            }, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    console.log('user exists');
                    done(null, user);
                } else {
                    console.log("not a user");
                    done(null, false)
                }
            })
        })
    );



}