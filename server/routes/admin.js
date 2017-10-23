var express = require('express')
var Mongoose = require('mongoose')
var Admin = require('./../models/admin')
var router = express.Router()

Mongoose.connect('mongodb://127.0.0.1:27017/taoyi').then(
  () =>{
	console.log('connect success')
},
  err => {
	console.log(err)
}
)
/* GET users listing. */
router.get('/test', function (req, res, next) {
	res.send('respond with a test')
})

router.post('/login', function (req, res, next) {
	const loginInfo = req.body
	Admin.findOne(loginInfo, function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			if (doc) {
				res.json({
					status: 200,
					msg: '登录成功',
					result: {
						userName: doc.username
					}
				})
			}
		}
	})
})

router.get('/getList', function (req, res, next) {
	Admin.find({}, function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			if (doc) {
				res.json({
					status: 200,
					msg: '获取管理员列表成功',
					result: {
						adminList: doc
					}
				})
			}
		}
	})
})

router.post('/updateAdmin', function (req, res, next) {
	const params = req.body;
	Admin.update({"_id":params._id}, {"user_name": params.username,"pass_word": params.password},function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			res.json({
				status: 200,
				msg: '修改管理员成功',
				result: {
					adminList: doc
				}
			})
			
		}
	})
})

router.post('/add', function (req, res, next) {
	const params = req.body;
	Admin.update({"user_name":params.username}, {"$set": {"user_name": params.username,"pass_word": params.password}},{"upsert": true},function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			res.json({
				status: 200,
				msg: '添加管理员成功'
			})
			
		}
	})
})

module.exports = router
