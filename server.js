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
const ejs           = require('ejs');
const path          = require('path');

// Project Modules
const enableCORS        = require('./middlewares/enableCORS');
const router            = require('./routes/routes');
const passportModule    = require('./middlewares/passportAuth.js')(passport);

// Get port number
const port = process.env.PORT || 3050;

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

// Register the API routes
// All of the routes must be prefixed with /api
app.use('/api', router);

/**
 * Configure express to serve static html pages inside of your public folder
 */

/**
 * Set up the view engine
 */
app.set('views', __dirname + '/public');
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');
app.set('view options', { layout: false });

/**
 * Register the public directory
 */
app.use(express.static(path.join(__dirname, '/public')));

/**
 * Set the server routes
 */
 
 var routingController = require('./controllers/routing.controller');

 /**
  * User pages
  */
app.get('/:userPage', routingController.userPage);
app.get('/partials/:partial', routingController.userPagePartial);

/**
 * Admin pages
 */
app.get('/admin/:adminPage', routingController.adminPage);
app.get('/admin/partials/:partial', routingController.adminPagePartial);

/**
 * Default route for admin - Render admin index page
 */
app.get('/admin/*', function (req, res) {
    res.render('/admin/index');
});

/**
 * Default route for user - Render user index page
 */
app.get('*', function (req, res) {
    res.render('index');
});


// Start the server
// =================================================================================
app.listen(port);
console.log('Ziptag App started on port ' + port);