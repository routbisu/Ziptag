// =========================================================================================
// Authentication service for access token
// =========================================================================================

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appConfig = require('../config/init/appConfig');

// Get user mongoose model
const UserModel = require('../models/user');

let authenticationService = {
    /**
     * Authenticate the user to check if email password combo exists
     * @param {user} userdetail
     * @param {callback} callback
     */
    AuthenticateUser: function(loginUser, callback) {
        UserModel.findOne({
            email_id: loginUser.email_id
        }, function(err, user) {
            if(err) {
                return callback(err, null);  
            }
            else {
                if(!user) {
                    return callback({ message: 'User not found.' }, null);  
                }

                // Check if the password matches
                user.comparePassword(loginUser.password, function(err, isMatch) {
                    if(isMatch && !err) {
                        // Create the access token
                        console.log(user);
                        let token = jwt.sign({ user_id: user._id}, appConfig.PassportSecret, {
                            expiresIn: 10080    // In minutes
                        });

                        return callback(null, { token: 'Bearer ' + token });
                    }
                    else {
                        return callback({ message: 'Incorrect password.' }, null);
                    }
                });
            }
        });
    },
    
    // Add a new user
    AddNewUser: function(user, callback) {

        let errors = [];

        if(!user.first_name) { errors.push("Please enter first name"); }
        if(!user.last_name) { errors.push("Please enter last name"); }
        if(!user.email_id) { errors.push("Please enter Email ID"); }
        if(!user.password) { errors.push("Please enter password"); }
        
        if(errors.length > 0) {
            return callback(errors, null);
        }
        else {
            var newUser = new UserModel({
                first_name: user.first_name,
                last_name: user.last_name,
                email_id: user.email_id,
                password: user.password,
                contact: user.contact ? user.contact : '',
                city: user.city ? user.city : '',
                is_active: true
            });

            newUser.save(function(err) {
                if(err)
                    return callback(err, null);
                else
                    return callback(null, 'success');
            });
        }
    }
}

module.exports = authenticationService;