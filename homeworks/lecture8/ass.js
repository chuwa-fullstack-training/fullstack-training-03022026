const express = require('express');
const app = express();
const path = require('path');

//设置模板引擎
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 中间件：解析 POST 请求的表单数据 (极其重要) 
app.use(express.urlencoded({ extended: true }));

// 引入你的路由模块
const hw1Router = require('./routers/hw1router');
const hw2Router = require('./routers/hw2router');
const hw3Router = require('./routers/hw3router');


// 挂载路由模块 
app.use('/hw1', hw1Router); // 访问路径以 /hw1 开头
app.use('/hw2', hw2Router); // 访问路径以 /hw2 开头
app.use('/hw3', hw3Router);

app.listen(3000, () => console.log(`App listening on port 3000!`)); 