

var goodss = require('./database/goodss')

var express = require('express')

var router = express.Router()

// 商品列表
router.get('/goods/search', function(req,res){
	goodss.search.find().exec(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		// console.log(data)
		
		return res.send(data)
	})
})
// 商品详情
	router.get('/goods/detail?:goods_id',function(req,res){
		var id = req.query.goods_id
		goodss.detail.find({"goods_id":id}).lean().exec(function(err,data){
			// console.log('这个是'+data)
				if(err){
					return res.status(500).send('Server error')
				}
				// router.get('/goods/cart',function(req,res){
				// 	goodss.cart.create(data,function(err,datas){
				// 		if(err){
				// 			return res.status(500).send('Server error')
				// 		}
				// 		return res.send(datas)
				// 	})
				// })
				return res.send(data)
			})
	})
// 加入购物车
	router.post('/goods/cart',function(req,res){
		goodss.cart.create(req.body,function(err,data){
			if(err){
				return res.status(500).send('Server error')
			}
		})
	})
//查看购物车数据
	router.get('/goods/cart',function(req,res){
		goodss.cart.find().exec(function(err,data){
			if(err){
				return res.status(500).send('Server error')
			}
			return res.send(data)
		})
	})
//删除购物车数据 .replace(/"/g,'')
	router.get('/home/cart/delete',function(req,res){
		// goodss.cart.remove(req.body.goods_id,function(err){
		// 	if(err){
		// 		return res.status(500).send('Server error')
		// 	}
		// 	console.log(req.body)
		// })
		goodss.cart.find().exec(function(err,data){
			if(err){
				return res.status(500).send('Server error')
			}
			console.log(data)
		})
	})
//修改购物车数据
	router.get('/home/cart/up?:goods_id',function(req,res){
		var id = req.query.goods_id
		goodss.cart.find({"goods_id":id}).update({checked:false},{checked:true},function(err,data){
			if(err){
				return res.status(500).send('Server error')
			}
			console.log(data)
		})
	})
//导出
module.exports = router