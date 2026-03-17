/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url'); // 必须引入 url 模块来解析参数

//创建一个 Web 服务器。每当有请求进来，这个回调函数就会执行
const server = http.createServer((req, res) => {
  // 使用 url.parse 解析路径和查询参数
  const parsedUrl = url.parse(req.url, true);//req.url 包含请求的完整路径（例如 /home.html?name=John）
                                            //true 会告诉 Node.js 将查询字符串（Query String）解析为一个对象
  const { pathname, query } = parsedUrl; 
  //解构赋值：const { pathname, query } = parsedUrl; 快速获取路径名（/home.html）和参数对象（{ name: 'John' }）
  const method = req.method;

  if (method === 'GET') {
    if (pathname === '/') {
      res.end('this is the home page');
    } else if (pathname === '/about') {
      res.end('this is the about page');
    } else if (pathname === '/home.html') {
      // --- 修改点：Hint 3 & 4 (在 GET 模式下处理并显示数据) ---
      fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
          res.end('error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(html); // 先写原始 HTML 内容
          
          // 如果 URL 里有数据（比如 ?name=John&age=20）
          if (query.name || query.age) { //检查 URL 里的参数。如果存在，就继续往浏览器发送额外的 HTML 标签。
            res.write(`<hr><h3>Submitted Data:</h3>`);
            res.write(`<p>Name: ${query.name}</p>`);
            res.write(`<p>Age: ${query.age}</p>`);
          }
          res.end();//结束响应
        }
      });
    } else {
      res.end('this is the 404 page');
    }

  } else if (method === 'POST') {
    if (pathname === '/create-post') {
      let body = [];
      req.on('data', chunk => {//req.on('data') 监听每一块数据的到达
        body.push(chunk);
      });
      req.on('end', () => {//req.on('end') 表示数据接收完毕
        // 拿到提交的原始数据，例如 "name=John&age=20"
        const parsedBody = Buffer.concat(body).toString();
        
        // --- 修改点：Hint 1 & 2 (重定向) ---
        // 1. 设置状态码为 302 (重定向)
        res.statusCode = 302;  //这是一种告诉浏览器“请去另一个地址”的信号。
        // 2. 设置 Location 头部，把数据拼接到 url 后面
        res.setHeader('Location', '/home.html?' + parsedBody);
        //Location 响应头：指定浏览器应该去哪里。这里我们将原始数据（如 name=John&age=20）直接拼接到 URL 后面。
        res.end(); 
      });
    } else {
      res.end('this is the 404 page');
    }
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
