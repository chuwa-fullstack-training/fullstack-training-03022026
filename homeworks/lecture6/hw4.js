/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
// 内置方法的话 num.toLocaleString()


function format(num) {
  // your code here
  let [inte, decimal] = num.toString().split('.');
  let res = '';
  let count = 0;
  
  for (let i = inte.length - 1; i >= 0; i --){
    // 必须 先 count → 再拼字符 → 再判断
    count += 1;
    res = inte[i] + res;
    if (count % 3 === 0 && i !== 0){
      res = ',' + res;
    }
  }
  return decimal ? res + '.' + decimal : res;  //条件 ? 为true的值 : 为false的值
}

/** 
 * 思考链路总结
小数部分不加逗号 → 先 split('.') 拆开
从右往左每 3 位加逗号 → 从右往左遍历
怎么知道到了 3 位 → count 计数器，count % 3 === 0
怎么拼字符串 → 往前面拼：integer[i] + result
开头不加逗号 → i !== 0
最后拼回小数 → decimal ? result + '.' + decimal : result
 */