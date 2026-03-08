// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.3
// answer: 0.30000000000000004
// explaination: JavaScript uses floating-point arithmetic, so 0.1 and 0.2 cannot be represented exactly in binary.
console.log(0.1 + 0.2 == 0.3); // false
// answer: false
// explaination: as question1 said, 0.1 + 0.2 is not exactly 0.3
console.log(1 +  "2" + "2"); // 122
// answer: 122
// explaination: when '+' is used with a string, JavaScript converts numbers to strings and concatenates them
console.log(1 +  +"2" + "2"); //NaN
// answer: 32
// explaination: +"2" converts the string "2" to the number 2, so 1 + 2 = 3, then "2" is concatenated.
console.log(1 +  -"1" + "2"); // NaN
// answer: 02
// explaination: similar with the question above, -"1" converts to -1, 1 - 1 = 0, then "2" is concatenated/
console.log(+"1" +  "1" + "2"); // NaN
// answer: 112
// explaination: +"1" converts to number 1, but there is no + between the two "1", so just concatenates them
console.log( "A" - "B" + "2"); // NaN
// answer: NaN2
// explaination: "A" and  "B" cannot be converted to numbers, so the substraction gives NaN, then "2" is concatenated
console.log( "A" - "B" + 2); // NaN
// answer: NaN
// explaination: "A" - "B" gives NaN, and NaN plus any number is still NaN
console.log("0 || 1 = "+(0 || 1)); // 0 || 1 =  0 
// answer: 0 || 1 = 1
// explaination: 0 is falsy, so || returns the second value, 1
console.log("1 || 2 = "+(1 || 2)); // 1 || 2 =  1
// answer: 1 || 2 = 1
// explaination: 1 is truthy, so || returns the first truthy value
console.log("0 && 1 = "+(0 && 1)); // 0 && 1 =  0 
// answer: 0 && 1 = 0
// explaination: 0 is falsy, so && returns the first falsy value
console.log("1 && 2 = "+(1 && 2)); // 1 && 2 =  1 
// answer: 1 && 2 = 2
// explaination: Both values are truthy, so && returns the last value.
console.log(false == '0') // true
// answer: true
// explaination: == does type conversion, so false becomes 0 and '0' also becomes 0
console.log(false === '0') // false
// answer: false
// explaination: === checks both value and type, and boolean is not the same type as string