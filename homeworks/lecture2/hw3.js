// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.300004
console.log(0.1 + 0.2 == 0.3);
//false
console.log(1 + "2" + "2");
//122
console.log(1 + +"2" + "2");
//32
console.log(1 + -"1" + "2");
//02
console.log(+"1" + "1" + "2");
//112
console.log("A" - "B" + "2");
//NaN2
console.log("A" - "B" + 2);
//NaN
console.log("0 || 1 = " + (0 || 1));
//0 || 1 = 1

console.log("1 || 2 = " + (1 || 2));

//1 || 2 = 1
console.log("0 && 1 = " + (0 && 1));

//0 && 1 = 0 && 找第一个“假”值
console.log("(0 && 1)" + (1 && 2));

//(0 && 1)2 1 是真，继续往后找，直到遇到假值或最后一个值。这里返回 2
console.log(false == '0')
//true
//correct 双等号会进行隐式类型转换。false 被转为数字 0，字符串 '0' 也被转为数字 0。0 == 0 为真。
console.log(false === '0')
//false
//correct 三等号要求类型和值完全一致。一个是 boolean，一个是 string，类型不同直接返回 false
