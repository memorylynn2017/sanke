var mongoose = require('mongoose')


var userListSchema = new mongoose.Schema({
    "user_id": String,
    "levelname": String,
    "areaname": String,
    "purshname": String,
    "username": String,
    "countname": String,
    "pricename": String,
    "costname": String,
    "registe_time": String,
    "statusname": String
})

module.exports = mongoose.model('userList', userListSchema, 'userList')