var express = require('express');
var router = express.Router();

var Order = require('./../models/orderList')
    /* 订单列表 */
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
                    msg: '获取商家列表成功',
                    result: {
                        orderList: doc
                    }
                })
            }
        }
    })
})


module.exports = router;