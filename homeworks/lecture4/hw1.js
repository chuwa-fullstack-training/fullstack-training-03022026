// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];
    // Use regex to extract HTML tags; ">" is optional to handle cases like </html
    let tags =  html.match(/<\/?[a-zA-Z]+>?/g); // regular expression - regex

    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i];

        if (tag[1] === '/') {
            let info = tag.replace('</', '').replace('>', '');

            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length-1] !== info) {
                return false;
            }

            stack.pop();

        }
        else {
            let info = tag.replace('<', '').replace('>', '');
            stack.push(info);
        }
    }
    return stack.length === 0;
}

console.log(checkValidHTML("<html><head><title>My Title</title></head></html>")); // true
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>")); // false
console.log(checkValidHTML("<html><head><title>My Title</title></head></html")); // true