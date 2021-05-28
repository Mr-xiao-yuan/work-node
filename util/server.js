//服务端引用


var express = require('express')
//中间件
var bodyParser = require('body-parser')
//跨域
var cors = require('cors')
//引用express
var app = express()
//配置express的模板引擎
app.engine('json',require('express-art-template'))
//配置中间件body-parser
app.use(bodyParser.urlencoded({extended:false}))app.use(bodyParser.json())
app.use(cors())

//启动服务器
app.listen(3000,function(){
	console.log('running 3000...')
})

// 把路由容器挂载到app服务中
var homeAPI = require('./api/homeAPI')
app.use(homeAPI)

var cateAPI = require('./api/cateAPI')
app.use(cateAPI)

var goodsAPI = require('./api/goodsAPI')
app.use(goodsAPI)