/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/*
test:
[1,2,3]   :   [1,2,4]
[9,9,9]   :   [1,0,0,0]

T: O(n)
S: O(1)
*/

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let p = digits.length - 1; p >= 0; p--) {
    if (digits[p] < 9) {
      digits[p]++;
      break;
    } else {
      digits[p] = 0;
    }

    if (p === 0) {
      digits.push(0);
      digits[0] = 1;
    }
  }

  return digits;
};
// @lc code=end
plusOne([9]);
