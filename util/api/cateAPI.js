//定义cate接口内容

var cates = require('./database/cates')

var express = require('express')

var router = express.Router()

router.get('/categories', function(req,res){
	cates.data.find().exec(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		return res.send(data)
	})
})

//导出
module.exports = router