// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// 2. Given an array of numbers, return an array of numbers that are even.
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const reversed = str.split('').reduce((acc, char) => char + acc, '');
console.log(reversed); // "dlroW olleH"
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flattened = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); 
