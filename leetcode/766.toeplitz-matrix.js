/*
 * @lc app=leetcode id=766 lang=javascript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

/*
test: [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]

T: O(n)
S: O(1)
*/
var isToeplitzMatrix = function (matrix) {
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 1; c < matrix[0].length; c++) {
      if (matrix[r][c] !== matrix[r - 1][c - 1]) {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end
