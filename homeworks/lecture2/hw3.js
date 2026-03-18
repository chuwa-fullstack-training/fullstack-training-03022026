// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); //0.3
// answer: 0.30000000000000004
// explaination: JavaScript uses binary floating-point representation, and numbers like 0.1 cannot be represented exactly, so small precision errors occur.

console.log(0.1 + 0.2 == 0.3); //true
// answer: false
// explaination: Because JavaScript uses binary floating-point representation, numbers like 0.1 and 0.2 cannot be represented exactly, so their sum is slightly larger than 0.3, making the comparison false.

console.log(1 +  "2" + "2"); // '122'
// answer: ‘122’
// explaination: JavaScript evaluates expressions from left to right, and if a string is involved, the + operator performs string concatenation instead of numeric addition.

console.log(1 +  +"2" + "2"); //'1 22'
// answer: ’32‘
// explaination:The unary plus converts the string “2” into a number, so the expression becomes numeric addition first, and then string concatenation.
// +"2"  // → 2 string to number

console.log(1 +  -"1" + "2"); //'02'
// answer: '02'
// explaination: The unary minus converts the string to a number and negates it, so the expression performs numeric addition first, then string concatenation.

console.log(+"1" +  "1" + "2"); // '112'
// answer: '112'
// explaination: The unary plus converts “1” to a number, but once a string is involved, the rest of the operations become string concatenation.

console.log( "A" - "B" + "2"); // NaN
// answer: 'NaN2'
// explaination: The - operator converts operands to numbers, resulting in NaN, and then + performs string concatenation when combined with a string.

console.log( "A" - "B" + 2); // NaN
// answer: NaN
// explaination: The - operator converts both operands to numbers, resulting in NaN, and since there is no string involved, the + operator performs numeric addition, so the final result is NaN.

console.log("0 || 1 = "+(0 || 1)); // '0 || 1 = 1'
// answer: '0 || 1 = 1'
// explaination: The || operator returns the first truthy value, and then the + operator performs string concatenation.

console.log("1 || 2 = "+(1 || 2)); // NaN
// answer: '1 || 2 = 1'
// explaination: The OR operator returns the first truthy value, so since 1 is truthy, it is returned and concatenated as a string.

console.log("0 && 1 = "+(0 && 1)); // '0 && 1 = 0'
// answer: '0 && 1 = 0'
// explaination: The AND operator returns the first falsy value, or the last value if all operands are truthy.

console.log("1 && 2 = "+(1 && 2)); // NaN
// answer: '1 && 2 = 2'
// explaination: The AND operator returns the first falsy value, and if all values are truthy, it returns the last one.
// a || b → 找第一个 true  如果没有，就返回最后一个值
// a && b → 找第一个 false 没有 falsy → 返回最后一个

console.log(false == '0') // true
// answer: true
// explaination: When using ==, JavaScript converts false to 0 and '0' to 0, so the comparison becomes 0 == 0, which is true.

console.log(false === '0') // false
// answer: false
// explaination: The strict equality operator === does not perform type coercion, so values with different types are always unequal.