// =========================================================================================
// Passport authentication middleware for token based authentication
// =========================================================================================

const appConfig = require('../config/init/appConfig');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../models/user');

/**
 * Represents the passport authentication middleware
 * @param {passport} passport - This is the passport instance
 */
module.exports = function(passport) {
    var options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
        secretOrKey: appConfig.PassportSecret
    };
    
    passport.use(new JwtStrategy(options, function(jwtPayload, done) {
        console.log('jwt pay load');
        console.log(JSON.stringify(jwtPayload));
        
        userModel.findOne({_id: jwtPayload.user_id}, function(err, user) {
            if (err) {
                throw err;
                return done(err, user);
            }
            if (user) {
                console.log(user);
                done(null, user);
            }
            else {
                done(null, false);
            }
        });
    }));
};