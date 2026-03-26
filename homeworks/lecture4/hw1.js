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
    while (i< html.length){
        if (html[i] === '<'){
            let j = i + 1;
            while (j < html.length && html[j] !== '>'){
                j+= 1;
            }
            if (j >= html.length) break; // edge case
            // 提取 '<' 和 '>' 之间的内容
            let tag = html.slice(i+1, j);
            if (tag[0] !== '/'){
                // 判断是开标签还是闭标签，如果是开标签就入栈，闭标签就出栈
                stack.push(tag);
            }else{
                let name = tag.slice(1);
                if (!stack.length || name != stack.pop()){
                    return false;
                }
            }
        } else {   // 当前字符不是 '<'，是普通文字，往后走一步。和第一个 if 是一套
            i += 1;
        }
    }
    return true;
}

