/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */
/*
Complexity:
T: O(s) where s is the numbers of stones
S: O(j) where j is the number of jewels
*/
// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels);
  let counter = 0;

  for (const stone of stones) {
    if (set.has(stone)) counter++;
  }

  return counter;
};
// @lc code=end
