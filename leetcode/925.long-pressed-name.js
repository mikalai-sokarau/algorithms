/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(1)
*/
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let pressed = 0;
  let pointer = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== typed[pointer]) return false;

    while (typed[pointer] === name[i]) {
      pressed++;
      pointer++;

      if (name[i + 1] === name[i] && typed[pointer] === name[i]) i++;
    }
  }

  if (pressed === name.length) {
    return true;
  } else if (pointer < typed.length) {
    return false;
  }

  return pressed !== name.length;
};
// @lc code=end
