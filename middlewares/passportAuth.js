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
const passportAuth = function(passport) {
    var options = {
        wtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: appConfig.PassportSecret
    };

    passport.use(new JwtStrategy(options, function(jwtPayload, done) {
        userModel.findOne({id: jwtPayload.id}, function(err, user) {
            if (err) {
                return done(err, user);
            }
            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        });
    }));
};

module.exports = passportAuth;