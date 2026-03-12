/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let res = "";
  let copy = num.toString();
  let start = copy.indexOf('.');
  if(start===-1){
    let count = 0;
    for(let i=copy.length-1;i>=0;i--){
      if(count!=0&&count%3===0){
        res = ','+res;
      }
      res = copy[i]+res;
      count++;
    }
  }
  else{
    res = copy.slice((start));
    let count = 0;
    for(let i=start-1;i>=0;i--){
      if(count!=0&&count%3===0){
        res = ','+res;
      }
      res = copy[i]+res;
      count++;
    }
  }
  return res;
}

console.log(format(12345678));
console.log(format(1234.56));
