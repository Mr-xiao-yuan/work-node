//定义home接口内容

//引入数据库
var homes = require('./database/homes')
var express = require('express')
//创建路由容器
var router = express.Router()
//轮播图
router.get('/home/swiperdata', function(req,res){
	// homes.swiper.find(function(err,data){
	// 	if(err){
	// 		return res.status(500).send('Server error')
	// 	}
	// 	return res.send(data)
	// })
	homes.swiper.find().exec(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		return res.send(data)
	})
})
//导航栏
router.get('/home/catitems', function(req,res){
	homes.catitem.find().exec(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		return res.send(data)
	})
})
//楼梯
router.get('/home/floordata', function(req,res){
	homes.floor.find().exec(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		return res.send(data)
	})
})

//导出
module.exports = router