/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/*
Complexity:
T: O(w * l)
S: O(w * l)
where:
l is number of letters in a word
w is number of words
*/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const line1 = new Set('qwertyuiop');
  const line2 = new Set('asdfghjkl');
  const line3 = new Set('zxcvbnm');
  const result = [];

  for (const word of words) {
    const chars = word.toLowerCase().split('');

    if (
      chars.every((char) => line1.has(char)) ||
      chars.every((char) => line2.has(char)) ||
      chars.every((char) => line3.has(char))
    ) {
      result.push(word);
    }
  }

  return result;
};
// @lc code=end
