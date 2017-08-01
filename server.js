// =================================================================================
// Base Setup
// =================================================================================
'use strict';

const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const passport      = require('passport');
const requireAll    = require('require-all');

// Get port number
const port = process.env.PORT || 3000;

// Configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Initialize passport for use
app.use(passport.initialize());

// Get other dependencies
const router = require('./routes/routes');

// Instantiate all controllers
requireAll({
    dirname: __dirname + '/controllers',
    filter:  /(.+controller)\.js$/,
    recursive: false
});

// Register the routes
// All of the routes must be prefixed with /api
app.use('/api', router);

// CORS Enable all origins
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, content-type, x-http-method-override');
    next();
});

// Start the server
// =================================================================================
app.listen(port);
console.log('REST API started on port ' + port);
