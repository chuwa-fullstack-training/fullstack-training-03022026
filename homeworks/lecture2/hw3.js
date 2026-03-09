// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
0.3
//0.30000000000000004 计算机内部使用二进制浮点数表示法（IEEE 754 标准）。
//0.1 和 0.2 在二进制中都是无限循环小数，相加时会产生微小的舍入误差
console.log(0.1 + 0.2 == 0.3);
true
//false 因为结果不是精准的0.3
console.log(1 +  "2" + "2");
122
//correct
console.log(1 +  +"2" + "2");
1 22
//32   +"2"将字符强制的转化回了数字格式 
console.log(1 +  -"1" + "2");
Error
//02 -"1" 将其转为数字 -1
console.log(+"1" +  "1" + "2");

112
//correct
console.log( "A" - "B" + "2");
Error
//NaN2 "A" - "B" 无法转为有效数字，结果为 NaN
console.log( "A" - "B" + 2);
Error
//NaN NaN + 2 依然是 NaN
console.log("0 || 1 = "+(0 || 1));
0 || 1 = true
//0 || 1 = 1 || 找第一个“真”值

console.log("1 || 2 = "+(1 || 2));
1 || 2 = true
//1 || 2 = 1
console.log("0 && 1 = "+(0 && 1));
0 && 1 = false
//0 && 1 = 0 && 找第一个“假”值
console.log("(0 && 1)"+(1 && 2));
(0 && 1)true
//0 && 1 = 2 1 是真，继续往后找，直到遇到假值或最后一个值。这里返回 2
console.log(false == '0')
true
//correct 双等号会进行隐式类型转换。false 被转为数字 0，字符串 '0' 也被转为数字 0。0 == 0 为真。
console.log(false === '0')
false
//correct 三等号要求类型和值完全一致。一个是 boolean，一个是 string，类型不同直接返回 false
