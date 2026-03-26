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
    // 方法能读写密码，但 user.password 拿不到,so密码不能挂在 this 上。
    let password; // pirvate variable, 外面的user.password访问不到
    this.setPassword = function(pw){
        if(pw.length < 6){
            console.log('Error: too short');
            return;
        }
        password = pw;
    }
    this.checkPassword = function(pw){
        return pw === password;
    };

}
const user = new User();
user.setPassword('123456');
user.checkPassword('123456'); // true
user.checkPassword('123'); // false
user.password; // undefined 外面拿不到 就是undefined
user.setPassword('123'); // Error
user.checkPassword('123'); // false
user.password; // undefined