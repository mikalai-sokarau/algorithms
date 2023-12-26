/*
 * @lc app=leetcode id=1160 lang=javascript
 *
 * [1160] Find Words That Can Be Formed by Characters
 */
/*
Complexity:
T: O(n + m * k)
S: O(n * m)
where n is the number if characters in chars
m is the number of words
k is the nubmer of chars
*/
// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const map = {};
  let sum = 0;

  for (const c of chars) {
    map[c] = (map[c] ?? 0) + 1;
  }

  for (const word of words) {
    const copy = { ...map };
    let counter = 0;

    for (const char of word) {
      if (!copy[char]) break;

      copy[char]--;
      counter++;
    }

    if (counter === word.length) {
      sum += counter;
    }
  }

  return sum;
};
// @lc code=end
