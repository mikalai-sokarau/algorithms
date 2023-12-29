/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
/*
Complexity:
T: O(logn)
S: O(1)
*/
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let top = n;
  let bottom = 0;

  while (true) {
    const pick = Math.ceil((top - bottom) / 2) + bottom;
    const response = guess(pick);

    if (response < 0) {
      top = pick;
    } else if (response > 0) {
      bottom = pick;
    } else {
      return pick;
    }
  }
};
// @lc code=end
