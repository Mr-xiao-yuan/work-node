
var mongoose =require('mongoose')


var Schema = mongoose.Schema

var db = mongoose.createConnection('mongodb://localhost/goods',{useNewUrlParser: true,useUnifiedTopology: true});

var crudSchema = new Schema({})
var cartSchema = new Schema({
	goods_id: {type:Number,required: true},
	goods_name: {type:String},
	goods_big_logo: {type:String},
	goods_number: {type:Number},
	goods_price: {type:Number},
	shop_name: {type:String},
	shop_type: {type:String},
	checked: {type:Number}
})

module.exports = {
	search: db.model('search', crudSchema),
	detail: db.model('detail', crudSchema),
	cart: db.model('cart', cartSchema)
}

 