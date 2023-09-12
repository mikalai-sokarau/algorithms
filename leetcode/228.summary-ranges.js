/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) {
    return [];
  }

  const ranges = [];
  let left = 0;
  let right = 0;
  let prev = 0;

  while (right < nums.length) {
    if (nums[right] === nums[prev] || nums[right] === nums[prev] + 1) {
    } else if (nums[left] == nums[prev]) {
      ranges.push(nums[left].toString());
      left = right;
    } else if (right - left > 1) {
      ranges.push(nums[left] + '->' + nums[prev]);
      left = right;
    }

    prev = right;
    right++;
  }

  ranges.push(
    nums[left] === nums[prev]
      ? nums[left].toString()
      : nums[left] + '->' + nums[prev]
  );

  return ranges;
};
// @lc code=end
