/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */
/*
T: O(N)
S: O(N)
*/

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    const chars = s.split('');

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '(') {
            stack.push(i);
        } else if (chars[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                chars[i] = '';
            }
        }
    }

    while (stack.length) {
        chars[stack.pop()] = '';
    }

    return chars.join('');
};
// @lc code=end

