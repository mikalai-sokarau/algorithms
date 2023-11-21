/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(n)
where n is number of letters in string
*/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let str = s;

  for (let i = 0; i < s.length; i++) {
    if (str === goal) return true;

    str = str.slice(1) + str[0];
  }

  return false;
};

// var rotateString = function(s, goal) {
//   if (s.length !== goal.length) return false;
//   return s.concat(s).includes(goal);
// };
// @lc code=end

rotateString('abcde', 'cdeab');
