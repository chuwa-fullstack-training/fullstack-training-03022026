// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = list[0];
    for (let i=0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }
    }
    return max;
}
// test1
// let list = [1, 2, 3, 4, 6, 6, 8, 1, 5];
// console.log(largestElement(list));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for (let i = 0; i < (list.length / 2); i++) {
        let j = list.length - 1 - i;
        let curr = list[i];
        list[i] = list[j];
        list[j] = curr;
    }
    return list;

}
// test 2
// let list = [1, 4, 3, 8, 15, 7];
// console.log(reverseList(list));


// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element){
            count++;
        }
        if (count >= 2) {
            return true;
        }

    }
    // if (count >= 2) {
    //     return true;
    // }

    return false;
}

// test 3
let list = [1, 2, 3, 2];
console.log(checkTwice(list, 2));