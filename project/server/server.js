const express = require('express');
const userRouter = require('./user');

// 新建app
const app = express();
// 开启一个中间件
app.use('/user', userRouter);

app.listen(9093, function(){
    console.log('Node app start at port 9093');
});