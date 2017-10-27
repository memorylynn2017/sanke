var express = require('express');
var router = express.Router();
var Good = require('./../models/goodList');

/**
 * 根据id获取商品信息
 */
router.get('/getGood', function(req, res, next) {
    const product_id = req.query.product_id;
    Good.findOne({ product_id: product_id }, function(err, doc) {
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
                        goodList: doc
                    }
                })
            }
        }
    })
})

/**
 * 获取商品列表
 */
router.get('/getGoodList', function(req, res, next) {
    Good.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 200,
                    msg: '获取商品列表成功',
                    result: {
                        goodList: doc
                    }
                })
            }
        }
    })
})

/**
 * 添加指定商家
 */
router.post('/add', function(req, res, next) {
    const params = req.body;
    Good.update({ product_name: params.product_name }, { $set: params }, { upsert: true }, function(err, doc) {
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

/**
 * 删除指定商家
 */
router.post('/delete', function(req, res, next) {
    const id = req.body.id;
    Good.remove({ _id: id }, function(err) {
        if (err) {
            res.json({
                status: 100,
                msg: '删除失败'
            })
        } else {
            res.json({
                status: 200,
                msg: '删除商品成功'
            })
        }
    })
})

/**
 * 编辑商家信息
 */

router.post('/edit', function(req, res, next) {
    const params = req.body;
    Good.update({ _id: params._id }, params, function(err) {
        if (err) {
            res.json({
                status: 100,
                msg: '修改商品失败'
            })
        } else {
            res.json({
                status: 200,
                msg: '修改商品成功'
            })
        }
    })
})

module.exports = router;