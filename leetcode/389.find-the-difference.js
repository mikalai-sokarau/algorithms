/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/*
T: O(n)
S: O(1) if we concider that there is only 26 letters in the English alphabet
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const lettersMap = {};

    for (const letter of s) {
        lettersMap[letter] = (lettersMap[letter] ?? 0) + 1;
    }

    for (const letter of t) {
        if (!lettersMap[letter]) {
            return letter;
        }

        lettersMap[letter]--;
    }
};
// @lc code=end

