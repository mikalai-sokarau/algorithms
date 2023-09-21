/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/*
Test:
'abclalalada', 'lalada'   :   5

Complexity:
T: O(n * m)
S: O(1)
*/
const strStr = (haystack, needle) => {
  let left = 0;

  while (left <= haystack.length - needle.length) {
    let right = 0;

    while (right < needle.length && haystack[left + right] === needle[right]) {
      right++;
    }

    if (right === needle.length) {
      return left;
    }

    left++;
  }

  return -1;
};
// @lc code=end
