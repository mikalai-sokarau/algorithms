/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(1)
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  const isIncreasing = nums[0] <= nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    if (isIncreasing && nums[i - 1] > nums[i]) return false;
    if (!isIncreasing && nums[i - 1] < nums[i]) return false;
  }

  return true;
};
// @lc code=end
