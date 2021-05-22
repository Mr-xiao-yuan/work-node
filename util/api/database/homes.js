//引入mongodb数据库
var mongoose =require('mongoose')

//定义表结构
var Schema = mongoose.Schema
// 连接数据库
var db = mongoose.createConnection('mongodb://localhost/home',{useNewUrlParser: true,useUnifiedTopology: true});
// 设计结构（表结构）
var crudSchema = new Schema({})
//导出数据库模型,这里的参数message，默认去找work数据库中messages集合
module.exports = {
	swiper: db.model('swiper', crudSchema),
	catitem: db.model('catitem', crudSchema),
	floor: db.model('floor', crudSchema)
}
// exports.swiper = mongoose.model('swiper', crudSchema)

 