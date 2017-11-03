const express = require('express');
const Router  = express.Router();
const model   = require('./model');
const User    = model.getModel('user');

// 用户列表
Router.get('/list', function(req, res){
    User.find({}, function(err, doc){
        return res.json(doc);
    });
}); 

// 用户注册
Router.post('/register', function(req, res){
    const { user, pwd, type } = req.body.data;
    User.findOne({user:user}, function(err, doc){
        if (doc){
            return res.json({code: 1, msg: '用户名重复'});
        }
        User.create({ user, pwd, type }, function(e, d){
            if (e){
                return res.json({code: 1, msg: '后端出错了'});
            }
            return res.json({code: 0}); 
        });
    });
});

Router.get('/info', function(req, res){
    return res.json({code: '1'});
});

module.exports = Router;
