var express = require('express');
var router = express.Router();
var User = require('./../models/userList')

router.get('/getUser', function(req, res, next) {
    const user_id = req.query.user_id;
    User.findOne({ user_id: user_id }, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 200,
                    msg: '获取指定会员成功',
                    result: {
                        userList: doc
                    }
                })
            }
        }
    })
})

router.get('/getUserList', function(req, res, next) {
    User.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: 100,
                msg: err.message
            })
        } else {
            if (doc) {
                res.json({
                    status: 200,
                    msg: '获取会员列表成功',
                    result: {
                        userList: doc
                    }
                })
            }
        }
    })
})

/**
 * 编辑会员信息
 */
router.post('/editUser', function(req, res, next) {
    const params = req.body;
    User.update({ user_id: params.user_id }, { levelname: params.levelname, username: params.username, usercity: params.usercity, usercall: params.usercall, userqq: params.userqq, user_expert: params.user_expert, user_bei: params.user_bei }, function(err) {
        if (err) {
            res.json({
                status: 100,
                msg: '修改会员信息失败'
            })
        } else {
            res.json({
                status: 200,
                msg: '修改会员信息成功'
            })
        }
    })
})
module.exports = router;