// Routes for the API
// =================================================================================
// Get an instance of the express router
const express = require('express');
const passport = require('passport');
const router = express.Router();
const mailer = require('./services/emailService');

const productService = require('./services/productsService');
const authService = require('./services/authenticationService');
const passportAuth = require('./middlewares/passportAuth.js')(passport);

// API Reference docs
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Ziptag REST API'});
});

// Get all products
router.get('/products', passport.authenticate('jwt', { session: false }), function(req, res) {
    productService.getAll().then(function(products) {
        res.json(products);
    }, function(error) {
        res.status(400).json(error);
    });
});

// Add new user
router.post('/registerUser', function(req, res) {
    authService.AddNewUser({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id,
        password: req.body.password
    }, function(err, status) {
        if(!err) {
            res.json({ message: 'User created' });
        }
        else {
            res.json(err);
        }
    });
});

// Authenticate user 
router.post('/authenticate', function(req, res) {
    authService.AuthenticateUser({
        email_id: req.body.email_id,
        password: req.body.password
    }, function(err, status) {
        if(!err) {
            res.json(status)
        }
        else {
            res.json(err);
        }
    });
});

router.get('/testemail', function(req, res) {
    var response = mailer.sendEmail('bisu9861861136@gmail.com; sdfjdsjf238edw@dwfddf.in', 'Hello world from Node', 
    '<html><h1 style="color: red">Hello world!</h1><h2>Dont be scared. This is a mail sent by a nodejs server</h2></html>', true)
    .then(function(emailResponse) {
        res.json(emailResponse);
    }, function(error) {
        res.json(error);
    });
});





// Export the router module
module.exports = router;