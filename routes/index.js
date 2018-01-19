var express = require('express');
var router = express.Router();

// Get home page
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('about');
});

// GET FAQ page
router.get('/faq', function(req, res, next) {
  res.render('faq');
});

module.exports = router;
