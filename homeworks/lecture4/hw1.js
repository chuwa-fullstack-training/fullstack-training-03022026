// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const regx = /<\/?[a-zA-Z]+>/g;
    const tags = html.match(regx);
    console.log(tags);

    if(!tags) return true;
    if(tags.length%2!==0) return false;

    const stack = [];
    for (const tag of tags) {
        if (tag.startsWith('</')) {
            const name = tag.slice(2, -1);
            if (stack.length === 0 || stack[stack.length - 1] !== name) {
                return false;
            }
            stack.pop();
        } else {
            const name = tag.slice(1, -1);
            stack.push(name);
        }
    }

    return stack.length === 0;
}

const html="<html><head><title>My Title</title></head></html>";
console.log(checkValidHTML(html));