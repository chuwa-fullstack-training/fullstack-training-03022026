/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 * 
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 * 
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */

const express = require('express');
const router = express.Router();
// 想在这个js下看不单独写个app.js 就把router挂载在app 上
const app = express(); 
app.use(router);

router.get('/hw2', async (req, res) => {
    try{
        const{query1, query2} = req.query; // 用 {} 对象解构，按名字取出 query1 和 query2
        const [res1, res2] = await Promise.all([ // Promise.all 返回一个数组，所以用 [] 数组解构，[] 数组解构 —— 按"位置"匹配
            // 并发请求两个 API，用 Promise.all 提高效率
            fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`),
            fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`)
        ]);
        const [data1, data2] = await Promise.all([ // fetch 拿到的是 Response 对象，需要调 .json() 解析
            res1.json(),
            res2.json()
        ]);

        const result = {
            [query1]: {
                created_at: data1.hits[0].created_at,
                title: data1.hits[0].title
            },
            [query2]: {
                created_at: data2.hits[0].created_at,
                title: data2.hits[0].title
            }
        };
        res.json(result);
    } catch(error) {
        res.status(500).json({error: error.message});

    }

});
module.exports = router;
app.listen(3000), () => {
    console.log('Server running on port 3000');
}

/**
 * 读输入输出 → 拆步骤 → 判断串行还是并发 → 提取需要的字段 → 组装格式 → 处理异常
 * 
 * 
 * 果 API 挂了怎么办？→ try/catch
如果 hits 是空数组怎么办？→ hits[0] 会 undefined
如果用户没传 query1 怎么办？→ 可以加参数校验
 * 
 */