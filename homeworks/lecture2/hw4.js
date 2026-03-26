// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
} // 没掉用，没有输出。7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
} //没掉用，没有输出。 5

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a); //3

// 4.
var a = 5;
function first() {
  a = 6;
} 

function second() {
  console.log(a);
}
first(); 
second(); //6，first 函数里没用var声明 a = 6, 调用的是global 的 a = 5，但是 执行first() 用的是函数里面的6，所以后面second（） 是6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
} // 没掉用，没有输出。7

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); //1，hositing function a() {} to the top of function b
