// =================================================================================
// Base Setup
// =================================================================================
"use strict";

// Node Modules
const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const passport      = require('passport');
const requireAll    = require('require-all');

// Project Modules
const enableCORS        = require('./middlewares/enableCORS');
const router            = require('./routes/routes');
const passportModule    = require('./middlewares/passportAuth.js')(passport);

// Get port number
const port = process.env.PORT || 3000;

// Instantiate express
const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// CORS Enable all origins
app.use(enableCORS);

// Initialize passport for use and configure JWT strategy
app.use(passport.initialize());

// Instantiate all controllers
requireAll({
    dirname: __dirname + '/controllers',
    filter:  /(.+controller)\.js$/,
    recursive: false
});

// Register the routes
// All of the routes must be prefixed with /api
app.use('/api', router);

// Start the server
// =================================================================================
app.listen(port);
console.log('REST API started on port ' + port);