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

var knightProbability = function (n, k, row, column) {
    const cache = Array.from({ length: n }, () => new Array(n).fill(false));

    return move(n, k, row, column, cache);
};

var move = (n, k, row, column, cache) => {
    if (k === 0) {
        return 1;
    }
    if (cache[row][column]) {
        return cache[row][column];
    }

    const validSteps = [];

    for (let [dirR, dirC] of directions) {
        const r = row + dirR;
        const c = column + dirC;

        if (r < 0 || c < 0 || r >= n || c >= n) {
            continue;
        }

        validSteps.push([r, c]);
    }

    let probability = validSteps.length / directions.length;


    // let stepsProbability = 0;

    for (let step of validSteps) {
        cache[step[0]][step[1]] = move(n, k - 1, step[0], step[1], cache) / directions.length;
        probability += cache[step[0]][step[1]];
    }

    // probability *= (stepsProbability / validSteps.length) || 0;

    return probability;
}
// @lc code=end

