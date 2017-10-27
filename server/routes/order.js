var express = require('express');
var router = express.Router();
var Order = require('./../models/orderList');



/**
 * 根据id获取订单信息
 */
// router.get('/getOrder', function(req, res, next) {
//     const purchase_id = req.query.purchase_id;
//     Order.findOne({ purchase_id: purchase_id }, function(err, doc) {
//         if (err) {
//             res.json({
//                 status: 100,
//                 msg: err.message
//             })
//         } else {
//             if (doc) {
//                 res.json({
//                     status: 200,
//                     msg: '获取指定订单成功',
//                     result: {
//                         orderList: doc
//                     }
//                 })
//             }
//         }
//     })
// })

/**
 * 获取商品列表
 */
router.get('/getOrderList', function(req, res, next) {
    Order.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 200,
                    msg: '获取订单列表成功',
                    result: {
                        orderList: doc
                    }
                })
            }
        }
    })
})

/**
 * 添加指定订单
 */
// router.post('/add', function(req, res, next) {
//     const params = req.body;
//     Order.update({ purchase_id: params.purchase_id }, { $set: params }, { upsert: true }, function(err, doc) {
//         if (err) {
//             res.json({
//                 status: 100,
//                 msg: err.message
//             })
//         } else {
//             res.json({
//                 status: 200,
//                 msg: '添加管理员成功'
//             })
//         }
//     })
// })

/**
 * 删除指定订单
 */
// router.post('/delete', function(req, res, next) {
//     const id = req.body.id;
//     Order.remove({ _id: id }, function(err) {
//         if (err) {
//             res.json({
//                 status: 100,
//                 msg: '删除失败'
//             })
//         } else {
//             res.json({
//                 status: 200,
//                 msg: '删除订单成功'
//             })
//         }
//     })
// })

/**
 * 编辑商家信息
 */

// router.post('/edit', function(req, res, next) {
//     const params = req.body;
//     Order.update({ _id: params._id }, params, function(err) {
//         if (err) {
//             res.json({
//                 status: 100,
//                 msg: '修改订单失败'
//             })
//         } else {
//             res.json({
//                 status: 200,
//                 msg: '修改订单成功'
//             })
//         }
//     })
// })

module.exports = router;