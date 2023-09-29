/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
/*
Test:
[1,4],2   :   4 (1,2,4,5)
[1,2],2   :   3 (1,2,3)

Complexity:
T: O(n)
S: O(1)
*/
var findPoisonedDuration = function (timeSeries, duration) {
  let totalPoisoned = 0;
  let poisonEnd = 0;

  for (const start of timeSeries) {
    if (poisonEnd > start) {
      totalPoisoned -= poisonEnd - start;
    }

    poisonEnd = start + duration;
    totalPoisoned += duration;
  }

  return totalPoisoned;
};
// @lc code=end
