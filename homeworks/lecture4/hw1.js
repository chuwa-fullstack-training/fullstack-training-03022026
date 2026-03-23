// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];
    let i = 0;

    while (i < html.length) {
        if (html[i] === '<') {
            let j = i;
            while (j < html.length && html[j] !== '>') {
                j++;
            }
            let tag = html.slice(i + 1, j);

            if (tag[0] === '/') {
                let name = tag.slice(1);
                if (stack.length === 0) {
                    return false;
                }
                if (stack.pop() !== name) {
                    return false;
                }
            }
            else {
                stack.push(tag);
            }
            i = j + 1;
        }
        else {
            i++;
        }
    }
    return stack.length === 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'));

