/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

/*
Complexity:
T: O(n)
S: O(n) where n is the number of items in nums1
*/
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const result = [];

  for (const n of nums2) {
    if (set.has(n)) {
      result.push(n);
      set.delete(n);
    }
  }

  return result;
};
// @lc code=end
