/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
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
var findDisappearedNumbers = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; ) {
    const curr = nums[i] - 1;

    if (curr === i || nums[curr] === nums[i]) {
      i++;
    } else {
      [nums[i], nums[curr]] = [nums[curr], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
};
// @lc code=end
