/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
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
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isSubPalindromeValid(s, right, left + 1) || isSubPalindromeValid(s, right - 1, left);
        }

        left++;
        right--;
    }

    return true;
};

const isSubPalindromeValid = (s, right, left) => {
    while (right > left) {
        if (s[right] !== s[left]) {
            return false
        }

        right--;
        left++;
    }

    return true;
}
// @lc code=end

