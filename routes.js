// Routes for the API
// =================================================================================
// Get an instance of the express router
const express = require('express');
const router = express.Router();

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Ziptag REST API'})
});




// Export the router module
module.exports = router;