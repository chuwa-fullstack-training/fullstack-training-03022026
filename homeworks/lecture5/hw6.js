/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */

// 要求的是 多个 Promise 按顺序执行，一个完了再执行下一个， 关键词是 sequence（顺序），不是并行。
// 面试高频！模式：Promise 顺序执行 = reduce + .then 串联
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
    return urls.reduce((chain, url) => {
      return chain.then(() => fetchOne(url));
    }, Promise.resolve()).then(() => results);
  
  // implement your code here


}

// option 1
function getJSON(url) {
  // this is from hw5
  return
}

// option 2
// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

/*
## 思考链路总结
```
题目：多个 Promise 按顺序执行
→ 手动写就是 .then().then().then()
→ 但数量不固定，不能硬写
→ 重复操作 + 累积 → reduce
→ 把"累加数字"换成"串联 .then"
→ 初始值是 Promise.resolve()（空起点）
→ 每轮 return chain.then(() => fetchOne(url))
→ reduce 自动生成了完整的 .then 链
*/