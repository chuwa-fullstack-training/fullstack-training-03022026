// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); //0.30000

console.log(0.1 + 0.2 == 0.3); // false, need ===

console.log(1 +  "2" + "2"); // 122

console.log(1 +  +"2" + "2"); // 32， +‘2’ will turen to number 2, then is 3 + string 2 is 32

console.log(1 +  -"1" + "2"); // 2 same as avove

console.log(+"1" +  "1" + "2"); //112

console.log( "A" - "B" + "2"); //NaN2, a - b is nan, then nan concatenates with srting 2

console.log( "A" - "B" + 2); //NaN

console.log("0 || 1 = "+(0 || 1)); // 0 || 1 =1

console.log("1 || 2 = "+(1 || 2)); 1 //|| 2 = 1

console.log("0 && 1 = "+(0 && 1)); //0 && 1 = 0

console.log("1 && 2 = "+(1 && 2)); //1 && 2 = 1

console.log(false == '0'); // true

console.log(false === '0'); // false