// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let arr = [1, 2, 3 , 4];
let arr2 = arr.map(num => 2*num);
 console.log(arr);
 console.log(arr2);
// 2. Given an array of numbers, return an array of numbers that are even.
let arr3 = arr.filter(num => num % 2 === 0);
 console.log(arr3);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let str = "Hello World";
// let reversed = str.split('').reduce((result, ch) => {
//     newResult = ch + result;
//     return newResult;
// }, ''); // initial ‘’
let reversed = str.split('').reduce((result, ch) => ch + result, ''); // initial ‘’
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
function flatten(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(flatten(item)); // recursion
    } else {
      return result.concat(item);
    }
  }, []);
}
console.log(flatten([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]
console.log(flatten([[0, 1], [2, 3], [4, [5, 6]]])); // [0, 1, 2, 3, 4, 5, 6]