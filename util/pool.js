var mysql = require('mysql');
var db = require('../conf/db');

var pool = mysql.createPool(db.mysql);
module.exports = pool;