var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

var emails = require('../emails');
var password = require('../password');


// Get home page
router.get('/', function(req, res, next) {
  res.render('index');
  console.log(emails.emails.includes('dan.shapiro1210@gmail.com'));
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('about2');
});

// GET FAQ page
router.get('/faq', function(req, res, next) {
  res.render('faq');
});

// GET login page
router.get('/login', function(req, res, next) {
	res.render('login');
});

router.post('/login', jsonParser, function(req, res, next) {
	var inputEmail = req.body['user[email]'];
  var inputPassword = req.body['user[password]']
	// console.log(emails.emails.includes(inputEmail));
 //  console.log(password.password);
  if (emails.emails.includes(inputEmail) && password.password === inputPassword) {
    res.render('loggedInLanding');
  } else {
    res.render('error');
  }
});

module.exports = router;
