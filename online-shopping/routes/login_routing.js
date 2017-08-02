var express = require('express');
var router = express.Router();

exports.isLoggedIn = function(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    req.flash('warning', 'You must log in to see this page.');
    res.redirect('/login');
}
