// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
//output: a -> c -> d -> e -> f -> b
//answer: a -> c -> e -> d -> b 
//reason: Synchronous code runs first, then Promise microtasks, and finally setTimeout macrotasks
/*
a   ← 同步
c   ← 同步
e   ← Promise内部同步
d   ← 微任务
b   ← 宏任务
*/


// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
//output: 1 -> success -> start 
//answer: 1 -> start -> success 
//reason: The Promise executor runs synchronously, while the .then callback is a microtask that runs after synchronous code
/*
1       ← Promise同步
start   ← 主线程同步
success ← 微任务
*/