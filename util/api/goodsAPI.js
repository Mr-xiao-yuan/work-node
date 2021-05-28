

var goodss = require('./database/goodss')

var express = require('express')

var router = express.Router()


router.get('/goods/search', function(req,res){
	goodss.search.find().exec(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		// console.log(data)
		return res.send(data)
	})
})
// var cartdata = ''
router.get('/goods/detail?:goods_id',function(req,res){
	var id = req.query.goods_id
	// console.log('这个不是'+this.cartdata)
	var cartdata = this.cartdata
	goodss.detail.find({"goods_id":id}).exec(function(err,data){
			 cartdata = data
			if(err){
				return res.status(500).send('Server error')
			}
			return res.send(data)
		})
		// console.log(res.stack)
		// console.log('这个是'+cartdata)
})
// console.log('这个'+cartdata)
// router.get('/goods/cart',function(req,res){
// 	// console.log('这个就不是'+this.cartdata)
// 			goodss.cart.create(this.cartdata,function(err,data){
// 				if(err){
// 					return res.status(500).send('Server error')
// 				}
// 				return res.send(data)
// 			})
// 		})
// console.log(cartdata)


//导出
module.exports = router