// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000)
  })
  .then(() => new Promise(resolve => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  }))
  .then(() => new Promise(resolve => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  }))
  
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  return nums.reduce((chain,num) => {
    return chain.then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

// 一轮用 reduce 然后 → 循环用递归：oneRound().then(() => loop())
// 先解决"时间不同".把数据结构从简单数字改成对象
function trafficLight() {
  const lights = [
    {color: 'red', delay: 3000},
    {color: 'green', delay: 2000},
    {color: 'yellow', delay: 1500}
  ];
  function showLight(light){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(light.color);
        resolve();
      }, light.delay);
    })
  }
  function oneRound (){
    return lights.reduce((chain, light) => {
      return chain.then(() => showLight(light));
    }, Promise.resolve());
}
  function loop() {
    oneRound().then(() => loop()); 
  }
  loop();
  } 
trafficLight();
/** 
 * oneRound()                 // 跑一轮红绿灯
 * .then(() => loop());     // 跑完之后，再调用 loop
 * oneRound() 返回的是一个 Promise，所以后面可以接 .then
 * 因为 oneRound 里用了 reduce，reduce 返回的是 Promise
 * 
 * 
 * 记住每个函数的职责：
```
showLight → 显示一个灯
oneRound  → 用 reduce 把三个灯串起来
loop      → 一轮完了再来一轮
 */
