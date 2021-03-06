var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* GET upload page. */
router.get('/upload', function(req, res, next) {
  res.render('upload');
});

/* GET my page. */
router.get('/my', function(req, res, next) {
  res.render('my');
});


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});



module.exports = router;
