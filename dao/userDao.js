var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./userSqlMapping');

//使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);

//向欠他返回JSON方法的简单封装
var jsonWrite = function(res, ret){
	if(typeof ret === 'undefined'){
		res.json({
			code: '1',
			msg: '操作失败'
		});
	}else{
		res.json(ret);
	}
};

module.exports = {
	add: function(req, res, next){
		pool.getConnection(function(err, connection){
			//获取前端页面传过来的参数
			var param = req.query || req.params;

			//建立连接，向表中插入值
			connection.query($sql.insert, [param.name, param.age], function(err, result){
				if(result){
					result = {
						code: 200,
						msg: '增加成功'
					}
				}

				//以json形式，将操作结果返回给前端页面
				jsonWrite(res, result);

				//释放连接
				connection.release();
			});
		});
	},
	login: function(req, res, next){
		//获取前端页面传过来的参数
		var param = req.body;
		var sess = req.session;
		sess.username = param.name;
		res.redirect('//localhost:3000'); 
	},
	logout: function(req, res, next){
		var sess = req.session;
		sess.username = null;
		var ret =  {
			code: 0,
			result: {},
			msg: 'ok'
		}
		res.json(ret);
	},
	checkLogin: function(req, res, next){
		var sess = req.session;
		var ret =  {
			code: 0,
			result: {
				login: sess.username ? 1 : 0
			},
			msg: 'ok'
		}
		res.json(ret);
	}

}