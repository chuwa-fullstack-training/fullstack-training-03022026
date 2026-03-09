/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // 想了半天也不会，问的gemini
    // 1. 获取第一个参数（无论是哪种调用方式，第一个参数总是在这里）
    var x = arguments[0];

    // 2. 检查参数个数，判断是哪种调用方式
    if (arguments.length === 2) {
        // 方式 A: sum(2, 3)
        // 直接返回两个参数的和
        return x + arguments[1];
    } else {
        // 方式 B: sum(2)(3)
        // 此时只传了一个参数，我们需要返回一个“新函数”
        return function(y) {
            // 这个内部函数利用“闭包”记住了外层的 x是2，y是3
            return x + y;
        };
    }
}

// 验证结果
console.log(sum(2)(3) === 5); // 输出: true
console.log(sum(2, 3) === 5); // 输出: true

