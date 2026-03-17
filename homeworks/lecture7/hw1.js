/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

// your code here
//引入核心模块
const fs = require('fs');
const path = require('path');
/*
process.argv[0] Node.js 程序的绝对路径。也就是“是谁在运行这个脚本” /usr/local/bin/node
process.argv[1] 当前执行的 JS 文件的绝对路径。也就是“运行的是哪个文件” /Users/yourname/hw1.js
process.argv[2] 用户传入的第一个真正参数./myFolder
process.argv[3] 用户传入的第二个参数txt
*/
const folder = process.argv[2]; // 文件夹路径
const ext = process.argv[3];    // 要过滤的后缀（例如 'txt'）
fs.readdir(folder, (err, files) => { //readdir是目录
  if (err) {
    return console.error(err);
  }
  // 开始循环处理每一个文件
  files.forEach(file => {
    // path.extname(file) 会得到类似 '.txt' 或 '.js' 的字符串
    // 我们把它跟 '.' + ext 拼接后的结果进行对比
    if (path.extname(file) === '.' + ext) {
      console.log(file); // 符合条件，打印文件名
    }
  });
  
});
