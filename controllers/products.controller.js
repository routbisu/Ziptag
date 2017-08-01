const router = require('../routes/routes');
const passport = require('passport');
const productService = require('../services/productsService');

/**
 * Get all products
 */
router.get('/products', passport.authenticate('jwt', { session: false }), function(req, res) {
    productService.GetAll().then(function(products) {
        console.log("Req data");
        console.log(req.user);
        res.json(products);
    }, function(error) {
        res.status(400).json(error);
    });
});

//router.post('/products', function()