var mongoose = require('mongoose')


var userListSchema = new mongoose.Schema({
    "user_id": String,
    "levelname": String,
    "usercity": String,
    "username": String,
    "usersex": String,
    "usercall": String,
    "userqq": String,
    "userzi": String,
    "userdate": String,
    "countname": String,
    "pricename": String,
    "costname": String,
    "registe_time": String,
    "login_time": String,
    "user_expert": String,
    "user_bei": String,
    "purchase_num": String,
    "statusname": String
})


module.exports = mongoose.model('userList', userListSchema, 'userList')