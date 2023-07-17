/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
T: O(N)
S: O(N)
*/
var isAnagram = function(s, t) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            return false;
        }
        
        const value = map.get(t[i]) - 1;

        if (value > 0) {
            map.set(t[i], value);
        } else {
            map.delete(t[i]);
        }
    }

    return map.size === 0;
};
// @lc code=end
