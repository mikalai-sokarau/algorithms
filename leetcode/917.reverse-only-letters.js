/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(n)
where n is the number of letters in the string
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const chars = s.split``;
  let left = 0;
  let right = s.length - 1;
  const isLetter = (char) => char.match(/^[a-zA-Z]$/);

  while (left < right) {
    if (!isLetter(s[left])) {
      left++;
      continue;
    }
    if (!isLetter(s[right])) {
      right--;
      continue;
    }

    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join``;
};
// @lc code=end
