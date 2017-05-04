var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

var sess;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/login').post(function(req, res, next){
	userDao.login(req, res, next);
});

router.route('/logout').post(function(req, res, next){
	userDao.logout(req, res, next);
});

router.route('/checkLogin').get(function(req, res, next){
	userDao.checkLogin(req, res, next);
});

module.exports = router;
