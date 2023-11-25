/*
 * @lc app=leetcode id=1394 lang=javascript
 *
 * [1394] Find Lucky Integer in an Array
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(n)
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  let max = -1;

  for (const item of arr) {
    map.set(item, (map.get(item) ?? 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (key === value) max = Math.max(max, key);
  }

  return max;
};
// @lc code=end
