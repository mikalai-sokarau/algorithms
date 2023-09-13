/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/*
T: O(n)
S: O(n)
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }

  let max = [0, 0];

  for (const pair of Object.entries(map)) {
    if (pair[1] > max[1]) {
      max = pair;
    }
  }

  return max[0];
};
// @lc code=end
