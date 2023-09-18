/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/*
T: O(n)
S: O(1)
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === nums[left]) {
      right++;
    } else {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
// @lc code=end
