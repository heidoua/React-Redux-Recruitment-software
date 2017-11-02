const mongoose = require('mongoose');

// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/test_mongo';
mongoose.connect(DB_URL);