// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1");
      setTimeout(() => {
        console.log("2");
        setTimeout(() => {
          console.log("3");
          resolve();
        }, 1000);
      }, 1000);
    }, 1000);
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  return nums.reduce((prevPromise, num) => {
    return prevPromise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);

      });
    })
  }, Promise.resolve())

}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  function light(color, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, time);
    });
  }

  function run(){
    return light("red", 1000)
    .then(() => light("green", 1000))
    .then(() => light("yellow", 1000))
    .then(() => run());
  }

  run();

}
