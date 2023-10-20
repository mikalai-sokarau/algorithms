/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */
/*
Complexity:
T: O(n * m)
S: O(1)
*/
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] !== 1) {
        continue;
      }
      if (grid[row][col - 1] !== 1) {
        perimeter++;
      }
      if (grid[row][col + 1] !== 1) {
        perimeter++;
      }
      if (row - 1 < 0 || grid[row - 1][col] !== 1) {
        perimeter++;
      }
      if (row + 1 === grid.length || grid[row + 1][col] !== 1) {
        perimeter++;
      }
    }
  }

  return perimeter;
};
// @lc code=end
