// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}
undefined
5
5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

2
3//还是2，因为虽然写了 var，但在同一个作用域内，这仅仅是对同一个变量 x 的重新赋值。由于没有块级作用域，这个 x 就是外面的那个 x。
