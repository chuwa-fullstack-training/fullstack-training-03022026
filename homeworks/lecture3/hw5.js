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
    let password = null;
    this.setPassword = function(pw) {
        if (typeof pw !== 'string') {
            throw new Error("Password must be string");
        }
        if (pw.length < 6) {
            throw new Error("Password must be at least 6 characters");
        }
        password = pw;
    }
    this.checkPassword = function(pw) {
        if (pw === password) {
            return true;
        }
        else {
            return false;
        }
    } 
}

// test
// let user = new User();
// user.setPassword('123456abc')

// console.log(user.checkPassword('123456abc'));
// console.log(user.checkPassword('123'));
// console.log(user.setPassword(123));
// console.log(user.setPassword('123'));
// console.log(user.password);