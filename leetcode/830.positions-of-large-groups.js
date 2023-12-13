/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let fast = 0;
  let slow = 0;

  while (fast < s.length) {
    if (s[fast] !== s[fast + 1]) {
      if (fast - slow >= 2) result.push([slow, fast]);

      slow = fast + 1;
    }

    fast++;
  }

  return result;
};
// @lc code=end
