/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

// api js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// lecture7 hw1 router
const hw1Router = express.Router();
hw1Router.get('/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = '.' + req.params.ext;
    
    fs.readdir (path.join(__dirname, dir), (err, files) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        // Web 服务器，要一次性返回给浏览器。所以需要先把过滤结果存起来，再用 res.json(filtered) 一次性返回。
        const filtered = files.filter(file =>path.extname(file) === ext);
        res.json(filtered);
    })
})


//Lecture7 hw2 router
const hw2Router = express.Router();
hw2Router.get('/parsetime',(req, res) => {
    const date = new Date(req.query.iso);
    res.json({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    });
});

hw2Router.get('/unixtime', (req, res) =>{
    const date = new Date(req.query.iso);
    res.json({unixtime: date.getTime()});
});


// Listening 
app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);
app.listen(3000, () =>{console.log('Server running on port 3000');});