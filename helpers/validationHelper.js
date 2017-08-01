/**
 * Contains methods for data validation
 */
const appConfig = require('../config/init/appConfig');
const cityHelper = require('./cityHelper');
let emailValidator = require('email-validator');

const validationHelper = {
    /**
     * Check valid email ID
     * @param {string} emailID - Email address
     */
    IsValidEmail: function(email) {
        if(emailValidator.validate(email)) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * Validates if the city code exists in app configurations
     * @param {string} cityCode - Three letter city code
     */
    IsValidCity: function(cityCode) {
        if(cityHelper.FindCityName(cityCode)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = validationHelper;