/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  function helper(l, r){
    while (l < r){
      [str[l], str[r]] =[str[r], str[l]];
      l += 1;
      r -= 1;
    }
  }
  helper(0, str.length-1); // reverse the whole string by using the helper
  let start =0;
  for (let i =0; i <= str.length; i++){
    // reverse each word back to normal 
    // start with the last reversed word's char and stop when reach space
    if (i === str.length || str[i] ===' '){
      helper(start, i-1);
      start = i + 1;

    }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(''));