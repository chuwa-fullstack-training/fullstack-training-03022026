// count 要记住一个累加的总和，每次调用加上去
function counter() {
    let sum = 0;
    return function(nums){
        if (nums != undefined){
            sum += nums;
        }
        return sum;
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8