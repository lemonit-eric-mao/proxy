// 引入必要的Node.js模块
const express = require('express'); // 引入Express框架
const request = require('request'); // 引入request模块用于发出HTTP请求
const app = express(); // 创建一个Express应用程序实例
const port = 80; // 选择一个合适的端口号，这里设置为3000

// 创建一个Express中间件，用于处理所有进入应用程序的HTTP请求
app.use('/', (req, res) => {
    // 当接收到HTTP请求时，将请求数据(req)通过管道(pipe)发送给另一个URL(req.url)的目标，
    // 并将目标的响应通过管道(pipe)返回给客户端(res)
    req.pipe(request(req.url)).pipe(res);
});

// 启动Express应用程序，监听指定的端口
app.listen(port, () => {
    console.log(`Web服务已启动，监听端口 ${port}`);
});
