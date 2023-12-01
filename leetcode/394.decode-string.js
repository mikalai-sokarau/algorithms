/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */
/*
Complexity:
T: O(n + g) where g is the number of groups inside s
S: O(l * g) where l is the number of letters inside a group
*/
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
      continue;
    }

    let str = '';
    let top = stack.pop();

    while (top !== '[') {
      str = top + str;
      top = stack.pop();
    }

    let num = '';
    top = stack.pop();

    while (!isNaN(parseInt(top))) {
      num = top + num;
      top = stack.pop();
    }

    stack.push(top);
    stack.push(str.repeat(Number(num)));
  }

  return stack.join('');
};
// @lc code=end
