// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let m = list[0];
    for (let i = 0; i < list.length; i ++){
        if (list[i] > max) {
            m = list[i];
        }
    }
    return m;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l = 0, r = list.lenghth -1;
    while (l < r){
        let temp = list[l];
        list[l] = list[r];
        list[r] = temp;
        l++;
        r--;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i = 0; i<list.lenghth; i++) {
        if (list[i] === element){
            count += 1;
        }
        if (count >= 2){
            return true;
        }
    }
    return false;
}