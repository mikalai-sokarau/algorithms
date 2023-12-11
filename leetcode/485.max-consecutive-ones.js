/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */
/*
Complexity:
T: O(n)
S: O(1)
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let counter = 0;

  for (const num of nums) {
    if (num === 1) {
      counter++;
    } else {
      max = Math.max(max, counter);
      counter = 0;
    }
  }

  return Math.max(max, counter);
};
// @lc code=end
