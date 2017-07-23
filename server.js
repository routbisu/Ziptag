// Base Setup
// =================================================================================
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');

// Get port number
const port = process.env.PORT || 3000;

// Configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Get other dependencies
const router = require('./routes');

// Register the routes
// All of the routes must be prefixed with /api
app.use('/api', router);

// Start the server
// =================================================================================
app.listen(port);
console.log('REST API started on port ' + port);
