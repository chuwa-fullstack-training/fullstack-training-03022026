/*
* map    → 每个元素变一下，数量不变    [1,2,3] → [2,4,6]
* filter → 留下符合条件的，数量变少    [1,2,3,4] → [2,4]
* reduce → 全部合成一个东西           [1,2,3] → 6
*/

// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleNumber(arr){
    return arr.map(num => num * 2);
}
console.log(doubleNumber([1, 2, 3, 4]))

// 2. Given an array of numbers, return an array of numbers that are even.
function filterEver(arr){
    return arr.filter(num => num %2 === 0);
}
console.log(filterEver([1, 2, 3, 4, 5, 6, 7]))

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseStr(str){
    return str.split('').reduce((acc, char) =>char + acc, '');
}
console.log(reverseStr('Hello World')); 

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattern(arr){
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)){
            return acc.concat(flattern(item));
        }
        return acc.concat(item);
    } ,[]) //.reduce((acc, item) => { ... }, []) [] reduce 需要的 是初始值
}