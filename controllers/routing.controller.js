/**
 * Render user pages and partials  
 */
var userPage = function (req, res) {
    res.render(req.params.userPage);
};

var userPagePartial = function (req, res) {
    res.render('partials/' + req.params.userPagePartial);
};

/**
 * Render admin pages and partials 
 */
var adminPage = function (req, res) {
    res.render('admin/' + req.params.adminPage);
};

var adminPagePartial = function (req, res) {
    res.render('admin/partials/' + req.params.adminPagePartial);
};

var routes = {
    userPage: userPage, 
    userPagePartial: userPagePartial,
    adminPage: adminPage,
    adminPagePartial: adminPagePartial
};

module.exports = routes;