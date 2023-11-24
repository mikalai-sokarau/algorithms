/*
 * @lc app=leetcode id=1752 lang=javascript
 *
 * [1752] Check if Array Is Sorted and Rotated
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
var check = function (nums) {
  let rotations = 0;

  if (nums[nums.length - 1] > nums[0]) rotations++;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) rotations++;
  }

  return rotations < 2;
};
// @lc code=end
