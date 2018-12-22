const express = require('express');
//引入mysql连接池
const pool = require('./../pool.js');
//创建路由器
var router = express.Router();

//跳转到商品页面
router.get('/products',(req,res)=>{
	var obj = req.query;
	var $pname = obj.pname;
	if(!$pname){
		res.send( {code: 404,msg: 'pname require'} );
		return;
	}
	console.log($pname);
	var sql = 'SELECT * FROM project_laptop_family WHERE name=?';
	pool.query(sql,[$pname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send( {code: 301,msg: 'select error'} );
		}
	});
});
router.get('/pclassify',(req,res)=>{
	var obj = req.query;
	var $pname = obj.pname;
	if(!$pname){
		res.send( {code: 404,msg: 'pname require'} );
		return;
	}
	var sql = 'SELECT fid,cid FROM project_laptop_family,project_laptop_family_classify WHERE fid=family_id AND classify_name=?';
	pool.query(sql,[$pname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send( {code: 301,msg: 'select error'} );
		}
	});
});

//查询所有商品
router.get("/search",(req,res)=>{
	var output = { pageSize: 12 };
	var obj = req.query;
	$conf = obj.conf;
	$conc = obj.conc;
	$conb = obj.conb;
	output.pno=obj.cno;
	if($conf == 0){
		var sql = 'SELECT * FROM project_laptop';
		pool.query(sql,(err,result)=>{
			if(err) throw err;
			res.writeHead(200,{
				"Content-Type":"application/json;charset=utf-8",
				"Access-Control-Allow-Origin":"*"
			})
			output.count = result.length;
			output.pageCount = Math.ceil(output.count/output.pageSize);
			if(output.pno >= output.pageCount){
				output.pno = output.pageCount - 1;
			}
			output.products = result.slice(output.pno*12,output.pno*12+12);
			res.write(JSON.stringify(output));
			res.end();
		});
	}else if($conc == 0){
		var sql = 'SELECT * FROM project_laptop WHERE family_id=?';
		pool.query(sql,[$conf],(err,result)=>{
			if(err) throw err;
			res.writeHead(200,{
				"Content-Type":"application/json;charset=utf-8",
				"Access-Control-Allow-Origin":"*"
			})
			output.count = result.length;
			output.pageCount = Math.ceil(output.count/output.pageSize);
			if(output.pno >= output.pageCount){
				output.pno = output.pageCount - 1;
			}
			output.products = result.slice(output.pno*12,output.pno*12+12);
			res.write(JSON.stringify(output));
			res.end();
		});
	}else if($conb == 0){
		var sql = 'SELECT * FROM project_laptop WHERE family_id=? AND family_classify_id=?';
		pool.query(sql,[$conf,$conc],(err,result)=>{
			if(err) throw err;
			res.writeHead(200,{
				"Content-Type":"application/json;charset=utf-8",
				"Access-Control-Allow-Origin":"*"
			})
			output.count = result.length;
			output.pageCount = Math.ceil(output.count/output.pageSize);
			if(output.pno >= output.pageCount){
				output.pno = output.pageCount - 1;
			}
			output.products = result.slice(output.pno*12,output.pno*12+12);
			res.write(JSON.stringify(output));
			res.end();
		});
	}else{
		var sql = 'SELECT * FROM project_laptop WHERE family_id=? AND family_classify_id=? AND family_brand_id=?';
		pool.query(sql,[$conf,$conc,$conb],(err,result)=>{
			if(err) throw err;
			res.writeHead(200,{
				"Content-Type":"application/json;charset=utf-8",
				"Access-Control-Allow-Origin":"*"
			})
			output.count = result.length;
			output.pageCount = Math.ceil(output.count/output.pageSize);
			if(output.pno >= output.pageCount){
				output.pno = output.pageCount - 1;
			}
			output.products = result.slice(output.pno*12,output.pno*12+12);
			res.write(JSON.stringify(output));
			res.end();
		});
	}
});


//商品导航栏
router.get('/searchnav',(req,res)=>{
	var obj = req.query;
	var $fid = obj.fid;
	if(!$fid){
		res.send( {code: 404,msg: 'fid require'} );
		return;
	}
	var sql = "select name,classify_name,brand_name from project_laptop_family,project_laptop_family_classify,project_laptop_family_brand where family_id=fid and classify_id=cid and fid=?"
	pool.query(sql,[$fid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send( {code: 301,msg: 'select error'} );
		}
	});
})
router.get('/searchnavall',(req,res)=>{
	var output = {name:{},brand_name:{}}
	var sql1 = "SELECT name FROM project_laptop_family"
	var sql2 = "SELECT brand_name FROM project_laptop_family_brand"
	Promise.all([
		new Promise(function(open){
			pool.query(sql1,(err,result)=>{
				if(err) throw err
				output.name = result
				open()
			})
		}),
		new Promise(function(open){
			pool.query(sql2,(err,result)=>{
				if(err) throw err
				output.brand_name = result
				open()
			})
		}).then(function(){
			res.writeHead(200,{
				"Content-Type":"application/json;charset=utf-8",
				"Access-Control-Allow-Origin":"*"
			})
			res.write(JSON.stringify(output));
    		res.end();
		})
	])
})

module.exports = router;