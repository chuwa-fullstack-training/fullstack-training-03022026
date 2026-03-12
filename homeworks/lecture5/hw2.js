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
  let l=0,r = str.length-1;
  while(l<r){
    [str[l],str[r]]=[str[r],str[l]];
    l++;
    r--;
  }
  let prev = 0;
  for(let i=0;i<=str.length;i++){
    if(str[i]===' ' || i===str.length){
      let l=prev,r=i-1;
      while(l<r){
        [str[l],str[r]]=[str[r],str[l]];
        l++;
        r--;
      }
      prev = i+1;
    }
  }
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));