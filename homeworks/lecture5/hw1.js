// what is the output of the following code? and explain why?

// 1
// ouput is 5 5 5 5 5， becasue var is not block-scoped, they all sharing the same varablie i, after 1 sec, the for loop has finished, so output 5 times 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// output is 0 1 2 3 4. let has block scope, so each iteration of the loop has its own i variable, and the value of i is preserved in the closure created by the arrow function passed to setTimeout. Therefore, when the timeout callback executes after 1 second, it logs the correct value of i for each iteration.
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// output is 0 1 2 3 4 
// it's a fix for the IIFE, before let intrudced, put the i outside, the IIFE creates a new scope for each iteration of the loop, and the value of i is passed as an argument to the IIFE. This way, when the timeout callback executes after 1 second, it logs the correct value of i for each iteration.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// output is I am fn
// setTimeout(fn) will immeiately put the fn' value in it, and dont wait for 1 sec,s so the ouput is 'i am fn'
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// output is {name: another obj}
// setTimeout(() => is put fn in it, and only execute when the fn is called and wehn the try to read teh obj, the obj already changed to another obj. 
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';