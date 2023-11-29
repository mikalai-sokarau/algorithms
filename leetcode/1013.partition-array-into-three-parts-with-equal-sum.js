/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */
/*
Complexity:
T: O(n)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  let sum = 0;

  for (const n of arr) {
    sum += n;
  }

  const average = sum / 3;
  let counter = 0;
  sum = 0;

  for (const n of arr) {
    sum += n;

    if (sum === average) {
      counter++;
      sum = 0;
    }
  }

  return counter >= 3;
};
// @lc code=end
