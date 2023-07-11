/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/*
T: O(N)
S: O(N)
*/
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const pairs = {
        '[': ']',
        '{': '}',
        '(': ')',
    };

    for (let i = 0; i <= s.length; i++) {
        if (pairs[s[i]]) {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            const expected = pairs[last];

            if (s[i] !== expected) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
// @lc code=end

