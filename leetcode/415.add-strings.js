/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */
/*
Complexity:
T: O(n)
S: O(n)
*/
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const result = [];
  let carry = false;

  for (let i = 1; i <= Math.max(num1.length, num2.length); i++) {
    let sum =
      Number(num1[num1.length - i] ?? 0) + Number(num2[num2.length - i] ?? 0);

    if (carry) {
      sum++;
      carry = false;
    }

    if (sum > 9) {
      carry = true;
      result.push(String(sum - 10));
    } else {
      result.push(String(sum));
    }
  }

  if (carry) {
    result.push('1');
  }

  return result.reverse().join('');
};
// @lc code=end
