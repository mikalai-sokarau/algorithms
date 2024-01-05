/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */
/*
Complexity:
T: O(nd)
S: O(nd)
where nd is the length of numbers remained after defision numerator with denominator
*/
// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) {
    return '0';
  }

  let result = '';

  if (Math.sign(numerator) !== Math.sign(denominator)) {
    result += '-';
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  result += Math.floor(numerator / denominator);

  let remainder = numerator % denominator;

  if (!remainder) {
    return result;
  }

  result += '.';

  const map = new Map();

  while (remainder) {
    if (map.has(remainder)) {
      const index = map.get(remainder);

      result = result.slice(0, index) + `(${result.slice(index)})`;
      break;
    }

    map.set(remainder, result.length);

    remainder *= 10;
    result += Math.floor(remainder / denominator);
    remainder %= denominator;
  }

  return result;
};
// @lc code=end
