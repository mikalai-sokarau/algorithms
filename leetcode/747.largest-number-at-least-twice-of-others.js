/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
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
var dominantIndex = function (nums) {
  let max = Number.MIN_VALUE;
  let second = Number.MIN_VALUE;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      second = max;
      index = i;
      max = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }

  return max / 2 >= second ? index : -1;
};
// @lc code=end
