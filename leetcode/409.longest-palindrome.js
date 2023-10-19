/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */
/*
Complexity:
T: O(n)
S: O(n)
*/
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const pairs = new Set();
  let length = 0;

  for (const char of s) {
    if (pairs.has(char)) {
      pairs.delete(char);
      length += 2;
    } else {
      pairs.add(char);
    }
  }

  if (pairs.size) {
    length++;
  }

  return length;
};
// @lc code=end
