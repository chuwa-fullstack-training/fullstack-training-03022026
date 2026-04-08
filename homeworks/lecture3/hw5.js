/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    // implement here 
    let password;
    return {
        setPassword: (newPassword) => { 
            if (newPassword.length < 6) {
                console.error('Error:Password must be at least 6 characters long');
                return;
            }
            password = newPassword;
        },
        checkPassword: (inputPassword) => inputPassword === password
    };

}
// 1. 创建实例
const user = new User(); // 注意：如果你用的是工厂函数，不需要 'new'
// 2. 设置并检查正确密码
user.setPassword('123456');
console.log("密码检查 (123456):", user.checkPassword('123456')); // 预期: true
// 3. 检查错误密码
console.log("密码检查 (123):", user.checkPassword('123')); // 预期: false
// 4. 验证私有性 (尝试直接从外部访问)
console.log("外部访问 password 属性:", user.password); // 预期: undefined
// 5. 测试安全守卫 (尝试设置过短的密码)
console.log("--- 尝试设置短密码 ---");
user.setPassword('123'); // 预期: 打印错误信息 (Error)
// 6. 验证错误设置后，密码没被更改
console.log("短密码设置后的检查:", user.checkPassword('123')); // 预期: false
// 7. 再次验证私有性
console.log("再次确认外部访问:", user.password); // 预期: undefined
