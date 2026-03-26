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

const app = express();
const hw2Router = express.Router();

hw2Router.get('/', async (req, res) => {
    const query1 = req.query.query1;
    const query2 = req.query.query2;

    if (!query1 || !query2) {
      res.status(400).json({ error: 'query1 and query2 are required' });
      return;
    }

    // try...catch handles errors from async operations such as failed fetch requests
    try {
      const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
      const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;

      const response1 = await fetch(url1);
      const data1 = await response1.json();

      const response2 = await fetch(url2);
      const data2 = await response2.json();

      // Only wants the first result
      const firstHit1 = data1.hits[0];
      const firstHit2 = data2.hits[0];

      // Only keep the two required fields
      const result1 = {
        created_at: firstHit1.created_at,
        title: firstHit1.title
      };

      const result2 = {
        created_at: firstHit2.created_at,
        title: firstHit2.title
      };

      const finalResult = {
        // [query1] [query2] is compute property name
        [query1]: result1,
        [query2]: result2
      };

      // res.json(...)
      // automatically converts the object to JSON
      // sets the JOSN content type
      // sends the response
      res.json(finalResult);
    } catch (error) {
      res.status(500).json({ error: 'failed to fetch data' });
    }
});

app.use('/hw2', hw2Router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});