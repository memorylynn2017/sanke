var express = require('express');
var router = express.Router();

var Pursh = require('./../models/purshList')
    /**
     * 根据id获取商品信息
     */
router.get('/getPursh', function(req, res, next) {
    const pursh_id = req.query.pursh_id;
    Pursh.findOne({ pursh_id: pursh_id }, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 200,
                    msg: '获取指定采购单成功',
                    result: {
                        purshList: doc
                    }
                })
            }
        }
    })
})

/**
 * 获取订单列表
 */

router.get('/getPurshList', function(req, res, next) {
    Pursh.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 200,
                    msg: '获取采购单列表成功',
                    result: {
                        purshList: doc
                    }
                })
            }
        }
    })
})

/**
 * 添加指定采购单
 */
router.post('/add', function(req, res, next) {
    const params = req.body;
    Pursh.update({ pursh_id: params.pursh_id }, { $set: params }, { upsert: true }, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '添加采购单成功'
            })
        }
    })
})

/**
 * 删除指定采购单
 */
router.post('/delete', function(req, res, next) {
    const id = req.body.id;
    Pursh.remove({ _id: id }, function(err) {
        if (err) {
            res.json({
                status: 100,
                msg: '删除失败'
            })
        } else {
            res.json({
                status: 200,
                msg: '删除采购单成功'
            })
        }
    })
})

module.exports = router;