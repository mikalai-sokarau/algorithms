/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/*
T: O(N)
S: O(N)
technique: sliding window
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seenChars = new Map();
    let longest = 0;
    let leftP = 0;
    let rightP = 0;

    while (rightP < s.length) {
        const currentChar = s[rightP];

        if (!seenChars.has(currentChar)) {
            seenChars.set(currentChar, rightP);
        } else {
            const prevSeenCharIndex = seenChars.get(currentChar);
            
            for (let i = prevSeenCharIndex; i >= leftP; i--) {
                seenChars.delete(s[i]);
            }
            
            leftP = prevSeenCharIndex + 1;
            seenChars.set(currentChar, rightP);
        }
        
        longest = Math.max(longest, seenChars.size);
        rightP++;
    }

    return longest;
};
// @lc code=end

