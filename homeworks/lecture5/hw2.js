/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseL(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
function reverseWords(str) {
  // your code here
  reverseL(str, 0, str.length - 1);
  let i = 0;
  while (i < str.length) {
    let l = i;
    while (i < str.length && str[i] !== ' ') {
      i++;
    }
    reverseL(str, l, i - 1);
    i++;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input)
