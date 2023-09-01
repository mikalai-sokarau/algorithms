/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

/*
T: O(n)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  const result = [];
  let row = 0;
  let col = 0;

  for (let i = 0; i < r; i++) {
    result.push([]);

    for (let j = 0; j < c; j++) {
      result[i].push(mat[row][col]);

      col++;

      if (col === mat[0].length) {
        col = 0;
        row++;
      }
    }
  }

  return result;
};
// @lc code=end
