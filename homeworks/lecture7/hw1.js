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


const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = '.' + process.argv[3]; // 加上点，比如 "txt" -> ".txt" .js etc..

fs.readdir (dir, (err, files) => {
    if (err) return console.log(err);
    files
        .filter(file => path.extname(file) === ext)
        .forEach(file => console.log(file));
})

/**
 *  fs.readdir(dir, (err, files) => {...}) 这个写法是什么意思？
 * 这是 Node.js 的**回调函数（callback）**模式。拆开看：
 *   dir：你要读哪个文件夹
 *   (err, files) => {...}：这是一个回调函数，意思是"读完之后，执行这个函数"
 * 
 * .filter(file => path.extname(file) === ext)
 * files 是一个数组，比如 ['a.txt', 'b.js', 'c.txt']
 * .filter() 是数组方法，留下满足条件的元素
 * path.extname('a.txt') 返回 '.txt'
 * === ext 判断扩展名是不是我们要的
 * 
 * 
 * run 的话，terminal 到 制定path 后 node hw1.js . js
 * 这里 . 表示当前目录，js 表示你要筛 .js 文件。你也可以换成别的目录和扩展名
 * 只 run node hw1.js 会有 error，  process.argv[2] 拿不到值
 * 因为 程序需要两个参数——目录名和扩展名 node hw1.js 目录名 扩展名
 * 或者 也可以去别的地方 拿 比如说node hw1.js ../lecture6 js
 */