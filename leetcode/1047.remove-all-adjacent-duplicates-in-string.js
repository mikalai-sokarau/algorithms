/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(n)
*/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    const curr = stack[stack.length - 1];

    if (char === curr) stack.pop();
    else stack.push(char);
  }

  return stack.join('');
};
// @lc code=end
