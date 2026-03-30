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

const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET') {
    if (url === '/') {
      res.end('this is the home page');
    } else if (url === '/about') {
      res.end('this is the about page');
      //2: read home.html's query string and display it on the page
    } else if (url.startsWith('/home.html')) {
      fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
          res.end('error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(html);
          // to see if we have query string or not
          const urlObj = new URL(url, 'http://localhost:3000');
          const title = urlObj.searchParams.get('title');
          const content = urlObj.searchParams.get('content');

          if (title || content){
            res.write(`<h2>Submitted Data:<h2>`);
            res.write(`<p>Title: ${title}</p>`);
            res.write(`<p>Content: ${content}</p>`);
          }
          res.end();
        }
      });
    } else {
      res.end('this is the 404 page');
    }
  } else if (method === 'POST') {
    if (url === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      // 1: redirect to home.html with query string
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        res.writeHead(302, {'Location': '/home.html?' + parsedBody});
        res.end();
      });
    } else {
      res.end('this is the 404 page');
    }
  } else {
    res.end('Unsupported method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});



// 302 是 HTTP 状态码，意思是"你要的东西搬家了，去这个新地址"。浏览器收到 302 会自动跳转到 Location 指定的地址。