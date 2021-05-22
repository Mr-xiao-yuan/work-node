
var mongoose =require('mongoose')


var Schema = mongoose.Schema

var db = mongoose.createConnection('mongodb://localhost/goods',{useNewUrlParser: true,useUnifiedTopology: true});

var crudSchema = new Schema({})

module.exports = {
	search: db.model('search', crudSchema)
}

 