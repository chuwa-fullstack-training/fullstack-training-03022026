/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  let result = []
  // nums2 first because the case 2 Output: [9, 4]
  for(let i = 0; i < nums2.length; i++) {
    for(let j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j]){
        if (!result.includes(nums2[i])) {
          result.push(nums2[i]);
        }
      }
    }
  }

  return result;
};

console.log(intersection([1,2,2,1], [2,2])); // [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [9,4]