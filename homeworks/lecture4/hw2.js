// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(nums) {
    return nums.map(n => n * 2);
}
let arr = [1, 2, 3]
console.log(double(arr));
// 2. Given an array of numbers, return an array of numbers that are even.
function even(nums) {
    return nums.filter(n => n % 2 == 0);
}
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(even(arr1));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(str) {
    return str.split('').reduce((acc, ch) => ch + acc, '');
}
let str = "Hello World";
console.log(reverse(str));
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flatten1(arr) {
    return arr.reduce((acc, cur) => acc.concat(cur), []);
}
const arr2 = [[0, 1], [2, 3], [4, 5]];
console.log(flatten1(arr2));

function flatten2(arr) {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc.concat(flatten2(cur));
        }
        else {
            return acc.concat(cur);
        }
    }, []);
}
const arr3 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flatten2(arr3));
