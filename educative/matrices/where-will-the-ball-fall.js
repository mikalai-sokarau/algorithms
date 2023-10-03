/*
Statement:
Statement You have n balls and a 2D grid of size m×n representing a box.
The box is open on the top and bottom sides.
Each cell in the box has a diagonal that can redirect a ball to the right or the left.
You must drop n balls at each column’s top.
The goal is to determine whether each ball will fall out of the bottom or become stuck in the box.
Each cell in the grid has a value of 1 or −1.
1 represents that the grid will redirect the ball to the right.
−1 represents that the grid will redirect the ball to the left.
A ball gets stuck if it hits a V-shaped pattern between two grids or if a grid redirects the ball into either wall of the box.
The solution should return an array of size n, with the ℎ-ith element indicating the column that the ball falls out of,
or it becomes −1 if it’s stuck.
If the ball drops from column x and falls out from column y, then in the result array,
index x contains value y.


Test:
[                            [
  [ 1,  1,  1, -1, -1],   -   [\ \ \ / /],
  [ 1,  1,  1, -1, -1],   -   [\ \ \ / /],
  [-1, -1, -1,  1,  1],   -   [/ / / \ \],        :      [1,−1,−1,−1,−1]
  [ 1,  1,  1,  1, -1],   -   [\ \ \ \ /],
  [-1, -1, -1, -1, -1]]   -   [/ / / / /]]
                               0 1 2 3 4


[
  [ 1,  1,  1],
  [-1, -1, -1],
  [ 1,  1,  1],     :   [0,1,−1]
  [-1, -1, -1]]


Complexity:
T: O(m * n)
S: O(1)
*/

function findExitColumn(grid) {
  /*
    1. Initialize a loop that will put a ball to the grid n times.
    2. If current value is 1 check the right cell, if it's -1 or it's out of grid add -1 to the results array.
    3. If current value is -1 check the left cell, if it's 1 or it's out of grid add -1 to the results array.
    4. If current value is 1, choose a bottom-right sell, otherwise choose a bottom-left.
    5. Repeat steps 2-4 until the last row is checked.
  */
  const result = [];

  for (let i = 0; i < grid[0].length; i++) {
    let col = i;

    for (let row = 0; row < grid.length; row++) {
      if (col < 0 || col >= grid[0].length) {
        break;
      }
      if (grid[row][col] === 1 && grid[row][col + 1] === 1) {
        col++;
      } else if (grid[row][col] === -1 && grid[row][col - 1] === -1) {
        col--;
      } else {
        col = -1;
      }
    }

    if (col >= 0 && col < grid[0].length) {
      result.push(col);
    } else {
      result.push(-1);
    }
  }

  return result;
}

console.log(
  findExitColumn([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1],
  ])
);

console.log(
  findExitColumn([
    [1, 1, 1],
    [-1, -1, -1],
    [1, 1, 1],
    [-1, -1, -1],
  ])
);
