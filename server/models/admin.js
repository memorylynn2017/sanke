var mongoose = require('mongoose')

var adminSchema = new mongoose.Schema({
	'user_name': String,
	'pass_word': String
})

module.exports = mongoose.model('admin', adminSchema, 'admin')
