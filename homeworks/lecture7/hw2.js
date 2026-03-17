/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here
//引入模块
const http = require('http');
const url = require('url');
// 定义两个专门负责生成 JSON 对象的“加工厂”
function parsetime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function unixtime(date) {
  return {
    unixtime: date.getTime()
  };
}
//创建服务器，解析URL
const server = http.createServer((req,res) =>{//用户通过浏览器开始发送请求
  const parsedUrl = url.parse(req.url, true);//拿到了原始的字符串
  const date = new Date(parsedUrl.query.iso);//将拿到的文本格式转换成JS的date对象
  let result;

  // 根据路由（Route）决定调用哪个“加工厂”
  if (parsedUrl.pathname === '/api/parsetime') {
    result = parsetime(date);
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = unixtime(date);
  }

  // JSON 响应处理
  if (result) {
    // HINT 2: 告诉客户端，我发给你的是 JSON 格式的数据
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    // 使用 JSON.stringify 将 JS 对象转换为符合要求的字符串格式发送
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
// 监听端口（通常作业会从命令行获取端口，如 process.argv[2]）
const port = process.argv[2] || 3000;
server.listen(port);
