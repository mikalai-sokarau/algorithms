/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
T: O(n)
S: O(1)
*/
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (const n of nums) {
    rightSum += n;
  }

  for (let i = 0; i < nums.length; i++) {
    const currentSum = nums[i];

    rightSum -= currentSum;

    if (rightSum === leftSum) {
      return i;
    }

    leftSum += currentSum;
  }

  return -1;
};
// @lc code=end
