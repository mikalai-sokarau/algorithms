/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Test:
[1,2,3,4]   :   [2]
[1,2,1,0]   :   [0]

Complexity:
T: O()
S: O()
*/
var thirdMax = function (nums) {
  let [first, second, third] = new Array(3).fill(-Infinity);

  for (const n of nums) {
    if ([first, second, third].includes(n)) {
      continue;
    }

    if (n > first) {
      [first, second, third] = [n, first, second];
    } else if (n > second) {
      [second, third] = [n, second];
    } else if (n > third) {
      third = n;
    }
  }

  return third === -Infinity ? first : third;
};
// @lc code=end
