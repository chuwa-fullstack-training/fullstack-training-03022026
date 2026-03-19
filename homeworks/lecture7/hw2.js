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
import http from "http";
import url from "url";

const port = process.argv[2];
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const iso = parsedUrl.query.iso;
    const date = new Date(iso);
    // End with Z, so use UTC
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();

    if (parsedUrl.pathname === "/api/parsetime"){
        const result = {
            hour: hour,
            minute: minute,
            second: second
        };
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(result));
        
    }
    // timestamp so use getTime()
    if (parsedUrl.pathname === "/api/unixtime"){
        const result = {
            unixtime: date.getTime()
        };
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(result));

    }



    // console.log(parsedUrl.pathname);
    // console.log(parsedUrl.query);
    // console.log(parsedUrl.query.iso);
    // console.log(date);
});

server.listen(port);