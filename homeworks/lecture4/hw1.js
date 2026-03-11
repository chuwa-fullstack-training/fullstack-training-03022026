// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
//不会写，问的deepseek
    const stack = [];
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\s*[^>]*>/g;
    let match;
    
    while ((match = tagRegex.exec(html)) !== null) {
        const fullTag = match[0];
        const tagName = match[1];
        
        // Check if it's a closing tag
        if (fullTag.startsWith('</')) {
            // If stack is empty or top of stack doesn't match, invalid
            if (stack.length === 0 || stack[stack.length - 1] !== tagName) {
                return false;
            }
            // Pop the matching opening tag
            stack.pop();
        } 
        // Check if it's an opening tag (not self-closing)
        else if (!fullTag.endsWith('/>')) {
            // Push opening tag onto stack
            stack.push(tagName);
        }
        // Self-closing tags are ignored as they don't need pairing
    }
    
    // Valid if stack is empty (all tags properly closed)
    return stack.length === 0;
}

// Test cases
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>')); // false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html')); // true
console.log(checkValidHTML('<div><p>Text</p></div>')); // true
console.log(checkValidHTML('<div><p>Text</div></p>')); // false
console.log(checkValidHTML('<img src="test.jpg" />')); // true (self-closing tag)
console.log(checkValidHTML('<div><br /></div>')); // true
