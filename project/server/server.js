const express = require('express');
const mongoose = require('mongoose');

// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/test_mongo';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo connect success');
});
// 类似于mysql的表， mongo里面有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type:String, require: true},
    age: {type: Number, require: true} 
}));

// 新增数据
// User.create({
//     user: 'xiao',
//     age: 18
// }, function(err,  doc){
//     if (!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });

// 删除数据
// User.remove({age: 18}, function(err, doc){
//     console.log(doc);
// });

// 更新数据
// User.update({'user':'xiao'}, {'$set':{age:80}}, function(err, doc){
//     console.log(doc);
// });

// 新建app
const app = express();

// 返回html 
app.get('/', function(req, res){
    res.send('<h1>hello express,I am learning</h1>');
});

// 返回json数据
app.get('/data', function(req, res){
    // 获取mongo的数据
    User.find({}, function(err, doc){
        res.json(doc);     
    });
    // res.json({name: 'learning', type: 'react'});
});

app.listen(9093, function(){
    console.log('Node app start at port 9093');
});