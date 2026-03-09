// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
7 var is global scope  // correct 最终打印局部变量 a 的当前值
// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
undifined var is hoisted as undefined first // 5 注意：true 是一个 布尔字面量,强制让 if 块内部的代码百分之百执行
// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
3 // correct 在函数内部直接写 a = 3 而没有 var/let/const 声明，JavaScript 会将其隐式创建为全局对象（如浏览器里的 window）的属性。
// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
6   6// 只输出一次6，因为只有一次console.log(a)
// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
7//correct
// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
10// 1
/*
var a = 1; // 全局变量

function b() {
  // 1. 函数声明被提升到最顶部
  function a() {} 

  // 2. 开始按顺序执行代码
  // 此时 a 指向上面那个函数对象，它是一个局部变量
  a = 10; 
  
  // 3. 执行 return，函数结束
  return; 

  // 原本在这里的 function a() {} 已经被“挪”到上面去了
}

b();
console.log(a); // 最终输出 1
*/
