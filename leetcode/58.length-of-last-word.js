/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (length > 0) break;
    } else {
      length++;
    }
  }

  return length;
};
// @lc code=end
