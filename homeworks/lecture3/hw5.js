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
    let password = '';

    this.setPassword = function(new_password) {
        if (new_password.length < 6) {
            throw new Error('The length of password is not enough.')
        }
        password = new_password;
    };

    this.checkPassword = function(input) {
        if (password === input){
            return true;
        }
        return false;
    };
}

const user = new User();
user.setPassword('123456');

console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123'));    // false
console.log(user.password);                // undefined
// console.log(user.setPassword('123')); // Error: The length of password is not enough.