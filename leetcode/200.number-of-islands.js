/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/*
T: O(N)
S: O(N)
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const seen = grid.map(row => (row.map(() => false)));
    let islands = 0;
  
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (seen[row][col] === true) {
                continue;
            }

            const current = grid[row][col];

            if (current === '1') {
                bfs(grid, row, col, seen);
                islands++;
            } else if (current === '0') {
                seen[row][col] = true;
            }
        }
    }

    return islands;
};

var bfs = (grid, r, c, seen) => {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
        return;
    }
    if (grid[r][c] === '0' || seen[r][c] === true) {
        seen[r][c] = true;
        return;
    }

    seen[r][c] = true;

    bfs(grid, r - 1, c, seen);
    bfs(grid, r, c + 1, seen);
    bfs(grid, r + 1, c, seen);
    bfs(grid, r, c - 1, seen);
}

/*
bfs
const testMatrix = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const numberOfIslands = function(matrix) {
  if(matrix.length === 0) return 0;
  let islandCount = 0;

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === 1) {
        islandCount++;
        matrix[row][col] = 0;
        const queue = [];
        queue.push([row, col]);

        while(queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for(let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue;

            if(matrix[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
  }

  return islandCount;
}
*/
// @lc code=end