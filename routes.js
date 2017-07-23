// Routes for the API
// =================================================================================
// Get an instance of the express router
const express = require('express');
const router = express.Router();
const mailer = require('./helpers/emailHelper');

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Ziptag REST API'})
})

.get('/testemail', function(req, res) {
    var response = mailer.sendEmail('bisu9861861136@gmail.com; ashugodhoom@gmail.com; kanakdeepa.pradhan91@gmail.com', 'Hello world from Node', 
    '<h1>Hello world!</h1><h2>Dont be scared. This is a mail sent by a nodejs server</h2>', true);
    res.json(response);
});




// Export the router module
module.exports = router;