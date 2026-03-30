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
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // 解析 URL，true 表示把 query string 解析成对象
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname;
    const iso = parsed.query.iso;
    
    // 把 iso 字符串转成 Date 对象
    const data = new Date(iso);
    let result;
    if (pathname === '/api/parsetime'){
        result = {
            hour: data.getHours(),
            minute: data.getMinutes(),
            second: data.getSeconds()
    };
}   else if (pathname ==='/api/unixtime') {
        result ={
            unixtime: data.getTime()
        };
}
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } else{
        res.writeHead(404);
        res.end();
    }
    });
    
server.listen(3000, () =>{
    console.log('Server running on port 3000');
});

/**
 * 注意点：url.parse(req.url, true) 第二个参数 true 很重要，它会把 ?iso=xxx 自动解析成 { iso: 'xxx' } 对象，不然你得自己手动拆字符串。
 * 一定写 res.end(); 告诉server 回掉结束了。
 */