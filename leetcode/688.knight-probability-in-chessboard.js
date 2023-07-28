/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var directions = [
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
    [-1, -2],
];
/*
T: O(N^2 x K)
S: O(N^2 x K)
Technique: DP top-down + memoization
*/
var knightProbability = function (n, k, row, column) {
    const cache = new Array(k + 1).fill(0)
        .map(() => new Array(n).fill(0)
        .map(() => new Array(n).fill(undefined)));

    return move(n, k, row, column, cache);
};

var move = (n, k, row, column, cache) => {
    if (row < 0 || column < 0 || row >= n || column >= n) {
        return 0;
    }
    if (k === 0) {
        return 1;
    }
    if (cache[k][row][column] !== undefined) {
        return cache[k][row][column];
    }

    let probability = 0;

    for (let [r, c] of directions) {
        probability += move(n, k - 1, row + r, column + c, cache) / directions.length;
    }
    
    cache[k][row][column] = probability;

    return probability;
}
// @lc code=end