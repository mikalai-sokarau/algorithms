/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const map = {};
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (map[pattern[i]] && map[pattern[i]] !== words[i]) {
      return false
    } else {
      map[pattern[i]] = words[i];
    }
  }

  return true;
};
// @lc code=end

