// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//output: 5 5 5 5 5
//answer: 5 5 5 5 5
//reason: Because var is function-scoped, all callbacks share the same i, which becomes 5 when they execute

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//output: 0 1 2 3 4
//answer: 0 1 2 3 4
//reason: Because let creates a new scope per iteration, each callback captures its own separate value of i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//output: 0 1 2 3 4
//answer: 0 1 2 3 4
//reason: Using an IIFE passes the current i as a parameter, so each callback gets its own copy instead of sharing one variable

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//output: 'I am fn'  ->  'I am another fn'      
//answer: 'I am fn'
//reason: setTimeout stores the function reference at the time of registration, so later changes to fn do not affect the callback

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//output: 'another obj'
//answer: { name: 'another obj' }
//reason:  The callback accesses the object by reference, so it reads the object’s latest state at execution time, not its value at definition time