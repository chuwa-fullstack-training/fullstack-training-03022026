// what is the output in order? and explain why?

// 1
// output should be: a c e d b
// Synchronized: a c e and then micrtask: d, then macor task b
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// output is 1 start success
// fn() is invacted so it print first and then start, then mirco task success
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
