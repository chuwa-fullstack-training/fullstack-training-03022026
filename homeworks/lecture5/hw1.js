// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5
//5
//5
//5
//5
// var is function scope, so all callbacks share the same i
// when the setTimeOut callbacks run, the loop has already finished and i is 5



// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//0
//1
//2
//3
//4
//5
// let is block scope, so each loop iteration creates a new i
// each callback captures its own copy of i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

//0
//1
//2
//3
//4
// IIFE creates a new local variable i for each iteration
// each callback closes over a different i

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

//'I am fn'
// setTimeout stores the current function reference when it is called
// later reassigning fn does not change the callback that was already scheduled

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//'another obj'
// the callback reads obj when it executes
// since the oject is mutated before the timeout runs, the updated object is printed