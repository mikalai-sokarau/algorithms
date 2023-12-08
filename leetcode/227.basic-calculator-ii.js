/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */
/*
Complexity:
T: O(n)
S: O(n)
*/
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let sign = '+';
  let num = '';

  s = s.replace(' ', '');

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) num += s[i];
    if (isNaN(s[i]) || i === s.length - 1) {
      num = Number(num);

      switch (sign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(parseInt(stack.pop() / num));
          break;
      }

      num = '';
      sign = s[i];
    }
  }

  return stack.reduce((a, b) => a + b);
};
// @lc code=end
