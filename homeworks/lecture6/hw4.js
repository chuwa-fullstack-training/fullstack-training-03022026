/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let nums = num.toString();
  let parts = nums.split(".");

  let intPart = parts[0];
  let decimalPart = parts[1];

  let result = "";
  let count = 0;

  for (let i = intPart.length - 1; i >= 0; i--) {
    result = intPart[i] + result;
    count++;

    if (count % 3 ===0 && i!== 0){
      result = "," + result;
    }
  }

  if (decimalPart !== undefined) {
    return result + "." + decimalPart;
  }
  
  return result;

}


console.log(format(12345678));   // 12,345,678
console.log(format(1234.56));    // 1,234.56
console.log(format(123));        // 123
console.log(format(123456789));  // 123,456,789