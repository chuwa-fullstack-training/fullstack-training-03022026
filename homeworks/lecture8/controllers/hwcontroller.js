const fs = require('fs');
const path = require('path');

// 导出控制器函数集
module.exports = {
    // 任务 1: 文件过滤器 (Params 模式)
    handleHW1: (req, res) => {
        // 从路径参数中提取 dir 和 ext 
        const { dir, ext } = req.params;

        // 限制：仅支持当前目录下一级 [作业要求]
        // 使用 path.join 确保路径解析在不同系统下都正确
        const targetDir = path.join(__dirname, '..', dir);

        fs.readdir(targetDir, (err, files) => {
            if (err) {
                // 如果找不到文件夹，返回 404 或 500 错误 
                return res.status(404).send(`Directory '${dir}' not found.`);
            }

            // 逻辑重用：过滤符合后缀的文件 
            const filteredFiles = files.filter(file =>
                path.extname(file) === '.' + ext
            );
            // 使用 join('\n') 将数组元素用换行符连接起来
            const output = filteredFiles.join('\n');

            // 告诉浏览器这是纯文本，这样 \n 才能起作用
            res.setHeader('Content-Type', 'text/plain');
            res.send(output);
        });
    },

    // 任务 2: 时间解析器 (Query String 模式)
    handleHW2: (req, res) => {
        // 从查询字符串中获取 iso 参数
        const iso = req.query.iso;

        if (!iso) {
            return res.status(400).send("Please provide an 'iso' query string.");
        }

        const date = new Date(iso);

        // 检查日期是否有效
        if (isNaN(date.getTime())) {
            return res.status(400).send("Invalid Date format.");
        }

        // 根据请求的具体路径返回不同的 JSON 结构 
        if (req.path === '/parsetime') {
            res.json({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            });
        } else if (req.path === '/unixtime') {
            res.json({
                unixtime: date.getTime()
            });
        } else {
            res.status(404).end();
        }
    },
    renderHome: (req, res) => {
        // 从 Query String 获取数据并传给 Pug 模板
        const { name, age } = req.query;
        res.render('home', { name, age });
    },

    // POST /hw3/create-post
    createPost: (req, res) => {
        // 直接从 req.body 获取表单数据 (得益于 express.urlencoded 中间件) 
        const { name, age } = req.body;

        // 重定向回主页，并将数据拼接到 URL 中 
        res.redirect(`/hw3/home?name=${name}&age=${age}`);
    }
};