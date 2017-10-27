var express = require('express');
var router = express.Router();

var Shop = require('./../models/shopList')
    /* 商家列表 */
router.get('/getShopList', function(req, res, next) {
    Shop.find({}, function(err, doc) {
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

/**
 * 添加指定商家
 */
router.post('/add', function(req, res, next) {
    const params = req.body;
    Shop.update({ shop_name: params.shop_name }, { $set: params }, { upsert: true }, function(err, doc) {
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
    Shop.remove({ _id: id }, function(err) {
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

/**
 * 编辑商家信息
 */
router.post('/editShop', function(req, res, next) {
    const params = req.body;
    Shop.update({ shop_id: params.shop_id }, { shop_type: params.shop_type, shop_level: params.shop_level, shop_name: params.shop_name, shop_short: params.shop_short, shop_accout: params.shop_accout, shop_credit: params.shop_credit, shop_cr_human: params.shop_cr_human, shop_cr_telephone: params.shop_cr_telephone, shop_cr_weixi: params.shop_cr_weixi, shop_cr_address: params.shop_cr_address, shop_cr_alert: params.shop_cr_alert, shop_Stall: params.shop_Stall, shop_market: params.shop_market, shop_floor: params.shop_floor, shop_contact: params.shop_contact, shop_scope: params.shop_scope, shop_ranking: params.shop_ranking, shop_password: params.shop_password, shop_confirm: params.shop_confirm, shop_auth: params.shop_auth, shop_status: params.shop_status }, function(err) {
        if (err) {
            res.json({
                status: 100,
                msg: '修改商家信息失败'
            })
        } else {
            res.json({
                status: 200,
                msg: '修改商家信息成功'
            })
        }
    })
})

module.exports = router;