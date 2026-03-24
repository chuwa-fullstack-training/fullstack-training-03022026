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
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const hw1Router = express.Router();
const hw2Router = express.Router();
//hw1
hw1Router.get('/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = '.' + req.params.ext;
    const folderPath = path.join(__dirname, dir);

    fs.readdir(folderPath, (err, files) => {
        if (err) {
        res.send('error');
        return;
        }
        const result = [];
        for (const file of files) {
        if (path.extname(file) === ext) {
            result.push(file);
        }
        }
        res.send(result.join('\n')); // (one file per line)
    });
});
//hw2
hw2Router.get('/api/parsetime', (req, res) => {
    const iso = req.query.iso;
    const date = new Date(iso);

    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();
    const result = {
        hour: hour,
        minute: minute,
        second: second
    }

    res.json(result);
});

hw2Router.get('/api/unixtime', (req, res) => {
    const iso = req.query.iso;
    const date = new Date(iso);

    const result = {
        unixtime: date.getTime()
    };

    res.json(result);
});



app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});