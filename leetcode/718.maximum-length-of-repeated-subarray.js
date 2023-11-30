/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */
/*
Complexity:
T: O(n2)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let max = 0;

  for (let i = 0; i < nums1.length - max; i++) {
    for (let j = 0; j < nums2.length - max; j++) {
      if (nums1[i] === nums2[j]) {
        let i1 = i;
        let j1 = j;

        while (
          nums1[i1] === nums2[j1] &&
          i1 < nums1.length &&
          j1 < nums2.length
        ) {
          i1++;
          j1++;
        }

        max = Math.max(max, i1 - i);
      }
    }
  }

  return max;
};
// @lc code=end
