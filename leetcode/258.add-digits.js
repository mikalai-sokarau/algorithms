/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/*
Complexity:
T: O(n) where n is number of digins in num
S: O(1)
*/
// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let n = num;
  let result = num;

  while (result > 9) {
    result = 0;

    while (n > 0) {
      result += n % 10;
      n = Math.floor(n / 10);
    }

    n = result;
  }

  return result;
};
// @lc code=end
