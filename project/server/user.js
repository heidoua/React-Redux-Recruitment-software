const express = require('express'),
      Router  = express.Router(),
      utils   = require('utility'),
      model   = require('./model'),
      User    = model.getModel('user'),
      _filter = {'pwd': 0, '__v': 0};

// 用户列表
Router.get('/list', function(req, res){
    User.find({}, function(err, doc){
        return res.json(doc);
    });
}); 

// 用户注册
Router.post('/register', function(req, res){

    const { user, pwd, type } = req.body;
    User.findOne({user:user}, function(err, doc){
        if (doc){
            return res.json({code: 1, msg: '用户名重复'});
        }
        User.create({ user, type, pwd: md5Password(pwd) }, function(e, d){
            if (e){
                return res.json({code: 1, msg: '后端出错了'});
            }
            return res.json({code: 0}); 
        });
    });
});

// 用户登录
Router.post('/login', function(req, res){
    const { user, pwd } = req.body;
    User.findOne({user: user, pwd: md5Password(pwd)}, _filter, function(err, doc){
        if (!doc){
            return res.json({code: 1, msg:'用户名或者密码错误'});
        }
        // cookie保存登录状态
        res.cookie('userId', doc._id);
        return res.json({code:0, data:doc});
    });
});

Router.get('/info', function(req, res){
    const { userId } = req.cookies;

    return res.json({code: 1});
    // if (!userId){
    //     return res.json({code: 1});
    // }
    // User.findOne({_id: userId}, function(req, res){
    //     if (err){
    //         return res.json({code: 1, msg: '后端出错了'});
    //     }
    //     if (doc){
    //         return res.json({code:0, data: res});
    //     }
    // });
});

// 密码加密
function md5Password(pwd){
    const salt = 'ffy_love_gdd_955_HJASDL8@#@!$%$_^&^*^&^';
    return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;
