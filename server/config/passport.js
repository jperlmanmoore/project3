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

    // local signup strategy -- passport, search database to see if user already exists, and if not then add a user
    // passport.use(
    //     'local-signup',
    //     new LocalStrategy({
    //             usernameField: 'username',
    //             passReqToCallback: true
    //         },
    //         (req, username, done) => {
    //             console.log("passport stuff")
    //             // generates a hash for the password, and salt for the password
    //             const generateHash = password => {
    //                 return bc.hashSync(password, bc.genSaltSync(8), null);
    //             };

    //             // store the user password as a hash
    //             const userPassword = generateHash(password);
    //             console.log(userPassword, "password");
    //             // store the registration info as a variable
    //             const data = {
    //                 username: username,
    //                 first_name: req.body.first_name,
    //                 last_name: req.body.last_name,
    //                 email: req.body.email,
    //                 password: userPassword
    //             }
    //             console.log(username);

    //             // determin when to create a new user in the database table
    //             // ideally this would have more robust rules for creating a new user
    //             Users.create(data)
    //                 .then(newUser => {
    //                     // console.log(newUser);
    //                     if (!newUser) {
    //                         console.log("notNewUser");
    //                         return done(null, false);
    //                     }

    //                     if (newUser) {
    //                         console.log("newUser");
    //                         return done(console.log("created new user"));
    //                     }
    //                 });
    //         })
    // );


    //local login - check to see if is a user. If user, log in, and if not send to signup page.
    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

            (req, userpass, password, done) => {

                // compares the password the user enters at login to the stored hashed password 
                const isValidPassword = (userpass, password) => {
                    console.log(password, userpass)
                    return bc.compareSync(password, userpass);
                };
                
                const generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };
                const userPassword = generateHash(password);
                
                // looks to the db collection to find a username
                Users.findOne({ username: req.body.username, password: userPassword }, (err, user) => {
                    if (err) { return done(err); } 

                    if (!user) {
                        return done(null, false, {
                                message: "some message"
                            });
                        }
                    
                    if (!isValidPassword(user.password, password)) {
                        
                        return done(null, false, {
                                message: "Oops, wrong password!"
                            });
                        }
                        // const userinfo = user.get();
                        // console.log(userinfo, "yay!");
                        // return done(null, userinfo);
                });
            }
        ));

    // const opts = {}
    // opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken("JWT");
    // opts.secretOrKey = keys.secret

    // passport.use(
    //     'jwt',
    //     new JWTstrategy(opts, (jwt_payload, done) => {
    //         console.log(jwt_payload)
    //         Users.findOne({
    //             id: jwt_payload.sub
    //         }, (err, user) => {
    //             if (err) {
    //                 return done(err, false);
    //             }
    //             if (user) {
    //                 console.log('user exists');
    //                 done(null, user);
    //             } else {
    //                 console.log("not a user");
    //                 done(null, false)
    //             }
    //         })
    //     })
    // );



}