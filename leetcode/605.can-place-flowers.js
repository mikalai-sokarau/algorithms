/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(1)
*/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let flowersLeft = n;
  let blocked = false;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      if (blocked) flowersLeft++;

      blocked = true;
    } else if (blocked) {
      blocked = false;
    } else {
      flowersLeft--;

      blocked = true;
    }
  }

  return flowersLeft <= 0;
};
// @lc code=end
