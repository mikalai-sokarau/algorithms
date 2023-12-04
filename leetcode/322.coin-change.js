/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [];
  let min = Infinity;

  for (const c of coins) {
    dp[c] = 1;
  }

  var findFewest = (sum, numOfCoins) => {};

  findFewest(0, 0);

  if (min === Infinity) {
    return -1;
  }

  return min;
};

// @lc code=end

// console.log(coinChange([1, 2, 5], 100));
