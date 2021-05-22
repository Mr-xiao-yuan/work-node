

var goodss = require('./database/goodss')

var express = require('express')

var router = express.Router()

router.get('/goods/search', function(req,res){
	goodss.search.find(function(err,data){
		if(err){
			return res.status(500).send('Server error')
		}
		// console.log(data)
		return res.send(data)
	})
})

//导出
module.exports = router