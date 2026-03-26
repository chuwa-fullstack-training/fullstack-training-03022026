/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
// 思路就是：看调用方式反推返回值 sum(2)(3) 能连续调两次，说明第一次调用必须返回函数
function sum(a, b) {
    if (b !== undefined) {
        return a+b;
    } 
    // 第一次调用：b 是 undefined → 返回 function(b) { return 2 + b }
    // 第二次调用：传入 3 → 2 + 3 = 5
    return function(b){
        return a + b; // 这里的 a 就是闭包记住的那个 2
    };

}
