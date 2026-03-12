// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let count = 1;
  function printer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(count);
        count++;
        resolve(count);
      }, 1000);
    });
  }

  Promise.resolve().then(printer).then(printer).then(printer);
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printer(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }

  nums.reduce((acc, cur) => {
    return acc.then(() => {
      return printer(cur);
    });
  }, Promise.resolve());
}
// printList();
// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let light = ["red", "green", "yellow"];

  function printer(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(light[index % 3]);
        index++;
        resolve(index);
      }, 1000);
    }).then(printer);
  }
  let index = 0;
  printer(index);
}

trafficLight();
