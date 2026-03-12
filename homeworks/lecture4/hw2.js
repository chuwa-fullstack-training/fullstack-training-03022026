// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let arr1 = [1,2,3,4];
let res1 = arr1.map(num=>2*num);
console.log(res1);

// 2. Given an array of numbers, return an array of numbers that are even.
let arr2 = [1,2,3,4];
let res2 = arr2.filter(num=>num%2===0);
console.log(res2);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const s = "Hello World";
const res3 = [...s].reduce((acc,cur)=>{return cur+acc;},"");
console.log(res3);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr = [[0, 1], [2, 3], [4, [5, 6]]];
const flatten = (arr) => arr.reduce((acc,cur)=>{
    if(Array.isArray(cur)){
        return acc.concat(flatten(cur));
    }
    return acc.concat(cur);
},[]);
