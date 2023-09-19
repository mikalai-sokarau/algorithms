/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
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
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; ) {
    const curr = nums[i];

    if (curr < 0 || curr > nums.length || curr === nums[curr]) {
      i++;
    } else {
      [nums[i], nums[curr]] = [nums[curr], nums[i]];
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }

  return nums.length;
};
// @lc code=end
