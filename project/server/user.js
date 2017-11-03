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

Router.get('/info', function(req, res){
    return res.json({code: '1'});
});

module.exports = Router;
