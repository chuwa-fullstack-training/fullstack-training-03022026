// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if (list.length === 0) {
        return null;
    }
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    if(list.length===0){
        return null;
    }
    let left = 0;
    let right = list.length-1;
    while(left<right){
        [list[left],list[right]] = [list[right],list[left]];
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    if(list.length===0){
        return false;
    }
    let count=0;
    for(let i=0;i<list.length;i++){
        if(list[i]===element){
            count++;
        }
    }
    return count>=2 ? true:false;
}