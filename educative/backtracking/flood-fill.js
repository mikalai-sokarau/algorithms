/*
Statement:
We are given the following values as input to begin with: The coordinates of a source cell, i.e., sr and sc.
A target value, target. An (m×n) grid.
Our task is to perform flood fill by updating the values of the four directionally connected cells,
which have the same value as the source cell with the target value.
How to perform flood fill: Suppose that a (4×4) grid has a source value of 1 at coordinates [1,1].
We perform flood fill on its neighboring cells only if they have the same source value as this cell.
Once all adjacent cells are updated, return the new grid after performing flood fill.
If no neighboring cell has a value equal to the source cell,
only update the source cell with the target value and return the updated grid.


Test:
Input:
[
  [1,0,1],
  [1,1,1],
  [1,0,1],
], 1, 2, 3
Output:
[
  [3,0,3],
  [3,3,3],
  [3,0,3],
], 1, 2, 3


Complexity:
T: O(n*m)
S: O(n*m)
*/

function floodFill(grid, sr, sc, target) {
  return floodCell(grid, sr, sc, grid[sr][sc], target);
}

function floodCell(grid, row, col, from, to) {
  if (
    row < 0 ||
    col < 0 ||
    row === grid.length ||
    col === grid[1].length ||
    grid[row][col] === to ||
    grid[row][col] !== from
  ) {
    return grid;
  }

  grid[row][col] = to;

  floodCell(grid, row + 1, col, from, to);
  floodCell(grid, row - 1, col, from, to);
  floodCell(grid, row, col + 1, from, to);
  floodCell(grid, row, col - 1, from, to);

  return grid;
}

console.log(
  floodFill(
    [
      [1, 1, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
    ],
    4,
    3,
    3
  )
);
