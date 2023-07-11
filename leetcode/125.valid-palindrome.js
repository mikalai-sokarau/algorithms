/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/*
T: O(N)
S: O(1)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lowerCased = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let leftP = 0;
    let rightP = lowerCased.length - 1;

    while (leftP < rightP) {
        if (lowerCased[leftP] !== lowerCased[rightP]) {
            return false;
        }

        leftP++;
        rightP--;
    }

    return true;
};
// @lc code=end

