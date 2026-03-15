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
  let left = 0;
  let right = str.length - 1;
  
  while(left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }

  // reverse each word
  let first = 0;
  
  for(let i = 0; i <= str.length; i++){
    if (i === str.length || str[i] === ' '){
      left = start;
      right = i - 1;

      while(left < right) {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
      }

      start = i + 1; // after while loop, i becomes the most right one of the word

    }
  }
  
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);