/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(w + n)
where
w is number of words in s
n is number of letters in pattern
*/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const keyValueMap = new Map();
  const valueKeyMap = new Map();
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (keyValueMap.has(pattern[i]) && keyValueMap.get(pattern[i]) !== words[i])
      return false;
    if (valueKeyMap.has(words[i]) && valueKeyMap.get(words[i]) !== pattern[i])
      return false;

    keyValueMap.set(pattern[i], words[i]);
    valueKeyMap.set(words[i], pattern[i]);
  }

  return true;
};
// @lc code=end
