var express = require('express');
var router = express.Router();

var Shop = require('./../models/shopList')
/* 商家列表 */
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

router.get('/getShop', function(req, res, next) {
    const shop_id = req.query.shop_id;
    Shop.findOne({ shop_id: shop_id }, function(err, doc) {
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

module.exports = router;