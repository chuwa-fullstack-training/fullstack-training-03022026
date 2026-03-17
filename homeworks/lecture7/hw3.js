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

const server = http.createServer((req, res) => {
  // 使用 url.parse 解析路径和查询参数
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
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
          if (query.name || query.age) {
            res.write(`<hr><h3>Submitted Data:</h3>`);
            res.write(`<p>Name: ${query.name}</p>`);
            res.write(`<p>Age: ${query.age}</p>`);
          }
          res.end();
        }
      });
    } else {
      res.end('this is the 404 page');
    }

  } else if (method === 'POST') {
    if (pathname === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        // 拿到提交的原始数据，例如 "name=John&age=20"
        const parsedBody = Buffer.concat(body).toString();
        
        // --- 修改点：Hint 1 & 2 (重定向) ---
        // 1. 设置状态码为 302 (重定向)
        res.statusCode = 302;
        // 2. 设置 Location 头部，把数据拼接到 url 后面
        res.setHeader('Location', '/home.html?' + parsedBody);
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
