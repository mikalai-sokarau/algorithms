/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/*
Complexity:
T: O(n)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }

  return right + 1;
};
// @lc code=end
