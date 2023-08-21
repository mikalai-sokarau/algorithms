/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/*
T: O(n + m)
S: O(1) if we concider that there are only 26 letters in the alphabet, so the hashmap cannot take more space.
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineMap = {}
    
    for (let letter of magazine) {
        magazineMap[letter] = (magazineMap[letter] ?? 0) + 1;
    }

    for (let letter of ransomNote) {
        if (magazineMap[letter]) {
            magazineMap[letter]--;
        } else {
            return false;
        }
    }

    return true;
};
// @lc code=end

