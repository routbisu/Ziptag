/**
 * Gets city name or code from appConfig file
 */
const appConfig = require('../config/init/appConfig');
let allCities = appConfig.AllCities;

const cityHelper = {
    /**
     * Get city name from city code
     * @param {string} cityCode - Three letter code for the city
     */
    FindCityName: function(cityCode) {
        let cityDetails = allCities.find(a => a.CityCode === cityCode);
        if(cityDetails) {
            return cityDetails.CityName;
        } else {
            return null;
        }
    },

    /** Get list of all cities */
    GetAllCities:  function() {
        return allCities;
    }
}

module.exports = cityHelper;