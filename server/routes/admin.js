var express = require('express')
var Mongoose = require('mongoose')
var Admin = require('./../models/admin')
var Shop = require('./../models/ShopList')
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
			}else{
				res.json({
					status: 300,
					msg: '登录失败'
				})
			}
		}
	})
})

router.get('/getAdmin', function (req, res, next) {
	const id = req.query.id;
	Admin.findOne({_id: id}, function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			if (doc) {
				res.json({
					status: 200,
					msg: '获取指定管理员成功',
					result: {
						adminInfo: doc
					}
				})
			}
		}
	})
})

router.get('/getShop', function (req, res, next) {
	const shop_id = req.query.shop_id;
	Shop.findOne({shop_id: shop_id}, function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			if (doc) {
				res.json({
					status: 200,
					msg: '获取指定商家成功',
					result: {
						shopList: doc
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

router.get('/getShopList', function (req, res, next) {
	Shop.find({}, function (err, doc) {
		if (err) {
			res.json({
				status: 100,
				msg: err.message
			})
		} else {
			if (doc) {
				res.json({
					status: 200,
					msg: '获取商家列表成功',
					result: {
						shopList: doc
					}
				})
			}
		}
	})
})


router.post('/add', function (req, res, next) {
	const params = req.body;
	Admin.update({ user_name:params.user_name}, {$set: params},{upsert: true},function (err, doc) {
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

router.post('/delete', function (req, res, next) {
	const id = req.body.id;
	Admin.remove({ _id:id},function (err) {
		if (err) {
			res.json({
				status: 100,
				msg: '删除失败'
			})
		} else {
			res.json({
				status: 200,
				msg: '删除管理员成功'
			})
		}
	})
})

router.post('/edit', function (req, res, next) {
	const params = req.body;
	Admin.update({ _id:params._id},{user_name: params.user_name, pass_word:params.pass_word},function (err) {
		if (err) {
			res.json({
				status: 100,
				msg: '修改管理员失败'
			})
		} else {
			res.json({
				status: 200,
				msg: '修改管理员成功'
			})
		}
	})
})

module.exports = router
