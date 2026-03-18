// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = list[0];
    for (let i = 1; i < list.length; ++i) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

// test
// let list = [0, 1, 10, 5, 7, 16, 2];
// console.log(largestElement(list));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let n = Math.floor(list.length / 2);
    for (let i = 0; i < n; ++i) {
        [list[i], list[list.length - 1 -i]] = [list[list.length - 1 - i], list[i]]
    }
    return list;
}

// test1
// let list = [1, 2, 3, 4, 5]
// console.log(reverseList(list));

// test2
// let list2 = [1, 2, 3, 4, 5, 6];
// console.log(reverseList(list2));


// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let cnt = 0;
    for (let i = 0; i < list.length; ++i) {
        if (list[i] === element) {
            cnt++;
        }        
    }
    return cnt >= 2 ? true : false;
}

// test
// list = [1, 3, 5, 7, 5];
// element = 5;
// console.log(checkTwice(list, element));