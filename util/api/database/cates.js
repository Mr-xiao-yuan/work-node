
var mongoose =require('mongoose')


var Schema = mongoose.Schema

var db = mongoose.createConnection('mongodb://localhost/cate',{useNewUrlParser: true,useUnifiedTopology: true});

var crudSchema = new Schema({})

module.exports = {
	data: db.model('data', crudSchema)
}

 