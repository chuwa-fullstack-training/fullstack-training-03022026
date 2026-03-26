// Hoisting
// hoisting 就是，线找到所有的var 然后把它们放在the top of the scope/fiction。

// 1.
var x;
var y;
if (x !== 3) {
  console.log(y); // undefined
  y = 5;
  if (y === 5) {
    x = 3; 
  }
  console.log(y); // 5
}
if (x === 3) {
  console.log(y); // 5
}


// 2.
var x; // 声明提上来（重复的忽略）
x = 3;
if (x === 3) {
  x = 2;
  console.log(x);
}
console.log(x);

