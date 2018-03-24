var express = require('express');
var router = express.Router();
var emails = require('../emails');

// Get home page
router.get('/', function(req, res, next) {
  res.render('index');
  console.log(emails.emails.includes('dan.shapiro1210@gmail.com'));
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('about');
});

// GET FAQ page
router.get('/faq', function(req, res, next) {
  res.render('faq');
});

// GET login page
router.get('/login', function(req, res, next) {
	res.render('login');
});

module.exports = router;
