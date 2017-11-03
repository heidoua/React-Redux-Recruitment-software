const express      = require('express');
const userRouter   = require('./user');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

// 新建app
const app = express();
app.use(cookieParser());
// 接受post过来的参数 
app.use(bodyParser.json()); 
// 开启一个中间件
app.use('/user', userRouter);

app.listen(9093, function(){
    console.log('Node app start at port 9093');
});