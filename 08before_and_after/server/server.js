const express = require('express');
// 新建app
const app = express();

// 返回html 
app.get('/', function(req, res){
    res.send('<h1>hello express,I am learning</h1>');
});

// 返回json数据
app.get('/data', function(req, res){
    res.json({name: 'learning', type: 'react'});
});

app.listen(9093, function(){
    console.log('Node app start at port 9093');
});