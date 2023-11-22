/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(n)
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  const map2 = {};

  for (const i of arr) {
    map[i] = (map[i] ?? 0) + 1;
  }

  for (const i of Object.values(map)) {
    if (map2[i]) return false;
    map2[i] = true;
  }

  return true;
};
// @lc code=end
