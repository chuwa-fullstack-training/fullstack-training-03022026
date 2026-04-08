// 1. use `promise` to print 1, 2, 3 in every 1 second
async function print() {
  // your code here
  for (let i = 1; i <= 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 等待1秒
    console.log(i); // 打印当前数字
  }
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function printList() {
  // your code here
  console.log("第二题先等待 4 秒再运行...");
  await delay(4000);
  for (let num of nums) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 等待1秒
    console.log(num); // 打印当前数字
  }
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
const colors = ['red', 'green', 'yellow'];
async function trafficLight() {

  // your code here
  console.log("第三题先等待 10秒再运行...");
  await delay(10000);
  let count = 0;
  while (count < 2) {
    for (const color of colors) {
      console.log(color);
      await delay(1000); // 每个颜色持续1秒
    }
    count++;
  }

}
trafficLight();
