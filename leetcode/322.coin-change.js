/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */
/*
Complexity:
T: O(c * a)
S: O(a)
where c is coins, a is amount
*/
// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
