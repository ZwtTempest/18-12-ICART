const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routers/user.js');
const product = require('./routers/product.js');
//构建web服务器
var app = express();
app.listen(3000);
//托管静态资源
app.use(express.static('./zwt'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended: false
}));
//使用路由器
//把用户路由器挂载到  /user下
app.use('/user',user);
app.use('/product',product);
