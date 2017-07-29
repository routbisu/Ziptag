// =========================================================================================
// Authentication service for access token
// =========================================================================================

const bcrypt = require('bcrypt');

// Get user mongoose model
const productModel = require('../models/product');

let authenticationService = {
    
    // Add a new user
    AddNewUser: function() {
        return new Promise(function(resolve, reject) {
            
        });

        productModel.find(function(err, products) {
        if(err) 
            res.send(err);
            res.json(products);
        });
    }
}