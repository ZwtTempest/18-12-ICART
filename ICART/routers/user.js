const express = require('express');
//引入mysql连接池
const pool = require('./../pool.js');
//创建路由器
var router = express.Router();

//在路由器下添加路由
//登录
router.post('/login',(req,res)=>{
	var obj = req.body;
	var $uname = obj.uname;
	var $upwd = obj.upwd;
	if(!$uname){ //如果$uname为空
		res.send( 1 );
		return;
	}
	if(!$upwd){
		res.send( {msg: 0} );
		return;
	}
	var sql = 'SELECT * FROM project_user WHERE phone=? and upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send( {msg: 0} );
		}
	});
});

//路由器导出
module.exports = router;