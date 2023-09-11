/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        for (let i = 0; i < matrix[0].length; i++) {
          matrix[r][i] = matrix[r][i] === 0 ? '*' : 0;
        }
        break;
      }
    }
  }

  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 0; r < matrix.length; r++) {
      if (matrix[r][c] === '*') {
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][c] = 0;
        }
        break;
      }
    }
  }
};

// @lc code=end
