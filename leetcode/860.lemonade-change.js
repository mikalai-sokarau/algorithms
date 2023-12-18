/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */
/*
Complexity:
T: O(n)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (const b of bills) {
    if (b === 5) {
      five++;
    } else if (b === 10) {
      ten++;
      five--;
    } else if (b === 20 && ten) {
      ten--;
      five--;
    } else {
      five -= 3;
    }

    if (five < 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end
