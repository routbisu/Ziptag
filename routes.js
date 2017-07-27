// Routes for the API
// =================================================================================
// Get an instance of the express router
const express = require('express');
const router = express.Router();
const mailer = require('./services/emailService');

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Ziptag REST API'});
});

router.get('/testemail', function(req, res) {
    var response = mailer.sendEmail('bisu9861861136@gmail.com; sdfjdsjf238edw@dwfddf.in', 'Hello world from Node', 
    '<h1>Hello world!</h1><h2>Dont be scared. This is a mail sent by a nodejs server</h2>', true)
    .then(function(emailResponse) {
        res.json(emailResponse);
    }, function(error) {
        res.json(error);
    });
});





// Export the router module
module.exports = router;