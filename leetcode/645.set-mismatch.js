/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */
/*
Complexity:
T: O(n)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  for (let i = 0; i < nums.length; ) {
    const curr = nums[i] - 1;

    if (curr === i || nums[curr] === curr + 1) {
      i++;
    } else {
      [nums[curr], nums[i]] = [nums[i], nums[curr]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
};
// @lc code=end
